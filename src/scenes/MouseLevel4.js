
// You can write more code here
 var light1;
 var light2;
 var light3;
 var light4;
 var light7;
 var light8;
 var light5;
 var light9;
 var light10;
 var light11;
 var light12;
var light13;
var light14;
var light15;
var light16;
var light17;
var light18;

 var Mactive=false;
/* START OF COMPILED CODE */

class MouseLevel4 extends BaseScene {

	constructor() {
		super("MouseLevel4");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// green
		const green = this.physics.add.sprite(1123, 684, "pink_plain");
		green.scaleX = 50;
		green.scaleY = 0.08644173953713145;
		green.flipY = true;
		green.tintTopLeft = 3157036;
		green.tintTopRight = 6905181;
		green.tintBottomLeft = 8490033;
		green.body.setSize(128, 1382, false);

		// skirtinglight
		const skirtinglight = this.add.tileSprite(-63, 618, 35000, 63, "skirting_light");
		skirtinglight.scaleX = 0.2528690000816929;
		skirtinglight.scaleY = 0.2528690000816929;

		// red_large_stripe
		const red_large_stripe = this.add.tileSprite(855, 239, 5000, 1500, "pink_large_stripe");
		red_large_stripe.scaleX = 1.1681511551508954;
		red_large_stripe.scaleY = 0.504442248730607;
		red_large_stripe.tintTopLeft = 1118481;
		red_large_stripe.tintTopRight = 1972762;
		red_large_stripe.tintBottomLeft = 12827184;
		red_large_stripe.tintBottomRight = 13289929;
		red_large_stripe.tilePositionY = 600;
		red_large_stripe.tileScaleX = 0.08;
		red_large_stripe.tileScaleY = 0.8;

		// mouseholeleft1
		const mouseholeleft1 = this.physics.add.sprite(-1150, 626, "Mousehole");
		mouseholeleft1.scaleX = 0.47729317204100485;
		mouseholeleft1.scaleY = 0.47729317204100485;
		mouseholeleft1.body.setSize(112, 169, false);

		// pinkflock
		const pinkflock = this.add.tileSprite(793, -1011, 4000, 1377, "pink_flock");
		pinkflock.scaleX = 1.4349126570585933;
		pinkflock.scaleY = 1.281332528666491;
		pinkflock.tintTopLeft = 2631463;
		pinkflock.tintTopRight = 6707016;
		pinkflock.tintBottomLeft = 13224231;
		pinkflock.tintBottomRight = 11628214;
		pinkflock.tileScaleX = 0.2;
		pinkflock.tileScaleY = 0.2;

		// standlamp1
		const standlamp1 = this.physics.add.sprite(1363, 552, "lamp_02");
		standlamp1.scaleX = 0.2538704089686537;
		standlamp1.scaleY = 0.2538704089686537;
		standlamp1.body.checkCollision.down = false;
		standlamp1.body.checkCollision.left = false;
		standlamp1.body.checkCollision.right = false;
		standlamp1.body.pushable = false;
		standlamp1.body.immovable = true;
		standlamp1.body.setSize(297, 805, false);

		// littledrawer2
		const littledrawer2 = this.physics.add.sprite(2710, -200, "dark_five_draw");
		littledrawer2.scaleX = 0.23086753284500405;
		littledrawer2.scaleY = 0.23086753284500405;
		littledrawer2.body.setSize(677, 610, false);

		// darkshelve
		const darkshelve = this.physics.add.sprite(4312, -946, "dark_5_shelves");
		darkshelve.scaleX = 0.24592474127383523;
		darkshelve.scaleY = 0.24592474127383523;
		darkshelve.body.setSize(676, 1109, false);

		// darkdesklast2
		const darkdesklast2 = this.physics.add.sprite(-1338, -192, "dark_desk");
		darkdesklast2.scaleX = 0.20357764534866082;
		darkdesklast2.scaleY = 0.20357764534866082;
		darkdesklast2.body.setSize(1164, 572, false);

		// bottom
		const bottom = this.physics.add.sprite(852, 649, "block_separator_01");
		bottom.scaleX = 8.016925762653134;
		bottom.scaleY = -0.5941844224800856;
		bottom.visible = false;
		bottom.body.pushable = false;
		bottom.body.immovable = true;
		bottom.body.setSize(695, 40, false);

		// wardroberight
		const wardroberight = this.physics.add.sprite(5323, -453, "light_wardrobe");
		wardroberight.scaleX = 0.22548364423037004;
		wardroberight.scaleY = 0.22548364423037004;
		wardroberight.body.setSize(676, 1109, false);

		// shelf1
		const shelf1 = this.physics.add.sprite(412, 342, "light_wall_shelf");
		shelf1.scaleX = 0.13810902210740583;
		shelf1.scaleY = 0.13810902210740583;
		shelf1.body.setSize(1007, 85, false);

		// shelf2
		const shelf2 = this.physics.add.sprite(-104, 128, "light_wall_shelf");
		shelf2.scaleX = 0.13810902210740583;
		shelf2.scaleY = 0.13810902210740583;
		shelf2.body.setSize(1007, 85, false);

		// littledrawer3
		const littledrawer3 = this.physics.add.sprite(4223, -1451, "dark_five_draw");
		littledrawer3.scaleX = 0.2308675328449981;
		littledrawer3.scaleY = 0.2308675328449981;
		littledrawer3.tintTopLeft = 394758;
		littledrawer3.body.setSize(677, 610, false);

		// wardrobelight
		const wardrobelight = this.physics.add.sprite(2040, 1255, "light_wardrobe");
		wardrobelight.scaleX = 0.2410918677239261;
		wardrobelight.scaleY = 0.2410918677239261;
		wardrobelight.body.setSize(676, 1109, false);

		// mousehole_3
		const mousehole_3 = this.add.image(1666, 253, "Mousehole");
		mousehole_3.scaleX = 0.47729317204100485;
		mousehole_3.scaleY = 0.47729317204100485;

		// standlamp
		const standlamp = this.physics.add.sprite(4344, -1948, "lamp_02");
		standlamp.scaleX = 0.2811963789578223;
		standlamp.scaleY = 0.2811963789578223;
		standlamp.body.setSize(297, 805, false);

		// largeseat
		const largeseat = this.physics.add.sprite(499, -208, "brown_2_seat");
		largeseat.scaleX = 0.18848640328993424;
		largeseat.scaleY = 0.18848640328993424;
		largeseat.body.setSize(1570, 824, false);

		// ceiling
		const ceiling = this.add.tileSprite(707, -1880, 35000, 78, "skirting_light");
		ceiling.scaleX = 0.20762568400836606;
		ceiling.scaleY = 0.2723387119848415;

		// lampunder3
		const lampunder3 = this.add.nineslice(1977, 34, "lamp_21", undefined, 321, 1285, -3, 8, -9, 309);
		lampunder3.scaleX = 0.24396028965133165;
		lampunder3.scaleY = 0.24396028965133165;

		// rug
		const rug = this.add.image(441, 659, "rug_09");
		rug.scaleX = 0.22944260365890076;
		rug.scaleY = 0.08467994206924437;

		// chairmoveup1
		const chairmoveup1 = this.physics.add.sprite(-538, -212, "light_wood_chair_front");
		chairmoveup1.scaleX = 0.1784192401094674;
		chairmoveup1.scaleY = 0.1784192401094674;
		chairmoveup1.body.setSize(429, 843, false);

		// darkseat
		const darkseat = this.physics.add.sprite(1937, -200, "brown_1_seat");
		darkseat.scaleX = 0.17173750160984563;
		darkseat.scaleY = 0.17173750160984563;
		darkseat.body.setSize(1070, 858, false);

		// mousehole_4
		const mousehole_4 = this.add.image(2262, 281, "Mousehole");
		mousehole_4.scaleX = 0.47729317204100485;
		mousehole_4.scaleY = 0.47729317204100485;

		// ceiling2
		const ceiling2 = this.add.tileSprite(2586, -131, 13000, 78, "skirting_light");
		ceiling2.scaleX = 0.20762568400836606;
		ceiling2.scaleY = 0.2723387119848415;

		// windowopen1
		const windowopen1 = this.physics.add.sprite(-1592, 260, "window_06");
		windowopen1.scaleX = 0.22587207017263713;
		windowopen1.scaleY = 0.22587207017263713;
		windowopen1.body.setSize(495, 768, false);

		// littletable
		const littletable = this.physics.add.sprite(-1586, 605, "light_table_round");
		littletable.scaleX = 0.5549606181280825;
		littletable.scaleY = 0.5549606181280825;
		littletable.body.setOffset(0, 20);
		littletable.body.setSize(210, 200, false);

		// lamp1
		const lamp1 = this.add.nineslice(-381, -1704, "lamp_21", undefined, 321, 1327, -3, 8, -9, 309);
		lamp1.scaleX = 0.2510318662987691;
		lamp1.scaleY = 0.2510318662987691;

		// teletest
		const teletest = this.physics.add.sprite(-575, 462, "old_tele");
		teletest.scaleX = 0.25152676066171525;
		teletest.scaleY = 0.3022385724552991;
		teletest.visible = false;
		teletest.body.pushable = false;
		teletest.body.immovable = true;
		teletest.body.setSize(552, 572, false);

		// mousehole1
		const mousehole1 = this.physics.add.sprite(-137, 120, "Mousehole");
		mousehole1.scaleX = 0.47729317204100485;
		mousehole1.scaleY = 0.47729317204100485;
		mousehole1.body.setSize(112, 169, false);

		// can
		const can = this.physics.add.sprite(221, -124, "big_can_closed");
		can.scaleX = 0.28007944955382835;
		can.scaleY = 0.28007944955382835;
		can.visible = false;
		can.body.pushable = false;
		can.body.immovable = true;
		can.body.setSize(214, 299, false);

		// can1
		const can1 = this.physics.add.sprite(422, -136, "big_can_closed");
		can1.scaleX = 0.28007944955382835;
		can1.scaleY = 0.28007944955382835;
		can1.visible = false;
		can1.body.pushable = false;
		can1.body.immovable = true;
		can1.body.setSize(214, 299, false);

		// shelf
		const shelf = this.physics.add.sprite(-1586, 100, "light_wall_shelf");
		shelf.scaleX = 0.11;
		shelf.scaleY = 0.1;
		shelf.body.pushable = false;
		shelf.body.immovable = true;
		shelf.body.setSize(1007, 85, false);

		// littledrawer
		const littledrawer = this.physics.add.sprite(-568, 584, "dark_five_draw");
		littledrawer.scaleX = 0.2218662100496215;
		littledrawer.scaleY = 0.2218662100496215;
		littledrawer.body.setSize(677, 610, false);

		// tele1
		const tele1 = this.physics.add.sprite(-567, 464, "old_tele");
		tele1.scaleX = 0.20422243415545574;
		tele1.scaleY = 0.20422243415545574;
		tele1.body.checkCollision.down = false;
		tele1.body.checkCollision.left = false;
		tele1.body.checkCollision.right = false;
		tele1.body.pushable = false;
		tele1.body.immovable = true;
		tele1.body.setOffset(0, 170);
		tele1.body.setSize(552, 572, false);

		// hole
		const hole = this.add.ellipse(-2293, -1277, 128, 128);
		hole.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole.scaleX = 0.3992261285890466;
		hole.scaleY = 0.3992261285890466;
		hole.isFilled = true;
		hole.fillColor = 1117457;
		hole.isStroked = true;
		hole.strokeColor = 1511440;
		hole.strokeAlpha = 0.2;
		hole.lineWidth = 50;
		hole.smoothness = 100;

		// shelf4
		const shelf4 = this.physics.add.sprite(721, 179, "light_wall_shelf");
		shelf4.scaleX = 0.11;
		shelf4.scaleY = 0.1;
		shelf4.body.setSize(1007, 85, false);

		// lampunder1
		const lampunder1 = this.add.nineslice(-1004, -9, "lamp_21", undefined, 321, 979, -3, 8, -9, 309);
		lampunder1.scaleX = 0.24396028965133165;
		lampunder1.scaleY = 0.24396028965133165;

		// lampunder2
		const lampunder2 = this.add.nineslice(175, 52, "lamp_21", undefined, 321, 1516, -3, 8, -9, 309);
		lampunder2.scaleX = 0.24396028965133165;
		lampunder2.scaleY = 0.24396028965133165;

		// shelf5
		const shelf5 = this.physics.add.sprite(2235, 280, "light_wall_shelf");
		shelf5.scaleX = 0.11;
		shelf5.scaleY = 0.1;
		shelf5.body.setSize(1007, 85, false);

		// paintinggold
		const paintinggold = this.physics.add.sprite(4198, 269, "painting_01_gold");
		paintinggold.scaleX = 0.12211703448743766;
		paintinggold.scaleY = 0.12211703448743766;
		paintinggold.body.setSize(739, 504, false);

		// mousehole_6
		const mousehole_6 = this.add.image(2895, 164, "Mousehole");
		mousehole_6.scaleX = 0.47729317204100485;
		mousehole_6.scaleY = 0.47729317204100485;

		// mouse1
		const mouse1 = this.physics.add.sprite(-1164, 626, "__grey_mouse_walk_002");
		mouse1.scaleX = 0.12430823236229083;
		mouse1.scaleY = 0.12430823236229083;
		mouse1.flipX = true;
		mouse1.visible = false;
		mouse1.body.setSize(442, 292, false);

		// paintingbed
		const paintingbed = this.physics.add.sprite(2659, -1172, "painting_05_light");
		paintingbed.scaleX = 0.21512857091075668;
		paintingbed.scaleY = 0.21512857091075668;
		paintingbed.body.setSize(263, 320, false);

		// ceiling3
		const ceiling3 = this.add.tileSprite(-567, -131, 8000, 78, "skirting_light");
		ceiling3.scaleX = 0.4;
		ceiling3.scaleY = 0.2723387119848415;

		// mousehole2
		const mousehole2 = this.physics.add.sprite(712, 625, "Mousehole");
		mousehole2.scaleX = 0.47729317204100485;
		mousehole2.scaleY = 0.47729317204100485;
		mousehole2.body.setSize(112, 169, false);

		// stoneblock
		const stoneblock = this.physics.add.sprite(734, 156, "square_block_100_percent");
		stoneblock.scaleX = 0.11438191127615835;
		stoneblock.scaleY = 0.11438191127615835;
		stoneblock.setOrigin(0.5, 0.8);
		stoneblock.body.gravity.y = 1000;
		stoneblock.body.bounce.y = 0.3;
		stoneblock.body.collideWorldBounds = true;
		stoneblock.body.onWorldBounds = true;
		stoneblock.body.checkCollision.up = false;
		stoneblock.body.setOffset(0, 20);
		stoneblock.body.setSize(512, 512, false);

		// bat
		const bat = new Bat(this, 750, -807);
		this.add.existing(bat);
		bat.scaleX = 0.13901619757070885;
		bat.scaleY = 0.13901619757070885;
		bat.body.velocity.x = -200;
		bat.body.velocity.y = 0;
		bat.body.collideWorldBounds = true;

		// darkdesklast
		const darkdesklast = this.physics.add.sprite(2697, 606, "dark_desk");
		darkdesklast.scaleX = 0.20357764534866082;
		darkdesklast.scaleY = 0.20357764534866082;
		darkdesklast.body.setSize(1164, 572, false);

		// chairmove
		const chairmove = this.physics.add.sprite(246, 576, "light_wood_chair_front");
		chairmove.scaleX = 0.1920845304396787;
		chairmove.scaleY = 0.1920845304396787;
		chairmove.body.velocity.x = -150;
		chairmove.body.setSize(429, 843, false);

		// littleseat
		const littleseat = this.physics.add.sprite(-1140, 588, "brown_1_seat");
		littleseat.scaleX = 0.17891803113322646;
		littleseat.scaleY = 0.17891803113322646;
		littleseat.body.pushable = false;
		littleseat.body.immovable = true;
		littleseat.body.setSize(1070, 858, false);

		// painting2
		const painting2 = this.physics.add.sprite(-2855, -472, "painting_04_light");
		painting2.scaleX = 0.2005305148745834;
		painting2.scaleY = 0.2005305148745834;
		painting2.body.setSize(505, 357, false);

		// paintingcorner
		const paintingcorner = this.physics.add.sprite(2644, 118, "painting_05_dark");
		paintingcorner.scaleX = 0.23129998470216095;
		paintingcorner.scaleY = 0.23129998470216095;
		paintingcorner.body.pushable = false;
		paintingcorner.body.immovable = true;
		paintingcorner.body.setSize(263, 320, false);

		// dogInterior
		const dogInterior = new DogInterior(this, 479, 551);
		this.add.existing(dogInterior);
		dogInterior.scaleX = 0.8444776113424514;
		dogInterior.scaleY = 0.8444776113424514;
		dogInterior.visible = false;

		// spider3
		const spider3 = new Spider(this, 2423, -50);
		this.add.existing(spider3);
		spider3.scaleX = 0.22041154292377693;
		spider3.scaleY = 0.22041154292377693;

		// shelf10
		const shelf10 = this.physics.add.sprite(2873, 164, "light_wall_shelf");
		shelf10.scaleX = 0.1;
		shelf10.scaleY = 0.1;
		shelf10.body.setSize(1007, 85, false);

		// goup
		const goup = this.physics.add.sprite(4158, -494, "dark_wall_shelf");
		goup.scaleX = 0.12972471612832065;
		goup.scaleY = 0.0972178766252196;
		goup.body.setOffset(0, 50);
		goup.body.setSize(1081, 69, false);

		// lamp3
		const lamp3 = this.add.nineslice(2495, -1422, "lamp_21", undefined, 201, 5116, -2, 8, 8, 309);
		lamp3.scaleX = 0.3485332696441409;
		lamp3.scaleY = 0.22369647708307147;

		// bookcase2
		const bookcase2 = new BookCase(this, 4019, -383);
		this.add.existing(bookcase2);
		bookcase2.scaleX = 0.6382325177205668;
		bookcase2.scaleY = 0.6382325177205668;

		// hole_1
		const hole_1 = this.add.ellipse(-2220, -1026, 128, 128);
		hole_1.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole_1.scaleX = 0.3992261285890466;
		hole_1.scaleY = 0.3992261285890466;
		hole_1.isFilled = true;
		hole_1.fillColor = 1117457;
		hole_1.isStroked = true;
		hole_1.strokeColor = 1511440;
		hole_1.strokeAlpha = 0.2;
		hole_1.lineWidth = 50;
		hole_1.smoothness = 100;

		// light_2_shelves
		const light_2_shelves = this.add.image(4535, -541, "light_2_shelves");
		light_2_shelves.scaleX = 0.22814644008463836;
		light_2_shelves.scaleY = 0.22814644008463836;

		// hole_2
		const hole_2 = this.add.ellipse(-2186, -659, 128, 128);
		hole_2.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole_2.scaleX = 0.3992261285890466;
		hole_2.scaleY = 0.3992261285890466;
		hole_2.isFilled = true;
		hole_2.fillColor = 1117457;
		hole_2.isStroked = true;
		hole_2.strokeColor = 1511440;
		hole_2.strokeAlpha = 0.2;
		hole_2.lineWidth = 50;
		hole_2.smoothness = 100;

		// tele2
		const tele2 = this.physics.add.sprite(2696, 485, "old_tele");
		tele2.scaleX = 0.236468986212689;
		tele2.scaleY = 0.236468986212689;
		tele2.body.checkCollision.down = false;
		tele2.body.checkCollision.left = false;
		tele2.body.checkCollision.right = false;
		tele2.body.pushable = false;
		tele2.body.immovable = true;
		tele2.body.setOffset(0, 200);
		tele2.body.setSize(552, 572, false);

		// paintinglast
		const paintinglast = this.physics.add.sprite(-1308, 245, "painting_06_dark");
		paintinglast.scaleX = 0.1942303916759198;
		paintinglast.scaleY = 0.1942303916759198;
		paintinglast.body.pushable = false;
		paintinglast.body.immovable = true;
		paintinglast.body.setSize(454, 437, false);

		// tele4
		const tele4 = this.physics.add.sprite(2708, -325, "old_tele");
		tele4.scaleX = 0.21066421690236264;
		tele4.scaleY = 0.21066421690236264;
		tele4.body.checkCollision.down = false;
		tele4.body.checkCollision.left = false;
		tele4.body.checkCollision.right = false;
		tele4.body.pushable = false;
		tele4.body.immovable = true;
		tele4.body.setOffset(0, 200);
		tele4.body.setSize(552, 572, false);

		// mousehole_5
		const mousehole_5 = this.add.image(2097, 625, "Mousehole");
		mousehole_5.scaleX = 0.47729317204100485;
		mousehole_5.scaleY = 0.47729317204100485;

		// lampcol
		const lampcol = this.physics.add.sprite(-1002, 81, "painting_08_light");
		lampcol.scaleX = 0.1741200809409959;
		lampcol.scaleY = 0.1741200809409959;
		lampcol.visible = false;
		lampcol.body.pushable = false;
		lampcol.body.immovable = true;
		lampcol.body.setSize(454, 437, false);

		// plant
		const plant = this.physics.add.sprite(-2440, -27, "house_plant_example_05");
		plant.scaleX = 0.15376742608727642;
		plant.scaleY = 0.15376742608727642;
		plant.body.setSize(346, 539, false);

		// plant0
		const plant0 = this.physics.add.sprite(-1592, 51, "house_plant_example_05");
		plant0.scaleX = 0.15376742608727642;
		plant0.scaleY = 0.15376742608727642;
		plant0.body.gravity.y = 1000;
		plant0.body.bounce.y = 0.3;
		plant0.body.setSize(346, 539, false);

		// lampcol2
		const lampcol2 = this.physics.add.sprite(174, 207, "painting_08_light");
		lampcol2.scaleX = 0.1741200809409959;
		lampcol2.scaleY = 0.1741200809409959;
		lampcol2.visible = false;
		lampcol2.body.pushable = false;
		lampcol2.body.immovable = true;
		lampcol2.body.setSize(454, 437, false);

		// shelf6
		const shelf6 = this.physics.add.sprite(1647, 258, "light_wall_shelf");
		shelf6.scaleX = 0.11;
		shelf6.scaleY = 0.1;
		shelf6.body.setSize(1007, 85, false);

		// lampcol3
		const lampcol3 = this.physics.add.sprite(1977, 159, "painting_08_light");
		lampcol3.scaleX = 0.15237373040125876;
		lampcol3.scaleY = 0.15237373040125876;
		lampcol3.visible = false;
		lampcol3.body.pushable = false;
		lampcol3.body.immovable = true;
		lampcol3.body.setSize(454, 437, false);

		// cheeseimage
		const cheeseimage = this.add.image(2687, 507, "cheese");
		cheeseimage.scaleX = 0.25649868615033855;
		cheeseimage.scaleY = 0.25649868615033855;
		cheeseimage.visible = false;
		cheeseimage.alpha = 0.5;
		cheeseimage.alphaTopLeft = 0.5;
		cheeseimage.alphaTopRight = 0.5;
		cheeseimage.alphaBottomLeft = 0.5;
		cheeseimage.alphaBottomRight = 0.5;

		// mouse2
		const mouse2 = this.physics.add.sprite(-131, 111, "__grey_mouse_walk_002");
		mouse2.scaleX = 0.12430823236229083;
		mouse2.scaleY = 0.12430823236229083;
		mouse2.flipX = true;
		mouse2.body.setSize(442, 292, false);

		// shelfmouse1
		const shelfmouse1 = this.physics.add.sprite(1663, 237, "__grey_mouse_sniff_000");
		shelfmouse1.scaleX = 0.1353313832536673;
		shelfmouse1.scaleY = 0.1353313832536673;
		shelfmouse1.visible = false;
		shelfmouse1.body.setSize(442, 292, false);

		// shelfmouse2
		const shelfmouse2 = this.physics.add.sprite(2257, 259, "__grey_mouse_sniff_000");
		shelfmouse2.scaleX = 0.1353313832536673;
		shelfmouse2.scaleY = 0.1353313832536673;
		shelfmouse2.flipX = true;
		shelfmouse2.visible = false;
		shelfmouse2.body.setSize(442, 292, false);

		// shelfmouse4
		const shelfmouse4 = this.physics.add.sprite(2901, 144, "__grey_mouse_sniff_000");
		shelfmouse4.scaleX = 0.1353313832536673;
		shelfmouse4.scaleY = 0.1353313832536673;
		shelfmouse4.flipX = true;
		shelfmouse4.visible = false;
		shelfmouse4.body.setSize(442, 292, false);

		// shelfmouse0
		const shelfmouse0 = this.physics.add.sprite(2099, 635, "__grey_mouse_sniff_000");
		shelfmouse0.scaleX = 0.1353313832536673;
		shelfmouse0.scaleY = 0.1353313832536673;
		shelfmouse0.flipX = true;
		shelfmouse0.visible = false;
		shelfmouse0.body.allowGravity = false;
		shelfmouse0.body.setSize(442, 292, false);

		// stoneblock1
		const stoneblock1 = this.physics.add.sprite(1596, 256, "square_block_100_percent");
		stoneblock1.scaleX = 0.11438191127615835;
		stoneblock1.scaleY = 0.11438191127615835;
		stoneblock1.setOrigin(0.5, 0.8);
		stoneblock1.visible = false;
		stoneblock1.body.bounce.y = 0.3;
		stoneblock1.body.collideWorldBounds = true;
		stoneblock1.body.onWorldBounds = true;
		stoneblock1.body.checkCollision.up = false;
		stoneblock1.body.pushable = false;
		stoneblock1.body.immovable = true;
		stoneblock1.body.setOffset(0, 20);
		stoneblock1.body.setSize(512, 512, false);

		// stoneblock2
		const stoneblock2 = this.physics.add.sprite(1783, 254, "square_block_100_percent");
		stoneblock2.scaleX = 0.11438191127615835;
		stoneblock2.scaleY = 0.11438191127615835;
		stoneblock2.setOrigin(0.5, 0.8);
		stoneblock2.visible = false;
		stoneblock2.body.bounce.y = 0.3;
		stoneblock2.body.collideWorldBounds = true;
		stoneblock2.body.onWorldBounds = true;
		stoneblock2.body.checkCollision.up = false;
		stoneblock2.body.pushable = false;
		stoneblock2.body.immovable = true;
		stoneblock2.body.setOffset(0, 20);
		stoneblock2.body.setSize(512, 512, false);

		// stoneblock3
		const stoneblock3 = this.physics.add.sprite(2141.9483043428077, 268.7225780539638, "square_block_100_percent");
		stoneblock3.scaleX = 0.11438191127615835;
		stoneblock3.scaleY = 0.11438191127615835;
		stoneblock3.setOrigin(0.5, 0.8);
		stoneblock3.visible = false;
		stoneblock3.body.bounce.y = 0.3;
		stoneblock3.body.collideWorldBounds = true;
		stoneblock3.body.onWorldBounds = true;
		stoneblock3.body.checkCollision.up = false;
		stoneblock3.body.pushable = false;
		stoneblock3.body.immovable = true;
		stoneblock3.body.setOffset(0, 20);
		stoneblock3.body.setSize(512, 512, false);

		// stoneblock4
		const stoneblock4 = this.physics.add.sprite(2339, 269, "square_block_100_percent");
		stoneblock4.scaleX = 0.11438191127615835;
		stoneblock4.scaleY = 0.11438191127615835;
		stoneblock4.setOrigin(0.5, 0.8);
		stoneblock4.visible = false;
		stoneblock4.body.bounce.y = 0.3;
		stoneblock4.body.collideWorldBounds = true;
		stoneblock4.body.onWorldBounds = true;
		stoneblock4.body.checkCollision.up = false;
		stoneblock4.body.pushable = false;
		stoneblock4.body.immovable = true;
		stoneblock4.body.setOffset(0, 20);
		stoneblock4.body.setSize(512, 512, false);

		// stoneblock5
		const stoneblock5 = this.physics.add.sprite(2770, 152, "square_block_100_percent");
		stoneblock5.scaleX = 0.11438191127615835;
		stoneblock5.scaleY = 0.11438191127615835;
		stoneblock5.setOrigin(0.5, 0.8);
		stoneblock5.visible = false;
		stoneblock5.body.bounce.y = 0.3;
		stoneblock5.body.collideWorldBounds = true;
		stoneblock5.body.onWorldBounds = true;
		stoneblock5.body.checkCollision.up = false;
		stoneblock5.body.pushable = false;
		stoneblock5.body.immovable = true;
		stoneblock5.body.setOffset(0, 20);
		stoneblock5.body.setSize(512, 512, false);

		// holewall6
		const holewall6 = this.physics.add.sprite(480, -1592, "holewall");
		holewall6.scaleX = 0.04496323169203628;
		holewall6.scaleY = 0.04496323169203628;
		holewall6.alpha = 0.7;
		holewall6.alphaTopLeft = 0.7;
		holewall6.alphaTopRight = 0.7;
		holewall6.alphaBottomLeft = 0.7;
		holewall6.alphaBottomRight = 0.7;
		holewall6.body.setSize(1427, 1336, false);

		// stoneblock6
		const stoneblock6 = this.physics.add.sprite(2963, 152, "square_block_100_percent");
		stoneblock6.scaleX = 0.11438191127615835;
		stoneblock6.scaleY = 0.11438191127615835;
		stoneblock6.setOrigin(0.5, 0.8);
		stoneblock6.visible = false;
		stoneblock6.body.bounce.y = 0.3;
		stoneblock6.body.collideWorldBounds = true;
		stoneblock6.body.onWorldBounds = true;
		stoneblock6.body.checkCollision.up = false;
		stoneblock6.body.pushable = false;
		stoneblock6.body.immovable = true;
		stoneblock6.body.setOffset(0, 20);
		stoneblock6.body.setSize(512, 512, false);

		// stoneblock7
		const stoneblock7 = this.physics.add.sprite(1879, 619, "square_block_100_percent");
		stoneblock7.scaleX = 0.11438191127615835;
		stoneblock7.scaleY = 0.11438191127615835;
		stoneblock7.setOrigin(0.5, 0.8);
		stoneblock7.visible = false;
		stoneblock7.body.bounce.y = 0.3;
		stoneblock7.body.collideWorldBounds = true;
		stoneblock7.body.onWorldBounds = true;
		stoneblock7.body.checkCollision.up = false;
		stoneblock7.body.pushable = false;
		stoneblock7.body.immovable = true;
		stoneblock7.body.setOffset(0, 20);
		stoneblock7.body.setSize(512, 512, false);

		// holewall4
		const holewall4 = this.physics.add.sprite(-1057, -1635, "holewall");
		holewall4.scaleX = 0.04496323169203628;
		holewall4.scaleY = 0.04496323169203628;
		holewall4.alpha = 0.7;
		holewall4.alphaTopLeft = 0.7;
		holewall4.alphaTopRight = 0.7;
		holewall4.alphaBottomLeft = 0.7;
		holewall4.alphaBottomRight = 0.7;
		holewall4.body.setSize(1427, 1336, false);

		// stoneblock8
		const stoneblock8 = this.physics.add.sprite(2179, 617, "square_block_100_percent");
		stoneblock8.scaleX = 0.11438191127615835;
		stoneblock8.scaleY = 0.11438191127615835;
		stoneblock8.setOrigin(0.5, 0.8);
		stoneblock8.visible = false;
		stoneblock8.body.bounce.y = 0.3;
		stoneblock8.body.collideWorldBounds = true;
		stoneblock8.body.onWorldBounds = true;
		stoneblock8.body.checkCollision.up = false;
		stoneblock8.body.pushable = false;
		stoneblock8.body.immovable = true;
		stoneblock8.body.setOffset(0, 20);
		stoneblock8.body.setSize(512, 512, false);

		// holewall1
		const holewall1 = this.physics.add.sprite(-2802, -1385, "holewall");
		holewall1.scaleX = 0.05455703182612639;
		holewall1.scaleY = 0.05455703182612639;
		holewall1.tintTopLeft = 1446675;
		holewall1.body.setSize(1427, 1336, false);

		// painting
		const painting = this.physics.add.sprite(-1267, -980, "painting_05_gold");
		painting.scaleX = 0.2133169325715329;
		painting.scaleY = 0.2133169325715329;
		painting.body.setSize(263, 320, false);

		// holewall
		const holewall = this.physics.add.sprite(2187, -1647, "holewall");
		holewall.scaleX = 0.04496323169203628;
		holewall.scaleY = 0.04496323169203628;
		holewall.alpha = 0.7;
		holewall.alphaTopLeft = 0.7;
		holewall.alphaTopRight = 0.7;
		holewall.alphaBottomLeft = 0.7;
		holewall.alphaBottomRight = 0.7;
		holewall.body.setSize(1427, 1336, false);

		// holewall2
		const holewall2 = this.physics.add.sprite(-735, -1145, "holewall");
		holewall2.scaleX = 0.04496323169203628;
		holewall2.scaleY = 0.04496323169203628;
		holewall2.alpha = 0.7;
		holewall2.alphaTopLeft = 0.7;
		holewall2.alphaTopRight = 0.7;
		holewall2.alphaBottomLeft = 0.7;
		holewall2.alphaBottomRight = 0.7;
		holewall2.body.setSize(1427, 1336, false);

		// darkcounter
		const darkcounter = this.physics.add.sprite(-2387, -150, "dark_counter");
		darkcounter.scaleX = 0.24126340933988571;
		darkcounter.scaleY = 0.24126340933988571;
		darkcounter.body.setSize(908, 277, false);

		// tele3
		const tele3 = this.physics.add.sprite(-1338, -304, "old_tele");
		tele3.scaleX = 0.20997045758604713;
		tele3.scaleY = 0.20997045758604713;
		tele3.body.checkCollision.down = false;
		tele3.body.checkCollision.left = false;
		tele3.body.checkCollision.right = false;
		tele3.body.pushable = false;
		tele3.body.immovable = true;
		tele3.body.setOffset(0, 200);
		tele3.body.setSize(552, 572, false);

		// painting14
		const painting14 = this.physics.add.sprite(-1562, -649, "painting_02_light");
		painting14.scaleX = 0.16659708572049292;
		painting14.scaleY = 0.16659708572049292;
		painting14.body.setSize(363, 428, false);

		// paintingbed11
		const paintingbed11 = this.physics.add.sprite(949, -1240, "painting_05_light");
		paintingbed11.scaleX = 0.2147229697815083;
		paintingbed11.scaleY = 0.2147229697815083;
		paintingbed11.body.setSize(263, 320, false);

		// shelveup1
		const shelveup1 = this.physics.add.sprite(4496, -1123, "dark_wall_shelf");
		shelveup1.scaleX = 0.12972471612832065;
		shelveup1.scaleY = 0.09721787662522272;
		shelveup1.body.setOffset(0, 50);
		shelveup1.body.setSize(1081, 69, false);

		// shelveup5
		const shelveup5 = this.physics.add.sprite(1086, -1033, "dark_wall_shelf");
		shelveup5.scaleX = 0.12972471612832065;
		shelveup5.scaleY = 0.0972178766252196;
		shelveup5.body.setOffset(0, 50);
		shelveup5.body.setSize(1081, 69, false);

		// holewall5
		const holewall5 = this.physics.add.sprite(14, -1139, "holewall");
		holewall5.scaleX = 0.04496323169203628;
		holewall5.scaleY = 0.04496323169203628;
		holewall5.alpha = 0.7;
		holewall5.alphaTopLeft = 0.7;
		holewall5.alphaTopRight = 0.7;
		holewall5.alphaBottomLeft = 0.7;
		holewall5.alphaBottomRight = 0.7;
		holewall5.body.setSize(1427, 1336, false);

		// goup3
		const goup3 = this.physics.add.sprite(1987, -926, "dark_wall_shelf");
		goup3.scaleX = 0.12972471612832065;
		goup3.scaleY = 0.09721787662522272;
		goup3.body.setOffset(0, 50);
		goup3.body.setSize(1081, 69, false);

		// goup_4
		const goup_4 = this.physics.add.sprite(4172, -813, "dark_wall_shelf");
		goup_4.scaleX = 0.12972471612832065;
		goup_4.scaleY = 0.09721787662521653;
		goup_4.body.setOffset(0, 50);
		goup_4.body.setSize(1081, 69, false);

		// shelveup3
		const shelveup3 = this.physics.add.sprite(-261, -806, "dark_wall_shelf");
		shelveup3.scaleX = 0.12972471612832065;
		shelveup3.scaleY = 0.09721787662521653;
		shelveup3.body.setOffset(0, 50);
		shelveup3.body.setSize(1081, 69, false);

		// mousehole
		const mousehole = this.add.image(2873, -1045, "Mousehole");
		mousehole.scaleX = 0.47729317204100485;
		mousehole.scaleY = 0.47729317204100485;

		// shelf11
		const shelf11 = this.physics.add.sprite(2896, -1044, "light_wall_shelf");
		shelf11.scaleX = 0.11;
		shelf11.scaleY = 0.1;
		shelf11.body.setSize(1007, 85, false);

		// shelfmouse
		const shelfmouse = this.physics.add.sprite(2868, -1066, "__grey_mouse_sniff_000");
		shelfmouse.scaleX = 0.1353313832536673;
		shelfmouse.scaleY = 0.1353313832536673;
		shelfmouse.visible = false;
		shelfmouse.body.setSize(442, 292, false);

		// mousehole_1
		const mousehole_1 = this.add.image(1174, -1499, "Mousehole");
		mousehole_1.scaleX = 0.47729317204100485;
		mousehole_1.scaleY = 0.47729317204100485;

		// shelf7
		const shelf7 = this.physics.add.sprite(1197, -1498, "light_wall_shelf");
		shelf7.scaleX = 0.11;
		shelf7.scaleY = 0.1;
		shelf7.body.setSize(1007, 85, false);

		// shelfmouse_1
		const shelfmouse_1 = this.physics.add.sprite(1169, -1520, "__grey_mouse_sniff_000");
		shelfmouse_1.scaleX = 0.1353313832536673;
		shelfmouse_1.scaleY = 0.1353313832536673;
		shelfmouse_1.visible = false;
		shelfmouse_1.body.setSize(442, 292, false);

		// mousehole_2
		const mousehole_2 = this.add.image(-140, -1371, "Mousehole");
		mousehole_2.scaleX = 0.47729317204100485;
		mousehole_2.scaleY = 0.47729317204100485;

		// shelf3
		const shelf3 = this.physics.add.sprite(-117, -1370, "light_wall_shelf");
		shelf3.scaleX = 0.11;
		shelf3.scaleY = 0.1;
		shelf3.body.setSize(1007, 85, false);

		// mousehole_7
		const mousehole_7 = this.add.image(1925, -1341, "Mousehole");
		mousehole_7.scaleX = 0.47729317204100485;
		mousehole_7.scaleY = 0.47729317204100485;

		// shelf20
		const shelf20 = this.physics.add.sprite(1948, -1340, "light_wall_shelf");
		shelf20.scaleX = 0.11;
		shelf20.scaleY = 0.1;
		shelf20.body.setSize(1007, 85, false);

		// shelfmouse_3
		const shelfmouse_3 = this.physics.add.sprite(1920, -1362, "__grey_mouse_sniff_000");
		shelfmouse_3.scaleX = 0.1353313832536673;
		shelfmouse_3.scaleY = 0.1353313832536673;
		shelfmouse_3.visible = false;
		shelfmouse_3.body.setSize(442, 292, false);

		// shelveup4
		const shelveup4 = this.physics.add.sprite(3055, -2299, "shelf");
		shelveup4.scaleX = 0.3631342404189578;
		shelveup4.scaleY = 0.23526102995133868;
		shelveup4.body.setOffset(0, 50);
		shelveup4.body.setSize(300, 69, false);

		// shelveup2
		const shelveup2 = this.physics.add.sprite(5046, -1020, "dark_wall_shelf");
		shelveup2.scaleX = 0.12972471612832065;
		shelveup2.scaleY = 0.09721787662522272;
		shelveup2.body.setOffset(0, 50);
		shelveup2.body.setSize(1081, 69, false);

		// mousehole_8
		const mousehole_8 = this.add.image(-1280, -1318, "Mousehole");
		mousehole_8.scaleX = 0.47729317204100485;
		mousehole_8.scaleY = 0.47729317204100485;

		// shelf15
		const shelf15 = this.physics.add.sprite(-1257, -1317, "light_wall_shelf");
		shelf15.scaleX = 0.11;
		shelf15.scaleY = 0.1;
		shelf15.body.setSize(1007, 85, false);

		// shelfmouse_4
		const shelfmouse_4 = this.physics.add.sprite(-1285, -1339, "__grey_mouse_sniff_000");
		shelfmouse_4.scaleX = 0.1353313832536673;
		shelfmouse_4.scaleY = 0.1353313832536673;
		shelfmouse_4.visible = false;
		shelfmouse_4.body.setSize(442, 292, false);

		// painting4
		const painting4 = this.physics.add.sprite(484, -1591, "painting_02_dark");
		painting4.scaleX = 0.15246126600817267;
		painting4.scaleY = 0.15246126600817267;
		painting4.body.setSize(454, 437, false);

		// paintingbed3
		const paintingbed3 = this.physics.add.sprite(3013, -485, "painting_06_white");
		paintingbed3.scaleX = 0.18768852077877635;
		paintingbed3.scaleY = 0.18768852077877635;
		paintingbed3.body.setSize(263, 320, false);

		// paintinggold_1
		const paintinggold_1 = this.physics.add.sprite(-2447, -708, "painting_01_gold");
		paintinggold_1.scaleX = 0.12736896607319903;
		paintinggold_1.scaleY = 0.12736896607319903;
		paintinggold_1.body.setSize(739, 504, false);

		// paintingbed6
		const paintingbed6 = this.physics.add.sprite(1542, -1587, "painting_08_dark");
		paintingbed6.scaleX = 0.1388134396129578;
		paintingbed6.scaleY = 0.1388134396129578;
		paintingbed6.body.setSize(454, 437, false);

		// paintinggold1
		const paintinggold1 = this.physics.add.sprite(3999, -604, "painting_01_gold");
		paintinggold1.scaleX = 0.12736896607319903;
		paintinggold1.scaleY = 0.12736896607319903;
		paintinggold1.body.setSize(739, 504, false);

		// shelveup7
		const shelveup7 = this.physics.add.sprite(3750, -2328, "shelf");
		shelveup7.scaleX = 0.3631342404189578;
		shelveup7.scaleY = 0.23526102995133868;
		shelveup7.body.setOffset(0, 50);
		shelveup7.body.setSize(300, 69, false);

		// shelveup6
		const shelveup6 = this.physics.add.sprite(2413, -2276, "shelf");
		shelveup6.scaleX = 0.3631342404189578;
		shelveup6.scaleY = 0.23526102995133868;
		shelveup6.body.setOffset(0, 50);
		shelveup6.body.setSize(300, 69, false);

		// paintingbed7
		const paintingbed7 = this.physics.add.sprite(4036, -1328, "painting_02_light");
		paintingbed7.scaleX = 0.158498893716259;
		paintingbed7.scaleY = 0.158498893716259;
		paintingbed7.body.setSize(363, 428, false);

		// paintingbed5
		const paintingbed5 = this.physics.add.sprite(731, -636, "painting_07_dark");
		paintingbed5.scaleX = 0.19605395556169766;
		paintingbed5.scaleY = 0.19605395556169766;
		paintingbed5.body.setSize(263, 320, false);

		// ghost5
		const ghost5 = new Ghost(this, -452, 113);
		this.add.existing(ghost5);
		ghost5.scaleX = 0.4562700585121875;
		ghost5.scaleY = 0.4562700585121875;
		ghost5.alpha = 0.5;
		ghost5.body.collideWorldBounds = true;

		// ghost1
		const ghost1 = new Ghost(this, -772, -647);
		this.add.existing(ghost1);
		ghost1.scaleX = 0.5001093043022603;
		ghost1.scaleY = 0.5001093043022603;
		ghost1.alpha = 0.5;
		ghost1.body.collideWorldBounds = true;

		// ghost2
		const ghost2 = new Ghost(this, 1264, -417);
		this.add.existing(ghost2);
		ghost2.scaleX = 0.41001383336718555;
		ghost2.scaleY = 0.41001383336718555;
		ghost2.alpha = 0.5;
		ghost2.body.collideWorldBounds = true;

		// ghost3
		const ghost3 = new Ghost(this, 2952, 553);
		this.add.existing(ghost3);
		ghost3.scaleX = 0.4562700585121875;
		ghost3.scaleY = 0.4562700585121875;
		ghost3.alpha = 0.5;
		ghost3.body.collideWorldBounds = true;

		// ghost4
		const ghost4 = new Ghost(this, -192, -1184);
		this.add.existing(ghost4);
		ghost4.scaleX = 0.5013159128940227;
		ghost4.scaleY = 0.5013159128940227;
		ghost4.alpha = 0.5;
		ghost4.body.collideWorldBounds = true;

		// ghost
		const ghost = new Ghost(this, 1093, -1602);
		this.add.existing(ghost);
		ghost.scaleX = 0.5013159128940227;
		ghost.scaleY = 0.5013159128940227;
		ghost.alpha = 0.5;
		ghost.body.collideWorldBounds = true;

		// lamp
		const lamp = this.add.nineslice(-928, -1327, "lamp_21", undefined, 236, 4000, -2, 8, 8, 309);
		lamp.scaleX = 0.3471599274848083;
		lamp.scaleY = 0.2491767374337359;

		// plant4
		const plant4 = this.physics.add.sprite(1068, -1078, "house_plant_example_12");
		plant4.scaleX = 0.10965972655472245;
		plant4.scaleY = 0.10965972655472245;
		plant4.body.bounce.y = 0.3;
		plant4.body.checkCollision.up = false;
		plant4.body.setSize(300, 755, false);

		// plant6
		const plant6 = this.physics.add.sprite(-262, -838, "house_plant_example_14");
		plant6.scaleX = 0.14360666621789864;
		plant6.scaleY = 0.14360666621789864;
		plant6.body.bounce.y = 0.3;
		plant6.body.checkCollision.up = false;
		plant6.body.setSize(200, 410, false);

		// plant1
		const plant1 = this.physics.add.sprite(1989, -966, "house_plant_example_04");
		plant1.scaleX = 0.2028750563039166;
		plant1.scaleY = 0.2028750563039166;
		plant1.body.setSize(226, 372, false);

		// catPlayer
		const catPlayer = new CatPlayer(this, -847, -281);
		this.add.existing(catPlayer);
		catPlayer.scaleX = 0.1566678798725213;
		catPlayer.scaleY = 0.1566678798725213;
		catPlayer.body.maxAngular = 2000;
		catPlayer.body.collideWorldBounds = true;

		// holewall3
		const holewall3 = this.physics.add.sprite(-56, -517, "holewall");
		holewall3.scaleX = 0.04496323169203628;
		holewall3.scaleY = 0.04496323169203628;
		holewall3.alpha = 0.7;
		holewall3.alphaTopLeft = 0.7;
		holewall3.alphaTopRight = 0.7;
		holewall3.alphaBottomLeft = 0.7;
		holewall3.alphaBottomRight = 0.7;
		holewall3.body.setSize(1427, 1336, false);

		// lamp2
		const lamp2 = this.add.nineslice(246, -1243, "lamp_21", undefined, 236, 5051, -2, 8, 8, 309);
		lamp2.scaleX = 0.3471599274848083;
		lamp2.scaleY = 0.2491767374337359;

		// lamp4
		const lamp4 = this.add.nineslice(1412, -1422, "lamp_21", undefined, 236, 4000, -2, 8, 8, 309);
		lamp4.scaleX = 0.3471599274848083;
		lamp4.scaleY = 0.2491767374337359;

		// paintingbed19
		const paintingbed19 = this.physics.add.sprite(4535, -1620, "painting_07_light");
		paintingbed19.scaleX = 0.19324572166042103;
		paintingbed19.scaleY = 0.19324572166042103;
		paintingbed19.body.setSize(363, 428, false);

		// mousehole_9
		const mousehole_9 = this.add.image(2834, -1600, "Mousehole");
		mousehole_9.scaleX = 0.47729317204100485;
		mousehole_9.scaleY = 0.47729317204100485;

		// shelf21
		const shelf21 = this.physics.add.sprite(2857, -1599, "light_wall_shelf");
		shelf21.scaleX = 0.11;
		shelf21.scaleY = 0.1;
		shelf21.body.setSize(1007, 85, false);

		// shelfmouse_5
		const shelfmouse_5 = this.physics.add.sprite(2829, -1621, "__grey_mouse_sniff_000");
		shelfmouse_5.scaleX = 0.1353313832536673;
		shelfmouse_5.scaleY = 0.1353313832536673;
		shelfmouse_5.visible = false;
		shelfmouse_5.body.setSize(442, 292, false);

		// redstripeabove
		const redstripeabove = this.add.image(502, -1921, "pink_plain");
		redstripeabove.scaleX = 0.6153678486624686;
		redstripeabove.scaleY = 5.132801232728735;
		redstripeabove.angle = 90;
		redstripeabove.tintTopRight = 2500134;
		redstripeabove.tintBottomRight = 1315603;

		// lampunder4
		const lampunder4 = this.add.nineslice(-1544, -1595, "lamp_21", undefined, 321, 4205, -3, 8, -9, 309);
		lampunder4.scaleX = 0.24396028965133165;
		lampunder4.scaleY = 0.24396028965133165;

		// rectangle1
		const rectangle1 = this.add.rectangle(817, -632, 128, 128);
		rectangle1.scaleX = 60.198912898620335;
		rectangle1.scaleY = 23.43431116049416;
		rectangle1.visible = false;
		rectangle1.alpha = 0.15;
		rectangle1.isFilled = true;
		rectangle1.fillColor = 9458832;

		// saturateFx
		const saturateFx = rectangle1.postFX.addColorMatrix();
		saturateFx.saturate(1);

		// lamp_1
		const lamp_1 = this.add.nineslice(1929.9236436750577, -1775.9723666540963, "lamp_21", undefined, 321, 1327, -3, 8, -9, 309);
		lamp_1.scaleX = 0.2510318662987691;
		lamp_1.scaleY = 0.2510318662987691;

		// lampcolup3
		const lampcolup3 = this.physics.add.sprite(1926.9236436750577, -1648.9723666540963, "painting_08_dark");
		lampcolup3.scaleX = 0.14216495210450494;
		lampcolup3.scaleY = 0.14216495210450494;
		lampcolup3.visible = false;
		lampcolup3.body.setSize(454, 437, false);

		// lamp_2
		const lamp_2 = this.add.nineslice(3026, -1614, "lamp_21", undefined, 321, 2340, -3, 8, -9, 309);
		lamp_2.scaleX = 0.2510318662987691;
		lamp_2.scaleY = 0.2510318662987691;

		// lampcolup4
		const lampcolup4 = this.physics.add.sprite(3025, -1352, "painting_08_dark");
		lampcolup4.scaleX = 0.14216495210450494;
		lampcolup4.scaleY = 0.14216495210450494;
		lampcolup4.visible = false;
		lampcolup4.body.setSize(454, 437, false);

		// bat2
		const bat2 = new Bat(this, 2260, -1388);
		this.add.existing(bat2);
		bat2.scaleX = 0.13901619757070885;
		bat2.scaleY = 0.13901619757070885;
		bat2.body.velocity.x = -200;
		bat2.body.velocity.y = 0;
		bat2.body.collideWorldBounds = true;

		// lamp_3
		const lamp_3 = this.add.nineslice(800, -1707, "lamp_21", undefined, 321, 1327, -3, 8, -9, 309);
		lamp_3.scaleX = 0.2510318662987691;
		lamp_3.scaleY = 0.2510318662987691;

		// lampcolup6
		const lampcolup6 = this.physics.add.sprite(797, -1580, "painting_08_dark");
		lampcolup6.scaleX = 0.14216495210450494;
		lampcolup6.scaleY = 0.14216495210450494;
		lampcolup6.visible = false;
		lampcolup6.body.setSize(454, 437, false);

		// text1
		const text1 = this.add.text(1359, -343, "", {});
		text1.scaleX = 1.1928266906885048;
		text1.scaleY = 1.1928266906885048;
		text1.angle = -17;
		text1.alpha = 0.6;
		text1.alphaTopLeft = 0.6;
		text1.alphaTopRight = 0.6;
		text1.alphaBottomLeft = 0.6;
		text1.alphaBottomRight = 0.6;
		text1.text = "Come out...and play";
		text1.setStyle({ "fontFamily": "Goofy", "fontSize": "40px" });

		// paintingfallup1
		const paintingfallup1 = new fallpainting(this, 2364, -391);
		this.add.existing(paintingfallup1);

		// fallpainting2
		const fallpainting2 = new fallpainting(this, -863, 331);
		this.add.existing(fallpainting2);
		fallpainting2.scaleX = 1.4551427350570398;
		fallpainting2.scaleY = 1.4551427350570398;

		// fallpainting3
		const fallpainting3 = new fallpainting(this, -338, 253);
		this.add.existing(fallpainting3);
		fallpainting3.scaleX = 0.9814613385932266;
		fallpainting3.scaleY = 0.9814613385932266;

		// ceilingdropdown
		const ceilingdropdown = this.physics.add.sprite(1135, -131, "light_wall_shelf");
		ceilingdropdown.scaleX = 0.2066314242890667;
		ceilingdropdown.scaleY = 0.16428674310597288;
		ceilingdropdown.body.setSize(1020, 98, false);

		// mouseUpL2
		const mouseUpL2 = this.physics.add.sprite(-1054, -1638, "__grey_mouse_sniff_000");
		mouseUpL2.scaleX = 0.1353313832536673;
		mouseUpL2.scaleY = 0.1353313832536673;
		mouseUpL2.visible = false;
		mouseUpL2.body.setSize(442, 292, false);

		// mouseUpL3
		const mouseUpL3 = this.physics.add.sprite(-740, -1150, "__grey_mouse_sniff_000");
		mouseUpL3.scaleX = 0.1353313832536673;
		mouseUpL3.scaleY = 0.1353313832536673;
		mouseUpL3.visible = false;
		mouseUpL3.body.setSize(442, 292, false);

		// mouseUpL5
		const mouseUpL5 = this.physics.add.sprite(-55, -521, "__grey_mouse_sniff_000");
		mouseUpL5.scaleX = 0.1353313832536673;
		mouseUpL5.scaleY = 0.1353313832536673;
		mouseUpL5.visible = false;
		mouseUpL5.body.setSize(442, 292, false);

		// mouseLUpL6
		const mouseLUpL6 = this.physics.add.sprite(15, -1134, "__grey_mouse_sniff_000");
		mouseLUpL6.scaleX = 0.1353313832536673;
		mouseLUpL6.scaleY = 0.1353313832536673;
		mouseLUpL6.visible = false;
		mouseLUpL6.body.setSize(442, 292, false);

		// mouseUpL1
		const mouseUpL1 = this.physics.add.sprite(-1271, -1338, "__grey_mouse_sniff_000");
		mouseUpL1.scaleX = 0.1353313832536673;
		mouseUpL1.scaleY = 0.1353313832536673;
		mouseUpL1.visible = false;
		mouseUpL1.body.setSize(442, 292, false);

		// shelfmouse_11
		const shelfmouse_11 = this.physics.add.sprite(1918, -1360, "__grey_mouse_sniff_000");
		shelfmouse_11.scaleX = 0.1353313832536673;
		shelfmouse_11.scaleY = 0.1353313832536673;
		shelfmouse_11.body.setSize(442, 292, false);

		// shelfmouse_12
		const shelfmouse_12 = this.physics.add.sprite(2877, -1067, "__grey_mouse_sniff_000");
		shelfmouse_12.scaleX = 0.1353313832536673;
		shelfmouse_12.scaleY = 0.1353313832536673;
		shelfmouse_12.body.setSize(442, 292, false);

		// shelfmouse_13
		const shelfmouse_13 = this.physics.add.sprite(2856, -1619, "__grey_mouse_sniff_000");
		shelfmouse_13.scaleX = 0.1353313832536673;
		shelfmouse_13.scaleY = 0.1353313832536673;
		shelfmouse_13.body.setSize(442, 292, false);

		// shelfmouse_14
		const shelfmouse_14 = this.physics.add.sprite(1185, -1520, "__grey_mouse_sniff_000");
		shelfmouse_14.scaleX = 0.1353313832536673;
		shelfmouse_14.scaleY = 0.1353313832536673;
		shelfmouse_14.body.setSize(442, 292, false);

		// mouseUpL4
		const mouseUpL4 = this.physics.add.sprite(-129, -1391, "__grey_mouse_sniff_000");
		mouseUpL4.scaleX = 0.1353313832536673;
		mouseUpL4.scaleY = 0.1353313832536673;
		mouseUpL4.visible = false;
		mouseUpL4.body.setSize(442, 292, false);

		// shelfmouse_16
		const shelfmouse_16 = this.physics.add.sprite(2185, -1639, "__grey_mouse_sniff_000");
		shelfmouse_16.scaleX = 0.1353313832536673;
		shelfmouse_16.scaleY = 0.1353313832536673;
		shelfmouse_16.body.setSize(442, 292, false);

		// paintinglamp
		const paintinglamp = this.physics.add.sprite(-929, -845, "painting_02_gold");
		paintinglamp.scaleX = 0.1554213073600976;
		paintinglamp.scaleY = 0.1554213073600976;
		paintinglamp.visible = false;
		paintinglamp.body.pushable = false;
		paintinglamp.body.immovable = true;
		paintinglamp.body.setSize(363, 428, false);

		// paintinglamp1
		const paintinglamp1 = this.physics.add.sprite(245, -648, "painting_02_gold");
		paintinglamp1.scaleX = 0.1554213073600976;
		paintinglamp1.scaleY = 0.1554213073600976;
		paintinglamp1.visible = false;
		paintinglamp1.body.pushable = false;
		paintinglamp1.body.immovable = true;
		paintinglamp1.body.setSize(363, 428, false);

		// paintingbed12
		const paintingbed12 = this.physics.add.sprite(-738, -1145, "painting_06_white");
		paintingbed12.scaleX = 0.20987729930743446;
		paintingbed12.scaleY = 0.20987729930743446;
		paintingbed12.body.setSize(263, 320, false);

		// paintingbed15
		const paintingbed15 = this.physics.add.sprite(-55, -521, "painting_06_white");
		paintingbed15.scaleX = 0.18994883680356134;
		paintingbed15.scaleY = 0.18994883680356134;
		paintingbed15.body.setSize(263, 320, false);

		// paintingbed18
		const paintingbed18 = this.physics.add.sprite(2761, -648, "painting_05_light");
		paintingbed18.scaleX = 0.20204860313647838;
		paintingbed18.scaleY = 0.20204860313647838;
		paintingbed18.body.setSize(263, 320, false);

		// paintingbed2
		const paintingbed2 = this.physics.add.sprite(927, -417, "painting_05_light");
		paintingbed2.scaleX = 0.20204860313647838;
		paintingbed2.scaleY = 0.20204860313647838;
		paintingbed2.body.setSize(263, 320, false);

		// paintingbed1
		const paintingbed1 = this.physics.add.sprite(1138, -795, "painting_07_light");
		paintingbed1.scaleX = 0.21099585022115958;
		paintingbed1.scaleY = 0.21099585022115958;
		paintingbed1.body.setSize(263, 320, false);

		// paintingbed4
		const paintingbed4 = this.physics.add.sprite(2012, 886, "painting_07_gold");
		paintingbed4.scaleX = 0.18851794114959292;
		paintingbed4.scaleY = 0.18851794114959292;
		paintingbed4.body.setSize(363, 428, false);

		// paintingbed14
		const paintingbed14 = this.physics.add.sprite(4402, -1193, "painting_07_gold");
		paintingbed14.scaleX = 0.20122876772591167;
		paintingbed14.scaleY = 0.20122876772591167;
		paintingbed14.body.setSize(263, 320, false);

		// painting12
		const painting12 = this.physics.add.sprite(15, -1139, "painting_02_gold");
		painting12.scaleX = 0.15330555194374954;
		painting12.scaleY = 0.15330555194374954;
		painting12.body.setSize(363, 428, false);

		// paintingbed13
		const paintingbed13 = this.physics.add.sprite(2210, -761, "painting_06_white");
		paintingbed13.scaleX = 0.1878428280958485;
		paintingbed13.scaleY = 0.1878428280958485;
		paintingbed13.body.setSize(263, 320, false);

		// paintingbed10
		const paintingbed10 = this.physics.add.sprite(2189, -1644, "painting_06_white");
		paintingbed10.scaleX = 0.19043972978808998;
		paintingbed10.scaleY = 0.19043972978808998;
		paintingbed10.body.setSize(263, 320, false);

		// paintingbed9
		const paintingbed9 = this.physics.add.sprite(-1044, -516, "painting_05_light");
		paintingbed9.scaleX = 0.1935180504321918;
		paintingbed9.scaleY = 0.1935180504321918;
		paintingbed9.body.setSize(263, 320, false);

		// painting13
		const painting13 = this.physics.add.sprite(-576, -821, "painting_02_gold");
		painting13.scaleX = 0.1554213073600976;
		painting13.scaleY = 0.1554213073600976;
		painting13.body.setSize(363, 428, false);

		// painting8
		const painting8 = this.physics.add.sprite(-1054, -1636, "painting_08_dark");
		painting8.scaleX = 0.13475044969947952;
		painting8.scaleY = 0.13475044969947952;
		painting8.body.setSize(454, 437, false);

		// painting1
		const painting1 = this.physics.add.sprite(414, -956, "painting_08_dark");
		painting1.scaleX = 0.1242342858573175;
		painting1.scaleY = 0.1242342858573175;
		painting1.body.setSize(454, 437, false);

		// paintingbed16
		const paintingbed16 = this.physics.add.sprite(1778, -553, "painting_02_gold");
		paintingbed16.scaleX = 0.19299588696761777;
		paintingbed16.scaleY = 0.19299588696761777;
		paintingbed16.body.setSize(263, 320, false);

		// paintingbed17
		const paintingbed17 = this.physics.add.sprite(1891, -1175, "painting_07_light");
		paintingbed17.scaleX = 0.1911269600281577;
		paintingbed17.scaleY = 0.1911269600281577;
		paintingbed17.body.pushable = false;
		paintingbed17.body.immovable = true;
		paintingbed17.body.setSize(363, 428, false);

		// lampcol4
		const lampcol4 = this.physics.add.sprite(1408, -951, "painting_08_light");
		lampcol4.scaleX = 0.1741200809409959;
		lampcol4.scaleY = 0.1741200809409959;
		lampcol4.visible = false;
		lampcol4.body.pushable = false;
		lampcol4.body.immovable = true;
		lampcol4.body.setSize(454, 437, false);

		// lampcol5
		const lampcol5 = this.physics.add.sprite(2497, -873, "painting_08_light");
		lampcol5.scaleX = 0.15624937305875716;
		lampcol5.scaleY = 0.15248198704285967;
		lampcol5.visible = false;
		lampcol5.body.pushable = false;
		lampcol5.body.immovable = true;
		lampcol5.body.setSize(454, 437, false);

		// collampup1
		const collampup1 = this.physics.add.sprite(-1537, -1108, "painting_02_gold");
		collampup1.scaleX = 0.1554213073600976;
		collampup1.scaleY = 0.1554213073600976;
		collampup1.visible = false;
		collampup1.body.pushable = false;
		collampup1.body.immovable = true;
		collampup1.body.setSize(363, 428, false);

		// lampcolup2
		const lampcolup2 = this.physics.add.sprite(-384, -1577, "painting_08_dark");
		lampcolup2.scaleX = 0.14216495210450494;
		lampcolup2.scaleY = 0.14216495210450494;
		lampcolup2.visible = false;
		lampcolup2.body.setSize(454, 437, false);

		// stoneblock10
		const stoneblock10 = this.physics.add.sprite(-1134, -1327, "square_block_100_percent");
		stoneblock10.scaleX = 0.11438191127615835;
		stoneblock10.scaleY = 0.11438191127615835;
		stoneblock10.setOrigin(0.5, 0.8);
		stoneblock10.body.bounce.y = 0.3;
		stoneblock10.body.collideWorldBounds = true;
		stoneblock10.body.onWorldBounds = true;
		stoneblock10.body.checkCollision.up = false;
		stoneblock10.body.pushable = false;
		stoneblock10.body.immovable = true;
		stoneblock10.body.setOffset(0, 20);
		stoneblock10.body.setSize(512, 512, false);

		// stoneblock9
		const stoneblock9 = this.physics.add.sprite(-1372, -1323, "square_block_100_percent");
		stoneblock9.scaleX = 0.11438191127615835;
		stoneblock9.scaleY = 0.11438191127615835;
		stoneblock9.setOrigin(0.5, 0.8);
		stoneblock9.body.bounce.y = 0.3;
		stoneblock9.body.collideWorldBounds = true;
		stoneblock9.body.onWorldBounds = true;
		stoneblock9.body.checkCollision.up = false;
		stoneblock9.body.pushable = false;
		stoneblock9.body.immovable = true;
		stoneblock9.body.setOffset(0, 20);
		stoneblock9.body.setSize(512, 512, false);

		// stoneblock11
		const stoneblock11 = this.physics.add.sprite(-231, -1380, "square_block_100_percent");
		stoneblock11.scaleX = 0.11438191127615835;
		stoneblock11.scaleY = 0.11438191127615835;
		stoneblock11.setOrigin(0.5, 0.8);
		stoneblock11.body.bounce.y = 0.3;
		stoneblock11.body.collideWorldBounds = true;
		stoneblock11.body.onWorldBounds = true;
		stoneblock11.body.checkCollision.up = false;
		stoneblock11.body.pushable = false;
		stoneblock11.body.immovable = true;
		stoneblock11.body.setOffset(0, 20);
		stoneblock11.body.setSize(512, 512, false);

		// stoneblock12
		const stoneblock12 = this.physics.add.sprite(-5, -1373, "square_block_100_percent");
		stoneblock12.scaleX = 0.11438191127615835;
		stoneblock12.scaleY = 0.11438191127615835;
		stoneblock12.setOrigin(0.5, 0.8);
		stoneblock12.body.bounce.y = 0.3;
		stoneblock12.body.collideWorldBounds = true;
		stoneblock12.body.onWorldBounds = true;
		stoneblock12.body.checkCollision.up = false;
		stoneblock12.body.pushable = false;
		stoneblock12.body.immovable = true;
		stoneblock12.body.setOffset(0, 20);
		stoneblock12.body.setSize(512, 512, false);

		this.green = green;
		this.skirtinglight = skirtinglight;
		this.red_large_stripe = red_large_stripe;
		this.mouseholeleft1 = mouseholeleft1;
		this.pinkflock = pinkflock;
		this.standlamp1 = standlamp1;
		this.littledrawer2 = littledrawer2;
		this.darkshelve = darkshelve;
		this.darkdesklast2 = darkdesklast2;
		this.bottom = bottom;
		this.wardroberight = wardroberight;
		this.shelf1 = shelf1;
		this.shelf2 = shelf2;
		this.littledrawer3 = littledrawer3;
		this.wardrobelight = wardrobelight;
		this.standlamp = standlamp;
		this.largeseat = largeseat;
		this.ceiling = ceiling;
		this.lampunder3 = lampunder3;
		this.rug = rug;
		this.chairmoveup1 = chairmoveup1;
		this.darkseat = darkseat;
		this.ceiling2 = ceiling2;
		this.windowopen1 = windowopen1;
		this.littletable = littletable;
		this.lamp1 = lamp1;
		this.teletest = teletest;
		this.mousehole1 = mousehole1;
		this.can = can;
		this.can1 = can1;
		this.shelf = shelf;
		this.littledrawer = littledrawer;
		this.tele1 = tele1;
		this.hole = hole;
		this.shelf4 = shelf4;
		this.lampunder1 = lampunder1;
		this.lampunder2 = lampunder2;
		this.shelf5 = shelf5;
		this.paintinggold = paintinggold;
		this.mouse1 = mouse1;
		this.paintingbed = paintingbed;
		this.ceiling3 = ceiling3;
		this.mousehole2 = mousehole2;
		this.stoneblock = stoneblock;
		this.bat = bat;
		this.darkdesklast = darkdesklast;
		this.chairmove = chairmove;
		this.littleseat = littleseat;
		this.painting2 = painting2;
		this.paintingcorner = paintingcorner;
		this.dogInterior = dogInterior;
		this.spider3 = spider3;
		this.shelf10 = shelf10;
		this.goup = goup;
		this.lamp3 = lamp3;
		this.bookcase2 = bookcase2;
		this.hole_1 = hole_1;
		this.hole_2 = hole_2;
		this.tele2 = tele2;
		this.paintinglast = paintinglast;
		this.tele4 = tele4;
		this.lampcol = lampcol;
		this.plant = plant;
		this.plant0 = plant0;
		this.lampcol2 = lampcol2;
		this.shelf6 = shelf6;
		this.lampcol3 = lampcol3;
		this.cheeseimage = cheeseimage;
		this.mouse2 = mouse2;
		this.shelfmouse1 = shelfmouse1;
		this.shelfmouse2 = shelfmouse2;
		this.shelfmouse4 = shelfmouse4;
		this.shelfmouse0 = shelfmouse0;
		this.stoneblock1 = stoneblock1;
		this.stoneblock2 = stoneblock2;
		this.stoneblock3 = stoneblock3;
		this.stoneblock4 = stoneblock4;
		this.stoneblock5 = stoneblock5;
		this.holewall6 = holewall6;
		this.stoneblock6 = stoneblock6;
		this.stoneblock7 = stoneblock7;
		this.holewall4 = holewall4;
		this.stoneblock8 = stoneblock8;
		this.holewall1 = holewall1;
		this.painting = painting;
		this.holewall = holewall;
		this.holewall2 = holewall2;
		this.darkcounter = darkcounter;
		this.tele3 = tele3;
		this.painting14 = painting14;
		this.paintingbed11 = paintingbed11;
		this.shelveup1 = shelveup1;
		this.shelveup5 = shelveup5;
		this.holewall5 = holewall5;
		this.goup3 = goup3;
		this.goup_4 = goup_4;
		this.shelveup3 = shelveup3;
		this.shelf11 = shelf11;
		this.shelfmouse = shelfmouse;
		this.shelf7 = shelf7;
		this.shelfmouse_1 = shelfmouse_1;
		this.shelf3 = shelf3;
		this.shelf20 = shelf20;
		this.shelfmouse_3 = shelfmouse_3;
		this.shelveup4 = shelveup4;
		this.shelveup2 = shelveup2;
		this.shelf15 = shelf15;
		this.shelfmouse_4 = shelfmouse_4;
		this.painting4 = painting4;
		this.paintingbed3 = paintingbed3;
		this.paintinggold_1 = paintinggold_1;
		this.paintingbed6 = paintingbed6;
		this.paintinggold1 = paintinggold1;
		this.shelveup7 = shelveup7;
		this.shelveup6 = shelveup6;
		this.paintingbed7 = paintingbed7;
		this.paintingbed5 = paintingbed5;
		this.ghost5 = ghost5;
		this.ghost1 = ghost1;
		this.ghost2 = ghost2;
		this.ghost3 = ghost3;
		this.ghost4 = ghost4;
		this.ghost = ghost;
		this.lamp = lamp;
		this.plant4 = plant4;
		this.plant6 = plant6;
		this.plant1 = plant1;
		this.catPlayer = catPlayer;
		this.holewall3 = holewall3;
		this.lamp2 = lamp2;
		this.lamp4 = lamp4;
		this.paintingbed19 = paintingbed19;
		this.shelf21 = shelf21;
		this.shelfmouse_5 = shelfmouse_5;
		this.lampunder4 = lampunder4;
		this.rectangle1 = rectangle1;
		this.lamp_1 = lamp_1;
		this.lampcolup3 = lampcolup3;
		this.lamp_2 = lamp_2;
		this.lampcolup4 = lampcolup4;
		this.bat2 = bat2;
		this.lamp_3 = lamp_3;
		this.lampcolup6 = lampcolup6;
		this.text1 = text1;
		this.paintingfallup1 = paintingfallup1;
		this.fallpainting2 = fallpainting2;
		this.fallpainting3 = fallpainting3;
		this.ceilingdropdown = ceilingdropdown;
		this.mouseUpL2 = mouseUpL2;
		this.mouseUpL3 = mouseUpL3;
		this.mouseUpL5 = mouseUpL5;
		this.mouseLUpL6 = mouseLUpL6;
		this.mouseUpL1 = mouseUpL1;
		this.shelfmouse_11 = shelfmouse_11;
		this.shelfmouse_12 = shelfmouse_12;
		this.shelfmouse_13 = shelfmouse_13;
		this.shelfmouse_14 = shelfmouse_14;
		this.mouseUpL4 = mouseUpL4;
		this.shelfmouse_16 = shelfmouse_16;
		this.paintinglamp = paintinglamp;
		this.paintinglamp1 = paintinglamp1;
		this.paintingbed12 = paintingbed12;
		this.paintingbed15 = paintingbed15;
		this.paintingbed18 = paintingbed18;
		this.paintingbed2 = paintingbed2;
		this.paintingbed1 = paintingbed1;
		this.paintingbed4 = paintingbed4;
		this.paintingbed14 = paintingbed14;
		this.painting12 = painting12;
		this.paintingbed13 = paintingbed13;
		this.paintingbed10 = paintingbed10;
		this.paintingbed9 = paintingbed9;
		this.painting13 = painting13;
		this.painting8 = painting8;
		this.painting1 = painting1;
		this.paintingbed16 = paintingbed16;
		this.paintingbed17 = paintingbed17;
		this.lampcol4 = lampcol4;
		this.lampcol5 = lampcol5;
		this.collampup1 = collampup1;
		this.lampcolup2 = lampcolup2;
		this.stoneblock10 = stoneblock10;
		this.stoneblock9 = stoneblock9;
		this.stoneblock11 = stoneblock11;
		this.stoneblock12 = stoneblock12;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	green;
	/** @type {Phaser.GameObjects.TileSprite} */
	skirtinglight;
	/** @type {Phaser.GameObjects.TileSprite} */
	red_large_stripe;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	mouseholeleft1;
	/** @type {Phaser.GameObjects.TileSprite} */
	pinkflock;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	standlamp1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	littledrawer2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	darkshelve;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	darkdesklast2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bottom;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	wardroberight;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	littledrawer3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	wardrobelight;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	standlamp;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	largeseat;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling;
	/** @type {Phaser.GameObjects.NineSlice} */
	lampunder3;
	/** @type {Phaser.GameObjects.Image} */
	rug;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	chairmoveup1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	darkseat;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	windowopen1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	littletable;
	/** @type {Phaser.GameObjects.NineSlice} */
	lamp1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	teletest;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	mousehole1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	can;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	can1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	littledrawer;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	tele1;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf4;
	/** @type {Phaser.GameObjects.NineSlice} */
	lampunder1;
	/** @type {Phaser.GameObjects.NineSlice} */
	lampunder2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintinggold;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	mouse1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingbed;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	mousehole2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	stoneblock;
	/** @type {Bat} */
	bat;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	darkdesklast;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	chairmove;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	littleseat;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingcorner;
	/** @type {DogInterior} */
	dogInterior;
	/** @type {Spider} */
	spider3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf10;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	goup;
	/** @type {Phaser.GameObjects.NineSlice} */
	lamp3;
	/** @type {BookCase} */
	bookcase2;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole_1;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole_2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	tele2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintinglast;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	tele4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lampcol;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant0;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lampcol2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lampcol3;
	/** @type {Phaser.GameObjects.Image} */
	cheeseimage;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	mouse2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfmouse1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfmouse2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfmouse4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfmouse0;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	stoneblock1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	stoneblock2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	stoneblock3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	stoneblock4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	stoneblock5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	holewall6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	stoneblock6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	stoneblock7;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	holewall4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	stoneblock8;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	holewall1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	holewall;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	holewall2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	darkcounter;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	tele3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting14;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingbed11;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelveup1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelveup5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	holewall5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	goup3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	goup_4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelveup3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf11;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfmouse;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf7;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfmouse_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf20;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfmouse_3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelveup4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelveup2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf15;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfmouse_4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingbed3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintinggold_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingbed6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintinggold1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelveup7;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelveup6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingbed7;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingbed5;
	/** @type {Ghost} */
	ghost5;
	/** @type {Ghost} */
	ghost1;
	/** @type {Ghost} */
	ghost2;
	/** @type {Ghost} */
	ghost3;
	/** @type {Ghost} */
	ghost4;
	/** @type {Ghost} */
	ghost;
	/** @type {Phaser.GameObjects.NineSlice} */
	lamp;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant1;
	/** @type {CatPlayer} */
	catPlayer;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	holewall3;
	/** @type {Phaser.GameObjects.NineSlice} */
	lamp2;
	/** @type {Phaser.GameObjects.NineSlice} */
	lamp4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingbed19;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf21;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfmouse_5;
	/** @type {Phaser.GameObjects.NineSlice} */
	lampunder4;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle1;
	/** @type {Phaser.GameObjects.NineSlice} */
	lamp_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lampcolup3;
	/** @type {Phaser.GameObjects.NineSlice} */
	lamp_2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lampcolup4;
	/** @type {Bat} */
	bat2;
	/** @type {Phaser.GameObjects.NineSlice} */
	lamp_3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lampcolup6;
	/** @type {Phaser.GameObjects.Text} */
	text1;
	/** @type {fallpainting} */
	paintingfallup1;
	/** @type {fallpainting} */
	fallpainting2;
	/** @type {fallpainting} */
	fallpainting3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	ceilingdropdown;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	mouseUpL2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	mouseUpL3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	mouseUpL5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	mouseLUpL6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	mouseUpL1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfmouse_11;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfmouse_12;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfmouse_13;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfmouse_14;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	mouseUpL4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfmouse_16;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintinglamp;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintinglamp1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingbed12;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingbed15;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingbed18;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingbed2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingbed1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingbed4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingbed14;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting12;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingbed13;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingbed10;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingbed9;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting13;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting8;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingbed16;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingbed17;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lampcol4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lampcol5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	collampup1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lampcolup2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	stoneblock10;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	stoneblock9;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	stoneblock11;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	stoneblock12;

	/* START-USER-CODE */

	// Write your code here

	create() {

			this.UpdateGroup=this.add.group();
			this.DirtGroup=this.add.group();
			this.TrapGroup=this.add.group();
			this.MouseGroupTVDdown=this.add.group();
			this.MouseGroupTVUpLeft=this.add.group();
			this.MouseGroup=this.add.group();

			this.StickyGroup=this.add.group();
			this.StoneBlockGroup=this.add.group();

			this.editorCreate();
			this.test();
		 	this.OKgoChair=true;
			this.BDown=false;

			this.PanHeight=-100;

			this.Room="dark";
			this.mouse1.play('mousewalk');
			this.mouse2.play('mousesniff');

			this.mouseUpL3.play('mousesniff');
			this.mouseUpL2.play('mousesniff');
			this.mouseLUpL6.play('mousesniff');

			this.tele1.AlertOnce=false;
			this.tele2.AlertOnce=false;
			this.tele3.AlertOnce=false;
			this.tele4.AlertOnce=false;

			this.plant0.item="cheese";

			this.CheckTrap=false;

			this.OnceMove1=false;
			this.OnceMove2=false;
			this.OnceMove3=false;
			this.OnceMove4=false;

			this.mouse2.hole=1;

		this.AddingMouseStuff();

		//this.littleseat.setVelocityX(5);

		this.physics.world.enable(this.ceiling2);
		this.ceiling2.body.setImmovable(true);

		this.physics.world.enable(this.ceiling3);
		this.ceiling3.body.setImmovable(true);

		this.AddingRatsStuff();


		this.littleseat.body.setSize(this.littleseat.width, this.littleseat.height);
		//this.CreateLight();

//this.MouseGroup.add(this.mouse);

		var ColorLight=0x161313;
		var ColorLight2=0x456163;

		  light1  = this.lights.addLight(this.lampunder1.x, this.lampunder1.y+100, 800).setIntensity(2);
    this.lights.enable().setAmbientColor(ColorLight);
	light1.visible=false;

		light2  = this.lights.addLight(this.lampcol2.x, this.lampcol2.y, 1000).setIntensity(2);
    this.lights.enable().setAmbientColor(ColorLight);
	light2.visible=false;

	light3  = this.lights.addLight(this.lamp3.x, this.lamp3.y+530, 1000).setIntensity(2);
    this.lights.enable().setAmbientColor(ColorLight);
	light3.visible=false;

		light4  = this.lights.addLight(this.tele1.x-10, this.tele1.y+20, 800).setIntensity(2);
    this.lights.enable().setAmbientColor(ColorLight);
	light4.visible=false;

		light5  = this.lights.addLight(this.lampcol3.x, this.lampcol3.y+50, 1000).setIntensity(2);
    this.lights.enable().setAmbientColor(ColorLight);
	light5.visible=false;
//this.DarkGroup=this.add.group();

	var light6  = this.lights.addLight(this.windowopen1.x, this.windowopen1.y, 600).setIntensity(1);
    this.lights.enable().setAmbientColor(ColorLight);


	light7  = this.lights.addLight(this.tele2.x-10, this.tele2.y+20, 600).setIntensity(2);
    this.lights.enable().setAmbientColor(ColorLight);
	light7.visible=false;

	light8  = this.lights.addLight(this.tele3.x-10, this.tele3.y+20, 600).setIntensity(2);
    this.lights.enable().setAmbientColor(ColorLight);
	light8.visible=false;

	light9  = this.lights.addLight(this.lamp.x, this.lamp.y+450, 1000).setIntensity(2);
    this.lights.enable().setAmbientColor(ColorLight);
	light9.visible=false;

	light10  = this.lights.addLight(this.paintinglamp1.x, this.paintinglamp1.y, 1000).setIntensity(1);
    this.lights.enable().setAmbientColor(ColorLight);
	light10.visible=false;

	light11  = this.lights.addLight(this.tele4.x-10, this.tele4.y+20, 600).setIntensity(2);
    this.lights.enable().setAmbientColor(ColorLight);
	light11.visible=false;

	light12  = this.lights.addLight(this.lampcol4.x, this.lampcol4.y, 600).setIntensity(2);
    this.lights.enable().setAmbientColor(ColorLight);
	light12.visible=false;

	light13  = this.lights.addLight(this.standlamp1.x, this.standlamp1.y-100, 800).setIntensity(1);
    this.lights.enable().setAmbientColor(ColorLight);
	light13.visible=false;

	light14  = this.lights.addLight(this.collampup1.x, this.collampup1.y, 800).setIntensity(2);
    this.lights.enable().setAmbientColor(ColorLight);
	light14.visible=false;

	light15  = this.lights.addLight(this.lampcolup2.x, this.lampcolup2.y, 800).setIntensity(2);
    this.lights.enable().setAmbientColor(ColorLight);
	light15.visible=false;

		light16  = this.lights.addLight(this.lampcolup3.x, this.lampcolup3.y, 800).setIntensity(2);
    this.lights.enable().setAmbientColor(ColorLight);
	light16.visible=false;

		light17  = this.lights.addLight(this.lampcolup4.x, this.lampcolup4.y, 800).setIntensity(2);
    this.lights.enable().setAmbientColor(ColorLight);
	light17.visible=false;

		light18  = this.lights.addLight(this.lampcolup6.x, this.lampcolup6.y, 800).setIntensity(2);
    this.lights.enable().setAmbientColor(ColorLight);
	light18.visible=false;

	//
		this.tele1.whichlight=light4;
		this.tele2.whichlight=light7;
		this.tele3.whichlight=light8;
		this.tele4.whichlight=light11;

		this.lampcol.whichlight=light1;
		this.lampcol2.whichlight=light2;
		this.lampcol3.whichlight=light5;
		this.lampcol4.whichlight=light12;
		this.lampcol5.whichlight=light3;
		this.lampcolup6.whichlight=light18;

		this.collampup1.whichlight=light14;

		this.paintinglamp.whichlight=light9;
		this.paintinglamp1.whichlight=light10;
		this.standlamp1.whichlight=light13;
		this.lampcolup2.whichlight=light15;
		this.lampcolup3.whichlight=light16;
		this.lampcolup4.whichlight=light17;

		//holes in wall

		this.holewall.setPipeline('Light2D');
		this.holewall2.setPipeline('Light2D');
		this.holewall1.setPipeline('Light2D');
		this.holewall3.setPipeline('Light2D');
		this.holewall4.setPipeline('Light2D');
		this.holewall5.setPipeline('Light2D');
		this.holewall6.setPipeline('Light2D');

		this.windowopen1.setPipeline('Light2D');
		this.green.setPipeline('Light2D');
		this.red_large_stripe.setPipeline('Light2D');
		this.catPlayer.setPipeline('Light2D');
	//	this.doghome.setPipeline('Light2D');
		this.littletable.setPipeline('Light2D');
		this.pinkflock.setPipeline('Light2D');
		this.paintingbed.setPipeline('Light2D');


		//this.bookcase1.setPipeline('Light2D');
		this.ceiling2.setPipeline('Light2D');
		this.ceiling3.setPipeline('Light2D');
		this.shelf.setPipeline('Light2D');
		this.shelf1.setPipeline('Light2D');
		this.shelf2.setPipeline('Light2D');
		this.shelf3.setPipeline('Light2D');
		this.shelf4.setPipeline('Light2D');
		this.shelf5.setPipeline('Light2D');
		this.shelf10.setPipeline('Light2D');
		this.shelf15.setPipeline('Light2D');

		this.plant6.setPipeline('Light2D');

		this.paintinglast.setPipeline('Light2D');

		this.skirtinglight.setPipeline('Light2D');
		this.paintinggold.setPipeline('Light2D');

		this.littledrawer.setPipeline('Light2D');
		this.rug.setPipeline('Light2D');
		this.chairmove.setPipeline('Light2D');
		this.wardrobelight.setPipeline('Light2D');	
		this.tele3.setPipeline('Light2D');	
		this.tele4.setPipeline('Light2D');	
		this.littledrawer2.setPipeline('Light2D');
		this.littleseat.setPipeline('Light2D');

		this.painting.setPipeline('Light2D');
		this.painting4.setPipeline('Light2D');
		this.painting1.setPipeline('Light2D');
		this.painting2.setPipeline('Light2D');
		this.painting12.setPipeline('Light2D');
		this.painting13.setPipeline('Light2D');
		this.painting14.setPipeline('Light2D');

		this.paintingcorner.setPipeline('Light2D');
		this.darkdesklast.setPipeline('Light2D');
		this.wardroberight.setPipeline('Light2D');
		//this.plantb1.setPipeline('Light2D');
		this.tele1.setPipeline('Light2D');
		this.tele2.setPipeline('Light2D');
		this.shelf6.setPipeline('Light2D');

		this.lampunder1.setPipeline('Light2D');
		this.lampunder2.setPipeline('Light2D');
		this.lampunder3.setPipeline('Light2D');
		this.plant0.setPipeline('Light2D');

		this.mouse1.setPipeline('Light2D');
		this.bat.setPipeline('Light2D');
		this.stoneblock.setPipeline('Light2D');

this.ceiling.setPipeline('Light2D');
this.ceiling2.setPipeline('Light2D');
this.ceiling3.setPipeline('Light2D');

this.ghost1.setPipeline('Light2D');
this.ghost2.setPipeline('Light2D');
this.ghost3.setPipeline('Light2D');
this.ghost4.setPipeline('Light2D');
this.ghost5.setPipeline('Light2D');
this.ghost.setPipeline('Light2D');

this.holewall1.setPipeline('Light2D');

this.bookcase2.shell.setPipeline('Light2D');

this.ceilingdropdown.setPipeline('Light2D');
this.spider3.spider1.setPipeline('Light2D');
this.mouse2.setPipeline('Light2D');
this.chairmoveup1.setPipeline('Light2D');
this.littledrawer3.setPipeline('Light2D');
this.darkshelve.setPipeline('Light2D');

this.paintingbed1.setPipeline('Light2D');
this.paintingbed2.setPipeline('Light2D');
this.paintingbed3.setPipeline('Light2D');
this.paintingbed5.setPipeline('Light2D');
this.paintingbed4.setPipeline('Light2D');
this.paintingbed6.setPipeline('Light2D');
this.paintingbed7.setPipeline('Light2D');
//this.paintingbed8.setPipeline('Light2D');
this.paintingbed9.setPipeline('Light2D');
this.paintingbed10.setPipeline('Light2D');
this.paintingbed11.setPipeline('Light2D');
this.paintingbed12.setPipeline('Light2D');
this.paintingbed13.setPipeline('Light2D');
this.paintingbed14.setPipeline('Light2D');
this.paintingbed15.setPipeline('Light2D');
this.paintingbed16.setPipeline('Light2D');
this.paintingbed17.setPipeline('Light2D');
this.paintingbed18.setPipeline('Light2D');
this.paintingbed19.setPipeline('Light2D');

this.standlamp.setPipeline('Light2D');
this.darkseat.setPipeline('Light2D');
this.darkdesklast2.setPipeline('Light2D');
this.darkcounter.setPipeline('Light2D');
this.largeseat.setPipeline('Light2D');

this.shelveup3.setPipeline('Light2D');
this.shelveup2.setPipeline('Light2D');
this.shelveup1.setPipeline('Light2D');
this.shelveup4.setPipeline('Light2D');
this.shelveup5.setPipeline('Light2D');
this.shelveup6.setPipeline('Light2D');
this.shelveup7.setPipeline('Light2D');

this.shelf11.setPipeline('Light2D');
this.shelf7.setPipeline('Light2D');
this.shelf20.setPipeline('Light2D');
this.shelf21.setPipeline('Light2D');

this.lamp.setPipeline('Light2D');
this.lamp1.setPipeline('Light2D');
this.lamp2.setPipeline('Light2D');
this.lamp3.setPipeline('Light2D');
this.lamp4.setPipeline('Light2D');
this.lamp_3.setPipeline('Light2D');

this.rectangle1.setPipeline('Light2D');

this.lampunder4.setPipeline('Light2D');

this.plant.setPipeline('Light2D');
this.plant1.setPipeline('Light2D');
this.plant0.setPipeline('Light2D');
this.plant4.setPipeline('Light2D');
this.plant6.setPipeline('Light2D');
this.painting8.setPipeline('Light2D');
this.goup3.setPipeline('Light2D');
this.bat2.setPipeline('Light2D');
this.paintinggold1.setPipeline('Light2D');

this.standlamp1.setPipeline('Light2D');

this.lamp_1.setPipeline('Light2D');
this.lamp_2.setPipeline('Light2D');

this.text1.setPipeline('Light2D');

this.paintingfallup1.painting.setPipeline('Light2D');

this.fallpainting2.painting.setPipeline('Light2D');
this.fallpainting3.painting.setPipeline('Light2D');


this.fallpainting3.painting.setTexture('painting_01_dark');
this.fallpainting2.painting.setTexture('painting_04_dark');

this.fallpainting2.block.body.setOffset(0, 20);


//thr right side moving paintings


this.StickyGroup.add(this.paintingbed1);

//this.shelf8.move=true;

		//this.chairmove.body.setVelocityX(-100);

		this.mousehole1.setCrop(-100,0,890,140);
		this.mousehole2.setCrop(-100,0,890,140);

		this.physics.world.setBounds(-1800,-2400,5000, 3100);
		this.cameras.main.setBounds(-1800,-2400,5000, 3100);
		this.cameras.main.setZoom(0.71);

		this.cameras.main.startFollow(this.catPlayer,false,0.2,0,0,0);

		this.CreatePlatform(this.shelf);
		this.CreatePlatform(this.shelf1);
		this.CreatePlatform(this.shelf2);
			this.CreatePlatform(this.shelf4);
			this.CreatePlatform(this.shelf5);

				this.CreatePlatform(this.shelveup4);
				this.CreatePlatform(this.shelveup5);
				this.CreatePlatform(this.shelveup6);
				this.CreatePlatform(this.shelveup7);
			//this.CreatePlatform(this.shelf7);
		//	this.CreatePlatform(this.shelf8);
			this.CreatePlatform(this.shelf10);
				this.CreatePlatform(this.shelf11);
					this.CreatePlatform(this.shelf20);
		this.CreatePlatform(this.wardrobelight);
this.CreatePlatform(this.paintinggold);
this.CreatePlatform(this.painting2);
this.CreatePlatform(this.chairmoveup1);

this.CreatePlatform(this.bookcase2);			
//this.CreatePlatform(this.paintingbed);	

		this.CreatePlatform(this.littletable);
		this.CreatePlatform(this.chairmove);
			this.CreatePlatform(this.shelveup2);
				this.CreatePlatform(this.shelveup3);
		//this.CreatePlatform(this.flatscreen);
		this.CreatePlatform(this.littledrawer);

		this.CreatePlatform(this.darkdesklast);		
		//	this.CreatePlatform(this.tele4);
			this.CreatePlatform(this.shelveup1);
			this.CreatePlatform(this.shelveup2);
			this.CreatePlatform(this.shelveup3);
			this.CreatePlatform(this.shelveup4);
			this.CreatePlatform(this.largeseat);
			this.CreatePlatform(this.darkseat);
			this.CreatePlatform(this.ceilingdropdown);
		this.CreatePlatform(this.littleseat);	
		this.CreatePlatform(this.shelf11);	
		this.CreatePlatform(this.shelf15);
			this.CreatePlatform(this.shelf21);
				this.CreatePlatform(this.shelf20);
		this.CreatePlatform(this.goup3);
		this.CreatePlatform(this.shelf6);
		this.CreatePlatform(this.shelf7);		
		this.CreatePlatform(this.shelf3);	
		this.CreatePlatform(this.shelveup5);	
		this.CreatePlatform(this.wardroberight);	
		//groups

		this.StoneBlockGroup.add(this.stoneblock1);
		this.StoneBlockGroup.add(this.stoneblock2);
		this.StoneBlockGroup.add(this.stoneblock3);
		this.StoneBlockGroup.add(this.stoneblock4);
		this.StoneBlockGroup.add(this.stoneblock5);
		this.StoneBlockGroup.add(this.stoneblock6);
		this.StoneBlockGroup.add(this.stoneblock7);
		this.StoneBlockGroup.add(this.stoneblock8);
		this.StoneBlockGroup.add(this.stoneblock9);
		this.StoneBlockGroup.add(this.stoneblock10);
		this.StoneBlockGroup.add(this.stoneblock11);
		this.StoneBlockGroup.add(this.stoneblock12);



		//MOUSES///////

		this.MouseGroupTVDdown.add(this.shelfmouse1);
		this.MouseGroupTVDdown.add(this.shelfmouse2);
		this.MouseGroupTVDdown.add(this.shelfmouse0);
		this.MouseGroupTVDdown.add(this.shelfmouse4);

	this.MouseGroup.add(this.shelfmouse1);
	this.MouseGroup.add(this.shelfmouse2);
	this.MouseGroup.add(this.shelfmouse0);
	this.MouseGroup.add(this.shelfmouse4);
	this.MouseGroup.add(this.mouseUpL1);
	this.MouseGroup.add(this.mouseUpL2);
	this.MouseGroup.add(this.mouseUpL3);
	this.MouseGroup.add(this.mouseUpL4);
	this.MouseGroup.add(this.mouseUpL5);
	this.MouseGroup.add(this.mouseLUpL6);

	this.MouseGroupTVUpLeft.add(this.mouseUpL1);
	this.MouseGroupTVUpLeft.add(this.mouseUpL2);
	this.MouseGroupTVUpLeft.add(this.mouseUpL3);
	this.MouseGroupTVUpLeft.add(this.mouseUpL4);
	this.MouseGroupTVUpLeft.add(this.mouseUpL5);
	this.MouseGroupTVUpLeft.add(this.mouseLUpL6);

/////////////////////////

	this.StickyGroup.add(this.painting13);
	this.StickyGroup.add(this.painting);
	this.StickyGroup.add(this.painting1);
	//this.StickyGroup.add(this.painting2);
	//this.StickyGroup.add(this.painting3);
	this.StickyGroup.add(this.painting4);
	this.StickyGroup.add(this.painting8);
	this.StickyGroup.add(this.painting12);
	this.StickyGroup.add(this.painting14);

this.StickyGroup.add(this.paintingbed);
	this.StickyGroup.add(this.paintingbed1);
	this.StickyGroup.add(this.paintingbed2);
	this.StickyGroup.add(this.paintingbed3);
	this.StickyGroup.add(this.paintingbed4);
	this.StickyGroup.add(this.paintingbed5);
	this.StickyGroup.add(this.paintingbed6);
	this.StickyGroup.add(this.paintingbed7);
	this.StickyGroup.add(this.paintingbed9);
	this.StickyGroup.add(this.paintingbed10);
	this.StickyGroup.add(this.paintingbed11);
	this.StickyGroup.add(this.paintingbed12);
	this.StickyGroup.add(this.paintingbed13);
	this.StickyGroup.add(this.paintingbed14);
	this.StickyGroup.add(this.paintingbed16);
	this.StickyGroup.add(this.paintingbed18);
	this.StickyGroup.add(this.paintingbed19);
	this.StickyGroup.add(this.paintingbed15);

	//this.MovePainting(this.paintingbed2,0,4000,"+=500");

//Left side




//right side

		this.mousehole1.info=this.mousehole2;

		this.physics.add.overlap(this.catPlayer,this.mousehole1,this.Teleport,null,this);

		this.physics.add.collider(this.catPlayer,this.tele1,this.EverythingMoves,null,this);
		this.physics.add.collider(this.catPlayer,this.tele2,this.EverythingMoves,null,this);
		this.physics.add.collider(this.catPlayer,this.tele3,this.EverythingMoves,null,this);
		this.physics.add.collider(this.catPlayer,this.tele4,this.EverythingMoves,null,this);

		this.physics.add.collider(this.catPlayer,this.ceiling2);

		this.physics.add.collider(this.plant0,this.shelf);
		this.physics.add.collider(this.catPlayer,this.littleseat, this.Sticktosofa,null,this);
		this.physics.add.collider(this.catPlayer,this.paintinglast,this.StickToObject,null,this);
		this.physics.add.collider(this.catPlayer,this.stoneblock,this.push,null,this);

		this.physics.add.overlap(this.catPlayer,this.StickyGroup,this.StickToObject,null,this);

		this.physics.add.collider(this.catPlayer,this.lampcol,this.StickToObject,null,this);
		this.physics.add.collider(this.catPlayer,this.lampcol2,this.StickToObject,null,this);
		this.physics.add.collider(this.catPlayer,this.lampcol3,this.StickToObject,null,this);
		this.physics.add.collider(this.catPlayer,this.lampcol4,this.StickToObject,null,this);
		this.physics.add.collider(this.catPlayer,this.lampcol5,this.StickToObject,null,this);
		this.physics.add.collider(this.catPlayer,this.paintingcorner,this.StickToObject,null,this);
		this.physics.add.collider(this.catPlayer,this.paintingbed17,this.StickToObject,null,this);

		this.physics.add.overlap(this.catPlayer,this.paintinglamp,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintinglamp1,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.collampup1,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.lampcolup2,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.lampcolup3,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.lampcolup4,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.lampcolup6,this.StickToObject,null,this);
			//this.physics.add.overlap(this.catPlayer,this.paintingbed,this.StickToObject,null,this);

		this.physics.add.collider(this.catPlayer,this.plant0,this.push,null,this);
		this.physics.add.collider(this.plant0,this.bottom,this.DropAndLeaveMark,null,this);

		this.physics.add.overlap(this.catPlayer,this.lampcol,this.LightsOn,null,this);
		this.physics.add.overlap(this.catPlayer,this.lampcol2,this.LightsOn,null,this);
		this.physics.add.overlap(this.catPlayer,this.lampcol3,this.LightsOn,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintinglamp,this.LightsOn,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintinglamp1,this.LightsOn,null,this);
		this.physics.add.overlap(this.catPlayer,this.lampcol5,this.LightsOn,null,this);
		this.physics.add.overlap(this.catPlayer,this.lampcol4,this.LightsOn,null,this);
		this.physics.add.overlap(this.catPlayer,this.standlamp1,this.LightsOn,null,this);
		this.physics.add.overlap(this.catPlayer,this.lampcolup2,this.LightsOn,null,this);
		this.physics.add.overlap(this.catPlayer,this.collampup1,this.LightsOn,null,this);

		this.physics.add.overlap(this.catPlayer,this.lampcolup3,this.LightsOn,null,this);
		this.physics.add.overlap(this.catPlayer,this.lampcolup4,this.LightsOn,null,this);
		this.physics.add.overlap(this.catPlayer,this.lampcolup6,this.LightsOn,null,this);
		this.physics.add.collider(this.catPlayer,this.ceiling3);
		this.physics.add.collider(this.catPlayer,this.standlamp1);
		this.physics.add.overlap(this.mouse1,this.TrapGroup);

		this.physics.add.collider(this.stoneblock,this.shelf4);
		this.physics.add.collider(this.stoneblock,this.bottom);

		this.physics.add.collider(this.MouseGroup,this.StoneBlockGroup);

			this.physics.add.collider(this.paintingfallup1.block,this.catPlayer,this.MakeObjectImmovabke,null,this);
			this.physics.add.collider(this.paintingfallup1,this.ceiling2,this.DropAndLeaveMark,null,this);


			this.physics.add.collider(this.fallpainting2.block,this.catPlayer,this.MakeObjectImmovabke,null,this);
			this.physics.add.collider(this.fallpainting2,this.bottom,this.DropAndLeaveMark,null,this);


			this.physics.add.collider(this.fallpainting3.block,this.catPlayer,this.MakeObjectImmovabke,null,this);
			this.physics.add.collider(this.fallpainting3,this.bottom,this.DropAndLeaveMark,null,this);

		this.tweenplatform=this.tweens.add({
            targets: this.ceilingdropdown,			//x:"+=180"
			y: "+=400",
			duration:5000,
            ease: 'Sine.easeInOut',
			repeatDelay:1000,
			delay:100,
			hold:3000,
            yoyo: true,
         repeat: -1,
        });


		//this.physics.add.overlap(this.catPlayer,this.indoorwindow1.waythrough,this.JumpOut,null,this);
this.FlickerTV(this.tele1,light4);
this.FlickerTV(this.tele2,light7);
this.FlickerTV(this.tele3,light8);
 this.FlickerTV(this.tele4,light11);






		this.input.keyboard.on('keydown-B', () =>{

	console.log('test key up()');
	this.BDown=true;

});

		this.input.keyboard.on('keyup-B', () =>{

	console.log('test key up()');
	this.BDown=false;

});




	}

	RightSidePaintMove(){



this.MovePainting(this.paintingbed,1,2000,"-=400",420);
this.MovePainting(this.paintingbed1,1,2900,"+=400",120);
this.MovePainting(this.paintingbed2,0,2900,"+=400",120);
this.MovePainting(this.paintingbed5,1,2000,"+=200",600);
this.MovePainting(this.paintingbed3,1,4000,"-=400",0);
this.MovePainting(this.paintingbed18,0,3000,"-=300",250);
this.MovePainting(this.paintingbed13,1,3000,"-=300",900);
this.MovePainting(this.paintingbed17,0,2000,"-=200",100);
this.MovePainting(this.paintingbed6,0,2200,"-=200",200);
this.MovePainting(this.paintingbed16,1,2300,"-=300",100);
this.MovePainting(this.paintingbed14,0,2300,"+=200",1200);
this.MovePainting(this.paintingbed19,0,2000,"+=300",100);

	}

LeftSidePaintMove(){

	this.MovePainting(this.painting14,1,2000,"+=200",600);
	this.MovePainting(this.painting13,1,1800,"+=200",230);
	this.MovePainting(this.painting12,0,4000,"-=600",700);
	this.MovePainting(this.painting,1,4000,"+=300",0);
	this.MovePainting(this.painting1,1,2000,"-=200",500);
	this.MovePainting(this.painting4,0,3100,"-=400",500);
	this.MovePainting(this.painting8,0,2000,"-=200",450);
	this.MovePainting(this.paintingbed12,1,4000,"-=500",800);
	this.MovePainting(this.paintingbed15,0,4000,"-=300",100);
	this.MovePainting(this.paintingbed10,0,3000,"+=300",1200);
	this.MovePainting(this.paintingbed11,0,4000,"-=300",365);
	this.MovePainting(this.paintingbed9,0,2000,"+=100",400);

};

	LightsOn(Cat,Lamp){

Lamp.whichlight.visible=true;


	//light.visible=false;
	}

	 Sticktosofa(Cat,Sofa){

//Cat.x=Sofa.x;



	 }

	 FlickerTV(TV,Light){
		this.time.addEvent({ delay:5000, callback:() => {
		//this.scenelevelheme.stop();
		if(TV.AlertOnce==false){

		if(Light.visible){

			Light.visible=false;

		}else{

			Light.visible=true;

		this.time.addEvent({ delay:70, callback:() => {
		Light.visible=false;
			}, callbackScope: this,repeat:0});
		}
				}

				}, callbackScope: this,repeat:-1});




	 }

EverythingMoves(Cat,TV){

if(TV==this.tele3 && this.OnceMove3==false){

if(this.OnceMove3==false){
console.log('tv 3');
this.LeftSidePaintMove();
}
this.OnceMove3=true;
TV.AlertOnce=true;
this.mouseUpL1.body.setVelocityX(-100);
this.mouseUpL4.body.setVelocityX(-100);




this.MouseGroupTVUpLeft.children.iterate(function(child){


if(child){

	child.visible=true;
}

  });


}


if(TV==this.tele1 && this.OnceMove1==false){
this.OnceMove1=true;
TV.AlertOnce=true;
this.littleseat.body.setVelocityX(-150);
}

if(TV==this.tele4 && this.OnceMove4==false){
	this.RightSidePaintMove();
this.OnceMove4=true;
TV.AlertOnce=true;

}

if(TV==this.tele2  && this.OnceMove2==false){
	this.OnceMove2=true;
	Mactive=true;
	TV.AlertOnce=true;
console.log('TV222222222222222222');
this.cheeseimage.visible=true;

this.MouseGroupTVDdown.children.iterate(function(child){

if(child){

	if(child.flipX==true){
child.body.setVelocityX(-100);

	}else{
child.body.setVelocityX(100);
	}

child.play('mousewalk');
child.visible=true;


		child.setPipeline('Light2D');
}

  });

};

console.log('TV : '+ TV.whichlight );
TV.whichlight.visible=true;


	}

	SwitchMouse(Mouse){

if(Math.abs(this.catPlayer.x-Mouse.x)<300 && Math.abs(this.catPlayer.y-Mouse.y)<300 && this.collisionStone==false){
console.log('piiieeeeeeeeeeeeeeeeeeeppp');

if(this.mouse2.hole==1){

this.mouse2.hole=2;

this.mouse2.x=this.mousehole2.x;
this.mouse2.y=this.mousehole2.y-10;

}

else{

this.mouse2.hole=1;

this.mouse2.x=this.mousehole1.x;
this.mouse2.y=this.mousehole1.y-10;

}
	};
	}

	MovePainting(Paint,HorOrVert,Dur,Value,Delay){

		if(HorOrVert==0){


	this.tweenpainting=this.tweens.add({
            targets: Paint,			//x:"+=180"
			x: Value,
			duration:Dur,
            ease: 'Sine.easeInOut',
			repeatDelay:2000,
			delay:Delay,
			hold:3000,
            yoyo: true,
         repeat: -1,
        });

	}
		else if(HorOrVert==1){

	this.tweenpainting=this.tweens.add({
            targets: Paint,			//x:"+=180"
			y: Value,
			duration:Dur,
            ease: 'Sine.easeInOut',
			repeatDelay:2000,
			delay:Delay,
			hold:3000,
            yoyo: true,
         repeat: -1,
        });

		}

	}

	CreateLight(posx,posy,radius){




	}

		MoveObject(Object,minposx,maxposx,Speedx,minposy,maxposy,Speedy){

			if(Speedy!==0){
				if(Object.y<=minposy){

			if(this.OKgoChair){
				this.WaitAndTheMovechair(Object,Speedx,Speedy);
			//	this.OKgoChair=false;
			};
		}
		else
		if(Object.y>=maxposy){

			if(this.OKgoChair){


			//this.chairmove.body.setVelocityX(0);
			this.WaitAndTheMovechair(Object,Speedx,-Speedy);
		//	this.OKgoChair=false;
			}
		  }


			}else{

			if(Object.x<minposx){

			if(this.OKgoChair){
				this.WaitAndTheMovechair(Object,Speedx,Speedy);
			//	this.OKgoChair=false;
			};
		}
		else
		if(Object.x>maxposx){

			if(this.OKgoChair){
			this.WaitAndTheMovechair(Object,-Speedx,Speedy);
		//	this.OKgoChair=false;
			}

		  }
		}
	};

	WaitAndTheMovechair(Object,Speedx,Speedy){

		Object.move=false;
		Object.body.setVelocityX(0);
		Object.body.setVelocityY(0);

		this.time.addEvent({ delay: 3000, callback:() => {

			if(Speedy!==0){

				Object.body.setVelocityY(Speedy);

					this.time.addEvent({ delay: 200, callback:() => {
						Object.move=true;
	}, callbackScope: this,repeat:0 });


			}else{
				Object.body.setVelocityX(Speedx);
			}

		//	this.OKgoChair=true;

}, callbackScope: this,repeat:0 });


	}

MoveVertical(Object,MinPosy,MaxPosy,Speedy){


	if(Object.move){
	if(Object.y<=MinPosy){

		this.WaitAndTheMovechair(Object,0,Speedy);
		}
		else
		if(Object.y>=MaxPosy){
			//this.chairmove.body.setVelocityX(0);
		this.WaitAndTheMovechair(Object,0,-Speedy);
		//	this.OKgoChair=false;

		  }
	};
}

MouseGoLeftAndRight(Mouse){
	
if(Mouse.body.touching.left ){
Mouse.flipX=false;
	Mouse.body.setVelocityX(100);
}else if(Mouse.body.touching.right){
Mouse.flipX=true;
	Mouse.body.setVelocityX(-100);

}

}

ShowMouseOrNot(Mouse,Paint,HorOrVert){


if(HorOrVert=="Vert"){

if(Math.abs((Mouse.y-Paint.y))<80)
		{
		Mouse.visible=false;
		}	
	else
		{
		Mouse.visible=true;
		}
}

if(HorOrVert=="Hor"){

if(Math.abs((Mouse.x-Paint.x))<80)
		{
		Mouse.visible=false;
		}	
	else
		{
		Mouse.visible=true;
		}
}

							}


	update(){

		this.ShowMouseOrNot(this.mouseUpL3,this.paintingbed12,"Vert");
		this.ShowMouseOrNot(this.mouseUpL2,this.painting8,"Hor");
		this.ShowMouseOrNot(this.mouseLUpL6,this.painting12,"Hor");

				if(this.catPlayer.stick==false){
				this.catPlayer.x=this.WhichObjectHangOn.x;
		}

		if(this.catPlayer.stick==false && this.catPlayer.JumpVerticalPaint==false){
				this.catPlayer.y=this.WhichObjectHangOn.y+30;
		};

		//console.log('cat y: '+this.catPlayer.y);


if(this.catPlayer.y<-100 ){
//
			if(this.PanHeight>=-930){
			//console.log('pan goes 1');
			this.cameras.main.setBounds(-1800,this.PanHeight-=20,5000,800);
			this.cameras.main.startFollow(this.catPlayer,false,0.2,0.2,0,100);

				//this.physics.world.setBounds(-1800,-2400,5000, 3100);
				//this.cameras.main.setBounds(-1800,-2400,5000, 3100);
			};

		}

		else
		{
		if(this.PanHeight<=-140){

//console.log('pan goes 2');
			this.cameras.main.setBounds(-1800,this.PanHeight+=20,5000, 800);
					this.cameras.main.startFollow(this.catPlayer,false,0.2,0,0,0);
			};

		}

		if(this.catPlayer.y<-550){
			//console.log('pan goes 3');
	this.cameras.main.setBounds(-1800,-1840,5000,1725);

		}	

		this.SwitchMouse(this.mouse2);
		this.collisionStone=this.physics.overlap(this.mousehole2,this.stoneblock);

		this.TrapCollider=this.physics.overlap(this.mouse1,this.TrapGroup);
		this.colliderSeat=this.physics.overlap(this.mouseholeleft1,this.littleseat);

	//console.log( 'littleseat : ' + this.colliderSeat);


if(this.TrapCollider){

this.mouse1.body.setVelocityX(0);	

};


if(this.colliderSeat==false && !this.plant0.active && this.TrapCollider==false){


this.mouse1.visible=true;
this.mouse1.body.setVelocityX(-150);

}


		this.colliderTV=this.physics.overlap(this.catPlayer,this.teletest);

		//console.log('tele1 collide : ' + this.colliderseat);

		if(this.colliderTV==false){
//this.littleseat.body.setVelocityX(0);
		}



		this.DropDownWhenjumpCatonObject(this.paintinggold);
		this.DropDownWhenjumpCatonObject(this.painting2);
	//	this.DropDownWhenjumpCatonObject(this.paintingbed);
		//this.DropDownWhenjumpCatonObject(this.paintingcorner);


if(this.OnceMove1){

this.MoveObject(this.littleseat,-1400,-800,150,0,0,0);

}



	this.MoveObject(this.chairmove,-100,700,150,0,0,0);

	this.MouseGroup.children.iterate(function(child){

if(child){

	if(child.body.touching.left ){
child.flipX=false;
	child.body.setVelocityX(100);
}else if(child.body.touching.right){
child.flipX=true;
	child.body.setVelocityX(-100);

}



};

  });


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
