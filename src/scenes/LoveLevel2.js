
// You can write more code here

/* START OF COMPILED CODE */

class LoveLevel2 extends BaseScene {

	constructor() {
		super("LoveLevel2");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// sky
		const sky = this.add.image(672, 98, "sky");
		sky.scaleX = 1.0274793937330668;
		sky.scaleY = 1.866202055783587;
		sky.tintTopLeft = 14291474;
		sky.tintTopRight = 6428439;
		sky.tintBottomLeft = 12549501;
		sky.tintBottomRight = 12751480;

		// heartPlatform1
		const heartPlatform1 = new HeartPlatform(this, -160, 736);
		this.add.existing(heartPlatform1);
		heartPlatform1.visible = true;

		// heartPlatform2
		const heartPlatform2 = new HeartPlatform(this, -160, 512);
		this.add.existing(heartPlatform2);
		heartPlatform2.visible = true;

		// heartPlatform3
		const heartPlatform3 = new HeartPlatform(this, -160, 336);
		this.add.existing(heartPlatform3);
		heartPlatform3.visible = true;

		// heartPlatform4
		const heartPlatform4 = new HeartPlatform(this, -160, 161);
		this.add.existing(heartPlatform4);
		heartPlatform4.visible = true;

		// heartPlatform5
		const heartPlatform5 = new HeartPlatform(this, -160, -16);
		this.add.existing(heartPlatform5);
		heartPlatform5.visible = true;

		// heartPlatform6
		const heartPlatform6 = new HeartPlatform(this, -160, -183);
		this.add.existing(heartPlatform6);
		heartPlatform6.visible = true;

		// catPlayer
		const catPlayer = new CatPlayer(this, -71, 681);
		this.add.existing(catPlayer);
		catPlayer.scaleX = 0.17227296532304928;
		catPlayer.scaleY = 0.17227296532304928;
		catPlayer.flipX = true;
		catPlayer.flipY = false;

		// ladycat
		const ladycat = this.physics.add.sprite(44, -539, "__white_cat_sitting_011");
		ladycat.scaleX = 0.18090295099369608;
		ladycat.scaleY = 0.18090295099369608;
		ladycat.flipX = true;
		ladycat.body.velocity.x = 100;
		ladycat.body.checkCollision.up = false;
		ladycat.body.checkCollision.down = false;
		ladycat.body.setSize(636, 582, false);

		// blockcatleft
		const blockcatleft = this.physics.add.sprite(-224, -221, "block_wall_top");
		blockcatleft.scaleX = -0.028434271794876897;
		blockcatleft.scaleY = 70;
		blockcatleft.visible = false;
		blockcatleft.body.pushable = false;
		blockcatleft.body.immovable = true;
		blockcatleft.body.setSize(749, 29, false);

		// enemycat3
		const enemycat3 = new EnemyCat(this, 96, 476);
		this.add.existing(enemycat3);
		enemycat3.scaleX = 0.18688953222015986;
		enemycat3.scaleY = 0.18688953222015986;

		// blockcatright
		const blockcatright = this.physics.add.sprite(1200, -205, "block_wall_top");
		blockcatright.scaleX = -0.028434271794876897;
		blockcatright.scaleY = 70;
		blockcatright.visible = false;
		blockcatright.body.pushable = false;
		blockcatright.body.immovable = true;
		blockcatright.body.setSize(749, 29, false);

		// enemycat
		const enemycat = new EnemyCat(this, 544, 275);
		this.add.existing(enemycat);
		enemycat.scaleX = 0.18688953222015986;
		enemycat.scaleY = 0.18688953222015986;

		// enemycat_1
		const enemycat_1 = new EnemyCat(this, 224, 72);
		this.add.existing(enemycat_1);
		enemycat_1.scaleX = 0.18688953222015986;
		enemycat_1.scaleY = 0.18688953222015986;

		// enemycat_2
		const enemycat_2 = new EnemyCat(this, 1120, -133);
		this.add.existing(enemycat_2);
		enemycat_2.scaleX = 0.18688953222015986;
		enemycat_2.scaleY = 0.18688953222015986;

		// boxwhite
		const boxwhite = this.physics.add.sprite(1144, 693, "Box white");
		boxwhite.scaleX = 0.43263200065643936;
		boxwhite.scaleY = 0.43263200065643936;
		boxwhite.body.setSize(135, 127, false);

		// healthpresent
		const healthpresent = this.physics.add.sprite(1144, 698, "health");
		healthpresent.scaleX = 0.11764599051269731;
		healthpresent.scaleY = 0.10138635796759601;
		healthpresent.body.setSize(274, 236, false);

		// heartPlatform7
		const heartPlatform7 = new HeartPlatform(this, -160, -345);
		this.add.existing(heartPlatform7);
		heartPlatform7.visible = true;

		// enemycat_3
		const enemycat_3 = new EnemyCat(this, 240, -333);
		this.add.existing(enemycat_3);
		enemycat_3.scaleX = 0.18688953222015986;
		enemycat_3.scaleY = 0.18688953222015986;

		// awougaheart
		const awougaheart = this.physics.add.sprite(114, -538, "100-percent");
		awougaheart.scaleX = 1.0683576286637164;
		awougaheart.scaleY = 0.7096208157108833;
		awougaheart.visible = false;
		awougaheart.body.setSize(256, 256, false);

		// feline2
		const feline2 = this.physics.add.sprite(237, -522, "__white_cat_sitting_011");
		feline2.scaleX = 0.18623933142280713;
		feline2.scaleY = 0.18623933142280713;
		feline2.visible = false;
		feline2.body.setSize(636, 582, false);

		// enemycat_4
		const enemycat_4 = new EnemyCat(this, -1619.276121223086, 598.7859012401016);
		this.add.existing(enemycat_4);
		enemycat_4.scaleX = 0.18688953222015986;
		enemycat_4.scaleY = 0.18688953222015986;

		// cannonball
		const cannonball = this.physics.add.sprite(684, -541, "cannon_ball");
		cannonball.scaleX = 0.593237710687874;
		cannonball.scaleY = 0.593237710687874;
		cannonball.body.gravity.y = 500;
		cannonball.body.bounce.y = 0.5;
		cannonball.body.setSize(166, 169, false);

		// heartPlatform1 (prefab fields)
		heartPlatform1.AllHearts = true;

		// enemycat3 (prefab fields)
		enemycat3.speed = 115;

		// enemycat (prefab fields)
		enemycat.speed = 160;

		// enemycat_1 (prefab fields)
		enemycat_1.speed = 155;

		// enemycat_2 (prefab fields)
		enemycat_2.speed = 190;

		// enemycat_3 (prefab fields)
		enemycat_3.speed = 170;

		// enemycat_4 (prefab fields)
		enemycat_4.speed = 190;

		this.sky = sky;
		this.heartPlatform1 = heartPlatform1;
		this.heartPlatform2 = heartPlatform2;
		this.heartPlatform3 = heartPlatform3;
		this.heartPlatform4 = heartPlatform4;
		this.heartPlatform5 = heartPlatform5;
		this.heartPlatform6 = heartPlatform6;
		this.catPlayer = catPlayer;
		this.ladycat = ladycat;
		this.blockcatleft = blockcatleft;
		this.enemycat3 = enemycat3;
		this.blockcatright = blockcatright;
		this.enemycat = enemycat;
		this.enemycat_1 = enemycat_1;
		this.enemycat_2 = enemycat_2;
		this.boxwhite = boxwhite;
		this.healthpresent = healthpresent;
		this.heartPlatform7 = heartPlatform7;
		this.enemycat_3 = enemycat_3;
		this.awougaheart = awougaheart;
		this.feline2 = feline2;
		this.enemycat_4 = enemycat_4;
		this.cannonball = cannonball;

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
	/** @type {HeartPlatform} */
	heartPlatform4;
	/** @type {HeartPlatform} */
	heartPlatform5;
	/** @type {HeartPlatform} */
	heartPlatform6;
	/** @type {CatPlayer} */
	catPlayer;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	ladycat;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	blockcatleft;
	/** @type {EnemyCat} */
	enemycat3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	blockcatright;
	/** @type {EnemyCat} */
	enemycat;
	/** @type {EnemyCat} */
	enemycat_1;
	/** @type {EnemyCat} */
	enemycat_2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	boxwhite;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	healthpresent;
	/** @type {HeartPlatform} */
	heartPlatform7;
	/** @type {EnemyCat} */
	enemycat_3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	awougaheart;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	feline2;
	/** @type {EnemyCat} */
	enemycat_4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cannonball;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.LoveHeartsGroup=this.add.group();
		this.UpdateGroup=this.add.group();
		this.LoveHeartsGroupArrow=this.add.group();
		this.ArrowGroup=this.add.group();
		this.EnemyCatsGroup=this.add.group();

		this.GotHer=false;

		this.CatchPresent=false;

	StartPosX=2093;
	StartPosY=386;

	this.lovetheme=this.sound.add('Lovelevel');
	this.goaltheme=this.sound.add('missiongoal');

	this.lovetheme.setVolume(0.3);
	this.lovetheme.play();

		this.cameras.main.setZoom(0.65);

		this.editorCreate();

		this.physics.world.setBounds(-300,-750,1000, 1530);
		this.cameras.main.setBounds(-300,-750,1000, 1530);
	this.SpeedCannon=250	
		this.cannonball.body.setVelocityX(this.SpeedCannon);

		this.cameras.main.startFollow(this.catPlayer,false,0,100);

		this.ladycat.play('WhiteCatWalk');

	this.physics.add.collider(this.catPlayer,this.LoveHeartsGroup);

	this.physics.add.collider(this.cannonball,this.LoveHeartsGroup);
		this.physics.add.collider(this.cannonball,this.blockcatleft);
		this.physics.add.collider(this.cannonball,this.blockcatright);


	this.heartPlatform1.AllRedHearts=true;
	this.heartPlatform2.AllRedHearts=true;
	this.heartPlatform3.AllRedHearts=true;

		this.heartPlatform2.y=this.heartPlatform1.y-203;
		this.heartPlatform3.y=this.heartPlatform2.y-203;
		this.heartPlatform4.y=this.heartPlatform3.y-203;
		this.heartPlatform5.y=this.heartPlatform4.y-203;
		this.heartPlatform6.y=this.heartPlatform5.y-203;
		this.heartPlatform7.y=this.heartPlatform6.y-203;

		this.physics.add.collider(this.ladycat,this.blockcatleft);
		this.physics.add.collider(this.ladycat,this.blockcatright);

		this.physics.add.overlap(this.catPlayer,this.boxwhite,this.PickUpPresent,null,this);

		this.physics.add.collider(this.catPlayer,this.blockcatright);
		this.physics.add.collider(this.catPlayer,this.blockcatleft);

		this.physics.add.collider(this.EnemyCatsGroup,this.blockcatleft);
		this.physics.add.collider(this.EnemyCatsGroup,this.blockcatright);

		this.physics.add.overlap(this.ArrowGroup,this.LoveHeartsGroupArrow,this.ChangeHeart,null,this);
		this.physics.add.overlap(this.catPlayer,this.EnemyCatsGroup,this.FallThroughFloor,null,this);
					this.physics.add.overlap(this.catPlayer,this.ArrowGroup,this.FallThroughFloor,null,this);
					this.physics.add.overlap(this.catPlayer,this.ladycat, this.Awouga,null,this);
					this.physics.add.overlap(this.catPlayer,this.EnemyCatsGroup, this.GetHit,null,this);
this.physics.add.overlap(this.catPlayer,this.cannonball, this.GetHit,null,this);



				this.time.addEvent({ delay: 1000, callback:() => {

					this.EnemyCatWalkLeftRight(this.catPlayer);

				}, callbackScope: this,repeat:-1 });



			this.time.addEvent({ delay: 1100, callback:() => {

			console.log('shoot arrow');
			this.ShootArrowLeft(-900,500);

			this.time.addEvent({ delay: 1300, callback:() => {

			this.ShootArrowRight(-900,500);

			}, callbackScope: this,repeat:0 });


	}, callbackScope: this,repeat:-1 });

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



	CheckLadyCat(){

		if(this.ladycat.active){
		if(this.ladycat.body.blocked.left){
		this.ladycat.body.setVelocityX(100);
		this.ladycat.flipX=true;
		}else if(this.ladycat.body.blocked.right){
		this.ladycat.body.setVelocityX(-100);
		this.ladycat.flipX=false;
		}
}


	};

	GotFemaleLady(){
if(this.GotHer==true){

			this.feline2.visible=true;
		this.awougaheart.visible=true;

if(this.EnemyCatsGroup.children){
this.EnemyCatsGroup.children.visible=false;
//ShowCompletetext=true;
this.sky.visible=false;
};

if(this.ladycat){

this.ladycat.destroy();

}



		}

	}

		update(){
console.log('cat stance :' + this.catPlayer.y);

if(this.catPlayer.y>1005 && this.catPlayer.disableCatStunned==false)
{
this.game.sound.stopAll();
this.scene.start("Level");

}


			this.GotFemaleLady();

			if(this.cannonball.body.blocked.left ||this.cannonball.body.blocked.right ){
			this.SpeedCannon*=-1;
				this.cannonball.body.setVelocityX(this.SpeedCannon);
				this.cannonball.setAngularVelocity(-100);
			}

			if(this.cannonball.body.blocked.right){

this.cannonball.setAngularVelocity(-100);
			}else if(this.cannonball.body.blocked.left){

this.cannonball.setAngularVelocity(100);
			}

			if(this.cannonball.y>850){

				this.cannonball.y=-800;

			}

this.CheckLadyCat();


this.UpdateGroup.children.iterate(function(child){

if(child){

	child.update();

};

		  });





		}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
