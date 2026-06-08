
// You can write more code here

/* START OF COMPILED CODE */

class StartMenuScreen extends Phaser.Scene {

	constructor() {
		super("StartMenuScreen");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// sky
		this.add.image(650, 352, "sky");

		// cloud1
		const cloud1 = this.physics.add.sprite(917, 633, "cloud_04");
		cloud1.scaleX = 1.7886601415112025;
		cloud1.scaleY = 1.7886601415112025;
		cloud1.alpha = 0.5;
		cloud1.alphaTopLeft = 0.5;
		cloud1.alphaTopRight = 0.5;
		cloud1.alphaBottomLeft = 0.5;
		cloud1.alphaBottomRight = 0.5;
		cloud1.body.setSize(452, 219, false);

		// sun
		const sun = this.add.image(405, -2, "sun");
		sun.scaleX = 0.64913258811027;
		sun.scaleY = 0.64913258811027;
		sun.alpha = 0.4;
		sun.alphaTopLeft = 0.4;
		sun.alphaTopRight = 0.4;
		sun.alphaBottomLeft = 0.4;
		sun.alphaBottomRight = 0.4;

		// backcity
		const backcity = this.add.tileSprite(498, 368, 2048, 840, "near_buildings_layer");
		backcity.scaleX = 0.6835937555569211;
		backcity.scaleY = 0.6835937555569211;
		backcity.alpha = 0.3;
		backcity.alphaTopLeft = 0.3;
		backcity.alphaTopRight = 0.3;
		backcity.alphaBottomLeft = 0.3;
		backcity.alphaBottomRight = 0.3;

		// blocksep
		const blocksep = this.add.nineslice(630, -201, "block_separator_01", undefined, 1136, 0, 269, 184, 0, 0);
		blocksep.scaleX = 0.8876310528642842;
		blocksep.scaleY = 0.5236340513568921;
		blocksep.visible = false;

		// rectangle_3
		const rectangle_3 = this.add.rectangle(511, 293, 128, 128);
		rectangle_3.blendMode = Phaser.BlendModes.DIFFERENCE;
		rectangle_3.scaleX = 7.014415908166983;
		rectangle_3.scaleY = 3.7320320943046883;
		rectangle_3.visible = false;
		rectangle_3.alpha = 0.1;
		rectangle_3.isFilled = true;
		rectangle_3.fillColor = 2315717;
		rectangle_3.strokeColor = 394758;
		rectangle_3.lineWidth = 5;

		// gradientFx
		rectangle_3.postFX.addGradient(16711680, 65280, 0.2, 0, 0, 0, 1, 1);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(507, 324, 128, 128);
		rectangle_1.scaleX = 7.645997510741088;
		rectangle_1.scaleY = 4.332484393017951;
		rectangle_1.visible = false;
		rectangle_1.alpha = 0.3;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 7910861;

		// rectangle_2
		const rectangle_2 = this.add.rectangle(477, 183, 128, 128);
		rectangle_2.blendMode = Phaser.BlendModes.SOFT_LIGHT;
		rectangle_2.scaleX = 4.880854126466027;
		rectangle_2.scaleY = 1.2235915968619884;
		rectangle_2.visible = false;
		rectangle_2.alpha = 0.3;
		rectangle_2.isFilled = true;
		rectangle_2.fillColor = 4746182;

		// Title
		const title = this.add.text(41, 115, "", {});
		title.blendMode = Phaser.BlendModes.HARD_LIGHT;
		title.scaleX = 0.46028986138892664;
		title.scaleY = 0.46028986138892664;
		title.tintTopLeft = 10210006;
		title.tintTopRight = 2304660;
		title.tintBottomLeft = 5604296;
		title.tintBottomRight = 4746683;
		title.text = "Street Cat";
		title.setStyle({ "align": "center", "backgroundColor": "#1d4e5a00", "baselineX": 0, "baselineY": 0, "color": "#a2cfe8ff", "fixedWidth": 2000, "fixedHeight": 300, "fontFamily": "Goofy", "fontSize": "250px", "fontStyle": "bold italic", "stroke": "#121313ff", "strokeThickness": 20, "shadow.offsetX": 10, "shadow.offsetY": 10, "shadow.color": "#0000005e", "shadow.blur": 10, "shadow.stroke": true, "shadow.fill": true, "resolution": 2 });
		title.setPadding({"top":-30});
		title.setWordWrapWidth(title.style.wordWrapWidth, true);

		// shineFx
		title.preFX.addShine(0.5, 0.5, 3, false);

		// fence_1
		const fence_1 = this.add.tileSprite(510, 503, 10000, 188, "dark_wood_fence");
		fence_1.setInteractive(new Phaser.Geom.Rectangle(0, 100, 1200, 188), Phaser.Geom.Rectangle.Contains);
		fence_1.scaleX = 0.6316639691206403;
		fence_1.scaleY = 0.6316639691206403;
		fence_1.alpha = 0.9;
		fence_1.alphaTopLeft = 0.9;
		fence_1.alphaTopRight = 0.9;
		fence_1.alphaBottomLeft = 0.9;
		fence_1.alphaBottomRight = 0.9;
		fence_1.tintTopLeft = 11641249;
		fence_1.tintTopRight = 9470080;
		fence_1.tintBottomLeft = 11837600;
		fence_1.tintBottomRight = 13163739;
		fence_1.tileScaleX = 0.8;

		// openwindowlove
		const openwindowlove = this.add.image(716, -112, "window_01_open");
		openwindowlove.scaleX = 0.7767224245044714;
		openwindowlove.scaleY = 0.7767224245044714;
		openwindowlove.visible = false;

		// rectangle
		const rectangle = this.add.rectangle(473, 434, 128, 128);
		rectangle.scaleX = 2.6757234531577327;
		rectangle.scaleY = 0.6575288795113984;
		rectangle.visible = false;
		rectangle.alpha = 0.3;
		rectangle.isFilled = true;
		rectangle.fillColor = 4746182;
		rectangle.strokeColor = 5722317;

		// StartButton
		const startButton = this.add.text(399, 310, "", {});
		startButton.scaleX = 0.3730005072019504;
		startButton.scaleY = 0.3730005072019504;
		startButton.tintTopLeft = 8568782;
		startButton.tintTopRight = 2303892;
		startButton.tintBottomLeft = 5332190;
		startButton.tintBottomRight = 5537993;
		startButton.text = "Start Demo";
		startButton.setStyle({ "align": "center", "backgroundColor": "#1d4e5a00", "baselineX": 0, "baselineY": 0, "color": "#a2cfe8ff", "fixedWidth": 500, "fixedHeight": 100, "fontFamily": "Goofy", "fontSize": "100px", "fontStyle": "bold italic", "stroke": "#121313ff", "strokeThickness": 10, "shadow.offsetX": 10, "shadow.offsetY": 10, "shadow.color": "#0000005e", "shadow.blur": 10, "shadow.stroke": true, "shadow.fill": true });
		startButton.setPadding({"top":-30});
		startButton.setWordWrapWidth(startButton.style.wordWrapWidth, true);

		// StartButton_1
		const startButton_1 = this.add.text(719, 484, "", {});
		startButton_1.scaleX = 0.30497446801323297;
		startButton_1.scaleY = 0.30497446801323297;
		startButton_1.tintTopLeft = 14527320;
		startButton_1.tintTopRight = 7694384;
		startButton_1.tintBottomLeft = 12676676;
		startButton_1.tintBottomRight = 12757328;
		startButton_1.text = "SandCroc";
		startButton_1.setStyle({ "align": "center", "backgroundColor": "#1d4e5a00", "baselineX": 0, "baselineY": 0, "color": "#8d8559ff", "fixedWidth": 600, "fixedHeight": 200, "fontFamily": "Goofy", "fontSize": "100px", "fontStyle": "bold italic", "stroke": "#121313ff", "strokeThickness": 10, "shadow.offsetX": 10, "shadow.offsetY": 10, "shadow.color": "#0000005e", "shadow.blur": 10, "shadow.stroke": true, "shadow.fill": true });
		startButton_1.setPadding({"top":-30});
		startButton_1.setWordWrapWidth(startButton_1.style.wordWrapWidth, true);

		// StartButton_2
		const startButton_2 = this.add.text(30, 487, "", {});
		startButton_2.scaleX = 0.30497446801323297;
		startButton_2.scaleY = 0.30497446801323297;
		startButton_2.tintTopLeft = 14527320;
		startButton_2.tintTopRight = 7694384;
		startButton_2.tintBottomLeft = 12676676;
		startButton_2.tintBottomRight = 12757328;
		startButton_2.text = "2025";
		startButton_2.setStyle({ "align": "center", "backgroundColor": "#1d4e5a00", "baselineX": 0, "baselineY": 0, "color": "#8d8559ff", "fixedWidth": 600, "fixedHeight": 200, "fontFamily": "Goofy", "fontSize": "100px", "fontStyle": "bold italic", "stroke": "#121313ff", "strokeThickness": 10, "shadow.offsetX": 10, "shadow.offsetY": 10, "shadow.color": "#0000005e", "shadow.blur": 10, "shadow.stroke": true, "shadow.fill": true });
		startButton_2.setPadding({"top":-30});
		startButton_2.setWordWrapWidth(startButton_2.style.wordWrapWidth, true);

		// pavement_narrow_repeating
		const pavement_narrow_repeating = this.add.tileSprite(516, 599, 10000, 146, "pavement_narrow_repeating");
		pavement_narrow_repeating.scaleX = 0.6271756654751143;
		pavement_narrow_repeating.scaleY = 0.8673786344449789;
		pavement_narrow_repeating.flipY = true;
		pavement_narrow_repeating.tileScaleX = 0.6;

		this.cloud1 = cloud1;
		this.backcity = backcity;
		this.blocksep = blocksep;
		this.title = title;
		this.fence_1 = fence_1;
		this.openwindowlove = openwindowlove;
		this.startButton = startButton;
		this.startButton_1 = startButton_1;
		this.startButton_2 = startButton_2;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	cloud1;
	/** @type {Phaser.GameObjects.TileSprite} */
	backcity;
	/** @type {Phaser.GameObjects.NineSlice} */
	blocksep;
	/** @type {Phaser.GameObjects.Text} */
	title;
	/** @type {Phaser.GameObjects.TileSprite} */
	fence_1;
	/** @type {Phaser.GameObjects.Image} */
	openwindowlove;
	/** @type {Phaser.GameObjects.Text} */
	startButton;
	/** @type {Phaser.GameObjects.Text} */
	startButton_1;
	/** @type {Phaser.GameObjects.Text} */
	startButton_2;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.OnlyOnce=true;

		if (window.MobileConfig?.isMobile && this.title?.preFX?.list?.length) {
			this.title.preFX.clear();
		}

//this.cat.play('CatIdle');

this.startButton.setInteractive();

			this.startButton.on('pointerdown', () => {

if(this.OnlyOnce){
	this.OnlyOnce=false;
	console.log('enter scene');

	if (window.MobileConfig?.useLightLoading && !window.gameAssetsLoaded) {
		this.startMobileAssetLoad();
		return;
	}

	this.enterLevel();
}

});

			this.startButton.on('pointerover', () => {

//this.startButton.
this.startButton.setStyle({"fontSize":110});

				});

						this.startButton.on('pointerout', () => {

//this.startButton.
this.startButton.setStyle({"fontSize":100});

				});
	}

	enterLevel() {
		this.meowtheme=this.sound.add('miauw');
		this.meowtheme.play();
		this.cameras.main.fadeOut(3000, 0, 0, 0);

		this.cameras.main.once('camerafadeoutcomplete', () => {
			this.scene.stop();
			this.scene.start("Level");
		});
	}

	startMobileAssetLoad() {
		this.startButton.setText("Loading...");
		this.startButton.disableInteractive();

		const progressBg = this.add.rectangle(400, 360, 280, 18, 0x333333);
		const progressBar = this.add.rectangle(262, 351, 4, 18, 0x88ccff).setOrigin(0, 0);

		MobileAssetLoader.loadFullGameAssets(
			this,
			(progress) => {
				progressBar.width = 256 * progress;
			},
			() => {
				window.gameAssetsLoaded = true;
				this.enterLevel();
			}
		).catch(() => {
			this.startButton.setText("Load failed - tap retry");
			this.startButton.setInteractive();
			this.OnlyOnce = true;
			progressBg.destroy();
			progressBar.destroy();
		});
	}

	update(){

this.backcity.tilePositionX+=0.3;

this.cloud1.x-=0.2;

	}



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
