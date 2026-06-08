
// You can write more code here

/* START OF COMPILED CODE */

class Up5LevelSpider extends BaseScene {

	constructor() {
		super("Up5LevelSpider");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// greenfloor
		const greenfloor = this.add.image(639, 681, "red_plain");
		greenfloor.scaleX = 15.964687337484047;
		greenfloor.scaleY = 0.10485117397067724;
		greenfloor.flipY = true;
		greenfloor.tintBottomLeft = 8355711;
		greenfloor.tintBottomRight = 7895160;

		// shelves2
		const shelves2 = this.physics.add.sprite(1121, -3159, "light_5_shelves");
		shelves2.scaleX = 0.21820938338708623;
		shelves2.scaleY = 0.21820938338708623;
		shelves2.body.velocity.x = -120;
		shelves2.body.setSize(676, 1109, false);

		// skirting1
		const skirting1 = this.add.tileSprite(454, 613, 15000, 63, "skirting_light");
		skirting1.scaleX = 0.2528690000816929;
		skirting1.scaleY = 0.2528690000816929;

		// wallpaper2
		const wallpaper2 = this.add.tileSprite(741, -2382, 15000, 5000, "red_large_stripe");
		wallpaper2.scaleX = 0.1281025380134249;
		wallpaper2.scaleY = 1.1955617931872182;
		wallpaper2.tintTopLeft = 3749687;
		wallpaper2.tintTopRight = 3223600;
		wallpaper2.tintBottomLeft = 16382457;
		wallpaper2.tintBottomRight = 6837589;
		wallpaper2.tileScaleX = 0.9;

		// lamp7
		const lamp7 = this.add.nineslice(323, -2627, "lamp_21", undefined, 339, 2077, 1, 1, 116, 326);
		lamp7.scaleX = 0.2175454808078271;
		lamp7.scaleY = 0.2175454808078271;

		// green1
		const green1 = this.physics.add.sprite(2973, -791, "red_plain");
		green1.scaleX = 2;
		green1.scaleY = 0.014266231936905908;
		green1.tintBottomLeft = 8355711;
		green1.tintBottomRight = 7895160;
		green1.body.setSize(128, 1382, false);

		// cheese6
		const cheese6 = this.physics.add.sprite(2084, -1648, "cheese");
		cheese6.scaleX = 0.18831940255420793;
		cheese6.scaleY = 0.18831940255420793;
		cheese6.body.setSize(207, 186, false);

		// bed4
		const bed4 = this.physics.add.sprite(1212, -2666, "bed_05");
		bed4.scaleX = 0.33868092184149945;
		bed4.scaleY = 0.33868092184149945;
		bed4.body.checkCollision.left = false;
		bed4.body.checkCollision.right = false;
		bed4.body.pushable = false;
		bed4.body.immovable = true;
		bed4.body.setSize(707, 464, false);

		// cheese4
		const cheese4 = this.physics.add.sprite(2327, -3774, "cheese");
		cheese4.scaleX = 0.18831940255420793;
		cheese4.scaleY = 0.18831940255420793;
		cheese4.body.setSize(207, 186, false);

		// cheese7
		const cheese7 = this.physics.add.sprite(2749, -3728, "cheese");
		cheese7.scaleX = 0.18831940255420793;
		cheese7.scaleY = 0.18831940255420793;
		cheese7.body.setSize(207, 186, false);

		// cheese9
		const cheese9 = this.physics.add.sprite(2114, -325, "cheese");
		cheese9.scaleX = 0.18831940255420793;
		cheese9.scaleY = 0.18831940255420793;
		cheese9.body.setSize(207, 186, false);

		// cheese
		const cheese = this.physics.add.sprite(4009, -1091, "cheese");
		cheese.scaleX = 0.18831940255420793;
		cheese.scaleY = 0.18831940255420793;
		cheese.body.setSize(207, 186, false);

		// cheese1
		const cheese1 = this.physics.add.sprite(3150, -3849, "cheese");
		cheese1.scaleX = 0.18831940255420793;
		cheese1.scaleY = 0.18831940255420793;
		cheese1.body.setSize(207, 186, false);

		// cheese8
		const cheese8 = this.physics.add.sprite(2535, -3735, "cheese");
		cheese8.scaleX = 0.18831940255420793;
		cheese8.scaleY = 0.18831940255420793;
		cheese8.body.setSize(207, 186, false);

		// cheese2
		const cheese2 = this.physics.add.sprite(3211, 240, "cheese");
		cheese2.scaleX = 0.18831940255420793;
		cheese2.scaleY = 0.18831940255420793;
		cheese2.body.setSize(207, 186, false);

		// bed3
		const bed3 = this.physics.add.sprite(324, -1622, "bed_05");
		bed3.scaleX = 0.33868092184149945;
		bed3.scaleY = 0.33868092184149945;
		bed3.body.checkCollision.left = false;
		bed3.body.checkCollision.right = false;
		bed3.body.pushable = false;
		bed3.body.immovable = true;
		bed3.body.setSize(707, 464, false);

		// windowstart
		const windowstart = this.physics.add.sprite(141, 319, "window_06");
		windowstart.scaleX = 0.22587207017263713;
		windowstart.scaleY = 0.22587207017263713;
		windowstart.body.setSize(495, 768, false);

		// bottom
		const bottom = this.physics.add.sprite(669, 682, "block_separator_01");
		bottom.scaleX = 5.504107162267043;
		bottom.scaleY = 1.250533984076435;
		bottom.visible = false;
		bottom.body.pushable = false;
		bottom.body.immovable = true;
		bottom.body.setSize(695, 40, false);

		// lamp6
		const lamp6 = this.add.nineslice(185, -1223, "lamp_21", undefined, 339, 3082, 1, 1, 116, 326);
		lamp6.scaleX = 0.2175454808078271;
		lamp6.scaleY = 0.2175454808078271;

		// planter_01
		const planter_01 = this.add.image(196, 68, "planter_01");
		planter_01.scaleX = 0.5601401004970402;
		planter_01.scaleY = 0.5601401004970402;

		// paint3
		const paint3 = this.add.image(2057, -2903, "painting_03_white");
		paint3.scaleX = 0.1523975504644709;
		paint3.scaleY = 0.1523975504644709;

		// paint4
		const paint4 = this.add.image(2489, -4341, "painting_04_light");
		paint4.scaleX = 0.18428672167607266;
		paint4.scaleY = 0.18428672167607266;

		// shelfup1
		const shelfup1 = this.physics.add.sprite(193, 105, "light_wall_shelf");
		shelfup1.scaleX = 0.11;
		shelfup1.scaleY = 0.1;
		shelfup1.body.setSize(1007, 85, false);

		// green_2
		const green_2 = this.add.image(-1378, -1313, "red_plain");
		green_2.scaleX = 15.964687337484047;
		green_2.scaleY = 0.014266231936905908;
		green_2.tintBottomLeft = 8355711;
		green_2.tintBottomRight = 7895160;

		// ceiling3
		const ceiling3 = this.add.tileSprite(-204, -1548, 10000, 78, "skirting_light");
		ceiling3.scaleX = 0.18021693427896895;
		ceiling3.scaleY = 0.18021693427896895;

		// smallchair
		const smallchair = this.physics.add.sprite(141, 611, "light_table_small");
		smallchair.scaleX = 0.20051634652048822;
		smallchair.scaleY = 0.20051634652048822;
		smallchair.body.setSize(376, 369, false);

		// painting3
		const painting3 = this.physics.add.sprite(802, 352, "painting_03_light");
		painting3.scaleX = 0.1499163814389398;
		painting3.scaleY = 0.1499163814389398;
		painting3.alpha = 0.9;
		painting3.alphaTopLeft = 0.9;
		painting3.alphaTopRight = 0.9;
		painting3.alphaBottomLeft = 0.9;
		painting3.alphaBottomRight = 0.9;
		painting3.body.setSize(614, 432, false);

		// painting4
		const painting4 = this.physics.add.sprite(153, -3068, "painting_09_dark");
		painting4.scaleX = 0.15209929721466445;
		painting4.scaleY = 0.15209929721466445;
		painting4.body.setSize(635, 437, false);

		// bottomlast
		const bottomlast = this.physics.add.sprite(802, -1766, "block_separator_01");
		bottomlast.scaleX = 5.504107162267043;
		bottomlast.scaleY = 1.250533984076435;
		bottomlast.visible = false;
		bottomlast.body.pushable = false;
		bottomlast.body.immovable = true;
		bottomlast.body.setSize(695, 40, false);

		// ceiling4
		const ceiling4 = this.add.tileSprite(1784, -2586, 10000, 78, "skirting_light");
		ceiling4.scaleX = 0.18021693427896895;
		ceiling4.scaleY = 0.18021693427896895;

		// ghost
		const ghost = new Ghost(this, 524, 51);
		this.add.existing(ghost);
		ghost.scaleX = 0.3919033177133652;
		ghost.scaleY = 0.3919033177133652;
		ghost.alpha = 0.5;
		ghost.body.collideWorldBounds = true;

		// catPlayer
		const catPlayer = new CatPlayer(this, 146, 536);
		this.add.existing(catPlayer);
		catPlayer.body.collideWorldBounds = true;

		// ghost_1
		const ghost_1 = new Ghost(this, 1274, -1840);
		this.add.existing(ghost_1);
		ghost_1.scaleX = 0.3919033177133652;
		ghost_1.scaleY = 0.3919033177133652;
		ghost_1.alpha = 0.5;
		ghost_1.body.collideWorldBounds = true;

		// rugfloor
		const rugfloor = this.physics.add.sprite(476, 651, "rug_05");
		rugfloor.scaleX = 0.22595859407563645;
		rugfloor.scaleY = 0.11164518210482023;
		rugfloor.body.setSize(1160, 297, false);

		// ghost_2
		const ghost_2 = new Ghost(this, 1226, -3572);
		this.add.existing(ghost_2);
		ghost_2.scaleX = 0.3919033177133652;
		ghost_2.scaleY = 0.3919033177133652;
		ghost_2.alpha = 0.5;
		ghost_2.body.collideWorldBounds = true;

		// spiderroom
		const spiderroom = new Spider(this, 280, -1365);
		this.add.existing(spiderroom);
		spiderroom.scaleX = 0.2557486287841334;
		spiderroom.scaleY = 0.2557486287841334;

		// spiderroom2
		const spiderroom2 = new Spider(this, 493, -2457);
		this.add.existing(spiderroom2);
		spiderroom2.scaleX = 0.2557486287841334;
		spiderroom2.scaleY = 0.2557486287841334;

		// block
		const block = this.physics.add.sprite(89, -3720, "box_no_perspective_01");
		block.scaleX = 0.5074435360671631;
		block.scaleY = 0.5074435360671631;
		block.visible = false;
		block.body.collideWorldBounds = true;
		block.body.pushable = false;
		block.body.immovable = true;
		block.body.setSize(135, 127, false);

		// bat2
		const bat2 = new Bat(this, 1423, -1193);
		this.add.existing(bat2);
		bat2.scaleX = 0.15808932514316845;
		bat2.scaleY = 0.15808932514316845;
		bat2.body.velocity.x = -400;
		bat2.body.velocity.y = 0;
		bat2.body.collideWorldBounds = true;

		// bat
		const bat = new Bat(this, 1438, -3119);
		this.add.existing(bat);
		bat.scaleX = 0.15808932514316845;
		bat.scaleY = 0.15808932514316845;
		bat.body.velocity.x = -400;
		bat.body.velocity.y = 0;
		bat.body.collideWorldBounds = true;

		// ghost_3
		const ghost_3 = new Ghost(this, 625, -4264);
		this.add.existing(ghost_3);
		ghost_3.scaleX = 0.3919033177133652;
		ghost_3.scaleY = 0.3919033177133652;
		ghost_3.alpha = 0.5;
		ghost_3.body.collideWorldBounds = true;

		// block1
		const block1 = this.physics.add.sprite(1164, -1455, "box_no_perspective_01");
		block1.scaleX = 0.5074435360671631;
		block1.scaleY = 0.5074435360671631;
		block1.visible = false;
		block1.body.collideWorldBounds = true;
		block1.body.pushable = false;
		block1.body.immovable = true;
		block1.body.setSize(135, 127, false);

		// block3
		const block3 = this.physics.add.sprite(263, -637, "box_no_perspective_01");
		block3.scaleX = 0.5074435360671631;
		block3.scaleY = 0.5074435360671631;
		block3.visible = false;
		block3.body.collideWorldBounds = true;
		block3.body.pushable = false;
		block3.body.immovable = true;
		block3.body.setSize(135, 127, false);

		// bed1
		const bed1 = this.physics.add.sprite(1109, 571, "bed_05");
		bed1.scaleX = 0.33868092184149945;
		bed1.scaleY = 0.33868092184149945;
		bed1.body.checkCollision.left = false;
		bed1.body.checkCollision.right = false;
		bed1.body.pushable = false;
		bed1.body.immovable = true;
		bed1.body.setSize(707, 464, false);

		// lamp1
		const lamp1 = this.add.nineslice(1121, -195, "lamp_21", undefined, 336, 3009, 1, 1, 116, 326);
		lamp1.scaleX = 0.2175454808078271;
		lamp1.scaleY = 0.2175454808078271;

		// bed2
		const bed2 = this.physics.add.sprite(190, -422, "bed_05");
		bed2.scaleX = 0.33868092184149945;
		bed2.scaleY = 0.33868092184149945;
		bed2.body.checkCollision.left = false;
		bed2.body.checkCollision.right = false;
		bed2.body.pushable = false;
		bed2.body.immovable = true;
		bed2.body.setSize(707, 464, false);

		// painting2
		const painting2 = this.physics.add.sprite(706, 9, "painting_07_light");
		painting2.scaleX = 0.19162617816852628;
		painting2.scaleY = 0.19162617816852628;
		painting2.alpha = 0.9;
		painting2.alphaTopLeft = 0.9;
		painting2.alphaTopRight = 0.9;
		painting2.alphaBottomLeft = 0.9;
		painting2.alphaBottomRight = 0.9;
		painting2.body.pushable = false;
		painting2.body.immovable = true;
		painting2.body.setOffset(0, 20);
		painting2.body.setSize(263, 320, false);

		// painting
		const painting = this.physics.add.sprite(185, -914, "painting_06_dark");
		painting.scaleX = 0.19162617816852628;
		painting.scaleY = 0.19162617816852628;
		painting.visible = false;
		painting.alpha = 0.9;
		painting.alphaTopLeft = 0.9;
		painting.alphaTopRight = 0.9;
		painting.alphaBottomLeft = 0.9;
		painting.alphaBottomRight = 0.9;
		painting.body.pushable = false;
		painting.body.immovable = true;
		painting.body.setOffset(0, 20);
		painting.body.setSize(263, 320, false);

		// lamp
		const lamp = this.add.nineslice(470, -22, "lamp_21", undefined, 351, 2901, 1, 1, 116, 326);
		lamp.scaleX = 0.2175454808078271;
		lamp.scaleY = 0.2175454808078271;

		// shelfup10
		const shelfup10 = this.physics.add.sprite(778, -1204, "light_wall_shelf");
		shelfup10.scaleX = 0.1250780691733577;
		shelfup10.scaleY = 0.1250780691733577;
		shelfup10.body.setSize(1007, 85, false);

		// ceiling1
		const ceiling1 = this.add.tileSprite(108, -338, 10000, 78, "skirting_light");
		ceiling1.scaleX = 0.08;
		ceiling1.scaleY = 0.18021693427896895;

		// paintCol1
		const paintCol1 = this.physics.add.sprite(472, 264, "painting_06_dark");
		paintCol1.scaleX = 0.19162617816852628;
		paintCol1.scaleY = 0.19162617816852628;
		paintCol1.visible = false;
		paintCol1.alpha = 0.9;
		paintCol1.alphaTopLeft = 0.9;
		paintCol1.alphaTopRight = 0.9;
		paintCol1.alphaBottomLeft = 0.9;
		paintCol1.alphaBottomRight = 0.9;
		paintCol1.body.pushable = false;
		paintCol1.body.immovable = true;
		paintCol1.body.setOffset(0, 20);
		paintCol1.body.setSize(263, 320, false);

		// paintCol2
		const paintCol2 = this.physics.add.sprite(1122, 96, "painting_06_dark");
		paintCol2.scaleX = 0.19162617816852628;
		paintCol2.scaleY = 0.19162617816852628;
		paintCol2.visible = false;
		paintCol2.alpha = 0.9;
		paintCol2.alphaTopLeft = 0.9;
		paintCol2.alphaTopRight = 0.9;
		paintCol2.alphaBottomLeft = 0.9;
		paintCol2.alphaBottomRight = 0.9;
		paintCol2.body.pushable = false;
		paintCol2.body.immovable = true;
		paintCol2.body.setOffset(0, 20);
		paintCol2.body.setSize(263, 320, false);

		// painting5
		const painting5 = this.physics.add.sprite(931, -270, "painting_06_dark");
		painting5.scaleX = 0.19162617816852628;
		painting5.scaleY = 0.19162617816852628;
		painting5.alpha = 0.9;
		painting5.alphaTopLeft = 0.9;
		painting5.alphaTopRight = 0.9;
		painting5.alphaBottomLeft = 0.9;
		painting5.alphaBottomRight = 0.9;
		painting5.body.pushable = false;
		painting5.body.immovable = true;
		painting5.body.setOffset(0, 20);
		painting5.body.setSize(263, 320, false);

		// lamp3
		const lamp3 = this.add.nineslice(777, -880, "lamp_21", undefined, 351, 2960, 1, 1, 116, 326);
		lamp3.scaleX = 0.2175454808078271;
		lamp3.scaleY = 0.2175454808078271;

		// painting6
		const painting6 = this.physics.add.sprite(778, -591, "painting_07_light");
		painting6.scaleX = 0.19162617816852628;
		painting6.scaleY = 0.19162617816852628;
		painting6.visible = false;
		painting6.alpha = 0.9;
		painting6.alphaTopLeft = 0.9;
		painting6.alphaTopRight = 0.9;
		painting6.alphaBottomLeft = 0.9;
		painting6.alphaBottomRight = 0.9;
		painting6.body.pushable = false;
		painting6.body.immovable = true;
		painting6.body.setOffset(0, 20);
		painting6.body.setSize(263, 320, false);

		// planter
		const planter = this.add.image(455, -768, "planter_01");
		planter.scaleX = 0.5601401004970402;
		planter.scaleY = 0.5601401004970402;

		// shelfup
		const shelfup = this.physics.add.sprite(452, -731, "light_wall_shelf");
		shelfup.scaleX = 0.11;
		shelfup.scaleY = 0.1;
		shelfup.body.setSize(1007, 85, false);

		// shelfup2
		const shelfup2 = this.physics.add.sprite(1122, -526, "light_wall_shelf");
		shelfup2.scaleX = 0.1250780691733577;
		shelfup2.scaleY = 0.1250780691733577;
		shelfup2.body.setSize(1007, 85, false);

		// ceiling
		const ceiling = this.add.tileSprite(-44, -2857, 10000, 78, "skirting_light");
		ceiling.scaleX = 0.08;
		ceiling.scaleY = 0.18021693427896895;

		// painting7
		const painting7 = this.physics.add.sprite(1203, -1478, "painting_06_dark");
		painting7.scaleX = 0.19162617816852628;
		painting7.scaleY = 0.19162617816852628;
		painting7.alpha = 0.9;
		painting7.alphaTopLeft = 0.9;
		painting7.alphaTopRight = 0.9;
		painting7.alphaBottomLeft = 0.9;
		painting7.alphaBottomRight = 0.9;
		painting7.body.pushable = false;
		painting7.body.immovable = true;
		painting7.body.setOffset(0, 20);
		painting7.body.setSize(263, 320, false);

		// painting8
		const painting8 = this.physics.add.sprite(950, -1751, "painting_06_dark");
		painting8.scaleX = 0.19162617816852628;
		painting8.scaleY = 0.19162617816852628;
		painting8.visible = false;
		painting8.alpha = 0.9;
		painting8.alphaTopLeft = 0.9;
		painting8.alphaTopRight = 0.9;
		painting8.alphaBottomLeft = 0.9;
		painting8.alphaBottomRight = 0.9;
		painting8.body.pushable = false;
		painting8.body.immovable = true;
		painting8.body.setOffset(0, 20);
		painting8.body.setSize(263, 320, false);

		// lamp5
		const lamp5 = this.add.nineslice(952, -2150, "lamp_21", undefined, 339, 3949, 1, 1, 116, 326);
		lamp5.scaleX = 0.2175454808078271;
		lamp5.scaleY = 0.2175454808078271;

		// plant5
		const plant5 = this.physics.add.sprite(1304, -1133, "house_plant_example_09");
		plant5.scaleX = 0.09734482766973596;
		plant5.scaleY = 0.09734482766973596;
		plant5.body.bounce.y = 0.3;
		plant5.body.checkCollision.up = false;
		plant5.body.setOffset(110, 130);
		plant5.body.setSize(300, 700, false);

		// shelfup_1
		const shelfup_1 = this.physics.add.sprite(1304, -1089, "light_wall_shelf");
		shelfup_1.scaleX = 0.1250780691733577;
		shelfup_1.scaleY = 0.1250780691733577;
		shelfup_1.body.setSize(1007, 85, false);

		// painting9
		const painting9 = this.physics.add.sprite(454, -1143, "painting_05_dark");
		painting9.scaleX = 0.19162617816852628;
		painting9.scaleY = 0.19162617816852628;
		painting9.alpha = 0.9;
		painting9.alphaTopLeft = 0.9;
		painting9.alphaTopRight = 0.9;
		painting9.alphaBottomLeft = 0.9;
		painting9.alphaBottomRight = 0.9;
		painting9.body.pushable = false;
		painting9.body.immovable = true;
		painting9.body.setOffset(0, 20);
		painting9.body.setSize(263, 320, false);

		// painting10
		const painting10 = this.physics.add.sprite(1060, -884, "painting_02_dark");
		painting10.scaleX = 0.16477279816927423;
		painting10.scaleY = 0.16477279816927423;
		painting10.alpha = 0.9;
		painting10.alphaTopLeft = 0.9;
		painting10.alphaTopRight = 0.9;
		painting10.alphaBottomLeft = 0.9;
		painting10.alphaBottomRight = 0.9;
		painting10.body.pushable = false;
		painting10.body.immovable = true;
		painting10.body.setOffset(0, 20);
		painting10.body.setSize(263, 320, false);

		// plant1
		const plant1 = this.physics.add.sprite(322, -2091, "house_plant_example_09");
		plant1.scaleX = 0.09734482766973596;
		plant1.scaleY = 0.09734482766973596;
		plant1.body.bounce.y = 0.3;
		plant1.body.checkCollision.up = false;
		plant1.body.setOffset(110, 130);
		plant1.body.setSize(300, 700, false);

		// shelfup3
		const shelfup3 = this.physics.add.sprite(322, -2047, "light_wall_shelf");
		shelfup3.scaleX = 0.11;
		shelfup3.scaleY = 0.11;
		shelfup3.body.setSize(1007, 85, false);

		// plant2
		const plant2 = this.physics.add.sprite(1268, -2270, "house_plant_example_09");
		plant2.scaleX = 0.09734482766973596;
		plant2.scaleY = 0.09734482766973596;
		plant2.body.bounce.y = 0.3;
		plant2.body.checkCollision.up = false;
		plant2.body.setOffset(110, 130);
		plant2.body.setSize(300, 700, false);

		// shelfup4
		const shelfup4 = this.physics.add.sprite(1268, -2226, "light_wall_shelf");
		shelfup4.scaleX = 0.11;
		shelfup4.scaleY = 0.11;
		shelfup4.body.setSize(1007, 85, false);

		// painting1
		const painting1 = this.physics.add.sprite(683, -1975, "painting_07_dark");
		painting1.scaleX = 0.19162617816852628;
		painting1.scaleY = 0.19162617816852628;
		painting1.alpha = 0.9;
		painting1.alphaTopLeft = 0.9;
		painting1.alphaTopRight = 0.9;
		painting1.alphaBottomLeft = 0.9;
		painting1.alphaBottomRight = 0.9;
		painting1.body.pushable = false;
		painting1.body.immovable = true;
		painting1.body.setOffset(0, 20);
		painting1.body.setSize(263, 320, false);

		// painting11
		const painting11 = this.physics.add.sprite(1152, -2024, "painting_02_dark");
		painting11.scaleX = 0.16005145926385658;
		painting11.scaleY = 0.16005145926385658;
		painting11.alpha = 0.9;
		painting11.alphaTopLeft = 0.9;
		painting11.alphaTopRight = 0.9;
		painting11.alphaBottomLeft = 0.9;
		painting11.alphaBottomRight = 0.9;
		painting11.body.pushable = false;
		painting11.body.immovable = true;
		painting11.body.setOffset(0, 20);
		painting11.body.setSize(263, 320, false);

		// paintingcircle4
		const paintingcircle4 = this.physics.add.sprite(309, -4213, "painting_07_dark");
		paintingcircle4.scaleX = 0.19162617816852628;
		paintingcircle4.scaleY = 0.19162617816852628;
		paintingcircle4.alpha = 0.9;
		paintingcircle4.alphaTopLeft = 0.9;
		paintingcircle4.alphaTopRight = 0.9;
		paintingcircle4.alphaBottomLeft = 0.9;
		paintingcircle4.alphaBottomRight = 0.9;
		paintingcircle4.body.pushable = false;
		paintingcircle4.body.immovable = true;
		paintingcircle4.body.setOffset(0, 20);
		paintingcircle4.body.setSize(263, 320, false);

		// painting_2
		const painting_2 = this.physics.add.sprite(2221, -4333, "painting_07_dark");
		painting_2.scaleX = 0.19162617816852628;
		painting_2.scaleY = 0.19162617816852628;
		painting_2.alpha = 0.9;
		painting_2.alphaTopLeft = 0.9;
		painting_2.alphaTopRight = 0.9;
		painting_2.alphaBottomLeft = 0.9;
		painting_2.alphaBottomRight = 0.9;
		painting_2.body.pushable = false;
		painting_2.body.immovable = true;
		painting_2.body.setOffset(0, 20);
		painting_2.body.setSize(263, 320, false);

		// painting_3
		const painting_3 = this.physics.add.sprite(1968, -4300, "painting_07_dark");
		painting_3.scaleX = 0.19162617816852628;
		painting_3.scaleY = 0.19162617816852628;
		painting_3.alpha = 0.9;
		painting_3.alphaTopLeft = 0.9;
		painting_3.alphaTopRight = 0.9;
		painting_3.alphaBottomLeft = 0.9;
		painting_3.alphaBottomRight = 0.9;
		painting_3.body.pushable = false;
		painting_3.body.immovable = true;
		painting_3.body.setOffset(0, 20);
		painting_3.body.setSize(263, 320, false);

		// painting_4
		const painting_4 = this.physics.add.sprite(3049, -4153, "painting_07_dark");
		painting_4.scaleX = 0.19162617816852628;
		painting_4.scaleY = 0.19162617816852628;
		painting_4.alpha = 0.9;
		painting_4.alphaTopLeft = 0.9;
		painting_4.alphaTopRight = 0.9;
		painting_4.alphaBottomLeft = 0.9;
		painting_4.alphaBottomRight = 0.9;
		painting_4.body.pushable = false;
		painting_4.body.immovable = true;
		painting_4.body.setOffset(0, 20);
		painting_4.body.setSize(263, 320, false);

		// painting_5
		const painting_5 = this.physics.add.sprite(151, -3464, "painting_07_dark");
		painting_5.scaleX = 0.19162617816852628;
		painting_5.scaleY = 0.19162617816852628;
		painting_5.visible = false;
		painting_5.alpha = 0.9;
		painting_5.alphaTopLeft = 0.9;
		painting_5.alphaTopRight = 0.9;
		painting_5.alphaBottomLeft = 0.9;
		painting_5.alphaBottomRight = 0.9;
		painting_5.body.pushable = false;
		painting_5.body.immovable = true;
		painting_5.body.setOffset(0, 20);
		painting_5.body.setSize(263, 320, false);

		// paintingcircle1
		const paintingcircle1 = this.physics.add.sprite(912, -4103, "painting_02_dark");
		paintingcircle1.scaleX = 0.1588413177682075;
		paintingcircle1.scaleY = 0.1588413177682075;
		paintingcircle1.alpha = 0.9;
		paintingcircle1.alphaTopLeft = 0.9;
		paintingcircle1.alphaTopRight = 0.9;
		paintingcircle1.alphaBottomLeft = 0.9;
		paintingcircle1.alphaBottomRight = 0.9;
		paintingcircle1.body.pushable = false;
		paintingcircle1.body.immovable = true;
		paintingcircle1.body.setOffset(0, 20);
		paintingcircle1.body.setSize(263, 320, false);

		// painting_7
		const painting_7 = this.physics.add.sprite(1985, -3997, "painting_05_dark");
		painting_7.scaleX = 0.19162617816852628;
		painting_7.scaleY = 0.19162617816852628;
		painting_7.alpha = 0.9;
		painting_7.alphaTopLeft = 0.9;
		painting_7.alphaTopRight = 0.9;
		painting_7.alphaBottomLeft = 0.9;
		painting_7.alphaBottomRight = 0.9;
		painting_7.body.pushable = false;
		painting_7.body.immovable = true;
		painting_7.body.setOffset(0, 20);
		painting_7.body.setSize(263, 320, false);

		// painting_8
		const painting_8 = this.physics.add.sprite(2755, -4301, "painting_07_dark");
		painting_8.scaleX = 0.19162617816852628;
		painting_8.scaleY = 0.19162617816852628;
		painting_8.alpha = 0.9;
		painting_8.alphaTopLeft = 0.9;
		painting_8.alphaTopRight = 0.9;
		painting_8.alphaBottomLeft = 0.9;
		painting_8.alphaBottomRight = 0.9;
		painting_8.body.pushable = false;
		painting_8.body.immovable = true;
		painting_8.body.setOffset(0, 20);
		painting_8.body.setSize(263, 320, false);

		// painting_9
		const painting_9 = this.physics.add.sprite(1209, -3313, "painting_07_dark");
		painting_9.scaleX = 0.19162617816852628;
		painting_9.scaleY = 0.19162617816852628;
		painting_9.visible = false;
		painting_9.alpha = 0.9;
		painting_9.alphaTopLeft = 0.9;
		painting_9.alphaTopRight = 0.9;
		painting_9.alphaBottomLeft = 0.9;
		painting_9.alphaBottomRight = 0.9;
		painting_9.body.pushable = false;
		painting_9.body.immovable = true;
		painting_9.body.setOffset(0, 20);
		painting_9.body.setSize(263, 320, false);

		// paintingcircle2
		const paintingcircle2 = this.physics.add.sprite(485, -3353, "painting_05_dark");
		paintingcircle2.scaleX = 0.19162617816852628;
		paintingcircle2.scaleY = 0.19162617816852628;
		paintingcircle2.alpha = 0.9;
		paintingcircle2.alphaTopLeft = 0.9;
		paintingcircle2.alphaTopRight = 0.9;
		paintingcircle2.alphaBottomLeft = 0.9;
		paintingcircle2.alphaBottomRight = 0.9;
		paintingcircle2.body.pushable = false;
		paintingcircle2.body.immovable = true;
		paintingcircle2.body.setOffset(0, 20);
		paintingcircle2.body.setSize(263, 320, false);

		// painting_11
		const painting_11 = this.physics.add.sprite(2682, -4782, "painting_07_dark");
		painting_11.scaleX = 0.19162617816852628;
		painting_11.scaleY = 0.19162617816852628;
		painting_11.alpha = 0.9;
		painting_11.alphaTopLeft = 0.9;
		painting_11.alphaTopRight = 0.9;
		painting_11.alphaBottomLeft = 0.9;
		painting_11.alphaBottomRight = 0.9;
		painting_11.body.pushable = false;
		painting_11.body.immovable = true;
		painting_11.body.setOffset(0, 20);
		painting_11.body.setSize(263, 320, false);

		// painting_12
		const painting_12 = this.physics.add.sprite(2534, -4098, "painting_07_dark");
		painting_12.scaleX = 0.19162617816852628;
		painting_12.scaleY = 0.19162617816852628;
		painting_12.alpha = 0.9;
		painting_12.alphaTopLeft = 0.9;
		painting_12.alphaTopRight = 0.9;
		painting_12.alphaBottomLeft = 0.9;
		painting_12.alphaBottomRight = 0.9;
		painting_12.body.pushable = false;
		painting_12.body.immovable = true;
		painting_12.body.setOffset(0, 20);
		painting_12.body.setSize(263, 320, false);

		// painting_13
		const painting_13 = this.physics.add.sprite(2815, -4609, "painting_07_dark");
		painting_13.scaleX = 0.19162617816852628;
		painting_13.scaleY = 0.19162617816852628;
		painting_13.alpha = 0.9;
		painting_13.alphaTopLeft = 0.9;
		painting_13.alphaTopRight = 0.9;
		painting_13.alphaBottomLeft = 0.9;
		painting_13.alphaBottomRight = 0.9;
		painting_13.body.pushable = false;
		painting_13.body.immovable = true;
		painting_13.body.setOffset(0, 20);
		painting_13.body.setSize(263, 320, false);

		// painting_14
		const painting_14 = this.physics.add.sprite(520, -3796, "painting_07_dark");
		painting_14.scaleX = 0.19162617816852628;
		painting_14.scaleY = 0.19162617816852628;
		painting_14.alpha = 0.9;
		painting_14.alphaTopLeft = 0.9;
		painting_14.alphaTopRight = 0.9;
		painting_14.alphaBottomLeft = 0.9;
		painting_14.alphaBottomRight = 0.9;
		painting_14.body.pushable = false;
		painting_14.body.immovable = true;
		painting_14.body.setOffset(0, 20);
		painting_14.body.setSize(263, 320, false);

		// painting_15
		const painting_15 = this.physics.add.sprite(2282, -4012, "painting_07_dark");
		painting_15.scaleX = 0.19162617816852628;
		painting_15.scaleY = 0.19162617816852628;
		painting_15.alpha = 0.9;
		painting_15.alphaTopLeft = 0.9;
		painting_15.alphaTopRight = 0.9;
		painting_15.alphaBottomLeft = 0.9;
		painting_15.alphaBottomRight = 0.9;
		painting_15.body.pushable = false;
		painting_15.body.immovable = true;
		painting_15.body.setOffset(0, 20);
		painting_15.body.setSize(263, 320, false);

		// painting_16
		const painting_16 = this.physics.add.sprite(2495, -3949, "painting_07_dark");
		painting_16.scaleX = 0.19162617816852628;
		painting_16.scaleY = 0.19162617816852628;
		painting_16.alpha = 0.9;
		painting_16.alphaTopLeft = 0.9;
		painting_16.alphaTopRight = 0.9;
		painting_16.alphaBottomLeft = 0.9;
		painting_16.alphaBottomRight = 0.9;
		painting_16.body.pushable = false;
		painting_16.body.immovable = true;
		painting_16.body.setOffset(0, 20);
		painting_16.body.setSize(263, 320, false);

		// painting_17
		const painting_17 = this.physics.add.sprite(2562, -3950, "painting_07_dark");
		painting_17.scaleX = 0.19162617816852628;
		painting_17.scaleY = 0.19162617816852628;
		painting_17.alpha = 0.9;
		painting_17.alphaTopLeft = 0.9;
		painting_17.alphaTopRight = 0.9;
		painting_17.alphaBottomLeft = 0.9;
		painting_17.alphaBottomRight = 0.9;
		painting_17.body.pushable = false;
		painting_17.body.immovable = true;
		painting_17.body.setOffset(0, 20);
		painting_17.body.setSize(263, 320, false);

		// painting_18
		const painting_18 = this.physics.add.sprite(2430, -4034, "painting_07_dark");
		painting_18.scaleX = 0.19162617816852628;
		painting_18.scaleY = 0.19162617816852628;
		painting_18.alpha = 0.9;
		painting_18.alphaTopLeft = 0.9;
		painting_18.alphaTopRight = 0.9;
		painting_18.alphaBottomLeft = 0.9;
		painting_18.alphaBottomRight = 0.9;
		painting_18.body.pushable = false;
		painting_18.body.immovable = true;
		painting_18.body.setOffset(0, 20);
		painting_18.body.setSize(263, 320, false);

		// painting_19
		const painting_19 = this.physics.add.sprite(721, -3101, "painting_07_dark");
		painting_19.scaleX = 0.19162617816852628;
		painting_19.scaleY = 0.19162617816852628;
		painting_19.alpha = 0.9;
		painting_19.alphaTopLeft = 0.9;
		painting_19.alphaTopRight = 0.9;
		painting_19.alphaBottomLeft = 0.9;
		painting_19.alphaBottomRight = 0.9;
		painting_19.body.pushable = false;
		painting_19.body.immovable = true;
		painting_19.body.setOffset(0, 20);
		painting_19.body.setSize(263, 320, false);

		// painting_20
		const painting_20 = this.physics.add.sprite(2778, -3949, "painting_07_dark");
		painting_20.scaleX = 0.19162617816852628;
		painting_20.scaleY = 0.19162617816852628;
		painting_20.alpha = 0.9;
		painting_20.alphaTopLeft = 0.9;
		painting_20.alphaTopRight = 0.9;
		painting_20.alphaBottomLeft = 0.9;
		painting_20.alphaBottomRight = 0.9;
		painting_20.body.pushable = false;
		painting_20.body.immovable = true;
		painting_20.body.setOffset(0, 20);
		painting_20.body.setSize(263, 320, false);

		// paintingcircle3
		const paintingcircle3 = this.physics.add.sprite(990, -3775, "painting_06_dark");
		paintingcircle3.scaleX = 0.19162617816852628;
		paintingcircle3.scaleY = 0.19162617816852628;
		paintingcircle3.alpha = 0.9;
		paintingcircle3.alphaTopLeft = 0.9;
		paintingcircle3.alphaTopRight = 0.9;
		paintingcircle3.alphaBottomLeft = 0.9;
		paintingcircle3.alphaBottomRight = 0.9;
		paintingcircle3.body.pushable = false;
		paintingcircle3.body.immovable = true;
		paintingcircle3.body.setOffset(0, 20);
		paintingcircle3.body.setSize(263, 320, false);

		// painting13
		const painting13 = this.physics.add.sprite(602, -2672, "painting_05_dark");
		painting13.scaleX = 0.19162617816852628;
		painting13.scaleY = 0.19162617816852628;
		painting13.alpha = 0.9;
		painting13.alphaTopLeft = 0.9;
		painting13.alphaTopRight = 0.9;
		painting13.alphaBottomLeft = 0.9;
		painting13.alphaBottomRight = 0.9;
		painting13.body.pushable = false;
		painting13.body.immovable = true;
		painting13.body.setOffset(0, 20);
		painting13.body.setSize(263, 320, false);

		// painting12
		const painting12 = this.physics.add.sprite(1881, -2361, "painting_07_dark");
		painting12.scaleX = 0.19162617816852628;
		painting12.scaleY = 0.19162617816852628;
		painting12.alpha = 0.9;
		painting12.alphaTopLeft = 0.9;
		painting12.alphaTopRight = 0.9;
		painting12.alphaBottomLeft = 0.9;
		painting12.alphaBottomRight = 0.9;
		painting12.body.pushable = false;
		painting12.body.immovable = true;
		painting12.body.setOffset(0, 20);
		painting12.body.setSize(263, 320, false);

		// plant
		const plant = this.physics.add.sprite(710, -3524, "house_plant_example_01");
		plant.scaleX = 0.11913308815984468;
		plant.scaleY = 0.11913308815984468;
		plant.body.bounce.y = 0.3;
		plant.body.checkCollision.up = false;
		plant.body.setOffset(110, 130);
		plant.body.setSize(300, 700, false);

		// shelfup_2
		const shelfup_2 = this.physics.add.sprite(711, -3496, "light_wall_shelf");
		shelfup_2.scaleX = 0.11;
		shelfup_2.scaleY = 0.09;
		shelfup_2.tintTopLeft = 6046274;
		shelfup_2.tintTopRight = 7623250;
		shelfup_2.tintBottomLeft = 9591386;
		shelfup_2.tintBottomRight = 9590615;
		shelfup_2.body.setSize(1007, 85, false);

		// plant_1
		const plant_1 = this.physics.add.sprite(-667, -3841, "house_plant_example_09");
		plant_1.scaleX = 0.09734482766973596;
		plant_1.scaleY = 0.09734482766973596;
		plant_1.body.bounce.y = 0.3;
		plant_1.body.checkCollision.up = false;
		plant_1.body.setOffset(110, 130);
		plant_1.body.setSize(300, 700, false);

		// shelfup_3
		const shelfup_3 = this.physics.add.sprite(-721, -3713, "light_wall_shelf");
		shelfup_3.scaleX = 0.11;
		shelfup_3.scaleY = 0.11;
		shelfup_3.body.setSize(1007, 85, false);

		// plant_2
		const plant_2 = this.physics.add.sprite(157, -3934, "house_plant_example_09");
		plant_2.scaleX = 0.09734482766973596;
		plant_2.scaleY = 0.09734482766973596;
		plant_2.body.bounce.y = 0.3;
		plant_2.body.checkCollision.up = false;
		plant_2.body.setOffset(110, 130);
		plant_2.body.setSize(300, 700, false);

		// shelfup_4
		const shelfup_4 = this.physics.add.sprite(709, -3490, "light_wall_shelf");
		shelfup_4.scaleX = 0.11;
		shelfup_4.scaleY = 0.11;
		shelfup_4.body.setSize(1007, 85, false);

		// plant_3
		const plant_3 = this.physics.add.sprite(1201, -4198, "house_plant_example_09");
		plant_3.scaleX = 0.09734482766973596;
		plant_3.scaleY = 0.09734482766973596;
		plant_3.body.bounce.y = 0.3;
		plant_3.body.checkCollision.up = false;
		plant_3.body.setOffset(110, 130);
		plant_3.body.setSize(300, 700, false);

		// shelfup_5
		const shelfup_5 = this.physics.add.sprite(1987, -4229, "light_wall_shelf");
		shelfup_5.scaleX = 0.11;
		shelfup_5.scaleY = 0.11;
		shelfup_5.body.setSize(1007, 85, false);

		// ceiling_1
		const ceiling_1 = this.add.tileSprite(1408, -4740, 10000, 78, "skirting_light");
		ceiling_1.scaleX = 0.08;
		ceiling_1.scaleY = 0.18021693427896895;

		// ceiling_2
		const ceiling_2 = this.add.tileSprite(389, -4733, 10000, 78, "skirting_light");
		ceiling_2.scaleX = 0.08;
		ceiling_2.scaleY = 0.18021693427896895;

		// painting14
		const painting14 = this.physics.add.sprite(2309, -4055, "painting_05_dark");
		painting14.scaleX = 0.19162617816852628;
		painting14.scaleY = 0.19162617816852628;
		painting14.alpha = 0.9;
		painting14.alphaTopLeft = 0.9;
		painting14.alphaTopRight = 0.9;
		painting14.alphaBottomLeft = 0.9;
		painting14.alphaBottomRight = 0.9;
		painting14.body.pushable = false;
		painting14.body.immovable = true;
		painting14.body.setOffset(0, 20);
		painting14.body.setSize(263, 320, false);

		// paintcol3
		const paintcol3 = this.physics.add.sprite(323, -2434, "painting_05_dark");
		paintcol3.scaleX = 0.19162617816852628;
		paintcol3.scaleY = 0.19162617816852628;
		paintcol3.visible = false;
		paintcol3.alpha = 0.9;
		paintcol3.alphaTopLeft = 0.9;
		paintcol3.alphaTopRight = 0.9;
		paintcol3.alphaBottomLeft = 0.9;
		paintcol3.alphaBottomRight = 0.9;
		paintcol3.body.pushable = false;
		paintcol3.body.immovable = true;
		paintcol3.body.setOffset(0, 20);
		paintcol3.body.setSize(263, 320, false);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(695, -1780, 128, 128);
		rectangle_1.scaleX = 15.930003127902483;
		rectangle_1.scaleY = -40.63389160149019;
		rectangle_1.visible = false;
		rectangle_1.alpha = 0.15;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 723466;

		// shelfup_6
		const shelfup_6 = this.physics.add.sprite(156, -3884, "light_wall_shelf");
		shelfup_6.scaleX = 0.11;
		shelfup_6.scaleY = 0.11;
		shelfup_6.body.setSize(1007, 85, false);

		// spiderroom_1
		const spiderroom_1 = new Spider(this, 491, -4632);
		this.add.existing(spiderroom_1);
		spiderroom_1.scaleX = 0.2557486287841334;
		spiderroom_1.scaleY = 0.2557486287841334;

		// lamp_1
		const lamp_1 = this.add.nineslice(1207, -3712, "lamp_21", undefined, 339, 3949, 1, 1, 116, 326);
		lamp_1.scaleX = 0.2175454808078271;
		lamp_1.scaleY = 0.2175454808078271;

		// lamp_2
		const lamp_2 = this.add.nineslice(155, -3656, "lamp_21", undefined, 339, 2040, 1, 1, 116, 326);
		lamp_2.scaleX = 0.2175454808078271;
		lamp_2.scaleY = 0.2175454808078271;

		// shelfup_7
		const shelfup_7 = this.physics.add.sprite(1208, -4150, "light_wall_shelf");
		shelfup_7.scaleX = 0.11;
		shelfup_7.scaleY = 0.11;
		shelfup_7.body.setSize(1007, 85, false);

		// lamp_3
		const lamp_3 = this.add.nineslice(711, -3282, "lamp_21", undefined, 339, 1903, 1, 1, 116, 326);
		lamp_3.scaleX = 0.2175454808078271;
		lamp_3.scaleY = 0.2175454808078271;

		// lamp_4
		const lamp_4 = this.add.nineslice(651, -4566, "lamp_21", undefined, 339, 2040, 1, 1, 116, 326);
		lamp_4.scaleX = 0.2175454808078271;
		lamp_4.scaleY = 0.2175454808078271;

		this.greenfloor = greenfloor;
		this.shelves2 = shelves2;
		this.skirting1 = skirting1;
		this.wallpaper2 = wallpaper2;
		this.lamp7 = lamp7;
		this.green1 = green1;
		this.cheese6 = cheese6;
		this.bed4 = bed4;
		this.cheese4 = cheese4;
		this.cheese7 = cheese7;
		this.cheese9 = cheese9;
		this.cheese = cheese;
		this.cheese1 = cheese1;
		this.cheese8 = cheese8;
		this.cheese2 = cheese2;
		this.bed3 = bed3;
		this.windowstart = windowstart;
		this.bottom = bottom;
		this.lamp6 = lamp6;
		this.paint3 = paint3;
		this.paint4 = paint4;
		this.shelfup1 = shelfup1;
		this.ceiling3 = ceiling3;
		this.smallchair = smallchair;
		this.painting3 = painting3;
		this.painting4 = painting4;
		this.bottomlast = bottomlast;
		this.ceiling4 = ceiling4;
		this.catPlayer = catPlayer;
		this.rugfloor = rugfloor;
		this.spiderroom = spiderroom;
		this.spiderroom2 = spiderroom2;
		this.block = block;
		this.bat2 = bat2;
		this.bat = bat;
		this.block1 = block1;
		this.block3 = block3;
		this.bed1 = bed1;
		this.lamp1 = lamp1;
		this.bed2 = bed2;
		this.painting2 = painting2;
		this.painting = painting;
		this.lamp = lamp;
		this.shelfup10 = shelfup10;
		this.ceiling1 = ceiling1;
		this.paintCol1 = paintCol1;
		this.paintCol2 = paintCol2;
		this.painting5 = painting5;
		this.lamp3 = lamp3;
		this.painting6 = painting6;
		this.shelfup = shelfup;
		this.shelfup2 = shelfup2;
		this.ceiling = ceiling;
		this.painting7 = painting7;
		this.painting8 = painting8;
		this.lamp5 = lamp5;
		this.plant5 = plant5;
		this.shelfup_1 = shelfup_1;
		this.painting9 = painting9;
		this.painting10 = painting10;
		this.plant1 = plant1;
		this.shelfup3 = shelfup3;
		this.plant2 = plant2;
		this.shelfup4 = shelfup4;
		this.painting1 = painting1;
		this.painting11 = painting11;
		this.paintingcircle4 = paintingcircle4;
		this.painting_2 = painting_2;
		this.painting_3 = painting_3;
		this.painting_4 = painting_4;
		this.painting_5 = painting_5;
		this.paintingcircle1 = paintingcircle1;
		this.painting_7 = painting_7;
		this.painting_8 = painting_8;
		this.painting_9 = painting_9;
		this.paintingcircle2 = paintingcircle2;
		this.painting_11 = painting_11;
		this.painting_12 = painting_12;
		this.painting_13 = painting_13;
		this.painting_14 = painting_14;
		this.painting_15 = painting_15;
		this.painting_16 = painting_16;
		this.painting_17 = painting_17;
		this.painting_18 = painting_18;
		this.painting_19 = painting_19;
		this.painting_20 = painting_20;
		this.paintingcircle3 = paintingcircle3;
		this.painting13 = painting13;
		this.painting12 = painting12;
		this.plant = plant;
		this.shelfup_2 = shelfup_2;
		this.plant_1 = plant_1;
		this.shelfup_3 = shelfup_3;
		this.plant_2 = plant_2;
		this.shelfup_4 = shelfup_4;
		this.plant_3 = plant_3;
		this.shelfup_5 = shelfup_5;
		this.ceiling_1 = ceiling_1;
		this.ceiling_2 = ceiling_2;
		this.painting14 = painting14;
		this.paintcol3 = paintcol3;
		this.shelfup_6 = shelfup_6;
		this.spiderroom_1 = spiderroom_1;
		this.lamp_1 = lamp_1;
		this.lamp_2 = lamp_2;
		this.shelfup_7 = shelfup_7;
		this.lamp_3 = lamp_3;
		this.lamp_4 = lamp_4;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	greenfloor;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelves2;
	/** @type {Phaser.GameObjects.TileSprite} */
	skirting1;
	/** @type {Phaser.GameObjects.TileSprite} */
	wallpaper2;
	/** @type {Phaser.GameObjects.NineSlice} */
	lamp7;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	green1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cheese6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bed4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cheese4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cheese7;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cheese9;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cheese;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cheese1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cheese8;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cheese2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bed3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	windowstart;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bottom;
	/** @type {Phaser.GameObjects.NineSlice} */
	lamp6;
	/** @type {Phaser.GameObjects.Image} */
	paint3;
	/** @type {Phaser.GameObjects.Image} */
	paint4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup1;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	smallchair;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bottomlast;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling4;
	/** @type {CatPlayer} */
	catPlayer;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	rugfloor;
	/** @type {Spider} */
	spiderroom;
	/** @type {Spider} */
	spiderroom2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	block;
	/** @type {Bat} */
	bat2;
	/** @type {Bat} */
	bat;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	block1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	block3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bed1;
	/** @type {Phaser.GameObjects.NineSlice} */
	lamp1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bed2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting;
	/** @type {Phaser.GameObjects.NineSlice} */
	lamp;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup10;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintCol1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintCol2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting5;
	/** @type {Phaser.GameObjects.NineSlice} */
	lamp3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup2;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting7;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting8;
	/** @type {Phaser.GameObjects.NineSlice} */
	lamp5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting9;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting10;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting11;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingcircle4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting_2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting_3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting_4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting_5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingcircle1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting_7;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting_8;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting_9;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingcircle2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting_11;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting_12;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting_13;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting_14;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting_15;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting_16;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting_17;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting_18;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting_19;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting_20;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingcircle3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting13;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting12;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup_2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup_3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant_2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup_4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant_3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup_5;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling_1;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling_2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting14;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintcol3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup_6;
	/** @type {Spider} */
	spiderroom_1;
	/** @type {Phaser.GameObjects.NineSlice} */
	lamp_1;
	/** @type {Phaser.GameObjects.NineSlice} */
	lamp_2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup_7;
	/** @type {Phaser.GameObjects.NineSlice} */
	lamp_3;
	/** @type {Phaser.GameObjects.NineSlice} */
	lamp_4;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.UpdateGroup=this.add.group();
		this.CheeseGroup=this.add.group();
		this.cheesecatchtheme=this.sound.add('GetMouse');



		this.BombsGroup=this.add.group();

		var ColorLight=0x3b3635;
		var light  = this.lights.addLight(500,-2000,150).setIntensity(0.1);
    	this.lights.enable().setAmbientColor(ColorLight);

		this.editorCreate();



		this.AddingRatsStuff();

		this.spiderroom.Moving=true;
		this.spiderroom2.Moving=true;
		this.spiderroom_1.Moving=true;


		this.test();

		this.PanHeight=-950;

		this.physics.world.enable(this.spiderroom);

		this.physics.world.setBounds(0, -4700,1400, 5400);
		this.cameras.main.setBounds(0,-4700,1400, 5400);
		this.cameras.main.setZoom(0.72);
	//	this.cameras.main.startFollow(this.catPlayer,false,500,10);
		this.physics.add.collider(this.catPlayer,this.bottom);
		this.physics.add.collider(this.spiderroom.spider1,this.block);
		this.physics.add.collider(this.spiderroom2.spider1,this.block1);
	//	this.physics.add.collider(this.spiderroom3.spider1,this.block3);

		this.physics.add.collider(this.BombsGroup,this.ceiling3,this.explode,null,this);
		this.physics.add.overlap(this.catPlayer,this.CheeseGroup,this.CatchSpider,null,this);
		this.physics.add.collider(this.catPlayer,this.bed1,this.JumpUp,null,this);
			this.physics.add.collider(this.catPlayer,this.bed2,this.JumpUp,null,this);
			this.physics.add.collider(this.catPlayer,this.bed3,this.JumpUp,null,this);
			this.physics.add.collider(this.catPlayer,this.bed4,this.JumpUp,null,this);

	this.physics.add.collider(this.catPlayer,this.paintCol1,this.StickToObject,null,this);
	this.physics.add.collider(this.catPlayer,this.paintCol2,this.StickToObject,null,this);
this.physics.add.collider(this.catPlayer,this.paintcol3,this.StickToObject,null,this);

	this.physics.add.collider(this.catPlayer,this.painting1,this.StickToObject,null,this);
	this.physics.add.collider(this.catPlayer,this.painting11,this.StickToObject,null,this);

		this.physics.add.collider(this.catPlayer,this.painting2,this.StickToObject,null,this);
		this.physics.add.collider(this.catPlayer,this.painting5,this.StickToObject,null,this);
		this.physics.add.collider(this.catPlayer,this.painting4,this.StickToObject,null,this);
		this.physics.add.collider(this.catPlayer,this.painting6,this.StickToObject,null,this);
		this.physics.add.collider(this.catPlayer,this.painting,this.StickToObject,null,this);
		this.physics.add.collider(this.catPlayer,this.painting7,this.StickToObject,null,this);
		this.physics.add.collider(this.catPlayer,this.painting8,this.StickToObject,null,this);
		this.physics.add.collider(this.catPlayer,this.painting9,this.StickToObject,null,this);
		this.physics.add.collider(this.catPlayer,this.painting10,this.StickToObject,null,this);
		this.physics.add.collider(this.catPlayer,this.painting12,this.StickToObject,null,this);
		this.physics.add.collider(this.catPlayer,this.painting13,this.StickToObject,null,this);

			this.physics.add.collider(this.catPlayer,this.painting_7,this.StickToObject,null,this);
			this.physics.add.collider(this.catPlayer,this.painting_5,this.StickToObject,null,this);
			this.physics.add.collider(this.catPlayer,this.painting_9,this.StickToObject,null,this);
			this.physics.add.collider(this.catPlayer,this.painting_19,this.StickToObject,null,this);
			this.physics.add.collider(this.catPlayer,this.painting_14,this.StickToObject,null,this);

			this.physics.add.collider(this.catPlayer,this.paintingcircle1,this.StickToObject,null,this);
			this.physics.add.collider(this.catPlayer,this.paintingcircle2,this.StickToObject,null,this);
			this.physics.add.collider(this.catPlayer,this.paintingcircle3,this.StickToObject,null,this);
			this.physics.add.collider(this.catPlayer,this.paintingcircle4,this.StickToObject,null,this);



	this.cameras.main.startFollow(this.catPlayer,false,0.2,0.2,0,210);

		this.wallpaper2.setPipeline('Light2D');
		this.greenfloor.setPipeline('Light2D'); 
		this.skirting1.setPipeline('Light2D');

		this.painting.setPipeline('Light2D');
		this.painting2.setPipeline('Light2D');


	//	this.largetable.setPipeline('Light2D');
		this.painting3.setPipeline('Light2D');
		this.paint3.setPipeline('Light2D');
		this.paint4.setPipeline('Light2D');
		this.painting4.setPipeline('Light2D');
		this.painting5.setPipeline('Light2D');
		this.painting7.setPipeline('Light2D');
		this.painting8.setPipeline('Light2D');
		this.painting9.setPipeline('Light2D');
		this.painting10.setPipeline('Light2D');
		this.painting12.setPipeline('Light2D');
		this.painting1.setPipeline('Light2D');
		this.painting11.setPipeline('Light2D');
			this.painting13.setPipeline('Light2D');

		this.painting_7.setPipeline('Light2D');
		this.painting_19.setPipeline('Light2D');
			this.painting_14.setPipeline('Light2D');


						this.paintingcircle1.setPipeline('Light2D');
						this.paintingcircle2.setPipeline('Light2D');
						this.paintingcircle3.setPipeline('Light2D');
						this.paintingcircle4.setPipeline('Light2D');

		this.plant1.setPipeline('Light2D');
		this.plant2.setPipeline('Light2D');

			this.shelfup3.setPipeline('Light2D');
			this.shelfup4.setPipeline('Light2D');
			this.shelfup_6.setPipeline('Light2D');

		//this.clock1.setPipeline('Light2D');

		this.windowstart.setPipeline('Light2D');
		//this.shelf2.setPipeline('Light2D');
		//this.shelf3.setPipeline('Light2D');
		this.smallchair.setPipeline('Light2D');
		//this.shelfup3.setPipeline('Light2D');

		this.lamp.setPipeline('Light2D');
		this.lamp1.setPipeline('Light2D');
		this.lamp3.setPipeline('Light2D');
		this.lamp5.setPipeline('Light2D');
		this.lamp6.setPipeline('Light2D');
		this.lamp7.setPipeline('Light2D');

			this.lamp_1.setPipeline('Light2D');
			this.lamp_2.setPipeline('Light2D');
			this.lamp_3.setPipeline('Light2D');

				this.plant_2.setPipeline('Light2D');
					this.plant_3.setPipeline('Light2D');

						this.plant.setPipeline('Light2D');



		this.green1.setPipeline('Light2D');

		this.ceiling.setPipeline('Light2D');
		this.ceiling1.setPipeline('Light2D');
		this.ceiling3.setPipeline('Light2D');
		this.ceiling4.setPipeline('Light2D');
		this.rugfloor.setPipeline('Light2D');
		this.shelves2.setPipeline('Light2D');
		this.shelfup1.setPipeline('Light2D');
		this.shelfup2.setPipeline('Light2D');

		this.shelfup.setPipeline('Light2D');

		this.shelfup_2.setPipeline('Light2D');
				this.shelfup_4.setPipeline('Light2D');
		//this.shelfup0.setPipeline('Light2D');
		//this.shelfup2.setPipeline('Light2D');
		this.shelfup10.setPipeline('Light2D');
		//this.shelfup20.setPipeline('Light2D');
		this.spiderroom.spider1.setPipeline('Light2D');
		this.spiderroom2.spider1.setPipeline('Light2D');
		//this.spiderroom3.spider1.setPipeline('Light2D');

		this.bat2.setPipeline('Light2D');
		this.shelfup_1.setPipeline('Light2D');
		this.bed1.setPipeline('Light2D');
		this.bed2.setPipeline('Light2D');
		this.bed3.setPipeline('Light2D');
		this.bed4.setPipeline('Light2D');

		//this.doginterior.dog.setPipeline('Light2D');

		//this.CreatePlatform(this.largetable);
		this.CreatePlatform(this.painting3);
		this.CreatePlatform(this.painting4);
		//this.CreatePlatform(this.shelf3);
	//	this.CreatePlatform(this.shelfup3);
		this.CreatePlatform(this.shelfup1);
		this.CreatePlatform(this.shelfup2);
		this.CreatePlatform(this.shelfup3);
		this.CreatePlatform(this.shelfup4);
		this.CreatePlatform(this.shelfup);
			this.CreatePlatform(this.shelfup_1);
0

		this.CreatePlatform(this.shelfup_6);
				this.CreatePlatform(this.shelfup_7);

		//this.CreatePlatform(this.clock1);

	//	this.CreatePlatform(this.shelfup0);

		this.CreatePlatform(this.shelfup10);
	//	this.CreatePlatform(this.shelfup20);

		//this.CreatePlatform(this.shelf2);
		this.CreatePlatform(this.ceiling);
		this.CreatePlatform(this.ceiling1);
		this.CreatePlatform(this.ceiling3);
		this.CreatePlatform(this.ceiling4);

		//this.CreatePlatform(this.clock1);

		this.CreatePlatform(this.smallchair);
		this.CreatePlatform(this.shelves2);
		this.CreatePlatform(this.shelfup_4);
				

		this.CreatePlatform(this.paint3);
		this.CreatePlatform(this.paint4);

		this.CheeseGroup.add(this.cheese);
		this.CheeseGroup.add(this.cheese1);
		this.CheeseGroup.add(this.cheese2);
	//	this.CheeseGroup.add(this.cheese3);
		this.CheeseGroup.add(this.cheese4);
	//	this.CheeseGroup.add(this.cheese5);
		this.CheeseGroup.add(this.cheese6);
		this.CheeseGroup.add(this.cheese7);
		this.CheeseGroup.add(this.cheese8);
		this.CheeseGroup.add(this.cheese9);





	}

		WaitAndMoveObjectY(Object,MinPoint,MaxPoint,Speed){

		console.log('Speed fr Y '+Speed);

		if(Object.y<MinPoint){

			Object.body.setVelocityY(0);
			//Speed=Speed*-1;	
			this.time.addEvent({ delay: 2000, callback:() => {
			Object.body.setVelocityY(Speed);

	}, callbackScope: this,repeat:0 });

		}
		else if(Object.y>MaxPoint){

			Object.body.setVelocityY(0);
			//Speed=Speed*-1;	
			this.time.addEvent({ delay: 2000, callback:() => {
			Object.body.setVelocityY(-Speed);

	}, callbackScope: this,repeat:0 });
		}
	}

	WaitAndMoveObject(Object,MinPoint,MaxPoint,Speed){

	//	console.log('Speed fr '+Speed);

		if(Object.x<MinPoint){

			Object.body.setVelocityX(0);
			//Speed=Speed*-1;	
			this.time.addEvent({ delay: 2000, callback:() => {
			Object.body.setVelocityX(-Speed);

	}, callbackScope: this,repeat:0 });

		}
		else if(Object.x>MaxPoint){

			Object.body.setVelocityX(0);
			//Speed=Speed*-1;	
			this.time.addEvent({ delay: 2000, callback:() => {
			Object.body.setVelocityX(Speed);

	}, callbackScope: this,repeat:0 });

		}


	}

	Shake(Item){

	 this.tweenStrain=this.tweens.add({
            targets: [Item],
			//x:"+=180",
			scale:0.2,
			 duration:50,
	//scale:{start: 0.1, to: 0.5 },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: 3,
        });


	};

	JumpUp(Cat,Bed){
console.log('juuuuuuuuuuuuuuuuuuuuuuump');
		if(Cat.body.touching.down && Bed.body.touching.up){

Cat.body.setVelocityY(-1800);

this.Shake(Bed);
		}





	}

	update(){

	if(this.catPlayer.stick==false)
	{
		this.catPlayer.x=this.WhichObjectHangOn.x;
		}
		if(this.catPlayer.stick==false && this.catPlayer.JumpVerticalPaint==false){
				this.catPlayer.y=this.WhichObjectHangOn.y+30;
		};

		//console.log('X pos table '+this.largetable.x);

		this.DropDownWhenjumpCatonObject(this.paint4);
		this.DropDownWhenjumpCatonObject(this.paint3);
		this.DropDownWhenjumpCatonObject(this.painting3);
		this.DropDownWhenjumpCatonObject(this.painting4);
		//this.DropDownWhenjumpCatonObject(this.painting7);

this.step=0.012;
	//Phaser.Math.RotateAroundDistance(this.paintingcircle1, this.shelfup_2.x,this.shelfup_2.y, this.step,300);
	//Phaser.Math.RotateAroundDistance(this.paintingcircle2, this.shelfup_2.x,this.shelfup_2.y, this.step,300);
	//Phaser.Math.RotateAroundDistance(this.paintingcircle3, this.shelfup_2.x,this.shelfup_2.y, this.step,300);
	//Phaser.Math.RotateAroundDistance(this.paintingcircle4, this.shelfup_2.x,this.shelfup_2.y, this.step,300);

		//this.WaitAndMoveObject(this.largetable,500,1000,-120);



		if(this.catPlayer.y<10 && this.catPlayer.y>-780){

			if(this.PanHeight<-1710){

				//	this.cameras.main.setBounds(0,this.PanHeight+=20,1400, 1650);
					}else if (this.PanHeight >=-1690){
				//	this.cameras.main.setBounds(0,this.PanHeight-=20,1400, 1650);
					}



		}
		else if(this.catPlayer.y>=-135)
			{
				//this.cameras.main.setBounds(0,this.PanHeight+=2,1400, 1650);

				if(this.PanHeight<-950){
				//this.cameras.main.setBounds(0,this.PanHeight+=20,1400, 1650);
				}
				else if(this.PanHeight>-950){
				//this.cameras.main.setBounds(0,this.PanHeight-=20,1400, 1650);
				}

			}

		else if(this.catPlayer.y<-780){


			if(this.PanHeight>=-2450){
		//	this.cameras.main.setBounds(0,this.PanHeight-=20,1400, 1650);
			}


			console.log('uppe floor');
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
