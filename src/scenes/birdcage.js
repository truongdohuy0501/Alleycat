
// You can write more code here

/* START OF COMPILED CODE */

class birdcage extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? -12);

		// birdorange
		const birdorange = scene.physics.add.sprite(5, 36, "birdorange");
		birdorange.scaleX = 0.5454883646560752;
		birdorange.scaleY = 0.5454883646560752;
		birdorange.body.collideWorldBounds = true;
		birdorange.body.onWorldBounds = true;
		birdorange.body.setOffset(100, 0);
		birdorange.body.setSize(500, 500, false);
		this.add(birdorange);

		// birdcage
		const birdcage = scene.physics.add.sprite(12, -4, "gold_bird_cage_closed_no_back_bars");
		birdcage.scaleX = 0.2960000040141861;
		birdcage.scaleY = 0.2960000040141861;
		birdcage.body.maxVelocity.x = 400;
		birdcage.body.maxVelocity.y = 500;
		birdcage.body.friction.x = 0;
		birdcage.body.mass = 200;
		birdcage.body.checkCollision.up = false;
		birdcage.body.setSize(170, 200, false);
		this.add(birdcage);

		this.birdorange = birdorange;
		this.birdcage = birdcage;

		/* START-USER-CTR-CODE */
		this.scene.physics.world.enable(this);
		this.body.setOffset(-40,0);
		this.body.checkCollision.up = false;
		

		this.body.setGravityY(1500);
		this.birdorange.play('EnemyBirdFly');
		this.birdorange.setScale(0.1);
		this.StartFlapBool=false;
		this.STartFlapOnce=true;
		this.birdorange.fly=false;
		this.RNDY=Phaser.Math.Between(20,40);
		this.body.setBounce(0.5);
	

	this.RNDYp=Phaser.Math.Between(-20,-400);

	this.scene.UpdateGroup.add(this);

if(this.birdorange.active){

			this.RNDYp=Phaser.Math.Between(-20,-400);
			this.tweenUpDown=this.scene.tweens.add({
            targets: this.birdorange,
         	y:"-=20",
	 		duration:500,
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1,
       						});

									};

		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	birdorange;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	birdcage;

	/* START-USER-CODE */



	CreateBirdie(){

this.Birdie=new BlackBird(this.scene, this.x, this.y).setScale(0.1);

this.scene.add.existing(this.Birdie);


	};



update(){
this.RNDY=Phaser.Math.Between(20,40);
	if(this.active){

	if(this.birdorange.active==false){
	this.destroy();
	}
	if(this.birdcage.visible==false){
		this.birdorange.destroy();
this.birdcage.enable=false;
this.StartFlapBool=true;

this.setInteractive=false;
		//this.y=-200;
		//this.birdorangey+=200;
		if(this.active){
		this.body.checkCollision.left = false;
		this.body.checkCollision.right = false;
		};
		if(this.STartFlapOnce){
		//this.StartFlapping();
		this.STartFlapOnce=false;
		this.tweenUpDown.destroy();
			this.birdorange.fly=true;
			this.CreateBirdie();
	
		}

		else

		{


		};



	};
	};


};


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
