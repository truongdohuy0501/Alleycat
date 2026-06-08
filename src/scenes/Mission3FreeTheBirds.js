
// You can write more code here

/* START OF COMPILED CODE */

class Mission3FreeTheBirds extends BaseScene {

	constructor() {
		super("Mission3FreeTheBirds");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// red_large_stripe_1
		const red_large_stripe_1 = this.add.image(957, -120, "green");
		red_large_stripe_1.scaleX = -1.6714283175208793;
		red_large_stripe_1.scaleY = 5.132801232728735;
		red_large_stripe_1.angle = 90;
		red_large_stripe_1.tintTopLeft = 2301470;
		red_large_stripe_1.tintBottomLeft = 1841690;
		red_large_stripe_1.tintBottomRight = 16579836;

		// red_large_stripe
		const red_large_stripe = this.add.tileSprite(800, 267, 10000, 1382, "darkbluelargestripe");
		red_large_stripe.scaleX = 0.6;
		red_large_stripe.scaleY = 0.5396569635848864;
		red_large_stripe.tintTopLeft = 2236962;
		red_large_stripe.tintTopRight = 2631720;
		red_large_stripe.tileScaleX = 0.3;

		// green
		const green = this.add.image(1004, 707, "dark_blue_plain");
		green.scaleX = 48.23392876513774;
		green.scaleY = 0.10248010429731907;
		green.tintBottomLeft = 9276299;
		green.tintBottomRight = 7829367;

		// lamp
		const lamp = this.add.image(1887, -51, "lamp_21");
		lamp.scaleX = 0.24175800064574643;
		lamp.scaleY = 0.24175800064574643;

		// lamp_05
		const lamp_05 = this.add.image(470, -48, "lamp_21");
		lamp_05.scaleX = 0.24175800064574515;
		lamp_05.scaleY = 0.24175800064574515;

		// lamp_1
		const lamp_1 = this.add.image(-1404, -44, "lamp_21");
		lamp_1.scaleX = 0.24175800064574643;
		lamp_1.scaleY = 0.24175800064574643;

		// skirting_light
		const skirting_light = this.add.tileSprite(100, 637, 10000, 63, "skirting_light");
		skirting_light.scaleX = 0.6;
		skirting_light.scaleY = 0.2528690000816929;

		// ceiling
		const ceiling = this.add.tileSprite(854, -101, 10000, 78, "skirting_light");
		ceiling.scaleX = 0.6;
		ceiling.scaleY = 0.18021693427896895;
		ceiling.flipY = true;

		// littletable
		const littletable = this.physics.add.sprite(197, 614, "light_table_round");
		littletable.scaleX = 0.5122056698979438;
		littletable.scaleY = 0.5122056698979438;
		littletable.body.setOffset(0, 20);
		littletable.body.setSize(210, 200, false);

		// bottom
		const bottom = this.physics.add.sprite(1200, 687, "block_separator_01");
		bottom.scaleX = 12;
		bottom.scaleY = 0.5823602337408151;
		bottom.visible = false;
		bottom.body.pushable = false;
		bottom.body.immovable = true;
		bottom.body.setSize(695, 40, false);

		// house_plant_example
		const house_plant_example = this.add.image(-1442, 1064, "house_plant_example_01");
		house_plant_example.scaleX = 0.17228020216579695;
		house_plant_example.scaleY = 0.17228020216579695;

		// painting3
		const painting3 = this.physics.add.sprite(2119, 288, "painting_03_light");
		painting3.scaleX = 0.1779781357342463;
		painting3.scaleY = 0.1779781357342463;
		painting3.alpha = 0.9;
		painting3.alphaTopLeft = 0.9;
		painting3.alphaTopRight = 0.9;
		painting3.alphaBottomLeft = 0.9;
		painting3.alphaBottomRight = 0.9;
		painting3.body.setSize(614, 432, false);

		// shelf5
		const shelf5 = this.physics.add.sprite(1538, 215, "light_wall_shelf");
		shelf5.scaleX = 0.14105390096745893;
		shelf5.scaleY = 0.14105390096745893;
		shelf5.body.setSize(1007, 85, false);

		// rug_09
		const rug_09 = this.add.image(768, 671, "rug_11");
		rug_09.scaleX = 0.26389195497089973;
		rug_09.scaleY = 0.09820691853830661;

		// shelf4
		const shelf4 = this.physics.add.sprite(-1604, 130, "light_wall_shelf");
		shelf4.scaleX = 0.12;
		shelf4.scaleY = 0.1;
		shelf4.body.setSize(1007, 85, false);

		// shelf3
		const shelf3 = this.physics.add.sprite(-377, 154, "light_wall_shelf");
		shelf3.scaleX = 0.12;
		shelf3.scaleY = 0.1;
		shelf3.body.setSize(1007, 85, false);

		// shelf2
		const shelf2 = this.physics.add.sprite(-1408, 1097, "light_wall_shelf");
		shelf2.scaleX = 0.14105390096745893;
		shelf2.scaleY = 0.12;
		shelf2.body.setSize(1007, 85, false);

		// painting2
		const painting2 = this.physics.add.sprite(-687, 242, "painting_07_white");
		painting2.scaleX = 0.20758943481336906;
		painting2.scaleY = 0.20758943481336906;
		painting2.body.setSize(263, 320, false);

		// door_frame_dark
		const door_frame_dark = this.add.image(-1615, 486, "door_frame_dark");
		door_frame_dark.scaleX = 0.29236874778396726;
		door_frame_dark.scaleY = 0.301582187314591;

		// blueBirdCage2
		const blueBirdCage2 = new BlueBirdCage(this, -1814, 156);
		this.add.existing(blueBirdCage2);

		// shelfblue
		const shelfblue = this.physics.add.sprite(-1614, 451, "light_wall_shelf");
		shelfblue.scaleX = 0.14105390096745893;
		shelfblue.scaleY = 0.1;
		shelfblue.body.pushable = false;
		shelfblue.body.immovable = true;
		shelfblue.body.setSize(1007, 85, false);

		// doorleft
		const doorleft = this.physics.add.sprite(-1615, 493, "door_27");
		doorleft.scaleX = 0.30667117344357275;
		doorleft.scaleY = 0.30710105010760375;
		doorleft.body.setOffset(350, 500);
		doorleft.body.setSize(100, 100, false);

		// littlecaoch
		const littlecaoch = this.physics.add.sprite(-282, 586, "brown_1_seat");
		littlecaoch.scaleX = 0.17367978441096935;
		littlecaoch.scaleY = 0.17367978441096935;
		littlecaoch.body.setSize(1070, 858, false);

		// plantlast
		const plantlast = this.physics.add.sprite(929, 125, "house_plant_example_07");
		plantlast.scaleX = 0.07549814644692811;
		plantlast.scaleY = 0.07549814644692811;
		plantlast.body.gravity.y = 1000;
		plantlast.body.bounce.y = 0.3;
		plantlast.body.checkCollision.up = false;
		plantlast.body.setSize(806, 1099, false);

		// birdcage1
		const birdcage1 = new birdcage(this, -1092, 97);
		this.add.existing(birdcage1);
		birdcage1.scaleX = 0.6943945577865753;
		birdcage1.scaleY = 0.6943945577865753;

		// lighttable
		const lighttable = this.physics.add.sprite(-1074, 1103, "light_table_small");
		lighttable.scaleX = 0.21216700377137138;
		lighttable.scaleY = 0.21216700377137138;
		lighttable.body.setSize(376, 369, false);

		// counter
		const counter = this.add.image(-845, 618, "counter");
		counter.scaleX = 0.2870623470578273;
		counter.scaleY = 0.2870623470578273;

		// tvscreen
		const tvscreen = this.physics.add.sprite(-882, 540, "flat_screen_front");
		tvscreen.scaleX = 0.19380058132717146;
		tvscreen.scaleY = 0.19380058132717146;
		tvscreen.body.setSize(723, 480, false);

		// large_speaker_no_perspective
		const large_speaker_no_perspective = this.add.image(-757, 560, "large_speaker_no_perspective");
		large_speaker_no_perspective.scaleX = 0.13779604275321722;
		large_speaker_no_perspective.scaleY = 0.13779604275321722;

		// door_frame_dark_1
		const door_frame_dark_1 = this.add.image(2499, 482, "door_frame_dark");
		door_frame_dark_1.scaleX = 0.30870146980395335;
		door_frame_dark_1.scaleY = 0.30870146980395335;

		// plantright
		const plantright = this.physics.add.sprite(2474, 394, "house_plant_example_07");
		plantright.scaleX = 0.06551818872732908;
		plantright.scaleY = 0.06551818872732908;
		plantright.body.bounce.y = 0.3;
		plantright.body.setSize(806, 1099, false);

		// shelfdoorright
		const shelfdoorright = this.physics.add.sprite(2500, 444, "light_wall_shelf");
		shelfdoorright.scaleX = 0.14105390096745893;
		shelfdoorright.scaleY = 0.14105390096745893;
		shelfdoorright.body.pushable = false;
		shelfdoorright.body.immovable = true;
		shelfdoorright.body.setSize(1007, 85, false);

		// doorright
		const doorright = this.physics.add.sprite(2499, 489, "door_27");
		doorright.scaleX = 0.3128042646227483;
		doorright.scaleY = 0.3128042646227483;
		doorright.body.moves = false;
		doorright.body.setOffset(350, 500);
		doorright.body.setSize(100, 100, false);

		// bigcoach
		const bigcoach = this.physics.add.sprite(1835, 594, "brown_2_seat");
		bigcoach.scaleX = 0.19922599365713928;
		bigcoach.scaleY = 0.19922599365713928;
		bigcoach.body.setSize(1200, 327, false);

		// Bookcase1
		const bookcase1 = this.physics.add.sprite(1158, 513, "light_5_shelves");
		bookcase1.scaleX = 0.2577026689470534;
		bookcase1.scaleY = 0.2577026689470534;
		bookcase1.body.setSize(676, 1109, false);

		// shelf1
		const shelf1 = this.physics.add.sprite(-1092, 175, "light_wall_shelf");
		shelf1.scaleX = 0.14105390096745893;
		shelf1.scaleY = 0.1;
		shelf1.body.setSize(1007, 85, false);

		// shelf7
		const shelf7 = this.physics.add.sprite(-577, 1161, "light_wall_shelf");
		shelf7.scaleX = 0.14105390096745893;
		shelf7.scaleY = 0.14105390096745893;
		shelf7.body.setSize(1007, 85, false);

		// shelf6
		const shelf6 = this.physics.add.sprite(959, 173, "light_wall_shelf");
		shelf6.scaleX = 0.12;
		shelf6.scaleY = 0.1;
		shelf6.body.setSize(1007, 85, false);

		// birdcage2
		const birdcage2 = new birdcage(this, 1515, 154);
		this.add.existing(birdcage2);
		birdcage2.scaleX = 0.6943945577865751;
		birdcage2.scaleY = 0.6943945577865751;

		// opendoor1
		const opendoor1 = this.physics.add.sprite(2510, 495, "dark_wardrobe_door_open");
		opendoor1.scaleX = 0.3990294319411307;
		opendoor1.scaleY = 0.3879795166868173;
		opendoor1.flipX = true;
		opendoor1.visible = false;
		opendoor1.body.setSize(375, 898, false);

		// opendoor2
		const opendoor2 = this.physics.add.sprite(-1619, 497, "dark_wardrobe_door_open");
		opendoor2.scaleX = 0.3990294319411307;
		opendoor2.scaleY = 0.38339805740730115;
		opendoor2.flipX = true;
		opendoor2.visible = false;
		opendoor2.body.setSize(375, 898, false);

		// shelfbird
		const shelfbird = this.physics.add.sprite(-1607, 447, "light_wall_shelf");
		shelfbird.scaleX = 0.11476203836684157;
		shelfbird.scaleY = 0.18471964985289846;
		shelfbird.visible = false;
		shelfbird.body.pushable = false;
		shelfbird.body.immovable = true;
		shelfbird.body.setSize(1007, 85, false);

		// broom
		const broom = new Broom(this, 2132, 571);
		this.add.existing(broom);

		// enemyBird2
		const enemyBird2 = new EnemyBird(this, 1750, -18);
		this.add.existing(enemyBird2);

		// keybird
		const keybird = this.physics.add.sprite(-242, 160, "key_01");
		keybird.scaleX = 0.22966800052248193;
		keybird.scaleY = 0.22966800052248193;
		keybird.flipY = true;
		keybird.body.setSize(67, 112, false);

		// painting4
		const painting4 = this.physics.add.sprite(-795, 1042, "painting_07_light");
		painting4.scaleX = 0.19292882052114907;
		painting4.scaleY = 0.19292882052114907;
		painting4.alpha = 0.9;
		painting4.alphaTopLeft = 0.9;
		painting4.alphaTopRight = 0.9;
		painting4.alphaBottomLeft = 0.9;
		painting4.alphaBottomRight = 0.9;
		painting4.body.setSize(263, 320, false);

		// plantupperright
		const plantupperright = this.physics.add.sprite(2466, 46, "house_plant_example_07");
		plantupperright.scaleX = 0.07549814644692811;
		plantupperright.scaleY = 0.07549814644692811;
		plantupperright.body.gravity.y = 1000;
		plantupperright.body.bounce.y = 0.3;
		plantupperright.body.checkCollision.up = false;
		plantupperright.body.setSize(806, 1099, false);

		// blueBirdCage1
		const blueBirdCage1 = new BlueBirdCage(this, -581, -63);
		this.add.existing(blueBirdCage1);

		// shelf
		const shelf = this.physics.add.sprite(2496, 93, "light_wall_shelf");
		shelf.scaleX = 0.12;
		shelf.scaleY = 0.1;
		shelf.body.setSize(1007, 85, false);

		// paint3
		const paint3 = this.physics.add.sprite(-106, 285, "painting_02_gold");
		paint3.scaleX = 0.14679266677987513;
		paint3.scaleY = 0.14679266677987513;
		paint3.alpha = 0.9;
		paint3.alphaTopLeft = 0.9;
		paint3.alphaTopRight = 0.9;
		paint3.alphaBottomLeft = 0.9;
		paint3.alphaBottomRight = 0.9;
		paint3.body.setSize(263, 320, false);

		// plantupperleft
		const plantupperleft = this.physics.add.sprite(-1588, 91, "house_plant_example_01");
		plantupperleft.scaleX = 0.1342480651685792;
		plantupperleft.scaleY = 0.1342480651685792;
		plantupperleft.body.gravity.y = 1000;
		plantupperleft.body.bounce.y = 0.3;
		plantupperleft.body.checkCollision.up = false;
		plantupperleft.body.setSize(440, 433, false);

		// painting1
		const painting1 = this.physics.add.sprite(-1340, 314, "painting_06_light");
		painting1.scaleX = 0.19541618702084484;
		painting1.scaleY = 0.19541618702084484;
		painting1.body.setSize(263, 320, false);

		// fallpainting1
		const fallpainting1 = new fallpainting(this, 513, 331);
		this.add.existing(fallpainting1);

		// dogInterior1
		const dogInterior1 = new DogInterior(this, 772, 561);
		this.add.existing(dogInterior1);
		dogInterior1.scaleX = 0.8244343220294821;
		dogInterior1.scaleY = 0.8244343220294821;

		// catPlayer
		const catPlayer = new CatPlayer(this, 195, 498);
		this.add.existing(catPlayer);
		catPlayer.body.maxAngular = 2000;
		catPlayer.body.collideWorldBounds = true;

		// indoorwindow1
		const indoorwindow1 = new IndoorWindow(this, 197, 218);
		this.add.existing(indoorwindow1);
		indoorwindow1.scaleX = 0.8392103847992565;
		indoorwindow1.scaleY = 0.8392103847992565;

		// paintingwhite
		const paintingwhite = this.physics.add.sprite(693, 207, "painting_07_white");
		paintingwhite.scaleX = 0.20758943481336906;
		paintingwhite.scaleY = 0.20758943481336906;
		paintingwhite.body.setSize(263, 320, false);

		this.red_large_stripe = red_large_stripe;
		this.ceiling = ceiling;
		this.littletable = littletable;
		this.bottom = bottom;
		this.painting3 = painting3;
		this.shelf5 = shelf5;
		this.shelf4 = shelf4;
		this.shelf3 = shelf3;
		this.shelf2 = shelf2;
		this.painting2 = painting2;
		this.blueBirdCage2 = blueBirdCage2;
		this.shelfblue = shelfblue;
		this.doorleft = doorleft;
		this.littlecaoch = littlecaoch;
		this.plantlast = plantlast;
		this.birdcage1 = birdcage1;
		this.lighttable = lighttable;
		this.tvscreen = tvscreen;
		this.plantright = plantright;
		this.shelfdoorright = shelfdoorright;
		this.doorright = doorright;
		this.bigcoach = bigcoach;
		this.bookcase1 = bookcase1;
		this.shelf1 = shelf1;
		this.shelf7 = shelf7;
		this.shelf6 = shelf6;
		this.birdcage2 = birdcage2;
		this.opendoor1 = opendoor1;
		this.opendoor2 = opendoor2;
		this.shelfbird = shelfbird;
		this.broom = broom;
		this.enemyBird2 = enemyBird2;
		this.keybird = keybird;
		this.painting4 = painting4;
		this.plantupperright = plantupperright;
		this.blueBirdCage1 = blueBirdCage1;
		this.shelf = shelf;
		this.paint3 = paint3;
		this.plantupperleft = plantupperleft;
		this.painting1 = painting1;
		this.fallpainting1 = fallpainting1;
		this.dogInterior1 = dogInterior1;
		this.catPlayer = catPlayer;
		this.indoorwindow1 = indoorwindow1;
		this.paintingwhite = paintingwhite;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	red_large_stripe;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	littletable;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bottom;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting2;
	/** @type {BlueBirdCage} */
	blueBirdCage2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfblue;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	doorleft;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	littlecaoch;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plantlast;
	/** @type {birdcage} */
	birdcage1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lighttable;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	tvscreen;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plantright;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfdoorright;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	doorright;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bigcoach;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bookcase1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf7;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf6;
	/** @type {birdcage} */
	birdcage2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	opendoor1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	opendoor2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfbird;
	/** @type {Broom} */
	broom;
	/** @type {EnemyBird} */
	enemyBird2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	keybird;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plantupperright;
	/** @type {BlueBirdCage} */
	blueBirdCage1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plantupperleft;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting1;
	/** @type {fallpainting} */
	fallpainting1;
	/** @type {DogInterior} */
	dogInterior1;
	/** @type {CatPlayer} */
	catPlayer;
	/** @type {IndoorWindow} */
	indoorwindow1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingwhite;

	/* START-USER-CODE */

	// Write your code here

	create() {



		this.physics.world.setBounds(-1800, -200,4500, 3600);
		this.cameras.main.setBounds(-1800,-2900,4500, 3600);
		this.CollideObjectsGroup=this.add.group();
		this.cameras.main.setZoom(0.72);
		this.BDown=false;
		this.JustOnce=true;
		this.launchcolliderblue=true;

		this.UpdateGroup=this.add.group();
		this.DirtGroup=this.add.group();
		this.BirdCatchGroup=this.add.group();
		this.KeyGrouponly=this.add.group();
		this.KeyGroup=this.add.group();
		this.EggGroup=this.add.group();
		this.keytheme=this.sound.add('takekey');
		this.leveltheme=this.sound.add('maintheme');
		this.goaltheme=this.sound.add('missiongoal');

		MissionCount=4;

		this.leveltheme.play();

		this.doorrightCheck=true;
		this.editorCreate();

				this.time.addEvent({ delay:1000, callback:() => {

			this.ShootEgg();


					}, callbackScope: this,repeat:-1 });

			//this.KeyGroup.add(this.keybird);
			//this.KeyGroup.add(this.keybird2);
	this.plantright.item="key";
	this.enemyBird2.upclose=false;
	console.log('length group'+this.KeyGroup.getLength());
	this.test();
	this.catPlayer.Key2=true;
		this.physics.world.enable(this.ceiling);
		this.ceiling.body.setImmovable(true);
		this.cameras.main.startFollow(this.catPlayer,false,500,0);
		this.physics.add.collider(this.catPlayer,this.bottom);

		this.cameras.main.startFollow(this.catPlayer,false,0.25,0,50,0);

		this.blueBirdCage2.body.setBounce(0.2);
		this.blueBirdCage1.body.setBounce(0.2);

		this.addCollidersBroom();
		this.AddingRatsStuff();

		this.CreatePlatform(this.shelf1);
		this.CreatePlatform(this.shelf2);
		this.CreatePlatform(this.shelf3);
		this.CreatePlatform(this.shelf4);
		this.CreatePlatform(this.shelf5);
		this.CreatePlatform(this.shelf6);
		this.CreatePlatform(this.shelf7);
		this.CreatePlatform(this.painting3);
		this.CreatePlatform(this.fallpainting1);

		//this.CreatePlatform(this.shelfbird);
		this.CreatePlatform(this.littletable);
		this.CreatePlatform(this.bookcase1);
		this.CreatePlatform(this.littlecaoch);
		this.CreatePlatform(this.bigcoach);
		this.CreatePlatform(this.tvscreen);
		this.CreatePlatform(this.lighttable);
		this.CreatePlatform(this.shelfdoorright);
		this.CreatePlatform(this.shelfbird);
this.CreatePlatform(this.shelf);


this.shelfdoorright.body.checkCollision.up = false;
this.shelfbird.body.checkCollision.up = false;


	this.physics.add.collider(this.birdcage1,this.shelf1);
	this.physics.add.collider(this.birdcage2,this.shelf5);
		this.physics.add.collider(this.blueBirdCage1,this.shelf3);
		this.physics.add.collider(this.blueBirdCage2,this.shelfblue);

			this.physics.add.overlap(this.catPlayer,this.doorleft,this.OpenDoorbird,null,this);
			this.physics.add.collider(this.catPlayer,this.blueBirdCage1,this.pushblue,null,this);


			this.physics.add.overlap(this.catPlayer,this.painting1,this.StickToObject,null,this);
			this.physics.add.overlap(this.catPlayer,this.painting2,this.StickToObject,null,this);
			this.physics.add.overlap(this.catPlayer,this.paint3,this.StickToObject,null,this);
			this.physics.add.overlap(this.catPlayer,this.painting4,this.StickToObject,null,this);
			this.physics.add.overlap(this.catPlayer,this.paintingwhite,this.StickToObject,null,this);

			this.physics.add.overlap(this.catPlayer,this.keybird,this.TakeKey,null,this);
		//	this.physics.add.overlap(this.catPlayer,this.keybird2,this.TakeKey,null,this);
			this.physics.add.overlap(this.catPlayer,this.KeyGroup,this.TakeKey,null,this);
			this.physics.add.collider(this.plantright,this.shelfdoorright);
			this.physics.add.collider(this.fallpainting1.block,this.catPlayer,this.MakeObjectImmovabke,null,this);
			this.physics.add.collider(this.fallpainting1,this.bottom,this.DropAndLeaveMark,null,this);

			this.physics.add.overlap(this.catPlayer,this.dogInterior1.dog,this.GetHit,null,this);
			this.physics.add.overlap(this.catPlayer,this.enemyBird2,this.GetHit,null,this);
			this.physics.add.overlap(this.catPlayer,this.EggGroup,this.GetHit,null,this);


	//this.physics.add.collider(this.birdcage3,this.shelf7);
//	this.physics.add.collider(this.birdcage4,this.shelfbird);
		//	this.physics.add.collider(this.birdcage3,this.shelf7);
		//	this.physics.add.collider(this.birdcage3,this.shelf7);

		this.testcollider1=this.physics.add.overlap(this.catPlayer,this.doorleft,this.OpenDoor,null,this);
		this.testcollider=this.physics.add.overlap(this.catPlayer,this.doorright,this.OpenDoor,null,this);
		this.physics.add.overlap(this.catPlayer,this.BirdCatchGroup,this.EatBird,null,this);

			this.physics.add.collider(this.catPlayer,this.plantupperleft,this.push,null,this);
		this.physics.add.collider(this.shelf4,this.plantupperleft);
		this.physics.add.collider(this.plantupperleft,this.bottom,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.catPlayer,this.plantupperright,this.push,null,this);
		this.physics.add.collider(this.shelf,this.plantupperright);
		this.physics.add.collider(this.plantupperright,this.bottom,this.DropAndLeaveMark,null,this);

			this.physics.add.collider(this.catPlayer,this.plantlast,this.push,null,this);
		this.physics.add.collider(this.shelf6,this.plantlast);
		this.physics.add.collider(this.plantlast,this.bottom,this.DropAndLeaveMark,null,this);

		this.physics.add.overlap(this.broom,this.DirtGroup,this.StopBroom,null,this);

			this.physics.add.overlap(this.catPlayer,this.indoorwindow1.waythrough,this.JumpOut,null,this);



			this.physics.add.collider(this.blueBirdCage2,this.bottom);
			this.physics.add.collider(this.blueBirdCage1,this.bottom);

		this.opendoor1.JustOnce=true;
		this.opendoor2.JustOnce=true;

this.opendoor2.info=this.testcollider1;
this.opendoor1.info=this.testcollider;		

		this.MakeBirdCageReady(this.birdcage1);
		this.MakeBirdCageReady(this.birdcage2);
	//	this.MakeBirdCageReady(this.birdcage3);
//this.MakeBirdCageReady(this.birdcage4);

		this.input.keyboard.on('keydown-B', () =>{

	console.log('test key up()');
	this.BDown=true;

});

		this.input.keyboard.on('keyup-B', () =>{

	console.log('test key up()');
	this.BDown=false;

});


	}
	//openshit(birdcage){
		//birdcage.birdcage.visible=false;
			//birdcage.birdorange.visible=true;
		//	birdcage.setDepth(200);
		//birdcage.birdorange.body.collideWorldBounds = true;
		//birdcage.birdorange.body.setVelocityY(-120);
	//}
ShootEgg(){
		if(this.enemyBird2.upclose){
			console.log('shoot egg');
					this.egg = this.physics.add.sprite(this.enemyBird2.x, this.enemyBird2.y+28, "egg grey").setScale(0.07);
					this.egg.body.setGravityY(1000);
					this.EggGroup.add(this.egg);
		};
};

	TakeKey(Cat,Key){
if(Key.visible){


this.KeyGroup.add(Key);
console.log('put key in group');
console.log('length group'+this.KeyGroup.getLength());
Key.visible=false;
this.keytheme.play();

}

	}

	pushblue(cat, plant){

	if((this.KeyGroup.getLength()>0) && plant.OpenOnce){
	plant.cage.setTexture('metal_bird_open');
	this.Birdie=new BlackBird(this, plant.x+210, plant.y+120).setScale(0.1);
	plant.OpenOnce=false;
	plant.iconbird.destroy();
	this.KeyGroup.remove(this.KeyGroup.getLast(true), true);
	console.log('legth group after push'+this.KeyGroup.getLength());


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
			LevelBird3Clear=true;
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


	OpenDoor(Cat, Door){
Door.visible=false;

	}



	MakeBirdCageReady(BirdCage){
//this.physics.add.collider(BirdCage.birdorange,this.bottom);


				this.physics.add.collider(BirdCage,this.bottom,this.DropAndLeaveMark,null,this);
			this.physics.add.collider(BirdCage.birdorange,this.bottom);
		this.physics.add.collider(this.catPlayer,BirdCage,this.push,null,this);




	}
setUpColliderBlue(){

	this.physics.add.collider(this.catPlayer,this.blueBirdCage2,this.pushblue,null,this);
}

ShitOnCat(){

		if(Math.abs(this.enemyBird2.x-this.catPlayer.x)<200)	
		{
			this.enemyBird2.upclose=true;
		}else{
			this.enemyBird2.upclose=false;
		}
	};


	update(){

		this.EggGroup.children.iterate(function(child){

if(child){
	if(child.y>700){
	child.destroy();
console.log('destroy egg');
	}


};

  });


this.ShitOnCat();


		if(this.doorright.visible==false){
if(this.doorrightCheck){

			this.shelfdoorright.body.checkCollision.up = true;
			this.physics.add.collider(this.catPlayer,this.plantright,this.push,null,this);
			this.physics.add.collider(this.plantright,this.bottom,this.DropAndLeaveMark,null,this);
			this.plantright.body.setGravityY(1000);
			this.doorrightCheck=false;
						}
										}

			if(this.doorleft.visible==false){

			this.shelfbird.body.checkCollision.up = true;
			if(this.launchcolliderblue){

this.setUpColliderBlue();
this.launchcolliderblue=false;
			}
		}
if(this.keybird.active){

this.keybird.x=this.enemyBird2.x;
		this.keybird.y=this.enemyBird2.y+50;
}



		//this.DropDownWhenjumpCatonObject(this.fallpainting1);
		//	this.DropDownWhenjumpCatonObject(this.paintingwhite);


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
