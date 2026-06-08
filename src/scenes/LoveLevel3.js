
// You can write more code here

/* START OF COMPILED CODE */

class LoveLevel3 extends BaseScene {

	constructor() {
		super("LoveLevel3");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// sky
		const sky = this.add.image(591, -1483, "sky");
		sky.scaleX = 1.0825492526253053;
		sky.scaleY = 4.849045235396515;
		sky.tintTopLeft = 14291474;
		sky.tintTopRight = 1518946;
		sky.tintBottomLeft = 12549501;
		sky.tintBottomRight = 12751480;

		// heartPlatform1
		const heartPlatform1 = new HeartPlatform(this, -92.99999999999994, 622);
		this.add.existing(heartPlatform1);
		heartPlatform1.scaleX = 0.6859590093117656;
		heartPlatform1.scaleY = 0.8;
		heartPlatform1.visible = true;

		// heartPlatform2
		const heartPlatform2 = new HeartPlatform(this, -92.99999999999994, 414);
		this.add.existing(heartPlatform2);
		heartPlatform2.scaleX = 0.6859590093117656;
		heartPlatform2.scaleY = 0.8;
		heartPlatform2.visible = true;

		// heartPlatform3
		const heartPlatform3 = new HeartPlatform(this, -92.99999999999994, 215);
		this.add.existing(heartPlatform3);
		heartPlatform3.scaleX = 0.6859590093117656;
		heartPlatform3.scaleY = 0.8;
		heartPlatform3.visible = true;

		// feline
		const feline = this.physics.add.sprite(1108, -2833, "__white_cat_sitting_011");
		feline.scaleX = 0.18762080856624375;
		feline.scaleY = 0.18762080856624375;
		feline.body.setSize(636, 582, false);

		// heartPlatform4
		const heartPlatform4 = new HeartPlatform(this, -92.99999999999994, 7);
		this.add.existing(heartPlatform4);
		heartPlatform4.scaleX = 0.6859590093117656;
		heartPlatform4.scaleY = 0.8;
		heartPlatform4.visible = true;

		// heartPlatform5
		const heartPlatform5 = new HeartPlatform(this, -92.99999999999994, -178);
		this.add.existing(heartPlatform5);
		heartPlatform5.scaleX = 0.6859590093117656;
		heartPlatform5.scaleY = 0.8;
		heartPlatform5.visible = true;

		// heartPlatform6
		const heartPlatform6 = new HeartPlatform(this, -92.99999999999994, -367);
		this.add.existing(heartPlatform6);
		heartPlatform6.scaleX = 0.6859590093117656;
		heartPlatform6.scaleY = 0.8;
		heartPlatform6.visible = true;

		// rectangle_2
		const rectangle_2 = this.add.rectangle(550, -1200, 128, 128);
		rectangle_2.scaleX = 14;
		rectangle_2.scaleY = 0.025;
		rectangle_2.isFilled = true;
		rectangle_2.fillColor = 657673;

		// rectangle
		const rectangle = this.add.rectangle(534, -1502, 128, 128);
		rectangle.scaleX = 14;
		rectangle.scaleY = 0.025;
		rectangle.isFilled = true;
		rectangle.fillColor = 657673;

		// rectangle_3
		const rectangle_3 = this.add.rectangle(532, -1812, 128, 128);
		rectangle_3.scaleX = 14;
		rectangle_3.scaleY = 0.025;
		rectangle_3.isFilled = true;
		rectangle_3.fillColor = 657673;

		// rectangle_4
		const rectangle_4 = this.add.rectangle(536, -2156, 128, 128);
		rectangle_4.scaleX = 14;
		rectangle_4.scaleY = 0.025;
		rectangle_4.isFilled = true;
		rectangle_4.fillColor = 657673;

		// rectangle_5
		const rectangle_5 = this.add.rectangle(555, -2482, 128, 128);
		rectangle_5.scaleX = 14;
		rectangle_5.scaleY = 0.025;
		rectangle_5.isFilled = true;
		rectangle_5.fillColor = 657673;

		// heartPlatform7
		const heartPlatform7 = new HeartPlatform(this, -92.99999999999989, -555);
		this.add.existing(heartPlatform7);
		heartPlatform7.scaleX = 0.6859590093117656;
		heartPlatform7.scaleY = 0.8;
		heartPlatform7.visible = true;

		// health1
		const health1 = this.physics.add.sprite(210, -1200, "100-percent");
		health1.scaleX = 0.2821823989654226;
		health1.scaleY = 0.2821823989654226;
		health1.tintTopLeft = 12603472;
		health1.tintTopRight = 7156274;
		health1.tintBottomLeft = 14419719;
		health1.tintBottomRight = 4925994;
		health1.body.setSize(274, 236, false);

		// health2
		const health2 = this.physics.add.sprite(1018, -1494, "100-percent");
		health2.scaleX = 0.2821823989654226;
		health2.scaleY = 0.2821823989654226;
		health2.tintTopLeft = 12603472;
		health2.tintTopRight = 7156274;
		health2.tintBottomLeft = 14419719;
		health2.tintBottomRight = 4925994;
		health2.body.setSize(274, 236, false);

		// health3
		const health3 = this.physics.add.sprite(118, -1805, "100-percent");
		health3.scaleX = 0.2821823989654226;
		health3.scaleY = 0.2821823989654226;
		health3.tintTopLeft = 12603472;
		health3.tintTopRight = 7156274;
		health3.tintBottomLeft = 14419719;
		health3.tintBottomRight = 4925994;
		health3.body.setSize(274, 236, false);

		// health4
		const health4 = this.physics.add.sprite(992, -2161, "100-percent");
		health4.scaleX = 0.2821823989654265;
		health4.scaleY = 0.2821823989654265;
		health4.tintTopLeft = 12603472;
		health4.tintTopRight = 7156274;
		health4.tintBottomLeft = 14419719;
		health4.tintBottomRight = 4925994;
		health4.body.setSize(274, 236, false);

		// health5
		const health5 = this.physics.add.sprite(180, -2484, "100-percent");
		health5.scaleX = 0.2821823989654265;
		health5.scaleY = 0.2821823989654265;
		health5.tintTopLeft = 12603472;
		health5.tintTopRight = 7156274;
		health5.tintBottomLeft = 14419719;
		health5.tintBottomRight = 4925994;
		health5.body.setSize(274, 236, false);

		// health6
		const health6 = this.physics.add.sprite(1783, -2517, "100-percent");
		health6.scaleX = 0.47071298923293736;
		health6.scaleY = 0.47071298923293736;
		health6.tintTopLeft = 10328035;
		health6.tintTopRight = 15723242;
		health6.tintBottomLeft = 3041247;
		health6.tintBottomRight = 5676474;
		health6.body.setSize(274, 236, false);

		// catPlayer
		const catPlayer = new CatPlayer(this, 74, 562);
		this.add.existing(catPlayer);
		catPlayer.body.collideWorldBounds = true;
		catPlayer.body.onWorldBounds = true;

		// solimage
		const solimage = this.physics.add.sprite(-133, -1373, "treble-clef-1279909_1280");
		solimage.scaleX = 0.20890184898355846;
		solimage.scaleY = 0.20890184898355846;
		solimage.body.setSize(751, 1280, false);

		// sol2
		const sol2 = this.physics.add.sprite(1199, -1682, "treble-clef-1279909_1280");
		sol2.scaleX = 0.20890184898355646;
		sol2.scaleY = 0.20890184898355646;
		sol2.body.setSize(751, 1280, false);

		// sol3
		const sol3 = this.physics.add.sprite(-99, -2003, "treble-clef-1279909_1280");
		sol3.scaleX = 0.20890184898355646;
		sol3.scaleY = 0.20890184898355646;
		sol3.body.setSize(751, 1280, false);

		// sol4
		const sol4 = this.physics.add.sprite(1226, -2341, "treble-clef-1279909_1280");
		sol4.scaleX = 0.20890184898355646;
		sol4.scaleY = 0.20890184898355646;
		sol4.body.setSize(751, 1280, false);

		// sol5
		const sol5 = this.physics.add.sprite(-96, -2669, "treble-clef-1279909_1280");
		sol5.scaleX = 0.20890184898355646;
		sol5.scaleY = 0.20890184898355646;
		sol5.body.setSize(751, 1280, false);

		// littlecloud
		const littlecloud = this.physics.add.sprite(1107, -2788, "100-percent");
		littlecloud.scaleX = 0.3697974866799745;
		littlecloud.scaleY = 0.3229739733656646;
		littlecloud.tintTopLeft = 13705248;
		littlecloud.tintTopRight = 11812157;
		littlecloud.tintBottomLeft = 7618110;
		littlecloud.tintBottomRight = 4534834;
		littlecloud.body.setSize(270, 231, false);

		// enemyCat1
		const enemyCat1 = new EnemyCat(this, 30, 309);
		this.add.existing(enemyCat1);

		// blockcatleft
		const blockcatleft = this.physics.add.sprite(-153, -516, "block_wall_top");
		blockcatleft.scaleX = -0.028434271794876897;
		blockcatleft.scaleY = 180;
		blockcatleft.visible = false;
		blockcatleft.body.pushable = false;
		blockcatleft.body.immovable = true;
		blockcatleft.body.setSize(749, 29, false);

		// blockcatright
		const blockcatright = this.physics.add.sprite(1271, -500, "block_wall_top");
		blockcatright.scaleX = -0.028434271794876897;
		blockcatright.scaleY = 180;
		blockcatright.visible = false;
		blockcatright.body.pushable = false;
		blockcatright.body.immovable = true;
		blockcatright.body.setSize(749, 29, false);

		// enemyCat
		const enemyCat = new EnemyCat(this, 1260, 60);
		this.add.existing(enemyCat);

		// enemyCat_1
		const enemyCat_1 = new EnemyCat(this, 34, -191);
		this.add.existing(enemyCat_1);

		// enemyCat_2
		const enemyCat_2 = new EnemyCat(this, 225, -440);
		this.add.existing(enemyCat_2);

		// enemyCat_3
		const enemyCat_3 = new EnemyCat(this, 557, -691);
		this.add.existing(enemyCat_3);

		// boxwhite
		const boxwhite = this.physics.add.sprite(1153, 576, "Box white");
		boxwhite.scaleX = 0.43263200065643936;
		boxwhite.scaleY = 0.43263200065643936;
		boxwhite.body.setSize(135, 127, false);

		// healthpresent
		const healthpresent = this.physics.add.sprite(1153, 581, "health");
		healthpresent.scaleX = 0.11764599051269731;
		healthpresent.scaleY = 0.10138635796759601;
		healthpresent.body.setSize(274, 236, false);

		// heartPlatform1 (prefab fields)
		heartPlatform1.AllHearts = true;

		// heartPlatform2 (prefab fields)
		heartPlatform2.AllHearts = false;

		// heartPlatform3 (prefab fields)
		heartPlatform3.AllHearts = false;

		// heartPlatform4 (prefab fields)
		heartPlatform4.AllHearts = false;

		// heartPlatform5 (prefab fields)
		heartPlatform5.AllHearts = false;

		// heartPlatform6 (prefab fields)
		heartPlatform6.AllHearts = false;

		// heartPlatform7 (prefab fields)
		heartPlatform7.AllHearts = false;

		// enemyCat1 (prefab fields)
		enemyCat1.speed = 160;

		// enemyCat (prefab fields)
		enemyCat.speed = 120;

		// enemyCat_1 (prefab fields)
		enemyCat_1.speed = 188;

		// enemyCat_2 (prefab fields)
		enemyCat_2.speed = 190;

		// enemyCat_3 (prefab fields)
		enemyCat_3.speed = 190;

		this.sky = sky;
		this.heartPlatform1 = heartPlatform1;
		this.heartPlatform2 = heartPlatform2;
		this.heartPlatform3 = heartPlatform3;
		this.feline = feline;
		this.heartPlatform4 = heartPlatform4;
		this.heartPlatform5 = heartPlatform5;
		this.heartPlatform6 = heartPlatform6;
		this.heartPlatform7 = heartPlatform7;
		this.health1 = health1;
		this.health2 = health2;
		this.health3 = health3;
		this.health4 = health4;
		this.health5 = health5;
		this.health6 = health6;
		this.catPlayer = catPlayer;
		this.solimage = solimage;
		this.sol2 = sol2;
		this.sol3 = sol3;
		this.sol4 = sol4;
		this.sol5 = sol5;
		this.littlecloud = littlecloud;
		this.enemyCat1 = enemyCat1;
		this.blockcatleft = blockcatleft;
		this.blockcatright = blockcatright;
		this.enemyCat = enemyCat;
		this.enemyCat_1 = enemyCat_1;
		this.enemyCat_2 = enemyCat_2;
		this.enemyCat_3 = enemyCat_3;
		this.boxwhite = boxwhite;
		this.healthpresent = healthpresent;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	sky;
	/** @type {HeartPlatform} */
	heartPlatform1;
	/** @type {HeartPlatform} */
	heartPlatform2;
	/** @type {HeartPlatform} */
	heartPlatform3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	feline;
	/** @type {HeartPlatform} */
	heartPlatform4;
	/** @type {HeartPlatform} */
	heartPlatform5;
	/** @type {HeartPlatform} */
	heartPlatform6;
	/** @type {HeartPlatform} */
	heartPlatform7;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	health1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	health2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	health3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	health4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	health5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	health6;
	/** @type {CatPlayer} */
	catPlayer;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	solimage;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	sol2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	sol3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	sol4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	sol5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	littlecloud;
	/** @type {EnemyCat} */
	enemyCat1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	blockcatleft;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	blockcatright;
	/** @type {EnemyCat} */
	enemyCat;
	/** @type {EnemyCat} */
	enemyCat_1;
	/** @type {EnemyCat} */
	enemyCat_2;
	/** @type {EnemyCat} */
	enemyCat_3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	boxwhite;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	healthpresent;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.LoveHeartsGroup=this.add.group();
		this.UpdateGroup=this.add.group();
		this.LoveHeartsGroupArrow=this.add.group();
		this.ArrowGroup=this.add.group();
		this.EnemyCatsGroup=this.add.group();
		this.StickGroup=this.add.group();
		this.BallGroup=this.add.group();

		this.GotHer=false;

			this.WhichObjectHangOn;

			
	this.lovetheme=this.sound.add('Lovelevel');
	this.goaltheme=this.sound.add('missiongoal');

	this.lovetheme.setVolume(0.3);
		this.lovetheme.play();

		this.CatchPresent=false;
		this.cameras.main.setZoom(0.65);


		this.physics.world.setBounds(-200,-3150,1500,4050);
		this.cameras.main.setBounds(-200,-3150,1500,3850);

	this.time.addEvent({ delay: 3500, callback:() => {

this.ThrowBallFeline();


	}, callbackScope: this,repeat:-1 });

		//this.physics.world.setBounds(-300,-750,1000, 1530);
		//this.cameras.main.setBounds(-300,-750,1000, 1530);

			//this.CreatePlatform(this.heartPlatform1);


		this.editorCreate();

				this.time.addEvent({ delay: 1100, callback:() => {

			console.log('shoot arrow');
			this.ShootArrowLeft(-1400,500);

			this.time.addEvent({ delay: 1600, callback:() => {

			this.ShootArrowRight(-1400,500);

			}, callbackScope: this,repeat:0 });


	}, callbackScope: this,repeat:-1 });

			this.time.addEvent({ delay: 1000, callback:() => {

					this.EnemyCatWalkLeftRight(this.catPlayer);

				}, callbackScope: this,repeat:-1 });

	this.heartPlatform1.AllRedHearts=true;
	this.heartPlatform2.AllRedHearts=true;
	this.heartPlatform3.AllRedHearts=true;

		this.physics.add.collider(this.catPlayer,this.blockcatright);
		this.physics.add.collider(this.catPlayer,this.blockcatleft);

		this.physics.add.collider(this.EnemyCatsGroup,this.blockcatleft);
		this.physics.add.collider(this.EnemyCatsGroup,this.blockcatright);

		this.physics.add.overlap(this.ArrowGroup,this.LoveHeartsGroupArrow,this.ChangeHeart,null,this);
			this.physics.add.overlap(this.catPlayer,this.ArrowGroup,this.FallThroughFloor,null,this);

			this.physics.add.overlap(this.catPlayer,this.boxwhite,this.PickUpPresent,null,this);


	 this.tweenmusic=this.tweens.add({
            targets: [this.sol2,this.solimage,this.sol3,this.sol4,this.sol5,this.feline,this.littlecloud],
         	//scaleY:"+=21",
			y:"+=50",
	 duration:1000,
	//scale:{start: 0.1, to: 0.5 },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1,

        });


	 this.tweenStrain=this.tweens.add({
            targets: [this.health1,this.health3,this.health5,],
         	//scaleY:"+=21",
			x:"+=800",
	 duration:3000,
	//scale:{start: 0.1, to: 0.5 },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1,

        });

		 this.tweenStrain=this.tweens.add({
            targets: [this.health2,this.health4,this.feline,this.littlecloud],
         	//scaleY:"+=21",
			x:"-=900",
	 duration:3000,
	//scale:{start: 0.1, to: 0.5 },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1,

        });

		this.physics.add.collider(this.catPlayer,this.LoveHeartsGroup);
		this.physics.add.collider(this.BallGroup,this.LoveHeartsGroup,this.DestroyObject,null,this);
				this.cameras.main.startFollow(this.catPlayer,false,100,0.1,0.2,100);


		this.StickGroup.add(this.health1);
			this.StickGroup.add(this.health2);
				this.StickGroup.add(this.health3);
					this.StickGroup.add(this.health4);
						this.StickGroup.add(this.health5);

		this.heartPlatform2.y=this.heartPlatform1.y-250;
		this.heartPlatform3.y=this.heartPlatform2.y-250;
		this.heartPlatform4.y=this.heartPlatform3.y-250;
		this.heartPlatform5.y=this.heartPlatform4.y-250;
		this.heartPlatform6.y=this.heartPlatform5.y-250;
		this.heartPlatform7.y=this.heartPlatform6.y-250;

		//this.heartPlatform8.y=this.heartPlatform7.y-203;
		//this.heartPlatform9.y=this.heartPlatform8.y-203;
			this.physics.add.overlap(this.catPlayer,this.StickGroup,this.StickToObject,null,this);
			this.physics.add.overlap(this.catPlayer,this.health1,this.StickToObjectto,null,this);
			this.physics.add.overlap(this.catPlayer,this.EnemyCatsGroup,this.FallThroughFloor,null,this);
			//this.physics.add.overlap(this.catPlayer,this.EnemyCatsGroup, this.GetHit,null,this);
	}

		EnemyCatWalkLeftRight(Cat){

		this.EnemyCatsGroup.children.iterate(function(child){

if(Math.abs(Cat.y-child.y)<300){
		if(Cat.x-child.x<0){
child.body.setVelocityX(-child.speed);
child.flipX=false;
		}else{

		child.body.setVelocityX(child.speed);	
		child.flipX=true;
		}

}
  });

	}

	DestroyObject(Bomb,floor){


var	tempMatrix = new Phaser.GameObjects.Components.TransformMatrix();
				var	tempParentMatrix = new Phaser.GameObjects.Components.TransformMatrix();
				floor.getWorldTransformMatrix(tempMatrix, tempParentMatrix);
				var d = tempMatrix.decomposeMatrix();
if(Bomb){

	Bomb.destroy();
	this.expo= new explosion(this, d.translateX, d.translateY).setScale(0.3);
console.log('boom');

this.add.existing(this.expo);
}

	}

StickToObjectto(cat,paint){

			//this.time.addEvent({ delay: 50, callback:() => {

//console.log("painting :" + paint.type);
//console.log("painting name:" + paint.name);

this.WhichObjectHangOn=paint;


cat.setTexture('catback2');

		//StickItem=pain.
	cat.angle=0;
if(cat.stick){
	cat.body.setAngularVelocity(0);
	cat.body.setVelocityX(0);
	cat.body.setVelocityY(0);
	cat.setGravityY(0);
	cat.stick=false;
	cat.TouchGround=true;
	cat.PlayJumpOnce=true;
	cat.setTexture('catback2');
	cat.x=paint.x;
	cat.JumpVerticalPaint=false;
	//cat.y=paint.y;
	cat.y=paint.y;

}


	//}, callbackScope: this,repeat:0 });



	}





	ThrowBallFeline(){

this.ball=this.physics.add.sprite(this.feline.x, this.feline.y+50, "bombfeline").setScale(0.25);
this.ball.body.setGravityY(1000);
this.ball.body.setAngularVelocity(350);
this.ball.body.setBounce(0.7)
this.RND=Phaser.Math.Between(-150,150);
this.ball.body.setVelocityX(this.RND);

this.BallGroup.add(this.ball);
	}

	update(){

this.UpdateGroup.children.iterate(function(child){

if(child){

	child.update();

};


		  });

		  this.BallGroup.children.iterate(function(child){

if(child){

	  if(child.body.velocity.y>400){
		child.body.setVelocityY(400);

		}

};


		  });





		  if(this.catPlayer.stick==false){
				this.catPlayer.x=this.WhichObjectHangOn.x;
		}

		if(this.catPlayer.stick==false && this.catPlayer.JumpVerticalPaint==false){

				this.catPlayer.y=this.WhichObjectHangOn.y+15;

		};

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
