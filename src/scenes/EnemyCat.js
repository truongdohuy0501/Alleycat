
// You can write more code here

/* START OF COMPILED CODE */

class EnemyCat extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "__black_cat_yellow_eyes_walk_000", frame);

		this.scaleX = 0.19521756568400234;
		this.scaleY = 0.19521756568400234;
		this.flipX = true;
		scene.physics.add.existing(this, false);
		this.body.setOffset(150, 100);
		this.body.setSize(250, 300, false);
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */




		/* END-USER-CTR-CODE */
	}

	/** @type {number} */
	speed = 175;

	/* START-USER-CODE */

			awake()
		{

			this.scene.EnemyCatsGroup.add(this);
			this.body.setVelocityX(this.speed);
			this.play('greycatwalk');
			this.attack=true;
			this.scene.UpdateGroup.add(this);

			this.JustOnceAttack=true;

		}

		update(){

			console.log('test enemycat');
			if(this.body.blocked.left){
		this.body.setVelocityX(this.speed);
this.flipX=true;
		}else if(this.body.blocked.right){
		this.body.setVelocityX(-this.speed);
			this.flipX=false;
		}
		}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
