
// You can write more code here

/* START OF COMPILED CODE */

class Rat extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "__grey_yellow_eyes_idle_standing_000", frame);

		this.scaleX = 0.2522934220248421;
		this.scaleY = 0.2522934220248421;
		this.flipX = true;
		scene.physics.add.existing(this, false);
		this.body.setOffset(100, 0);
		this.body.setSize(350, 268, false);

		/* START-USER-CTR-CODE */

		this.direction;
		this.speed=200;
		this.RND=Phaser.Math.Between(10,1200);
		this.throwtheme=this.scene.sound.add('throw');	
		this.JustStand=false;

		this.RespectRats=false;
	//this.setPipeline('Light2D');

		if(this.JustStand){
		this.play('RatStand');
		}else {
		}this.play('RatWalk');

		this.scene.time.addEvent({ delay: this.RND, callback:() => {

if(this.active){
		this.scene.time.addEvent({ delay: 2200, callback:() => {
if(this.active){

	if(this.x-this.scene.catPlayer.x<700 && this.scene.catPlayer.x-this.x<700 && this.scene.catPlayer.y-this.y<800){
			this.play('RatStand');
			this.setVelocityX(0);
	this.RNDThrowX1=Phaser.Math.Between(500,1000);
	this.RNDThrowY1=Phaser.Math.Between(100,500);

	this.RNDThrowX2=Phaser.Math.Between(500,1000);
	this.RNDThrowY2=Phaser.Math.Between(100,500);	

			this.ThrowBomb(this.RNDThrowX1,this.RNDThrowY1);
			//this.ThrowBomb(910,450);
			this.ThrowBomb(this.RNDThrowX2,this.RNDThrowY2);
	}
				this.scene.time.addEvent({ delay: 800, callback:() => {
			if(this.active){

					this.play('RatWalk');	

				if(!this.JustStand){

					if(this.direction==false){
					this.setVelocityX(-this.speed);

					}
					if(this.direction==true){
					this.setVelocityX(this.speed);
					}
				};

			};
			}, callbackScope: this,repeat:0 });

				};

		}, callbackScope: this,repeat:-1 });

};
		}, callbackScope: this,repeat:0 });
			this.scene.UpdateGroup.add(this);


		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */


	ThrowBomb(Grav,Speed){
	this.throwtheme.play();
		this.RND=Phaser.Math.Between(0,20);
		this.texturesprite="bomb";

				if(this.RND>17 && this.RespectRats){
		console.log('test throw other stuff');
		//this.texturesprite="cheese";
			this.Bomb= this.scene.physics.add.sprite(this.x, this.y,"full-star-thick-black-border").setScale(0.09);
			this.Bomb.body.setGravityY(Grav);
			this.Bomb.setBounce(0.5);
			this.scene.CatchBallGroup.add(this.Bomb);


		}else{

	this.Bomb= this.scene.physics.add.sprite(this.x, this.y,"bomb").setScale(0.17);
	this.Bomb.body.setGravityY(Grav);
	this.Bomb.setBounce(0.5);
	this.scene.BombsGroup.add(this.Bomb);
		};

	if(this.direction==false){
	this.Bomb.body.setVelocityX(-Speed);
			this.Bomb.body.setAngularVelocity(-this.speed);

	}else{
		this.Bomb.body.setVelocityX(Speed);
		this.Bomb.body.setAngularVelocity(this.speed);
	}

		this.Bomb.body.collideWorldBounds = true;


	}

	update(){

if(this.active){
		//console.log(this.body.velocity.x);

		if(this.body.blocked.right){
		this.body.setVelocityX(-this.speed);
			this.flipX=false;	
			this.direction=false;
		}


		if(this.body.blocked.left){
			this.body.setVelocityX(this.speed);
			this.flipX=true;
			this.direction=true;
		}
};
//	console.log('test rat');


	};

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
