
// You can write more code here

/* START OF COMPILED CODE */

class clamb extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "purple_01", frame);

		this.scaleX = 0.23229305857377247;
		this.scaleY = 0.23229305857377247;
		scene.physics.add.existing(this, false);
		this.body.setSize(606, 557, false);

		/* START-USER-CTR-CODE */


		this.scene.time.addEvent({ delay: 5000, callback:() => {


				console.log('test clamb');
					this.play('clambclap');


			this.scene.time.addEvent({ delay: 600, callback:() => {
					this.ShootBall();
						}, callbackScope: this,repeat:0 });

}, callbackScope: this,repeat:-1 });
		/* END-USER-CTR-CODE */
	}
	/* START-USER-CODE */

ShootBall(){

	this.ball = this.scene.physics.add.sprite(this.x, this.y, "dung_ball").setScale(0.25);
	this.ball.body.setVelocityY(-100);
	this.ball.body.setGravityY(-120);
	//this.ball.body.setVelocityX(-300);
	this.ball.body.setAngularVelocity(-200);
	//this.ball.alpha=0.8;
	//this.ball.tint = "#FFFFFF";

	this.ball1 = this.scene.physics.add.sprite(this.x, this.y, "dung_ball").setScale(0.25);
	this.ball1.body.setVelocityY(-180);
	this.ball1.body.setVelocityX(-190);
	this.ball1.body.setGravityY(-120);
	this.ball1.body.setAngularVelocity(-200);
	//this.ball1.alpha=0.8;

	this.ball2 = this.scene.physics.add.sprite(this.x, this.y, "dung_ball").setScale(0.25);
this.ball2.body.setVelocityY(-188);
	this.ball2.body.setVelocityX(200);
	this.ball2.body.setGravityY(-120);
	this.ball2.body.setAngularVelocity(-200);
	//this.ball2.alpha=0.8;

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
