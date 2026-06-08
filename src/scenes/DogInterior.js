
// You can write more code here

/* START OF COMPILED CODE */

class DogInterior extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? -50);

		// dog
		const dog = scene.physics.add.sprite(0, 50, "__bad_dog_brown_die_005");
		dog.scaleX = 0.2415730350491839;
		dog.scaleY = 0.2415730350491839;
		dog.body.collideWorldBounds = true;
		dog.body.setOffset(150, 300);
		dog.body.setSize(300, 300, false);
		this.add(dog);

		// textz
		const textz = scene.add.text(-74, 72, "", {});
		textz.scaleX = 1.0588235212503805;
		textz.scaleY = 1.0588235212503805;
		textz.tintTopLeft = 16185078;
		textz.text = "Zzz";
		textz.setStyle({ "fontSize": "75px" });
		this.add(textz);

		this.dog = dog;
		this.textz = textz;

		/* START-USER-CTR-CODE */
		this.IdleOnce=true;
		this.scene.UpdateGroup.add(this);
		this.scene.physics.world.enable(this);
		this.StartFuncOnce=true;
		//this.dog.setPipeline('Light2D');
this.DogRunOnce=true;

 this.tweenZzz=this.scene.tweens.add({
            targets: this.textz,
         	y:-80,
	 x:-120,
	 duration:2000,
	scale:{start: 0.1, to: 0.5 },
            ease: 'Sine.easeInOut',
          //  yoyo: true,
            repeat: -1,
        });
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	dog;
	/** @type {Phaser.GameObjects.Text} */
	textz;

	/* START-USER-CODE */
StartDogRunToCat(){

		this.scene.time.addEvent({ delay: 400, callback:() => {
			this.DogRunOnce=true;
			this.textz.destroy();
			 this.tweenZzz.visible=false;
			 this.tweenZzz.destroy();

			if(this.scene.catPlayer.x>this.dog.body.x){

						this.dog.flipX=true;
					}else{

						this.dog.flipX=false;
					}
			if(this.scene.catPlayer.y>590 && this.dog.body.x - this.scene.catPlayer.x<1200 && this.scene.catPlayer.x-this.dog.body.x <1200){

				if(this.DogRunOnce){
			this.dog.play('DogRun');


					if(this.scene.catPlayer.x>this.dog.body.x){
					this.dog.body.setVelocityX(1100);
						this.dog.flipX=true;
					}else{
					this.dog.body.setVelocityX(-1100);
						this.dog.flipX=false;
					}

		this.DogRunOnce=false;
					this.IdleOnce=true;
				}

			}
			else if(this.scene.catPlayer.y<590){

				if(this.IdleOnce){

				this.dog.play('DogIdle');
				this.DogRunOnce=true;
					this.IdleOnce=false;
					this.dog.body.setVelocityX(0);

					};
			}


}, callbackScope: this,repeat:-1 });


}

update(){
//console.log('test dog' +this.scene.catPlayer.y);
	if(this.scene.catPlayer.y>590 &&(this.dog.body.x - this.scene.catPlayer.x< 1300 && this.scene.catPlayer.x-this.x <1300) ){

		if(this.StartFuncOnce){

		//this.dog.play('DogIdle');
		this.StartFuncOnce=false;


			//if(this.DogRunOnce){

				this.StartDogRunToCat();

			}
		}

//	}else{

	//this.dog.setTexture('__bad_dog_brown_die_005');
	//}


	if(this.scene.catPlayer.x>this.dog.body.x){
	//this.dog.flipX=true;

	}else{

	//this.dog.flipX=false;
	}
	//if(this.x - this.scene.catPlayer.x< 520 && this.scene.catPlayer.x-this.x <520){


}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
