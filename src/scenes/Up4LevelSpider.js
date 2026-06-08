
// You can write more code here
	var flashlight 
/* START OF COMPILED CODE */

class Up4LevelSpider extends BaseScene {

	constructor() {
		super("Up4LevelSpider");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// green
		const green = this.add.image(698, 682, "red_plain");
		green.scaleX = 15.964687337484047;
		green.scaleY = 0.10485117397067724;
		green.tintBottomLeft = 8355711;
		green.tintBottomRight = 7895160;

		// ceiling2
		const ceiling2 = this.add.tileSprite(707, -1060, 15000, 5000, "red_large_stripe");
		ceiling2.scaleX = 0.1281025380134249;
		ceiling2.scaleY = 0.6798261930852911;
		ceiling2.tintTopLeft = 6642266;
		ceiling2.tintTopRight = 13942976;
		ceiling2.tintBottomLeft = 10658466;
		ceiling2.tintBottomRight = 8948622;
		ceiling2.tileScaleX = 1.05;

		// lamp_02
		const lamp_02 = this.add.image(140, -996, "lamp_02");
		lamp_02.scaleX = 0.252030275060952;
		lamp_02.scaleY = 0.252030275060952;

		// skirting_light
		const skirting_light = this.add.tileSprite(510, 633, 15000, 63, "skirting_light");
		skirting_light.scaleX = 0.2528690000816929;
		skirting_light.scaleY = 0.2528690000816929;

		// bookcase
		const bookcase = this.physics.add.sprite(1006, -1014, "light_5_shelves");
		bookcase.scaleX = 0.21527643266675234;
		bookcase.scaleY = 0.21527643266675234;
		bookcase.body.setSize(676, 1109, false);

		// green_1
		const green_1 = this.add.image(990, -85, "red_plain");
		green_1.scaleX = 11.048934310917604;
		green_1.scaleY = 0.014929187795925244;
		green_1.tintBottomLeft = 7955042;
		green_1.tintBottomRight = 7691099;

		// brownseat
		const brownseat = this.physics.add.sprite(501, -168, "brown_1_seat");
		brownseat.scaleX = 0.16204551931607353;
		brownseat.scaleY = 0.16204551931607353;
		brownseat.body.setSize(1070, 858, false);

		// wardrobe
		const wardrobe = this.physics.add.sprite(1196, -251, "light_wardrobe");
		wardrobe.scaleX = 0.27111001128808454;
		wardrobe.scaleY = 0.27111001128808454;
		wardrobe.body.setSize(676, 1109, false);

		// bed
		const bed = this.physics.add.sprite(424, -975, "bed_05");
		bed.scaleX = 0.35926448913327796;
		bed.scaleY = 0.35926448913327796;
		bed.body.checkCollision.left = false;
		bed.body.checkCollision.right = false;
		bed.body.pushable = false;
		bed.body.immovable = true;
		bed.body.setSize(707, 464, false);

		// bottom
		const bottom = this.physics.add.sprite(725, 702, "block_separator_01");
		bottom.scaleX = 5.504107162267043;
		bottom.scaleY = 1.250533984076435;
		bottom.visible = false;
		bottom.body.pushable = false;
		bottom.body.immovable = true;
		bottom.body.setSize(695, 40, false);

		// planter_01
		const planter_01 = this.add.image(1749, -602, "planter_01");
		planter_01.scaleX = 0.5601401004970402;
		planter_01.scaleY = 0.5601401004970402;

		// paint3
		const paint3 = this.add.image(2468, -315, "painting_03_white");
		paint3.scaleX = 0.18626657369712651;
		paint3.scaleY = 0.18626657369712651;

		// paint4
		const paint4 = this.add.image(1825, -353, "painting_04_light");
		paint4.scaleX = 0.2631094249094782;
		paint4.scaleY = 0.2631094249094782;

		// ceiling1
		const ceiling1 = this.add.tileSprite(1183, -102, 10000, 78, "skirting_light");
		ceiling1.scaleX = 0.18021693427896895;
		ceiling1.scaleY = 0.18021693427896895;

		// shelfup2
		const shelfup2 = this.physics.add.sprite(156, -1919, "light_wall_shelf");
		shelfup2.scaleX = 0.1250780691733577;
		shelfup2.scaleY = 0.1250780691733577;
		shelfup2.visible = false;
		shelfup2.body.setSize(1007, 85, false);

		// shelfup1
		const shelfup1 = this.physics.add.sprite(265, -696, "light_wall_shelf");
		shelfup1.scaleX = 0.11;
		shelfup1.scaleY = 0.1250780691733577;
		shelfup1.visible = false;
		shelfup1.body.pushable = false;
		shelfup1.body.immovable = true;
		shelfup1.body.setSize(1007, 85, false);

		// shelfup3
		const shelfup3 = this.physics.add.sprite(1283, -659, "light_wall_shelf");
		shelfup3.scaleX = 0.11;
		shelfup3.scaleY = 0.1250780691733577;
		shelfup3.visible = false;
		shelfup3.body.setSize(1007, 85, false);

		// green_2
		const green_2 = this.add.image(145, -888, "red_plain");
		green_2.scaleX = 15.964687337484047;
		green_2.scaleY = 0.014266231936905908;
		green_2.tintBottomLeft = 8355711;
		green_2.tintBottomRight = 7895160;

		// ceiling3
		const ceiling3 = this.add.tileSprite(267, -895, 10000, 78, "skirting_light");
		ceiling3.scaleX = 0.18021693427896895;
		ceiling3.scaleY = 0.18021693427896895;

		// smallchair
		const smallchair = this.physics.add.sprite(172, 631, "light_table_small");
		smallchair.scaleX = 0.20051634652048822;
		smallchair.scaleY = 0.20051634652048822;
		smallchair.body.setSize(376, 369, false);

		// shelf3
		const shelf3 = this.physics.add.sprite(655, 221, "light_wall_shelf");
		shelf3.scaleX = 0.11;
		shelf3.scaleY = 0.1;
		shelf3.visible = false;
		shelf3.body.setSize(1007, 85, false);

		// shelf2
		const shelf2 = this.physics.add.sprite(190, 93, "light_wall_shelf");
		shelf2.scaleX = 0.11;
		shelf2.scaleY = 0.1;
		shelf2.visible = false;
		shelf2.body.setSize(1007, 85, false);

		// painting3
		const painting3 = this.physics.add.sprite(2319, 320, "painting_03_light");
		painting3.scaleX = 0.15542625435127724;
		painting3.scaleY = 0.15542625435127724;
		painting3.alpha = 0.9;
		painting3.alphaTopLeft = 0.9;
		painting3.alphaTopRight = 0.9;
		painting3.alphaBottomLeft = 0.9;
		painting3.alphaBottomRight = 0.9;
		painting3.body.setSize(614, 432, false);

		// shelfup10
		const shelfup10 = this.physics.add.sprite(256, -2194, "light_wall_shelf");
		shelfup10.scaleX = 0.1;
		shelfup10.scaleY = 0.1250780691733577;
		shelfup10.visible = false;
		shelfup10.body.pushable = false;
		shelfup10.body.immovable = true;
		shelfup10.body.setSize(1007, 85, false);

		// shelfup11
		const shelfup11 = this.physics.add.sprite(849, -2009, "light_wall_shelf");
		shelfup11.scaleX = 0.1;
		shelfup11.scaleY = 0.1250780691733577;
		shelfup11.visible = false;
		shelfup11.body.setSize(1007, 85, false);

		// drawer
		const drawer = this.physics.add.sprite(1236, 602, "dark_five_draw");
		drawer.scaleX = 0.2232587625120514;
		drawer.scaleY = 0.2232587625120514;
		drawer.tintTopLeft = 13685209;
		drawer.tintTopRight = 13882339;
		drawer.tintBottomLeft = 12962019;
		drawer.body.pushable = false;
		drawer.body.immovable = true;
		drawer.body.setSize(677, 610, false);

		// painting7
		const painting7 = this.physics.add.sprite(530, -564, "painting_08_light");
		painting7.scaleX = 0.1342661895865273;
		painting7.scaleY = 0.1342661895865273;
		painting7.visible = false;
		painting7.body.setSize(454, 437, false);

		// catPlayer
		const catPlayer = new CatPlayer(this, 170, 500);
		this.add.existing(catPlayer);
		catPlayer.body.collideWorldBounds = true;

		// shelfup0
		const shelfup0 = this.physics.add.sprite(427, -1633, "light_wall_shelf");
		shelfup0.scaleX = 0.1250780691733577;
		shelfup0.scaleY = 0.1250780691733577;
		shelfup0.body.setSize(1007, 85, false);

		// largesofa
		const largesofa = this.physics.add.sprite(473, 594, "brown_2_seat");
		largesofa.scaleX = 0.18882599422520782;
		largesofa.scaleY = 0.18882599422520782;
		largesofa.tintTopLeft = 13685209;
		largesofa.tintTopRight = 13882339;
		largesofa.tintBottomLeft = 12962019;
		largesofa.body.pushable = false;
		largesofa.body.immovable = true;
		largesofa.body.setOffset(200, 10);
		largesofa.body.setSize(1000, 400, false);

		// rug_05
		const rug_05 = this.add.image(871, 682, "rug_05");
		rug_05.scaleX = 0.22595859407563645;
		rug_05.scaleY = 0.10422170287002115;

		// ceiling
		const ceiling = this.add.tileSprite(1184, -72, 10000, 78, "skirting_light");
		ceiling.scaleX = 0.18021693427896895;
		ceiling.scaleY = 0.11;
		ceiling.tintTopLeft = 7030856;
		ceiling.tintTopRight = 5650745;
		ceiling.tintBottomLeft = 5390143;
		ceiling.tintBottomRight = 7818573;

		// ellipse_5
		const ellipse_5 = this.add.ellipse(1049, -86, 128, 128);
		ellipse_5.scaleX = 0.14817706866492283;
		ellipse_5.scaleY = 0.059286282708922694;
		ellipse_5.alpha = 0.4;
		ellipse_5.isFilled = true;
		ellipse_5.fillColor = 1709333;

		// lamp_05
		const lamp_05 = this.add.nineslice(1049, 21, "lamp_21", undefined, 321, 957, 2, 4, 102, 304);
		lamp_05.scaleX = 0.21873234430790878;
		lamp_05.scaleY = 0.21873234430790878;

		// painting2
		const painting2 = this.physics.add.sprite(918, 331, "painting_07_light");
		painting2.scaleX = 0.22779314901492387;
		painting2.scaleY = 0.22779314901492387;
		painting2.alpha = 0.9;
		painting2.alphaTopLeft = 0.9;
		painting2.alphaTopRight = 0.9;
		painting2.alphaBottomLeft = 0.9;
		painting2.alphaBottomRight = 0.9;
		painting2.body.setOffset(0, 20);
		painting2.body.setSize(263, 320, false);

		// shelf
		const shelf = this.add.image(654, 233, "shelf");
		shelf.scaleX = 0.40577814114638955;
		shelf.scaleY = 0.2916337205194913;

		// shelf_1
		const shelf_1 = this.add.image(190, 105, "shelf");
		shelf_1.scaleX = 0.40577814114638955;
		shelf_1.scaleY = 0.2916337205194913;

		// painting
		const painting = this.physics.add.sprite(183, -446, "painting_02_white");
		painting.scaleX = 0.15498189889939404;
		painting.scaleY = 0.15498189889939404;
		painting.body.setOffset(0, 20);
		painting.body.setSize(300, 450, false);

		// painting1
		const painting1 = this.physics.add.sprite(405, 228, "painting_06_light");
		painting1.scaleX = 0.216846372209413;
		painting1.scaleY = 0.216846372209413;
		painting1.body.setOffset(0, 20);
		painting1.body.setSize(263, 320, false);

		// lamp
		const lamp = this.physics.add.sprite(330, -825, "lamp_21");
		lamp.scaleX = 0.21873234430790878;
		lamp.scaleY = 0.21873234430790878;
		lamp.visible = false;
		lamp.body.setSize(321, 529, false);

		// plant2
		const plant2 = this.physics.add.sprite(647, 173, "house_plant_example_09");
		plant2.scaleX = 0.09734482766973596;
		plant2.scaleY = 0.09734482766973596;
		plant2.body.acceleration.y = 1000;
		plant2.body.bounce.y = 0.3;
		plant2.body.checkCollision.up = false;
		plant2.body.setOffset(160, 130);
		plant2.body.setSize(200, 680, false);

		// plant1
		const plant1 = this.physics.add.sprite(1225, 484, "house_plant_example_09");
		plant1.scaleX = 0.09734482766973596;
		plant1.scaleY = 0.09734482766973596;
		plant1.body.gravity.y = 1000;
		plant1.body.bounce.y = 0.3;
		plant1.body.checkCollision.up = false;
		plant1.body.setOffset(160, 130);
		plant1.body.setSize(200, 680, false);

		// shelf_2
		const shelf_2 = this.add.image(264, -685, "shelf");
		shelf_2.scaleX = 0.40577814114638955;
		shelf_2.scaleY = 0.29741026319637964;

		// shelf_3
		const shelf_3 = this.add.image(1282, -649, "shelf");
		shelf_3.scaleX = 0.40577814114638955;
		shelf_3.scaleY = 0.2974102631963753;

		// plant4
		const plant4 = this.physics.add.sprite(258, -750, "house_plant_example_09");
		plant4.scaleX = 0.09734482766973596;
		plant4.scaleY = 0.09734482766973596;
		plant4.body.gravity.y = 1000;
		plant4.body.bounce.y = 0.3;
		plant4.body.checkCollision.up = false;
		plant4.body.setOffset(120, 0);
		plant4.body.setSize(300, 870, false);

		// plant3
		const plant3 = this.physics.add.sprite(1278, -704, "house_plant_example_09");
		plant3.scaleX = 0.09734482766973596;
		plant3.scaleY = 0.09734482766973596;
		plant3.body.gravity.y = 1000;
		plant3.body.bounce.y = 0.3;
		plant3.body.checkCollision.up = false;
		plant3.body.setOffset(120, 0);
		plant3.body.setSize(300, 870, false);

		// painting21
		const painting21 = this.physics.add.sprite(938, -588, "painting_07_light");
		painting21.scaleX = 0.19799165474363759;
		painting21.scaleY = 0.19799165474363759;
		painting21.alpha = 0.9;
		painting21.alphaTopLeft = 0.9;
		painting21.alphaTopRight = 0.9;
		painting21.alphaBottomLeft = 0.9;
		painting21.alphaBottomRight = 0.9;
		painting21.body.setSize(263, 320, false);

		// paintinglampfl
		const paintinglampfl = this.physics.add.sprite(147, -1067, "painting_07_light");
		paintinglampfl.scaleX = 0.19799165474363759;
		paintinglampfl.scaleY = 0.19799165474363759;
		paintinglampfl.visible = false;
		paintinglampfl.alpha = 0.9;
		paintinglampfl.alphaTopLeft = 0.9;
		paintinglampfl.alphaTopRight = 0.9;
		paintinglampfl.alphaBottomLeft = 0.9;
		paintinglampfl.alphaBottomRight = 0.9;
		paintinglampfl.body.setSize(263, 320, false);

		// paintinglampceil
		const paintinglampceil = this.physics.add.sprite(1048, 101, "painting_07_light");
		paintinglampceil.scaleX = 0.19799165474363759;
		paintinglampceil.scaleY = 0.19799165474363759;
		paintinglampceil.visible = false;
		paintinglampceil.alpha = 0.9;
		paintinglampceil.alphaTopLeft = 0.9;
		paintinglampceil.alphaTopRight = 0.9;
		paintinglampceil.alphaBottomLeft = 0.9;
		paintinglampceil.alphaBottomRight = 0.9;
		paintinglampceil.body.setSize(263, 320, false);

		// fallpainting1
		const fallpainting1 = new fallpainting(this, 801, -381);
		this.add.existing(fallpainting1);

		// lamp_1
		const lamp_1 = this.add.nineslice(530, -709, "lamp_21", undefined, 321, 1598, 2, 4, 102, 304);
		lamp_1.scaleX = 0.21873234430790878;
		lamp_1.scaleY = 0.21873234430790878;

		// bat2
		const bat2 = new Bat(this, 1410, -461);
		this.add.existing(bat2);
		bat2.scaleX = 0.13600002568516462;
		bat2.scaleY = 0.13600002568516462;
		bat2.body.velocity.x = -400;
		bat2.body.velocity.y = 0;
		bat2.body.collideWorldBounds = true;

		// ellipse
		const ellipse = this.add.ellipse(530, -883, 128, 128);
		ellipse.scaleX = 0.14817706866492283;
		ellipse.scaleY = 0.059286282708922694;
		ellipse.alpha = 0.4;
		ellipse.isFilled = true;
		ellipse.fillColor = 1709333;

		// paintingup1
		const paintingup1 = this.physics.add.sprite(215, -1454, "painting_07_light");
		paintingup1.scaleX = 0.19799165474363759;
		paintingup1.scaleY = 0.19799165474363759;
		paintingup1.alpha = 0.9;
		paintingup1.alphaTopLeft = 0.9;
		paintingup1.alphaTopRight = 0.9;
		paintingup1.alphaBottomLeft = 0.9;
		paintingup1.alphaBottomRight = 0.9;
		paintingup1.body.setOffset(0, 100);
		paintingup1.body.setSize(263, 320, false);

		// paintingup2
		const paintingup2 = this.physics.add.sprite(673, -1804, "painting_06_gold");
		paintingup2.scaleX = 0.19799165474363759;
		paintingup2.scaleY = 0.19799165474363759;
		paintingup2.alpha = 0.9;
		paintingup2.alphaTopLeft = 0.9;
		paintingup2.alphaTopRight = 0.9;
		paintingup2.alphaBottomLeft = 0.9;
		paintingup2.alphaBottomRight = 0.9;
		paintingup2.body.setOffset(0, 100);
		paintingup2.body.setSize(263, 320, false);

		// green_3
		const green_3 = this.add.image(724, -2469, "red_plain");
		green_3.scaleX = 11.048934310917604;
		green_3.scaleY = 0.014929187795925244;
		green_3.tintBottomLeft = 7955042;
		green_3.tintBottomRight = 7691099;

		// ceiling_1
		const ceiling_1 = this.add.tileSprite(877, -2456, 10000, 78, "skirting_light");
		ceiling_1.scaleX = 0.18021693427896895;
		ceiling_1.scaleY = 0.11;
		ceiling_1.tintTopLeft = 7030856;
		ceiling_1.tintTopRight = 5650745;
		ceiling_1.tintBottomLeft = 5390143;
		ceiling_1.tintBottomRight = 7818573;

		// lamp_2
		const lamp_2 = this.add.nineslice(579, -2299, "lamp_21", undefined, 321, 1598, 2, 4, 102, 304);
		lamp_2.scaleX = 0.21873234430790878;
		lamp_2.scaleY = 0.21873234430790878;

		// paintingup3
		const paintingup3 = this.physics.add.sprite(891, -1452, "painting_07_light");
		paintingup3.scaleX = 0.19799165474363759;
		paintingup3.scaleY = 0.19799165474363759;
		paintingup3.alpha = 0.9;
		paintingup3.alphaTopLeft = 0.9;
		paintingup3.alphaTopRight = 0.9;
		paintingup3.alphaBottomLeft = 0.9;
		paintingup3.alphaBottomRight = 0.9;
		paintingup3.body.setOffset(0, 100);
		paintingup3.body.setSize(263, 320, false);

		// plant5
		const plant5 = this.physics.add.sprite(859, -2058, "house_plant_example_09");
		plant5.scaleX = 0.09734482766973596;
		plant5.scaleY = 0.09734482766973596;
		plant5.body.gravity.y = 1000;
		plant5.body.bounce.y = 0.3;
		plant5.body.checkCollision.up = false;
		plant5.body.setOffset(110, 130);
		plant5.body.setSize(300, 700, false);

		// plant6
		const plant6 = this.physics.add.sprite(230, -2264, "house_plant_example_09");
		plant6.scaleX = 0.09734482766973596;
		plant6.scaleY = 0.09734482766973596;
		plant6.body.gravity.y = 1000;
		plant6.body.bounce.y = 0.3;
		plant6.body.checkCollision.up = false;
		plant6.body.setOffset(110, 130);
		plant6.body.setSize(300, 700, false);

		// paintingup4
		const paintingup4 = this.physics.add.sprite(578, -2153, "painting_07_light");
		paintingup4.scaleX = 0.19799165474363759;
		paintingup4.scaleY = 0.19799165474363759;
		paintingup4.visible = false;
		paintingup4.alpha = 0.9;
		paintingup4.alphaTopLeft = 0.9;
		paintingup4.alphaTopRight = 0.9;
		paintingup4.alphaBottomLeft = 0.9;
		paintingup4.alphaBottomRight = 0.9;
		paintingup4.body.setSize(263, 320, false);

		// paintingup6
		const paintingup6 = this.physics.add.sprite(1166, -1591, "painting_05_gold");
		paintingup6.scaleX = 0.19799165474363759;
		paintingup6.scaleY = 0.19799165474363759;
		paintingup6.alpha = 0.9;
		paintingup6.alphaTopLeft = 0.9;
		paintingup6.alphaTopRight = 0.9;
		paintingup6.alphaBottomLeft = 0.9;
		paintingup6.alphaBottomRight = 0.9;
		paintingup6.body.setOffset(0, 100);
		paintingup6.body.setSize(263, 320, false);

		// paintingup5
		const paintingup5 = this.physics.add.sprite(1034, -1821, "painting_06_light");
		paintingup5.scaleX = 0.19799165474363759;
		paintingup5.scaleY = 0.19799165474363759;
		paintingup5.alpha = 0.9;
		paintingup5.alphaTopLeft = 0.9;
		paintingup5.alphaTopRight = 0.9;
		paintingup5.alphaBottomLeft = 0.9;
		paintingup5.alphaBottomRight = 0.9;
		paintingup5.body.setOffset(0, 100);
		paintingup5.body.setSize(263, 320, false);

		// shelf_4
		const shelf_4 = this.add.image(426, -1622, "shelf");
		shelf_4.scaleX = 0.46103840870655627;
		shelf_4.scaleY = 0.3269118718921787;

		// shelf_5
		const shelf_5 = this.add.image(156, -1909, "shelf");
		shelf_5.scaleX = 0.46103840870655627;
		shelf_5.scaleY = 0.3269118718921787;

		// shelf_6
		const shelf_6 = this.add.image(255, -2183, "shelf");
		shelf_6.scaleX = 0.46103840870655627;
		shelf_6.scaleY = 0.3269118718921787;

		// shelf_7
		const shelf_7 = this.add.image(849, -1999, "shelf");
		shelf_7.scaleX = 0.44423082839347233;
		shelf_7.scaleY = 0.3103905173088398;

		// paintingup7
		const paintingup7 = this.physics.add.sprite(1094, -2123, "painting_07_light");
		paintingup7.scaleX = 0.19799165474363759;
		paintingup7.scaleY = 0.19799165474363759;
		paintingup7.alpha = 0.9;
		paintingup7.alphaTopLeft = 0.9;
		paintingup7.alphaTopRight = 0.9;
		paintingup7.alphaBottomLeft = 0.9;
		paintingup7.alphaBottomRight = 0.9;
		paintingup7.body.setOffset(0, 100);
		paintingup7.body.setSize(263, 320, false);

		// shelfup
		const shelfup = this.physics.add.sprite(1271, -2239, "light_wall_shelf");
		shelfup.scaleX = 0.1250780691733577;
		shelfup.scaleY = 0.1250780691733577;
		shelfup.visible = false;
		shelfup.body.pushable = false;
		shelfup.body.immovable = true;
		shelfup.body.setSize(1007, 85, false);

		// shelflast
		const shelflast = this.physics.add.sprite(1271, -2229, "shelf");
		shelflast.scaleX = 0.46765832465721824;
		shelflast.scaleY = 0.31372496653513393;
		shelflast.body.setSize(309, 127, false);

		// houseplant
		const houseplant = this.physics.add.sprite(1270, -2294, "house_plant_example_01");
		houseplant.scaleX = 0.16540374257770263;
		houseplant.scaleY = 0.16540374257770263;
		houseplant.body.gravity.y = 1000;
		houseplant.body.bounce.y = 0.3;
		houseplant.body.setOffset(0, -50);
		houseplant.body.setSize(440, 433, false);

		// fallpainting2
		const fallpainting2 = new fallpainting(this, 614.2655473418627, -1280.1797186567792);
		this.add.existing(fallpainting2);

		// spiderroom1
		const spiderroom1 = new Spider(this, 717, -773);
		this.add.existing(spiderroom1);
		spiderroom1.scaleX = 0.2557486287841334;
		spiderroom1.scaleY = 0.2557486287841334;

		// spiderroom2
		const spiderroom2 = new Spider(this, 640, -1489);
		this.add.existing(spiderroom2);
		spiderroom2.scaleX = 0.2557486287841334;
		spiderroom2.scaleY = 0.2557486287841334;

		// spiderroom
		const spiderroom = new Spider(this, 729, 24);
		this.add.existing(spiderroom);
		spiderroom.scaleX = 0.2557486287841334;
		spiderroom.scaleY = 0.2557486287841334;

		// spiderroom3
		const spiderroom3 = new Spider(this, 643, -2398);
		this.add.existing(spiderroom3);
		spiderroom3.scaleX = 0.2557486287841334;
		spiderroom3.scaleY = 0.2557486287841334;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(714, -996, 128, 128);
		rectangle_1.scaleX = 16.695998173946073;
		rectangle_1.scaleY = -27.671803815744955;
		rectangle_1.visible = false;
		rectangle_1.alpha = 0.15;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 11411231;

		// indoorwindow1
		const indoorwindow1 = new IndoorWindow(this, 173, 270);
		this.add.existing(indoorwindow1);
		indoorwindow1.scaleX = 0.8221541225951747;
		indoorwindow1.scaleY = 0.8221541225951747;

		this.ceiling2 = ceiling2;
		this.bookcase = bookcase;
		this.brownseat = brownseat;
		this.wardrobe = wardrobe;
		this.bed = bed;
		this.bottom = bottom;
		this.paint3 = paint3;
		this.paint4 = paint4;
		this.ceiling1 = ceiling1;
		this.shelfup2 = shelfup2;
		this.shelfup1 = shelfup1;
		this.shelfup3 = shelfup3;
		this.ceiling3 = ceiling3;
		this.smallchair = smallchair;
		this.shelf3 = shelf3;
		this.shelf2 = shelf2;
		this.painting3 = painting3;
		this.shelfup10 = shelfup10;
		this.shelfup11 = shelfup11;
		this.drawer = drawer;
		this.painting7 = painting7;
		this.catPlayer = catPlayer;
		this.shelfup0 = shelfup0;
		this.largesofa = largesofa;
		this.ceiling = ceiling;
		this.painting2 = painting2;
		this.painting = painting;
		this.painting1 = painting1;
		this.lamp = lamp;
		this.plant2 = plant2;
		this.plant1 = plant1;
		this.plant4 = plant4;
		this.plant3 = plant3;
		this.painting21 = painting21;
		this.paintinglampfl = paintinglampfl;
		this.paintinglampceil = paintinglampceil;
		this.fallpainting1 = fallpainting1;
		this.bat2 = bat2;
		this.paintingup1 = paintingup1;
		this.paintingup2 = paintingup2;
		this.ceiling_1 = ceiling_1;
		this.paintingup3 = paintingup3;
		this.plant5 = plant5;
		this.plant6 = plant6;
		this.paintingup4 = paintingup4;
		this.paintingup6 = paintingup6;
		this.paintingup5 = paintingup5;
		this.paintingup7 = paintingup7;
		this.shelfup = shelfup;
		this.shelflast = shelflast;
		this.houseplant = houseplant;
		this.fallpainting2 = fallpainting2;
		this.spiderroom1 = spiderroom1;
		this.spiderroom2 = spiderroom2;
		this.spiderroom = spiderroom;
		this.spiderroom3 = spiderroom3;
		this.indoorwindow1 = indoorwindow1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bookcase;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	brownseat;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	wardrobe;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bed;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bottom;
	/** @type {Phaser.GameObjects.Image} */
	paint3;
	/** @type {Phaser.GameObjects.Image} */
	paint4;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup3;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	smallchair;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup10;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup11;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	drawer;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting7;
	/** @type {CatPlayer} */
	catPlayer;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup0;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	largesofa;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lamp;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting21;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintinglampfl;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintinglampceil;
	/** @type {fallpainting} */
	fallpainting1;
	/** @type {Bat} */
	bat2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingup1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingup2;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingup3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingup4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingup6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingup5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingup7;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelflast;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	houseplant;
	/** @type {fallpainting} */
	fallpainting2;
	/** @type {Spider} */
	spiderroom1;
	/** @type {Spider} */
	spiderroom2;
	/** @type {Spider} */
	spiderroom;
	/** @type {Spider} */
	spiderroom3;
	/** @type {IndoorWindow} */
	indoorwindow1;

	/* START-USER-CODE */

	// Write your code here

	create() {

spidericon=true;

		this.UpdateGroup=this.add.group();
		this.CheeseGroup=this.add.group();
		this.DirtGroup=this.add.group();
			this.FlowerGroup=this.add.group();
			this.EnemyGroup=this.add.group();

this.goaltheme=this.sound.add('missiongoal');
this.leveltheme=this.sound.add('maintheme');
this.leveltheme.play();

		   const camera2 = this.cameras.main;

    // 2. Apply the Vignette effect to the camera's post-FX pipeline
    // This returns an FX Controller object, allowing you to manipulate the effect.
   // const vignetteFX = camera2.postFX.addVignette(
      //  0.5,     // X Offset (normalized, 0.5 is center)
      //  0.5,     // Y Offset (normalized, 0.5 is center)
      //  0.7,     // Radius (normalized, how far the effect reaches)
      //  0.4      // Strength (how dark the edges get)
	//);

// Applies the effect to the main camera
const crtPlugin = this.plugins.get('rexcrtpipelineplugin'); 

//const crtEffect = crtPlugin.add(this.cameras.main, {
    // You can adjust these values for your desired look
  //warpX: 0,
    //warpY: 0,
    //scanLineStrength: 0.3,   // Screen height to determine scanline thickness (e.g., your game height)
    // Add other properties like 'glow', 'bloom', 'vignette' if desired
//});

	this.BombsGroup=this.add.group();

		this.editorCreate();

		this.lights.enable();

   		 this.lights.setAmbientColor(0x3b3635);

    	//flashlight = this.lights.addPointLight(
        //this.largesofa.x, this.largesofa.y, 200, 0x3b3635, 1.0);

		this.cheesecatchtheme=this.sound.add('GetMouse');

		this.test();

		this.spiderroom1.Moving=true;
		this.spiderroom2.Moving=true;
		this.spiderroom3.Moving=true;
		this.spiderroom.Moving=true;


		this.EnemyGroup.add(this.spiderroom.spider1);
		this.EnemyGroup.add(this.spiderroom1.spider1);
		this.EnemyGroup.add(this.spiderroom2.spider1);
		this.EnemyGroup.add(this.spiderroom3.spider1);
		this.EnemyGroup.add(this.bat2);

		this.AddingRatsStuff();
//6
		MissionCount=1;

		this.PanHeight=-100;

	//	this.spiderroom.Moving=true;
		this.physics.world.setBounds(0, -2700,1400, 3400);
		this.cameras.main.setBounds(0,this.PanHeight,1400, 800);
		this.cameras.main.setZoom(0.72);

		this.cameras.main.startFollow(this.catPlayer,false,0,0,0.2,0.2);

		this.physics.add.collider(this.BombsGroup,this.ceiling3,this.explode,null,this);
		this.physics.add.collider(this.catPlayer,this.bed,this.JumpUp,null,this);
		this.physics.add.overlap(this.catPlayer,this.FlowerGroup,this.CatchSpider,null,this);

		this.plant1.item="flower";
		this.plant2.item="flower";
		this.plant3.item="flower";
		this.plant4.item="flower";
		this.plant5.item="flower";
		this.plant6.item="flower";

		this.ceiling1.dirt="nodirt";
		this.ceiling3.dirt="nodirt";

		this.physics.world.enable(this.ceiling1);
		this.physics.world.enable(this.ceiling);
		this.physics.world.enable(this.ceiling3);
		this.ceiling1.body.setImmovable(true);
		this.ceiling3.body.setImmovable(true);
		this.ceiling.body.setImmovable(true);

		this.physics.add.collider(this.catPlayer,this.bottom);

		this.physics.add.collider(this.drawer,this.plant1);
		this.physics.add.collider(this.catPlayer,this.plant1,this.push,null,this);
		this.physics.add.collider(this.plant1,this.bottom,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.shelf3,this.plant2);
		this.physics.add.collider(this.catPlayer,this.plant2,this.push,null,this);
		this.physics.add.collider(this.plant2,this.bottom,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.shelfup3,this.plant3);
		this.physics.add.collider(this.catPlayer,this.plant3,this.push,null,this);
		this.physics.add.collider(this.plant3,this.ceiling1,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.shelfup1,this.plant4);
		this.physics.add.collider(this.catPlayer,this.plant4,this.push,null,this);
		this.physics.add.collider(this.plant4,this.bottom,this.DropAndLeaveMark,null,this);
		this.physics.add.collider(this.plant4,this.ceiling1,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.shelfup11,this.plant5);
		this.physics.add.collider(this.catPlayer,this.plant5,this.push,null,this);
		this.physics.add.collider(this.plant5,this.ceiling3,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.shelfup10,this.plant6);
		this.physics.add.collider(this.catPlayer,this.plant6,this.push,null,this);
		this.physics.add.collider(this.plant6,this.ceiling3,this.DropAndLeaveMark,null,this);


		this.physics.add.collider(this.shelflast,this.houseplant);
		this.physics.add.collider(this.catPlayer,this.houseplant,this.push,null,this);
		this.physics.add.collider(this.houseplant,this.ceiling3,this.DropAndLeaveMark,null,this);
		this.physics.add.collider(this.houseplant,this.ceiling1,this.DropAndLeaveMark,null,this);
		this.physics.add.collider(this.houseplant,this.bottom,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.catPlayer,this.ceiling1);
		this.physics.add.collider(this.catPlayer,this.ceiling3);
		this.physics.add.overlap(this.catPlayer,this.CheeseGroup,this.CatchSpider,null,this);
		this.physics.add.overlap(this.catPlayer,this.painting2,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.painting1,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.painting7,this.StickToObject,null,this);
		//this.physics.add.overlap(this.catPlayer,this.paintinglampfl,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintinglampceil,this.StickToObject,null,this);

		this.physics.add.overlap(this.catPlayer,this.painting,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.painting21,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintingup1,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintingup2,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintingup3,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintingup4,this.StickToObject,null,this);

		this.physics.add.overlap(this.catPlayer,this.paintingup5,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintingup6,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintingup7,this.StickToObject,null,this);


		this.physics.add.collider(this.fallpainting1.block,this.catPlayer,this.MakeObjectImmovabke,null,this);
		this.physics.add.collider(this.fallpainting1,this.ceiling1,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.fallpainting2.block,this.catPlayer,this.MakeObjectImmovabke,null,this);
		this.physics.add.collider(this.fallpainting2,this.ceiling3,this.DropAndLeaveMark,null,this);

		this.physics.add.overlap(this.catPlayer,this.EnemyGroup,this.GetHit,null,this);

		this.physics.add.overlap(this.catPlayer,this.indoorwindow1.waythrough,this.JumpOut,null,this);




		//this.physics.add.collider(this.catPlayer,this.bed);

		this.CreatePlatform(this.drawer);
		//this.CreatePlatform(this.bed);
		this.CreatePlatform(this.shelf3);
		this.CreatePlatform(this.shelf2);

		this.CreatePlatform(this.shelfup1);
		this.CreatePlatform(this.shelfup2);
		this.CreatePlatform(this.shelfup3);
		this.CreatePlatform(this.shelfup10);
		this.CreatePlatform(this.shelfup11);
		this.CreatePlatform(this.shelfup0);
		this.CreatePlatform(this.bookcase);
		this.CreatePlatform(this.smallchair);
		this.CreatePlatform(this.brownseat);
		this.CreatePlatform(this.paint3);
		this.CreatePlatform(this.paint4);
		this.CreatePlatform(this.largesofa);
		this.CreatePlatform(this.wardrobe);
		this.CreatePlatform(this.shelflast);
		//	this.CreatePlatform(this.shelve);
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
		LevelSpider4Clear=true;

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

	console.log('panheight : '+this.PanHeight);
//if(flashlight)
//{
		//flashlight.setX(this.catPlayer.x);
 		//flashlight.setY(this.catPlayer.y);
//console.log('cat y: ' + this.catPlayer.y);

//}





		console.log('height cat '+this.catPlayer.y);



if(this.catPlayer.y<-140 && this.catPlayer.y>-900){

		if(this.PanHeight>=-900){
			this.cameras.main.setBounds(0,this.PanHeight-=20,1400, 800);
			this.cameras.main.startFollow(this.catPlayer,false,0,0);
								}

									if(this.PanHeight<-900){
			this.cameras.main.setBounds(0,this.PanHeight+=20,1400, 800);
			this.cameras.main.startFollow(this.catPlayer,false,0,0);
								}
}


	if(this.catPlayer.y>-140){
	if(this.PanHeight<-100){
			this.cameras.main.setBounds(0,this.PanHeight+=20,1400, 800);
			this.cameras.main.startFollow(this.catPlayer,false,0,0);
								}
	}

	if(this.catPlayer.y<=-900){


		if(this.PanHeight>=-1680){

			this.cameras.main.setBounds(0,this.PanHeight-=20,1400, 800);
			this.cameras.main.startFollow(this.catPlayer,false,500,0.5,0,100);
								};

		if(this.PanHeight<-1680){

			this.cameras.main.setBounds(0,-2480,1400, 1600);

		};
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
