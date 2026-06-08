
// You can write more code here

/* START OF COMPILED CODE */

class RatCannon extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// ropebomber
		const ropebomber = scene.add.tileSprite(-5, -313, 63, 1042, "long_rope_piece");
		ropebomber.scaleX = 0.2;
		ropebomber.tileScaleY = 0.2;
		this.add(ropebomber);

		// rat
		const rat = scene.physics.add.sprite(1, 207, "__rat_idle_standing_000");
		rat.scaleX = 0.25370399879201794;
		rat.scaleY = 0.25370399879201794;
		rat.flipX = true;
		rat.body.setSize(536, 268, false);
		this.add(rat);

		// base
		const base = scene.physics.add.sprite(1, 262, "base");
		base.scaleX = 0.2416764762182544;
		base.scaleY = 0.2416764762182544;
		base.body.setSize(441, 276, false);
		this.add(base);

		// cannon
		const cannon = scene.physics.add.sprite(6, 236, "cannon");
		cannon.scaleX = 0.2291102800493393;
		cannon.scaleY = 0.2291102800493393;
		cannon.body.setSize(465, 235, false);
		this.add(cannon);

		this.ropebomber = ropebomber;
		this.rat = rat;
		this.base = base;
		this.cannon = cannon;
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */

		

		/* END-USER-CTR-CODE */

		// custom definition props
		this.flipRat = false;
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	ropebomber;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	rat;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	base;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cannon;

	/* START-USER-CODE */

	awake(){

this.direction=true;
		this.scene.physics.world.enable(this);
		this.body.setVelocityY(110);
		this.rat.play("RatStand");
		this.whichGroup="bullet";




//this.flipRat=true;

if(this.flipRat){

		this.rat.flipX=false;
		this.cannon.flipX=true;
		this.base.flipX=true;


		this.rat.x-=30;
		this.cannon.x-=30;
		this.base.x-=30;

		//this.x-=50:
}

	//	this.setDepth(100);
	this.RNDX=Phaser.Math.Between(0,2000);
	
	this.scene.time.addEvent({ delay: this.RNDX, callback:() => {

				this.scene.time.addEvent({ delay: 2100, callback:() => {


					if(Math.abs(this.x-this.scene.catPlayer.x<1000)){
					this.shoot();
					}

	}, callbackScope: this,repeat:-1 });

			this.scene.time.addEvent({ delay: 4000, callback:() => {

				if(this.direction){
				this.body.setVelocityY(-130);
					this.direction=false;

				}
				else{
				this.body.setVelocityY(130);
					this.direction=true;
				}




	}, callbackScope: this,repeat:-1 });

		}, callbackScope: this,repeat:0 });



	}

	shoot(){
	console.log('baaaaaang');
	this.Boomtheme=this.scene.sound.add('Boom2');	

	var	tempMatrixbl = new Phaser.GameObjects.Components.TransformMatrix();
	var	tempParentMatrixbl = new Phaser.GameObjects.Components.TransformMatrix();
	this.cannon.getWorldTransformMatrix(tempMatrixbl, tempParentMatrixbl);
	var d = tempMatrixbl.decomposeMatrix();
	this.RNDStar=Phaser.Math.Between(0,10);

				if(	this.RNDStar>550){
				this.imageshot="full-star-thick-black-border";
				this.ScaleBall=0.1;
				this.whichGroup="Star";
				}else{
				this.imageshot="lavaball_line_x1_01";
				this.ScaleBall=0.5;
				this.whichGroup="Bullet";
					};


		if(this.flipRat==true){


	this.Bullet = this.scene.physics.add.sprite(d.translateX-30,d.translateY, this.imageshot).setScale(this.ScaleBall);
		
		
			this.Bullet.body.setVelocityX(-600);

			if(this.whichGroup=="Bullet"){
			this.scene.BulletGroup.add(this.Bullet);
			}else{
			this.scene.StarGroup.add(this.Bullet);
			}
			
		}

		else{
			this.Bullet = this.scene.physics.add.sprite(d.translateX+30,d.translateY, this.imageshot).setScale(this.ScaleBall);
			this.Bullet.body.setVelocityX(600);
				this.Bullet.body.setSize(this.Bullet.body.width/2,this.Bullet.body.height/2);
				if(this.whichGroup=="Bullet"){
			this.scene.BulletGroup.add(this.Bullet);
			}else{
			this.scene.StarGroup.add(this.Bullet);
			}
		}

		this.Bullet.setDepth(1);
		this.Bullet.body.setAngularVelocity(2450);
	//	this.cannon.setDepth(2);
		this.scene.add.existing(this.Bullet);
		this.Boomtheme.play();

		this.cannon.play("CannonShoot");

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
