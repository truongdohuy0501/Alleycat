
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// progressBar
		const progressBar = this.add.rectangle(348, 315, 256, 20);
		progressBar.setOrigin(0, 0);
		progressBar.isFilled = true;
		progressBar.fillColor = 14737632;

		// preloadUpdater
		new PreloadBarUpdaterScript(progressBar);

		// progressBarBg
		const progressBarBg = this.add.rectangle(348, 315, 256, 20);
		progressBarBg.setOrigin(0, 0);
		progressBarBg.fillColor = 14737632;
		progressBarBg.isStroked = true;

		// container_1
		const container_1 = this.add.container(400, 257);
		container_1.scaleX = 0.4211971372410941;
		container_1.scaleY = 0.4211971372410941;
		container_1.visible = false;

		// ellipse_1
		const ellipse_1 = this.add.ellipse(37, 44, 128, 128);
		ellipse_1.scaleX = 0.3906250000000003;
		ellipse_1.scaleY = 0.453125;
		ellipse_1.visible = false;
		ellipse_1.isFilled = true;
		container_1.add(ellipse_1);

		// ellipse
		const ellipse = this.add.ellipse(74, 27, 128, 128);
		ellipse.scaleX = 0.16796874999999978;
		ellipse.scaleY = 0.18750000000000008;
		ellipse.visible = false;
		ellipse.isFilled = true;
		container_1.add(ellipse);

		// ellipse_2
		const ellipse_2 = this.add.ellipse(52, 1, 128, 128);
		ellipse_2.scaleX = 0.15234374999999986;
		ellipse_2.scaleY = 0.22656250000000025;
		ellipse_2.visible = false;
		ellipse_2.isFilled = true;
		container_1.add(ellipse_2);

		// ellipse_3
		const ellipse_3 = this.add.ellipse(23, 0, 128, 128);
		ellipse_3.scaleX = 0.15234374999999986;
		ellipse_3.scaleY = 0.22656250000000025;
		ellipse_3.visible = false;
		ellipse_3.isFilled = true;
		container_1.add(ellipse_3);

		// ellipse_4
		const ellipse_4 = this.add.ellipse(0, 23, 128, 128);
		ellipse_4.scaleX = 0.16796874999999978;
		ellipse_4.scaleY = 0.18750000000000008;
		ellipse_4.visible = false;
		ellipse_4.isFilled = true;
		container_1.add(ellipse_4);

		// text_1
		const text_1 = this.add.text(438, 345, "", {});
		text_1.scaleX = 0.4108083190570566;
		text_1.scaleY = 0.4108083190570566;
		text_1.text = "Loading";
		text_1.setStyle({ "fontFamily": "Goofy", "fontSize": "70px" });

		// container
		const container = this.add.container(482, 227);
		container.scaleX = 0.4211971372410941;
		container.scaleY = 0.4211971372410941;
		container.visible = false;

		// ellipse_5
		const ellipse_5 = this.add.ellipse(37, 44, 128, 128);
		ellipse_5.scaleX = 0.3906250000000003;
		ellipse_5.scaleY = 0.453125;
		ellipse_5.visible = false;
		ellipse_5.isFilled = true;
		container.add(ellipse_5);

		// ellipse_6
		const ellipse_6 = this.add.ellipse(74, 27, 128, 128);
		ellipse_6.scaleX = 0.16796874999999978;
		ellipse_6.scaleY = 0.18750000000000008;
		ellipse_6.visible = false;
		ellipse_6.isFilled = true;
		container.add(ellipse_6);

		// ellipse_7
		const ellipse_7 = this.add.ellipse(52, 1, 128, 128);
		ellipse_7.scaleX = 0.15234374999999986;
		ellipse_7.scaleY = 0.22656250000000025;
		ellipse_7.visible = false;
		ellipse_7.isFilled = true;
		container.add(ellipse_7);

		// ellipse_8
		const ellipse_8 = this.add.ellipse(23, 0, 128, 128);
		ellipse_8.scaleX = 0.15234374999999986;
		ellipse_8.scaleY = 0.22656250000000025;
		ellipse_8.visible = false;
		ellipse_8.isFilled = true;
		container.add(ellipse_8);

		// ellipse_9
		const ellipse_9 = this.add.ellipse(0, 23, 128, 128);
		ellipse_9.scaleX = 0.16796874999999978;
		ellipse_9.scaleY = 0.18750000000000008;
		ellipse_9.visible = false;
		ellipse_9.isFilled = true;
		container.add(ellipse_9);

		// container_2
		const container_2 = this.add.container(1337, 457);
		container_2.scaleX = 0.7321875889227893;
		container_2.scaleY = 0.7321875889227893;

		// ellipse_10
		const ellipse_10 = this.add.ellipse(37, 45, 128, 128);
		ellipse_10.scaleX = 0.3906250000000003;
		ellipse_10.scaleY = 0.453125;
		ellipse_10.isFilled = true;
		container_2.add(ellipse_10);

		// ellipse_11
		const ellipse_11 = this.add.ellipse(74, 28, 128, 128);
		ellipse_11.scaleX = 0.16796874999999978;
		ellipse_11.scaleY = 0.18750000000000008;
		ellipse_11.isFilled = true;
		container_2.add(ellipse_11);

		// ellipse_12
		const ellipse_12 = this.add.ellipse(52, 2, 128, 128);
		ellipse_12.scaleX = 0.15234374999999986;
		ellipse_12.scaleY = 0.22656250000000025;
		ellipse_12.isFilled = true;
		container_2.add(ellipse_12);

		// ellipse_13
		const ellipse_13 = this.add.ellipse(23, 1, 128, 128);
		ellipse_13.scaleX = 0.15234374999999986;
		ellipse_13.scaleY = 0.22656250000000025;
		ellipse_13.isFilled = true;
		container_2.add(ellipse_13);

		// ellipse_14
		const ellipse_14 = this.add.ellipse(0, 24, 128, 128);
		ellipse_14.scaleX = 0.16796874999999978;
		ellipse_14.scaleY = 0.18750000000000008;
		ellipse_14.isFilled = true;
		container_2.add(ellipse_14);

		// text
		const text = this.add.text(393, 238, "", {});
		text.scaleX = 0.8371755262981057;
		text.scaleY = 0.8371755262981057;
		text.text = "AlleyQuest";
		text.setStyle({ "fontFamily": "Goofy", "fontSize": "70px" });

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	preload() {
		const mobile = window.MobileConfig;

		if (mobile?.useLightLoading) {
			this.load.maxParallelDownloads = mobile.parallelDownloads || 3;
			this.editorCreate();
			this.load.pack("menu-extra", "assets/menu-asset-pack.json");
			this.load.on(Phaser.Loader.Events.COMPLETE, () => {
				window.gameAssetsLoaded = false;
				this.scene.start("StartMenuScreen");
			});
			return;
		}

		if (mobile?.isTablet) {
			this.load.maxParallelDownloads = mobile.parallelDownloads || 10;
		}

		this.load.plugin(
			"rexcrtpipelineplugin",
			"https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexcrtpipelineplugin.min.js",
			true
		);

		this.editorCreate();
		this.editorPreload();

		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("StartMenuScreen"));
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
