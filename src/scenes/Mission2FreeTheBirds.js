
// You can write more code here

/* START OF COMPILED CODE */

class Mission2FreeTheBirds extends BaseScene {

	constructor() {
		super("Mission2FreeTheBirds");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// red_large_stripe_1
		const red_large_stripe_1 = this.add.image(1151, -144, "green");
		red_large_stripe_1.scaleX = -1.6714283175208793;
		red_large_stripe_1.scaleY = 4.466120202279784;
		red_large_stripe_1.angle = 90;
		red_large_stripe_1.tintTopLeft = 5656399;
		red_large_stripe_1.tintBottomLeft = 5394255;
		red_large_stripe_1.tintBottomRight = 16579836;

		// green
		const green = this.physics.add.sprite(1808, 710, "dark_blue_plain");
		green.scaleX = 32.14793267264455;
		green.scaleY = 0.18246271966093724;
		green.tintBottomLeft = 0;
		green.tintBottomRight = 197379;
		green.body.setSize(437, 1232, false);

		// red_large_stripe
		const red_large_stripe = this.add.tileSprite(1700, 256, 10000, 1382, "darkbluelargestripe");
		red_large_stripe.scaleX = 0.45;
		red_large_stripe.scaleY = 0.5119078991504932;
		red_large_stripe.tintTopLeft = 2763306;
		red_large_stripe.tintTopRight = 2170912;
		red_large_stripe.tileScaleX = 0.4;

		// lamp_05
		const lamp_05 = this.add.image(481, -41, "lamp_21");
		lamp_05.scaleX = 0.19276613868768133;
		lamp_05.scaleY = 0.19276613868768133;

		// ceilingbird2
		const ceilingbird2 = this.add.tileSprite(820, -102, 35000, 78, "skirting_light");
		ceilingbird2.scaleX = 0.18021693427896895;
		ceilingbird2.scaleY = 0.18021693427896895;
		ceilingbird2.flipY = true;

		// skirting_light
		const skirting_light = this.add.tileSprite(-271, 613, 35000, 63, "skirting_light");
		skirting_light.scaleX = 0.2528690000816929;
		skirting_light.scaleY = 0.2528690000816929;

		// bottom
		const bottom = this.physics.add.sprite(645, 668, "block_separator_01");
		bottom.scaleX = 9.338991107855268;
		bottom.scaleY = 0.5823602337408151;
		bottom.visible = false;
		bottom.body.pushable = false;
		bottom.body.immovable = true;
		bottom.body.setSize(695, 40, false);

		// rug_09
		const rug_09 = this.add.image(1148, 659, "rug_11");
		rug_09.scaleX = 0.26389195497089973;
		rug_09.scaleY = 0.11558843785287724;

		// plant2
		const plant2 = this.physics.add.sprite(1546, 320, "house_plant_example_16");
		plant2.scaleX = 0.0908183230208295;
		plant2.scaleY = 0.07663409793790858;
		plant2.body.gravity.y = 1000;
		plant2.body.bounce.y = 0.3;
		plant2.body.checkCollision.up = false;
		plant2.body.setOffset(150, 0);
		plant2.body.setSize(350, 999, false);

		// painting2
		const painting2 = this.physics.add.sprite(728, 174, "painting_07_light");
		painting2.scaleX = 0.19292882052114907;
		painting2.scaleY = 0.19292882052114907;
		painting2.alpha = 0.9;
		painting2.alphaTopLeft = 0.9;
		painting2.alphaTopRight = 0.9;
		painting2.alphaBottomLeft = 0.9;
		painting2.alphaBottomRight = 0.9;
		painting2.body.setSize(263, 320, false);

		// painting1
		const painting1 = this.physics.add.sprite(443, 329, "painting_05_gold");
		painting1.scaleX = 0.2006393923978889;
		painting1.scaleY = 0.2006393923978889;
		painting1.alpha = 0.9;
		painting1.alphaTopLeft = 0.9;
		painting1.alphaTopRight = 0.9;
		painting1.alphaBottomLeft = 0.9;
		painting1.alphaBottomRight = 0.9;
		painting1.body.setSize(263, 320, false);

		// lighttable
		const lighttable = this.physics.add.sprite(2169, 597, "light_wood_table");
		lighttable.scaleX = 0.1514629244949275;
		lighttable.scaleY = 0.1514629244949275;
		lighttable.body.setOffset(0, 70);
		lighttable.body.setSize(1400, 681, false);

		// seatbrown
		const seatbrown = this.physics.add.sprite(646, 576, "brown_2_seat");
		seatbrown.scaleX = 0.17678336882736223;
		seatbrown.scaleY = 0.17678336882736223;
		seatbrown.body.pushable = false;
		seatbrown.body.immovable = true;
		seatbrown.body.setOffset(120, 10);
		seatbrown.body.setSize(1000, 327, false);

		// littletable
		const littletable = this.physics.add.sprite(165, 600, "light_table_round");
		littletable.scaleX = 0.5122056698979438;
		littletable.scaleY = 0.5122056698979438;
		littletable.body.setOffset(0, 20);
		littletable.body.setSize(210, 200, false);

		// shelf
		const shelf = this.physics.add.sprite(1169, 147, "light_wall_shelf");
		shelf.scaleX = 0.10653068545962154;
		shelf.scaleY = 0.08832595929034438;
		shelf.body.setSize(1007, 85, false);

		// shelf1
		const shelf1 = this.physics.add.sprite(2616, 1081, "light_wall_shelf");
		shelf1.scaleX = 0.1;
		shelf1.scaleY = 0.08542553504638906;
		shelf1.body.setSize(1007, 85, false);

		// side_wall_skirting_no_wall_light
		const side_wall_skirting_no_wall_light = this.add.image(2109, -51, "side_wall_skirting_no_wall_light");
		side_wall_skirting_no_wall_light.scaleX = 0.19573239282698118;
		side_wall_skirting_no_wall_light.scaleY = 0.19573239282698118;
		side_wall_skirting_no_wall_light.angle = -28;
		side_wall_skirting_no_wall_light.visible = false;

		// ceiling
		const ceiling = this.physics.add.sprite(1722, -32, "block_separator_01");
		ceiling.scaleX = 5.504107162267043;
		ceiling.scaleY = 1.250533984076435;
		ceiling.visible = false;
		ceiling.body.pushable = false;
		ceiling.body.immovable = true;
		ceiling.body.setSize(695, 40, false);

		// shelf2
		const shelf2 = this.physics.add.sprite(2984, -296, "light_wall_shelf");
		shelf2.scaleX = 0.11686457164371061;
		shelf2.scaleY = 0.11686457164371061;
		shelf2.body.setSize(1007, 85, false);

		// shelf4
		const shelf4 = this.physics.add.sprite(3050, 506, "dark_5_shelves");
		shelf4.scaleX = 0.2428082681369458;
		shelf4.scaleY = 0.2428082681369458;
		shelf4.body.setSize(550, 1109, false);

		// bookcasesec
		const bookcasesec = this.physics.add.sprite(1547, 500, "dark_5_shelves");
		bookcasesec.scaleX = 0.2428082681369432;
		bookcasesec.scaleY = 0.2428082681369432;
		bookcasesec.body.setSize(600, 85, false);

		// broom
		const broom = new Broom(this, 2591, 577);
		this.add.existing(broom);
		broom.scaleX = 0.23538747990975126;
		broom.scaleY = 0.23538747990975126;

		// dogInterior1
		const dogInterior1 = new DogInterior(this, 1151, 548);
		this.add.existing(dogInterior1);
		dogInterior1.scaleX = 0.7996953116660073;
		dogInterior1.scaleY = 0.7996953116660073;

		// painting6
		const painting6 = this.physics.add.sprite(2438, 318, "painting_06_light");
		painting6.scaleX = 0.206889347132643;
		painting6.scaleY = 0.206889347132643;
		painting6.alpha = 0.9;
		painting6.alphaTopLeft = 0.9;
		painting6.alphaTopRight = 0.9;
		painting6.alphaBottomLeft = 0.9;
		painting6.alphaBottomRight = 0.9;
		painting6.body.setSize(263, 320, false);

		// birdcage2
		const birdcage2 = new birdcage(this, 1166, 94);
		this.add.existing(birdcage2);
		birdcage2.scaleX = 0.6877644031308332;
		birdcage2.scaleY = 0.6877644031308332;

		// paintingfall1
		const paintingfall1 = new fallpainting(this, 954, 328);
		this.add.existing(paintingfall1);

		// lamp
		const lamp = this.add.image(2349, -55, "lamp_21");
		lamp.scaleX = 0.19276613868768133;
		lamp.scaleY = 0.19276613868768133;

		// keybird
		const keybird = new BlueBirdCage(this, 1907, -75);
		this.add.existing(keybird);
		keybird.scaleX = 1.118988051478907;
		keybird.scaleY = 1.118988051478907;

		// shelf_1
		const shelf_1 = this.physics.add.sprite(2130, 192, "light_wall_shelf");
		shelf_1.scaleX = 0.10653068545962154;
		shelf_1.scaleY = 0.08832595929034438;
		shelf_1.body.setSize(1007, 85, false);

		// shelflast
		const shelflast = this.physics.add.sprite(3316, 193, "shelf");
		shelflast.scaleX = 0.40290862300587477;
		shelflast.scaleY = 0.30068691312212725;
		shelflast.tintTopLeft = 13746462;
		shelflast.body.setOffset(0, 20);
		shelflast.body.setSize(300, 85, false);

		// shelftopi
		const shelftopi = this.add.nineslice(1167, 157, "shelf", undefined, 423, 0, 110, 102, 0, 0);
		shelftopi.scaleX = 0.40290862300587477;
		shelftopi.scaleY = 0.30068691312212725;

		// seat
		const seat = this.physics.add.sprite(4679, 614, "brown_1_seat");
		seat.scaleX = 0.17941663085525184;
		seat.scaleY = 0.17941663085525184;
		seat.body.pushable = false;
		seat.body.immovable = true;
		seat.body.setSize(1070, 858, false);

		// painting5
		const painting5 = this.physics.add.sprite(1838, 284, "painting_07_light");
		painting5.scaleX = 0.206889347132643;
		painting5.scaleY = 0.206889347132643;
		painting5.alpha = 0.9;
		painting5.alphaTopLeft = 0.9;
		painting5.alphaTopRight = 0.9;
		painting5.alphaBottomLeft = 0.9;
		painting5.alphaBottomRight = 0.9;
		painting5.body.setSize(263, 320, false);

		// plant1
		const plant1 = this.physics.add.sprite(171, 42, "house_plant_example_13");
		plant1.scaleX = 0.08893124083033041;
		plant1.scaleY = 0.08893124083033041;
		plant1.body.gravity.y = 1000;
		plant1.body.bounce.y = 0.2;
		plant1.body.checkCollision.up = false;
		plant1.body.setSize(500, 760, false);

		// shelf_3
		const shelf_3 = this.physics.add.sprite(169, 102, "light_wall_shelf");
		shelf_3.scaleX = 0.1;
		shelf_3.scaleY = 0.08542553504638906;
		shelf_3.body.setSize(1007, 85, false);

		// shelfhigh
		const shelfhigh = this.physics.add.sprite(169, 112, "shelf");
		shelfhigh.scaleX = 0.40290862300587477;
		shelfhigh.scaleY = 0.30068691312212725;
		shelfhigh.tintTopLeft = 13746462;
		shelfhigh.body.pushable = false;
		shelfhigh.body.immovable = true;
		shelfhigh.body.setOffset(0, 20);
		shelfhigh.body.setSize(300, 85, false);

		// plant3
		const plant3 = this.physics.add.sprite(2162, 502, "house_plant_example_13");
		plant3.scaleX = 0.09850278717195333;
		plant3.scaleY = 0.09850278717195333;
		plant3.body.velocity.y = 1000;
		plant3.body.gravity.y = 1000;
		plant3.body.bounce.y = 0.3;
		plant3.body.checkCollision.up = false;
		plant3.body.setSize(550, 760, false);

		// shelftopi2
		const shelftopi2 = this.add.nineslice(2124, 204, "shelf", undefined, 423, 0, 110, 102, 0, 0);
		shelftopi2.scaleX = 0.40290862300587477;
		shelftopi2.scaleY = 0.30068691312212725;

		// shelftopiB
		const shelftopiB = this.add.nineslice(2723, 191, "shelf", undefined, 343, 0, 110, 116, 0, 0);
		shelftopiB.scaleX = 0.40290862300587477;
		shelftopiB.scaleY = 0.30068691312212725;

		// paintingfall2
		const paintingfall2 = new fallpainting(this, 3517, 331);
		this.add.existing(paintingfall2);

		// catPlayer
		const catPlayer = new CatPlayer(this, 169, 406);
		this.add.existing(catPlayer);
		catPlayer.scaleX = 0.14924508984318768;
		catPlayer.scaleY = 0.14924508984318768;
		catPlayer.body.maxAngular = 2000;
		catPlayer.body.collideWorldBounds = true;
		catPlayer.body.onWorldBounds = true;

		// windowout1
		const windowout1 = new IndoorWindow(this, 165, 247);
		this.add.existing(windowout1);

		// enemybird1
		const enemybird1 = new EnemyBird(this, 2980, -32);
		this.add.existing(enemybird1);

		// birdcage1
		const birdcage1 = new birdcage(this, 2720, 110);
		this.add.existing(birdcage1);
		birdcage1.scaleX = 0.6877644031308332;
		birdcage1.scaleY = 0.6877644031308332;

		this.green = green;
		this.red_large_stripe = red_large_stripe;
		this.ceilingbird2 = ceilingbird2;
		this.bottom = bottom;
		this.plant2 = plant2;
		this.painting2 = painting2;
		this.painting1 = painting1;
		this.lighttable = lighttable;
		this.seatbrown = seatbrown;
		this.littletable = littletable;
		this.shelf = shelf;
		this.shelf1 = shelf1;
		this.ceiling = ceiling;
		this.shelf2 = shelf2;
		this.shelf4 = shelf4;
		this.bookcasesec = bookcasesec;
		this.broom = broom;
		this.dogInterior1 = dogInterior1;
		this.painting6 = painting6;
		this.birdcage2 = birdcage2;
		this.paintingfall1 = paintingfall1;
		this.keybird = keybird;
		this.shelf_1 = shelf_1;
		this.shelflast = shelflast;
		this.shelftopi = shelftopi;
		this.seat = seat;
		this.painting5 = painting5;
		this.plant1 = plant1;
		this.shelf_3 = shelf_3;
		this.shelfhigh = shelfhigh;
		this.plant3 = plant3;
		this.shelftopi2 = shelftopi2;
		this.shelftopiB = shelftopiB;
		this.paintingfall2 = paintingfall2;
		this.catPlayer = catPlayer;
		this.windowout1 = windowout1;
		this.enemybird1 = enemybird1;
		this.birdcage1 = birdcage1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	green;
	/** @type {Phaser.GameObjects.TileSprite} */
	red_large_stripe;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceilingbird2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bottom;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lighttable;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	seatbrown;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	littletable;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	ceiling;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bookcasesec;
	/** @type {Broom} */
	broom;
	/** @type {DogInterior} */
	dogInterior1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting6;
	/** @type {birdcage} */
	birdcage2;
	/** @type {fallpainting} */
	paintingfall1;
	/** @type {BlueBirdCage} */
	keybird;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelflast;
	/** @type {Phaser.GameObjects.NineSlice} */
	shelftopi;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	seat;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf_3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfhigh;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant3;
	/** @type {Phaser.GameObjects.NineSlice} */
	shelftopi2;
	/** @type {Phaser.GameObjects.NineSlice} */
	shelftopiB;
	/** @type {fallpainting} */
	paintingfall2;
	/** @type {CatPlayer} */
	catPlayer;
	/** @type {IndoorWindow} */
	windowout1;
	/** @type {EnemyBird} */
	enemybird1;
	/** @type {birdcage} */
	birdcage1;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.UpdateGroup=this.add.group();
		this.DirtGroup=this.add.group();
		this.BirdCatchGroup=this.add.group();

		this.EggGroup=this.add.group();

		this.KeyGroup=this.add.group();
		this.birdcatchtheme=this.sound.add('GetMouse');
		this.goaltheme=this.sound.add('missiongoal');
		this.keytheme=this.sound.add('takekey');


this.leveltheme=this.sound.add('maintheme');

this.leveltheme.play();

	StartPosX=2093;
	StartPosY=386;

		this.BirdCounter=0;
		//this.AmountMouse=5;

		birdicon=true;
		MissionCount=3;

		this.editorCreate();
		this.test();
		this.cameras.main.setZoom(0.72);
		this.addCollidersBroom();
		this.physics.world.setBounds(0, -120,3650, 800);
		this.cameras.main.setBounds(0,-120,3700, 800);

		this.enemybird1.play('FlyRedBird');
		this.enemybird1.upclose=false;

		this.MissionCount=3;

		this.physics.add.collider(this.catPlayer,this.bottom);
		this.cameras.main.startFollow(this.catPlayer,false,0.2,0,50,0);

this.physics.world.enable(this.ceilingbird2);
this.ceilingbird2.body.setImmovable(true);
this.keybird.body.setBounce(0.2);

this.paintingfall2.item="key";


		this.CreatePlatform(this.shelf);
		this.CreatePlatform(this.shelf2);
			//this.CreatePlatform(this.shelf3);
		this.CreatePlatform(this.shelf1);
		this.CreatePlatform(this.shelf4);
		this.CreatePlatform(this.seatbrown);

		//this.CreatePlatform(this.painting3);
		this.CreatePlatform(this.littletable);
		this.CreatePlatform(this.lighttable);

		this.CreatePlatform(this.bookcasesec);
		this.CreatePlatform(this.shelfhigh);
		this.CreatePlatform(this.shelftopi);
		this.CreatePlatform(this.shelftopi2);

		this.CreatePlatform(this.shelflast);



		//this.CreatePlatform(this.paintingfall1.block);
		this.time.addEvent({ delay:1000, callback:() => {

this.ShootEgg();


					}, callbackScope: this,repeat:-1 });



		 this.MoveEnemyBird=this.tweens.add({
            targets: this.enemybird1,
         	x:"-=2500",

	 duration:10000,
	//scale:{start: 0.1, to: 0.5 },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1,
			flipX:false,


        });


this.shelftopi2.body.setOffset(0,20);
this.shelftopi.body.setOffset(0,20);
		//this.CreatePlatform(this.shelflast);
		//this.CreatePlatform(this.smallsheve);
this.CreatePlatform(this.shelftopiB);




			this.physics.add.collider(this.birdcage2,this.shelf);

			this.physics.add.collider(this.birdcage1,this.shelftopiB);
			this.physics.add.collider(this.catPlayer,this.birdcage1,this.push,null,this);
			this.physics.add.collider(this.birdcage1,this.bottom,this.DropAndLeaveMark,null,this);


			this.physics.add.collider(this.keybird,this.shelftopi2);
			this.physics.add.collider(this.keybird,this.bottom);
			this.physics.add.collider(this.keybird.iconbird,this.bottom);
			this.physics.add.collider(this.keybird.iconbird,this.ceilingbird2);
		//	this.physics.add.collider(this.birdcage3,this.shelflast);
			this.physics.add.collider(this.catPlayer,this.KeyGroup,this.TakeKey,null,this);
			this.physics.add.collider(this.catPlayer,this.keybird,this.pushblue,null,this);
			//this.physics.add.overlap(this.catPlayer,this.keybird.iconbird,this.EatBirdBlue,null,this);
			//this.physics.add.collider(this.catPlayer,this.keybird,this.OpenBlueCage,null,this);
			//this.physics.add.collider(this.birdcage2,this.bottom,this.OpenCage,null,this);
			this.physics.add.collider(this.birdcage2,this.bottom,this.DropAndLeaveMark,null,this);
			this.physics.add.collider(this.birdcage2.birdorange,this.bottom);
		this.physics.add.collider(this.catPlayer,this.birdcage2,this.push,null,this);
		//this.physics.add.overlap(this.catPlayer,this.birdcage2.birdorange,this.EatBird,null,this);

		this.physics.add.overlap(this.catPlayer,this.BirdCatchGroup,this.EatBird,null,this);

		this.physics.add.collider(this.catPlayer,this.plant1,this.push,null,this);
		this.physics.add.collider(this.shelfhigh,this.plant1);
		this.physics.add.collider(this.plant1,this.bottom,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.catPlayer,this.plant2,this.push,null,this);
		this.physics.add.collider(this.bookcasesec,this.plant2);
		this.physics.add.collider(this.plant2,this.bottom,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.catPlayer,this.plant3,this.push,null,this);
		this.physics.add.collider(this.lighttable,this.plant3);
		this.physics.add.collider(this.plant3,this.bottom,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.paintingfall1.block,this.catPlayer,this.MakeObjectImmovabke,null,this);
		this.physics.add.collider(this.paintingfall1,this.bottom,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.paintingfall2.block,this.catPlayer,this.MakeObjectImmovabke,null,this);
		this.physics.add.collider(this.paintingfall2,this.bottom,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.birdcage2.birdorange,this.ceiling);
		//sthis.physics.add.collider(this.birdcage2.birdorange,this.bottom);

			this.physics.add.overlap(this.catPlayer,this.painting1,this.StickToObject,null,this);
			this.physics.add.overlap(this.catPlayer,this.painting2,this.StickToObject,null,this);

			//this.physics.add.overlap(this.catPlayer,this.painting3,this.StickToObject,null,this);
			this.physics.add.overlap(this.catPlayer,this.painting4,this.StickToObject,null,this);
			this.physics.add.overlap(this.catPlayer,this.painting5,this.StickToObject,null,this);
			this.physics.add.overlap(this.catPlayer,this.painting6,this.StickToObject,null,this);
			this.physics.add.overlap(this.catPlayer,this.painting7,this.StickToObject,null,this);

			this.physics.add.overlap(this.broom,this.DirtGroup,this.StopBroom,null,this);

		this.physics.add.overlap(this.catPlayer,this.dogInterior1.dog,this.GetHit,null,this);

		this.physics.add.overlap(this.catPlayer,this.EggGroup,this.GetHit,null,this);
			this.physics.add.overlap(this.catPlayer,this.enemybird1,this.GetHit,null,this);

		this.physics.add.overlap(this.catPlayer,this.windowout1.waythrough,this.JumpOut,null,this);

		this.physics.add.collider(this.BirdCatchGroup,this.ceilingbird2);





	}


		JumpOut(cat,window){

			if(ShowCompletetext==false && window.WindowOpen){

	this.game.sound.stopAll();
		this.scene.start("Level");
		StartPosX=2093;
		StartPosY=386;

			};

	}

ShootEgg(){

		if(this.enemybird1.upclose){

			console.log('shoot egg');
					this.egg = this.physics.add.sprite(this.enemybird1.x, this.enemybird1.y+28, "egg grey").setScale(0.07);
					this.egg.body.setGravityY(1000);
					this.EggGroup.add(this.egg);


		};

};


	EatBirdBlue(Cat,Bird){

	if(Bird.active && Bird.readytogeteaten==true){
MissionCount--;
	Bird.destroy();
	this.mousecatchtheme.play();
	};

			if(MissionCount==0){
		ShowCompletetext=true;
			this.goaltheme.play();
			LevelBird1Clear=true;
		//	this.catPlayer.body.enable=false;
			//this.GoBackToLevel();

	this.time.addEvent({ delay:2000, callback:() => {
	this.cameras.main.fadeOut(1000);

	this.time.addEvent({ delay:1000, callback:() => {
	this.game.sound.stopAll();
	this.scene.start('Level');	

				}, callbackScope: this,repeat:0});
						}, callbackScope: this,repeat:0});
			}	

	}

	pushblue(cat, plant){

	if(cat.Key1 && plant.OpenOnce){
	plant.cage.setTexture('metal_bird_open');
	this.Birdie=new BlackBird(this, plant.x+210, plant.y+120).setScale(0.1);
	plant.OpenOnce=false;
	plant.iconbird.destroy();

this.add.existing(this.Birdie);

	}

if(cat.body.touching.right){
	cat.body.x-=7;
	plant.body.setVelocityX(20);
}else if(cat.body.touching.left){
cat.body.x+=7;
	plant.body.setVelocityX(-20);
}


		this.time.addEvent({ delay:400, callback:() => {
		if(plant.active){
			plant.body.setVelocityX(0);
}

}, callbackScope: this,repeat:0 });


	}

EatBird(Cat,Bird){

	if(Bird){

	Bird.destroy();
	MissionCount--;
	this.mousecatchtheme.play();


		if(MissionCount==0){
		ShowCompletetext=true;
			this.goaltheme.play();
			LevelBird1Clear=true;
		//	this.catPlayer.body.enable=false;
			//this.GoBackToLevel();

	this.time.addEvent({ delay:2000, callback:() => {
	this.cameras.main.fadeOut(1000);

	this.time.addEvent({ delay:1000, callback:() => {
	this.game.sound.stopAll();
	this.scene.start('Level');	

				}, callbackScope: this,repeat:0});
						}, callbackScope: this,repeat:0});
			}					
		}
	}




	OpenBlueCage(Cat,Cage){

Cage.cage.setTexture('metal_bird_open');

if(Cage.iconbird.active){



};


	};



	TakeKey(Cat, Key){

if(Key){

Key.destroy();
Cat.Key1=true;
this.keytheme.play();

}


	}



	update(){

		if(Math.abs(this.enemybird1.x-this.catPlayer.x)<200)


		{

this.enemybird1.upclose=true;

		}else{

			this.enemybird1.upclose=false;
		}

		if(ShowCompletetext){

			LevelBird2Clear=true;

		};


this.DropDownWhenjumpCatonObject(this.paintingfall1);



			this.UpdateGroup.children.iterate(function(child){

if(child){

	child.update();

};

  });

  			this.EggGroup.children.iterate(function(child){

if(child){
	if(child.y>1050){
	child.destroy();
	}



};

  });

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
