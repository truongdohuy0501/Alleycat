
// You can write more code here

/* START OF COMPILED CODE */

class Bat extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "__black_bat_fly_mouth_closed_007", frame);

		this.scaleX = 0.3420626051797334;
		this.scaleY = 0.3420626051797334;
		scene.physics.add.existing(this, false);
		this.body.velocity.x = -100;
		this.body.setSize(641, 612, false);

		/* START-USER-CTR-CODE */

		this.scene.UpdateGroup.add(this);

	//	this.setPipeline('Light2D');
		this.RND=Phaser.Math.Between(0,500);

			this.body.setSize(this.width/2, this.height/2, false);

			this.scene.time.addEvent({ delay: this.RND, callback:() => {


					this.play('BatFly');



		 this.scene.tweens.add({
            targets: this,
         	y:"+=180",

	 duration:1000,
	//scale:{start: 0.1, to: 0.5 },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1,

        });
}, callbackScope: this,repeat:0 });

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	update(){


		if(this.body.blocked.left){
		this.body.setVelocityX(400);
		this.flipX=true;
		}

		if(this.body.blocked.right){
		this.body.setVelocityX(-400);
			this.flipX=false;
		}

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
