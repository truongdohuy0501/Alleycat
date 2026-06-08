
// You can write more code here

/* START OF COMPILED CODE */

class Mission1FreeTheBirds extends BaseScene {

	constructor() {
		super("Mission1FreeTheBirds");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// green
		const green = this.physics.add.sprite(713, 660, "dark_blue_plain");
		green.scaleX = 15.206395266390427;
		green.scaleY = 0.059560422703864246;
		green.flipY = true;
		green.tintTopLeft = 3421244;
		green.tintTopRight = 2631982;
		green.tintBottomLeft = 15132392;
		green.tintBottomRight = 14014174;
		green.body.setSize(128, 1382, false);

		// bottom
		const bottom = this.physics.add.sprite(804, 695, "block_separator_01");
		bottom.scaleX = 5.504107162267043;
		bottom.scaleY = 1.250533984076435;
		bottom.visible = false;
		bottom.body.pushable = false;
		bottom.body.immovable = true;
		bottom.body.setSize(695, 40, false);

		// redlargestrip
		const redlargestrip = this.add.tileSprite(657, 257, 3700, 1382, "darkbluelargestripe");
		redlargestrip.scaleX = 0.4435338811109274;
		redlargestrip.scaleY = 0.5225806620665265;
		redlargestrip.tintTopLeft = 2368548;
		redlargestrip.tintTopRight = 2631979;
		redlargestrip.tintBottomLeft = 12303309;
		redlargestrip.tintBottomRight = 11910911;
		redlargestrip.tileScaleX = 0.39;

		// skirting_light_1
		const skirting_light_1 = this.add.tileSprite(651, 614, 10000, 63, "skirting_light");
		skirting_light_1.scaleX = 0.18;
		skirting_light_1.scaleY = 0.2528690000816929;

		// rug_09
		const rug_09 = this.add.image(584, 654, "rug_11");
		rug_09.scaleX = 0.26389195497089973;
		rug_09.scaleY = 0.08214809812091861;

		// paint2
		const paint2 = this.physics.add.sprite(433, 264, "painting_07_light");
		paint2.scaleX = 0.18452014277084647;
		paint2.scaleY = 0.18452014277084647;
		paint2.body.setOffset(0, 5);
		paint2.body.setSize(263, 800, false);

		// windowout
		const windowout = new IndoorWindow(this, 146, 299);
		this.add.existing(windowout);

		// ceilingbird
		const ceilingbird = this.add.tileSprite(625, -72, 3500, 78, "skirting_light");
		ceilingbird.scaleX = 0.5248939372401809;
		ceilingbird.scaleY = 0.12;
		ceilingbird.visible = false;

		// paint1
		const paint1 = this.physics.add.sprite(1574, 355, "painting_05_gold");
		paint1.scaleX = 0.1967513749987968;
		paint1.scaleY = 0.1967513749987968;
		paint1.tintTopLeft = 11914933;
		paint1.body.setSize(263, 320, false);

		// littletable
		const littletable = this.physics.add.sprite(142, 619, "light_table_round");
		littletable.scaleX = 0.436920386027289;
		littletable.scaleY = 0.436920386027289;
		littletable.body.setOffset(0, 20);
		littletable.body.setSize(210, 200, false);

		// birdcagehouse2
		const birdcagehouse2 = new birdcage(this, 241, 22);
		this.add.existing(birdcagehouse2);
		birdcagehouse2.scaleX = 0.7399239262541515;
		birdcagehouse2.scaleY = 0.7399239262541515;

		// seat
		const seat = this.physics.add.sprite(1042, 593, "brown_1_seat");
		seat.scaleX = 0.17941663085525184;
		seat.scaleY = 0.17941663085525184;
		seat.body.pushable = false;
		seat.body.immovable = true;
		seat.body.setSize(1070, 858, false);

		// birdcagehouse
		const birdcagehouse = new birdcage(this, 1229, 42);
		this.add.existing(birdcagehouse);
		birdcagehouse.scaleX = 0.7399239262541515;
		birdcagehouse.scaleY = 0.7399239262541515;

		// paint3
		const paint3 = this.physics.add.sprite(970, 210, "painting_02_gold");
		paint3.scaleX = 0.15084286651798165;
		paint3.scaleY = 0.15084286651798165;
		paint3.body.setSize(300, 500, false);

		// shelf
		const shelf = this.physics.add.sprite(240, 107, "shelf");
		shelf.scaleX = 0.39242656855214236;
		shelf.scaleY = 0.2890376829521746;
		shelf.tintTopLeft = 13746462;
		shelf.body.setOffset(0, 20);
		shelf.body.setSize(300, 85, false);

		// shelfbird
		const shelfbird = this.physics.add.sprite(1226, 122, "light_wall_shelf");
		shelfbird.scaleX = 0.10135985864172468;
		shelfbird.scaleY = 0.12374465921925788;
		shelfbird.visible = false;
		shelfbird.body.pushable = false;
		shelfbird.body.immovable = true;
		shelfbird.body.setSize(1007, 85, false);

		// eu_double_plug
		const eu_double_plug = this.add.image(1584, 600, "eu_double_plug");
		eu_double_plug.scaleX = 0.28675824532206945;
		eu_double_plug.scaleY = 0.28675824532206945;

		// dogInterior1
		const dogInterior1 = new DogInterior(this, 583, 547);
		this.add.existing(dogInterior1);
		dogInterior1.scaleX = 0.7973288138867352;
		dogInterior1.scaleY = 0.7973288138867352;

		// broom
		const broom = new Broom(this, 996, 549);
		this.add.existing(broom);

		// shelf_1
		const shelf_1 = this.physics.add.sprite(1224, 124, "shelf");
		shelf_1.blendMode = Phaser.BlendModes.COLOR;
		shelf_1.scaleX = 0.38421524363080617;
		shelf_1.scaleY = 0.2665935245026053;
		shelf_1.body.setSize(309, 127, false);

		// catPlayer
		const catPlayer = new CatPlayer(this, 141, 426);
		this.add.existing(catPlayer);
		catPlayer.scaleX = 0.1566678798725213;
		catPlayer.scaleY = 0.1566678798725213;
		catPlayer.body.maxAngular = 3000;
		catPlayer.body.collideWorldBounds = true;
		catPlayer.body.onWorldBounds = true;
		catPlayer.body.setOffset(130, 50);
		catPlayer.body.setSize(340, 460, false);

		// green_1
		const green_1 = this.add.image(559, -99, "dark_blue_plain");
		green_1.scaleX = 20.127144062113178;
		green_1.scaleY = -0.04350488901361693;
		green_1.tintTopLeft = 1710618;
		green_1.tintTopRight = 1907483;
		green_1.tintBottomLeft = 8356230;
		green_1.tintBottomRight = 7895421;

		// skirting_white
		const skirting_white = this.add.tileSprite(561, -65, 10000, 78, "skirting_light");
		skirting_white.scaleX = 0.2;
		skirting_white.scaleY = 0.11287520554959826;
		skirting_white.tintTopLeft = 9401974;
		skirting_white.tintTopRight = 9271930;
		skirting_white.tintBottomLeft = 9600381;
		skirting_white.tintBottomRight = 9204338;

		// small_bill_board
		const small_bill_board = this.add.image(205, 98, "small_bill_board");
		small_bill_board.visible = false;

		// lamp
		const lamp = this.add.nineslice(650, 23, "lamp_21", undefined, 321, 1025, 1, 5, 63, 306);
		lamp.scaleX = 0.21730627408134237;
		lamp.scaleY = 0.21730627408134237;

		// ellipse_5
		const ellipse_5 = this.add.ellipse(648, -90, 128, 128);
		ellipse_5.scaleX = 0.30280492328814523;
		ellipse_5.scaleY = 0.06077007969683164;
		ellipse_5.alpha = 0.4;
		ellipse_5.isFilled = true;
		ellipse_5.fillColor = 657673;

		// fallpainting1
		const fallpainting1 = new fallpainting(this, 726, 387);
		this.add.existing(fallpainting1);

		// paintlamp
		const paintlamp = this.physics.add.sprite(651, 119, "painting_07_light");
		paintlamp.scaleX = 0.18904080576951804;
		paintlamp.scaleY = 0.18904080576951804;
		paintlamp.visible = false;
		paintlamp.body.setOffset(0, 5);
		paintlamp.body.setSize(263, 800, false);

		// paintlampfloor
		const paintlampfloor = this.physics.add.sprite(1524, 496, "painting_07_light");
		paintlampfloor.scaleX = 0.18904080576951804;
		paintlampfloor.scaleY = 0.18904080576951804;
		paintlampfloor.visible = false;
		paintlampfloor.body.setOffset(0, 5);
		paintlampfloor.body.setSize(263, 800, false);

		// plantlast
		const plantlast = this.physics.add.sprite(1936, -14, "house_plant_example_13");
		plantlast.scaleX = 0.10702449975629494;
		plantlast.scaleY = 0.10702449975629494;
		plantlast.body.setSize(691, 760, false);

		// lamp_02
		const lamp_02 = this.add.image(1732, 823, "lamp_02");
		lamp_02.scaleX = 0.252030275060952;
		lamp_02.scaleY = 0.252030275060952;

		// eu_double_plug_1
		const eu_double_plug_1 = this.add.image(1306, 598, "eu_double_plug");
		eu_double_plug_1.scaleX = 0.2752665089202936;
		eu_double_plug_1.scaleY = 0.2752665089202936;

		// shelf_2
		const shelf_2 = this.physics.add.sprite(1937, 37, "shelf");
		shelf_2.blendMode = Phaser.BlendModes.COLOR;
		shelf_2.scaleX = 0.38421524363080617;
		shelf_2.scaleY = 0.2665935245026053;
		shelf_2.body.setSize(309, 127, false);

		// rectangle
		const rectangle = this.add.rectangle(634, 277, 128, 128);
		rectangle.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		rectangle.scaleX = 13.759510341208973;
		rectangle.scaleY = 6.674634624629279;
		rectangle.alpha = 0.12;
		rectangle.isFilled = true;
		rectangle.fillColor = 1119669;
		rectangle.strokeColor = 6766142;

		this.green = green;
		this.bottom = bottom;
		this.redlargestrip = redlargestrip;
		this.skirting_light_1 = skirting_light_1;
		this.paint2 = paint2;
		this.windowout = windowout;
		this.ceilingbird = ceilingbird;
		this.paint1 = paint1;
		this.littletable = littletable;
		this.birdcagehouse2 = birdcagehouse2;
		this.seat = seat;
		this.birdcagehouse = birdcagehouse;
		this.paint3 = paint3;
		this.shelf = shelf;
		this.shelfbird = shelfbird;
		this.dogInterior1 = dogInterior1;
		this.broom = broom;
		this.shelf_1 = shelf_1;
		this.catPlayer = catPlayer;
		this.lamp = lamp;
		this.fallpainting1 = fallpainting1;
		this.paintlamp = paintlamp;
		this.paintlampfloor = paintlampfloor;
		this.plantlast = plantlast;
		this.shelf_2 = shelf_2;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	green;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bottom;
	/** @type {Phaser.GameObjects.TileSprite} */
	redlargestrip;
	/** @type {Phaser.GameObjects.TileSprite} */
	skirting_light_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint2;
	/** @type {IndoorWindow} */
	windowout;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceilingbird;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	littletable;
	/** @type {birdcage} */
	birdcagehouse2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	seat;
	/** @type {birdcage} */
	birdcagehouse;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfbird;
	/** @type {DogInterior} */
	dogInterior1;
	/** @type {Broom} */
	broom;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf_1;
	/** @type {CatPlayer} */
	catPlayer;
	/** @type {Phaser.GameObjects.NineSlice} */
	lamp;
	/** @type {fallpainting} */
	fallpainting1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintlamp;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintlampfloor;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plantlast;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf_2;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.UpdateGroup=this.add.group();
		this.DirtGroup=this.add.group();
		this.BirdCatchGroup=this.add.group();
		StartPosX=682;
		StartPosY=299;

this.timer=0;
this.levelheme=this.sound.add('maintheme');
this.goaltheme=this.sound.add('missiongoal');
	this.levelheme.play();

	this.ColorLight=0xb5ceb5;

    	//this.lights.enable().setAmbientColor(this.ColorLight);


		//var lightwindow  = this.lights.addLight(this.windowfirst.x, this.windowfirst.y, 1000).setIntensity(1);


this.editorCreate();


//this.redlargestrip.setPipeline('Light2D');
	//	this.seat.setPipeline('Light2D');
	//	this.lamp.setPipeline('Light2D');
	//	this.windowout.waythrough.setPipeline('Light2D');

	//	this.plantlast.setPipeline('Light2D');
	//	this.redlargestrip.setPipeline('Light2D');
	//	this.paint3.setPipeline('Light2D');

	//this.paint1.setPipeline('Light2D');
//	this.paint2.setPipeline('Light2D');
	//this.fallpainting1.painting.setPipeline('Light2D');
//	this.green.setPipeline('Light2D');
				////	this.shelf.setPipeline('Light2D');
//this.shelf_2.setPipeline('Light2D');
//this.shelf_1.setPipeline('Light2D');




		this.physics.world.enable(this.ceilingbird);

		this.ceilingbird.body.setImmovable(true);
		this.test();
		birdicon=true;
		//broomwoosh
		this.BirdCounter=0;
		MissionCount=2
		this.addCollidersBroom();



		this.broomtheme=this.sound.add('broomwoosh');
		this.whacktheme=this.sound.add('whack');

//this.broom.setAngularVelocity(2100);
	this.CleanBroomOnce=true;
				//this.broom.setVelocityX(-50);

		this.physics.world.setBounds(0, -1600,1400, 3000);
		this.cameras.main.setBounds(0,-2900,1400, 3600);

		this.cameras.main.startFollow(this.catPlayer,false,500,0);
		this.physics.add.collider(this.catPlayer,this.bottom);
		this.physics.add.overlap(this.catPlayer,this.paint1,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paint2,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paint3,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.painting4,this.StickToObject,null,this);

		this.physics.add.overlap(this.catPlayer,this.paintlamp,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintlampfloor,this.StickToObject,null,this);



		this.windowout.mission="Level";
		const cam = this.cameras.main;

       // this.blockyController = cam.filters.external.addBlocky({ size: 4});
// Quick "Faux-CRT" setup
//const cam = this.cameras.main;
//cam.postFX.addBarrel(1.05); // Curves the screen
//cam.postFX.addVignette(0.5, 0.5, 1, 0.5); // Dark corners
//cam.postFX.addBloom(0xffffff, 1, 1, 1, 1.2); // Light glow

//rexcrtfilterplugin

//this.cameras.main.postFX.addBokeh(0.5, 0.2, 0.4);
		this.physics.add.collider(this.broom,this.bottom, this.BackToCleaning,null,this);
		this.CollideObjectsGroup=this.add.group();
		this.cameras.main.setZoom(0.72);

		this.CreatePlatform(this.shelf);
		this.CreatePlatform(this.littletable);
		this.CreatePlatform(this.shelfbird);
		this.CreatePlatform(this.seat);
		this.CreatePlatform(this.shelf_2);

		//this.CreatePlatform(this.desk);

		this.physics.add.collider(this.catPlayer,this.CollideObjectsGroup);
		this.physics.add.collider(this.catPlayer,this.birdcagehouse,this.push,null,this);
		this.physics.add.collider(this.catPlayer,this.birdcagehouse2,this.push,null,this);
		this.physics.add.overlap(this.catPlayer,this.BirdCatchGroup,this.EatBird,null,this);

		this.physics.add.collider(this.birdcagehouse2,this.shelf);
		this.physics.add.collider(this.birdcagehouse2,this.bottom,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.birdcagehouse2.birdorange,this.bottom);
		this.physics.add.collider(this.birdcagehouse2.birdorange,this.ceilingbird);

		this.physics.add.collider(this.birdcagehouse,this.bookcase);
		this.physics.add.collider(this.birdcagehouse,this.bottom,this.DropAndLeaveMark,null,this);
		//this.physics.add.collider(this.birdcagehouse.birdorange,this.bottom);
		//this.physics.add.collider(this.birdcagehouse.birdorange,this.ceilingbird);
		this.physics.add.collider(this.birdcagehouse,this.shelfm1);
		this.physics.add.collider(this.birdcagehouse,this.shelf);
		this.physics.add.collider(this.birdcagehouse,this.desk);

		this.physics.add.collider(this.birdcagehouse,this.shelfbird);
		//this.physics.add.overlap(this.catPlayer,this.birdcagehouse.birdorange,this.EatBird,null,this);
		//this.physics.add.overlap(this.catPlayer,this.birdcagehouse2.birdorange,this.EatBird,null,this);
		this.physics.add.overlap(this.catPlayer,this.broom,this.Kapow,null,this);


		this.physics.add.overlap(this.catPlayer,this.windowout.waythrough,this.GoTo,null,this);

		this.physics.add.overlap(this.catPlayer,this.dogInterior1.dog,this.GetHit,null,this);
			this.physics.add.overlap(this.broom,this.DirtGroup,this.StopBroom,null,this);

				this.ColorLight=0x322a2a;






this.MissionCount=2;
		}
		GoTo(cat,window){

			if(ShowCompletetext==false && window.WindowOpen==true){

		this.game.sound	.stopAll();
		this.scene.start("Level");
		StartPosX=682;
		StartPosY=299;

			}
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

	OpenCage(Cage,Floor){

		Cage.birdcage.visible=false;

	};


	PushObject(Cat,Cage){
//	Cage.body.setVelocityX(70);

		this.time.addEvent({ delay:200, callback:() => {
		if(Cage.active){
			Cage.body.setVelocityX(0);
}


}, callbackScope: this,repeat:0 });

	}

	update(time, delta){

if(ShowCompletetext){

			LevelBird1Clear=true;
		};
		//this.DropDownWhenjumpCatonObject(this.paint1);
		//this.DropDownWhenjumpCatonObject(this.paint2);

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
