
// You can write more code here

/* START OF COMPILED CODE */

class Broom extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "broom2", frame);

		this.scaleX = 0.2814569510748994;
		this.scaleY = 0.2814569510748994;
		this.angle = -17;
		scene.physics.add.existing(this, false);
		this.body.collideWorldBounds = true;
		this.body.setSize(153, 617, false);

		/* START-USER-CTR-CODE */

		this.CollidCat=false;

		this.SweepFloor();

		this.clean=false;

		this.tweenBroom;
		this.direction=false;
		this.scene.physics.add.collider(this,this.scene.bottom);		
		this.scene.UpdateGroup.add(this);
		this.AttachOnce=true;
		//this.setPipeline('Light2D');

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

		SweepAttack(){

		//console.log('test broom attack');

			this.scene.physics.moveToObject(this, this.scene.catPlayer, 1000);				

					this.scene.time.addEvent({ delay: 800, callback:() => {

							if(this.CollidCat==false){

									this.scene.physics.moveToObject(this, this.scene.bottom, 1000);	

					this.scene.time.addEvent({ delay: 1200, callback:() => {

							//this.body.setVelocityX(-60);

						this.BackToSweeping();

					}, callbackScope: this,repeat:0 });

								this.tweenBroom.resume();
								//this.CollidCat=true;
										}
									}, callbackScope: this,repeat:0 });

								//this.scene.time.addEvent({ delay:1800, callback:() => {

								//this.setVelocityY(0);	
								//this.setVelocityX(-100);
								//this.tweenBroom.resume() ;

						//}, callbackScope: this,repeat:0 });

							this.scene.time.addEvent({ delay: 3300, callback:() => {
						//	this.angle=0;

							this.AttachOnce=true;
							this.tweenBroom.resume() ;
								this.checkFloor();
								}, callbackScope: this,repeat:0 });

		};

	checkFloor(){
		if(this.AttachOnce && this.body.blocked.down==false){
	this.body.setVelocityY(150);
	}

	};

	BackToSweeping(){

		if(this.body.blocked.down==false){
			this.setVelocityY(80);
		}


		if(this.direction){
				this.setVelocityX(150);
				this.setVelocityY(0);


		}else{

		this.setVelocityX(-150);
				this.setVelocityY(0);
		};



	};


	SweepFloor()
				{

		this.tweenBroom=this.scene.tweens.add({
            targets: this,
         	angle:"+=40",
			duration:400,
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1,
        });

		this.setVelocityX(-150);
	};



update(){


	if(this.AttachOnce && this.body.blocked.down==false){
	this.body.setVelocityY(150);
	}


	if(this.scene.catPlayer.x-this.x<400 && this.x-this.scene.catPlayer.x<400 && this.y-this.scene.catPlayer.y<300 ){

		if(this.AttachOnce && this.clean==false){
			this.SweepAttack();
			this.AttachOnce=false;
		}
	};


	if(this.body.blocked.left){

				this.setVelocityX(150);
				this.direction=true;
		}else

			if(this.body.blocked.right){
				this.setVelocityX(-150);
				this.direction=false;
		}

}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
