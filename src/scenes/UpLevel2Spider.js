
// You can write more code here

/* START OF COMPILED CODE */

class UpLevel2Spider extends BaseScene {

	constructor() {
		super("UpLevel2Spider");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// green
		const green = this.add.image(604, 661, "red_plain");
		green.scaleX = 15.964687337484047;
		green.scaleY = 0.10485117397067724;
		green.tintBottomLeft = 8355711;
		green.tintBottomRight = 7895160;

		// skirting_light
		const skirting_light = this.add.tileSprite(416, 612, 15000, 63, "skirting_light");
		skirting_light.scaleX = 0.2528690000816929;
		skirting_light.scaleY = 0.2528690000816929;

		// ceiling2
		const ceiling2 = this.add.tileSprite(628, -311, 15000, 3000, "red_large_stripe");
		ceiling2.scaleX = 0.1281025380134249;
		ceiling2.scaleY = 0.610607988844728;
		ceiling2.tintTopLeft = 4802118;
		ceiling2.tintTopRight = 12632256;
		ceiling2.tintBottomLeft = 12500670;
		ceiling2.tintBottomRight = 12237498;

		// green_1
		const green_1 = this.add.image(1206, -95, "red_plain");
		green_1.scaleX = 15.964687337484047;
		green_1.scaleY = 0.014266231936905908;
		green_1.tintBottomLeft = 8355711;
		green_1.tintBottomRight = 7895160;

		// emptyshelllight
		const emptyshelllight = this.add.image(985, -217, "emptyshelllight");
		emptyshelllight.scaleX = 0.20771336224739156;
		emptyshelllight.scaleY = 0.20771336224739156;

		// bigcoach
		const bigcoach = this.physics.add.sprite(408, -175, "brown_2_seat");
		bigcoach.scaleX = 0.16720901811824682;
		bigcoach.scaleY = 0.16720901811824682;
		bigcoach.body.setOffset(200, 0);
		bigcoach.body.setSize(1200, 327, false);

		// ceiling1
		const ceiling1 = this.add.tileSprite(1082, -106, 10000, 78, "skirting_light");
		ceiling1.scaleX = 0.18021693427896895;
		ceiling1.scaleY = 0.18021693427896895;

		// bottom
		const bottom = this.physics.add.sprite(633, 682, "block_separator_01");
		bottom.scaleX = 5.504107162267043;
		bottom.scaleY = 1.250533984076435;
		bottom.visible = false;
		bottom.body.pushable = false;
		bottom.body.immovable = true;
		bottom.body.setSize(695, 40, false);

		// littletable
		const littletable = this.physics.add.sprite(117, 615, "light_table_round");
		littletable.scaleX = 0.4106111942992562;
		littletable.scaleY = 0.4106111942992562;
		littletable.body.setOffset(0, 20);
		littletable.body.setSize(210, 200, false);

		// indoorwindow1
		const indoorwindow1 = new IndoorWindow(this, 119, 300);
		this.add.existing(indoorwindow1);

		// shelf2
		const shelf2 = this.physics.add.sprite(893, 134, "light_wall_shelf");
		shelf2.scaleX = 0.1250780691733577;
		shelf2.scaleY = 0.1250780691733577;
		shelf2.body.setSize(1007, 85, false);

		// shelf1
		const shelf1 = this.physics.add.sprite(379, 379, "light_wall_shelf");
		shelf1.scaleX = 0.1250780691733577;
		shelf1.scaleY = 0.1250780691733577;
		shelf1.body.setSize(1007, 85, false);

		// wardrobe
		const wardrobe = this.physics.add.sprite(1172, 503, "light_wardrobe");
		wardrobe.scaleX = 0.27111001128808454;
		wardrobe.scaleY = 0.27111001128808454;
		wardrobe.body.setSize(676, 1109, false);

		// bed
		const bed = this.physics.add.sprite(625, 608, "light_wood_table");
		bed.scaleX = 0.16339065952524107;
		bed.scaleY = 0.16339065952524107;
		bed.body.setOffset(0, 70);
		bed.body.setSize(1628, 700, false);

		// shelf3
		const shelf3 = this.physics.add.sprite(124, 187, "light_wall_shelf");
		shelf3.scaleX = 0.1250780691733577;
		shelf3.scaleY = 0.1250780691733577;
		shelf3.body.setSize(1007, 85, false);

		// plantgreen
		const plantgreen = this.physics.add.sprite(417, -507, "planter_01");
		plantgreen.scaleX = 0.5601401004970402;
		plantgreen.scaleY = 0.5601401004970402;
		plantgreen.body.gravity.y = 1000;
		plantgreen.body.bounce.y = 0.3;
		plantgreen.body.checkCollision.up = false;
		plantgreen.body.setSize(75, 125, false);

		// dark_wall_shelf
		const dark_wall_shelf = this.add.image(135, -846, "dark_wall_shelf");
		dark_wall_shelf.scaleX = 0.24858210854867147;
		dark_wall_shelf.scaleY = 0.24858210854867147;

		// dark_wall_shelf_1
		const dark_wall_shelf_1 = this.add.image(385, -846, "dark_wall_shelf");
		dark_wall_shelf_1.scaleX = 0.24858210854867147;
		dark_wall_shelf_1.scaleY = 0.24858210854867147;

		// dark_wall_shelf_2
		const dark_wall_shelf_2 = this.add.image(634, -846, "dark_wall_shelf");
		dark_wall_shelf_2.scaleX = 0.24858210854867147;
		dark_wall_shelf_2.scaleY = 0.24858210854867147;

		// dark_wall_shelf_3
		const dark_wall_shelf_3 = this.add.image(885, -846, "dark_wall_shelf");
		dark_wall_shelf_3.scaleX = 0.24858210854867147;
		dark_wall_shelf_3.scaleY = 0.24858210854867147;

		// dark_wall_shelf_4
		const dark_wall_shelf_4 = this.add.image(1126, -846, "dark_wall_shelf");
		dark_wall_shelf_4.scaleX = 0.24858210854867147;
		dark_wall_shelf_4.scaleY = 0.24858210854867147;

		// dark_wall_shelf_5
		const dark_wall_shelf_5 = this.add.image(1361, -846, "dark_wall_shelf");
		dark_wall_shelf_5.scaleX = 0.24858210854867147;
		dark_wall_shelf_5.scaleY = 0.24858210854867147;

		// dark_wall_shelf_6
		const dark_wall_shelf_6 = this.add.image(-54, -846, "dark_wall_shelf");
		dark_wall_shelf_6.scaleX = 0.24858210854867147;
		dark_wall_shelf_6.scaleY = 0.24858210854867147;

		// dark_wall_shelf_7
		const dark_wall_shelf_7 = this.add.image(1369, -864, "dark_wall_shelf");
		dark_wall_shelf_7.scaleX = 0.24858210854867147;
		dark_wall_shelf_7.scaleY = 0.24858210854867147;

		// dark_wall_shelf_8
		const dark_wall_shelf_8 = this.add.image(1134, -864, "dark_wall_shelf");
		dark_wall_shelf_8.scaleX = 0.24858210854867147;
		dark_wall_shelf_8.scaleY = 0.24858210854867147;

		// dark_wall_shelf_9
		const dark_wall_shelf_9 = this.add.image(893, -864, "dark_wall_shelf");
		dark_wall_shelf_9.scaleX = 0.24858210854867147;
		dark_wall_shelf_9.scaleY = 0.24858210854867147;

		// dark_wall_shelf_10
		const dark_wall_shelf_10 = this.add.image(642, -864, "dark_wall_shelf");
		dark_wall_shelf_10.scaleX = 0.24858210854867147;
		dark_wall_shelf_10.scaleY = 0.24858210854867147;

		// dark_wall_shelf_11
		const dark_wall_shelf_11 = this.add.image(393, -864, "dark_wall_shelf");
		dark_wall_shelf_11.scaleX = 0.24858210854867147;
		dark_wall_shelf_11.scaleY = 0.24858210854867147;

		// dark_wall_shelf_12
		const dark_wall_shelf_12 = this.add.image(143, -864, "dark_wall_shelf");
		dark_wall_shelf_12.scaleX = 0.24858210854867147;
		dark_wall_shelf_12.scaleY = 0.24858210854867147;

		// dark_wall_shelf_13
		const dark_wall_shelf_13 = this.add.image(-46, -864, "dark_wall_shelf");
		dark_wall_shelf_13.scaleX = 0.24858210854867147;
		dark_wall_shelf_13.scaleY = 0.24858210854867147;

		// paint3
		const paint3 = this.add.image(1506, -417, "painting_03_white");
		paint3.scaleX = 0.14824858620703277;
		paint3.scaleY = 0.14824858620703277;

		// shelfup2
		const shelfup2 = this.physics.add.sprite(416, -466, "light_wall_shelf");
		shelfup2.scaleX = 0.1250780691733577;
		shelfup2.scaleY = 0.1250780691733577;
		shelfup2.body.setSize(1007, 85, false);

		// shelfup1
		const shelfup1 = this.physics.add.sprite(157, -601, "light_wall_shelf");
		shelfup1.scaleX = 0.1250780691733577;
		shelfup1.scaleY = 0.1250780691733577;
		shelfup1.body.setSize(1007, 85, false);

		// shelfup3
		const shelfup3 = this.physics.add.sprite(1273, -642, "light_wall_shelf");
		shelfup3.scaleX = 0.1250780691733577;
		shelfup3.scaleY = 0.1250780691733577;
		shelfup3.body.setSize(1007, 85, false);

		// plant2
		const plant2 = this.physics.add.sprite(893, 90, "house_plant_example_09");
		plant2.scaleX = 0.1061040744512593;
		plant2.scaleY = 0.08962343117466602;
		plant2.body.gravity.y = 1000;
		plant2.body.bounce.y = 0.3;
		plant2.body.checkCollision.up = false;
		plant2.body.setOffset(120, 0);
		plant2.body.setSize(380, 875, false);

		// plant4
		const plant4 = this.physics.add.sprite(153, -652, "house_plant_example_09");
		plant4.scaleX = 0.1061040744512593;
		plant4.scaleY = 0.08962343117466602;
		plant4.body.gravity.y = 1000;
		plant4.body.bounce.y = 0.3;
		plant4.body.checkCollision.up = false;
		plant4.body.setOffset(120, 0);
		plant4.body.setSize(300, 875, false);

		// plant1
		const plant1 = this.physics.add.sprite(124, 100, "house_plant_example_09");
		plant1.scaleX = 0.1061040744512593;
		plant1.scaleY = 0.08962343117466602;
		plant1.body.gravity.y = 1000;
		plant1.body.bounce.y = 0.3;
		plant1.body.checkCollision.up = false;
		plant1.body.setOffset(120, 0);
		plant1.body.setSize(250, 875, false);

		// plant5
		const plant5 = this.physics.add.sprite(1262, -685, "house_plant_example_09");
		plant5.scaleX = 0.1061040744512593;
		plant5.scaleY = 0.08962343117466602;
		plant5.body.gravity.y = 1000;
		plant5.body.bounce.y = 0.3;
		plant5.body.checkCollision.up = false;
		plant5.body.setOffset(120, 0);
		plant5.body.setSize(350, 875, false);

		// plant3
		const plant3 = this.physics.add.sprite(1151, 313, "house_plant_example_09");
		plant3.scaleX = 0.1061040744512593;
		plant3.scaleY = 0.08962343117466602;
		plant3.body.gravity.y = 1000;
		plant3.body.bounce.y = 0.3;
		plant3.body.checkCollision.up = false;
		plant3.body.setOffset(120, 0);
		plant3.body.setSize(380, 875, false);

		// broom
		const broom = new Broom(this, 1055, 494);
		this.add.existing(broom);

		// painting5
		const painting5 = this.physics.add.sprite(1096, -541, "painting_07_white");
		painting5.scaleX = 0.21696508565318373;
		painting5.scaleY = 0.21696508565318373;
		painting5.body.setSize(263, 320, false);

		// fallpainting1
		const fallpainting1 = new fallpainting(this, 649, 278);
		this.add.existing(fallpainting1);

		// fallpainting2
		const fallpainting2 = new fallpainting(this, 1150, 105);
		this.add.existing(fallpainting2);

		// paint4
		const paint4 = new fallpainting(this, 718, -442);
		this.add.existing(paint4);

		// spiderroom
		const spiderroom = new Spider(this, 653, -3);
		this.add.existing(spiderroom);
		spiderroom.scaleX = 0.2557486287841334;
		spiderroom.scaleY = 0.2557486287841334;

		// spider2
		const spider2 = new Spider(this, 646, -759);
		this.add.existing(spider2);
		spider2.scaleX = 0.2557486287841334;
		spider2.scaleY = 0.2557486287841334;

		// catPlayer
		const catPlayer = new CatPlayer(this, 131, 541);
		this.add.existing(catPlayer);
		catPlayer.body.velocity.x = 0;
		catPlayer.body.velocity.y = 0;
		catPlayer.body.maxVelocity.x = 10000;
		catPlayer.body.maxVelocity.y = 10000;
		catPlayer.body.maxAngular = 2000;
		catPlayer.body.allowGravity = true;
		catPlayer.body.collideWorldBounds = true;
		catPlayer.body.onWorldBounds = true;

		this.ceiling2 = ceiling2;
		this.emptyshelllight = emptyshelllight;
		this.bigcoach = bigcoach;
		this.ceiling1 = ceiling1;
		this.bottom = bottom;
		this.littletable = littletable;
		this.indoorwindow1 = indoorwindow1;
		this.shelf2 = shelf2;
		this.shelf1 = shelf1;
		this.wardrobe = wardrobe;
		this.bed = bed;
		this.shelf3 = shelf3;
		this.plantgreen = plantgreen;
		this.paint3 = paint3;
		this.shelfup2 = shelfup2;
		this.shelfup1 = shelfup1;
		this.shelfup3 = shelfup3;
		this.plant2 = plant2;
		this.plant4 = plant4;
		this.plant1 = plant1;
		this.plant5 = plant5;
		this.plant3 = plant3;
		this.broom = broom;
		this.painting5 = painting5;
		this.fallpainting1 = fallpainting1;
		this.fallpainting2 = fallpainting2;
		this.paint4 = paint4;
		this.spiderroom = spiderroom;
		this.spider2 = spider2;
		this.catPlayer = catPlayer;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling2;
	/** @type {Phaser.GameObjects.Image} */
	emptyshelllight;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bigcoach;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bottom;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	littletable;
	/** @type {IndoorWindow} */
	indoorwindow1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	wardrobe;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bed;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plantgreen;
	/** @type {Phaser.GameObjects.Image} */
	paint3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant3;
	/** @type {Broom} */
	broom;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting5;
	/** @type {fallpainting} */
	fallpainting1;
	/** @type {fallpainting} */
	fallpainting2;
	/** @type {fallpainting} */
	paint4;
	/** @type {Spider} */
	spiderroom;
	/** @type {Spider} */
	spider2;
	/** @type {CatPlayer} */
	catPlayer;

	/* START-USER-CODE */

	// Write your code here

	create() {




	this.UpdateGroup=this.add.group();
	this.CheeseGroup=this.add.group();
	this.DirtGroup=this.add.group();
	this.FlowerGroup=this.add.group();

	this.CatchBallGroup=this.add.group();

this.catchtheme=this.sound.add('takekey');
this.cheesecatchtheme=this.sound.add('GetMouse');
this.goaltheme=this.sound.add('missiongoal');
this.leveltheme=this.sound.add('maintheme');

this.leveltheme.play();

spidericon=true;

		this.camerapan=10;
		this.Restart=true;
		spidericon=true;
		this.CounterBalls=0;
MissionCount=5;

	this.editorCreate();
	this.indoorwindow1.Time=20000;
	StartPosX=2093;
	StartPosY=386;




	this.physics.world.enable(this.ceiling1);
	this.ceiling1.body.setImmovable(true);
		this.test();
		this.spiderroom.Moving=true;
		this.spider2.Moving=true;
		this.physics.world.setBounds(0, -850,1400, 2650);
		this.cameras.main.setBounds(0,-900,1400, 1600);
		this.cameras.main.setZoom(0.72);
		this.cameras.main.startFollow(this.catPlayer,true,100,100,0,this.camerapan);

		this.addCollidersBroom();

	this.plant1.item="flower";
		this.plant2.item="flower";
			this.plant3.item="flower";
				this.plant4.item="flower";
					this.plant5.item="flower";


		this.physics.add.collider(this.catPlayer,this.bottom);
	//	this.physics.add.collider(this.catPlayer,this.ceiling1);
		this.physics.add.overlap(this.catPlayer,this.FlowerGroup,this.CatchSpider,null,this);

		this.physics.add.collider(this.plant1,this.shelf3);
		this.physics.add.collider(this.catPlayer,this.plant1,this.push,null,this);
		this.physics.add.collider(this.plant1,this.bottom,this.DropAndLeaveMark,null,this);

			this.physics.add.collider(this.plant2,this.shelf2);
		this.physics.add.collider(this.catPlayer,this.plant2,this.push,null,this);
		this.physics.add.collider(this.plant2,this.bottom,this.DropAndLeaveMark,null,this);

			this.physics.add.collider(this.plant3,this.wardrobe);
		this.physics.add.collider(this.catPlayer,this.plant3,this.push,null,this);
		this.physics.add.collider(this.plant3,this.bottom,this.DropAndLeaveMark,null,this);

					this.physics.add.collider(this.plant4,this.shelfup1);
		this.physics.add.collider(this.catPlayer,this.plant4,this.push,null,this);
		this.physics.add.collider(this.plant4,this.bottom,this.DropAndLeaveMark,null,this);
		this.physics.add.collider(this.plant4,this.ceiling1,this.DropAndLeaveMark,null,this);

			this.physics.add.collider(this.plant5,this.shelfup3);
		this.physics.add.collider(this.catPlayer,this.plant5,this.push,null,this);
		this.physics.add.collider(this.plant5,this.bottom,this.DropAndLeaveMark,null,this);
		this.physics.add.collider(this.plant5,this.ceiling1,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.plantgreen,this.shelfup2);
		this.physics.add.collider(this.catPlayer,this.plantgreen,this.push,null,this);
		this.physics.add.collider(this.plantgreen,this.bottom,this.DropAndLeaveMark,null,this);
		this.physics.add.collider(this.plantgreen,this.ceiling1,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.fallpainting1,this.bottom,this.DropAndLeaveMark,null,this);
		this.physics.add.collider(this.fallpainting1.block,this.catPlayer,this.MakeObjectImmovabke,null,this);

		this.physics.add.collider(this.fallpainting2,this.bottom,this.DropAndLeaveMark,null,this);
		this.physics.add.collider(this.fallpainting2.block,this.catPlayer,this.MakeObjectImmovabke,null,this);

			this.physics.add.collider(this.paint4,this.ceiling1,this.DropAndLeaveMark,null,this);
		this.physics.add.collider(this.paint4.block,this.catPlayer,this.MakeObjectImmovabke,null,this);

	this.physics.add.overlap(this.broom,this.DirtGroup,this.StopBroom,null,this);
	//this.physics.add.overlap(this.catPlayer,this.this.FlowerGroup,this.CatchBall,null,this);
	this.physics.add.overlap(this.catPlayer,this.painting5,this.StickToObject,null,this);

		this.physics.add.overlap(this.catPlayer,this.spiderroom.spider1,this.GetHit,null,this);
			this.physics.add.overlap(this.catPlayer,this.spider2.spider1,this.GetHit,null,this);

					this.physics.add.overlap(this.catPlayer,this.indoorwindow1.waythrough,this.JumpOut,null,this);



	this.fallpainting2.painting.setTexture('painting_08_white');

	this.ceiling1.dirt="nodirt";
	this.plantgreen.dirt="nodirt";


		this.physics.add.collider(this.catPlayer,this.ceiling1);


		//this.CreatePlatform(this.ceiling1);

		this.CreatePlatform(this.littletable);


		this.CreatePlatform(this.bed);
		this.CreatePlatform(this.wardrobe);
		this.CreatePlatform(this.shelf1);
		this.CreatePlatform(this.shelf2);
		this.CreatePlatform(this.shelf3);

		this.CreatePlatform(this.shelfup1);
		this.CreatePlatform(this.shelfup2);
		this.CreatePlatform(this.shelfup3);


		this.CreatePlatform(this.emptyshelllight);
		this.CreatePlatform(this.bigcoach);
		this.CreatePlatform(this.emptyshelllight);

	//	this.CreatePlatform(this.paint1);
		// this.CreatePlatform(this.paint2);
		this.CreatePlatform(this.paint3);
	//	this.CreatePlatform(this.paint4);



	}


		JumpOut(cat,window){

			if(ShowCompletetext==false && window.WindowOpen){

	this.game.sound.stopAll();
		this.scene.start("Level");


			};

	}

	CatchSpider(Cat,Cheese){

	if(Cheese){
	Cheese.destroy();
		this.cheesecatchtheme.play();

		MissionCount--;

		if(MissionCount==0){
		ShowCompletetext=true;
		this.game.sound.stopAll();

		//this.scene.game.sound.stopAll();
		this.goaltheme.play();
		LevelSpider1Clear=true;

		this.time.addEvent({ delay:2000, callback:() => {
		this.cameras.main.fadeOut(1000);

		this.time.addEvent({ delay:1000, callback:() => {
		//this.scenelevelheme.stop();

		this.scene.start('Level');	

				}, callbackScope: this,repeat:0});
						}, callbackScope: this,repeat:0});

				}
			}
	}


	update(){

		if(ShowCompletetext){

			LevelSpider2Clear=true;
		};
		//thi


//this.DropDownWhenjumpCatonObject(this.paint1);
//this.DropDownWhenjumpCatonObject(this.paint2);
this.DropDownWhenjumpCatonObject(this.paint3);
//this.DropDownWhenjumpCatonObject(this.paint4);


	//	console.log(this.catPlayer.y);

		if(this.catPlayer.y<-145 && this.camerapan<=295 && this.Restart){

		this.cameras.main.startFollow(this.catPlayer,true,100,0,0,this.camerapan+=10);
		}
		else if(this.camerapan>=0 && this.catPlayer.y>=30)
			{
			this.cameras.main.startFollow(this.catPlayer,true,100,100,0,this.camerapan-=10);
			//	this.Restart=true;
			}

		if(this.camerapan==300)
			{
			//this.Restart=false;
			}



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
