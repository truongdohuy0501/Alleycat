
// You can write more code here

/* START OF COMPILED CODE */

class StepBlock extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// rectangle
		const rectangle = scene.add.rectangle(0, 0, 128, 128);
		rectangle.scaleX = 0.8024568684589961;
		rectangle.scaleY = 0.1654153931065709;
		rectangle.isFilled = true;
		rectangle.fillColor = 656645;
		this.add(rectangle);

		// step
		const step = scene.physics.add.sprite(0, 0, "blue_block_slice_32");
		step.blendMode = Phaser.BlendModes.SATURATION;
		step.scaleX = 1.7853425847060893;
		step.scaleY = 0.83647151724745;
		step.tintTopLeft = 6655116;
		step.tintTopRight = 5539985;
		step.tintBottomLeft = 4879478;
		step.tintBottomRight = 5007207;
		step.body.setSize(55, 20, false);
		this.add(step);

		this.rectangle = rectangle;
		this.step = step;

		/* START-USER-CTR-CODE */
		this.scene.physics.world.enable(this);
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	step;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
