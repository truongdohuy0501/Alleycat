
// You can write more code here

/* START OF COMPILED CODE */

class Mission2Rats extends BaseScene {

	constructor() {
		super("Mission2Rats");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// red_large_stripe_1
		const red_large_stripe_1 = this.add.image(447, -130, "green");
		red_large_stripe_1.scaleX = -1.4151810454741511;
		red_large_stripe_1.scaleY = 3.68141702806448;
		red_large_stripe_1.angle = 90;
		red_large_stripe_1.tintTopLeft = 5656399;
		red_large_stripe_1.tintBottomLeft = 5394255;
		red_large_stripe_1.tintBottomRight = 16579836;

		// green
		const green = this.physics.add.image(1489, 657, "blue_plain");
		green.scaleX = 27.098942183511426;
		green.scaleY = 0.10807642182039127;
		green.tintTopLeft = 8947077;
		green.tintTopRight = 9736850;
		green.body.setSize(437, 1232, false);

		// red_large_stripe
		const red_large_stripe = this.add.tileSprite(406, 241, 45000, 1382, "blue_large_stripe");
		red_large_stripe.scaleX = 0.1036515231554001;
		red_large_stripe.scaleY = 0.5577876937856563;
		red_large_stripe.tintTopLeft = 5066061;
		red_large_stripe.tintTopRight = 5131854;

		// ceilingbird2
		const ceilingbird2 = this.add.tileSprite(792, -98, 35000, 78, "skirting_light");
		ceilingbird2.scaleX = 0.1319382221023105;
		ceilingbird2.scaleY = 0.1319382221023105;
		ceilingbird2.flipY = true;

		// skirting_light
		const skirting_light = this.add.tileSprite(-296, 627, 35000, 63, "skirting_light");
		skirting_light.scaleX = 0.2528690000816929;
		skirting_light.scaleY = 0.2528690000816929;

		// bottom
		const bottom = this.physics.add.sprite(620, 682, "block_separator_01");
		bottom.scaleX = 9.338991107855268;
		bottom.scaleY = 0.5823602337408151;
		bottom.visible = false;
		bottom.body.pushable = false;
		bottom.body.immovable = true;
		bottom.body.setSize(695, 40, false);

		// rug_09
		const rug_09 = this.add.image(1707, 659, "rug_11");
		rug_09.scaleX = 0.26389195497089973;
		rug_09.scaleY = 0.11558843785287724;

		// seatbrown
		const seatbrown = this.physics.add.sprite(1992, 579, "brown_2_seat");
		seatbrown.scaleX = 0.2065260321267896;
		seatbrown.scaleY = 0.2065260321267896;
		seatbrown.body.pushable = false;
		seatbrown.body.immovable = true;
		seatbrown.body.setOffset(200, 10);
		seatbrown.body.setSize(1100, 327, false);

		// littletable
		const littletable = this.physics.add.sprite(140, 610, "light_table_round");
		littletable.scaleX = 0.5122056698979438;
		littletable.scaleY = 0.5122056698979438;
		littletable.body.setOffset(0, 20);
		littletable.body.setSize(210, 200, false);

		// side_wall_skirting_no_wall_light
		const side_wall_skirting_no_wall_light = this.add.image(2084, -37, "side_wall_skirting_no_wall_light");
		side_wall_skirting_no_wall_light.scaleX = 0.19573239282698118;
		side_wall_skirting_no_wall_light.scaleY = 0.19573239282698118;
		side_wall_skirting_no_wall_light.angle = -28;
		side_wall_skirting_no_wall_light.visible = false;

		// ceiling
		const ceiling = this.physics.add.sprite(517, -202, "block_separator_01");
		ceiling.scaleX = 5.504107162267043;
		ceiling.scaleY = 1.250533984076435;
		ceiling.visible = false;
		ceiling.body.pushable = false;
		ceiling.body.immovable = true;
		ceiling.body.setSize(695, 40, false);

		// lighttable
		const lighttable = this.physics.add.sprite(2102, 271, "light_wood_table");
		lighttable.scaleX = 0.1514629244949275;
		lighttable.scaleY = 0.1514629244949275;
		lighttable.body.setOffset(0, 70);
		lighttable.body.setSize(1606, 681, false);

		// shelf1
		const shelf1 = this.physics.add.sprite(1952, 389, "light_wall_shelf");
		shelf1.scaleX = 0.09453796886961094;
		shelf1.scaleY = 0.09453796886961094;
		shelf1.body.setSize(1007, 85, false);

		// long_rope_piece_1
		const long_rope_piece_1 = this.add.image(2086, -3, "long_rope_piece");
		long_rope_piece_1.scaleX = 0.1592984004884527;
		long_rope_piece_1.scaleY = 0.1592984004884527;

		// block1
		const block1 = this.physics.add.sprite(1890, -248, "bubble-64px");
		block1.visible = false;
		block1.body.pushable = false;
		block1.body.immovable = true;
		block1.body.setSize(64, 64, false);

		// paint1
		const paint1 = this.physics.add.sprite(2011, 337, "painting_05_dark");
		paint1.scaleX = 0.18828572977946437;
		paint1.scaleY = 0.18828572977946437;
		paint1.body.setSize(263, 320, false);

		// windowout1
		const windowout1 = new IndoorWindow(this, 144, 231);
		this.add.existing(windowout1);

		// block2
		const block2 = this.physics.add.sprite(2194, -251, "bubble-64px");
		block2.visible = false;
		block2.body.pushable = false;
		block2.body.immovable = true;
		block2.body.setSize(64, 64, false);

		// Star1
		const star1 = this.physics.add.sprite(2087, 585, "full-star-thick-black-border");
		star1.scaleX = 0.08786655082861002;
		star1.scaleY = 0.08786655082861002;
		star1.body.setSize(512, 490, false);

		// rat1
		const rat1 = new Rat(this, 2087, -257);
		this.add.existing(rat1);
		rat1.scaleX = 0.22658551503843016;
		rat1.scaleY = 0.22658551503843016;
		rat1.angle = 0;
		rat1.body.collideWorldBounds = false;
		rat1.body.onWorldBounds = false;
		rat1.body.pushable = false;

		// plant1
		const plant1 = this.physics.add.sprite(1639, 393, "house_plant_example_07");
		plant1.scaleX = 0.06322513466171807;
		plant1.scaleY = 0.06322513466171807;
		plant1.body.maxVelocity.x = 500;
		plant1.body.maxVelocity.y = 1000;
		plant1.body.maxSpeed = 700;
		plant1.body.gravity.y = 1200;
		plant1.body.friction.x = 0.2;
		plant1.body.bounce.y = 0.3;
		plant1.body.mass = 20;
		plant1.body.checkCollision.up = false;
		plant1.body.setOffset(100, 0);
		plant1.body.setSize(600, 1099, false);

		// slicie1
		const slicie1 = new SliceDevice(this, 1919, 186);
		this.add.existing(slicie1);
		slicie1.scaleX = 0.9841561118931783;
		slicie1.scaleY = 0.9841561118931783;

		// fallpainting1
		const fallpainting1 = new fallpainting(this, 1814, 252);
		this.add.existing(fallpainting1);
		fallpainting1.scaleX = 0.8941576045467907;
		fallpainting1.scaleY = 0.8941576045467907;

		// shelf2
		const shelf2 = this.add.nineslice(1834, 132, "shelf", undefined, 423, 0, 110, 102, 0, 0);
		shelf2.scaleX = 0.3537646767204332;
		shelf2.scaleY = 0.3537646767204332;

		// shelf
		const shelf = this.physics.add.sprite(2484, 98, "shelf");
		shelf.scaleX = 0.40792169505653936;
		shelf.scaleY = 0.3466656561189361;
		shelf.body.setOffset(10, 10);
		shelf.body.setSize(300, 85, false);

		// full_star_thick_black_border_1
		const full_star_thick_black_border_1 = this.add.image(2107, 532, "full-star-thick-black-border");
		full_star_thick_black_border_1.scaleX = 0.08802935557209196;
		full_star_thick_black_border_1.scaleY = 0.08802935557209196;
		full_star_thick_black_border_1.visible = false;

		// plant2
		const plant2 = this.physics.add.sprite(2007, 325, "house_plant_example_09");
		plant2.scaleX = 0.09096659238676591;
		plant2.scaleY = 0.09096659238676591;
		plant2.body.maxVelocity.x = 500;
		plant2.body.maxVelocity.y = 1000;
		plant2.body.maxSpeed = 700;
		plant2.body.gravity.y = 1200;
		plant2.body.friction.x = 0.2;
		plant2.body.bounce.y = 0.2;
		plant2.body.mass = 20;
		plant2.body.checkCollision.up = false;
		plant2.body.setOffset(100, 0);
		plant2.body.setSize(300, 850, false);

		// shelf1l
		const shelf1l = this.physics.add.sprite(2064, 205, "shelf");
		shelf1l.scaleX = 0.40792169505653936;
		shelf1l.scaleY = 0.30955133101664667;
		shelf1l.body.pushable = false;
		shelf1l.body.immovable = true;
		shelf1l.body.setOffset(10, 10);
		shelf1l.body.setSize(300, 85, false);

		// fallpainting2
		const fallpainting2 = new fallpainting(this, 1718, 261);
		this.add.existing(fallpainting2);
		fallpainting2.scaleX = 0.9642065970581547;
		fallpainting2.scaleY = 0.9642065970581547;

		// paint3
		const paint3 = this.physics.add.sprite(2407, 217, "painting_08_light");
		paint3.scaleX = 0.140732756224285;
		paint3.scaleY = 0.140732756224285;
		paint3.body.setSize(263, 320, false);

		// plant4
		const plant4 = this.physics.add.sprite(2103, 537, "house_plant_example_14");
		plant4.scaleX = 0.17142254264249326;
		plant4.scaleY = 0.17142254264249326;
		plant4.body.gravity.y = 1000;
		plant4.body.bounce.y = 0.3;
		plant4.body.checkCollision.up = false;
		plant4.body.setSize(312, 410, false);

		// fallingBlock1
		const fallingBlock1 = new FallingBlock(this, 2088, 128);
		this.add.existing(fallingBlock1);

		// catPlayer
		const catPlayer = new CatPlayer(this, 159, 404);
		this.add.existing(catPlayer);
		catPlayer.body.maxAngular = 5000;
		catPlayer.body.collideWorldBounds = true;

		// ratCannon1
		const ratCannon1 = new RatCannon(this, 77, -279);
		this.add.existing(ratCannon1);

		// ratCannon_1
		const ratCannon_1 = new RatCannon(this, 1368, -288);
		this.add.existing(ratCannon_1);

		// shelf_1
		const shelf_1 = this.physics.add.sprite(2360, 297, "shelf");
		shelf_1.scaleX = 0.40792169505653936;
		shelf_1.scaleY = 0.3466656561189361;
		shelf_1.body.setOffset(10, 10);
		shelf_1.body.setSize(300, 85, false);

		// shelf_2
		const shelf_2 = this.physics.add.sprite(1661, 176, "light_wall_shelf");
		shelf_2.scaleX = 0.1;
		shelf_2.scaleY = 0.1006799198725784;
		shelf_2.body.setSize(1007, 85, false);

		// shelf_3
		const shelf_3 = this.physics.add.sprite(2082, 418, "light_wall_shelf");
		shelf_3.scaleX = 0.1;
		shelf_3.scaleY = 0.1006799198725784;
		shelf_3.body.setSize(1007, 85, false);

		// shelf_4
		const shelf_4 = this.physics.add.sprite(2104, 183, "light_wall_shelf");
		shelf_4.scaleX = 0.1;
		shelf_4.scaleY = 0.1006799198725784;
		shelf_4.body.setSize(1007, 85, false);

		// shelf_5
		const shelf_5 = this.physics.add.sprite(1654, 407, "light_wall_shelf");
		shelf_5.scaleX = 0.1;
		shelf_5.scaleY = 0.1006799198725784;
		shelf_5.body.setSize(1007, 85, false);

		// brown_1_seat
		const brown_1_seat = this.add.image(2517, 544, "brown_1_seat");
		brown_1_seat.scaleX = 0.19747629617831572;
		brown_1_seat.scaleY = 0.19747629617831572;

		// shelf_6
		const shelf_6 = this.physics.add.sprite(2402, 376, "light_wall_shelf");
		shelf_6.scaleX = 0.09453796886961094;
		shelf_6.scaleY = 0.09453796886961094;
		shelf_6.body.setSize(1007, 85, false);

		// shelf20
		const shelf20 = this.physics.add.sprite(814, 388, "dark_wall_shelf");
		shelf20.scaleX = 0.14427055816978662;
		shelf20.scaleY = 0.14427055816978662;
		shelf20.body.friction.x = 0;
		shelf20.body.checkCollision.down = false;
		shelf20.body.pushable = false;
		shelf20.body.immovable = true;
		shelf20.body.setSize(1007, 85, false);

		// cannonball
		const cannonball = this.physics.add.sprite(732, 305, "cannon_ball");
		cannonball.scaleX = 0.09638566409323762;
		cannonball.scaleY = 0.09638566409323762;
		cannonball.visible = false;
		cannonball.body.setSize(166, 169, false);

		// sheld3
		const sheld3 = this.physics.add.sprite(669, 232, "dark_wall_shelf");
		sheld3.scaleX = 0.15087437735990775;
		sheld3.scaleY = 0.15087437735990775;
		sheld3.body.friction.x = 0;
		sheld3.body.collideWorldBounds = true;
		sheld3.body.checkCollision.down = false;
		sheld3.body.pushable = false;
		sheld3.body.immovable = true;
		sheld3.body.setSize(1007, 85, false);

		// sheld1
		const sheld1 = this.physics.add.sprite(668, 393, "dark_wall_shelf");
		sheld1.scaleX = 0.15087437735990775;
		sheld1.scaleY = 0.15087437735990775;
		sheld1.body.friction.x = 0;
		sheld1.body.collideWorldBounds = true;
		sheld1.body.checkCollision.down = false;
		sheld1.body.pushable = false;
		sheld1.body.immovable = true;
		sheld1.body.setSize(1007, 85, false);

		// sheld4
		const sheld4 = this.physics.add.sprite(815, 234, "dark_wall_shelf");
		sheld4.scaleX = 0.15087437735990775;
		sheld4.scaleY = 0.15087437735990775;
		sheld4.body.friction.x = 0;
		sheld4.body.collideWorldBounds = true;
		sheld4.body.checkCollision.down = false;
		sheld4.body.pushable = false;
		sheld4.body.immovable = true;
		sheld4.body.setSize(1007, 85, false);

		// ellipse
		const ellipse = this.add.ellipse(729, 306, 128, 128);
		ellipse.scaleX = 5.190321929178502;
		ellipse.scaleY = 5.190321929178502;
		ellipse.alpha = 0.05;
		ellipse.isFilled = true;

		// ratCannon1 (prefab fields)
		ratCannon1.flipRat = false;

		// ratCannon_1 (prefab fields)
		ratCannon_1.flipRat = true;

		this.red_large_stripe = red_large_stripe;
		this.ceilingbird2 = ceilingbird2;
		this.bottom = bottom;
		this.seatbrown = seatbrown;
		this.littletable = littletable;
		this.ceiling = ceiling;
		this.lighttable = lighttable;
		this.shelf1 = shelf1;
		this.block1 = block1;
		this.paint1 = paint1;
		this.windowout1 = windowout1;
		this.block2 = block2;
		this.star1 = star1;
		this.rat1 = rat1;
		this.plant1 = plant1;
		this.slicie1 = slicie1;
		this.fallpainting1 = fallpainting1;
		this.shelf2 = shelf2;
		this.shelf = shelf;
		this.plant2 = plant2;
		this.shelf1l = shelf1l;
		this.fallpainting2 = fallpainting2;
		this.paint3 = paint3;
		this.plant4 = plant4;
		this.fallingBlock1 = fallingBlock1;
		this.catPlayer = catPlayer;
		this.ratCannon1 = ratCannon1;
		this.shelf_1 = shelf_1;
		this.shelf_2 = shelf_2;
		this.shelf_3 = shelf_3;
		this.shelf_4 = shelf_4;
		this.shelf_5 = shelf_5;
		this.shelf_6 = shelf_6;
		this.shelf20 = shelf20;
		this.cannonball = cannonball;
		this.sheld3 = sheld3;
		this.sheld1 = sheld1;
		this.sheld4 = sheld4;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	red_large_stripe;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceilingbird2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bottom;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	seatbrown;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	littletable;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	ceiling;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lighttable;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	block1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint1;
	/** @type {IndoorWindow} */
	windowout1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	block2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	star1;
	/** @type {Rat} */
	rat1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant1;
	/** @type {SliceDevice} */
	slicie1;
	/** @type {fallpainting} */
	fallpainting1;
	/** @type {Phaser.GameObjects.NineSlice} */
	shelf2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf1l;
	/** @type {fallpainting} */
	fallpainting2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant4;
	/** @type {FallingBlock} */
	fallingBlock1;
	/** @type {CatPlayer} */
	catPlayer;
	/** @type {RatCannon} */
	ratCannon1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf_2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf_3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf_4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf_5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf_6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf20;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cannonball;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	sheld3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	sheld1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	sheld4;

	/* START-USER-CODE */

	// Write your code here

	create() {

	StartPosX=2093;
	StartPosY=386;

raticon=true;

	this.catchtheme=this.sound.add('takekey');
	this.donetheme=this.sound.add('jobdone');
	this.Boomtheme=this.sound.add('Boom2');	
	this.DirtGroup=this.add.group();
	this.StarGroup=this.add.group();
	this.UpdateGroup=this.add.group();
	this.BombsGroup=this.add.group();
	this.BounceGroup=this.add.group();
	this.BulletGroup=this.add.group();

		this.LastXvaluePlatform=0;
	this.LastYvaluePlatform=0;

	


this.catchtheme=this.sound.add('takekey');
this.cheesecatchtheme=this.sound.add('GetMouse');
this.goaltheme=this.sound.add('missiongoal');
this.leveltheme=this.sound.add('maintheme');
this.leveltheme.play();


	this.CounterBalls=0;
	this.ShowBallOnce=true;
	MissionCount=6;

		this.editorCreate();

		this.ratCannon1.flipRat=false;
		this.test();


		this.sheld1.LastXvaluePlatform=0;
		this.sheld1.LastYvaluePlatform=0;
		this.sheld1.resultY=0;

		this.sheld3.LastXvaluePlatform=0;
		this.sheld3.LastYvaluePlatform=0;
		this.sheld3.resultY=0;

		this.shelf20.LastXvaluePlatform=0;
		this.shelf20.LastYvaluePlatform=0;
		this.shelf20.resultY=0;

		this.sheld4.LastXvaluePlatform=0;
		this.sheld4.LastYvaluePlatform=0;
		this.sheld4.resultY=0;


		//this.addCollidersBroom();

		this.AddingRatsStuff();

		this.rat1.body.setVelocityX(100);
		this.rat1.direction=true;
		this.rat1.speed=100;

		this.plant1.item="star";
		this.fallpainting2.item="star";
		this.fallpainting1.item="star";
		this.plant4.item="star";
		this.plant2.item="star";


		this.StarGroup.add(this.star1);


		this.CreatePlatform(this.seatbrown);
		this.CreatePlatform(this.shelf1);
		this.CreatePlatform(this.lighttable);
		this.CreatePlatform(this.littletable);
		this.CreatePlatform(this.shelf2);
		this.CreatePlatform(this.shelf1l);

		this.shelf2.body.setOffset(0,20);

		this.BlockGroup=this.add.group();
		this.BlockGroup.add(this.block1);
		this.BlockGroup.add(this.block2);
		this.BounceGroup.add(this.lighttable);
		this.BounceGroup.add(this.littletable);
		this.BounceGroup.add(this.seatbrown);

		this.BounceGroup.add(this.sheld1);
this.BounceGroup.add(this.shelf20);
this.BounceGroup.add(this.sheld3);
this.BounceGroup.add(this.sheld4);

		this.cameras.main.setZoom(0.72);
		this.physics.world.setBounds(0, -3100,1400, 3800);
		this.cameras.main.setBounds(0,-3100,1400, 3800);
		this.cameras.main.startFollow(this.catPlayer,false,0.2,0,50,0);

		//this.physics.add.collider(this.catPlayer,this.ceiling);
		this.physics.add.collider(this.catPlayer,this.bottom);
		this.physics.add.collider(this.rat1,this.BlockGroup);
		this.physics.add.collider(this.catPlayer,this.plant1,this.push,null,this);
		this.physics.add.collider(this.catPlayer,this.plant2,this.push,null,this);
		this.physics.add.collider(this.shelf1,this.plant1);

		this.physics.add.collider(this.BombsGroup,this.BounceGroup);

		this.physics.add.collider(this.shelf2,this.plant2);
		this.physics.add.collider(this.shelf1l,this.plant2);
		this.physics.add.collider(this.catPlayer,this.plant,this.push,null,this);
		this.physics.add.collider(this.plant2,this.bottom,this.DropAndLeaveMark,null,this);

		this.physics.add.overlap(this.catPlayer,this.CatchBallGroup,this.CatchBall,null,this);

		this.physics.add.collider(this.plant4,this.lighttable);
		this.physics.add.collider(this.catPlayer,this.plant4,this.push,null,this);
		this.physics.add.collider(this.plant4,this.bottom,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.plant1,this.bottom,this.DropAndLeaveMark,null,this);

		this.physics.add.overlap(this.catPlayer,this.StarGroup,this.CatchBall,null,this);

		this.physics.add.overlap(this.catPlayer,this.paint1,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paint3,this.StickToObject,null,this);

		this.physics.add.collider(this.fallpainting1.block,this.catPlayer,this.MakeObjectImmovabke,null,this);
		this.physics.add.collider(this.fallpainting1,this.bottom,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.fallpainting2.block,this.catPlayer,this.MakeObjectImmovabke,null,this);
		this.physics.add.collider(this.fallpainting2,this.bottom,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.fallingBlock1,this.bottom,this.Baaam,null,this);

		//this.physics.add.overlap(this.broom,this.DirtGroup,this.StopBroom,null,this);
		this.physics.add.overlap(this.catPlayer,this.BombsGroup,this.GetHit,null,this);
		this.physics.add.overlap(this.catPlayer,this.rat1,this.GetHit,null,this);
		this.physics.add.overlap(this.catPlayer,this.slicie1.swingblade,this.GetHit,null,this);
		this.physics.add.overlap(this.catPlayer,this.fallingBlock1,this.GetHit,null,this);
		this.physics.add.overlap(this.catPlayer,this.BulletGroup,this.GetHit,null,this);

		this.physics.add.overlap(this.catPlayer,this.windowout1.waythrough,this.JumpOut,null,this);

		this.physics.add.collider(this.catPlayer,this.sheld1,this.StickAround,null,this);
		this.physics.add.collider(this.catPlayer,this.sheld3,this.StickAround,null,this);
		this.physics.add.collider(this.catPlayer,this.sheld4,this.StickAround,null,this);
		this.physics.add.collider(this.catPlayer,this.shelf20,this.StickAround,null,this);



		this.fallpainting1.painting.setTexture('painting_01_light');



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

	OpenDoor(Cat,Closet){
	Closet.door.visible=true;

		if(this.ShowBallOnce){
				this.ShowBallOnce=false;
			this.time.addEvent({ delay:500, callback:() => {

			this.ShowObject(Closet.x+40,Closet.y+85);

				}, callbackScope: this,repeat:0 });
		}

	}

	push(cat, plant){
if(cat.body.touching.right){
	cat.body.x-=7;
	plant.body.setVelocityX(120);
}else if(cat.body.touching.left){
cat.body.x+=7;
	plant.body.setVelocityX(-120);
}


		this.time.addEvent({ delay:400, callback:() => {
		if(plant.active){
			plant.body.setVelocityX(0);
}

}, callbackScope: this,repeat:0 });


	}

	breakeagainstfloor(painting, floor){

		this.paintx=painting.x;
		this.painty=painting.y;
		if(painting)
		{

		painting.destroy();
			console.log("destroy painting");

			this.ShowObject(this.paintx,this.painty);
		}


	}
	destroyRats(){


		this.expo1 = new explosion(this, this.rat1.x, this.rat1.y).setScale(0.35);
		this.add.existing(this.expo1);
		this.rat1.destroy();


	}

	CatchBall(Cat,Ball){

	if(Ball){
	MissionCount--;
	Ball.destroy();
	}

	if(MissionCount>0){
		this.catchtheme.play();
	//this.SetNextPositionBall();
		console.log('counter :'+ MissionCount);

	}else if(MissionCount==0){

	this.destroyRats();
	this.donetheme.play();


		ShowCompletetext=true;
		LevelMouse1Clear=true;
		this.game.sound.stopAll();
		this.goaltheme.play();

			this.time.addEvent({ delay:2000, callback:() => {
	this.cameras.main.fadeOut(2000);

		this.time.addEvent({ delay:2000, callback:() => {

		//this.levelheme.play();
		this.scene.stop();	
		this.scene.start('Level');	

				}, callbackScope: this,repeat:0});
						}, callbackScope: this,repeat:0});


	}


};

	GetValueY(Object){

	Object.resultY=Object.LastYvalue-Object.body.y;

	Object.LastYvalue=Object.body.y;
	Object.LastXvalue=Object.body.x;
//	Object.string="Screw you";



	}

	ShowObject(x,y){

	this.Object=this.physics.add.sprite(x, y, "bubble-128px").setScale(0.4);

		this.CatchBallGroup.add(this.Object);



	}

	update(){
	

	this.GetValueY(this.sheld1);
	this.GetValueY(this.sheld3);
	this.GetValueY(this.sheld4);
	this.GetValueY(this.shelf20);

	this.step=0.0;
	this.step=0.01;
	this.widthSlice=250;

	if (!this.sheld1.body.touching.up) {

    // this.catPlayer.body.setAllowGravity(true);

    }

	Phaser.Math.RotateAroundDistance(this.sheld1, this.cannonball.x,this.cannonball.y, this.step, this.widthSlice);
	Phaser.Math.RotateAroundDistance(this.sheld3, this.cannonball.x,this.cannonball.y, this.step, this.widthSlice);
	Phaser.Math.RotateAroundDistance(this.sheld4, this.cannonball.x,this.cannonball.y, this.step, this.widthSlice);
	Phaser.Math.RotateAroundDistance(this.shelf20, this.cannonball.x,this.cannonball.y, this.step, this.widthSlice);



if(ShowCompletetext){

			LevelRat2Clear=true;
		};

	this.UpdateGroup.children.iterate(function(child){

		if(child){

			child.update();

		};

  });

  	this.BulletGroup.children.iterate(function(child){

		if(child){

			if(child.x<-500 || child.x>2000){

	child.destroy();
			console.log('bullet destroyed');
			}



		};

  });

  	this.StarGroup.children.iterate(function(child){

		if(child){

			if(child.x<-500 || child.x>2000){

	child.destroy();
			console.log('bullet destroyed');
			}



		};

  });


	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
