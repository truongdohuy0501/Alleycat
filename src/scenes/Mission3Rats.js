
// You can write more code here

/* START OF COMPILED CODE */

class Mission3Rats extends BaseScene {

	constructor() {
		super("Mission3Rats");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// redstripeabove
		const redstripeabove = this.add.image(2029, -82, "lime_green");
		redstripeabove.scaleX = 0.13359240217764048;
		redstripeabove.scaleY = 5.132801232728735;
		redstripeabove.angle = 90;
		redstripeabove.tintTopRight = 0;
		redstripeabove.tintBottomRight = 0;

		// triangle_1
		const triangle_1 = this.add.triangle(810, -79, 10, 128, 64, 10, 128, 128);
		triangle_1.scaleX = 0.9021120028648657;
		triangle_1.scaleY = -1.290941603063511;
		triangle_1.visible = false;
		triangle_1.alpha = 0.4;
		triangle_1.isFilled = true;
		triangle_1.fillColor = 0;

		// triangle
		const triangle = this.add.triangle(772, -79, 10, 128, 64, 10, 128, 128);
		triangle.scaleX = 1.1573620142635803;
		triangle.scaleY = -3.944863170624605;
		triangle.visible = false;
		triangle.alpha = 0.2;
		triangle.isFilled = true;
		triangle.fillColor = 0;

		// triangle_2
		const triangle_2 = this.add.triangle(634, -79, 10, 128, 64, 10, 128, 128);
		triangle_2.scaleX = 1.1573620142635803;
		triangle_2.scaleY = -3.944863170624605;
		triangle_2.visible = false;
		triangle_2.alpha = 0.2;
		triangle_2.isFilled = true;
		triangle_2.fillColor = 0;

		// triangle_3
		const triangle_3 = this.add.triangle(79, -79, 10, 128, 64, 10, 128, 128);
		triangle_3.scaleX = 1.1573620142635803;
		triangle_3.scaleY = -3.944863170624605;
		triangle_3.visible = false;
		triangle_3.alpha = 0.2;
		triangle_3.isFilled = true;
		triangle_3.fillColor = 0;

		// triangle_4
		const triangle_4 = this.add.triangle(116, -79, 10, 128, 64, 10, 128, 128);
		triangle_4.scaleX = 0.9021120028648648;
		triangle_4.scaleY = -1.290941603063511;
		triangle_4.visible = false;
		triangle_4.alpha = 0.4;
		triangle_4.isFilled = true;
		triangle_4.fillColor = 0;

		// triangle_15
		const triangle_15 = this.add.triangle(1311, -79, 10, 128, 64, 10, 128, 128);
		triangle_15.scaleX = 1.1573620142635803;
		triangle_15.scaleY = -3.944863170624605;
		triangle_15.visible = false;
		triangle_15.alpha = 0.2;
		triangle_15.isFilled = true;
		triangle_15.fillColor = 0;

		// triangle_16
		const triangle_16 = this.add.triangle(1450, -79, 10, 128, 64, 10, 128, 128);
		triangle_16.scaleX = 1.1573620142635772;
		triangle_16.scaleY = -3.944863170624605;
		triangle_16.visible = false;
		triangle_16.alpha = 0.2;
		triangle_16.isFilled = true;
		triangle_16.fillColor = 0;

		// triangle_5
		const triangle_5 = this.add.triangle(218, -79, 10, 128, 64, 10, 128, 128);
		triangle_5.scaleX = 1.1573620142635803;
		triangle_5.scaleY = -3.944863170624605;
		triangle_5.visible = false;
		triangle_5.alpha = 0.2;
		triangle_5.isFilled = true;
		triangle_5.fillColor = 0;

		// triangle_6
		const triangle_6 = this.add.triangle(257, -79, 10, 128, 64, 10, 128, 128);
		triangle_6.scaleX = 0.9021120028648641;
		triangle_6.scaleY = -1.290941603063511;
		triangle_6.visible = false;
		triangle_6.alpha = 0.4;
		triangle_6.isFilled = true;
		triangle_6.fillColor = 0;

		// triangle_7
		const triangle_7 = this.add.triangle(357, -79, 10, 128, 64, 10, 128, 128);
		triangle_7.scaleX = 1.1573620142635803;
		triangle_7.scaleY = -3.944863170624605;
		triangle_7.visible = false;
		triangle_7.alpha = 0.2;
		triangle_7.isFilled = true;
		triangle_7.fillColor = 0;

		// triangle_8
		const triangle_8 = this.add.triangle(393, -79, 10, 128, 64, 10, 128, 128);
		triangle_8.scaleX = 0.9021120028648673;
		triangle_8.scaleY = -1.290941603063511;
		triangle_8.visible = false;
		triangle_8.alpha = 0.4;
		triangle_8.isFilled = true;
		triangle_8.fillColor = 0;

		// triangle_9
		const triangle_9 = this.add.triangle(490, -79, 10, 128, 64, 10, 128, 128);
		triangle_9.scaleX = 1.1573620142635803;
		triangle_9.scaleY = -3.944863170624605;
		triangle_9.visible = false;
		triangle_9.alpha = 0.2;
		triangle_9.isFilled = true;
		triangle_9.fillColor = 0;

		// triangle_13
		const triangle_13 = this.add.triangle(1041, -79, 10, 128, 64, 10, 128, 128);
		triangle_13.scaleX = 1.1573620142635803;
		triangle_13.scaleY = -3.944863170624605;
		triangle_13.visible = false;
		triangle_13.alpha = 0.2;
		triangle_13.isFilled = true;
		triangle_13.fillColor = 0;

		// triangle_14
		const triangle_14 = this.add.triangle(1180, -79, 10, 128, 64, 10, 128, 128);
		triangle_14.scaleX = 1.1573620142635772;
		triangle_14.scaleY = -3.944863170624605;
		triangle_14.visible = false;
		triangle_14.alpha = 0.2;
		triangle_14.isFilled = true;
		triangle_14.fillColor = 0;

		// triangle_10
		const triangle_10 = this.add.triangle(531, -79, 10, 128, 64, 10, 128, 128);
		triangle_10.scaleX = 0.9021120028648657;
		triangle_10.scaleY = -1.290941603063511;
		triangle_10.visible = false;
		triangle_10.alpha = 0.4;
		triangle_10.isFilled = true;
		triangle_10.fillColor = 0;

		// triangle_11
		const triangle_11 = this.add.triangle(671, -79, 10, 128, 64, 10, 128, 128);
		triangle_11.scaleX = 0.9021120028648657;
		triangle_11.scaleY = -1.290941603063511;
		triangle_11.visible = false;
		triangle_11.alpha = 0.4;
		triangle_11.isFilled = true;
		triangle_11.fillColor = 0;

		// triangle_12
		const triangle_12 = this.add.triangle(911, -79, 10, 128, 64, 10, 128, 128);
		triangle_12.scaleX = 1.1573620142635772;
		triangle_12.scaleY = -3.944863170624605;
		triangle_12.visible = false;
		triangle_12.alpha = 0.2;
		triangle_12.isFilled = true;
		triangle_12.fillColor = 0;

		// backgroundwall
		const backgroundwall = this.add.tileSprite(2788, 305, 10000, 1382, "lime_green_large_stripe");
		backgroundwall.scaleX = 0.7;
		backgroundwall.scaleY = 0.5372854403333911;
		backgroundwall.tintTopLeft = 3684150;
		backgroundwall.tintTopRight = 4210752;
		backgroundwall.tileScaleX = 0.18;

		// green
		const green = this.physics.add.sprite(2854, 683, "lime_green");
		green.scaleX = 20;
		green.scaleY = 0.07857199677863769;
		green.flipY = true;
		green.tintTopLeft = 460551;
		green.tintTopRight = 986381;
		green.tintBottomLeft = 16316664;
		green.body.setSize(128, 1382, false);

		// crack1
		const crack1 = this.add.image(2840, 671, "crack");
		crack1.scaleX = 0.2491242617560107;
		crack1.scaleY = 0.5515120588500813;
		crack1.angle = -90;
		crack1.visible = false;

		// crack2
		const crack2 = this.add.image(4475, 667, "crack");
		crack2.scaleX = 0.2491242617560107;
		crack2.scaleY = 0.5515120588500813;
		crack2.angle = -90;
		crack2.visible = false;

		// skirtinglight
		const skirtinglight = this.add.tileSprite(2500, 630, 10000, 63, "skirting_light");
		skirtinglight.scaleX = 0.8;
		skirtinglight.scaleY = 0.2528690000816929;

		// littletable
		const littletable = this.physics.add.sprite(160, 622, "light_table_round");
		littletable.scaleX = 0.5122056698979438;
		littletable.scaleY = 0.5122056698979438;
		littletable.body.setOffset(0, 20);
		littletable.body.setSize(210, 200, false);

		// bottom
		const bottom = this.physics.add.sprite(3202, 678, "block_separator_01");
		bottom.scaleX = 12;
		bottom.scaleY = 0.5823602337408151;
		bottom.visible = false;
		bottom.body.pushable = false;
		bottom.body.immovable = true;
		bottom.body.setSize(695, 40, false);

		// lighttable
		const lighttable = this.physics.add.sprite(2839, 627, "light_table_small");
		lighttable.scaleX = 0.21216700377137138;
		lighttable.scaleY = 0.21216700377137138;
		lighttable.visible = false;
		lighttable.body.setOffset(0, 40);
		lighttable.body.setSize(376, 300, false);

		// opendoor1
		const opendoor1 = this.physics.add.sprite(4512, 488, "dark_wardrobe_door_open");
		opendoor1.scaleX = 0.3990294319411307;
		opendoor1.scaleY = 0.3879795166868173;
		opendoor1.flipX = true;
		opendoor1.visible = false;
		opendoor1.body.setSize(375, 898, false);

		// opendoor2
		const opendoor2 = this.physics.add.sprite(383, 490, "dark_wardrobe_door_open");
		opendoor2.scaleX = 0.3990294319411307;
		opendoor2.scaleY = 0.38339805740730115;
		opendoor2.flipX = true;
		opendoor2.visible = false;
		opendoor2.body.setSize(375, 898, false);

		// shelfbird
		const shelfbird = this.physics.add.sprite(349, 175, "light_wall_shelf");
		shelfbird.scaleX = 0.11476203836684157;
		shelfbird.scaleY = 0.18471964985289846;
		shelfbird.visible = false;
		shelfbird.body.pushable = false;
		shelfbird.body.immovable = true;
		shelfbird.body.setSize(1007, 85, false);

		// shelf2
		const shelf2 = this.physics.add.sprite(2711, -643, "light_wall_shelf");
		shelf2.scaleX = 0.12;
		shelf2.scaleY = 0.10067991987257832;
		shelf2.body.setSize(1007, 85, false);

		// shelfplant1
		const shelfplant1 = this.physics.add.sprite(6761, -1151, "light_wall_shelf");
		shelfplant1.scaleX = 0.14;
		shelfplant1.scaleY = 0.1006799198725784;
		shelfplant1.body.setSize(1007, 85, false);

		// rug
		const rug = this.physics.add.image(1592, 285, "rug_02");
		rug.scaleX = 0.07564965023538095;
		rug.scaleY = 0.07564965023538095;
		rug.visible = false;
		rug.body.setSize(1222, 448, false);

		// tablelast
		const tablelast = this.physics.add.sprite(4474, 613, "light_wood_table");
		tablelast.scaleX = 0.1514629244949275;
		tablelast.scaleY = 0.1514629244949275;
		tablelast.body.setOffset(0, 70);
		tablelast.body.setSize(1606, 681, false);

		// painting3
		const painting3 = this.physics.add.sprite(5844, 254, "painting_03_light");
		painting3.scaleX = 0.1779781357342463;
		painting3.scaleY = 0.1779781357342463;
		painting3.alpha = 0.9;
		painting3.alphaTopLeft = 0.9;
		painting3.alphaTopRight = 0.9;
		painting3.alphaBottomLeft = 0.9;
		painting3.alphaBottomRight = 0.9;
		painting3.body.setSize(614, 432, false);

		// bookcasesec
		const bookcasesec = this.physics.add.sprite(1889, 1095, "dark_5_shelves");
		bookcasesec.scaleX = 0.24054278197684154;
		bookcasesec.scaleY = 0.24054278197684154;
		bookcasesec.body.setSize(1007, 85, false);

		// ceiling
		const ceiling = this.add.tileSprite(2852, -62, 10000, 78, "skirting_light");
		ceiling.scaleX = 0.8;
		ceiling.scaleY = 0.10053190960050892;
		ceiling.flipX = true;
		ceiling.flipY = true;
		ceiling.tintTopLeft = 11776947;
		ceiling.tintTopRight = 5723991;
		ceiling.tintBottomLeft = 9539985;
		ceiling.tintBottomRight = 7168867;

		// bookcasesec2
		const bookcasesec2 = this.physics.add.sprite(3493, 1303, "dark_5_shelves");
		bookcasesec2.scaleX = 0.24054278197684154;
		bookcasesec2.scaleY = 0.24054278197684154;
		bookcasesec2.body.setSize(1007, 85, false);

		// seatbrown
		const seatbrown = this.physics.add.sprite(2713, 1486, "brown_2_seat");
		seatbrown.scaleX = 0.20121456805802423;
		seatbrown.scaleY = 0.20121456805802423;
		seatbrown.body.pushable = false;
		seatbrown.body.immovable = true;
		seatbrown.body.setOffset(120, 10);
		seatbrown.body.setSize(700, 327, false);

		// long_rope_piece_1
		const long_rope_piece_1 = this.add.image(2840, 4, "long_rope_piece");
		long_rope_piece_1.scaleX = 0.1592984004884527;
		long_rope_piece_1.scaleY = 0.1592984004884527;

		// shelf
		const shelf = this.physics.add.sprite(6439, -976, "light_wall_shelf");
		shelf.scaleX = 0.15;
		shelf.scaleY = 0.12;
		shelf.body.setSize(1007, 85, false);

		// darfkdesk
		const darfkdesk = this.physics.add.sprite(5547, 554, "dark_desk");
		darfkdesk.scaleX = 0.18283828850223166;
		darfkdesk.scaleY = 0.18283828850223166;
		darfkdesk.body.setSize(1164, 572, false);

		// rock2
		const rock2 = this.physics.add.sprite(4472, 174, "swinging_spike_block");
		rock2.scaleX = 0.11513102683257345;
		rock2.scaleY = 0.11513102683257345;
		rock2.body.setOffset(0, 130);
		rock2.body.setSize(687, 600, false);

		// plant1
		const plant1 = this.physics.add.sprite(931, 109, "house_plant_example_07");
		plant1.scaleX = 0.06787854448998903;
		plant1.scaleY = 0.06787854448998903;
		plant1.body.gravity.y = 1000;
		plant1.body.checkCollision.up = false;
		plant1.body.setOffset(300, 0);
		plant1.body.setSize(200, 1099, false);

		// painting2
		const painting2 = this.physics.add.sprite(5471, 65, "painting_03_light");
		painting2.scaleX = 0.1779781357342463;
		painting2.scaleY = 0.1779781357342463;
		painting2.alpha = 0.9;
		painting2.alphaTopLeft = 0.9;
		painting2.alphaTopRight = 0.9;
		painting2.alphaBottomLeft = 0.9;
		painting2.alphaBottomRight = 0.9;
		painting2.body.setSize(614, 432, false);

		// painting1
		const painting1 = this.physics.add.sprite(964, 1345, "painting_03_light");
		painting1.scaleX = 0.1779781357342463;
		painting1.scaleY = 0.1779781357342463;
		painting1.alpha = 0.9;
		painting1.alphaTopLeft = 0.9;
		painting1.alphaTopRight = 0.9;
		painting1.alphaBottomLeft = 0.9;
		painting1.alphaBottomRight = 0.9;
		painting1.body.setSize(614, 432, false);

		// shelf1
		const shelf1 = this.physics.add.sprite(2825, -690, "light_wall_shelf");
		shelf1.scaleX = 0.12;
		shelf1.scaleY = 0.10067991987257832;
		shelf1.body.setSize(1007, 85, false);

		// rock1
		const rock1 = this.physics.add.sprite(2842, 111, "swinging_spike_block");
		rock1.scaleX = 0.12211461496725509;
		rock1.scaleY = 0.12211461496725509;
		rock1.body.checkCollision.up = false;
		rock1.body.setOffset(0, 130);
		rock1.body.setSize(687, 600, false);

		// plant2
		const plant2 = this.physics.add.sprite(2109, -17, "house_plant_example_07");
		plant2.scaleX = 0.06551410113588173;
		plant2.scaleY = 0.06551410113588173;
		plant2.body.gravity.y = 1000;
		plant2.body.checkCollision.up = false;
		plant2.body.setOffset(300, 0);
		plant2.body.setSize(200, 1099, false);

		// shelf6
		const shelf6 = this.physics.add.sprite(5413, 92, "light_wall_shelf");
		shelf6.scaleX = 0.16;
		shelf6.scaleY = 0.10067991987257832;
		shelf6.body.setSize(1007, 85, false);

		// shelf3
		const shelf3 = this.physics.add.sprite(1460, 313, "light_wall_shelf");
		shelf3.scaleX = 0.11884520349383779;
		shelf3.scaleY = 0.11884520349383779;
		shelf3.body.setSize(1007, 85, false);

		// shelf4
		const shelf4 = this.physics.add.sprite(2738, -700, "light_wall_shelf");
		shelf4.scaleX = 0.12;
		shelf4.scaleY = 0.10067991987257832;
		shelf4.body.setSize(1007, 85, false);

		// long_rope_piece_2
		const long_rope_piece_2 = this.add.tileSprite(4470, 25, 63, 1042, "long_rope_piece");
		long_rope_piece_2.scaleX = 0.1592984004884527;
		long_rope_piece_2.scaleY = 0.2;

		// shelf5
		const shelf5 = this.physics.add.sprite(3235, 423, "light_wall_shelf");
		shelf5.scaleX = 0.15;
		shelf5.scaleY = 0.10067991987257832;
		shelf5.body.setSize(1007, 85, false);

		// catPlayer
		const catPlayer = new CatPlayer(this, 168, 477);
		this.add.existing(catPlayer);
		catPlayer.body.maxAngular = 2000;
		catPlayer.body.collideWorldBounds = true;

		// rat1
		const rat1 = new Rat(this, 1469, 283);
		this.add.existing(rat1);
		rat1.scaleX = 0.2200660209496515;
		rat1.scaleY = 0.2200660209496515;
		rat1.flipX = true;
		rat1.flipY = false;

		// rat2
		const rat2 = new Rat(this, 6443, -1008);
		this.add.existing(rat2);
		rat2.flipX = true;
		rat2.flipY = false;

		// rat3
		const rat3 = new Rat(this, 3238, 392);
		this.add.existing(rat3);
		rat3.scaleX = 0.22324733910270939;
		rat3.scaleY = 0.22324733910270939;
		rat3.flipX = true;
		rat3.flipY = false;
		rat3.body.velocity.x = 0;
		rat3.body.velocity.y = 0;

		// block2
		const block2 = this.physics.add.sprite(6558, -1005, "bubble-64px");
		block2.visible = false;
		block2.body.pushable = false;
		block2.body.immovable = true;
		block2.body.setSize(64, 64, false);

		// block1
		const block1 = this.physics.add.sprite(6321, -994, "bubble-64px");
		block1.visible = false;
		block1.body.pushable = false;
		block1.body.immovable = true;
		block1.body.setSize(64, 64, false);

		// block3
		const block3 = this.physics.add.sprite(1365, 286, "bubble-64px");
		block3.visible = false;
		block3.body.pushable = false;
		block3.body.immovable = true;
		block3.body.setSize(64, 64, false);

		// block4
		const block4 = this.physics.add.sprite(1568, 288, "bubble-64px");
		block4.visible = false;
		block4.body.pushable = false;
		block4.body.immovable = true;
		block4.body.setSize(64, 64, false);

		// block5
		const block5 = this.physics.add.sprite(3115, 410, "bubble-64px");
		block5.visible = false;
		block5.body.pushable = false;
		block5.body.immovable = true;
		block5.body.setSize(64, 64, false);

		// block6
		const block6 = this.physics.add.sprite(3359, 406, "bubble-64px");
		block6.visible = false;
		block6.body.pushable = false;
		block6.body.immovable = true;
		block6.body.setSize(64, 64, false);

		// plant4
		const plant4 = this.physics.add.sprite(2269, 367, "house_plant_example_07");
		plant4.scaleX = 0.06655527915807238;
		plant4.scaleY = 0.06655527915807238;
		plant4.body.gravity.y = 1000;
		plant4.body.checkCollision.up = false;
		plant4.body.setOffset(300, 0);
		plant4.body.setSize(200, 1099, false);

		// plant5
		const plant5 = this.physics.add.sprite(4439, 415, "house_plant_example_13");
		plant5.scaleX = 0.10119124618240202;
		plant5.scaleY = 0.10119124618240202;
		plant5.body.gravity.y = 1000;
		plant5.body.checkCollision.up = false;
		plant5.body.setOffset(130, 0);
		plant5.body.setSize(400, 800, false);

		// shelfround1
		const shelfround1 = this.physics.add.sprite(605, 182, "light_wall_shelf");
		shelfround1.scaleX = 0.14;
		shelfround1.scaleY = 0.1006799198725784;
		shelfround1.body.checkCollision.down = false;
		shelfround1.body.pushable = false;
		shelfround1.body.immovable = true;
		shelfround1.body.setSize(1007, 85, false);

		// shelfround2
		const shelfround2 = this.physics.add.sprite(905, 488, "light_wall_shelf");
		shelfround2.scaleX = 0.14;
		shelfround2.scaleY = 0.1006799198725784;
		shelfround2.body.checkCollision.down = false;
		shelfround2.body.pushable = false;
		shelfround2.body.immovable = true;
		shelfround2.body.setSize(1007, 85, false);

		// shelfround3
		const shelfround3 = this.physics.add.sprite(900, 185, "light_wall_shelf");
		shelfround3.scaleX = 0.14;
		shelfround3.scaleY = 0.1006799198725784;
		shelfround3.body.checkCollision.down = false;
		shelfround3.body.pushable = false;
		shelfround3.body.immovable = true;
		shelfround3.body.setSize(1007, 85, false);

		// ellipse
		const ellipse = this.add.ellipse(747, 327, 128, 128);
		ellipse.scaleX = 5.190321929178502;
		ellipse.scaleY = 5.190321929178502;
		ellipse.alpha = 0.1;
		ellipse.isFilled = true;

		// shelfround4
		const shelfround4 = this.physics.add.sprite(606, 488, "light_wall_shelf");
		shelfround4.scaleX = 0.14;
		shelfround4.scaleY = 0.1006799198725784;
		shelfround4.body.checkCollision.down = false;
		shelfround4.body.pushable = false;
		shelfround4.body.immovable = true;
		shelfround4.body.setSize(1007, 85, false);

		// shelfround5
		const shelfround5 = this.physics.add.sprite(2045, 180, "light_wall_shelf");
		shelfround5.scaleX = 0.14;
		shelfround5.scaleY = 0.1006799198725784;
		shelfround5.body.checkCollision.down = false;
		shelfround5.body.pushable = false;
		shelfround5.body.immovable = true;
		shelfround5.body.setSize(1007, 85, false);

		// shelfround8
		const shelfround8 = this.physics.add.sprite(2345, 486, "light_wall_shelf");
		shelfround8.scaleX = 0.14;
		shelfround8.scaleY = 0.1006799198725784;
		shelfround8.body.checkCollision.down = false;
		shelfround8.body.pushable = false;
		shelfround8.body.immovable = true;
		shelfround8.body.setSize(1007, 85, false);

		// shelfround6
		const shelfround6 = this.physics.add.sprite(2340, 183, "light_wall_shelf");
		shelfround6.scaleX = 0.14;
		shelfround6.scaleY = 0.1006799198725784;
		shelfround6.body.checkCollision.down = false;
		shelfround6.body.pushable = false;
		shelfround6.body.immovable = true;
		shelfround6.body.setSize(1007, 85, false);

		// shelfround7
		const shelfround7 = this.physics.add.sprite(2046, 486, "light_wall_shelf");
		shelfround7.scaleX = 0.14;
		shelfround7.scaleY = 0.1006799198725784;
		shelfround7.body.checkCollision.down = false;
		shelfround7.body.pushable = false;
		shelfround7.body.immovable = true;
		shelfround7.body.setSize(1007, 85, false);

		// shelfround9
		const shelfround9 = this.physics.add.sprite(3624, 157, "light_wall_shelf");
		shelfround9.scaleX = 0.14;
		shelfround9.scaleY = 0.1006799198725784;
		shelfround9.body.checkCollision.down = false;
		shelfround9.body.pushable = false;
		shelfround9.body.immovable = true;
		shelfround9.body.setSize(1007, 85, false);

		// shelfround12
		const shelfround12 = this.physics.add.sprite(3924, 463, "light_wall_shelf");
		shelfround12.scaleX = 0.14;
		shelfround12.scaleY = 0.1006799198725784;
		shelfround12.body.checkCollision.down = false;
		shelfround12.body.pushable = false;
		shelfround12.body.immovable = true;
		shelfround12.body.setSize(1007, 85, false);

		// shelfround10
		const shelfround10 = this.physics.add.sprite(3919, 160, "light_wall_shelf");
		shelfround10.scaleX = 0.14;
		shelfround10.scaleY = 0.1006799198725784;
		shelfround10.body.checkCollision.down = false;
		shelfround10.body.pushable = false;
		shelfround10.body.immovable = true;
		shelfround10.body.setSize(1007, 85, false);

		// shelfround11
		const shelfround11 = this.physics.add.sprite(3625, 463, "light_wall_shelf");
		shelfround11.scaleX = 0.14;
		shelfround11.scaleY = 0.1006799198725784;
		shelfround11.body.checkCollision.down = false;
		shelfround11.body.pushable = false;
		shelfround11.body.immovable = true;
		shelfround11.body.setSize(1007, 85, false);

		// stickpaint1
		const stickpaint1 = this.physics.add.sprite(1243, 374, "painting_06_light");
		stickpaint1.scaleX = 0.2050273630890479;
		stickpaint1.scaleY = 0.2050273630890479;
		stickpaint1.body.setSize(263, 320, false);

		// fallpainting1
		const fallpainting1 = new fallpainting(this, 1702, 263);
		this.add.existing(fallpainting1);

		// stickpainting3
		const stickpainting3 = this.physics.add.sprite(4229, 322, "painting_06_light");
		stickpainting3.scaleX = 0.2050273630890479;
		stickpainting3.scaleY = 0.2050273630890479;
		stickpainting3.body.setSize(263, 320, false);

		// lamp2
		const lamp2 = this.physics.add.sprite(3436, -25, "lamp_21");
		lamp2.scaleX = 0.21023222229072847;
		lamp2.scaleY = 0.21023222229072847;
		lamp2.body.setOffset(0, 200);
		lamp2.body.setSize(200, 200, false);

		// stickpaint2
		const stickpaint2 = this.physics.add.sprite(3024, 284, "painting_05_gold");
		stickpaint2.scaleX = 0.1771205790450432;
		stickpaint2.scaleY = 0.1771205790450432;
		stickpaint2.body.setSize(263, 320, false);

		// broom
		const broom = new Broom(this, 5903, 478);
		this.add.existing(broom);

		// plant7
		const plant7 = this.physics.add.sprite(3968, 43, "house_plant_example_07");
		plant7.scaleX = 0.06551410113588173;
		plant7.scaleY = 0.06551410113588173;
		plant7.body.gravity.y = 1000;
		plant7.body.checkCollision.up = false;
		plant7.body.setOffset(300, 0);
		plant7.body.setSize(200, 1099, false);

		// plant6
		const plant6 = this.physics.add.sprite(3637, -33, "house_plant_example_07");
		plant6.scaleX = 0.06551410113588173;
		plant6.scaleY = 0.06551410113588173;
		plant6.body.gravity.y = 1000;
		plant6.body.checkCollision.up = false;
		plant6.body.setOffset(300, 0);
		plant6.body.setSize(200, 1099, false);

		// slicer3
		const slicer3 = new SliceDevice(this, 3775, 293);
		this.add.existing(slicer3);
		slicer3.scaleX = 0.9988510713958322;
		slicer3.scaleY = 0.9988510713958322;
		slicer3.angle = -7;

		// slicer2
		const slicer2 = new SliceDevice(this, 2196, 316);
		this.add.existing(slicer2);
		slicer2.scaleX = 0.9988510713958322;
		slicer2.scaleY = 0.9988510713958322;
		slicer2.angle = -7;

		// ellipse_2
		const ellipse_2 = this.add.ellipse(2187, 325, 128, 128);
		ellipse_2.scaleX = 5.190321929178502;
		ellipse_2.scaleY = 5.190321929178502;
		ellipse_2.alpha = 0.1;
		ellipse_2.isFilled = true;

		// ellipse_3
		const ellipse_3 = this.add.ellipse(3766, 302, 128, 128);
		ellipse_3.scaleX = 5.190321929178502;
		ellipse_3.scaleY = 5.190321929178502;
		ellipse_3.alpha = 0.1;
		ellipse_3.isFilled = true;

		// rug_09
		const rug_09 = this.add.image(1503, 668, "rug_05");
		rug_09.scaleX = 0.22944260365890076;
		rug_09.scaleY = 0.08467994206924437;

		// dogInterior
		const dogInterior = new DogInterior(this, 1504, 562);
		this.add.existing(dogInterior);
		dogInterior.scaleX = 0.7832810955134533;
		dogInterior.scaleY = 0.7832810955134533;
		dogInterior.visible = true;

		// shelf_1
		const shelf_1 = this.physics.add.sprite(156, 115, "light_wall_shelf");
		shelf_1.scaleX = 0.11884520349383779;
		shelf_1.scaleY = 0.11884520349383779;
		shelf_1.body.setSize(1007, 85, false);

		// rat22
		const rat22 = new Rat(this, 165, 85);
		this.add.existing(rat22);
		rat22.scaleX = 0.2200660209496515;
		rat22.scaleY = 0.2200660209496515;
		rat22.flipX = true;
		rat22.flipY = false;
		rat22.body.velocity.x = 100;
		rat22.body.velocity.y = 0;

		// block1up
		const block1up = this.physics.add.sprite(29, 90, "bubble-64px");
		block1up.visible = false;
		block1up.body.pushable = false;
		block1up.body.immovable = true;
		block1up.body.setSize(64, 64, false);

		// block2up
		const block2up = this.physics.add.sprite(280, 90, "bubble-64px");
		block2up.visible = false;
		block2up.body.pushable = false;
		block2up.body.immovable = true;
		block2up.body.setSize(64, 64, false);

		// indoorwindow1
		const indoorwindow1 = new IndoorWindow(this, 158, 268);
		this.add.existing(indoorwindow1);

		// slicer1
		const slicer1 = new SliceDevice(this, 756, 318);
		this.add.existing(slicer1);
		slicer1.blendMode = Phaser.BlendModes.SOFT_LIGHT;
		slicer1.scaleX = 0.9988510713958322;
		slicer1.scaleY = 0.9988510713958322;
		slicer1.angle = -7;
		slicer1.alpha = 1;

		// ceiling_1
		const ceiling_1 = this.add.tileSprite(1981, -139, 10000, 78, "skirting_light");
		ceiling_1.scaleX = 0.5;
		ceiling_1.scaleY = 0.18714055984747086;
		ceiling_1.flipY = true;
		ceiling_1.tintTopLeft = 8749184;
		ceiling_1.tintBottomLeft = 6249307;
		ceiling_1.tintBottomRight = 10197915;

		// ellipse_4
		const ellipse_4 = this.add.ellipse(1248, -85, 128, 128);
		ellipse_4.scaleX = 0.3916825343304212;
		ellipse_4.scaleY = 0.07463723645206587;
		ellipse_4.alpha = 0.4;
		ellipse_4.isFilled = true;
		ellipse_4.fillColor = 657673;

		// lamp1
		const lamp1 = this.physics.add.sprite(1247, -29, "lamp_21");
		lamp1.scaleX = 0.21023222229072847;
		lamp1.scaleY = 0.21023222229072847;
		lamp1.body.setOffset(50, 450);
		lamp1.body.setSize(200, 200, false);

		// triangle_17
		const triangle_17 = this.add.triangle(1589, -81, 10, 128, 64, 10, 128, 128);
		triangle_17.scaleX = 1.1573620142635803;
		triangle_17.scaleY = -3.944863170624605;
		triangle_17.visible = false;
		triangle_17.alpha = 0.2;
		triangle_17.isFilled = true;
		triangle_17.fillColor = 0;

		// triangle_18
		const triangle_18 = this.add.triangle(1728, -81, 10, 128, 64, 10, 128, 128);
		triangle_18.scaleX = 1.1573620142635772;
		triangle_18.scaleY = -3.944863170624605;
		triangle_18.visible = false;
		triangle_18.alpha = 0.2;
		triangle_18.isFilled = true;
		triangle_18.fillColor = 0;

		// triangle_19
		const triangle_19 = this.add.triangle(1868, -83, 10, 128, 64, 10, 128, 128);
		triangle_19.scaleX = 1.1573620142635803;
		triangle_19.scaleY = -3.944863170624605;
		triangle_19.visible = false;
		triangle_19.alpha = 0.2;
		triangle_19.isFilled = true;
		triangle_19.fillColor = 0;

		// triangle_20
		const triangle_20 = this.add.triangle(2007, -83, 10, 128, 64, 10, 128, 128);
		triangle_20.scaleX = 1.1573620142635772;
		triangle_20.scaleY = -3.944863170624605;
		triangle_20.visible = false;
		triangle_20.alpha = 0.2;
		triangle_20.isFilled = true;
		triangle_20.fillColor = 0;

		// triangle_21
		const triangle_21 = this.add.triangle(2151, -83, 10, 128, 64, 10, 128, 128);
		triangle_21.scaleX = 1.1573620142635803;
		triangle_21.scaleY = -3.944863170624605;
		triangle_21.visible = false;
		triangle_21.alpha = 0.2;
		triangle_21.isFilled = true;
		triangle_21.fillColor = 0;

		// triangle_22
		const triangle_22 = this.add.triangle(2290, -83, 10, 128, 64, 10, 128, 128);
		triangle_22.scaleX = 1.1573620142635772;
		triangle_22.scaleY = -3.944863170624605;
		triangle_22.visible = false;
		triangle_22.alpha = 0.2;
		triangle_22.isFilled = true;
		triangle_22.fillColor = 0;

		// triangle_23
		const triangle_23 = this.add.triangle(2437, -81, 10, 128, 64, 10, 128, 128);
		triangle_23.scaleX = 1.1573620142635803;
		triangle_23.scaleY = -3.944863170624605;
		triangle_23.visible = false;
		triangle_23.alpha = 0.2;
		triangle_23.isFilled = true;
		triangle_23.fillColor = 0;

		// triangle_24
		const triangle_24 = this.add.triangle(2576, -81, 10, 128, 64, 10, 128, 128);
		triangle_24.scaleX = 1.1573620142635772;
		triangle_24.scaleY = -3.944863170624605;
		triangle_24.visible = false;
		triangle_24.alpha = 0.2;
		triangle_24.isFilled = true;
		triangle_24.fillColor = 0;

		// ellipse_5
		const ellipse_5 = this.add.ellipse(2840, -79, 128, 128);
		ellipse_5.scaleX = 0.3916825343304212;
		ellipse_5.scaleY = 0.07463723645206587;
		ellipse_5.alpha = 0.4;
		ellipse_5.isFilled = true;
		ellipse_5.fillColor = 657673;

		// testlamp
		const testlamp = this.physics.add.sprite(1246, 40, "painting_06_light");
		testlamp.scaleX = 0.19071405021255658;
		testlamp.scaleY = 0.06601456583658546;
		testlamp.visible = false;
		testlamp.body.setSize(263, 320, false);

		// ellipse_6
		const ellipse_6 = this.add.ellipse(3437, -80, 128, 128);
		ellipse_6.scaleX = 0.3916825343304212;
		ellipse_6.scaleY = 0.07463723645206587;
		ellipse_6.alpha = 0.4;
		ellipse_6.isFilled = true;
		ellipse_6.fillColor = 657673;

		// testlamp2
		const testlamp2 = this.physics.add.sprite(3438, 47, "painting_05_gold");
		testlamp2.scaleX = 0.19630475866598932;
		testlamp2.scaleY = 0.06550825991555875;
		testlamp2.visible = false;
		testlamp2.body.setSize(263, 320, false);

		// ellipse_7
		const ellipse_7 = this.add.ellipse(4471, -79, 128, 128);
		ellipse_7.scaleX = 0.3916825343304212;
		ellipse_7.scaleY = 0.07463723645206587;
		ellipse_7.alpha = 0.4;
		ellipse_7.isFilled = true;
		ellipse_7.fillColor = 657673;

		// stickpainting5
		const stickpainting5 = this.physics.add.sprite(2614, 371, "painting_06_light");
		stickpainting5.scaleX = 0.2050273630890479;
		stickpainting5.scaleY = 0.2050273630890479;
		stickpainting5.body.setSize(263, 320, false);

		this.backgroundwall = backgroundwall;
		this.green = green;
		this.crack1 = crack1;
		this.crack2 = crack2;
		this.skirtinglight = skirtinglight;
		this.littletable = littletable;
		this.bottom = bottom;
		this.lighttable = lighttable;
		this.opendoor1 = opendoor1;
		this.opendoor2 = opendoor2;
		this.shelfbird = shelfbird;
		this.shelf2 = shelf2;
		this.shelfplant1 = shelfplant1;
		this.rug = rug;
		this.tablelast = tablelast;
		this.painting3 = painting3;
		this.bookcasesec = bookcasesec;
		this.ceiling = ceiling;
		this.bookcasesec2 = bookcasesec2;
		this.seatbrown = seatbrown;
		this.shelf = shelf;
		this.darfkdesk = darfkdesk;
		this.rock2 = rock2;
		this.plant1 = plant1;
		this.painting2 = painting2;
		this.painting1 = painting1;
		this.shelf1 = shelf1;
		this.rock1 = rock1;
		this.plant2 = plant2;
		this.shelf6 = shelf6;
		this.shelf3 = shelf3;
		this.shelf4 = shelf4;
		this.shelf5 = shelf5;
		this.catPlayer = catPlayer;
		this.rat1 = rat1;
		this.rat2 = rat2;
		this.rat3 = rat3;
		this.block2 = block2;
		this.block1 = block1;
		this.block3 = block3;
		this.block4 = block4;
		this.block5 = block5;
		this.block6 = block6;
		this.plant4 = plant4;
		this.plant5 = plant5;
		this.shelfround1 = shelfround1;
		this.shelfround2 = shelfround2;
		this.shelfround3 = shelfround3;
		this.ellipse = ellipse;
		this.shelfround4 = shelfround4;
		this.shelfround5 = shelfround5;
		this.shelfround8 = shelfround8;
		this.shelfround6 = shelfround6;
		this.shelfround7 = shelfround7;
		this.shelfround9 = shelfround9;
		this.shelfround12 = shelfround12;
		this.shelfround10 = shelfround10;
		this.shelfround11 = shelfround11;
		this.stickpaint1 = stickpaint1;
		this.fallpainting1 = fallpainting1;
		this.stickpainting3 = stickpainting3;
		this.lamp2 = lamp2;
		this.stickpaint2 = stickpaint2;
		this.broom = broom;
		this.plant7 = plant7;
		this.plant6 = plant6;
		this.slicer3 = slicer3;
		this.slicer2 = slicer2;
		this.ellipse_2 = ellipse_2;
		this.ellipse_3 = ellipse_3;
		this.dogInterior = dogInterior;
		this.shelf_1 = shelf_1;
		this.rat22 = rat22;
		this.block1up = block1up;
		this.block2up = block2up;
		this.indoorwindow1 = indoorwindow1;
		this.slicer1 = slicer1;
		this.ceiling_1 = ceiling_1;
		this.lamp1 = lamp1;
		this.testlamp = testlamp;
		this.testlamp2 = testlamp2;
		this.stickpainting5 = stickpainting5;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	backgroundwall;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	green;
	/** @type {Phaser.GameObjects.Image} */
	crack1;
	/** @type {Phaser.GameObjects.Image} */
	crack2;
	/** @type {Phaser.GameObjects.TileSprite} */
	skirtinglight;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	littletable;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bottom;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lighttable;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	opendoor1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	opendoor2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfbird;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfplant1;
	/** @type {Phaser.Physics.Arcade.Image} */
	rug;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	tablelast;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bookcasesec;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bookcasesec2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	seatbrown;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	darfkdesk;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	rock2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	rock1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf5;
	/** @type {CatPlayer} */
	catPlayer;
	/** @type {Rat} */
	rat1;
	/** @type {Rat} */
	rat2;
	/** @type {Rat} */
	rat3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	block2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	block1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	block3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	block4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	block5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	block6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfround1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfround2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfround3;
	/** @type {Phaser.GameObjects.Ellipse} */
	ellipse;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfround4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfround5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfround8;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfround6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfround7;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfround9;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfround12;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfround10;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfround11;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	stickpaint1;
	/** @type {fallpainting} */
	fallpainting1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	stickpainting3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lamp2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	stickpaint2;
	/** @type {Broom} */
	broom;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant7;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant6;
	/** @type {SliceDevice} */
	slicer3;
	/** @type {SliceDevice} */
	slicer2;
	/** @type {Phaser.GameObjects.Ellipse} */
	ellipse_2;
	/** @type {Phaser.GameObjects.Ellipse} */
	ellipse_3;
	/** @type {DogInterior} */
	dogInterior;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf_1;
	/** @type {Rat} */
	rat22;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	block1up;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	block2up;
	/** @type {IndoorWindow} */
	indoorwindow1;
	/** @type {SliceDevice} */
	slicer1;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lamp1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	testlamp;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	testlamp2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	stickpainting5;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.BlockGroup=this.add.group();
		this.UpdateGroup=this.add.group();

		this.BombsGroup=this.add.group();
		this.BounceGroup=this.add.group();

		this.CatchBallGroup=this.add.group();
		this.DirtGroup=this.add.group();

		this.CounterBalls=0;

		this.Bam=true;

		this.catchtheme=this.sound.add('GetMouse');
		this.donetheme=this.sound.add('jobdone');
		this.Boomtheme=this.sound.add('Boom2');	

	this.goaltheme=this.sound.add('missiongoal');
this.leveltheme=this.sound.add('maintheme');
this.leveltheme.play();

		this.PreviousNumber=0;

		raticon=true;

var ColorLight=0x3b3635;



			this.StarGroup=this.add.group();

	this.time.addEvent({ delay: 2000, callback:() => {


this.plant1.body.setBounce(0.3);
this.plant2.body.setBounce(0.3);
this.plant4.body.setBounce(0.3);
this.plant5.body.setBounce(0.3);
this.plant6.body.setBounce(0.3);
this.plant7.body.setBounce(0.3);

	}, callbackScope: this,repeat:0 });



		this.editorCreate();


		this.rock1.crack=this.crack1;
		this.rock2.crack=this.crack2;

		//	var light0  = this.lights.addLight(-300,300,5000000).setIntensity(15);
   // this.lights.enable().setAmbientColor(ColorLight);

	//var light  = this.lights.addLight(this.lamp.x,this.lamp.y,1000).setIntensity(3);
  //  this.lights.enable().setAmbientColor(ColorLight);

		//var light1  = this.lights.addLight(this.lamp2.x,this.lamp2.y,1000).setIntensity(3);
    	//this.lights.enable().setAmbientColor(ColorLight);


		//this.green.setPipeline('Light2D');
		//this.backgroundwall.setPipeline('Light2D');
		//this.slicer2.swingblade.setPipeline('Light2D');
		//this.slicer2.chain.setPipeline('Light2D');
		//this.ceiling.setPipeline('Light2D');
		//this.skirtinglight.setPipeline('Light2D');
		//this.shelf.setPipeline('Light2D');
		//this.shelf1.setPipeline('Light2D');
		//this.shelf2.setPipeline('Light2D');
		//this.shelf3.setPipeline('Light2D');
		//this.shelf4.setPipeline('Light2D');
		//this.shelf5.setPipeline('Light2D');
		//this.shelf6.setPipeline('Light2D');
		//this.shelfround7.setPipeline('Light2D');
		//this.slicer1.swingblade.setPipeline('Light2D');
		//this.slicer1.chain.setPipeline('Light2D');
		//this.ellipse.setPipeline('Light2D');
		//this.ellipse_2.setPipeline('Light2D');
		//this.ellipse_3.setPipeline('Light2D');
		//this.catPlayer.setPipeline('Light2D');
		//this.indoorwindow1.windowout.setPipeline('Light2D');





		//	this.slicer3.circle = 0;
		//	this.slicer2.circle = 0;
			//this.slicer1.circle = 0;

		console.log('length bouncegroup'+this.BounceGroup.getLength());

		this.BlockGroup.add(this.block1);
		this.BlockGroup.add(this.block2);
		this.BlockGroup.add(this.block3);
		this.BlockGroup.add(this.block4);
		this.BlockGroup.add(this.block5);
		this.BlockGroup.add(this.block6);

			this.BlockGroup.add(this.block1up);
		this.BlockGroup.add(this.block2up);

		this.physics.add.collider(this.rat1,this.BlockGroup);
		this.physics.add.collider(this.rat2,this.BlockGroup);
		this.physics.add.collider(this.rat3,this.BlockGroup);
		this.physics.add.collider(this.rat22,this.BlockGroup);

		this.cameras.main.setZoom(0.72);
		this.physics.world.setBounds(0, -3100,4800, 3800);
		this.cameras.main.setBounds(0,-3100,4800, 3800);
		this.cameras.main.startFollow(this.catPlayer,false,500,0);
		//this.physics.add.collider(this.catPlayer,this.ceiling);
		this.physics.add.collider(this.catPlayer,this.bottom);

			this.physics.add.collider(this.catPlayer,this.plant1,this.push,null,this);
			this.physics.add.collider(this.catPlayer,this.plant2,this.push,null,this);
			this.physics.add.collider(this.catPlayer,this.plant4,this.push,null,this);
			this.physics.add.collider(this.catPlayer,this.plant5,this.push,null,this);
			this.physics.add.collider(this.catPlayer,this.plant6,this.push,null,this);
			this.physics.add.collider(this.catPlayer,this.plant7,this.push,null,this);

			this.physics.add.collider(this.plant2,this.shelfplant1);
			this.physics.add.collider(this.plant1,this.shelf4);
			this.physics.add.collider(this.plant4,this.tablelast);
			this.physics.add.collider(this.plant5,this.lighttable);
			this.physics.add.collider(this.plant5,this.tablelast);

			this.plant1.item="star";
			this.plant2.item="star";
			this.plant4.item="star";
			this.plant5.item="star";
			this.plant6.item="star";
			this.plant7.item="star";

			MissionCount=6;

			this.physics.add.collider(this.plant1,this.bottom,this.DropAndLeaveMark,null,this);
			this.physics.add.collider(this.plant2,this.bottom,this.DropAndLeaveMark,null,this);
			this.physics.add.collider(this.plant4,this.bottom,this.DropAndLeaveMark,null,this);

			this.physics.add.collider(this.plant6,this.bottom,this.DropAndLeaveMark,null,this);
			this.physics.add.collider(this.plant7,this.bottom,this.DropAndLeaveMark,null,this);
			this.physics.add.collider(this.plant5,this.bottom,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.catPlayer,this.shelfround1,this.StickAround,null,this);
		this.physics.add.collider(this.catPlayer,this.shelfround2,this.StickAround,null,this);
		this.physics.add.collider(this.catPlayer,this.shelfround3,this.StickAround,null,this);
		this.physics.add.collider(this.catPlayer,this.shelfround4,this.StickAround,null,this);


		this.physics.add.collider(this.catPlayer,this.shelfround5,this.StickAround,null,this);
		this.physics.add.collider(this.catPlayer,this.shelfround6,this.StickAround,null,this);
		this.physics.add.collider(this.catPlayer,this.shelfround7,this.StickAround,null,this);
		this.physics.add.collider(this.catPlayer,this.shelfround8,this.StickAround,null,this);

		this.physics.add.collider(this.catPlayer,this.shelfround9,this.StickAround,null,this);
		this.physics.add.collider(this.catPlayer,this.shelfround10,this.StickAround,null,this);
		this.physics.add.collider(this.catPlayer,this.shelfround11,this.StickAround,null,this);
		this.physics.add.collider(this.catPlayer,this.shelfround12,this.StickAround,null,this);

this.physics.add.collider(this.plant1,this.shelfround3,this.StickAround,null,this);
this.physics.add.collider(this.plant2,this.shelfround5,this.StickAround,null,this);
this.physics.add.collider(this.plant4,this.shelfround8,this.StickAround,null,this);

this.physics.add.collider(this.plant6,this.shelfround9,this.StickAround,null,this);
this.physics.add.collider(this.plant7,this.shelfround10,this.StickAround,null,this);

this.physics.add.overlap(this.catPlayer,this.stickpaint1,this.StickToObject,null,this);
this.physics.add.overlap(this.catPlayer,this.stickpaint2,this.StickToObject,null,this);
this.physics.add.overlap(this.catPlayer,this.stickpainting3,this.StickToObject,null,this);

this.physics.add.overlap(this.catPlayer,this.lamp1,this.StickToObject,null,this);
this.physics.add.overlap(this.catPlayer,this.lamp2,this.StickToObject,null,this);
this.physics.add.overlap(this.catPlayer,this.stickpainting5,this.StickToObject,null,this);



	this.physics.add.collider(this.plant4,this.bottom,this.breakeagainstfloor,null,this);
			this.physics.add.collider(this.painting1,this.bottom,this.breakeagainstfloor,null,this);
			this.physics.add.collider(this.painting2,this.bottom,this.breakeagainstfloor,null,this);

			this.physics.add.overlap(this.catPlayer,this.CatchBallGroup,this.CatchBall,null,this);
				this.physics.add.overlap(this.catPlayer,this.StarGroup,this.CatchBall,null,this);

		this.physics.add.collider(this.fallpainting1.block,this.catPlayer,this.MakeObjectImmovabke,null,this);
		this.physics.add.collider(this.fallpainting1,this.bottom,this.DropAndLeaveMark,null,this);

		this.physics.add.overlap(this.catPlayer,this.dogInterior.dog,this.GetHit,null,this);

		this.physics.add.overlap(this.catPlayer,this.slicer1.swingblade,this.GetHit,null,this);
		this.physics.add.overlap(this.catPlayer,this.slicer2.swingblade,this.GetHit,null,this);
		this.physics.add.overlap(this.catPlayer,this.slicer3.swingblade,this.GetHit,null,this);



			this.physics.add.overlap(this.catPlayer,this.indoorwindow1.waythrough,this.JumpOut,null,this);



		this.test();
	this.AddingRatsStuff();
		this.addCollidersBroom();

	console.log('length Blockegroup'+this.BlockGroup.getLength());

		this.physics.add.collider(this.rock1,this.bottom,this.Baaam,null,this);
		this.physics.add.collider(this.rock2,this.bottom,this.Baaam,null,this);

		this.physics.add.overlap(this.rock1,this.catPlayer);
		this.physics.add.overlap(this.rock2,this.catPlayer);

			this.rat1.direction=true;
			this.rat1.body.setVelocityX(50);
			this.rat1.speed=50;

			this.rat2.direction=true;
			this.rat2.body.setVelocityX(50);
			this.rat2.speed=80;

			this.rat22.direction=true;
			this.rat22.body.setVelocityX(50);
			this.rat22.speed=70;

			this.rat3.direction=true;
			this.rat3.body.setVelocityX(50);
			this.rat3.speed=70;

		//this.rat1.RespectRats=false;

		this.rock1.stopkaboom=true;
			this.rock2.stopkaboom=true;


		this.CreatePlatform(this.seatbrown);
			this.CreatePlatform(this.lighttable);
		this.CreatePlatform(this.bookcasesec);
		this.CreatePlatform(this.bookcasesec2);
		this.CreatePlatform(this.darfkdesk);

		this.CreatePlatform(this.painting1);
		this.CreatePlatform(this.painting2);
		this.CreatePlatform(this.painting3);

			this.CreatePlatform(this.shelf1);
		this.CreatePlatform(this.shelf2);
		this.CreatePlatform(this.shelf3);
		this.CreatePlatform(this.shelf4);
		this.CreatePlatform(this.shelf5);
		this.CreatePlatform(this.shelf6);
		this.CreatePlatform(this.shelfplant1);
		this.CreatePlatform(this.shelf);
	this.CreatePlatform(this.tablelast);
		this.CreatePlatform(this.littletable);

					this.BounceGroup.add(this.shelf);
				this.BounceGroup.add(this.shelf1);
				this.BounceGroup.add(this.shelf2);

				this.BounceGroup.add(this.shelf4);

				this.BounceGroup.add(this.shelf6);
				this.BounceGroup.add(this.shelfround1);
				this.BounceGroup.add(this.shelfround2);
				this.BounceGroup.add(this.shelfround3);
				this.BounceGroup.add(this.shelfround4);
				this.BounceGroup.add(this.shelfround5);
				this.BounceGroup.add(this.shelfround6);
				this.BounceGroup.add(this.shelfround7);
				this.BounceGroup.add(this.shelfround8);
				this.BounceGroup.add(this.shelfround9);
				this.BounceGroup.add(this.shelfround10);
				this.BounceGroup.add(this.shelfround11);
				this.BounceGroup.add(this.shelfround12);
				this.BounceGroup.add(this.littletable);


this.physics.add.collider(this.BombsGroup,this.BounceGroup);
this.physics.add.collider(this.BombsGroup,this.littletable);
	this.physics.add.overlap(this.catPlayer,this.BombsGroup,this.GetHit,null,this);
		this.physics.add.overlap(this.catPlayer,this.rock1,this.GetHit,null,this);
			this.physics.add.overlap(this.catPlayer,this.rock2,this.GetHit,null,this);



			this.time.addEvent({ delay:1500, callback:() => {
				if(this.swingdirection){
				this.swingdirection=false;
				}else{
				this.swingdirection=true;
				}


	}, callbackScope: this,repeat:-1 });

}

	Baaam(Block,Bottom){

		if (Block.stopkaboom){
		  this.cameras.main.shake(100);
		 Block.crack.visible=true;
			  Block.stopkaboom=false;
		}


	this.time.addEvent({ delay:2000, callback:() => {

	}, callbackScope: this,repeat:0});


	}

		GetValueY(Object){

	Object.resultY=Object.LastYvalue-Object.body.y;

	Object.LastYvalue=Object.body.y;
	Object.LastXvalue=Object.body.x;
//	Object.string="Screw you";



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

	//this.destroyRats();
	this.donetheme.play();


		ShowCompletetext=true;
		LevelRat3Clear=true;
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


	update(time,delta){

	this.GetValueY(this.shelfround1);
	this.GetValueY(this.shelfround2);
	this.GetValueY(this.shelfround3);
	this.GetValueY(this.shelfround4);

	this.GetValueY(this.shelfround5);
	this.GetValueY(this.shelfround6);
	this.GetValueY(this.shelfround7);
	this.GetValueY(this.shelfround8);

	this.GetValueY(this.shelfround9);
	this.GetValueY(this.shelfround10);
	this.GetValueY(this.shelfround11);
	this.GetValueY(this.shelfround12);

			this.step=0.012;
	this.widthSlice=240;

		Phaser.Math.RotateAroundDistance(this.shelfround1, this.slicer1.x,this.slicer1.y, this.step, this.widthSlice);
		Phaser.Math.RotateAroundDistance(this.shelfround2, this.slicer1.x,this.slicer1.y, this.step, this.widthSlice);
		Phaser.Math.RotateAroundDistance(this.shelfround3, this.slicer1.x,this.slicer1.y, this.step, this.widthSlice);
		Phaser.Math.RotateAroundDistance(this.shelfround4, this.slicer1.x,this.slicer1.y, this.step, this.widthSlice);

		Phaser.Math.RotateAroundDistance(this.shelfround5, this.slicer2.x,this.slicer2.y, this.step, this.widthSlice);
		Phaser.Math.RotateAroundDistance(this.shelfround6, this.slicer2.x,this.slicer2.y, this.step, this.widthSlice);
		Phaser.Math.RotateAroundDistance(this.shelfround7, this.slicer2.x,this.slicer2.y, this.step, this.widthSlice);
		Phaser.Math.RotateAroundDistance(this.shelfround8, this.slicer2.x,this.slicer2.y, this.step, this.widthSlice);

		Phaser.Math.RotateAroundDistance(this.shelfround9, this.slicer3.x,this.slicer3.y, this.step, this.widthSlice);
		Phaser.Math.RotateAroundDistance(this.shelfround10, this.slicer3.x,this.slicer3.y, this.step, this.widthSlice);
		Phaser.Math.RotateAroundDistance(this.shelfround11, this.slicer3.x,this.slicer3.y, this.step, this.widthSlice);
		Phaser.Math.RotateAroundDistance(this.shelfround12, this.slicer3.x,this.slicer3.y, this.step, this.widthSlice);

		//Phaser.Math.RotateAroundDistance(this.starround1, this.slicer1.x,this.slicer1.y, this.step, this.widthSlice);



//	var	tempMatrixbl = new Phaser.GameObjects.Components.TransformMatrix();
//	var	tempParentMatrixbl = new Phaser.GameObjects.Components.TransformMatrix();
//	this.spider1.getWorldTransformMatrix(tempMatrix, tempParentMatrix);
//	var d = tempMatrix.decomposeMatrix();

				if(Math.abs(this.rock1.x-this.catPlayer.x)<100){

					this.rock1.body.setGravityY(1000);
				}

			if(Math.abs(this.rock2.x-this.catPlayer.x)<100){

					this.rock2.body.setGravityY(1000);
				}



		this.DropDownWhenjumpCatonObject(this.painting1);
	this.DropDownWhenjumpCatonObject(this.painting3);
		this.DropDownWhenjumpCatonObject(this.painting2);


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
