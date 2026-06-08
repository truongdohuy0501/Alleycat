
// You can write more code here

/* START OF COMPILED CODE */

class DogExterior extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "__bad_dog_brown_bite_000", frame);

		this.scaleX = 0.6128554480409794;
		this.scaleY = 0.6128554480409794;
		scene.physics.add.existing(this, false);
		this.body.collideWorldBounds = true;
		this.body.onWorldBounds = true;
		this.body.pushable = false;
		this.body.immovable = true;
		this.body.setOffset(0, 150);
		this.body.setSize(100, 100, false);

		/* START-USER-CTR-CODE */
		this.scene.UpdateGroup.add(this);
		//this.scene.physics.world.enable(this);
		this.play('dogwalk');
		this.body.setVelocityX(-150);
		this.ChaseCat=false;
		this.DogWalkOnce=true;

			this.scene.time.addEvent({ delay: 1000, callback:() => {


			if(this.ChaseCat==true){
				this.DogWalkOnce=true;
			this.play('DogRun');
				this.setScale(0.2);
					this.body.setSize(400, 400, false);
				this.body.setOffset(100,200);
				if(this.scene.catPlayer.x<this.x){
				this.body.setVelocityX(-700);
					this.flipX=false;
				}else if(this.scene.catPlayer.x>this.x){
				this.body.setVelocityX(700);
						this.flipX=true;
				}
			}else{

			//console.log('chasecat false');
				if(this.DogWalkOnce){
				this.play('dogwalk');
				this.body.setSize(150, 150, false);
				this.body.setOffset(0,150);
				this.DogWalkOnce=false;
				}

				this.setScale(0.6);
				if(this.flipX){
				this.body.setVelocityX(150);
				}else{
				this.body.setVelocityX(-150);
				}


			}


	}, callbackScope: this,repeat:-1 });
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	update(){

if(Math.abs(this.scene.catPlayer.x-this.x)<500 && (this.scene.catPlayer.y-this.y)>-60 ){
//console.log('woooof woooooof');
this.ChaseCat=true;
}else{
this.ChaseCat=false;
}


	//console.log('this.chasecat :'+this.ChaseCat);





//console.log('test doggy');
if (this.body.blocked.left ){
this.body.setVelocityX(150);
	this.flipX=true;
}

	if(this.body.blocked.right){
	this.body.setVelocityX(-150);
		this.flipX=false;
	}


}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
