
// You can write more code here

/* START OF COMPILED CODE */

class Ghost extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "Ghost", frame);

		scene.physics.add.existing(this, false);
		this.body.setSize(260, 289, false);

		/* START-USER-CTR-CODE */



		this.scene.UpdateGroup.add(this);

		this.RND=Phaser.Math.Between(0,800);

			this.scene.time.addEvent({ delay: this.RND, callback:() => {

					this.play('GhostIdle');

				 this.scene.tweens.add({
            targets: this,
         	y:"+=60",

	 duration:1000,
	//scale:{start: 0.1, to: 0.5 },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1,

        });


}, callbackScope: this,repeat:0 });
		this.body.setVelocityX(-200);
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

update(){


		if(this.body.blocked.left){
		this.body.setVelocityX(200);
		this.flipX=true;
		}

		if(this.body.blocked.right){
		this.body.setVelocityX(-200);
			this.flipX=false;
		}

}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
