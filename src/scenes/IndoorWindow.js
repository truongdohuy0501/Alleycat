
// You can write more code here

/* START OF COMPILED CODE */

class IndoorWindow extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// windowout
		const windowout = scene.physics.add.sprite(0, 34, "window_06");
		windowout.scaleX = 0.22587207017263713;
		windowout.scaleY = 0.22587207017263713;
		windowout.body.setOffset(0, 350);
		windowout.body.setSize(200, 100, false);
		this.add(windowout);

		// shadowFx
		windowout.preFX.addShadow(0, 0, 0.1, 1, 0, 1, 1);

		// openwindow
		const openwindow = scene.add.rectangle(0, 71, 128, 128);
		openwindow.scaleX = 0.5098027253782933;
		openwindow.scaleY = 0.46821661403081694;
		openwindow.alpha = 0.5;
		openwindow.isFilled = true;
		openwindow.fillColor = 4615623;
		this.add(openwindow);

		// openwindow2
		const openwindow2 = scene.add.rectangle(0, 0, 128, 128);
		openwindow2.scaleX = 0.5098027253782933;
		openwindow2.scaleY = 0.46821661403081694;
		openwindow2.alpha = 0.5;
		openwindow2.isFilled = true;
		openwindow2.fillColor = 4615623;
		this.add(openwindow2);

		// waythrough
		const waythrough = scene.physics.add.sprite(1, 37, "block_wall_top");
		waythrough.scaleX = 0.13084112124340164;
		waythrough.scaleY = -0.27586206843436334;
		waythrough.visible = false;
		waythrough.body.setSize(749, 29, false);
		this.add(waythrough);

		// light
		const light = scene.add.image(-3, 234, "small_window_light");
		light.scaleX = 0.20809837601817574;
		light.scaleY = 0.35592855457420625;
		light.visible = false;
		this.add(light);

		this.windowout = windowout;
		this.openwindow = openwindow;
		this.openwindow2 = openwindow2;
		this.waythrough = waythrough;
		this.light = light;

		/* START-USER-CTR-CODE */

this.scene.physics.world.enable(this);

		this.waythrough.WindowOpen=false;
		this.Time=7000;
	this.scene.time.addEvent({ delay:1000, callback:() => {



				}, callbackScope: this,repeat:0 });

		this.scene.time.addEvent({ delay:2000, callback:() => {

	this.scene.time.addEvent({ delay:this.Time, callback:() => {
	this.openwindow.visible=false;
	this.openwindow2.visible=false;
	this.waythrough.WindowOpen=true;
	//this.light.visible=true;

	}, callbackScope: this,repeat:0 });

			}, callbackScope: this,repeat:0 });

		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	windowout;
	/** @type {Phaser.GameObjects.Rectangle} */
	openwindow;
	/** @type {Phaser.GameObjects.Rectangle} */
	openwindow2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	waythrough;
	/** @type {Phaser.GameObjects.Image} */
	light;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
