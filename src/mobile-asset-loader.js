window.MobileAssetLoader = {
	async fetchPackFiles(packUrl) {
		const response = await fetch(packUrl);
		const pack = await response.json();
		const files = [];

		for (const section of Object.values(pack)) {
			if (section && Array.isArray(section.files)) {
				files.push(...section.files);
			}
		}

		return files;
	},

	queueFile(loader, file) {
		const type = file.type;
		const key = file.key;

		if (type === "image") {
			loader.image(key, file.url);
			return;
		}

		if (type === "audio") {
			const url = Array.isArray(file.url) ? file.url : [file.url];
			loader.audio(key, url);
			return;
		}

		if (type === "spritesheet") {
			loader.spritesheet(key, file.url, file.frameConfig);
			return;
		}

		if (type === "font") {
			loader.font(key, file.url, {
				format: file.format,
				descriptors: file.descriptors || {},
			});
			return;
		}

		if (type === "animation") {
			loader.animation(key, file.url);
		}
	},

	loadFilesInBatches(scene, files, options = {}) {
		const batchSize = options.batchSize || 40;
		const onProgress = options.onProgress || function () {};
		const batches = [];

		for (let i = 0; i < files.length; i += batchSize) {
			batches.push(files.slice(i, i + batchSize));
		}

		scene.load.maxParallelDownloads = options.maxParallelDownloads || 2;
		scene.load.reset();

		return new Promise((resolve, reject) => {
			let batchIndex = 0;
			let loadedFiles = 0;
			const totalFiles = files.length;

			const loadNextBatch = () => {
				if (batchIndex >= batches.length) {
					resolve();
					return;
				}

				const batch = batches[batchIndex];
				batchIndex += 1;

				scene.load.once(Phaser.Loader.Events.COMPLETE, () => {
					loadedFiles += batch.length;
					onProgress(Math.min(loadedFiles / totalFiles, 1));
					loadNextBatch();
				});

				scene.load.once(Phaser.Loader.Events.LOAD_ERROR, (fileObj) => {
					reject(new Error("Failed to load " + fileObj.key));
				});

				batch.forEach((file) => this.queueFile(scene.load, file));
				scene.load.start();
			};

			loadNextBatch();
		});
	},

	loadFullGameAssets(scene, onProgress, onComplete) {
		return this.fetchPackFiles("assets/asset-pack.json")
			.then((files) =>
				this.loadFilesInBatches(scene, files, {
					batchSize: window.MobileConfig?.isPhone ? 25 : 40,
					maxParallelDownloads: 2,
					onProgress,
				})
			)
			.then(onComplete);
	},
};
