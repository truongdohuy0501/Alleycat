
// You can write more code here

/* START OF COMPILED CODE */

class explosion extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "explosion_02", frame);

		scene.physics.add.existing(this, false);
		this.body.setSize(595, 512, false);

		/* START-USER-CTR-CODE */
	this.play('explosion');


		this.on('animationcomplete', () => {
        this.destroy();
    });
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
