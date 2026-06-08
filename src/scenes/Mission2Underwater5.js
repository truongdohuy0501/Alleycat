
// You can write more code here

/* START OF COMPILED CODE */

class Mission2Underwater5 extends BaseScene {

	constructor() {
		super("Mission2Underwater5");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// seabed
		const seabed = this.add.nineslice(1503, 38, "seabed", undefined, 2381, 1592, -6, 1, 59, 445);
		seabed.scaleX = 1.4721785262688312;
		seabed.scaleY = 0.8674062691743456;

		// rectangle3
		const rectangle3 = this.add.rectangle(668, 662, 128, 128);
		rectangle3.scaleX = 11.19455188188234;
		rectangle3.scaleY = 0.16124814136254448;
		rectangle3.visible = false;
		rectangle3.isFilled = true;
		rectangle3.fillColor = 11776889;

		// pillar
		const pillar = this.add.image(30, 498, "pillar");
		pillar.scaleX = 0.5889929424641701;
		pillar.scaleY = 0.5889929424641701;
		pillar.visible = false;

		// pillar_1
		const pillar_1 = this.add.image(1116, 548, "pillar");
		pillar_1.scaleX = 0.4236100329827226;
		pillar_1.scaleY = 0.4236100329827226;
		pillar_1.visible = false;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(660, -44, 1400, 20);
		rectangle_1.scaleY = 0.058959080772305605;
		rectangle_1.visible = false;
		rectangle_1.isFilled = true;

		// foreground1
		const foreground1 = this.add.image(-125, 623, "foreground_piece_01");
		foreground1.scaleX = 0.27497139796304504;
		foreground1.scaleY = 0.27497139796304504;

		// foreground02
		const foreground02 = this.add.image(134, 641, "foreground_piece_02");
		foreground02.scaleX = 0.3376959723010384;
		foreground02.scaleY = 0.3376959723010384;

		// foreground03
		const foreground03 = this.add.image(472, 650, "foreground_piece_03");
		foreground03.scaleX = 0.435660119678413;
		foreground03.scaleY = 0.435660119678413;

		// foregroundp04
		const foregroundp04 = this.add.image(1219, 640, "foreground_piece_04");
		foregroundp04.scaleX = 0.39405248053410225;
		foregroundp04.scaleY = 0.39405248053410225;

		// foreground5
		const foreground5 = this.add.image(862, 663, "foreground_piece_05");
		foreground5.scaleX = 0.3744427756006714;
		foreground5.scaleY = 0.3744427756006714;

		// piece2
		const piece2 = this.add.image(1159, 304, "background_piece_06");
		piece2.scaleX = 0.8583647499365288;
		piece2.scaleY = 0.8583647499365288;
		piece2.alpha = 0.3;
		piece2.alphaTopLeft = 0.3;
		piece2.alphaTopRight = 0.3;
		piece2.alphaBottomLeft = 0;
		piece2.alphaBottomRight = 0;

		// piece3
		const piece3 = this.physics.add.sprite(2109, 350, "ship_wreck");
		piece3.scaleX = 0.7555819224106579;
		piece3.scaleY = 0.7555819224106579;
		piece3.alpha = 0.3;
		piece3.alphaTopLeft = 0.3;
		piece3.alphaTopRight = 0.3;
		piece3.alphaBottomLeft = 0;
		piece3.alphaBottomRight = 0;
		piece3.body.setSize(845, 610, false);

		// piece1
		const piece1 = this.add.image(281, 372, "background_piece_01");
		piece1.scaleX = 0.9684366144882577;
		piece1.scaleY = 0.9684366144882577;
		piece1.alpha = 0.3;
		piece1.alphaTopLeft = 0.3;
		piece1.alphaTopRight = 0.3;
		piece1.alphaBottomLeft = 0;
		piece1.alphaBottomRight = 0;

		// badfish2
		const badfish2 = this.physics.add.sprite(308, 482, "__red_bird_02_fly_straight_004");
		badfish2.scaleX = 0.2560059903508662;
		badfish2.scaleY = 0.2560059903508662;
		badfish2.flipX = true;
		badfish2.alpha = 0.2;
		badfish2.alphaTopLeft = 0.2;
		badfish2.alphaTopRight = 0.2;
		badfish2.alphaBottomLeft = 0.2;
		badfish2.alphaBottomRight = 0.2;
		badfish2.tintFill = true;
		badfish2.tintTopLeft = 263172;
		badfish2.tintTopRight = 263172;
		badfish2.tintBottomLeft = 328965;
		badfish2.tintBottomRight = 263172;
		badfish2.body.velocity.x = 45;
		badfish2.body.onWorldBounds = true;
		badfish2.body.pushable = false;
		badfish2.body.immovable = true;
		badfish2.body.setSize(2053, 1329, false);

		// badfish
		const badfish = this.physics.add.sprite(1154, -317, "__red_bird_02_fly_straight_004");
		badfish.scaleX = 0.24462419121246803;
		badfish.scaleY = 0.24462419121246803;
		badfish.alpha = 0.2;
		badfish.alphaTopLeft = 0.2;
		badfish.alphaTopRight = 0.2;
		badfish.alphaBottomLeft = 0.2;
		badfish.alphaBottomRight = 0.2;
		badfish.tintFill = true;
		badfish.tintTopLeft = 263172;
		badfish.tintTopRight = 263172;
		badfish.tintBottomLeft = 328965;
		badfish.tintBottomRight = 263172;
		badfish.body.velocity.x = -45;
		badfish.body.onWorldBounds = true;
		badfish.body.checkCollision.up = false;
		badfish.body.checkCollision.down = false;
		badfish.body.pushable = false;
		badfish.body.immovable = true;
		badfish.body.setSize(2053, 1329, false);

		// badfish3
		const badfish3 = this.physics.add.sprite(2346, 98, "__red_bird_02_fly_straight_004");
		badfish3.scaleX = 0.30058969281733544;
		badfish3.scaleY = 0.30058969281733544;
		badfish3.alpha = 0.2;
		badfish3.alphaTopLeft = 0.2;
		badfish3.alphaTopRight = 0.2;
		badfish3.alphaBottomLeft = 0.2;
		badfish3.alphaBottomRight = 0.2;
		badfish3.tintFill = true;
		badfish3.tintTopLeft = 263172;
		badfish3.tintTopRight = 263172;
		badfish3.tintBottomLeft = 328965;
		badfish3.tintBottomRight = 263172;
		badfish3.body.velocity.x = -45;
		badfish3.body.onWorldBounds = true;
		badfish3.body.pushable = false;
		badfish3.body.immovable = true;
		badfish3.body.setSize(2053, 1329, false);

		// fish
		const fish = new Fish(this, 180, 440);
		this.add.existing(fish);
		fish.scaleX = 0.1251661272554402;
		fish.scaleY = 0.1251661272554402;
		fish.body.collideWorldBounds = true;
		fish.body.onWorldBounds = true;

		// fish_1
		const fish_1 = new Fish(this, 1649, 128);
		this.add.existing(fish_1);
		fish_1.scaleX = 0.1251661272554402;
		fish_1.scaleY = 0.1251661272554402;
		fish_1.body.collideWorldBounds = true;
		fish_1.body.onWorldBounds = true;

		// pillar1
		const pillar1 = this.physics.add.sprite(765, 607, "pillar");
		pillar1.scaleX = 0.3922288531779187;
		pillar1.scaleY = 0.3922288531779187;
		pillar1.body.pushable = false;
		pillar1.body.immovable = true;
		pillar1.body.setOffset(100, 0);
		pillar1.body.setSize(100, 600, false);

		// fish_2
		const fish_2 = new Fish(this, 207, 152);
		this.add.existing(fish_2);
		fish_2.scaleX = 0.12516612725544016;
		fish_2.scaleY = 0.12516612725544016;
		fish_2.body.collideWorldBounds = true;
		fish_2.body.onWorldBounds = true;

		// fish_3
		const fish_3 = new Fish(this, 722, 303);
		this.add.existing(fish_3);
		fish_3.scaleX = 0.1251661272554402;
		fish_3.scaleY = 0.1251661272554402;
		fish_3.body.collideWorldBounds = true;
		fish_3.body.onWorldBounds = true;

		// electriceel
		const electriceel = new ElectricEel(this, 1069, 5);
		this.add.existing(electriceel);
		electriceel.scaleX = 0.5656493044921761;
		electriceel.scaleY = 0.5656493044921761;

		// electricEel
		const electricEel = new ElectricEel(this, 705, 391);
		this.add.existing(electricEel);
		electricEel.scaleX = 0.5656493044921761;
		electricEel.scaleY = 0.5656493044921761;

		// electriceel1
		const electriceel1 = new ElectricEel(this, 873, -315);
		this.add.existing(electriceel1);
		electriceel1.scaleX = 0.5656493044921761;
		electriceel1.scaleY = 0.5656493044921761;

		// fish_4
		const fish_4 = new Fish(this, 946, 449);
		this.add.existing(fish_4);
		fish_4.scaleX = 0.1251661272554402;
		fish_4.scaleY = 0.1251661272554402;
		fish_4.body.collideWorldBounds = true;
		fish_4.body.onWorldBounds = true;

		// fish_5
		const fish_5 = new Fish(this, 504, 189);
		this.add.existing(fish_5);
		fish_5.scaleX = 0.12516612725544118;
		fish_5.scaleY = 0.12516612725544118;
		fish_5.body.collideWorldBounds = true;
		fish_5.body.onWorldBounds = true;

		// fish_6
		const fish_6 = new Fish(this, 1303, 465);
		this.add.existing(fish_6);
		fish_6.scaleX = 0.1251661272554402;
		fish_6.scaleY = 0.1251661272554402;
		fish_6.body.collideWorldBounds = true;
		fish_6.body.onWorldBounds = true;

		// fish_7
		const fish_7 = new Fish(this, 1383, -72);
		this.add.existing(fish_7);
		fish_7.scaleX = 0.1251661272554402;
		fish_7.scaleY = 0.1251661272554402;
		fish_7.body.collideWorldBounds = true;
		fish_7.body.onWorldBounds = true;

		// foregroundp5
		const foregroundp5 = this.add.image(1566, 645, "foreground_piece_03");
		foregroundp5.scaleX = 0.435660119678413;
		foregroundp5.scaleY = 0.435660119678413;

		// fish_8
		const fish_8 = new Fish(this, 420, -197);
		this.add.existing(fish_8);
		fish_8.scaleX = 0.1251661272554402;
		fish_8.scaleY = 0.1251661272554402;
		fish_8.body.collideWorldBounds = true;
		fish_8.body.onWorldBounds = true;

		// electriceel2
		const electriceel2 = new ElectricEel(this, 940, 553);
		this.add.existing(electriceel2);
		electriceel2.scaleX = 0.5656493044921761;
		electriceel2.scaleY = 0.5656493044921761;

		// fish_9
		const fish_9 = new Fish(this, 997, 88);
		this.add.existing(fish_9);
		fish_9.scaleX = 0.12516612725544016;
		fish_9.scaleY = 0.12516612725544016;
		fish_9.body.collideWorldBounds = true;
		fish_9.body.onWorldBounds = true;

		// bottom
		const bottom = this.physics.add.sprite(1059, 688, "skirting_dark");
		bottom.scaleX = 5.382613563663951;
		bottom.scaleY = 0.5272402423947588;
		bottom.visible = false;
		bottom.body.pushable = false;
		bottom.body.immovable = true;
		bottom.body.setSize(500, 32, false);

		// foregroundp6
		const foregroundp6 = this.add.image(1868, 656, "foreground_piece_05");
		foregroundp6.scaleX = 0.3744427756006714;
		foregroundp6.scaleY = 0.3744427756006714;

		// pillar2
		const pillar2 = this.physics.add.sprite(1778, 562, "pillar");
		pillar2.scaleX = 0.35943323620172746;
		pillar2.scaleY = 0.35943323620172746;
		pillar2.tintTopLeft = 789259;
		pillar2.body.pushable = false;
		pillar2.body.immovable = true;
		pillar2.body.setOffset(100, 0);
		pillar2.body.setSize(100, 600, false);

		// foreground9
		const foreground9 = this.add.image(2221, 660, "foreground_piece_05");
		foreground9.scaleX = 0.4868846056533288;
		foreground9.scaleY = 0.4868846056533288;

		// electriceel3
		const electriceel3 = new ElectricEel(this, 1766, -324);
		this.add.existing(electriceel3);
		electriceel3.scaleX = 0.5656493044921761;
		electriceel3.scaleY = 0.5656493044921761;

		// catPlayer
		const catPlayer = new CatPlayer(this, 120, -477);
		this.add.existing(catPlayer);
		catPlayer.body.collideWorldBounds = true;

		// foregroundpi3
		const foregroundpi3 = this.add.image(424, 681, "foreground_piece_01");
		foregroundpi3.scaleX = 0.2452858430064414;
		foregroundpi3.scaleY = 0.2452858430064414;

		// foreground2
		const foreground2 = this.add.image(132, 683, "foreground_piece_03");
		foreground2.scaleX = 0.49512369428590813;
		foreground2.scaleY = 0.49512369428590813;

		// foreground3
		const foreground3 = this.add.image(730, 682, "foreground_piece_04");
		foreground3.scaleX = 0.44962537324938584;
		foreground3.scaleY = 0.44962537324938584;

		// foreground22
		const foreground22 = this.add.image(1169, 703, "foreground_piece_05");
		foreground22.scaleX = 0.4868846056533288;
		foreground22.scaleY = 0.4868846056533288;

		// foregroundp4
		const foregroundp4 = this.add.image(1614, 682, "foreground_piece_04");
		foregroundp4.scaleX = 0.44962537324938584;
		foregroundp4.scaleY = 0.44962537324938584;

		// foreground7
		const foreground7 = this.add.image(2017, 691, "foreground_piece_03");
		foreground7.scaleX = 0.49512369428590813;
		foreground7.scaleY = 0.49512369428590813;

		// foreground8
		const foreground8 = this.add.image(2315, 713, "foreground_piece_05");
		foreground8.scaleX = 0.4868846056533288;
		foreground8.scaleY = 0.4868846056533288;

		// electriceel4
		const electriceel4 = new ElectricEel(this, 1555, 161);
		this.add.existing(electriceel4);
		electriceel4.scaleX = 0.5656493044921761;
		electriceel4.scaleY = 0.5656493044921761;

		// electriceel5
		const electriceel5 = new ElectricEel(this, 2230, 299);
		this.add.existing(electriceel5);
		electriceel5.scaleX = 0.5656493044921761;
		electriceel5.scaleY = 0.5656493044921761;

		// electriceel6
		const electriceel6 = new ElectricEel(this, 1706, 529);
		this.add.existing(electriceel6);
		electriceel6.scaleX = 0.5656493044921761;
		electriceel6.scaleY = 0.5656493044921761;

		// fish_10
		const fish_10 = new Fish(this, 1253, -405);
		this.add.existing(fish_10);
		fish_10.scaleX = 0.1251661272554402;
		fish_10.scaleY = 0.1251661272554402;
		fish_10.body.collideWorldBounds = true;
		fish_10.body.onWorldBounds = true;

		// fish_11
		const fish_11 = new Fish(this, 1936, -323);
		this.add.existing(fish_11);
		fish_11.scaleX = 0.1251661272554402;
		fish_11.scaleY = 0.1251661272554402;
		fish_11.body.collideWorldBounds = true;
		fish_11.body.onWorldBounds = true;

		// fish_12
		const fish_12 = new Fish(this, 2593, 441);
		this.add.existing(fish_12);
		fish_12.scaleX = 0.1251661272554402;
		fish_12.scaleY = 0.1251661272554402;
		fish_12.body.collideWorldBounds = true;
		fish_12.body.onWorldBounds = true;

		// fish_13
		const fish_13 = new Fish(this, 2391, 72);
		this.add.existing(fish_13);
		fish_13.scaleX = 0.1251661272554402;
		fish_13.scaleY = 0.1251661272554402;
		fish_13.body.collideWorldBounds = true;
		fish_13.body.onWorldBounds = true;

		// fish_14
		const fish_14 = new Fish(this, 2028, 231);
		this.add.existing(fish_14);
		fish_14.scaleX = 0.1251661272554402;
		fish_14.scaleY = 0.1251661272554402;
		fish_14.body.collideWorldBounds = true;
		fish_14.body.onWorldBounds = true;

		// fish_15
		const fish_15 = new Fish(this, 2560, -289);
		this.add.existing(fish_15);
		fish_15.scaleX = 0.1251661272554402;
		fish_15.scaleY = 0.1251661272554402;
		fish_15.body.collideWorldBounds = true;
		fish_15.body.onWorldBounds = true;

		// fish_16
		const fish_16 = new Fish(this, 777, -118);
		this.add.existing(fish_16);
		fish_16.scaleX = 0.1251661272554402;
		fish_16.scaleY = 0.1251661272554402;
		fish_16.body.collideWorldBounds = true;
		fish_16.body.onWorldBounds = true;

		// electriceel7
		const electriceel7 = new ElectricEel(this, 2380, -13);
		this.add.existing(electriceel7);
		electriceel7.scaleX = 0.5656493044921761;
		electriceel7.scaleY = 0.5656493044921761;

		// yellyFish1
		const yellyFish1 = new YellyFish(this, 824, -44);
		this.add.existing(yellyFish1);
		yellyFish1.scaleX = 1;
		yellyFish1.scaleY = 1;
		yellyFish1.angle = 0;

		// yellyFish3
		const yellyFish3 = new YellyFish(this, 386, 245);
		this.add.existing(yellyFish3);
		yellyFish3.scaleX = 1;
		yellyFish3.scaleY = 1;
		yellyFish3.angle = 0;

		// yellyFish2
		const yellyFish2 = new YellyFish(this, 1670, 395);
		this.add.existing(yellyFish2);
		yellyFish2.scaleX = 1;
		yellyFish2.scaleY = 1;
		yellyFish2.angle = 0;

		// yellyFish4
		const yellyFish4 = new YellyFish(this, 1870, -377);
		this.add.existing(yellyFish4);
		yellyFish4.scaleX = 1;
		yellyFish4.scaleY = 1;
		yellyFish4.angle = 0;

		// yellyFish5
		const yellyFish5 = new YellyFish(this, 1145, 342);
		this.add.existing(yellyFish5);
		yellyFish5.scaleX = 1;
		yellyFish5.scaleY = 1;
		yellyFish5.angle = 0;

		// pirana1
		const pirana1 = new Pirana(this, 2393, 300);
		this.add.existing(pirana1);
		pirana1.scaleX = 0.27425923851086587;
		pirana1.scaleY = 0.27425923851086587;

		// pirana2
		const pirana2 = new Pirana(this, 126, -156);
		this.add.existing(pirana2);
		pirana2.scaleX = 0.27425923851086453;
		pirana2.scaleY = 0.27425923851086453;

		// fish_17
		const fish_17 = new Fish(this, 554, 504);
		this.add.existing(fish_17);
		fish_17.scaleX = 0.1251661272554402;
		fish_17.scaleY = 0.1251661272554402;
		fish_17.body.collideWorldBounds = true;
		fish_17.body.onWorldBounds = true;

		// fish_18
		const fish_18 = new Fish(this, 1983, -128);
		this.add.existing(fish_18);
		fish_18.scaleX = 0.1251661272554402;
		fish_18.scaleY = 0.1251661272554402;
		fish_18.body.collideWorldBounds = true;
		fish_18.body.onWorldBounds = true;

		// yellyFish7
		const yellyFish7 = new YellyFish(this, 2131, 50);
		this.add.existing(yellyFish7);
		yellyFish7.scaleX = 1;
		yellyFish7.scaleY = 1;
		yellyFish7.angle = 0;

		// yellyFish6
		const yellyFish6 = new YellyFish(this, 1396, -179);
		this.add.existing(yellyFish6);
		yellyFish6.scaleX = 1;
		yellyFish6.scaleY = 1;
		yellyFish6.angle = 0;

		// yellyFish8
		const yellyFish8 = new YellyFish(this, 2065, 515);
		this.add.existing(yellyFish8);
		yellyFish8.scaleX = 1;
		yellyFish8.scaleY = 1;
		yellyFish8.angle = 0;

		// yellyFish9
		const yellyFish9 = new YellyFish(this, 595, -358);
		this.add.existing(yellyFish9);
		yellyFish9.scaleX = 1;
		yellyFish9.scaleY = 1;
		yellyFish9.angle = 0;

		// electriceel (prefab fields)
		electriceel.Speed = 350;
		electriceel.distance = 3000;

		// electricEel (prefab fields)
		electricEel.Speed = 275;
		electricEel.distance = 3000;

		// electriceel1 (prefab fields)
		electriceel1.Speed = 188;
		electriceel1.distance = 3500;

		// electriceel2 (prefab fields)
		electriceel2.Speed = 248;
		electriceel2.distance = 1500;

		// electriceel3 (prefab fields)
		electriceel3.Speed = 190;
		electriceel3.distance = 4000;

		// electriceel4 (prefab fields)
		electriceel4.Speed = 298;
		electriceel4.distance = 1500;

		// electriceel5 (prefab fields)
		electriceel5.Speed = 400;
		electriceel5.distance = 2100;

		// electriceel6 (prefab fields)
		electriceel6.Speed = 300;
		electriceel6.distance = 2540;

		// electriceel7 (prefab fields)
		electriceel7.Speed = 250;
		electriceel7.distance = 2100;

		this.seabed = seabed;
		this.rectangle3 = rectangle3;
		this.foreground1 = foreground1;
		this.foreground02 = foreground02;
		this.foreground03 = foreground03;
		this.foregroundp04 = foregroundp04;
		this.foreground5 = foreground5;
		this.piece2 = piece2;
		this.piece3 = piece3;
		this.piece1 = piece1;
		this.badfish2 = badfish2;
		this.badfish = badfish;
		this.badfish3 = badfish3;
		this.fish = fish;
		this.fish_1 = fish_1;
		this.pillar1 = pillar1;
		this.fish_2 = fish_2;
		this.fish_3 = fish_3;
		this.electriceel = electriceel;
		this.electricEel = electricEel;
		this.electriceel1 = electriceel1;
		this.fish_4 = fish_4;
		this.fish_5 = fish_5;
		this.fish_6 = fish_6;
		this.fish_7 = fish_7;
		this.foregroundp5 = foregroundp5;
		this.fish_8 = fish_8;
		this.electriceel2 = electriceel2;
		this.fish_9 = fish_9;
		this.bottom = bottom;
		this.foregroundp6 = foregroundp6;
		this.pillar2 = pillar2;
		this.foreground9 = foreground9;
		this.electriceel3 = electriceel3;
		this.catPlayer = catPlayer;
		this.foregroundpi3 = foregroundpi3;
		this.foreground2 = foreground2;
		this.foreground3 = foreground3;
		this.foreground22 = foreground22;
		this.foregroundp4 = foregroundp4;
		this.foreground7 = foreground7;
		this.foreground8 = foreground8;
		this.electriceel4 = electriceel4;
		this.electriceel5 = electriceel5;
		this.electriceel6 = electriceel6;
		this.fish_10 = fish_10;
		this.fish_11 = fish_11;
		this.fish_12 = fish_12;
		this.fish_13 = fish_13;
		this.fish_14 = fish_14;
		this.fish_15 = fish_15;
		this.fish_16 = fish_16;
		this.electriceel7 = electriceel7;
		this.yellyFish1 = yellyFish1;
		this.yellyFish3 = yellyFish3;
		this.yellyFish2 = yellyFish2;
		this.yellyFish4 = yellyFish4;
		this.yellyFish5 = yellyFish5;
		this.pirana1 = pirana1;
		this.pirana2 = pirana2;
		this.fish_17 = fish_17;
		this.fish_18 = fish_18;
		this.yellyFish7 = yellyFish7;
		this.yellyFish6 = yellyFish6;
		this.yellyFish8 = yellyFish8;
		this.yellyFish9 = yellyFish9;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.NineSlice} */
	seabed;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle3;
	/** @type {Phaser.GameObjects.Image} */
	foreground1;
	/** @type {Phaser.GameObjects.Image} */
	foreground02;
	/** @type {Phaser.GameObjects.Image} */
	foreground03;
	/** @type {Phaser.GameObjects.Image} */
	foregroundp04;
	/** @type {Phaser.GameObjects.Image} */
	foreground5;
	/** @type {Phaser.GameObjects.Image} */
	piece2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	piece3;
	/** @type {Phaser.GameObjects.Image} */
	piece1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	badfish2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	badfish;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	badfish3;
	/** @type {Fish} */
	fish;
	/** @type {Fish} */
	fish_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	pillar1;
	/** @type {Fish} */
	fish_2;
	/** @type {Fish} */
	fish_3;
	/** @type {ElectricEel} */
	electriceel;
	/** @type {ElectricEel} */
	electricEel;
	/** @type {ElectricEel} */
	electriceel1;
	/** @type {Fish} */
	fish_4;
	/** @type {Fish} */
	fish_5;
	/** @type {Fish} */
	fish_6;
	/** @type {Fish} */
	fish_7;
	/** @type {Phaser.GameObjects.Image} */
	foregroundp5;
	/** @type {Fish} */
	fish_8;
	/** @type {ElectricEel} */
	electriceel2;
	/** @type {Fish} */
	fish_9;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bottom;
	/** @type {Phaser.GameObjects.Image} */
	foregroundp6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	pillar2;
	/** @type {Phaser.GameObjects.Image} */
	foreground9;
	/** @type {ElectricEel} */
	electriceel3;
	/** @type {CatPlayer} */
	catPlayer;
	/** @type {Phaser.GameObjects.Image} */
	foregroundpi3;
	/** @type {Phaser.GameObjects.Image} */
	foreground2;
	/** @type {Phaser.GameObjects.Image} */
	foreground3;
	/** @type {Phaser.GameObjects.Image} */
	foreground22;
	/** @type {Phaser.GameObjects.Image} */
	foregroundp4;
	/** @type {Phaser.GameObjects.Image} */
	foreground7;
	/** @type {Phaser.GameObjects.Image} */
	foreground8;
	/** @type {ElectricEel} */
	electriceel4;
	/** @type {ElectricEel} */
	electriceel5;
	/** @type {ElectricEel} */
	electriceel6;
	/** @type {Fish} */
	fish_10;
	/** @type {Fish} */
	fish_11;
	/** @type {Fish} */
	fish_12;
	/** @type {Fish} */
	fish_13;
	/** @type {Fish} */
	fish_14;
	/** @type {Fish} */
	fish_15;
	/** @type {Fish} */
	fish_16;
	/** @type {ElectricEel} */
	electriceel7;
	/** @type {YellyFish} */
	yellyFish1;
	/** @type {YellyFish} */
	yellyFish3;
	/** @type {YellyFish} */
	yellyFish2;
	/** @type {YellyFish} */
	yellyFish4;
	/** @type {YellyFish} */
	yellyFish5;
	/** @type {Pirana} */
	pirana1;
	/** @type {Pirana} */
	pirana2;
	/** @type {Fish} */
	fish_17;
	/** @type {Fish} */
	fish_18;
	/** @type {YellyFish} */
	yellyFish7;
	/** @type {YellyFish} */
	yellyFish6;
	/** @type {YellyFish} */
	yellyFish8;
	/** @type {YellyFish} */
	yellyFish9;

	/* START-USER-CODE */

	// Write your code here

	create() {



		this.Fishes=this.add.group();
		//this.physics.world.setBounds(0, -100,3000, 1200);
		//this.cameras.main.setBounds(0,-100,2500, 1200);

		this.physics.world.setBounds(0, -600,2700, 1310);
		this.cameras.main.setBounds(0,-600,2700, 1310);
		this.UpdateGroup=this.add.group();
		this.BubbleGroup=this.add.group();
		//this.WaveGroup=this.add.group();
		this.cameras.main.setZoom(0.72);
		this.UpdateGroup=this.add.group();
		this.EelsGroup=this.add.group();

this.YellyFishGroup=this.add.group();
this.YellyFishGrouptentacles=this.add.group();
		this.editorCreate();




		this.test();
this.activatelamp;
		var ColorLight=0x0c0b0b;

		//var light  = this.lights.addLight(0,-500,200).setIntensity(0.8);
    	this.lights.enable().setAmbientColor(ColorLight);

		this.lightlamp2  = this.lights.addLight(500, 500, 600).setIntensity(0.8);

		this.lightlamp3  = this.lights.addLight(500, 500, 600).setIntensity(0.8);
		this.lightlamp4  = this.lights.addLight(500, 500, 600).setIntensity(0.8);
		this.activatelamp=true;

	this.time.addEvent({ delay:600, callback:() => {
this.badfish.play("AnglerFish");

			}, callbackScope: this,repeat:0});


	this.time.addEvent({ delay:100, callback:() => {

		this.badfish2.play("AnglerFish");

			}, callbackScope: this,repeat:0});


			this.badfish3.play("AnglerFish");


		//this.physics.add.overlap(this.catPlayer,this.Fishes,this.EatMouse,null,this);

		this.physics.add.collider(this.catPlayer,this.pillar1);
		this.physics.add.collider(this.catPlayer,this.pillar2);
		this.catPlayer.UnderWater=true;
		this.catPlayer.setGravityY(50);
		this.cameras.main.startFollow(this.catPlayer,false,500,500);


this.tweenStrain=this.tweens.add({
            targets: [this.badfish,this.badfish2,this.badfish3],
			y:"+=20",
			//scale:0.2,
			 duration:2250,
	//scale:{start: 0.1, to: 0.5 },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1,
        });



		this.seabed.setPipeline('Light2D');
		this.fish.setPipeline('Light2D');
		this.fish_1.setPipeline('Light2D');
		this.fish_2.setPipeline('Light2D');
		this.fish_3.setPipeline('Light2D');
		this.fish_4.setPipeline('Light2D');
		this.fish_5.setPipeline('Light2D');
		this.fish_6.setPipeline('Light2D');
		this.fish_7.setPipeline('Light2D');
		this.fish_8.setPipeline('Light2D');
		this.fish_9.setPipeline('Light2D');
		this.fish_10.setPipeline('Light2D');
		this.fish_11.setPipeline('Light2D');
		this.fish_12.setPipeline('Light2D');
		this.fish_13.setPipeline('Light2D');
		this.fish_14.setPipeline('Light2D');
		this.fish_15.setPipeline('Light2D');
		this.fish_16.setPipeline('Light2D');
		this.fish_17.setPipeline('Light2D');
		this.fish_18.setPipeline('Light2D');

		this.pillar1.setPipeline('Light2D');
		this.pillar2.setPipeline('Light2D');





		this.electriceel7.electriceelinside.setPipeline('Light2D');
		this.electriceel6.electriceelinside.setPipeline('Light2D');
		this.electriceel5.electriceelinside.setPipeline('Light2D');
		this.electriceel4.electriceelinside.setPipeline('Light2D');
		this.electriceel3.electriceelinside.setPipeline('Light2D');
		this.electriceel2.electriceelinside.setPipeline('Light2D');
		this.electriceel1.electriceelinside.setPipeline('Light2D');
		this.electriceel.electriceelinside.setPipeline('Light2D');
		this.electricEel.electriceelinside.setPipeline('Light2D');

		this.foreground3.setPipeline('Light2D');
		this.foreground1.setPipeline('Light2D');
		this.foreground2.setPipeline('Light2D');

		this.foregroundp4.setPipeline('Light2D');
		this.foregroundp04.setPipeline('Light2D');
		this.foregroundp6.setPipeline('Light2D');
		this.foregroundp5.setPipeline('Light2D');
		this.foreground5.setPipeline('Light2D');
		this.foreground7.setPipeline('Light2D');
		this.foreground8.setPipeline('Light2D');
		this.foreground22.setPipeline('Light2D');
		this.foreground9.setPipeline('Light2D');
		this.foreground02.setPipeline('Light2D');
		this.foreground03.setPipeline('Light2D');
		this.foregroundpi3.setPipeline('Light2D');
		//this.background0.setPipeline('Light2D');
		this.piece1.setPipeline('Light2D');
		this.piece2.setPipeline('Light2D');
		this.piece3.setPipeline('Light2D');

		this.catPlayer.setPipeline('Light2D');

		this.yellyFish1.jellybob.setPipeline('Light2D');
		this.yellyFish2.jellybob.setPipeline('Light2D');
		this.yellyFish3.jellybob.setPipeline('Light2D');
		this.yellyFish4.jellybob.setPipeline('Light2D');
		this.yellyFish5.jellybob.setPipeline('Light2D');
		this.yellyFish6.jellybob.setPipeline('Light2D');
		this.yellyFish7.jellybob.setPipeline('Light2D');
		this.yellyFish8.jellybob.setPipeline('Light2D');
		this.yellyFish9.jellybob.setPipeline('Light2D');

		//	this.backgroundhill0.setPipeline('Light2D');


				this.badfish.setPipeline('Light2D');
				this.badfish2.setPipeline('Light2D');
				this.badfish3.setPipeline('Light2D');

				this.pirana1.setPipeline('Light2D');
				this.pirana2.setPipeline('Light2D');

		this.Fishes.add(this.fish);
		this.Fishes.add(this.fish_1);
		this.Fishes.add(this.fish_2);
		this.Fishes.add(this.fish_3);
		this.Fishes.add(this.fish_4);
		this.Fishes.add(this.fish_5);
		this.Fishes.add(this.fish_6);
		this.Fishes.add(this.fish_7);
		this.Fishes.add(this.fish_8);
		this.Fishes.add(this.fish_9);
		this.Fishes.add(this.fish_10);
		this.Fishes.add(this.fish_11);
		this.Fishes.add(this.fish_12);
		this.Fishes.add(this.fish_13);
		this.Fishes.add(this.fish_14);
		this.Fishes.add(this.fish_15);
		this.Fishes.add(this.fish_16);

			this.time.addEvent({ delay:3000, callback:() => {


		this.activatelamp=false;
			}, callbackScope: this,repeat:0});




		//	this.clamb1.setPipeline('Light2D');
			//this.clamb2.setPipeline('Light2D');

		//this.ShowBubbles(2600);
	}

	LightFollowAngler(AnglerFish,lamp){

		if(AnglerFish.flipX==true){

lamp.x=AnglerFish.x+50;
lamp.y=AnglerFish.y-20;

	}else {

lamp.x=AnglerFish.x-50;
lamp.y=AnglerFish.y-20;

	}


if(AnglerFish.body.blocked.left || AnglerFish.x<-200){

AnglerFish.body.setVelocityX(45);
AnglerFish.flipX=true;

	};

	if(AnglerFish.body.blocked.right || AnglerFish.x > 2500){


AnglerFish.body.setVelocityX(-45);
AnglerFish.flipX=false;

	};
	}

	update(){

		this.LightFollowAngler(this.badfish2,this.lightlamp3);
		this.LightFollowAngler(this.badfish,this.lightlamp2);
			this.LightFollowAngler(this.badfish3,this.lightlamp4);


//lightlamp2.y=this.badfish.y;
//}




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
