
// You can write more code here

/* START OF COMPILED CODE */

class Mission2Underwater4 extends BaseScene {

	constructor() {
		super("Mission2Underwater4");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// deeper_sea_bed
		const deeper_sea_bed = this.add.image(1071, 751, "deeper_sea_bed");
		deeper_sea_bed.scaleX = 1.4572881267194293;
		deeper_sea_bed.scaleY = 4.339788630761496;
		deeper_sea_bed.visible = false;

		// seabed
		const seabed = this.add.nineslice(1166, -52, "seabed", undefined, 2381, 2305, -6, -2, 59, 501);
		seabed.scaleX = 1.0800800057793274;
		seabed.scaleY = 0.7221313151333908;

		// seabackground
		const seabackground = this.add.image(1151, 116, "seabackground");
		seabackground.scaleX = 82.62810856493219;
		seabackground.scaleY = 1.000152572701718;
		seabackground.alpha = 0.2;
		seabackground.alphaTopLeft = 0.2;
		seabackground.alphaTopRight = 0.2;
		seabackground.alphaBottomLeft = 0.2;
		seabackground.alphaBottomRight = 0.2;
		seabackground.tintBottomLeft = 2040984;
		seabackground.tintBottomRight = 11909586;

		// background_piece_1
		const background_piece_1 = this.add.image(1110, 270, "background_piece_06");
		background_piece_1.scaleX = 0.8583647499365288;
		background_piece_1.scaleY = 0.8583647499365288;
		background_piece_1.alpha = 0.3;
		background_piece_1.alphaTopLeft = 0.3;
		background_piece_1.alphaTopRight = 0.3;
		background_piece_1.alphaBottomLeft = 0;
		background_piece_1.alphaBottomRight = 0;

		// rectangle3
		const rectangle3 = this.add.rectangle(590, 670, 128, 128);
		rectangle3.scaleX = 11.19455188188234;
		rectangle3.scaleY = 0.16124814136254448;
		rectangle3.visible = false;
		rectangle3.isFilled = true;
		rectangle3.fillColor = 11776889;

		// background_piece_03
		const background_piece_03 = this.add.image(426, 151, "background_piece_03");
		background_piece_03.scaleX = 1.3931800823451552;
		background_piece_03.scaleY = 1.3931800823451552;
		background_piece_03.visible = false;
		background_piece_03.alpha = 0.6;
		background_piece_03.alphaTopLeft = 0.6;
		background_piece_03.alphaTopRight = 0.6;
		background_piece_03.alphaBottomLeft = 0;
		background_piece_03.alphaBottomRight = 0;

		// piece3
		const piece3 = this.physics.add.sprite(2060, 316, "ship_wreck");
		piece3.scaleX = 0.7555819224106579;
		piece3.scaleY = 0.7555819224106579;
		piece3.alpha = 0.3;
		piece3.alphaTopLeft = 0.3;
		piece3.alphaTopRight = 0.3;
		piece3.alphaBottomLeft = 0;
		piece3.alphaBottomRight = 0;
		piece3.body.setSize(845, 610, false);

		// background_piece_04
		const background_piece_04 = this.add.image(661, 587, "background_piece_04");
		background_piece_04.scaleX = 0.7032001329507295;
		background_piece_04.scaleY = 0.7032001329507295;
		background_piece_04.visible = false;
		background_piece_04.alpha = 0.4;
		background_piece_04.alphaTopLeft = 0.3;
		background_piece_04.alphaTopRight = 0.3;
		background_piece_04.alphaBottomLeft = 0;
		background_piece_04.alphaBottomRight = 0;

		// background_piece_06
		const background_piece_06 = this.add.image(1111, 559, "background_piece_06");
		background_piece_06.scaleX = 0.35882011898718014;
		background_piece_06.scaleY = 0.35882011898718014;
		background_piece_06.visible = false;
		background_piece_06.alpha = 0.4;
		background_piece_06.alphaTopLeft = 0.4;
		background_piece_06.alphaTopRight = 0.4;
		background_piece_06.alphaBottomLeft = 0.4;
		background_piece_06.alphaBottomRight = 0.4;

		// background_piece_07
		const background_piece_07 = this.add.image(132, 601, "background_piece_07");
		background_piece_07.scaleX = 0.7175042291588758;
		background_piece_07.scaleY = 0.7175042291588758;
		background_piece_07.visible = false;
		background_piece_07.alpha = 0.4;
		background_piece_07.alphaTopLeft = 0.4;
		background_piece_07.alphaTopRight = 0.4;
		background_piece_07.alphaBottomLeft = 0.4;
		background_piece_07.alphaBottomRight = 0.4;

		// background_piece_01
		const background_piece_01 = this.add.image(232, 338, "background_piece_01");
		background_piece_01.scaleX = 0.9684366144882577;
		background_piece_01.scaleY = 0.9684366144882577;
		background_piece_01.alpha = 0.3;
		background_piece_01.alphaTopLeft = 0.3;
		background_piece_01.alphaTopRight = 0.3;
		background_piece_01.alphaBottomLeft = 0;
		background_piece_01.alphaBottomRight = 0;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(582, -36, 1400, 20);
		rectangle_1.scaleY = 0.058959080772305605;
		rectangle_1.visible = false;
		rectangle_1.isFilled = true;

		// foreground_piece_01
		const foreground_piece_01 = this.add.image(-203, 631, "foreground_piece_01");
		foreground_piece_01.scaleX = 0.27497139796304504;
		foreground_piece_01.scaleY = 0.27497139796304504;
		foreground_piece_01.alpha = 0.9;
		foreground_piece_01.alphaTopLeft = 0.9;
		foreground_piece_01.alphaTopRight = 0.9;
		foreground_piece_01.alphaBottomLeft = 0.9;
		foreground_piece_01.alphaBottomRight = 0.9;

		// foreground_piece_02
		const foreground_piece_02 = this.add.image(56, 649, "foreground_piece_02");
		foreground_piece_02.scaleX = 0.3376959723010384;
		foreground_piece_02.scaleY = 0.3376959723010384;
		foreground_piece_02.alpha = 0.9;
		foreground_piece_02.alphaTopLeft = 0.9;
		foreground_piece_02.alphaTopRight = 0.9;
		foreground_piece_02.alphaBottomLeft = 0.9;
		foreground_piece_02.alphaBottomRight = 0.9;

		// foreground_piece_03
		const foreground_piece_03 = this.add.image(394, 658, "foreground_piece_03");
		foreground_piece_03.scaleX = 0.435660119678413;
		foreground_piece_03.scaleY = 0.435660119678413;
		foreground_piece_03.alpha = 0.9;
		foreground_piece_03.alphaTopLeft = 0.9;
		foreground_piece_03.alphaTopRight = 0.9;
		foreground_piece_03.alphaBottomLeft = 0.9;
		foreground_piece_03.alphaBottomRight = 0.9;

		// foreground_piece_04
		const foreground_piece_04 = this.add.image(1141, 648, "foreground_piece_04");
		foreground_piece_04.scaleX = 0.39405248053410225;
		foreground_piece_04.scaleY = 0.39405248053410225;
		foreground_piece_04.alpha = 0.9;
		foreground_piece_04.alphaTopLeft = 0.9;
		foreground_piece_04.alphaTopRight = 0.9;
		foreground_piece_04.alphaBottomLeft = 0.9;
		foreground_piece_04.alphaBottomRight = 0.9;

		// foreground_piece_05
		const foreground_piece_05 = this.add.image(784, 671, "foreground_piece_05");
		foreground_piece_05.scaleX = 0.3744427756006714;
		foreground_piece_05.scaleY = 0.3744427756006714;
		foreground_piece_05.alpha = 0.9;
		foreground_piece_05.alphaTopLeft = 0.9;
		foreground_piece_05.alphaTopRight = 0.9;
		foreground_piece_05.alphaBottomLeft = 0.9;
		foreground_piece_05.alphaBottomRight = 0.9;

		// fish_17
		const fish_17 = new Fish(this, 785, 431);
		this.add.existing(fish_17);
		fish_17.scaleX = 0.1251661272554402;
		fish_17.scaleY = 0.1251661272554402;
		fish_17.body.collideWorldBounds = true;
		fish_17.body.onWorldBounds = true;

		// fish
		const fish = new Fish(this, 113, 362);
		this.add.existing(fish);
		fish.scaleX = 0.1251661272554402;
		fish.scaleY = 0.1251661272554402;
		fish.body.collideWorldBounds = true;
		fish.body.onWorldBounds = true;

		// fish_1
		const fish_1 = new Fish(this, 699, 99);
		this.add.existing(fish_1);
		fish_1.scaleX = 0.1251661272554402;
		fish_1.scaleY = 0.1251661272554402;
		fish_1.body.collideWorldBounds = true;
		fish_1.body.onWorldBounds = true;

		// pillar1
		const pillar1 = this.physics.add.sprite(687, 615, "pillar");
		pillar1.scaleX = 0.3922288531779187;
		pillar1.scaleY = 0.3922288531779187;
		pillar1.body.pushable = false;
		pillar1.body.immovable = true;
		pillar1.body.setOffset(100, 0);
		pillar1.body.setSize(100, 600, false);

		// fish_2
		const fish_2 = new Fish(this, 174, -201);
		this.add.existing(fish_2);
		fish_2.scaleX = 0.12516612725544016;
		fish_2.scaleY = 0.12516612725544016;
		fish_2.body.collideWorldBounds = true;
		fish_2.body.onWorldBounds = true;

		// fish_3
		const fish_3 = new Fish(this, 228, 291);
		this.add.existing(fish_3);
		fish_3.scaleX = 0.1251661272554402;
		fish_3.scaleY = 0.1251661272554402;
		fish_3.body.collideWorldBounds = true;
		fish_3.body.onWorldBounds = true;

		// electriceel
		const electriceel = new ElectricEel(this, 529, -345);
		this.add.existing(electriceel);
		electriceel.scaleX = 0.5656493044921761;
		electriceel.scaleY = 0.5656493044921761;

		// electricEel
		const electricEel = new ElectricEel(this, 710, 86);
		this.add.existing(electricEel);
		electricEel.scaleX = 0.5656493044921761;
		electricEel.scaleY = 0.5656493044921761;

		// electriceel_1
		const electriceel_1 = new ElectricEel(this, 999, -93);
		this.add.existing(electriceel_1);
		electriceel_1.scaleX = 0.5656493044921761;
		electriceel_1.scaleY = 0.5656493044921761;

		// fish_4
		const fish_4 = new Fish(this, 507, 349);
		this.add.existing(fish_4);
		fish_4.scaleX = 0.1251661272554402;
		fish_4.scaleY = 0.1251661272554402;
		fish_4.body.collideWorldBounds = true;
		fish_4.body.onWorldBounds = true;

		// fish_5
		const fish_5 = new Fish(this, 522, -475);
		this.add.existing(fish_5);
		fish_5.scaleX = 0.12516612725544118;
		fish_5.scaleY = 0.12516612725544118;
		fish_5.body.collideWorldBounds = true;
		fish_5.body.onWorldBounds = true;

		// fish_6
		const fish_6 = new Fish(this, 653, 13);
		this.add.existing(fish_6);
		fish_6.scaleX = 0.1251661272554402;
		fish_6.scaleY = 0.1251661272554402;
		fish_6.body.collideWorldBounds = true;
		fish_6.body.onWorldBounds = true;

		// fish_7
		const fish_7 = new Fish(this, 482, -113);
		this.add.existing(fish_7);
		fish_7.scaleX = 0.1251661272554402;
		fish_7.scaleY = 0.1251661272554402;
		fish_7.body.collideWorldBounds = true;
		fish_7.body.onWorldBounds = true;

		// foreground_piece_5
		const foreground_piece_5 = this.add.image(1488, 653, "foreground_piece_03");
		foreground_piece_5.scaleX = 0.435660119678413;
		foreground_piece_5.scaleY = 0.435660119678413;
		foreground_piece_5.alpha = 0.9;
		foreground_piece_5.alphaTopLeft = 0.9;
		foreground_piece_5.alphaTopRight = 0.9;
		foreground_piece_5.alphaBottomLeft = 0.9;
		foreground_piece_5.alphaBottomRight = 0.9;

		// fish_8
		const fish_8 = new Fish(this, 389, 131);
		this.add.existing(fish_8);
		fish_8.scaleX = 0.1251661272554402;
		fish_8.scaleY = 0.1251661272554402;
		fish_8.body.collideWorldBounds = true;
		fish_8.body.onWorldBounds = true;

		// background_piece
		const background_piece = this.add.image(1971, 601, "background_piece_07");
		background_piece.scaleX = 0.7175042291588758;
		background_piece.scaleY = 0.7175042291588758;
		background_piece.visible = false;
		background_piece.alpha = 0.4;
		background_piece.alphaTopLeft = 0.4;
		background_piece.alphaTopRight = 0.4;
		background_piece.alphaBottomLeft = 0.4;
		background_piece.alphaBottomRight = 0.4;

		// electriceel_2
		const electriceel_2 = new ElectricEel(this, 1057, 327);
		this.add.existing(electriceel_2);
		electriceel_2.scaleX = 0.5656493044921761;
		electriceel_2.scaleY = 0.5656493044921761;

		// fish_9
		const fish_9 = new Fish(this, 136, 160);
		this.add.existing(fish_9);
		fish_9.scaleX = 0.12516612725544016;
		fish_9.scaleY = 0.12516612725544016;
		fish_9.body.collideWorldBounds = true;
		fish_9.body.onWorldBounds = true;

		// bottom
		const bottom = this.physics.add.sprite(981, 696, "skirting_dark");
		bottom.scaleX = 5.382613563663951;
		bottom.scaleY = 0.5272402423947588;
		bottom.visible = false;
		bottom.body.pushable = false;
		bottom.body.immovable = true;
		bottom.body.setSize(500, 32, false);

		// foreground_piece_6
		const foreground_piece_6 = this.add.image(1790, 664, "foreground_piece_05");
		foreground_piece_6.scaleX = 0.3744427756006714;
		foreground_piece_6.scaleY = 0.3744427756006714;
		foreground_piece_6.alpha = 0.9;
		foreground_piece_6.alphaTopLeft = 0.9;
		foreground_piece_6.alphaTopRight = 0.9;
		foreground_piece_6.alphaBottomLeft = 0.9;
		foreground_piece_6.alphaBottomRight = 0.9;

		// pillar2
		const pillar2 = this.physics.add.sprite(1700, 570, "pillar");
		pillar2.scaleX = 0.35943323620172746;
		pillar2.scaleY = 0.35943323620172746;
		pillar2.body.pushable = false;
		pillar2.body.immovable = true;
		pillar2.body.setOffset(100, 0);
		pillar2.body.setSize(100, 600, false);

		// foreground_piece_9
		const foreground_piece_9 = this.add.image(2143, 668, "foreground_piece_05");
		foreground_piece_9.scaleX = 0.4868846056533288;
		foreground_piece_9.scaleY = 0.4868846056533288;
		foreground_piece_9.alpha = 0.9;
		foreground_piece_9.alphaTopLeft = 0.9;
		foreground_piece_9.alphaTopRight = 0.9;
		foreground_piece_9.alphaBottomLeft = 0.9;
		foreground_piece_9.alphaBottomRight = 0.9;

		// catPlayer
		const catPlayer = new CatPlayer(this, 121, -543);
		this.add.existing(catPlayer);
		catPlayer.body.collideWorldBounds = true;
		catPlayer.body.onWorldBounds = true;

		// foreground_piece_3
		const foreground_piece_3 = this.add.image(346, 689, "foreground_piece_01");
		foreground_piece_3.scaleX = 0.2452858430064414;
		foreground_piece_3.scaleY = 0.2452858430064414;

		// lionfish1
		const lionfish1 = new LionFish(this, 1604, 625);
		this.add.existing(lionfish1);
		lionfish1.body.velocity.x = -100;
		lionfish1.body.velocity.y = 0;

		// foreground_piece
		const foreground_piece = this.add.image(54, 691, "foreground_piece_03");
		foreground_piece.scaleX = 0.49512369428590813;
		foreground_piece.scaleY = 0.49512369428590813;

		// foreground_piece_1
		const foreground_piece_1 = this.add.image(652, 690, "foreground_piece_04");
		foreground_piece_1.scaleX = 0.44962537324938584;
		foreground_piece_1.scaleY = 0.44962537324938584;

		// foreground_piece_2
		const foreground_piece_2 = this.add.image(1091, 711, "foreground_piece_05");
		foreground_piece_2.scaleX = 0.4868846056533288;
		foreground_piece_2.scaleY = 0.4868846056533288;

		// foreground_piece_4
		const foreground_piece_4 = this.add.image(1536, 690, "foreground_piece_04");
		foreground_piece_4.scaleX = 0.44962537324938584;
		foreground_piece_4.scaleY = 0.44962537324938584;

		// foreground_piece_7
		const foreground_piece_7 = this.add.image(1939, 699, "foreground_piece_03");
		foreground_piece_7.scaleX = 0.49512369428590813;
		foreground_piece_7.scaleY = 0.49512369428590813;

		// foreground_piece_8
		const foreground_piece_8 = this.add.image(2237, 721, "foreground_piece_05");
		foreground_piece_8.scaleX = 0.4868846056533288;
		foreground_piece_8.scaleY = 0.4868846056533288;

		// electriceel_3
		const electriceel_3 = new ElectricEel(this, 1702, -453);
		this.add.existing(electriceel_3);
		electriceel_3.scaleX = 0.5656493044921761;
		electriceel_3.scaleY = 0.5656493044921761;

		// electriceel_4
		const electriceel_4 = new ElectricEel(this, 1581, -66);
		this.add.existing(electriceel_4);
		electriceel_4.scaleX = 0.5656493044921761;
		electriceel_4.scaleY = 0.5656493044921761;

		// electriceel_5
		const electriceel_5 = new ElectricEel(this, 2213, -60);
		this.add.existing(electriceel_5);
		electriceel_5.scaleX = 0.5656493044921761;
		electriceel_5.scaleY = 0.5656493044921761;

		// electriceel_6
		const electriceel_6 = new ElectricEel(this, 2247, 360);
		this.add.existing(electriceel_6);
		electriceel_6.scaleX = 0.5656493044921761;
		electriceel_6.scaleY = 0.5656493044921761;

		// fish_10
		const fish_10 = new Fish(this, 1848, -497);
		this.add.existing(fish_10);
		fish_10.scaleX = 0.1251661272554402;
		fish_10.scaleY = 0.1251661272554402;
		fish_10.body.collideWorldBounds = true;
		fish_10.body.onWorldBounds = true;

		// fish_11
		const fish_11 = new Fish(this, 1620, 129);
		this.add.existing(fish_11);
		fish_11.scaleX = 0.1251661272554402;
		fish_11.scaleY = 0.1251661272554402;
		fish_11.body.collideWorldBounds = true;
		fish_11.body.onWorldBounds = true;

		// fish_12
		const fish_12 = new Fish(this, 1783, 480);
		this.add.existing(fish_12);
		fish_12.scaleX = 0.1251661272554402;
		fish_12.scaleY = 0.1251661272554402;
		fish_12.body.collideWorldBounds = true;
		fish_12.body.onWorldBounds = true;

		// fish_13
		const fish_13 = new Fish(this, 1880, -152);
		this.add.existing(fish_13);
		fish_13.scaleX = 0.1251661272554402;
		fish_13.scaleY = 0.1251661272554402;
		fish_13.body.collideWorldBounds = true;
		fish_13.body.onWorldBounds = true;

		// fish_14
		const fish_14 = new Fish(this, 1089, 263);
		this.add.existing(fish_14);
		fish_14.scaleX = 0.1251661272554402;
		fish_14.scaleY = 0.1251661272554402;
		fish_14.body.collideWorldBounds = true;
		fish_14.body.onWorldBounds = true;

		// fish_15
		const fish_15 = new Fish(this, 1200, 400);
		this.add.existing(fish_15);
		fish_15.scaleX = 0.1251661272554402;
		fish_15.scaleY = 0.1251661272554402;
		fish_15.body.collideWorldBounds = true;
		fish_15.body.onWorldBounds = true;

		// fish_16
		const fish_16 = new Fish(this, 967, -167);
		this.add.existing(fish_16);
		fish_16.scaleX = 0.1251661272554402;
		fish_16.scaleY = 0.1251661272554402;
		fish_16.body.collideWorldBounds = true;
		fish_16.body.onWorldBounds = true;

		// electriceel_7
		const electriceel_7 = new ElectricEel(this, 1850, -223);
		this.add.existing(electriceel_7);
		electriceel_7.scaleX = 0.5656493044921761;
		electriceel_7.scaleY = 0.5656493044921761;

		// yellyFish
		const yellyFish = new YellyFish(this, 1964, -59);
		this.add.existing(yellyFish);

		// yellyFish_1
		const yellyFish_1 = new YellyFish(this, 837, -383);
		this.add.existing(yellyFish_1);

		// yellyFish_2
		const yellyFish_2 = new YellyFish(this, 1000, 498);
		this.add.existing(yellyFish_2);

		// yellyFish_3
		const yellyFish_3 = new YellyFish(this, 469, 12);
		this.add.existing(yellyFish_3);

		// yellyFish_4
		const yellyFish_4 = new YellyFish(this, 2084, 602);
		this.add.existing(yellyFish_4);

		// yellyFish_5
		const yellyFish_5 = new YellyFish(this, 2186, 125);
		this.add.existing(yellyFish_5);

		// male1
		const male1 = this.physics.add.sprite(1544, -225, "__male_gambusia_swim_000");
		male1.scaleX = 0.06460691823225015;
		male1.scaleY = 0.06460691823225015;
		male1.alpha = 0.05;
		male1.alphaTopLeft = 0.05;
		male1.alphaTopRight = 0.05;
		male1.alphaBottomLeft = 0.05;
		male1.alphaBottomRight = 0.05;
		male1.tintFill = true;
		male1.tintTopLeft = 6445528;
		male1.tintTopRight = 2763999;
		male1.tintBottomLeft = 6454232;
		male1.tintBottomRight = 4413133;
		male1.body.velocity.x = -50;
		male1.body.setSize(498, 196, false);

		// shadowFx
		male1.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// male2
		const male2 = this.physics.add.sprite(1438, -284, "__male_gambusia_swim_000");
		male2.scaleX = 0.06460691823225134;
		male2.scaleY = 0.06460691823225134;
		male2.alpha = 0.05;
		male2.alphaTopLeft = 0.05;
		male2.alphaTopRight = 0.05;
		male2.alphaBottomLeft = 0.05;
		male2.alphaBottomRight = 0.05;
		male2.tintFill = true;
		male2.tintTopLeft = 6445528;
		male2.tintTopRight = 2763999;
		male2.tintBottomLeft = 6454232;
		male2.tintBottomRight = 4413133;
		male2.body.velocity.x = -50;
		male2.body.setSize(498, 196, false);

		// shadowFx_1
		male2.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// male3
		const male3 = this.physics.add.sprite(1507, -264, "__male_gambusia_swim_000");
		male3.scaleX = 0.06460691823225015;
		male3.scaleY = 0.06460691823225015;
		male3.alpha = 0.05;
		male3.alphaTopLeft = 0.05;
		male3.alphaTopRight = 0.05;
		male3.alphaBottomLeft = 0.05;
		male3.alphaBottomRight = 0.05;
		male3.tintFill = true;
		male3.tintTopLeft = 6445528;
		male3.tintTopRight = 2763999;
		male3.tintBottomLeft = 6454232;
		male3.tintBottomRight = 4413133;
		male3.body.velocity.x = -50;
		male3.body.setSize(498, 196, false);

		// shadowFx_2
		male3.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// male4
		const male4 = this.physics.add.sprite(1569, -310, "__male_gambusia_swim_000");
		male4.scaleX = 0.06460691823225015;
		male4.scaleY = 0.06460691823225015;
		male4.alpha = 0.05;
		male4.alphaTopLeft = 0.05;
		male4.alphaTopRight = 0.05;
		male4.alphaBottomLeft = 0.05;
		male4.alphaBottomRight = 0.05;
		male4.tintFill = true;
		male4.tintTopLeft = 6445528;
		male4.tintTopRight = 2763999;
		male4.tintBottomLeft = 6454232;
		male4.tintBottomRight = 4413133;
		male4.body.velocity.x = -50;
		male4.body.setSize(498, 196, false);

		// shadowFx_3
		male4.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// male5
		const male5 = this.physics.add.sprite(1605, -261, "__male_gambusia_swim_000");
		male5.scaleX = 0.06460691823225075;
		male5.scaleY = 0.06460691823225075;
		male5.alpha = 0.05;
		male5.alphaTopLeft = 0.05;
		male5.alphaTopRight = 0.05;
		male5.alphaBottomLeft = 0.05;
		male5.alphaBottomRight = 0.05;
		male5.tintFill = true;
		male5.tintTopLeft = 6445528;
		male5.tintTopRight = 2763999;
		male5.tintBottomLeft = 6454232;
		male5.tintBottomRight = 4413133;
		male5.body.velocity.x = -50;
		male5.body.setSize(498, 196, false);

		// shadowFx_4
		male5.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// male6
		const male6 = this.physics.add.sprite(1502, -323, "__male_gambusia_swim_000");
		male6.scaleX = 0.06460691823225015;
		male6.scaleY = 0.06460691823225015;
		male6.alpha = 0.05;
		male6.alphaTopLeft = 0.05;
		male6.alphaTopRight = 0.05;
		male6.alphaBottomLeft = 0.05;
		male6.alphaBottomRight = 0.05;
		male6.tintFill = true;
		male6.tintTopLeft = 6445528;
		male6.tintTopRight = 2763999;
		male6.tintBottomLeft = 6454232;
		male6.tintBottomRight = 4413133;
		male6.body.velocity.x = -50;
		male6.body.setSize(498, 196, false);

		// shadowFx_5
		male6.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// male7
		const male7 = this.physics.add.sprite(1612, -353, "__male_gambusia_swim_000");
		male7.scaleX = 0.06460691823225015;
		male7.scaleY = 0.06460691823225015;
		male7.alpha = 0.05;
		male7.alphaTopLeft = 0.05;
		male7.alphaTopRight = 0.05;
		male7.alphaBottomLeft = 0.05;
		male7.alphaBottomRight = 0.05;
		male7.tintFill = true;
		male7.tintTopLeft = 6445528;
		male7.tintTopRight = 2763999;
		male7.tintBottomLeft = 6454232;
		male7.tintBottomRight = 4413133;
		male7.body.velocity.x = -50;
		male7.body.setSize(498, 196, false);

		// shadowFx_6
		male7.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// male8
		const male8 = this.physics.add.sprite(1643, -300, "__male_gambusia_swim_000");
		male8.scaleX = 0.06460691823225075;
		male8.scaleY = 0.06460691823225075;
		male8.alpha = 0.05;
		male8.alphaTopLeft = 0.05;
		male8.alphaTopRight = 0.05;
		male8.alphaBottomLeft = 0.05;
		male8.alphaBottomRight = 0.05;
		male8.tintFill = true;
		male8.tintTopLeft = 6445528;
		male8.tintTopRight = 2763999;
		male8.tintBottomLeft = 6454232;
		male8.tintBottomRight = 4413133;
		male8.body.velocity.x = -50;
		male8.body.setSize(498, 196, false);

		// shadowFx_7
		male8.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// male9
		const male9 = this.physics.add.sprite(1714, -342, "__male_gambusia_swim_000");
		male9.scaleX = 0.06460691823225075;
		male9.scaleY = 0.06460691823225075;
		male9.alpha = 0.05;
		male9.alphaTopLeft = 0.05;
		male9.alphaTopRight = 0.05;
		male9.alphaBottomLeft = 0.05;
		male9.alphaBottomRight = 0.05;
		male9.tintFill = true;
		male9.tintTopLeft = 6445528;
		male9.tintTopRight = 2763999;
		male9.tintBottomLeft = 6454232;
		male9.tintBottomRight = 4413133;
		male9.body.velocity.x = -50;
		male9.body.setSize(498, 196, false);

		// shadowFx_8
		male9.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// male10
		const male10 = this.physics.add.sprite(1737, -287, "__male_gambusia_swim_000");
		male10.scaleX = 0.06460691823225075;
		male10.scaleY = 0.06460691823225075;
		male10.alpha = 0.05;
		male10.alphaTopLeft = 0.05;
		male10.alphaTopRight = 0.05;
		male10.alphaBottomLeft = 0.05;
		male10.alphaBottomRight = 0.05;
		male10.tintFill = true;
		male10.tintTopLeft = 6445528;
		male10.tintTopRight = 2763999;
		male10.tintBottomLeft = 6454232;
		male10.tintBottomRight = 4413133;
		male10.body.velocity.x = -50;
		male10.body.setSize(498, 196, false);

		// shadowFx_9
		male10.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// male11
		const male11 = this.physics.add.sprite(1685, -244, "__male_gambusia_swim_000");
		male11.scaleX = 0.06460691823225075;
		male11.scaleY = 0.06460691823225075;
		male11.alpha = 0.05;
		male11.alphaTopLeft = 0.05;
		male11.alphaTopRight = 0.05;
		male11.alphaBottomLeft = 0.05;
		male11.alphaBottomRight = 0.05;
		male11.tintFill = true;
		male11.tintTopLeft = 6445528;
		male11.tintTopRight = 2763999;
		male11.tintBottomLeft = 6454232;
		male11.tintBottomRight = 4413133;
		male11.body.velocity.x = -50;
		male11.body.setSize(498, 196, false);

		// shadowFx_10
		male11.preFX.addShadow(0, 0, 0.1, 1, 0, 6, 1);

		// yellyFish_6
		const yellyFish_6 = new YellyFish(this, 1338, 0);
		this.add.existing(yellyFish_6);

		// yellyFish_7
		const yellyFish_7 = new YellyFish(this, 1588, 382);
		this.add.existing(yellyFish_7);

		// yellyFish_8
		const yellyFish_8 = new YellyFish(this, 1584.7879749985527, -413.70475790227715);
		this.add.existing(yellyFish_8);

		// yellyFish_9
		const yellyFish_9 = new YellyFish(this, 2238.9972207970577, -356.2404322578139);
		this.add.existing(yellyFish_9);

		// yellyFish_10
		const yellyFish_10 = new YellyFish(this, 400, 515);
		this.add.existing(yellyFish_10);

		// yellyFish_11
		const yellyFish_11 = new YellyFish(this, 546, -440);
		this.add.existing(yellyFish_11);

		// electriceel_8
		const electriceel_8 = new ElectricEel(this, 1368, 126);
		this.add.existing(electriceel_8);
		electriceel_8.scaleX = 0.5656493044921761;
		electriceel_8.scaleY = 0.5656493044921761;

		// yellyFish_12
		const yellyFish_12 = new YellyFish(this, 238, 273);
		this.add.existing(yellyFish_12);

		// yellyFish_13
		const yellyFish_13 = new YellyFish(this, 1035, 37);
		this.add.existing(yellyFish_13);

		// fish_18
		const fish_18 = new Fish(this, 153, -469);
		this.add.existing(fish_18);
		fish_18.scaleX = 0.12516612725544016;
		fish_18.scaleY = 0.12516612725544016;
		fish_18.body.collideWorldBounds = true;
		fish_18.body.onWorldBounds = true;

		// fish_19
		const fish_19 = new Fish(this, 345, -360);
		this.add.existing(fish_19);
		fish_19.scaleX = 0.12516612725544016;
		fish_19.scaleY = 0.12516612725544016;
		fish_19.body.collideWorldBounds = true;
		fish_19.body.onWorldBounds = true;

		// fish_20
		const fish_20 = new Fish(this, 1118, -402);
		this.add.existing(fish_20);
		fish_20.scaleX = 0.12516612725544016;
		fish_20.scaleY = 0.12516612725544016;
		fish_20.body.collideWorldBounds = true;
		fish_20.body.onWorldBounds = true;

		// fish_21
		const fish_21 = new Fish(this, 1347, -185);
		this.add.existing(fish_21);
		fish_21.scaleX = 0.12516612725544016;
		fish_21.scaleY = 0.12516612725544016;
		fish_21.body.collideWorldBounds = true;
		fish_21.body.onWorldBounds = true;

		// fish_22
		const fish_22 = new Fish(this, 1381, 183);
		this.add.existing(fish_22);
		fish_22.scaleX = 0.12516612725544016;
		fish_22.scaleY = 0.12516612725544016;
		fish_22.body.collideWorldBounds = true;
		fish_22.body.onWorldBounds = true;

		// fish_23
		const fish_23 = new Fish(this, 1603, 274);
		this.add.existing(fish_23);
		fish_23.scaleX = 0.12516612725544016;
		fish_23.scaleY = 0.12516612725544016;
		fish_23.body.collideWorldBounds = true;
		fish_23.body.onWorldBounds = true;

		// fish_24
		const fish_24 = new Fish(this, 1084, 41);
		this.add.existing(fish_24);
		fish_24.scaleX = 0.12516612725544016;
		fish_24.scaleY = 0.12516612725544016;
		fish_24.body.collideWorldBounds = true;
		fish_24.body.onWorldBounds = true;

		// fish_25
		const fish_25 = new Fish(this, 951, 537);
		this.add.existing(fish_25);
		fish_25.scaleX = 0.12516612725544016;
		fish_25.scaleY = 0.12516612725544016;
		fish_25.body.collideWorldBounds = true;
		fish_25.body.onWorldBounds = true;

		// fish_26
		const fish_26 = new Fish(this, 1264, 558);
		this.add.existing(fish_26);
		fish_26.scaleX = 0.12516612725544016;
		fish_26.scaleY = 0.12516612725544016;
		fish_26.body.collideWorldBounds = true;
		fish_26.body.onWorldBounds = true;

		// fish_27
		const fish_27 = new Fish(this, 228.3360575005806, 529.0716786481938);
		this.add.existing(fish_27);
		fish_27.scaleX = 0.12516612725544016;
		fish_27.scaleY = 0.12516612725544016;
		fish_27.body.collideWorldBounds = true;
		fish_27.body.onWorldBounds = true;

		// rectangle
		const rectangle = this.add.rectangle(1141, 53, 128, 128);
		rectangle.scaleX = 21.255856371952316;
		rectangle.scaleY = 11.248640899811708;
		rectangle.visible = false;
		rectangle.alpha = 0.2;
		rectangle.isFilled = true;
		rectangle.fillColor = 1847190;
		rectangle.strokeColor = 12787744;

		// electriceel (prefab fields)
		electriceel.Speed = 450;
		electriceel.distance = 2100;

		// electricEel (prefab fields)
		electricEel.Speed = 300;
		electricEel.distance = 1800;

		// electriceel_1 (prefab fields)
		electriceel_1.Speed = 450;
		electriceel_1.distance = 3000;

		// electriceel_2 (prefab fields)
		electriceel_2.Speed = 210;
		electriceel_2.distance = 1200;

		// electriceel_3 (prefab fields)
		electriceel_3.Speed = 411;
		electriceel_3.distance = 840;

		// electriceel_4 (prefab fields)
		electriceel_4.Speed = 250;
		electriceel_4.distance = 982;

		// electriceel_5 (prefab fields)
		electriceel_5.Speed = 352;
		electriceel_5.distance = 1000;

		// electriceel_6 (prefab fields)
		electriceel_6.Speed = 410;
		electriceel_6.distance = 4000;

		// electriceel_7 (prefab fields)
		electriceel_7.Speed = 548;
		electriceel_7.distance = 1000;

		// electriceel_8 (prefab fields)
		electriceel_8.Speed = 650;
		electriceel_8.distance = 2100;

		this.rectangle3 = rectangle3;
		this.piece3 = piece3;
		this.fish_17 = fish_17;
		this.fish = fish;
		this.fish_1 = fish_1;
		this.pillar1 = pillar1;
		this.fish_2 = fish_2;
		this.fish_3 = fish_3;
		this.electriceel = electriceel;
		this.electriceel_1 = electriceel_1;
		this.fish_4 = fish_4;
		this.fish_5 = fish_5;
		this.fish_6 = fish_6;
		this.fish_7 = fish_7;
		this.fish_8 = fish_8;
		this.electriceel_2 = electriceel_2;
		this.fish_9 = fish_9;
		this.bottom = bottom;
		this.pillar2 = pillar2;
		this.catPlayer = catPlayer;
		this.lionfish1 = lionfish1;
		this.electriceel_3 = electriceel_3;
		this.electriceel_4 = electriceel_4;
		this.electriceel_5 = electriceel_5;
		this.electriceel_6 = electriceel_6;
		this.fish_10 = fish_10;
		this.fish_11 = fish_11;
		this.fish_12 = fish_12;
		this.fish_13 = fish_13;
		this.fish_14 = fish_14;
		this.fish_15 = fish_15;
		this.fish_16 = fish_16;
		this.electriceel_7 = electriceel_7;
		this.male1 = male1;
		this.male2 = male2;
		this.male3 = male3;
		this.male4 = male4;
		this.male5 = male5;
		this.male6 = male6;
		this.male7 = male7;
		this.male8 = male8;
		this.male9 = male9;
		this.male10 = male10;
		this.male11 = male11;
		this.electriceel_8 = electriceel_8;
		this.fish_18 = fish_18;
		this.fish_19 = fish_19;
		this.fish_20 = fish_20;
		this.fish_21 = fish_21;
		this.fish_22 = fish_22;
		this.fish_23 = fish_23;
		this.fish_24 = fish_24;
		this.fish_25 = fish_25;
		this.fish_26 = fish_26;
		this.fish_27 = fish_27;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	piece3;
	/** @type {Fish} */
	fish_17;
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
	electriceel_1;
	/** @type {Fish} */
	fish_4;
	/** @type {Fish} */
	fish_5;
	/** @type {Fish} */
	fish_6;
	/** @type {Fish} */
	fish_7;
	/** @type {Fish} */
	fish_8;
	/** @type {ElectricEel} */
	electriceel_2;
	/** @type {Fish} */
	fish_9;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bottom;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	pillar2;
	/** @type {CatPlayer} */
	catPlayer;
	/** @type {LionFish} */
	lionfish1;
	/** @type {ElectricEel} */
	electriceel_3;
	/** @type {ElectricEel} */
	electriceel_4;
	/** @type {ElectricEel} */
	electriceel_5;
	/** @type {ElectricEel} */
	electriceel_6;
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
	electriceel_7;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	male1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	male2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	male3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	male4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	male5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	male6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	male7;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	male8;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	male9;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	male10;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	male11;
	/** @type {ElectricEel} */
	electriceel_8;
	/** @type {Fish} */
	fish_18;
	/** @type {Fish} */
	fish_19;
	/** @type {Fish} */
	fish_20;
	/** @type {Fish} */
	fish_21;
	/** @type {Fish} */
	fish_22;
	/** @type {Fish} */
	fish_23;
	/** @type {Fish} */
	fish_24;
	/** @type {Fish} */
	fish_25;
	/** @type {Fish} */
	fish_26;
	/** @type {Fish} */
	fish_27;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.Fishes=this.add.group();
this.count=0;
fishicon=true;
		this.physics.world.setBounds(0, -600,2400, 1310);
		this.cameras.main.setBounds(0,-600,2400, 1310);

		this.UpdateGroup=this.add.group();
		this.EelsGroup=this.add.group();
		this.BubbleGroup=this.add.group();
		this.EnemyGroup=this.add.group();

		this.BackGroundFish=this.add.group();
		this.YellyFishGroup=this.add.group();
		this.YellyFishGrouptentacles=this.add.group();
		//this.WaveGroup=this.add.group();
		this.cameras.main.setZoom(0.72);
		this.goaltheme=this.sound.add('missiongoal');

			this.Yellytheme=this.sound.add('Yellybounce');

		this.editorCreate();

		this.EnemyGroup.add(this.lionfish1);

		this.BackGroundFish.add(this.male1);
		this.BackGroundFish.add(this.male2);
		this.BackGroundFish.add(this.male3);
		this.BackGroundFish.add(this.male4);
		this.BackGroundFish.add(this.male5);
		this.BackGroundFish.add(this.male6);
		this.BackGroundFish.add(this.male7);
		this.BackGroundFish.add(this.male8);
		this.BackGroundFish.add(this.male9);
		this.BackGroundFish.add(this.male10);
		this.BackGroundFish.add(this.male11);

		//this.lionfish.play('LionFishIdle');

const numSegments = 20; 
    const numPoints = numSegments + 1;
		//this.rope = this.add.rope(600, 400, 'background_piece_03', null, 20, false).setScale(1.5);

		//const alphaArray = [];
    //	for (let i = 0; i < numPoints; i++) {
      //  const topAlpha = 0.8;
        //const bottomAlpha = 0.0;
        // Lineaire interpolatie (lerp) om de alpha waarde op elk punt te vinden:
        //const t = i / numSegments; // 't' gaat van 0.0 tot 1.0
        //const alphaValue = topAlpha + (bottomAlpha - topAlpha) * t;

        //alphaArray.push(alphaValue);
    //}
	//this.rope.setAlphas(alphaArray);


		this.catPlayer.depth=0;
		this.catPlayer.depth=0;
		this.ShowBubbles(2600);

		this.physics.add.overlap(this.catPlayer,this.Fishes,this.EatFish,null,this);
		this.catPlayer.UnderWater=true;
		this.catPlayer.setGravityY(50);



		this.test();
		this.cameras.main.startFollow(this.catPlayer,false,0.2,0.2);
		this.physics.add.collider(this.catPlayer,this.bottom);
		this.physics.add.collider(this.catPlayer,this.pillar1);
		this.physics.add.collider(this.catPlayer,this.pillar2);
		this.physics.add.overlap(this.catPlayer,this.EelsGroup,this.GetHit,null,this);
		this.physics.add.overlap(this.catPlayer,this.EnemyGroup,this.GetHit,null,this);

		this.physics.add.collider(this.catPlayer,this.YellyFishGroup,this.BounceCat,null,this);
		this.physics.add.overlap(this.catPlayer,this.YellyFishGrouptentacles,this.GetHit,null,this);

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
this.Fishes.add(this.fish_17);
this.Fishes.add(this.fish_18);
this.Fishes.add(this.fish_19);
this.Fishes.add(this.fish_20);
this.Fishes.add(this.fish_21);
this.Fishes.add(this.fish_22);
this.Fishes.add(this.fish_23);
this.Fishes.add(this.fish_24);
this.Fishes.add(this.fish_25);
this.Fishes.add(this.fish_26);
this.Fishes.add(this.fish_27);

MissionCount=this.Fishes.getLength();
console.log('mission count : '+ MissionCount);

	}

	EatFish(Cat,Mouse){

	if(Mouse){
	Mouse.destroy();
	MissionCount--;
	this.FishNumber++;
	this.mousecatchtheme.play();
			}

	if(MissionCount==0){

	ShowCompletetext=true;
	LevelFish4Clear=true;
	this.game.sound.stopAll();
	this.goaltheme.play();


							this.time.addEvent({ delay:1000, callback:() => {
	this.cameras.main.fadeOut(1000);

		this.time.addEvent({ delay:1000, callback:() => {
		//this.scenelevelheme.stop();

		this.scene.start('Level');	


				}, callbackScope: this,repeat:0});
						}, callbackScope: this,repeat:0});

	}
		};

	update(){

		//this.count += 0.05;
        //let points = this.rope.points;

        //for (let i = 0; i < points.length; i++)
        //{
          //  if (this.rope.horizontal)
            //{
              //  points[i].y = Math.sin(i * 0.5 + this.count) * 10;
            //}
            //else
            //{
              //  points[i].x = Math.sin(i * 0.5 + this.count) * 12;
           //}
        //}

     //this.rope.setDirty();

        //this.ropie.setDirty();

	//	console.log('cat pos y:'+ this.catPlayer.y);
	//	console.log('cat pos x:'+ this.catPlayer.x);



this.UpdateGroup.children.iterate(function(child){

if(child){

	child.update();

};

  });

  this.Fishes.children.iterate(function(child){

if(child){

	child.AquariumSize=1;

};

  });

  this.BackGroundFish.children.iterate(function(child){

if(child){

	if(child.x<-50){

		child.x=2500;
	}

};

  });

	}



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
