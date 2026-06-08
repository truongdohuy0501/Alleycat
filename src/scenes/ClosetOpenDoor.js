
// You can write more code here

/* START OF COMPILED CODE */

class ClosetOpenDoor extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? -59);

		this.setInteractive(new Phaser.Geom.Rectangle(-91.63518381537257, -91.33050125924288, 183.27036763074514, 300.66100251848576), Phaser.Geom.Rectangle.Contains);

		// wardrobe
		const wardrobe = scene.physics.add.sprite(0, 59, "light_wardrobe");
		wardrobe.scaleX = 0.27111001128808454;
		wardrobe.scaleY = 0.27111001128808454;
		wardrobe.body.pushable = false;
		wardrobe.body.immovable = true;
		wardrobe.body.setSize(676, 1109, false);
		this.add(wardrobe);

		// door
		const door = scene.add.rectangle(42, 22, 128, 128);
		door.scaleX = 0.635696207443256;
		door.scaleY = 1.616066603887058;
		door.visible = false;
		door.isFilled = true;
		door.fillColor = 0;
		this.add(door);

		this.wardrobe = wardrobe;
		this.door = door;

		/* START-USER-CTR-CODE */
		this.scene.physics.world.enable(this.door);
		this.scene.physics.world.enable(this);

		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	wardrobe;
	/** @type {Phaser.GameObjects.Rectangle} */
	door;

	/* START-USER-CODE */


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
