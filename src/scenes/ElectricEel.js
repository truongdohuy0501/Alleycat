
// You can write more code here

/* START OF COMPILED CODE */

class ElectricEel extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// electriceelinside
		const electriceelinside = scene.physics.add.sprite(0, 0, "__electric_eel_swimming_000");
		electriceelinside.scaleX = 0.4355370492586864;
		electriceelinside.scaleY = 0.4355370492586864;
		electriceelinside.body.collideWorldBounds = true;
		electriceelinside.body.onWorldBounds = true;
		electriceelinside.body.setOffset(0, 150);
		electriceelinside.body.setSize(450, 50, false);
		this.add(electriceelinside);

		// spark2
		const spark2 = scene.physics.add.sprite(-8, 49, "large_spark_04");
		spark2.scaleX = -0.10391480115514963;
		spark2.scaleY = -0.10391480115514963;
		spark2.angle = -2;
		spark2.visible = false;
		spark2.body.setSize(779, 299, false);
		this.add(spark2);

		// spark1
		const spark1 = scene.physics.add.sprite(-4, -34, "large_spark_02");
		spark1.scaleX = 0.12957014567667574;
		spark1.scaleY = 0.12957014567667574;
		spark1.angle = 2;
		spark1.visible = false;
		spark1.body.setSize(779, 293, false);
		this.add(spark1);

		this.electriceelinside = electriceelinside;
		this.spark2 = spark2;
		this.spark1 = spark1;
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */

	}
awake(){
	this.electriceelinside.play('SwimEel');
	this.scene.EelsGroup.add(this.electriceelinside);

	this.RNDEel=Phaser.Math.Between(0,2000);

		this.scene.time.addEvent({ delay:this.RNDEel, callback:() => {

			this.electriceelinside.play('SwimEel');

		}, callbackScope: this,repeat:0});

	this.scene.physics.world.enable(this);
	//this.scene.physics.world.enable(this.electriceelinside);

		//this.electriceel.setFrame('large_spark_02'):
		this.SpeedY=30;
	//	console.log('this speed '+ this.Speed);
		this.electriceelinside.setVelocityX(-this.Speed);
			this.spark1.setVelocityX(-this.Speed);
			this.spark2.setVelocityX(-this.Speed);

			this.electriceelinside.setVelocityY(this.SpeedY);
			this.spark1.setVelocityY(this.SpeedY);
			this.spark2.setVelocityY(this.SpeedY);

			//this.RND=Phaser.Math.Between(0,200); distance, speeds
			this.scene.time.addEvent({ delay:this.distance, callback:() => {



				if(this.Speed>1){
				this.electriceelinside.flipX=true;
				}else{
				this.electriceelinside.flipX=false;
				}


			this.electriceelinside.body.setVelocityX(this.Speed);
			this.spark1.body.setVelocityX(this.Speed);
			this.spark2.body.setVelocityX(this.Speed);
			this.Speed*=-1;


			}, callbackScope: this,repeat:-1});

	this.scene.time.addEvent({ delay:1000, callback:() => {
				//	console.log(this.electriceel.SpeedY);

					if(	this.SpeedY<0){
						this.SpeedY=40;


					}
					else if(this.SpeedY>0){
						this.SpeedY=-40;

					}

			this.electriceelinside.setVelocityY(this.SpeedY);
			this.spark1.setVelocityY(this.SpeedY);
			this.spark2.setVelocityY(this.SpeedY);

}, callbackScope: this,repeat:-1});


		this.RNDEel=Phaser.Math.Between(0,1100);
		this.scene.time.addEvent({ delay:this.RNDEel, callback:() => {

			this.scene.time.addEvent({ delay:2200, callback:() => {



this.spark1.visible=true;
this.spark2.visible=true;

	this.scene.time.addEvent({ delay:100, callback:() => {

this.spark1.visible=false;
this.spark2.visible=false;
}, callbackScope: this,repeat:0});



}, callbackScope: this,repeat:-1});
}, callbackScope: this,repeat:0});



		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	electriceelinside;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	spark2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	spark1;
	/** @type {number} */
	Speed = 300;
	/** @type {number} */
	distance = 200;

	/* START-USER-CODE */



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
