
// You can write more code here

/* START OF COMPILED CODE */

class EnemyBird extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "__black_bird_01_fly_straight_000", frame);

		this.scaleX = 0.17560046104104182;
		this.scaleY = 0.17560046104104182;
		scene.physics.add.existing(this, false);
		this.body.collideWorldBounds = true;
		this.body.onWorldBounds = true;
		this.body.setSize(546, 464, false);

		/* START-USER-CTR-CODE */

		this.tweenBird=false;

		this.scene.UpdateGroup.add(this);
	this.play('FlyRedBird');

		if(this.tweenBird){
			this.scene.tweens.add({
            targets: this,
         	x:"-=3000",
	 duration:10000,
	//scale:{start: 0.1, to: 0.5 },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1,
			flipX:true,

        });
		}

		else{

			this.body.setVelocityX(-300);

		}


		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	update(){

if(this.body.blocked.left){
this.body.setVelocityX(300);
this.flipX=true;
}

if(this.body.blocked.right){
this.body.setVelocityX(-300);
this.flipX=false;
}





	};

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
