
// You can write more code here

/* START OF COMPILED CODE */

class LoveRoom1 extends BaseScene {

	constructor() {
		super("LoveRoom1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// sky
		const sky = this.add.image(616, 352, "sky");
		sky.scaleX = 1.1740323876454892;
		sky.scaleY = 1.398181638785071;
		sky.tintTopLeft = 14291474;
		sky.tintTopRight = 14946577;
		sky.tintBottomLeft = 13348783;
		sky.tintBottomRight = 13096920;

		// heartPlatform4
		const heartPlatform4 = new HeartPlatform(this, -132, 152);
		this.add.existing(heartPlatform4);
		heartPlatform4.visible = true;

		// heartPlatform3
		const heartPlatform3 = new HeartPlatform(this, -141, 339);
		this.add.existing(heartPlatform3);
		heartPlatform3.visible = true;

		// heartPlatform2
		const heartPlatform2 = new HeartPlatform(this, -141, 526);
		this.add.existing(heartPlatform2);
		heartPlatform2.visible = true;

		// heartPlatform1
		const heartPlatform1 = new HeartPlatform(this, -125, 704);
		this.add.existing(heartPlatform1);
		heartPlatform1.visible = true;

		// heartPlatform5
		const heartPlatform5 = new HeartPlatform(this, -132, -12);
		this.add.existing(heartPlatform5);
		heartPlatform5.visible = true;

		// bottom
		const bottom = this.physics.add.sprite(586, 771, "block_separator_01");
		bottom.scaleX = 5.504107162267043;
		bottom.scaleY = -0.716376328720798;
		bottom.flipY = true;
		bottom.visible = false;
		bottom.body.pushable = false;
		bottom.body.immovable = true;
		bottom.body.setSize(695, 40, false);

		// awougaheart
		const awougaheart = this.physics.add.sprite(164, -56, "100-percent");
		awougaheart.scaleX = 1.0683576286637164;
		awougaheart.scaleY = 0.7096208157108833;
		awougaheart.visible = false;
		awougaheart.body.setSize(256, 256, false);

		// blockright
		const blockright = this.physics.add.sprite(1302, -53, "bubble-128px");
		blockright.scaleX = 0.7728989318174695;
		blockright.scaleY = 0.7728989318174695;
		blockright.visible = false;
		blockright.body.pushable = false;
		blockright.body.immovable = true;
		blockright.body.setSize(128, 128, false);

		// blockleft
		const blockleft = this.physics.add.sprite(-142, -57, "bubble-128px");
		blockleft.scaleX = 0.7728989318174695;
		blockleft.scaleY = 0.7728989318174695;
		blockleft.visible = false;
		blockleft.body.pushable = false;
		blockleft.body.immovable = true;
		blockleft.body.setSize(128, 128, false);

		// blockcatleft
		const blockcatleft = this.physics.add.sprite(-195, 299, "block_wall_top");
		blockcatleft.scaleX = -0.028434271794876897;
		blockcatleft.scaleY = 36.08925018644257;
		blockcatleft.visible = false;
		blockcatleft.body.pushable = false;
		blockcatleft.body.immovable = true;
		blockcatleft.body.setSize(749, 29, false);

		// blockcatright
		const blockcatright = this.physics.add.sprite(1198, 288, "block_wall_top");
		blockcatright.scaleX = -0.028434271794876897;
		blockcatright.scaleY = 36.08925018644257;
		blockcatright.visible = false;
		blockcatright.body.pushable = false;
		blockcatright.body.immovable = true;
		blockcatright.body.setSize(749, 29, false);

		// boxwhite
		const boxwhite = this.physics.add.sprite(1043, 655, "Box white");
		boxwhite.scaleX = 0.43263200065643936;
		boxwhite.scaleY = 0.43263200065643936;
		boxwhite.body.setSize(135, 127, false);

		// healthpresent
		const healthpresent = this.physics.add.sprite(1044, 663, "health");
		healthpresent.scaleX = 0.11764599051269731;
		healthpresent.scaleY = 0.10138635796759601;
		healthpresent.body.setSize(274, 236, false);

		// enemycat2
		const enemycat2 = this.physics.add.sprite(609, 291, "__black_cat_yellow_eyes_walk_000");
		enemycat2.scaleX = 0.19521756568400234;
		enemycat2.scaleY = 0.19521756568400234;
		enemycat2.flipX = true;
		enemycat2.body.setOffset(150, 100);
		enemycat2.body.setSize(250, 300, false);

		// catPlayer
		const catPlayer = new CatPlayer(this, 58, 537);
		this.add.existing(catPlayer);
		catPlayer.scaleX = 0.17053438618233513;
		catPlayer.scaleY = 0.17053438618233513;
		catPlayer.body.collideWorldBounds = false;
		catPlayer.body.onWorldBounds = false;
		catPlayer.body.setOffset(180, 250);
		catPlayer.body.setSize(180, 260, false);

		// enemycat3
		const enemycat3 = this.physics.add.sprite(170, 465, "__black_cat_yellow_eyes_walk_000");
		enemycat3.scaleX = 0.19521756568400234;
		enemycat3.scaleY = 0.19521756568400234;
		enemycat3.flipX = true;
		enemycat3.body.setOffset(150, 100);
		enemycat3.body.setSize(250, 300, false);

		// enemycat1
		const enemycat1 = this.physics.add.sprite(888, 110, "__black_cat_yellow_eyes_walk_000");
		enemycat1.scaleX = 0.19521756568400234;
		enemycat1.scaleY = 0.19521756568400234;
		enemycat1.flipX = true;
		enemycat1.body.setOffset(150, 100);
		enemycat1.body.setSize(250, 300, false);

		// ladycat
		const ladycat = this.physics.add.sprite(131, -74, "__white_cat_sitting_011");
		ladycat.scaleX = 0.18090295099369608;
		ladycat.scaleY = 0.18090295099369608;
		ladycat.flipX = true;
		ladycat.body.velocity.x = 100;
		ladycat.body.onWorldBounds = true;
		ladycat.body.checkCollision.up = false;
		ladycat.body.checkCollision.down = false;
		ladycat.body.setSize(636, 582, false);

		// feline2
		const feline2 = this.physics.add.sprite(348, -69, "__white_cat_sitting_011");
		feline2.scaleX = 0.18623933142280713;
		feline2.scaleY = 0.18623933142280713;
		feline2.visible = false;
		feline2.body.setSize(636, 582, false);

		// heartPlatform2 (prefab fields)
		heartPlatform2.AllHearts = false;

		// heartPlatform1 (prefab fields)
		heartPlatform1.AllHearts = true;

		this.sky = sky;
		this.heartPlatform4 = heartPlatform4;
		this.heartPlatform3 = heartPlatform3;
		this.heartPlatform2 = heartPlatform2;
		this.heartPlatform1 = heartPlatform1;
		this.heartPlatform5 = heartPlatform5;
		this.bottom = bottom;
		this.awougaheart = awougaheart;
		this.blockright = blockright;
		this.blockleft = blockleft;
		this.blockcatleft = blockcatleft;
		this.blockcatright = blockcatright;
		this.boxwhite = boxwhite;
		this.healthpresent = healthpresent;
		this.enemycat2 = enemycat2;
		this.catPlayer = catPlayer;
		this.enemycat3 = enemycat3;
		this.enemycat1 = enemycat1;
		this.ladycat = ladycat;
		this.feline2 = feline2;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	sky;
	/** @type {HeartPlatform} */
	heartPlatform4;
	/** @type {HeartPlatform} */
	heartPlatform3;
	/** @type {HeartPlatform} */
	heartPlatform2;
	/** @type {HeartPlatform} */
	heartPlatform1;
	/** @type {HeartPlatform} */
	heartPlatform5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bottom;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	awougaheart;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	blockright;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	blockleft;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	blockcatleft;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	blockcatright;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	boxwhite;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	healthpresent;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	enemycat2;
	/** @type {CatPlayer} */
	catPlayer;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	enemycat3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	enemycat1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	ladycat;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	feline2;

	/* START-USER-CODE */

	// Write your code here
awake(){



}
	create() {
		this.UpdateGroup=this.add.group();
		this.LoveHeartsGroup=this.add.group();
		this.ArrowGroup=this.add.group();
		this.LoveHeartsGroupArrow=this.add.group();
		this.EnemyCatsGroup=this.add.group();

		this.GotHer=false;
		this.CatchPresent=false;

	this.lovetheme=this.sound.add('Lovelevel');
	this.goaltheme=this.sound.add('missiongoal');

	this.lovetheme.setVolume(0.3);
	this.lovetheme.play();

		this.editorCreate();

				this.physics.world.setBounds(0, 1031,-100, 580);

		this.heartPlatform3.AllRedHearts=true;

		this.test();

		this.ladycat.play('WhiteCatWalk');
		this.ladycat.body.setVelocityX(100);
		this.ladycat.body.setVelocityX(100);

		console.log('test heartplatform :'+this.heartPlatform3.AllRedHearts);

		this.count=0;

		this.EnemyCatsGroup.add(this.enemycat1);
		this.EnemyCatsGroup.add(this.enemycat2);
		this.EnemyCatsGroup.add(this.enemycat3);

		this.enemycat1.body.setVelocityX(175);
		this.enemycat2.body.setVelocityX(170);
		this.enemycat3.body.setVelocityX(165);

		this.enemycat1.play('greycatwalk');
		this.enemycat2.play('greycatwalk');
		this.enemycat3.play('greycatwalk');

		this.enemycat1.speed=175;
		this.enemycat2.speed=170;
		this.enemycat3.speed=165;

		this.enemycat1.attack=true;
		this.enemycat2.attack=true;
		this.enemycat3.attack=true;

		this.enemycat1.JustOnceAttack=true;
		this.enemycat2.JustOnceAttack=true;
		this.enemycat3.JustOnceAttack=true;


		this.heartPlatform2.y=this.heartPlatform1.y-180;
		this.heartPlatform3.y=this.heartPlatform2.y-180;
		this.heartPlatform4.y=this.heartPlatform3.y-180;
		this.heartPlatform5.y=this.heartPlatform4.y-180;
			//console.log(this.sys.game.config.renderer);

	//	this.LoveHeartsGroup.forEach(function(child) {

		this.physics.add.collider(this.catPlayer,this.LoveHeartsGroup);
		this.physics.add.collider(this.catPlayer,this.bottom,this.testje,null,this);
		this.physics.add.collider(this.catPlayer,this.blockcatright);
		this.physics.add.collider(this.catPlayer,this.blockcatleft);

		this.physics.add.overlap(this.catPlayer,this.boxwhite,this.PickUpPresent,null,this);

			this.physics.add.overlap(this.catPlayer,this.EnemyCatsGroup,this.FallThroughFloor,null,this);
			this.physics.add.overlap(this.catPlayer,this.EnemyCatsGroup,this.GetHit,null,this);
			this.physics.add.overlap(this.catPlayer,this.ArrowGroup,this.FallThroughFloor,null,this);
			this.physics.add.overlap(this.catPlayer,this.ArrowGroup,this.GetHit,null,this);

		this.physics.add.collider(this.EnemyCatsGroup,this.blockcatleft);
		this.physics.add.collider(this.EnemyCatsGroup,this.blockcatright);

		this.physics.add.overlap(this.catPlayer,this.ladycat, this.Awouga,null,this);

		this.physics.add.collider(this.ladycat,this.blockleft);
		this.physics.add.collider(this.ladycat,this.blockright);

		this.physics.add.overlap(this.ArrowGroup,this.LoveHeartsGroupArrow,this.ChangeHeart,null,this);


		console.log('cat image '+ this.catPlayer.texture.key);

			//this.LoveHeartsGroup
  //}, this);


		this.time.addEvent({ delay: 2000, callback:() => {



			this.ShootArrowLeft();
			this.time.addEvent({ delay: 2200, callback:() => {

				this.ShootArrowRight();

			}, callbackScope: this,repeat:0 });


	}, callbackScope: this,repeat:-1 });


	 if (this.sys.game.renderer instanceof Phaser.Renderer.WebGL.WebGLRenderer) {
      console.log("De game gebruikt WebGL.");
    } else if (this.sys.game.renderer instanceof Phaser.Renderer.Canvas.CanvasRenderer) {
      console.log("De game gebruikt Canvas.");
    } else {
      console.log("De rendering engine kon niet worden gedetecteerd.");
    }

		this.rope = this.add.rope(800, -2300, 'sunlight', null, 10);

			this.cameras.main.setZoom(0.65);
	}

	FallThroughFloor(Cat,EnemyCat){

		if(EnemyCat.attack && EnemyCat.JustOnceAttack){
				EnemyCat.play('CatScratchGrey');
			EnemyCat.JustOnceAttack=false;
			EnemyCat.body.setVelocityX(0);
			this.time.addEvent({ delay: 300, callback:() => {
				EnemyCat.play('greycatwalk');	
				EnemyCat.JustOnceAttack=true;
				if(EnemyCat.flipX){
					EnemyCat.body.setVelocityX(EnemyCat.speed);
				}else{
					EnemyCat.body.setVelocityX(-EnemyCat.speed);
				}

	}, callbackScope: this,repeat:0 });
		}


		Cat.body.checkCollision.down=false;
		Cat.body.setVelocityY(400);
			this.time.addEvent({ delay: 200, callback:() => {
				Cat.body.checkCollision.down=true;					
		}, callbackScope: this,repeat:0 });



	}

	testje(cat,bottom){

		//this.GoBackToLevel();
console.log('aaaaaaaaaaaaaaaaaaaaaaleeeeeeeeeeeeeeeeeeeeeeeeessss');
this.sound.stopAll();
this.scene.start("Level");

}

	destroyenemycats(){

if(this.enemycat1.active){
this.enemycat1.destroy();
}
if(this.enemycat2.active){
this.enemycat2.destroy();
}
if(this.enemycat3.active){
this.enemycat3.destroy();
}

	}

	Awouga(Cat, feline){



	if(Cat.flipX==true && Cat.body.blocked.down && this.CatchPresent){

	Cat.setTexture('__black_cat_sit_tranistion_to_004');
	Cat.body.enable=false;
	this.GotHer=true;
	this.awougaheart.x=Cat.x+40;
	this.awougaheart.y=Cat.y;

	this.feline2.x=Cat.x+70;
	this.feline2.y=Cat.y;
	this.feline2.flipX=false;
	this.game.sound.stopAll();
	this.goaltheme.play();
	this.destroyenemycats();
	this.GoBackToLevel();

	}else if(Cat.body.blocked.down && Cat.flipX==false && this.CatchPresent){
	Cat.setTexture('__black_cat_sit_tranistion_to_004');
	Cat.body.enable=false;
	this.GotHer=true;
	this.awougaheart.x=Cat.x-40;
	this.awougaheart.y=Cat.y;

	this.feline2.x=Cat.x-70;
	this.feline2.y=Cat.y;
	this.feline2.flipX=true;
	this.game.sound.stopAll();
	this.goaltheme.play();
	this.destroyenemycats()
	this.GoBackToLevel();
		}










	}

	ChangeHeart(Arrow,Heart){


	if(Heart.PauseHeart==false){
		console.log('texture Heart :'+ Heart.red2.texture.key);

	 if(Heart.red2.texture.key=="0-percent"){


			Heart.red2.setTexture("100-percent");
			Heart.red2.body.checkCollision.up=true;

			}

		else if(Heart.red2.texture.key=="100-percent"){

			Heart.red2.setTexture("0-percent");
			Heart.red2.body.checkCollision.up=false;
		}

	}

		Heart.PauseHeart=true;

			this.time.addEvent({ delay:500, callback:() => {

			Heart.PauseHeart=false;	

		}, callbackScope: this,repeat:0 });

	}

	PickUpPresent(Cat,Present){

	if(Present){

	Present.destroy();
		this.healthpresent.destroy();
		this.CatchPresent=true;
	}


	}



ShootArrowLeft(){

	//

	if(this.GotHer==false){
	this.RandomY=Phaser.Math.Between(-500,400);


	this.Arrow= this.physics.add.sprite(-300, this.RandomY, "red_arrow_projectile").setScale(0.3);
	this.Arrow.setSize(70,70);

this.Arrow.body.setVelocityX(420);
this.Arrow.body.setVelocityY(350);	
	this.Arrow.flipX=true;
	this.Arrow.angle=35;
	this.ArrowGroup.add(this.Arrow);


	}


};

	ShootArrowRight(){

		if(this.GotHer==false){

	this.RandomYR=Phaser.Math.Between(-500,400);

	this.Arrow= this.physics.add.sprite(1300, this.RandomYR, "red_arrow_projectile").setScale(0.3);
	this.Arrow.setSize(70,70);

this.Arrow.body.setVelocityX(-420);
this.Arrow.body.setVelocityY(350);	
	this.Arrow.flipX=false;
	this.Arrow.angle=-35;
	this.ArrowGroup.add(this.Arrow);
		}

};

	update(){


console.log('pos cat :'+ this.catPlayer.y);

if(this.catPlayer.y>705 && this.catPlayer.disableCatStunned==false){
this.game.sound.stopAll();
this.scene.start("Level");

}





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

		this.EnemyCatsGroup.children.iterate(function(child){
if(child){
	if(child.body.blocked.left){
		child.body.setVelocityX(child.speed);
child.flipX=true;
		}else if(child.body.blocked.right){
		child.body.setVelocityX(-child.speed);
			child.flipX=false;
		}




};

		  });


if(this.ladycat.active){
		if(this.ladycat.body.blocked.left){
		this.ladycat.body.setVelocityX(100);
this.ladycat.flipX=true;
		}else if(this.ladycat.body.blocked.right){
		this.ladycat.body.setVelocityX(-100);
			this.ladycat.flipX=false;
		}
}


this.UpdateGroup.children.iterate(function(child){

if(child){

	child.update();

};

		  });

		this.ArrowGroup.children.iterate(function(child){

if(child){

	if(child.y>900){
	child.destroy();
		console.log('destroy arrow');
	}

};


		  });

	//   this.count += 0.1;

      //  let points = this.rope.points;

      //  for (let i = 0; i < points.length; i++)
       // {
       //     points[i].y = Math.sin(i * 0.5 + this.count) * 16;
       // }

       // this.rope.setDirty();

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
