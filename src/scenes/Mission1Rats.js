
// You can write more code here

/* START OF COMPILED CODE */

class Mission1Rats extends BaseScene {

	constructor() {
		super("Mission1Rats");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// red_large_stripe
		const red_large_stripe = this.add.tileSprite(607, 261, 10000, 1382, "orange_large_stripe");
		red_large_stripe.scaleX = 0.2;
		red_large_stripe.scaleY = 0.5532534882473231;
		red_large_stripe.tintTopLeft = 1643276;
		red_large_stripe.tintTopRight = 1709837;
		red_large_stripe.tileScaleX = 0.6;

		// green
		const green = this.add.image(772, 693, "orange");
		green.scaleX = 5.416469579654463;
		green.scaleY = 0.0704725053230279;
		green.flipY = true;
		green.tintTopLeft = 16579836;
		green.tintTopRight = 16316664;
		green.tintBottomLeft = 4868425;
		green.tintBottomRight = 5196619;

		// ellipse1
		const ellipse1 = this.add.ellipse(706, 332, 128, 128);
		ellipse1.scaleX = 5.190321929178502;
		ellipse1.scaleY = 5.190321929178502;
		ellipse1.alpha = 0.05;
		ellipse1.isFilled = true;

		// skirting_light
		const skirting_light = this.add.tileSprite(620, 650, 15000, 63, "skirting_light");
		skirting_light.scaleX = 0.18;
		skirting_light.scaleY = 0.2528690000816929;

		// skirting_white
		const skirting_white = this.add.tileSprite(610, -64, 20000, 78, "skirting_light");
		skirting_white.scaleX = 0.15;
		skirting_white.scaleY = 0.18021693427896895;
		skirting_white.tintTopLeft = 5983024;
		skirting_white.tintTopRight = 7098675;
		skirting_white.tintBottomLeft = 4932147;
		skirting_white.tintBottomRight = 5590840;

		// bottom
		const bottom = this.physics.add.sprite(833, 703, "block_separator_01");
		bottom.scaleX = 5.504107162267043;
		bottom.scaleY = 1.250533984076435;
		bottom.visible = false;
		bottom.body.pushable = false;
		bottom.body.immovable = true;
		bottom.body.setSize(695, 40, false);

		// windowout
		const windowout = new IndoorWindow(this, 205, 237);
		this.add.existing(windowout);

		// littletable
		const littletable = this.physics.add.sprite(201, 630, "light_table_round");
		littletable.scaleX = 0.48972720028048156;
		littletable.scaleY = 0.48972720028048156;
		littletable.body.setOffset(0, 20);
		littletable.body.setSize(210, 200, false);

		// chain1
		const chain1 = this.physics.add.sprite(708, 338, "long_chain_piece");
		chain1.scaleX = 0.2;
		chain1.scaleY = 0.3;
		chain1.angle = 37;
		chain1.setOrigin(0.43345773036960616, -0.0020061684130072413);
		chain1.visible = false;
		chain1.body.setSize(105, 849, false);

		// chain3
		const chain3 = this.physics.add.sprite(706, 339, "long_chain_piece");
		chain3.scaleX = 0.2;
		chain3.scaleY = 0.3;
		chain3.angle = -130;
		chain3.setOrigin(0.42588526077586375, 0.024901040279954007);
		chain3.visible = false;
		chain3.body.setSize(105, 849, false);

		// chain2
		const chain2 = this.physics.add.sprite(708, 339, "long_chain_piece");
		chain2.scaleX = 0.2;
		chain2.scaleY = 0.3;
		chain2.angle = 139;
		chain2.setOrigin(0.42588526077586375, 0.024901040279954007);
		chain2.visible = false;
		chain2.body.setSize(105, 849, false);

		// chain4
		const chain4 = this.physics.add.sprite(708, 343, "long_chain_piece");
		chain4.scaleX = 0.2;
		chain4.scaleY = 0.3;
		chain4.angle = -44;
		chain4.setOrigin(0.42588526077586375, 0.024901040279954007);
		chain4.visible = false;
		chain4.body.setSize(105, 849, false);

		// shelf2
		const shelf2 = this.physics.add.sprite(789, 418, "dark_wall_shelf");
		shelf2.scaleX = 0.14427055816978662;
		shelf2.scaleY = 0.14427055816978662;
		shelf2.body.friction.x = 0;
		shelf2.body.checkCollision.down = false;
		shelf2.body.pushable = false;
		shelf2.body.immovable = true;
		shelf2.body.setSize(1007, 85, false);

		// cannonball
		const cannonball = this.physics.add.sprite(707, 335, "cannon_ball");
		cannonball.scaleX = 0.09638566409323762;
		cannonball.scaleY = 0.09638566409323762;
		cannonball.visible = false;
		cannonball.body.setSize(166, 169, false);

		// sheld3
		const sheld3 = this.physics.add.sprite(644, 262, "dark_wall_shelf");
		sheld3.scaleX = 0.15087437735990775;
		sheld3.scaleY = 0.15087437735990775;
		sheld3.body.friction.x = 0;
		sheld3.body.collideWorldBounds = true;
		sheld3.body.checkCollision.down = false;
		sheld3.body.pushable = false;
		sheld3.body.immovable = true;
		sheld3.body.setSize(1007, 85, false);

		// sheld1
		const sheld1 = this.physics.add.sprite(643, 423, "dark_wall_shelf");
		sheld1.scaleX = 0.15087437735990775;
		sheld1.scaleY = 0.15087437735990775;
		sheld1.body.friction.x = 0;
		sheld1.body.collideWorldBounds = true;
		sheld1.body.checkCollision.down = false;
		sheld1.body.pushable = false;
		sheld1.body.immovable = true;
		sheld1.body.setSize(1007, 85, false);

		// sheld4
		const sheld4 = this.physics.add.sprite(790, 264, "dark_wall_shelf");
		sheld4.scaleX = 0.15087437735990775;
		sheld4.scaleY = 0.15087437735990775;
		sheld4.body.friction.x = 0;
		sheld4.body.collideWorldBounds = true;
		sheld4.body.checkCollision.down = false;
		sheld4.body.pushable = false;
		sheld4.body.immovable = true;
		sheld4.body.setSize(1007, 85, false);

		// shelf
		const shelf = this.physics.add.sprite(124, 76, "dark_wall_shelf");
		shelf.scaleX = 0.14427055816978662;
		shelf.scaleY = 0.14427055816978662;
		shelf.body.friction.x = 0;
		shelf.body.pushable = false;
		shelf.body.immovable = true;
		shelf.body.setSize(1007, 85, false);

		// shelf_1
		const shelf_1 = this.physics.add.sprite(1189, 76, "dark_wall_shelf");
		shelf_1.scaleX = 0.14427055816978662;
		shelf_1.scaleY = 0.14427055816978662;
		shelf_1.body.friction.x = 0;
		shelf_1.body.pushable = false;
		shelf_1.body.immovable = true;
		shelf_1.body.setSize(1007, 85, false);

		// rat1
		const rat1 = new Rat(this, 127, 44);
		this.add.existing(rat1);

		// rat2
		const rat2 = new Rat(this, 1183, 45);
		this.add.existing(rat2);
		rat2.flipX = false;
		rat2.flipY = false;

		// green_1
		const green_1 = this.add.image(697, -117, "orange_plain");
		green_1.scaleX = 17.43052258927799;
		green_1.scaleY = 0.07132974389282991;
		green_1.flipY = true;
		green_1.tintTopLeft = 3420204;
		green_1.tintTopRight = 3946288;
		green_1.tintBottomLeft = 11900024;
		green_1.tintBottomRight = 11311991;

		// shelve
		const shelve = this.physics.add.sprite(1175, 549, "light_5_shelves");
		shelve.scaleX = 0.21527643266675234;
		shelve.scaleY = 0.21527643266675234;
		shelve.body.setSize(676, 1109, false);

		// catPlayer
		const catPlayer = new CatPlayer(this, 306, 577);
		this.add.existing(catPlayer);
		catPlayer.scaleX = 0.1566678798725213;
		catPlayer.scaleY = 0.1566678798725213;
		catPlayer.body.friction.x = 1;
		catPlayer.body.friction.y = 1;
		catPlayer.body.collideWorldBounds = true;
		catPlayer.body.onWorldBounds = true;
		catPlayer.body.setOffset(130, 60);
		catPlayer.body.setSize(340, 460, false);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(612, 282, 128, 128);
		rectangle_1.scaleX = 16.048856722772683;
		rectangle_1.scaleY = 6.4787349671576235;
		rectangle_1.alpha = 0.15;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 6573090;

		// lamp
		const lamp = this.add.image(681, -19, "lamp_21");
		lamp.scaleX = 0.24260144750663815;
		lamp.scaleY = 0.24260144750663815;
		lamp.visible = false;

		// ellipse_5
		const ellipse_5 = this.add.ellipse(681, -82, 128, 128);
		ellipse_5.scaleX = 0.30280492328814523;
		ellipse_5.scaleY = 0.06077007969683164;
		ellipse_5.visible = false;
		ellipse_5.alpha = 0.4;
		ellipse_5.isFilled = true;
		ellipse_5.fillColor = 657673;

		this.red_large_stripe = red_large_stripe;
		this.green = green;
		this.ellipse1 = ellipse1;
		this.bottom = bottom;
		this.windowout = windowout;
		this.littletable = littletable;
		this.chain1 = chain1;
		this.chain3 = chain3;
		this.chain2 = chain2;
		this.chain4 = chain4;
		this.shelf2 = shelf2;
		this.cannonball = cannonball;
		this.sheld3 = sheld3;
		this.sheld1 = sheld1;
		this.sheld4 = sheld4;
		this.shelf = shelf;
		this.shelf_1 = shelf_1;
		this.rat1 = rat1;
		this.rat2 = rat2;
		this.green_1 = green_1;
		this.shelve = shelve;
		this.catPlayer = catPlayer;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	red_large_stripe;
	/** @type {Phaser.GameObjects.Image} */
	green;
	/** @type {Phaser.GameObjects.Ellipse} */
	ellipse1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bottom;
	/** @type {IndoorWindow} */
	windowout;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	littletable;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	chain1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	chain3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	chain2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	chain4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cannonball;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	sheld3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	sheld1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	sheld4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf_1;
	/** @type {Rat} */
	rat1;
	/** @type {Rat} */
	rat2;
	/** @type {Phaser.GameObjects.Image} */
	green_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelve;
	/** @type {CatPlayer} */
	catPlayer;

	/* START-USER-CODE */

	// Write your code here

	create() {



	this.catchtheme=this.sound.add('GetMouse');
	this.donetheme=this.sound.add('missiongoal');


		//this.goaltheme=this.sound.add('missiongoal');

	this.LastXvaluePlatform=0;
	this.LastYvaluePlatform=0;

	this.testfunction="halle0";
		//this.testfunction.=2;

		raticon=true;

	this.CounterBall=0;
	this.Positionball2X=568;
	this.Positionball2X=334;
	this.resultY=0;

		this.UpdateGroup=this.add.group();
		this.BombsGroup=this.add.group();
this.BounceGroup=this.add.group();

		this.editorCreate();

		this.leveltheme=this.sound.add('maintheme');
	this.Boomtheme=this.sound.add('Boom2');	
	this.leveltheme.play();

		this.AddingRatsStuff();
	//	this.rat1.direction=true;
		//this.rat1.setVelocityX(200);

		this.sheld1.LastXvaluePlatform=0;
		this.sheld1.LastYvaluePlatform=0;

		//this.sheld2.LastYvaluePlatform=0;

		this.sheld3.resultY=0;
		this.sheld1.resultY=0;


		//this.physics.world.enable(this.ceiling);
	//	this.ceiling.body.immovable = true;


this.BounceGroup.add(this.littletable);
//this.BounceGroup.add(this.bookcase2);
//this.BounceGroup.add(this.brownseat);
this.BounceGroup.add(this.sheld1);
this.BounceGroup.add(this.shelf2);
this.BounceGroup.add(this.sheld3);
this.BounceGroup.add(this.sheld4);

this.CatchBallGroup=this.add.group();

		this.test();

		this.rat1.direction=true;
		this.rat1.body.setVelocityX(0);
		this.rat1.JustStand=true;
		this.rat1.RespectRats=true;

		this.rat2.direction=false;
		this.rat2.body.setVelocityX(0);
		this.rat2.JustStand=true;
		this.rat2.RespectRats=true;


	//	Phaser.Math.RotateAroundDistance(this.shelf2, this.ball1.x,this.ball1.y, 0.1, 300);

		this.cameras.main.setZoom(0.72);
		this.physics.world.setBounds(0, -2100,1400, 3500);
		this.cameras.main.setBounds(0,-3000,1400, 3700);
		this.cameras.main.startFollow(this.catPlayer,false,500,0);


			this.CreatePlatform(this.littletable);
			//this.CreatePlatform(this.bookcase2);
		//	this.CreatePlatform(this.brownseat);
			this.CreatePlatform(this.shelve);

		this.windowout.mission="Level";
		//this.CreatePlatform(this.sheld1);
		//this.CreatePlatform(this.shelf2);


//this.rat1.play('RatWalk');
//this.rat2.play('RatWalk');
//this.ball.postFX.addBloom();
		//this.ball.preFX.addDisplacement('distort', -0.03, -0.03);

this.physics.add.collider(this.catPlayer,this.bottom);

		this.physics.add.collider(this.catPlayer,this.ceiling);
		this.physics.add.collider(this.BombsGroup,this.bottom,this.explode,null,this);
		this.physics.add.collider(this.BombsGroup,this.BounceGroup);

		this.physics.add.overlap(this.catPlayer,this.CatchBallGroup,this.CatchBall,null,this);

		this.physics.add.collider(this.CatchBallGroup,this.bottom);
		this.physics.add.collider(this.CatchBallGroup,this.BounceGroup);

		this.physics.add.collider(this.CatchBallGroup,this.BounceGroup);

		this.physics.add.collider(this.catPlayer,this.sheld1,this.StickAround,null,this);
		this.physics.add.collider(this.catPlayer,this.sheld3,this.StickAround,null,this);
		this.physics.add.collider(this.catPlayer,this.sheld4,this.StickAround,null,this);
		this.physics.add.collider(this.catPlayer,this.shelf2,this.StickAround,null,this);

		this.physics.add.overlap(this.catPlayer,this.windowout.waythrough,this.JumpOut,null,this);
		this.physics.add.overlap(this.catPlayer,this.BombsGroup,this.GetHit,null,this);
		this.physics.add.collider(this.BombsGroup,this.catPlayer,this.explode,null,this);

		MissionCount=6;

	}




SetNextPositionBall(){
this.CounterBall++;




};


destroyRats(){


		this.expo1 = new explosion(this, this.rat1.x, this.rat1.y).setScale(0.35);
		this.expo2 = new explosion(this, this.rat2.x, this.rat2.y).setScale(0.35);
	this.add.existing(this.expo1);
	this.add.existing(this.expo2);

	this.rat1.destroy();
	this.rat2.destroy();
}

CatchBall(Cat,Ball){

	if(Ball){

	Ball.destroy();
	}

	if(this.CounterBall<=4){
		MissionCount--;
		this.catchtheme.play();
		this.SetNextPositionBall();
		console.log('counter :'+ this.CounterBall);

	}else if(this.CounterBall==5){
MissionCount=0;
		this.destroyRats();
			this.game.sound.stopAll();
		this.donetheme.play();
ShowCompletetext=true;
LevelRat1Clear=true;

					this.time.addEvent({ delay:1000, callback:() => {
	this.cameras.main.fadeOut(700);

		this.time.addEvent({ delay:700, callback:() => {

		this.scene.start('Level');	

				}, callbackScope: this,repeat:0});
						}, callbackScope: this,repeat:0});

	}


};



explode(Bomb,ground){

	if(Bomb){
	Bomb.destroy();
		this.Boomtheme.play();
		const expo = new explosion(this, Bomb.x, Bomb.y).setScale(0.35);
		this.add.existing(expo);

		  this.cameras.main.shake(100);

	}


	};


	GetValueY(Object){

	Object.resultY=Object.LastYvalue-Object.body.y;

	Object.LastYvalue=Object.body.y;
	Object.LastXvalue=Object.body.x;
//	Object.string="Screw you";



	}

	StickAround(player, platform) {

	//	console.log('test inside function :'+ this.GetValueY(this.testfunction));

        if (platform.body.touching.up && player.body.touching.down) {

     player.locked = true;
     player.lockedTo = platform;   
   //  player.body.setAllowGravity(false);
     //player.body.setVelocityY(0);
			//player.body.x =player.body.x;

			console.log('test round:'+platform.LastYvaluePlatform);

				player.body.y = (player.lockedTo.body.y +(2-platform.resultY) - player.body.height);

			if(Object.LastXvalue - platform.body.x<0){
				player.body.position.x += -(platform.LastXvalue - platform.body.x);
			}				
			else{
			player.body.position.x += (platform.body.x-platform.LastXvalue);
			}
    }
};

	JumpOut(cat,window){

		if(ShowCompletetext==false && window.WindowOpen){
	this.scene.stop();
		this.game.sound.stopAll();
		this.scene.start("Level");
		StartPosX=432;
		StartPosY=-70;

		}

	}



update(time,delta){

	this.GetValueY(this.sheld1);
	this.GetValueY(this.sheld3);
	this.GetValueY(this.sheld4);
	this.GetValueY(this.shelf2);

    if (!this.sheld1.body.touching.up) {

     this.catPlayer.body.setAllowGravity(true);

    }

	this.step=0
	this.step=0.01;

	Phaser.Math.RotateAroundDistance(this.sheld1, this.cannonball.x,this.cannonball.y, this.step, 250);
	Phaser.Math.RotateAroundDistance(this.sheld3, this.cannonball.x,this.cannonball.y, this.step, 250);
	Phaser.Math.RotateAroundDistance(this.sheld4, this.cannonball.x,this.cannonball.y, this.step, 250);
	Phaser.Math.RotateAroundDistance(this.shelf2, this.cannonball.x,this.cannonball.y, this.step, 250);

	Phaser.Math.RotateAroundDistance(this.chain1, this.cannonball.x,this.cannonball.y, this.step, 0);
	Phaser.Math.RotateAroundDistance(this.chain2, this.cannonball.x,this.cannonball.y, this.step, 0);
	Phaser.Math.RotateAroundDistance(this.chain3, this.cannonball.x,this.cannonball.y, this.step, 0);
	Phaser.Math.RotateAroundDistance(this.chain4, this.cannonball.x,this.cannonball.y, this.step, 0);

	this.chain1.angle+=0.573;
	this.chain2.angle+=0.573;
	this.chain3.angle+=0.573;
	this.chain4.angle+=0.573;


	this.BombsGroup.children.iterate(function(child){


		if(child){
if(child.y>700){

			};
		};

  });



this.UpdateGroup.children.iterate(function(child){

	if(ShowCompletetext){

			LevelRat1Clear=true;
		};

if(child){

child.update();

};

  });


//console.log('test rattssss');
}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
