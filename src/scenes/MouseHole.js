
// You can write more code here

/* START OF COMPILED CODE */

class MouseHole extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// __grey_mouse_walk_000
		const __grey_mouse_walk_000 = scene.add.image(0, 0, "__grey_mouse_walk_000");
		__grey_mouse_walk_000.scaleX = 0.22171945701357465;
		__grey_mouse_walk_000.scaleY = 0.22171945701357465;
		this.add(__grey_mouse_walk_000);

		// cheese
		const cheese = scene.add.rectangle(52, 0, 128, 128);
		cheese.scaleX = 1.6739783141605882;
		cheese.scaleY = 0.6104457024692378;
		cheese.isFilled = true;
		cheese.fillColor = 15068424;
		this.add(cheese);

		// cheesehole
		const cheesehole = scene.add.ellipse(-13, -1, 128, 128);
		cheesehole.scaleX = 0.49804842078431244;
		cheesehole.scaleY = 0.49804842078431244;
		cheesehole.visible = false;
		cheesehole.isFilled = true;
		cheesehole.fillColor = 3158302;
		cheesehole.smoothness = 200;
		this.add(cheesehole);

		this.cheese = cheese;
		this.cheesehole = cheesehole;

		/* START-USER-CTR-CODE */

	this.Mask2 = new Phaser.Display.Masks.BitmapMask(this,this.cheesehole);
	this.Mask2.invertAlpha = true;
	//this.Mask.visible=false;
  	this.cheese.setMask(this.Mask2);

		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	cheese;
	/** @type {Phaser.GameObjects.Ellipse} */
	cheesehole;

	/* START-USER-CODE */



	//this.MakeHole(this.mask1,this.cheesehole,this.cheese);




	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
