
// You can write more code here

/* START OF COMPILED CODE */

class fallpainting extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? -45);

		// painting
		const painting = scene.physics.add.sprite(0, 45, "painting_09_light");
		painting.scaleX = 0.16226974163237182;
		painting.scaleY = 0.16226974163237182;
		painting.body.bounce.y = 0.4;
		painting.body.checkCollision.left = false;
		painting.body.checkCollision.right = false;
		painting.body.pushable = false;
		painting.body.immovable = true;
		painting.body.setSize(500, 320, false);
		this.add(painting);

		// block
		const block = scene.physics.add.sprite(0, 14, "block_wall_top");
		block.scaleX = 0.13505697432288202;
		block.scaleY = 0.22052135873899112;
		block.visible = false;
		block.body.bounce.y = 0.4;
		block.body.checkCollision.down = false;
		block.body.checkCollision.left = false;
		block.body.checkCollision.right = false;
		block.body.pushable = false;
		block.body.immovable = true;
		block.body.setSize(749, 29, false);
		this.add(block);

		this.painting = painting;
		this.block = block;

		/* START-USER-CTR-CODE */


this.scene.physics.world.enable(this);

this.body.setBounceY(0.3);
this.body.checkCollision.left=false;
this.body.checkCollision.right=false;

		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	block;

	/* START-USER-CODE */



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
