
// You can write more code here

/* START OF COMPILED CODE */

class Mission5Rats extends BaseScene {

	constructor() {
		super("Mission5Rats");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// skirtingfloor
		const skirtingfloor = this.add.tileSprite(1789, 658, 35000, 63, "skirting_light");
		skirtingfloor.scaleX = 0.2528690000816929;
		skirtingfloor.scaleY = 0.26136837995205797;
		skirtingfloor.visible = false;

		// wallpaperdown
		const wallpaperdown = this.add.tileSprite(7800, 278, 45000, 1382, "background");
		wallpaperdown.scaleX = 0.35;
		wallpaperdown.scaleY = 0.562418240986509;
		wallpaperdown.tintTopLeft = 4276031;
		wallpaperdown.tintTopRight = 6117464;
		wallpaperdown.tileScaleX = 0.4;
		wallpaperdown.tileScaleY = 0.3;

		// lastcastle2
		const lastcastle2 = this.physics.add.sprite(15781, 698, "pillar_arch_center_repeating");
		lastcastle2.scaleX = 0.22121004379661977;
		lastcastle2.scaleY = 0.22121004379661977;
		lastcastle2.tintBottomLeft = 11019557;
		lastcastle2.body.setSize(957, 2572, false);

		// castle1l
		const castle1l = this.physics.add.sprite(8618, 808, "pillar_arch_left_end");
		castle1l.scaleX = 0.21897679026212274;
		castle1l.scaleY = 0.21897679026212274;
		castle1l.body.setOffset(0, 210);
		castle1l.body.setSize(772, 2621, false);

		// castle1r
		const castle1r = this.physics.add.sprite(8786, 808, "pillar_arch_right_end");
		castle1r.scaleX = 0.21895716063677984;
		castle1r.scaleY = 0.21895716063677984;
		castle1r.body.setOffset(0, 210);
		castle1r.body.setSize(771, 2619, false);

		// lastcastle3
		const lastcastle3 = this.physics.add.sprite(15991, 698, "pillar_arch_center_repeating");
		lastcastle3.scaleX = 0.22121004379661977;
		lastcastle3.scaleY = 0.22121004379661977;
		lastcastle3.body.setSize(957, 2572, false);

		// tourch_lit_01
		const tourch_lit_01 = this.add.image(14048, -299, "tourch_lit_01");
		tourch_lit_01.scaleX = 0.16351073780143233;
		tourch_lit_01.scaleY = 0.16351073780143233;

		// lastcastle4
		const lastcastle4 = this.add.tileSprite(14062, 647, 1490, 2572, "pillar_arch_center_repeating");
		lastcastle4.scaleX = 0.7389889189313867;
		lastcastle4.scaleY = 0.22121004379661977;
		lastcastle4.tintBottomLeft = 1972505;
		lastcastle4.tintBottomRight = 921102;
		lastcastle4.tileScaleX = 0.31;

		// bucket_connector_1
		const bucket_connector_1 = this.add.image(7425, -2195, "bucket_connector");
		bucket_connector_1.scaleX = 0.23164058533801926;
		bucket_connector_1.scaleY = 0.3592184731187762;

		// castle2l
		const castle2l = this.physics.add.sprite(9666, 669, "pillar_arch_left_end");
		castle2l.scaleX = 0.21897679026212274;
		castle2l.scaleY = 0.21897679026212274;
		castle2l.body.setOffset(0, 210);
		castle2l.body.setSize(772, 2621, false);

		// lavaball1
		const lavaball1 = this.physics.add.sprite(9037, 756, "lavaball_line_x_1");
		lavaball1.scaleX = 0.5192025441503825;
		lavaball1.scaleY = 0.5192025441503825;
		lavaball1.body.setSize(149, 132, false);

		// lavaball2
		const lavaball2 = this.physics.add.sprite(9413, 751, "lavaball_line_x_1");
		lavaball2.scaleX = 0.519202544150362;
		lavaball2.scaleY = 0.519202544150362;
		lavaball2.body.setSize(149, 132, false);

		// lavaball4
		const lavaball4 = this.physics.add.sprite(10099, 718, "lavaball_line_x_1");
		lavaball4.scaleX = 0.5113439157335513;
		lavaball4.scaleY = 0.5113439157335513;
		lavaball4.body.setSize(149, 132, false);

		// lavaball3
		const lavaball3 = this.physics.add.sprite(10475, 713, "lavaball_line_x_1");
		lavaball3.scaleX = 0.5113439157335313;
		lavaball3.scaleY = 0.5113439157335313;
		lavaball3.body.setSize(149, 132, false);

		// lastcastle1
		const lastcastle1 = this.physics.add.sprite(13427, 640, "pillar_arch_left_end");
		lastcastle1.scaleX = 0.2195810303112826;
		lastcastle1.scaleY = 0.2195810303112826;
		lastcastle1.tintBottomLeft = 1972505;
		lastcastle1.tintBottomRight = 921102;
		lastcastle1.body.setOffset(0, 211);
		lastcastle1.body.setSize(772, 2621, false);

		// island_single
		const island_single = this.add.image(14738, 364, "island-single");
		island_single.scaleX = 0.17589475065221952;
		island_single.scaleY = 0.22373756512338636;
		island_single.tintTopLeft = 15017510;
		island_single.tintTopRight = 15689832;
		island_single.tintBottomLeft = 16208980;
		island_single.tintBottomRight = 15869735;

		// castle2r
		const castle2r = this.physics.add.sprite(9833, 669, "pillar_arch_right_end");
		castle2r.scaleX = 0.21895716063677984;
		castle2r.scaleY = 0.21895716063677984;
		castle2r.body.setOffset(0, 210);
		castle2r.body.setSize(771, 2619, false);

		// castle3l
		const castle3l = this.physics.add.sprite(10647, 683, "pillar_arch_left_end");
		castle3l.scaleX = 0.21897679026212274;
		castle3l.scaleY = 0.21897679026212274;
		castle3l.body.setOffset(0, 210);
		castle3l.body.setSize(772, 2621, false);

		// castle4l
		const castle4l = this.physics.add.sprite(11056, -741, "pillar_arch_left_end");
		castle4l.scaleX = 0.21897679026212274;
		castle4l.scaleY = 0.21897679026212274;
		castle4l.body.setOffset(0, 210);
		castle4l.body.setSize(772, 2621, false);

		// castle4r
		const castle4r = this.physics.add.sprite(11225, -741, "pillar_arch_right_end");
		castle4r.scaleX = 0.21897679026212274;
		castle4r.scaleY = 0.21897679026212274;
		castle4r.body.setOffset(0, 210);
		castle4r.body.setSize(771, 2619, false);

		// castle3r
		const castle3r = this.physics.add.sprite(10815, 683, "pillar_arch_right_end");
		castle3r.scaleX = 0.21897679026212274;
		castle3r.scaleY = 0.21897679026212274;
		castle3r.body.setOffset(0, 210);
		castle3r.body.setSize(771, 2619, false);

		// lavaball5
		const lavaball5 = this.physics.add.sprite(11391, 699, "lavaball_line_x_1");
		lavaball5.scaleX = 0.578129556999706;
		lavaball5.scaleY = 0.578129556999706;
		lavaball5.body.setSize(149, 132, false);

		// lastcastle_1
		const lastcastle_1 = this.physics.add.sprite(15588, 690, "pillar_arch_left_end");
		lastcastle_1.scaleX = 0.2195810303112826;
		lastcastle_1.scaleY = 0.2195810303112826;
		lastcastle_1.body.setOffset(0, 211);
		lastcastle_1.body.setSize(772, 2621, false);

		// lastcastle_2
		const lastcastle_2 = this.physics.add.sprite(16177, 691, "pillar_arch_left_end");
		lastcastle_2.scaleX = 0.2197073612371494;
		lastcastle_2.scaleY = 0.2197073612371494;
		lastcastle_2.flipX = true;
		lastcastle_2.body.setOffset(0, 211);
		lastcastle_2.body.setSize(772, 2621, false);

		// lavaball7
		const lavaball7 = this.physics.add.sprite(11004, 705, "lavaball_line_x_1");
		lavaball7.scaleX = 0.5781295569996834;
		lavaball7.scaleY = 0.5781295569996834;
		lavaball7.body.setSize(149, 132, false);

		// lavaball8
		const lavaball8 = this.physics.add.sprite(11935, 694, "lavaball_line_x_1");
		lavaball8.scaleX = 0.5781295569996834;
		lavaball8.scaleY = 0.5781295569996834;
		lavaball8.body.setSize(149, 132, false);

		// lastcastle
		const lastcastle = this.physics.add.sprite(14692, 640, "pillar_arch_left_end");
		lastcastle.scaleX = 0.2197073612371494;
		lastcastle.scaleY = 0.2197073612371494;
		lastcastle.flipX = true;
		lastcastle.tintBottomLeft = 1972505;
		lastcastle.tintBottomRight = 921102;
		lastcastle.body.setOffset(0, 211);
		lastcastle.body.setSize(772, 2621, false);

		// stoop1
		const stoop1 = this.physics.add.sprite(15701, 652, "pillar_complete");
		stoop1.scaleX = 0.2822198456214512;
		stoop1.scaleY = 0.2822198456214512;
		stoop1.body.pushable = false;
		stoop1.body.immovable = true;
		stoop1.body.setSize(406, 1328, false);

		// lavaball6
		const lavaball6 = this.physics.add.sprite(11524, 696, "lavaball_line_x_1");
		lavaball6.scaleX = 0.5781295569996834;
		lavaball6.scaleY = 0.5781295569996834;
		lavaball6.body.setSize(149, 132, false);

		// lavaground
		const lavaground = this.add.tileSprite(9500, 748, 1716, 748, "lava");
		lavaground.scaleX = 8;
		lavaground.scaleY = 0.243698234238853;
		lavaground.tintTopLeft = 15392628;
		lavaground.tintTopRight = 15135840;
		lavaground.tintBottomLeft = 14342291;
		lavaground.tintBottomRight = 15003269;
		lavaground.tileScaleX = 0.03;

		// floor
		const floor = this.add.tileSprite(1511, 722, 2234, 792, "floor");
		floor.scaleX = 2.6;
		floor.scaleY = 0.2126050536828463;
		floor.tileScaleX = 0.06999;

		// bucket_connector
		const bucket_connector = this.add.image(-367, 810, "bucket_connector");
		bucket_connector.scaleX = 0.23164058533801926;
		bucket_connector.scaleY = 0.3592184731187762;

		// stoop2
		const stoop2 = this.physics.add.sprite(12678, 1358, "pillar_complete");
		stoop2.scaleX = 0.2822198456214512;
		stoop2.scaleY = 0.2822198456214512;
		stoop2.body.pushable = false;
		stoop2.body.immovable = true;
		stoop2.body.setSize(406, 1328, false);

		// backgroundup
		const backgroundup = this.add.tileSprite(2465, -1335, 315, 1377, "blue_flock");
		backgroundup.scaleX = -7.583453982260805;
		backgroundup.scaleY = 5.132801232728735;
		backgroundup.angle = 90;
		backgroundup.tintTopLeft = 8419705;
		backgroundup.tintBottomLeft = 8748927;
		backgroundup.tileScaleX = 0.03;
		backgroundup.tileScaleY = 0.03;

		// drawerup
		const drawerup = this.physics.add.sprite(7122, -1829, "dark_five_draw");
		drawerup.scaleX = 0.24705161496647188;
		drawerup.scaleY = 0.24705161496647188;
		drawerup.flipX = true;
		drawerup.body.setSize(677, 610, false);

		// chair1
		const chair1 = this.physics.add.sprite(1953, 618, "dark_wood_chair_front");
		chair1.scaleX = 0.16592281398265107;
		chair1.scaleY = 0.16592281398265107;
		chair1.body.setSize(678, 486, false);

		// bookcaseupper1
		const bookcaseupper1 = this.physics.add.sprite(2311, -929, "dark_5_shelves");
		bookcaseupper1.scaleX = 0.24054278197684154;
		bookcaseupper1.scaleY = 0.24054278197684154;
		bookcaseupper1.body.setSize(610, 85, false);

		// ceiling1
		const ceiling1 = this.add.tileSprite(1154, -162, 35000, 78, "skirting_light");
		ceiling1.scaleX = 0.18021693427896895;
		ceiling1.scaleY = 0.18021693427896895;

		// ropeball2
		const ropeball2 = this.physics.add.sprite(7625, -1948, "rope_end_right");
		ropeball2.scaleX = 0.19054468574145;
		ropeball2.scaleY = 0.19054468574145;
		ropeball2.angle = 37;
		ropeball2.setOrigin(0.5012015832468932, 0.34160723859056474);
		ropeball2.body.angularVelocity = 1500;
		ropeball2.body.setSize(200, 286, false);

		// ropeball
		const ropeball = this.physics.add.sprite(-271, 809, "rope_end_right");
		ropeball.scaleX = 0.19054468574145;
		ropeball.scaleY = 0.19054468574145;
		ropeball.angle = 51;
		ropeball.setOrigin(0.4881326709616519, 0.34096972425042904);
		ropeball.body.angularVelocity = 1500;
		ropeball.body.maxAngular = 5000;
		ropeball.body.setSize(200, 286, false);

		// windowfirst
		const windowfirst = this.physics.add.sprite(187, 332, "window_06");
		windowfirst.scaleX = 0.22587207017263713;
		windowfirst.scaleY = 0.22587207017263713;
		windowfirst.body.setSize(495, 768, false);

		// littletable
		const littletable = this.physics.add.sprite(181, 645, "light_table_round");
		littletable.scaleX = 0.5122056698979438;
		littletable.scaleY = 0.5122056698979438;
		littletable.body.setOffset(0, 20);
		littletable.body.setSize(210, 200, false);

		// opendoor1
		const opendoor1 = this.physics.add.sprite(8044, -1469, "dark_wardrobe_door_open");
		opendoor1.scaleX = 0.3990294319411307;
		opendoor1.scaleY = 0.3879795166868173;
		opendoor1.flipX = true;
		opendoor1.visible = false;
		opendoor1.body.setSize(375, 898, false);

		// painting3
		const painting3 = this.physics.add.sprite(4095, 386, "painting_03_light");
		painting3.scaleX = 0.13806667022038824;
		painting3.scaleY = 0.13806667022038824;
		painting3.alpha = 0.9;
		painting3.alphaTopLeft = 0.9;
		painting3.alphaTopRight = 0.9;
		painting3.alphaBottomLeft = 0.9;
		painting3.alphaBottomRight = 0.9;
		painting3.body.setSize(614, 432, false);

		// seatbrown1
		const seatbrown1 = this.physics.add.sprite(3056, -860, "brown_2_seat");
		seatbrown1.scaleX = 0.13102002329216206;
		seatbrown1.scaleY = 0.13102002329216206;
		seatbrown1.body.pushable = false;
		seatbrown1.body.immovable = true;
		seatbrown1.body.setOffset(120, 10);
		seatbrown1.body.setSize(370, 327, false);

		// shelf3
		const shelf3 = this.physics.add.sprite(7434, -1762, "light_wall_shelf");
		shelf3.scaleX = 0.15;
		shelf3.scaleY = 0.12;
		shelf3.body.pushable = false;
		shelf3.body.immovable = true;
		shelf3.body.setSize(1007, 85, false);

		// painting2low
		const painting2low = this.physics.add.sprite(7485, -1504, "painting_03_light");
		painting2low.scaleX = 0.1779781357342463;
		painting2low.scaleY = 0.1779781357342463;
		painting2low.alpha = 0.9;
		painting2low.alphaTopLeft = 0.9;
		painting2low.alphaTopRight = 0.9;
		painting2low.alphaBottomLeft = 0.9;
		painting2low.alphaBottomRight = 0.9;
		painting2low.body.setSize(614, 432, false);

		// block2
		const block2 = this.physics.add.sprite(8439, -1900, "bubble-64px");
		block2.visible = false;
		block2.body.pushable = false;
		block2.body.immovable = true;
		block2.body.setSize(64, 64, false);

		// block1
		const block1 = this.physics.add.sprite(9938, -796, "bubble-64px");
		block1.visible = false;
		block1.body.pushable = false;
		block1.body.immovable = true;
		block1.body.setSize(64, 64, false);

		// block3
		const block3 = this.physics.add.sprite(2831, -568, "bubble-64px");
		block3.visible = false;
		block3.body.pushable = false;
		block3.body.immovable = true;
		block3.body.setSize(64, 64, false);

		// block4
		const block4 = this.physics.add.sprite(3124, -574, "bubble-64px");
		block4.visible = false;
		block4.body.pushable = false;
		block4.body.immovable = true;
		block4.body.setSize(64, 64, false);

		// block5
		const block5 = this.physics.add.sprite(2353, -1387, "bubble-64px");
		block5.visible = false;
		block5.body.pushable = false;
		block5.body.immovable = true;
		block5.body.setSize(64, 64, false);

		// sawup
		const sawup = this.physics.add.sprite(4100, 666, "rotating_saw_01");
		sawup.scaleX = 0.3890795272583355;
		sawup.scaleY = 0.3890795272583355;
		sawup.body.velocity.x = -500;
		sawup.body.collideWorldBounds = true;
		sawup.body.setSize(274, 144, false);

		// block6
		const block6 = this.physics.add.sprite(2088, -1388, "bubble-64px");
		block6.visible = false;
		block6.body.pushable = false;
		block6.body.immovable = true;
		block6.body.setSize(64, 64, false);

		// bottom
		const bottom = this.physics.add.sprite(7500, 715, "block_separator_01");
		bottom.scaleX = 24;
		bottom.scaleY = 1.2758460998239674;
		bottom.visible = false;
		bottom.body.pushable = false;
		bottom.body.immovable = true;
		bottom.body.setSize(695, 40, false);

		// plant0
		const plant0 = this.physics.add.sprite(-51, 957, "house_plant_example_06");
		plant0.scaleX = 0.13146847904697267;
		plant0.scaleY = 0.13146847904697267;
		plant0.body.gravity.y = 1000;
		plant0.body.checkCollision.up = false;
		plant0.body.setOffset(130, 0);
		plant0.body.setSize(200, 450, false);

		// brownseat1
		const brownseat1 = this.physics.add.sprite(-839, 575, "brown_1_seat");
		brownseat1.scaleX = 0.16509478414180956;
		brownseat1.scaleY = 0.16509478414180956;
		brownseat1.body.setSize(1070, 858, false);

		// shelf1
		const shelf1 = this.physics.add.sprite(6720, -1776, "light_wall_shelf");
		shelf1.scaleX = 0.15;
		shelf1.scaleY = 0.12;
		shelf1.body.setSize(1007, 85, false);

		// plant3
		const plant3 = this.physics.add.sprite(518, 106, "house_plant_example_07");
		plant3.scaleX = 0.06551410113588173;
		plant3.scaleY = 0.06551410113588173;
		plant3.body.gravity.y = 1000;
		plant3.body.checkCollision.up = false;
		plant3.body.setOffset(130, 0);
		plant3.body.setSize(400, 1099, false);

		// shelfrat1
		const shelfrat1 = this.physics.add.sprite(523, 149, "dark_wall_shelf");
		shelfrat1.scaleX = 0.1;
		shelfrat1.scaleY = 0.1006799198725784;
		shelfrat1.body.setSize(1007, 85, false);

		// paintingup2
		const paintingup2 = this.physics.add.sprite(1974, -1191, "painting_03_light");
		paintingup2.scaleX = 0.1779781357342463;
		paintingup2.scaleY = 0.1779781357342463;
		paintingup2.alpha = 0.9;
		paintingup2.alphaTopLeft = 0.9;
		paintingup2.alphaTopRight = 0.9;
		paintingup2.alphaBottomLeft = 0.9;
		paintingup2.alphaBottomRight = 0.9;
		paintingup2.body.setSize(614, 432, false);

		// shelfup1
		const shelfup1 = this.physics.add.sprite(2983, -539, "light_wall_shelf");
		shelfup1.scaleX = 0.18;
		shelfup1.scaleY = 0.1006799198725784;
		shelfup1.body.setSize(1007, 85, false);

		// shelveplant6
		const shelveplant6 = this.physics.add.sprite(4476, -520, "light_wall_shelf");
		shelveplant6.scaleX = 0.15;
		shelveplant6.scaleY = 0.12;
		shelveplant6.body.pushable = false;
		shelveplant6.body.immovable = true;
		shelveplant6.body.setSize(1007, 85, false);

		// ceiling12
		const ceiling12 = this.add.tileSprite(6565, -126, 35000, 63, "skirting_light");
		ceiling12.scaleX = 0.122;
		ceiling12.scaleY = 0.2528690000816929;

		// clock10
		const clock10 = this.physics.add.sprite(6406, -251, "light_wall_clock");
		clock10.scaleX = 0.20385770649887922;
		clock10.scaleY = 0.20385770649887922;
		clock10.tintTopLeft = 4735811;
		clock10.body.setSize(330, 630, false);

		// painting1low
		const painting1low = this.physics.add.sprite(7029, -1228, "painting_01_dark");
		painting1low.scaleX = 0.15518911011864742;
		painting1low.scaleY = 0.15518911011864742;
		painting1low.body.setSize(739, 504, false);

		// sliceDevice2
		const sliceDevice2 = new SliceDevice(this, -1035, 229);
		this.add.existing(sliceDevice2);

		// sliceDevice1
		const sliceDevice1 = new SliceDevice(this, 7043, -2246);
		this.add.existing(sliceDevice1);

		// paintsmall1
		const paintsmall1 = this.physics.add.sprite(-274, 241, "light_wall_clock");
		paintsmall1.scaleX = 0.1799530133039294;
		paintsmall1.scaleY = 0.1799530133039294;
		paintsmall1.tintTopLeft = 657673;
		paintsmall1.body.pushable = false;
		paintsmall1.body.immovable = true;
		paintsmall1.body.setOffset(50, 250);
		paintsmall1.body.setSize(200, 210, false);

		// shelfrat2
		const shelfrat2 = this.physics.add.sprite(-47, 996, "light_wall_shelf");
		shelfrat2.scaleX = 0.12;
		shelfrat2.scaleY = 0.1006799198725784;
		shelfrat2.body.setSize(1007, 85, false);

		// plant2
		const plant2 = this.physics.add.sprite(6749, -1808, "house_plant_example_06");
		plant2.scaleX = 0.13146847904697267;
		plant2.scaleY = 0.13146847904697267;
		plant2.body.gravity.y = 1000;
		plant2.body.checkCollision.up = false;
		plant2.body.setOffset(130, 0);
		plant2.body.setSize(400, 450, false);

		// paintsmall2
		const paintsmall2 = this.physics.add.sprite(2088, 145, "painting_05_dark");
		paintsmall2.scaleX = 0.19119876275062284;
		paintsmall2.scaleY = 0.19119876275062284;
		paintsmall2.body.pushable = false;
		paintsmall2.body.immovable = true;
		paintsmall2.body.setOffset(50, 80);
		paintsmall2.body.setSize(190, 250, false);

		// paintsmall3
		const paintsmall3 = this.physics.add.sprite(2302, 378, "boar_head_light");
		paintsmall3.scaleX = 0.2521140526640839;
		paintsmall3.scaleY = 0.2521140526640839;
		paintsmall3.body.pushable = false;
		paintsmall3.body.immovable = true;
		paintsmall3.body.setOffset(90, 100);
		paintsmall3.body.setSize(250, 250, false);

		// rat1
		const rat1 = new Rat(this, 7825, -1412);
		this.add.existing(rat1);
		rat1.body.velocity.x = 50;
		rat1.body.velocity.y = 0;

		// plant1
		const plant1 = this.physics.add.sprite(7431, -1802, "house_plant_example_06");
		plant1.scaleX = 0.13480782264407784;
		plant1.scaleY = 0.13480782264407784;
		plant1.body.gravity.y = 1000;
		plant1.body.checkCollision.up = false;
		plant1.body.setOffset(130, 0);
		plant1.body.setSize(400, 400, false);

		// paintsmallup1
		const paintsmallup1 = this.physics.add.sprite(106, -343, "painting_07_light");
		paintsmallup1.name = "paintsmallup1";
		paintsmallup1.scaleX = 0.23972367210598217;
		paintsmallup1.scaleY = 0.23972367210598217;
		paintsmallup1.body.pushable = false;
		paintsmallup1.body.immovable = true;
		paintsmallup1.body.setOffset(50, 80);
		paintsmallup1.body.setSize(190, 250, false);

		// paintsmallup2
		const paintsmallup2 = this.physics.add.sprite(1029, -272, "painting_02_light");
		paintsmallup2.scaleX = 0.12465039231210977;
		paintsmallup2.scaleY = 0.12465039231210977;
		paintsmallup2.body.pushable = false;
		paintsmallup2.body.immovable = true;
		paintsmallup2.body.setOffset(50, 80);
		paintsmallup2.body.setSize(250, 300, false);

		// long_rope_piece_1
		const long_rope_piece_1 = this.add.image(3861, -695, "long_rope_piece");
		long_rope_piece_1.scaleX = 0.1592984004884527;
		long_rope_piece_1.scaleY = 0.1592984004884527;

		// long_rope_piece_2
		const long_rope_piece_2 = this.add.image(1795, -702, "long_rope_piece");
		long_rope_piece_2.scaleX = 0.1592984004884527;
		long_rope_piece_2.scaleY = 0.1592984004884527;

		// rat2
		const rat2 = new Rat(this, 2981, -574);
		this.add.existing(rat2);
		rat2.body.velocity.x = 50;
		rat2.body.velocity.y = 0;

		// paintsmall
		const paintsmall = this.physics.add.sprite(-431, -424, "light_wall_clock");
		paintsmall.scaleX = 0.1799530133039294;
		paintsmall.scaleY = 0.1799530133039294;
		paintsmall.body.pushable = false;
		paintsmall.body.immovable = true;
		paintsmall.body.setOffset(50, 250);
		paintsmall.body.setSize(200, 210, false);

		// shelfup
		const shelfup = this.physics.add.sprite(1289, -468, "light_wall_shelf");
		shelfup.scaleX = 0.12;
		shelfup.scaleY = 0.1006799198725784;
		shelfup.body.setSize(1007, 85, false);

		// shelfup4
		const shelfup4 = this.physics.add.sprite(640, -415, "light_wall_shelf");
		shelfup4.scaleX = 0.12;
		shelfup4.scaleY = 0.1006799198725784;
		shelfup4.body.setSize(1007, 85, false);

		// paintsmallup
		const paintsmallup = this.physics.add.sprite(15167, 167, "painting_05_gold");
		paintsmallup.scaleX = 0.19184204787921627;
		paintsmallup.scaleY = 0.19184204787921627;
		paintsmallup.body.pushable = false;
		paintsmallup.body.immovable = true;
		paintsmallup.body.setOffset(50, 80);
		paintsmallup.body.setSize(190, 250, false);

		// shelfuplast
		const shelfuplast = this.physics.add.sprite(2006, -522, "light_wall_shelf");
		shelfuplast.scaleX = 0.12;
		shelfuplast.scaleY = 0.1006799198725784;
		shelfuplast.body.setSize(1007, 85, false);

		// sliceDevice3
		const sliceDevice3 = new SliceDevice(this, 5612, -1078);
		this.add.existing(sliceDevice3);

		// painting5
		const painting5 = this.physics.add.sprite(1482, 425, "painting_03_light");
		painting5.scaleX = 0.14831162045864224;
		painting5.scaleY = 0.14831162045864224;
		painting5.alpha = 0.9;
		painting5.alphaTopLeft = 0.9;
		painting5.alphaTopRight = 0.9;
		painting5.alphaBottomLeft = 0.9;
		painting5.alphaBottomRight = 0.9;
		painting5.body.setSize(614, 432, false);

		// paintsmalldown1
		const paintsmalldown1 = this.physics.add.sprite(4638, 212, "painting_02_dark");
		paintsmalldown1.scaleX = 0.1470174561758351;
		paintsmalldown1.scaleY = 0.1470174561758351;
		paintsmalldown1.body.pushable = false;
		paintsmalldown1.body.immovable = true;
		paintsmalldown1.body.setSize(300, 400, false);

		// ghost
		const ghost = new Ghost(this, 3041, -1263);
		this.add.existing(ghost);
		ghost.scaleX = 0.38868994040052907;
		ghost.scaleY = 0.38868994040052907;
		ghost.alpha = 0.3;
		ghost.body.collideWorldBounds = true;

		// ghost_1
		const ghost_1 = new Ghost(this, 3498, -294);
		this.add.existing(ghost_1);
		ghost_1.scaleX = 0.38868994040052907;
		ghost_1.scaleY = 0.38868994040052907;
		ghost_1.alpha = 0.3;
		ghost_1.body.collideWorldBounds = true;

		// fallingBlock1
		const fallingBlock1 = new FallingBlock(this, 3863, -579);
		this.add.existing(fallingBlock1);

		// fallingBlock2
		const fallingBlock2 = new FallingBlock(this, 1797, -590);
		this.add.existing(fallingBlock2);

		// sliceDevice4
		const sliceDevice4 = new SliceDevice(this, 808, -599);
		this.add.existing(sliceDevice4);

		// paintsmallupoff1
		const paintsmallupoff1 = this.physics.add.sprite(853, 323, "painting_06_dark");
		paintsmallupoff1.scaleX = 0.18401362819590242;
		paintsmallupoff1.scaleY = 0.18401362819590242;
		paintsmallupoff1.body.pushable = false;
		paintsmallupoff1.body.immovable = true;
		paintsmallupoff1.body.setOffset(50, 80);
		paintsmallupoff1.body.setSize(190, 250, false);

		// paintsmallupoff2
		const paintsmallupoff2 = this.physics.add.sprite(12941, -236, "painting_06_dark");
		paintsmallupoff2.scaleX = 0.1819409976968165;
		paintsmallupoff2.scaleY = 0.1819409976968165;
		paintsmallupoff2.body.pushable = false;
		paintsmallupoff2.body.immovable = true;
		paintsmallupoff2.body.setOffset(50, 80);
		paintsmallupoff2.body.setSize(190, 250, false);

		// plantup1
		const plantup1 = this.physics.add.sprite(637, -463, "house_plant_example_06");
		plantup1.scaleX = 0.13146847904697267;
		plantup1.scaleY = 0.13146847904697267;
		plantup1.body.gravity.y = 1000;
		plantup1.body.checkCollision.up = false;
		plantup1.body.setOffset(130, 0);
		plantup1.body.setSize(200, 450, false);

		// plantup2
		const plantup2 = this.physics.add.sprite(2004, -582, "house_plant_example_06");
		plantup2.scaleX = 0.13146847904697267;
		plantup2.scaleY = 0.13146847904697267;
		plantup2.body.gravity.y = 1000;
		plantup2.body.checkCollision.up = false;
		plantup2.body.setOffset(130, 0);
		plantup2.body.setSize(200, 450, false);

		// plantup7
		const plantup7 = this.physics.add.sprite(4483, -577, "house_plant_example_07");
		plantup7.scaleX = 0.06551410113588173;
		plantup7.scaleY = 0.06551410113588173;
		plantup7.tintTopLeft = 460551;
		plantup7.body.gravity.y = 1000;
		plantup7.body.checkCollision.up = false;
		plantup7.body.setOffset(130, 0);
		plantup7.body.setSize(400, 1099, false);

		// paintsmallupoff
		const paintsmallupoff = this.physics.add.sprite(3051, 274, "painting_06_dark");
		paintsmallupoff.scaleX = 0.17714029460836542;
		paintsmallupoff.scaleY = 0.17714029460836542;
		paintsmallupoff.body.pushable = false;
		paintsmallupoff.body.immovable = true;
		paintsmallupoff.body.setOffset(50, 80);
		paintsmallupoff.body.setSize(190, 250, false);

		// bat1
		const bat1 = new Bat(this, 992, 185);
		this.add.existing(bat1);
		bat1.scaleX = 0.1541641202615882;
		bat1.scaleY = 0.1541641202615882;
		bat1.body.velocity.x = -400;
		bat1.body.velocity.y = 0;
		bat1.body.collideWorldBounds = true;

		// paintingceil12
		const paintingceil12 = this.physics.add.sprite(12142, 269, "painting_05_dark");
		paintingceil12.scaleX = 0.18459363218065866;
		paintingceil12.scaleY = 0.18459363218065866;
		paintingceil12.body.setSize(263, 320, false);

		// paintingup
		const paintingup = this.physics.add.sprite(909, -1354, "painting_03_light");
		paintingup.scaleX = 0.1779781357342463;
		paintingup.scaleY = 0.1779781357342463;
		paintingup.alpha = 0.9;
		paintingup.alphaTopLeft = 0.9;
		paintingup.alphaTopRight = 0.9;
		paintingup.alphaBottomLeft = 0.9;
		paintingup.alphaBottomRight = 0.9;
		paintingup.body.setSize(614, 432, false);

		// paintingceil7
		const paintingceil7 = this.physics.add.sprite(7029, 297, "painting_05_gold");
		paintingceil7.scaleX = 0.18498953314343103;
		paintingceil7.scaleY = 0.18498953314343103;
		paintingceil7.body.setSize(363, 428, false);

		// paintingceil6
		const paintingceil6 = this.physics.add.sprite(-935, -1000, "painting_06_dark");
		paintingceil6.scaleX = 0.20073873451275298;
		paintingceil6.scaleY = 0.20073873451275298;
		paintingceil6.body.setSize(263, 320, false);

		// paintingceil8
		const paintingceil8 = this.physics.add.sprite(6523, 289, "painting_02_light");
		paintingceil8.scaleX = 0.12963502118307835;
		paintingceil8.scaleY = 0.12963502118307835;
		paintingceil8.body.setSize(363, 428, false);

		// paintingceil5
		const paintingceil5 = this.physics.add.sprite(6760, 524, "painting_02_light");
		paintingceil5.scaleX = 0.13608728702172712;
		paintingceil5.scaleY = 0.13608728702172712;
		paintingceil5.body.setSize(363, 428, false);

		// paintingceil10
		const paintingceil10 = this.physics.add.sprite(6778, 60, "painting_05_dark");
		paintingceil10.scaleX = 0.1916944150663452;
		paintingceil10.scaleY = 0.1916944150663452;
		paintingceil10.body.setSize(263, 320, false);

		// paintingceil11
		const paintingceil11 = this.physics.add.sprite(1388, -1224, "painting_07_dark");
		paintingceil11.scaleX = 0.19836442265026485;
		paintingceil11.scaleY = 0.19836442265026485;
		paintingceil11.body.setSize(263, 320, false);

		// paintingceil1
		const paintingceil1 = this.physics.add.sprite(1772, -1049, "painting_02_light");
		paintingceil1.scaleX = 0.17225319852606685;
		paintingceil1.scaleY = 0.17225319852606685;
		paintingceil1.body.setSize(363, 428, false);

		// paintingceil2
		const paintingceil2 = this.physics.add.sprite(1107, -1153, "painting_02_light");
		paintingceil2.scaleX = 0.16531157115197148;
		paintingceil2.scaleY = 0.16531157115197148;
		paintingceil2.body.setSize(363, 428, false);

		// paintingceil4
		const paintingceil4 = this.physics.add.sprite(317, -1017, "painting_08_gold");
		paintingceil4.scaleX = 0.17225319852606685;
		paintingceil4.scaleY = 0.17225319852606685;
		paintingceil4.body.setOffset(0, 20);
		paintingceil4.body.setSize(363, 428, false);

		// paintingceil3
		const paintingceil3 = this.physics.add.sprite(615, -1259, "painting_02_light");
		paintingceil3.scaleX = 0.17225319852606685;
		paintingceil3.scaleY = 0.17225319852606685;
		paintingceil3.body.setOffset(0, 10);
		paintingceil3.body.setSize(363, 428, false);

		// paintingceil13
		const paintingceil13 = this.physics.add.sprite(4573, -1229, "painting_03_light");
		paintingceil13.scaleX = 0.1779781357342463;
		paintingceil13.scaleY = 0.1779781357342463;
		paintingceil13.alpha = 0.9;
		paintingceil13.alphaTopLeft = 0.9;
		paintingceil13.alphaTopRight = 0.9;
		paintingceil13.alphaBottomLeft = 0.9;
		paintingceil13.alphaBottomRight = 0.9;
		paintingceil13.body.setSize(614, 432, false);

		// purple_block_lift_shaft
		const purple_block_lift_shaft = this.add.image(1071, -472, "purple_block_lift_shaft");
		purple_block_lift_shaft.flipY = true;

		// paintingceil9
		const paintingceil9 = this.physics.add.sprite(5681, 323, "painting_02_light");
		paintingceil9.scaleX = 0.12252766383523896;
		paintingceil9.scaleY = 0.12252766383523896;
		paintingceil9.body.setSize(363, 428, false);

		// catPlayer
		const catPlayer = new CatPlayer(this, 183, 515);
		this.add.existing(catPlayer);
		catPlayer.body.collideWorldBounds = true;
		catPlayer.body.setOffset(180, 250);
		catPlayer.body.setSize(180, 260, false);

		// shelfup10
		const shelfup10 = this.physics.add.sprite(4495, -1456, "light_wall_shelf");
		shelfup10.scaleX = 0.12;
		shelfup10.scaleY = 0.1006799198725784;
		shelfup10.body.setSize(1007, 85, false);

		// shelfup11
		const shelfup11 = this.physics.add.sprite(2659, -1521, "light_wall_shelf");
		shelfup11.scaleX = 0.12;
		shelfup11.scaleY = 0.1006799198725784;
		shelfup11.body.setSize(1007, 85, false);

		// shelfup13
		const shelfup13 = this.physics.add.sprite(389, -1416, "light_wall_shelf");
		shelfup13.scaleX = 0.12;
		shelfup13.scaleY = 0.1006799198725784;
		shelfup13.body.setSize(1007, 85, false);

		// shelfup12
		const shelfup12 = this.physics.add.sprite(1576, -1380, "light_wall_shelf");
		shelfup12.scaleX = 0.12;
		shelfup12.scaleY = 0.1006799198725784;
		shelfup12.body.setSize(1007, 85, false);

		// sliceDevice6
		const sliceDevice6 = new SliceDevice(this, 3974, -1107);
		this.add.existing(sliceDevice6);

		// ghost_2
		const ghost_2 = new Ghost(this, 1255, -964);
		this.add.existing(ghost_2);
		ghost_2.scaleX = 0.38868994040052907;
		ghost_2.scaleY = 0.38868994040052907;
		ghost_2.alpha = 0.3;
		ghost_2.body.collideWorldBounds = true;

		// ghost_3
		const ghost_3 = new Ghost(this, 3253, -1317);
		this.add.existing(ghost_3);
		ghost_3.scaleX = 0.38868994040052907;
		ghost_3.scaleY = 0.38868994040052907;
		ghost_3.alpha = 0.3;
		ghost_3.body.collideWorldBounds = true;

		// sliceDevice5
		const sliceDevice5 = new SliceDevice(this, 1408, -1065);
		this.add.existing(sliceDevice5);

		// plantup10
		const plantup10 = this.physics.add.sprite(1582, -1494, "house_plant_example_07");
		plantup10.scaleX = 0.06551410113588173;
		plantup10.scaleY = 0.06551410113588173;
		plantup10.body.gravity.y = 1000;
		plantup10.body.checkCollision.up = false;
		plantup10.body.setOffset(130, 0);
		plantup10.body.setSize(400, 1099, false);

		// plantup11
		const plantup11 = this.physics.add.sprite(2683.698269821786, -1663.3053195971158, "house_plant_example_07");
		plantup11.scaleX = 0.06551410113588173;
		plantup11.scaleY = 0.06551410113588173;
		plantup11.body.gravity.y = 1000;
		plantup11.body.checkCollision.up = false;
		plantup11.body.setOffset(130, 0);
		plantup11.body.setSize(400, 1099, false);

		// plantup12
		const plantup12 = this.physics.add.sprite(4491, -1529, "house_plant_example_07");
		plantup12.scaleX = 0.06551410113588173;
		plantup12.scaleY = 0.06551410113588173;
		plantup12.body.gravity.y = 1000;
		plantup12.body.checkCollision.up = false;
		plantup12.body.setOffset(130, 0);
		plantup12.body.setSize(400, 1099, false);

		// plantup13
		const plantup13 = this.physics.add.sprite(425, -1573, "house_plant_example_07");
		plantup13.scaleX = 0.06551410113588173;
		plantup13.scaleY = 0.06551410113588173;
		plantup13.body.gravity.y = 1000;
		plantup13.body.checkCollision.up = false;
		plantup13.body.setOffset(130, 0);
		plantup13.body.setSize(400, 1099, false);

		// ghost_4
		const ghost_4 = new Ghost(this, 4548, -1580);
		this.add.existing(ghost_4);
		ghost_4.scaleX = 0.38868994040052907;
		ghost_4.scaleY = 0.38868994040052907;
		ghost_4.alpha = 0.3;
		ghost_4.body.collideWorldBounds = true;

		// shelfupratup
		const shelfupratup = this.physics.add.sprite(2217, -1358, "light_wall_shelf");
		shelfupratup.scaleX = 0.12;
		shelfupratup.scaleY = 0.1006799198725784;
		shelfupratup.body.setSize(1007, 85, false);

		// ratup
		const ratup = new Rat(this, 2217, -1390);
		this.add.existing(ratup);
		ratup.body.velocity.x = 50;
		ratup.body.velocity.y = 0;

		// chandelier1
		const chandelier1 = this.physics.add.sprite(1650, 179, "chandelier_large");
		chandelier1.scaleX = 0.24263209916707398;
		chandelier1.scaleY = 0.24263209916707398;
		chandelier1.body.bounce.y = 0.3;
		chandelier1.body.pushable = false;
		chandelier1.body.immovable = true;
		chandelier1.body.setOffset(0, 300);
		chandelier1.body.setSize(721, 150, false);

		// rope1
		const rope1 = this.add.image(1646, 34, "long_rope_piece");
		rope1.scaleX = 0.11473913171425401;
		rope1.scaleY = 0.19;

		// lavaball_line_x8_04
		const lavaball_line_x8_04 = this.physics.add.sprite(7219, -966, "lavaball_line_x8_04");
		lavaball_line_x8_04.scaleX = 0.4975495259360263;
		lavaball_line_x8_04.scaleY = 0.4975495259360263;
		lavaball_line_x8_04.body.angularVelocity = 50;
		lavaball_line_x8_04.body.setSize(726, 132, false);

		// squarefire1
		const squarefire1 = this.physics.add.sprite(3556, 1069, "circle_with_outlet");
		squarefire1.scaleX = 0.3188317246323248;
		squarefire1.scaleY = 0.3188317246323248;
		squarefire1.body.setSize(164, 164, false);

		// squarefire
		const squarefire = this.physics.add.sprite(518, 944, "circle_with_outlet");
		squarefire.scaleX = 0.3188317246323248;
		squarefire.scaleY = 0.3188317246323248;
		squarefire.body.setSize(164, 164, false);

		// fireballline1
		const fireballline1 = this.physics.add.sprite(519, 943, "lavaball_line_x4_03");
		fireballline1.scaleX = 0.4836510741372375;
		fireballline1.scaleY = 0.4836510741372375;
		fireballline1.angle = 79;
		fireballline1.setOrigin(-0.0017065568844329409, 0.48278532648007116);
		fireballline1.body.angularVelocity = 100;
		fireballline1.body.setSize(396, 132, false);

		// squarefire2
		const squarefire2 = this.physics.add.sprite(1153, 1031, "circle_with_outlet");
		squarefire2.scaleX = 0.3188317246323248;
		squarefire2.scaleY = 0.3188317246323248;
		squarefire2.body.setSize(164, 164, false);

		// fireballline2
		const fireballline2 = this.physics.add.sprite(1153, 1030, "lavaball_line_x4_03");
		fireballline2.scaleX = 0.4836510741372375;
		fireballline2.scaleY = 0.4836510741372375;
		fireballline2.angle = -81.00000000000006;
		fireballline2.setOrigin(-0.0017065568844329409, 0.48278532648007116);
		fireballline2.body.angularVelocity = 100;
		fireballline2.body.setSize(396, 132, false);

		// spike3
		const spike3 = this.physics.add.sprite(1704, -333, "long_metal_spike_04");
		spike3.scaleX = 0.540473939089177;
		spike3.scaleY = 0.540473939089177;
		spike3.body.setSize(78, 116, false);

		// spike2
		const spike2 = this.physics.add.sprite(1751, -334, "long_metal_spike_04");
		spike2.scaleX = 0.540473939089177;
		spike2.scaleY = 0.540473939089177;
		spike2.body.setSize(78, 116, false);

		// spike1
		const spike1 = this.physics.add.sprite(1658, -333, "long_metal_spike_04");
		spike1.scaleX = 0.540473939089177;
		spike1.scaleY = 0.540473939089177;
		spike1.body.setSize(78, 116, false);

		// squarefire3
		const squarefire3 = this.physics.add.sprite(1757, 1288, "circle_with_outlet");
		squarefire3.scaleX = 0.3188317246323248;
		squarefire3.scaleY = 0.3188317246323248;
		squarefire3.body.setSize(164, 164, false);

		// fireballline
		const fireballline = this.physics.add.sprite(1758, 1287, "lavaball_line_x4_03");
		fireballline.scaleX = 0.4836510741372375;
		fireballline.scaleY = 0.4836510741372375;
		fireballline.setOrigin(-0.05539107368401411, 0.48278532648007205);
		fireballline.body.angularVelocity = 100;
		fireballline.body.setSize(396, 132, false);

		// flaghang
		const flaghang = this.physics.add.sprite(6730, -1427, "hanging_flag_square");
		flaghang.scaleX = 0.26815350387680253;
		flaghang.scaleY = 0.26815350387680253;
		flaghang.body.setSize(260, 387, false);

		// shelf1down
		const shelf1down = this.physics.add.sprite(522, 157, "shelf");
		shelf1down.scaleX = 0.3825109109903311;
		shelf1down.scaleY = 0.24208855368295396;
		shelf1down.body.pushable = false;
		shelf1down.body.immovable = true;
		shelf1down.body.setSize(309, 127, false);

		// lavaline6
		const lavaline6 = this.physics.add.sprite(3557, 1072, "lavaball_line_x6_01");
		lavaline6.scaleX = 0.5755830898966583;
		lavaline6.scaleY = 0.5755830898966583;
		lavaline6.setOrigin(-0.023689716321841026, 0.4699232257517862);
		lavaline6.body.angularVelocity = 80;
		lavaline6.body.setSize(561, 132, false);

		// chandelier2
		const chandelier2 = this.physics.add.sprite(3401, 163, "chandelier_large");
		chandelier2.scaleX = 0.24263209916707398;
		chandelier2.scaleY = 0.24263209916707398;
		chandelier2.body.bounce.y = 0.3;
		chandelier2.body.pushable = false;
		chandelier2.body.immovable = true;
		chandelier2.body.setOffset(0, 300);
		chandelier2.body.setSize(721, 150, false);

		// rope2
		const rope2 = this.add.image(3397, -29, "long_rope_piece");
		rope2.scaleX = 0.11473913171425401;
		rope2.scaleY = 0.19;

		// lavabubble
		const lavabubble = this.physics.add.sprite(4665, 659, "bubble_03");
		lavabubble.scaleX = 0.5285404057121356;
		lavabubble.scaleY = 0.5285404057121356;
		lavabubble.body.setSize(171, 107, false);

		// squarefire4
		const squarefire4 = this.physics.add.sprite(2510, 1108, "circle_with_outlet");
		squarefire4.scaleX = 0.3188317246323248;
		squarefire4.scaleY = 0.3188317246323248;
		squarefire4.body.setSize(164, 164, false);

		// fireballline4
		const fireballline4 = this.physics.add.sprite(2511, 1107, "lavaball_line_x4_03");
		fireballline4.scaleX = 0.4836510741372375;
		fireballline4.scaleY = 0.4836510741372375;
		fireballline4.setOrigin(-0.05539107368401411, 0.48278532648007205);
		fireballline4.body.angularVelocity = 100;
		fireballline4.body.setSize(396, 132, false);

		// stoop
		const stoop = this.physics.add.sprite(4399, 707, "pillar_complete");
		stoop.scaleX = 0.3889567666534064;
		stoop.scaleY = 0.3889567666534064;
		stoop.body.pushable = false;
		stoop.body.immovable = true;
		stoop.body.setSize(406, 1328, false);

		// lavabubble1
		const lavabubble1 = this.physics.add.sprite(4845, 656, "bubble_03");
		lavabubble1.scaleX = 0.3778328471263289;
		lavabubble1.scaleY = 0.3778328471263289;
		lavabubble1.body.setSize(171, 107, false);

		// lavabubble2
		const lavabubble2 = this.physics.add.sprite(5062, 658, "bubble_03");
		lavabubble2.scaleX = 0.5205481541605428;
		lavabubble2.scaleY = 0.5205481541605428;
		lavabubble2.body.setSize(171, 107, false);

		// paintboar1
		const paintboar1 = this.physics.add.sprite(4997, 353, "boar_head_light");
		paintboar1.scaleX = 0.2521140526640839;
		paintboar1.scaleY = 0.2521140526640839;
		paintboar1.body.pushable = false;
		paintboar1.body.immovable = true;
		paintboar1.body.setOffset(90, 100);
		paintboar1.body.setSize(250, 250, false);

		// chandelier
		const chandelier = this.physics.add.sprite(5276, 126, "chandelier_large");
		chandelier.scaleX = 0.24263209916707398;
		chandelier.scaleY = 0.24263209916707398;
		chandelier.body.bounce.y = 0.3;
		chandelier.body.pushable = false;
		chandelier.body.immovable = true;
		chandelier.body.setOffset(0, 300);
		chandelier.body.setSize(721, 150, false);

		// rope
		const rope = this.add.image(5272, -19, "long_rope_piece");
		rope.scaleX = 0.11473913171425401;
		rope.scaleY = 0.19;

		// chandelier3
		const chandelier3 = this.physics.add.sprite(6013, 129, "chandelier_large");
		chandelier3.scaleX = 0.24263209916707398;
		chandelier3.scaleY = 0.24263209916707398;
		chandelier3.body.bounce.y = 0.3;
		chandelier3.body.pushable = false;
		chandelier3.body.immovable = true;
		chandelier3.body.setOffset(0, 300);
		chandelier3.body.setSize(721, 150, false);

		// rope3
		const rope3 = this.add.image(6009, -16, "long_rope_piece");
		rope3.scaleX = 0.11473913171425401;
		rope3.scaleY = 0.19;

		// squarefire_1
		const squarefire_1 = this.physics.add.sprite(6755, 299, "circle_with_outlet");
		squarefire_1.scaleX = 0.3188317246323248;
		squarefire_1.scaleY = 0.3188317246323248;
		squarefire_1.body.setSize(164, 164, false);

		// fireballline_1
		const fireballline_1 = this.physics.add.sprite(6756, 298, "lavaball_line_x4_03");
		fireballline_1.scaleX = 0.4836510741372375;
		fireballline_1.scaleY = 0.4836510741372375;
		fireballline_1.setOrigin(-0.05539107368401411, 0.48278532648007205);
		fireballline_1.body.angularVelocity = 100;
		fireballline_1.body.setSize(396, 132, false);

		// squarefire_2
		const squarefire_2 = this.physics.add.sprite(9023, -716, "circle_with_outlet");
		squarefire_2.scaleX = 0.3188317246323248;
		squarefire_2.scaleY = 0.3188317246323248;
		squarefire_2.body.setSize(164, 164, false);

		// fireballline_2
		const fireballline_2 = this.physics.add.sprite(9024, -717, "lavaball_line_x4_03");
		fireballline_2.scaleX = 0.4836510741372375;
		fireballline_2.scaleY = 0.4836510741372375;
		fireballline_2.setOrigin(-0.05539107368401411, 0.48278532648007205);
		fireballline_2.body.angularVelocity = 100;
		fireballline_2.body.setSize(396, 132, false);

		// paintingceil
		const paintingceil = this.physics.add.sprite(8251, 227, "painting_05_gold");
		paintingceil.scaleX = 0.18498953314343103;
		paintingceil.scaleY = 0.18498953314343103;
		paintingceil.body.setSize(363, 428, false);

		// paintingceil_1
		const paintingceil_1 = this.physics.add.sprite(7756, 249, "painting_02_light");
		paintingceil_1.scaleX = 0.13608728702172726;
		paintingceil_1.scaleY = 0.13608728702172726;
		paintingceil_1.body.setSize(363, 428, false);

		// paintingceil_2
		const paintingceil_2 = this.physics.add.sprite(7980, 483, "painting_02_light");
		paintingceil_2.scaleX = 0.13608728702172654;
		paintingceil_2.scaleY = 0.13608728702172654;
		paintingceil_2.body.setSize(363, 428, false);

		// paintingceil_3
		const paintingceil_3 = this.physics.add.sprite(7974, 35, "painting_05_dark");
		paintingceil_3.scaleX = 0.1916944150663452;
		paintingceil_3.scaleY = 0.1916944150663452;
		paintingceil_3.body.setSize(263, 320, false);

		// squarefire_3
		const squarefire_3 = this.physics.add.sprite(7988, 259, "circle_with_outlet");
		squarefire_3.scaleX = 0.3188317246323248;
		squarefire_3.scaleY = 0.3188317246323248;
		squarefire_3.body.setSize(164, 164, false);

		// fireballline_3
		const fireballline_3 = this.physics.add.sprite(7989, 258, "lavaball_line_x4_03");
		fireballline_3.scaleX = 0.4836510741372375;
		fireballline_3.scaleY = 0.4836510741372375;
		fireballline_3.setOrigin(-0.05539107368401411, 0.48278532648007205);
		fireballline_3.body.angularVelocity = 100;
		fireballline_3.body.setSize(396, 132, false);

		// paintboar
		const paintboar = this.physics.add.sprite(7385, 330, "boar_head_light");
		paintboar.scaleX = 0.2521140526640839;
		paintboar.scaleY = 0.2521140526640839;
		paintboar.body.pushable = false;
		paintboar.body.immovable = true;
		paintboar.body.setOffset(90, 100);
		paintboar.body.setSize(250, 250, false);

		// ceiling
		const ceiling = this.add.tileSprite(10956, -130, 35000, 63, "skirting_light");
		ceiling.scaleX = 0.122;
		ceiling.scaleY = 0.2528690000816929;

		// lavabubble3
		const lavabubble3 = this.physics.add.sprite(5232, 653, "bubble_03");
		lavabubble3.scaleX = 0.29279657789352187;
		lavabubble3.scaleY = 0.29279657789352187;
		lavabubble3.body.setSize(171, 107, false);

		// lavabubble5
		const lavabubble5 = this.physics.add.sprite(5685, 658, "bubble_03");
		lavabubble5.scaleX = 0.36208663997775825;
		lavabubble5.scaleY = 0.36208663997775825;
		lavabubble5.body.setSize(171, 107, false);

		// lavabubble4
		const lavabubble4 = this.physics.add.sprite(5446, 658, "bubble_03");
		lavabubble4.scaleX = 0.5205481541605428;
		lavabubble4.scaleY = 0.5205481541605428;
		lavabubble4.body.setSize(171, 107, false);

		// lavabubble6
		const lavabubble6 = this.physics.add.sprite(5842, 661, "bubble_03");
		lavabubble6.scaleX = 0.36208663997775825;
		lavabubble6.scaleY = 0.36208663997775825;
		lavabubble6.body.setSize(171, 107, false);

		// lavabubble7
		const lavabubble7 = this.physics.add.sprite(6075, 657, "bubble_03");
		lavabubble7.scaleX = 0.36208663997775825;
		lavabubble7.scaleY = 0.36208663997775825;
		lavabubble7.body.setSize(171, 107, false);

		// paintboar2
		const paintboar2 = this.physics.add.sprite(10257, 279, "boar_head_light");
		paintboar2.scaleX = 0.2521140526640839;
		paintboar2.scaleY = 0.2521140526640839;
		paintboar2.body.pushable = false;
		paintboar2.body.immovable = true;
		paintboar2.body.setOffset(90, 100);
		paintboar2.body.setSize(250, 250, false);

		// chandelier4
		const chandelier4 = this.physics.add.sprite(9193, 121, "chandelier_large");
		chandelier4.scaleX = 0.24263209916707398;
		chandelier4.scaleY = 0.24263209916707398;
		chandelier4.body.bounce.y = 0.3;
		chandelier4.body.pushable = false;
		chandelier4.body.immovable = true;
		chandelier4.body.setOffset(0, 300);
		chandelier4.body.setSize(721, 150, false);

		// rope4
		const rope4 = this.add.image(9189, -24, "long_rope_piece");
		rope4.scaleX = 0.11473913171425401;
		rope4.scaleY = 0.19;

		// lavabubble8
		const lavabubble8 = this.physics.add.sprite(6247, 664, "bubble_03");
		lavabubble8.scaleX = 0.36208663997775825;
		lavabubble8.scaleY = 0.36208663997775825;
		lavabubble8.body.setSize(171, 107, false);

		// lavabubble9
		const lavabubble9 = this.physics.add.sprite(6389, 654, "bubble_03");
		lavabubble9.scaleX = 0.36208663997775825;
		lavabubble9.scaleY = 0.36208663997775825;
		lavabubble9.body.setSize(171, 107, false);

		// lavabubble10
		const lavabubble10 = this.physics.add.sprite(6514, 669, "bubble_03");
		lavabubble10.scaleX = 0.36208663997775825;
		lavabubble10.scaleY = 0.36208663997775825;
		lavabubble10.body.setSize(171, 107, false);

		// lavabubble11
		const lavabubble11 = this.physics.add.sprite(6654, 657, "bubble_03");
		lavabubble11.scaleX = 0.36208663997775825;
		lavabubble11.scaleY = 0.36208663997775825;
		lavabubble11.body.setSize(171, 107, false);

		// lavabubble12
		const lavabubble12 = this.physics.add.sprite(6838, 655, "bubble_03");
		lavabubble12.scaleX = 0.36208663997775825;
		lavabubble12.scaleY = 0.36208663997775825;
		lavabubble12.body.setSize(171, 107, false);

		// lavabubble13
		const lavabubble13 = this.physics.add.sprite(7024, 672, "bubble_03");
		lavabubble13.scaleX = 0.36208663997775825;
		lavabubble13.scaleY = 0.36208663997775825;
		lavabubble13.body.setSize(171, 107, false);

		// lavabubble14
		const lavabubble14 = this.physics.add.sprite(7171, 652, "bubble_03");
		lavabubble14.scaleX = 0.36208663997775825;
		lavabubble14.scaleY = 0.36208663997775825;
		lavabubble14.body.setSize(171, 107, false);

		// lavabubble15
		const lavabubble15 = this.physics.add.sprite(7347, 650, "bubble_03");
		lavabubble15.scaleX = 0.36208663997775825;
		lavabubble15.scaleY = 0.36208663997775825;
		lavabubble15.visible = false;
		lavabubble15.body.setSize(171, 107, false);

		// chandelier5
		const chandelier5 = this.physics.add.sprite(11243, 117, "chandelier_large");
		chandelier5.scaleX = 0.24263209916707398;
		chandelier5.scaleY = 0.24263209916707398;
		chandelier5.body.bounce.y = 0.3;
		chandelier5.body.pushable = false;
		chandelier5.body.immovable = true;
		chandelier5.body.setOffset(0, 300);
		chandelier5.body.setSize(721, 150, false);

		// rope5
		const rope5 = this.add.image(11239, -28, "long_rope_piece");
		rope5.scaleX = 0.11473913171425401;
		rope5.scaleY = 0.19;

		// chandelier6
		const chandelier6 = this.physics.add.sprite(11701, 114, "chandelier_large");
		chandelier6.scaleX = 0.24263209916707398;
		chandelier6.scaleY = 0.24263209916707398;
		chandelier6.body.bounce.y = 0.3;
		chandelier6.body.pushable = false;
		chandelier6.body.immovable = true;
		chandelier6.body.setOffset(0, 300);
		chandelier6.body.setSize(721, 150, false);

		// bigrat
		const bigrat = this.physics.add.sprite(14356, 349, "__rat_idle_standing_000");
		bigrat.scaleX = 0.46860815496179686;
		bigrat.scaleY = 0.46860815496179686;
		bigrat.tintTopLeft = 13485509;
		bigrat.tintTopRight = 10786454;
		bigrat.tintBottomLeft = 11577769;
		bigrat.tintBottomRight = 12695993;
		bigrat.body.setSize(536, 268, false);

		// rope6
		const rope6 = this.add.image(11697, -31, "long_rope_piece");
		rope6.scaleX = 0.11473913171425401;
		rope6.scaleY = 0.19;

		// chandelier7
		const chandelier7 = this.physics.add.sprite(12514, 125, "chandelier_large");
		chandelier7.scaleX = 0.24263209916707398;
		chandelier7.scaleY = 0.24263209916707398;
		chandelier7.body.bounce.y = 0.3;
		chandelier7.body.pushable = false;
		chandelier7.body.immovable = true;
		chandelier7.body.setOffset(0, 300);
		chandelier7.body.setSize(721, 150, false);

		// rope7
		const rope7 = this.physics.add.sprite(12510, -20, "long_rope_piece");
		rope7.scaleX = 0.11473913171425401;
		rope7.scaleY = 0.19;
		rope7.body.setSize(63, 1042, false);

		// congrats
		const congrats = this.add.text(15613, 137, "", {});
		congrats.alpha = 0.5;
		congrats.alphaTopLeft = 0.5;
		congrats.alphaTopRight = 0.5;
		congrats.alphaBottomLeft = 0.5;
		congrats.alphaBottomRight = 0.5;
		congrats.text = "Congratulations!";
		congrats.setStyle({ "fontSize": "50px", "fontStyle": "bold italic" });

		// tourch_lit
		const tourch_lit = this.add.image(13184, -302, "tourch_lit_01");
		tourch_lit.scaleX = 0.16351073780143233;
		tourch_lit.scaleY = 0.16351073780143233;

		// lavabubble16
		const lavabubble16 = this.physics.add.sprite(12594, 661, "bubble_03");
		lavabubble16.scaleX = 0.36208663997775825;
		lavabubble16.scaleY = 0.36208663997775825;
		lavabubble16.body.setSize(171, 107, false);

		// lavabubble17
		const lavabubble17 = this.physics.add.sprite(12336, 651, "bubble_03");
		lavabubble17.scaleX = 0.36208663997775825;
		lavabubble17.scaleY = 0.36208663997775825;
		lavabubble17.body.setSize(171, 107, false);

		// lavabubble18
		const lavabubble18 = this.physics.add.sprite(12850, 659, "bubble_03");
		lavabubble18.scaleX = 0.36208663997775825;
		lavabubble18.scaleY = 0.36208663997775825;
		lavabubble18.body.setSize(171, 107, false);

		// lavabubble19
		const lavabubble19 = this.physics.add.sprite(13144, 657, "bubble_03");
		lavabubble19.scaleX = 0.36208663997775825;
		lavabubble19.scaleY = 0.36208663997775825;
		lavabubble19.body.setSize(171, 107, false);

		// full_star_thick_black_border
		const full_star_thick_black_border = this.add.image(15859, 285, "full-star-thick-black-border");
		full_star_thick_black_border.scaleX = 0.2727037579405175;
		full_star_thick_black_border.scaleY = 0.2727037579405175;

		// paintsmall_1
		const paintsmall_1 = this.physics.add.sprite(841, -301, "boar_head_light");
		paintsmall_1.scaleX = 0.2521140526640839;
		paintsmall_1.scaleY = 0.2521140526640839;
		paintsmall_1.body.pushable = false;
		paintsmall_1.body.immovable = true;
		paintsmall_1.body.setOffset(90, 100);
		paintsmall_1.body.setSize(250, 250, false);

		this.skirtingfloor = skirtingfloor;
		this.wallpaperdown = wallpaperdown;
		this.lastcastle2 = lastcastle2;
		this.castle1l = castle1l;
		this.castle1r = castle1r;
		this.lastcastle3 = lastcastle3;
		this.lastcastle4 = lastcastle4;
		this.castle2l = castle2l;
		this.lavaball1 = lavaball1;
		this.lavaball2 = lavaball2;
		this.lavaball4 = lavaball4;
		this.lavaball3 = lavaball3;
		this.lastcastle1 = lastcastle1;
		this.castle2r = castle2r;
		this.castle3l = castle3l;
		this.castle4l = castle4l;
		this.castle4r = castle4r;
		this.castle3r = castle3r;
		this.lavaball5 = lavaball5;
		this.lastcastle_1 = lastcastle_1;
		this.lastcastle_2 = lastcastle_2;
		this.lavaball7 = lavaball7;
		this.lavaball8 = lavaball8;
		this.lastcastle = lastcastle;
		this.stoop1 = stoop1;
		this.lavaball6 = lavaball6;
		this.lavaground = lavaground;
		this.floor = floor;
		this.stoop2 = stoop2;
		this.backgroundup = backgroundup;
		this.drawerup = drawerup;
		this.chair1 = chair1;
		this.bookcaseupper1 = bookcaseupper1;
		this.ceiling1 = ceiling1;
		this.ropeball2 = ropeball2;
		this.ropeball = ropeball;
		this.windowfirst = windowfirst;
		this.littletable = littletable;
		this.opendoor1 = opendoor1;
		this.painting3 = painting3;
		this.seatbrown1 = seatbrown1;
		this.shelf3 = shelf3;
		this.painting2low = painting2low;
		this.block2 = block2;
		this.block1 = block1;
		this.block3 = block3;
		this.block4 = block4;
		this.block5 = block5;
		this.sawup = sawup;
		this.block6 = block6;
		this.bottom = bottom;
		this.plant0 = plant0;
		this.brownseat1 = brownseat1;
		this.shelf1 = shelf1;
		this.plant3 = plant3;
		this.shelfrat1 = shelfrat1;
		this.paintingup2 = paintingup2;
		this.shelfup1 = shelfup1;
		this.shelveplant6 = shelveplant6;
		this.ceiling12 = ceiling12;
		this.clock10 = clock10;
		this.painting1low = painting1low;
		this.sliceDevice2 = sliceDevice2;
		this.sliceDevice1 = sliceDevice1;
		this.paintsmall1 = paintsmall1;
		this.shelfrat2 = shelfrat2;
		this.plant2 = plant2;
		this.paintsmall2 = paintsmall2;
		this.paintsmall3 = paintsmall3;
		this.rat1 = rat1;
		this.plant1 = plant1;
		this.paintsmallup1 = paintsmallup1;
		this.paintsmallup2 = paintsmallup2;
		this.rat2 = rat2;
		this.paintsmall = paintsmall;
		this.shelfup = shelfup;
		this.shelfup4 = shelfup4;
		this.paintsmallup = paintsmallup;
		this.shelfuplast = shelfuplast;
		this.sliceDevice3 = sliceDevice3;
		this.painting5 = painting5;
		this.paintsmalldown1 = paintsmalldown1;
		this.fallingBlock1 = fallingBlock1;
		this.fallingBlock2 = fallingBlock2;
		this.sliceDevice4 = sliceDevice4;
		this.paintsmallupoff1 = paintsmallupoff1;
		this.paintsmallupoff2 = paintsmallupoff2;
		this.plantup1 = plantup1;
		this.plantup2 = plantup2;
		this.plantup7 = plantup7;
		this.paintsmallupoff = paintsmallupoff;
		this.bat1 = bat1;
		this.paintingceil12 = paintingceil12;
		this.paintingup = paintingup;
		this.paintingceil7 = paintingceil7;
		this.paintingceil6 = paintingceil6;
		this.paintingceil8 = paintingceil8;
		this.paintingceil5 = paintingceil5;
		this.paintingceil10 = paintingceil10;
		this.paintingceil11 = paintingceil11;
		this.paintingceil1 = paintingceil1;
		this.paintingceil2 = paintingceil2;
		this.paintingceil4 = paintingceil4;
		this.paintingceil3 = paintingceil3;
		this.paintingceil13 = paintingceil13;
		this.paintingceil9 = paintingceil9;
		this.catPlayer = catPlayer;
		this.shelfup10 = shelfup10;
		this.shelfup11 = shelfup11;
		this.shelfup13 = shelfup13;
		this.shelfup12 = shelfup12;
		this.sliceDevice6 = sliceDevice6;
		this.sliceDevice5 = sliceDevice5;
		this.plantup10 = plantup10;
		this.plantup11 = plantup11;
		this.plantup12 = plantup12;
		this.plantup13 = plantup13;
		this.shelfupratup = shelfupratup;
		this.ratup = ratup;
		this.chandelier1 = chandelier1;
		this.rope1 = rope1;
		this.lavaball_line_x8_04 = lavaball_line_x8_04;
		this.squarefire1 = squarefire1;
		this.squarefire = squarefire;
		this.fireballline1 = fireballline1;
		this.squarefire2 = squarefire2;
		this.fireballline2 = fireballline2;
		this.spike3 = spike3;
		this.spike2 = spike2;
		this.spike1 = spike1;
		this.squarefire3 = squarefire3;
		this.fireballline = fireballline;
		this.flaghang = flaghang;
		this.shelf1down = shelf1down;
		this.lavaline6 = lavaline6;
		this.chandelier2 = chandelier2;
		this.rope2 = rope2;
		this.lavabubble = lavabubble;
		this.squarefire4 = squarefire4;
		this.fireballline4 = fireballline4;
		this.stoop = stoop;
		this.lavabubble1 = lavabubble1;
		this.lavabubble2 = lavabubble2;
		this.paintboar1 = paintboar1;
		this.chandelier = chandelier;
		this.rope = rope;
		this.chandelier3 = chandelier3;
		this.rope3 = rope3;
		this.squarefire_1 = squarefire_1;
		this.fireballline_1 = fireballline_1;
		this.squarefire_2 = squarefire_2;
		this.fireballline_2 = fireballline_2;
		this.paintingceil = paintingceil;
		this.paintingceil_1 = paintingceil_1;
		this.paintingceil_2 = paintingceil_2;
		this.paintingceil_3 = paintingceil_3;
		this.squarefire_3 = squarefire_3;
		this.fireballline_3 = fireballline_3;
		this.paintboar = paintboar;
		this.ceiling = ceiling;
		this.lavabubble3 = lavabubble3;
		this.lavabubble5 = lavabubble5;
		this.lavabubble4 = lavabubble4;
		this.lavabubble6 = lavabubble6;
		this.lavabubble7 = lavabubble7;
		this.paintboar2 = paintboar2;
		this.chandelier4 = chandelier4;
		this.rope4 = rope4;
		this.lavabubble8 = lavabubble8;
		this.lavabubble9 = lavabubble9;
		this.lavabubble10 = lavabubble10;
		this.lavabubble11 = lavabubble11;
		this.lavabubble12 = lavabubble12;
		this.lavabubble13 = lavabubble13;
		this.lavabubble14 = lavabubble14;
		this.lavabubble15 = lavabubble15;
		this.chandelier5 = chandelier5;
		this.rope5 = rope5;
		this.chandelier6 = chandelier6;
		this.bigrat = bigrat;
		this.rope6 = rope6;
		this.chandelier7 = chandelier7;
		this.rope7 = rope7;
		this.congrats = congrats;
		this.lavabubble16 = lavabubble16;
		this.lavabubble17 = lavabubble17;
		this.lavabubble18 = lavabubble18;
		this.lavabubble19 = lavabubble19;
		this.paintsmall_1 = paintsmall_1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	skirtingfloor;
	/** @type {Phaser.GameObjects.TileSprite} */
	wallpaperdown;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lastcastle2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	castle1l;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	castle1r;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lastcastle3;
	/** @type {Phaser.GameObjects.TileSprite} */
	lastcastle4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	castle2l;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lavaball1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lavaball2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lavaball4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lavaball3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lastcastle1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	castle2r;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	castle3l;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	castle4l;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	castle4r;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	castle3r;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lavaball5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lastcastle_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lastcastle_2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lavaball7;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lavaball8;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lastcastle;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	stoop1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lavaball6;
	/** @type {Phaser.GameObjects.TileSprite} */
	lavaground;
	/** @type {Phaser.GameObjects.TileSprite} */
	floor;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	stoop2;
	/** @type {Phaser.GameObjects.TileSprite} */
	backgroundup;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	drawerup;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	chair1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bookcaseupper1;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	ropeball2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	ropeball;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	windowfirst;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	littletable;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	opendoor1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	seatbrown1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting2low;
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
	sawup;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	block6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bottom;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant0;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	brownseat1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfrat1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingup2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelveplant6;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling12;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock10;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting1low;
	/** @type {SliceDevice} */
	sliceDevice2;
	/** @type {SliceDevice} */
	sliceDevice1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintsmall1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfrat2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintsmall2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintsmall3;
	/** @type {Rat} */
	rat1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintsmallup1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintsmallup2;
	/** @type {Rat} */
	rat2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintsmall;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintsmallup;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfuplast;
	/** @type {SliceDevice} */
	sliceDevice3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintsmalldown1;
	/** @type {FallingBlock} */
	fallingBlock1;
	/** @type {FallingBlock} */
	fallingBlock2;
	/** @type {SliceDevice} */
	sliceDevice4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintsmallupoff1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintsmallupoff2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plantup1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plantup2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plantup7;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintsmallupoff;
	/** @type {Bat} */
	bat1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingceil12;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingup;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingceil7;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingceil6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingceil8;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingceil5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingceil10;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingceil11;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingceil1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingceil2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingceil4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingceil3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingceil13;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingceil9;
	/** @type {CatPlayer} */
	catPlayer;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup10;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup11;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup13;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup12;
	/** @type {SliceDevice} */
	sliceDevice6;
	/** @type {SliceDevice} */
	sliceDevice5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plantup10;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plantup11;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plantup12;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plantup13;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfupratup;
	/** @type {Rat} */
	ratup;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	chandelier1;
	/** @type {Phaser.GameObjects.Image} */
	rope1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lavaball_line_x8_04;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	squarefire1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	squarefire;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	fireballline1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	squarefire2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	fireballline2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	spike3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	spike2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	spike1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	squarefire3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	fireballline;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	flaghang;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf1down;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lavaline6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	chandelier2;
	/** @type {Phaser.GameObjects.Image} */
	rope2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lavabubble;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	squarefire4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	fireballline4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	stoop;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lavabubble1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lavabubble2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintboar1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	chandelier;
	/** @type {Phaser.GameObjects.Image} */
	rope;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	chandelier3;
	/** @type {Phaser.GameObjects.Image} */
	rope3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	squarefire_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	fireballline_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	squarefire_2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	fireballline_2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingceil;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingceil_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingceil_2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingceil_3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	squarefire_3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	fireballline_3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintboar;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lavabubble3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lavabubble5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lavabubble4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lavabubble6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lavabubble7;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintboar2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	chandelier4;
	/** @type {Phaser.GameObjects.Image} */
	rope4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lavabubble8;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lavabubble9;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lavabubble10;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lavabubble11;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lavabubble12;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lavabubble13;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lavabubble14;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lavabubble15;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	chandelier5;
	/** @type {Phaser.GameObjects.Image} */
	rope5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	chandelier6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bigrat;
	/** @type {Phaser.GameObjects.Image} */
	rope6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	chandelier7;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	rope7;
	/** @type {Phaser.GameObjects.Text} */
	congrats;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lavabubble16;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lavabubble17;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lavabubble18;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lavabubble19;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintsmall_1;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.UpdateGroup=this.add.group();
		this.CatchBallGroup=this.add.group();
		this.BombsGroup=this.add.group();
		this.BlockGroup=this.add.group();
		this.CounterBalls=0;
		this.BulletGroup=this.add.group();

		this.PanHeight=-100;

		this.Teller=1;

		this.WhichObjectHangOn;

		var ColorLight=0x0a0909;
		var light  = this.lights.addLight(1500,0,1050).setIntensity(15);
    	this.lights.enable().setAmbientColor(ColorLight);

		var light1  = this.lights.addLight(1000,-2000,1050).setIntensity(15);
    	this.lights.enable().setAmbientColor(ColorLight);

	//	this.physics.world.fixedStep = false;

		this.OKgoChair=true;
		this.JustOnce=true;
		this.catchtheme=this.sound.add('GetMouse');
		this.donetheme=this.sound.add('jobdone');
		this.Boomtheme=this.sound.add('Boom2');	
		this.TimeOutY=true;

		this.editorCreate();


		this.physics.world.enable(this.lastcastle4);

		this.sawup.play('wielding');
		this.bigrat.play('RatStand');

		this.BlockGroup.add(this.block1);
		this.BlockGroup.add(this.block2);
		this.BlockGroup.add(this.block3);
		this.BlockGroup.add(this.block4);
		this.BlockGroup.add(this.block5);
		this.BlockGroup.add(this.block6);

		this.wallpaperdown.setPipeline('Light2D');
			this.spike1.setPipeline('Light2D');
			this.spike2.setPipeline('Light2D');
			this.spike3.setPipeline('Light2D');

			this.flaghang.setPipeline('Light2D');
		//this.littletable2.setPipeline('Light2D');
		//this.littletable1.setPipeline('Light2D');
		this.rat1.setPipeline('Light2D');
		//this.shelfrat3.setPipeline('Light2D');
		this.paintsmall3.setPipeline('Light2D');

		this.chandelier2.setPipeline('Light2D');
		this.rope2.setPipeline('Light2D');
		this.chandelier.setPipeline('Light2D');
		this.rope.setPipeline('Light2D');
		this.chandelier3.setPipeline('Light2D');
		this.rope3.setPipeline('Light2D');

		this.windowfirst.setPipeline('Light2D');
		this.paintsmall1.setPipeline('Light2D');
		this.littletable.setPipeline('Light2D');
		this.shelfrat1.setPipeline('Light2D');
		this.plant3.setPipeline('Light2D');
		this.squarefire1.setPipeline('Light2D');
		this.squarefire2.setPipeline('Light2D');
		this.squarefire3.setPipeline('Light2D');
		this.squarefire.setPipeline('Light2D');
		this.squarefire4.setPipeline('Light2D');

		this.lavaground.setPipeline('Light2D');
		this.stoop.setPipeline('Light2D');
		this.paintboar1.setPipeline('Light2D');
		this.paintboar2.setPipeline('Light2D');


		this.skirtingfloor.setPipeline('Light2D');
		this.floor.setPipeline('Light2D');

		this.shelf1down.setPipeline('Light2D');

		this.ceiling1.setPipeline('Light2D');
		this.backgroundup.setPipeline('Light2D');
		this.plant2.setPipeline('Light2D');
		this.shelf1.setPipeline('Light2D');
		this.painting1low.setPipeline('Light2D');

		this.chandelier1.setPipeline('Light2D');
		this.rope1.setPipeline('Light2D');

		//this.shelfrat.setPipeline('Light2D');
		this.shelfrat2.setPipeline('Light2D');
		this.plant0.setPipeline('Light2D');

		this.brownseat1.setPipeline('Light2D');

		this.sliceDevice1.chain.setPipeline('Light2D');
		this.sliceDevice1.swingblade.setPipeline('Light2D');

		this.sliceDevice2.chain.setPipeline('Light2D');
		this.sliceDevice2.swingblade.setPipeline('Light2D');

		this.sliceDevice3.chain.setPipeline('Light2D');
		this.sliceDevice3.swingblade.setPipeline('Light2D');

		this.sliceDevice4.chain.setPipeline('Light2D');
		this.sliceDevice4.swingblade.setPipeline('Light2D');

		this.sliceDevice5.chain.setPipeline('Light2D');
		this.sliceDevice5.swingblade.setPipeline('Light2D');

		this.sliceDevice6.chain.setPipeline('Light2D');
		this.sliceDevice6.swingblade.setPipeline('Light2D');

		this.painting1low.setPipeline('Light2D');
		this.painting2low.setPipeline('Light2D');

		this.fallingBlock1.rock.setPipeline('Light2D');
		this.fallingBlock2.rock.setPipeline('Light2D');


		//this.shelf4low.setPipeline('Light2D');
		this.shelf3.setPipeline('Light2D');

		this.shelfup.setPipeline('Light2D');
		this.shelfup4.setPipeline('Light2D');

		this.paintsmall2.setPipeline('Light2D');

		this.painting3.setPipeline('Light2D');
		this.painting5.setPipeline('Light2D');


		this.chair1.setPipeline('Light2D');
	//	this.broom.setPipeline('Light2D');

		this.paintsmallup2.setPipeline('Light2D');
		this.paintsmallup1.setPipeline('Light2D');
		this.paintsmalldown1.setPipeline('Light2D');

		this.paintsmallupoff2.setPipeline('Light2D');
		this.paintsmallupoff1.setPipeline('Light2D');

		this.paintingup.setPipeline('Light2D');
		//this.paintingup1.setPipeline('Light2D');
		this.paintingup2.setPipeline('Light2D');


		this.drawerup.setPipeline('Light2D');

		this.shelveplant6.setPipeline('Light2D');
		this.rat2.setPipeline('Light2D');
		this.shelfuplast.setPipeline('Light2D');

		this.bat1.setPipeline('Light2D');
		this.paintsmallup.setPipeline('Light2D');
		//this.shelfrat3.setPipeline('Light2D');
		this.shelfup1.setPipeline('Light2D');
		this.plantup1.setPipeline('Light2D');
		this.plant2.setPipeline('Light2D');
		this.plant1.setPipeline('Light2D');
		this.plantup2.setPipeline('Light2D');
		this.plantup7.setPipeline('Light2D');

			this.plantup10.setPipeline('Light2D');
			this.plantup11.setPipeline('Light2D');
			this.plantup12.setPipeline('Light2D');
			this.plantup13.setPipeline('Light2D');
			this.paintboar.setPipeline('Light2D');


		this.paintsmallupoff.setPipeline('Light2D');

		this.paintingceil12.setPipeline('Light2D');
				this.paintingceil1.setPipeline('Light2D');
				this.paintingceil2.setPipeline('Light2D');
				this.paintingceil3.setPipeline('Light2D');
				this.paintingceil4.setPipeline('Light2D');
				this.paintingceil5.setPipeline('Light2D');
				this.paintingceil6.setPipeline('Light2D');
				this.paintingceil7.setPipeline('Light2D');
				this.paintingceil8.setPipeline('Light2D');
				this.paintingceil9.setPipeline('Light2D');
				this.paintingceil10.setPipeline('Light2D');
				this.paintingceil11.setPipeline('Light2D');

				this.paintingceil_1.setPipeline('Light2D');
				this.paintingceil_2.setPipeline('Light2D');
				this.paintingceil_3.setPipeline('Light2D');
				this.paintingceil.setPipeline('Light2D');

				this.castle1l.setPipeline('Light2D');
				this.castle1r.setPipeline('Light2D');
				this.castle2l.setPipeline('Light2D');
				this.castle2r.setPipeline('Light2D');
				this.castle3l.setPipeline('Light2D');
				this.castle3r.setPipeline('Light2D');
				this.castle4l.setPipeline('Light2D');
				this.castle4r.setPipeline('Light2D');


			this.ceiling12.setPipeline('Light2D');
			this.bookcaseupper1.setPipeline('Light2D');
			this.clock10.setPipeline('Light2D');
			this.seatbrown1.setPipeline('Light2D');

			this.paintingceil13.setPipeline('Light2D');

			this.rope4.setPipeline('Light2D');
			this.chandelier4.setPipeline('Light2D');

			this.rope7.setPipeline('Light2D');
			this.chandelier7.setPipeline('Light2D');


	this.shelfup10.setPipeline('Light2D');
			this.shelfup11.setPipeline('Light2D');
			this.shelfup12.setPipeline('Light2D');
			this.shelfup13.setPipeline('Light2D');

			this.stoop1.setPipeline('Light2D');
			this.stoop2.setPipeline('Light2D');

			this.sawup.setPipeline('Light2D');
			this.ratup.setPipeline('Light2D');
			this.shelfupratup.setPipeline('Light2D');


		this.ropeball.setCrop(0,0,400,195);
		this.ropeball2.setCrop(0,0,400,220);

		this.rope5.setPipeline('Light2D');
		this.chandelier5.setPipeline('Light2D');

		this.rope6.setPipeline('Light2D');
		this.chandelier6.setPipeline('Light2D');

		this.lastcastle.setPipeline('Light2D');
		this.lastcastle1.setPipeline('Light2D');
		this.lastcastle2.setPipeline('Light2D');
		this.lastcastle3.setPipeline('Light2D');
		this.lastcastle4.setPipeline('Light2D');

		this.bigrat.setPipeline('Light2D');

		//this.littletable1.Moving=true;
	//	this.littletable2.Moving=true;

		this.rat1.speed=90;
		this.rat2.speed=95;
		this.ratup.speed=70;

		this.fireballline.play('lavaballsturning');
		this.fireballline1.play('lavaballsturning');
		this.fireballline2.play('lavaballsturning');
		this.fireballline4.play('lavaballsturning');

		this.fireballline_1.play('lavaballsturning');
		this.fireballline_3.play('lavaballsturning');

		this.MakeLavaBubble(this.lavabubble8);


		this.test();

		this.MovePainting(this.paintsmall2,0,6000,"+=400",600);
	//	this.MovePainting(this.	paintsmallup2,0,6000,"+=300",100);



		//this.addCollidersBroom();

	this.lavaline6.play('Fireball6');
	//this.lavabubble.play('LavaBubble');

	this.MakeLavaBubble(this.lavabubble);
	this.MakeLavaBubble(this.lavabubble1);
	this.MakeLavaBubble(this.lavabubble2);
	this.MakeLavaBubble(this.lavabubble3);
	this.MakeLavaBubble(this.lavabubble4);
	this.MakeLavaBubble(this.lavabubble5);
	this.MakeLavaBubble(this.lavabubble6);
	this.MakeLavaBubble(this.lavabubble7);

	this.MakeLavaBubble(this.lavabubble8);
	this.MakeLavaBubble(this.lavabubble9);
	this.MakeLavaBubble(this.lavabubble10);
	this.MakeLavaBubble(this.lavabubble11);
	this.MakeLavaBubble(this.lavabubble12);
	this.MakeLavaBubble(this.lavabubble13);
	this.MakeLavaBubble(this.lavabubble14);
	this.MakeLavaBubble(this.lavabubble15);

		this.MakeLavaBubble(this.lavabubble16);
		this.MakeLavaBubble(this.lavabubble17);
		this.MakeLavaBubble(this.lavabubble18);
		this.MakeLavaBubble(this.lavabubble19);





		this.sliceDevice3.circle=0;
		this.sliceDevice4.circle=0;


	//	this.CreatePlatform(this.littletable2);
		this.CreatePlatform(this.littletable);
	//	this.CreatePlatform(this.littletable1);
		this.CreatePlatform(this.shelfrat1);
	//	this.CreatePlatform(this.shelfrat);	
		this.CreatePlatform(this.shelfrat2);	
		//this.CreatePlatform(this.shelf2);	
		this.CreatePlatform(this.painting1low);	
		this.CreatePlatform(this.shelf1);	
		this.CreatePlatform(this.shelf3);	
		//this.CreatePlatform(this.shelf4low);
		this.CreatePlatform(this.brownseat1);
		this.CreatePlatform(this.painting2low);
		this.CreatePlatform(this.chair1);
		this.CreatePlatform(this.drawerup);
		this.CreatePlatform(this.shelveplant6);

		this.CreatePlatform(this.stoop1);

		this.CreatePlatform(this.castle1l);
		this.CreatePlatform(this.castle1r);

			this.CreatePlatform(this.castle2l);
		this.CreatePlatform(this.castle2r);
			this.CreatePlatform(this.castle3l);
		this.CreatePlatform(this.castle3r);
			this.CreatePlatform(this.castle4l);
		this.CreatePlatform(this.castle4r);

		this.CreatePlatform(this.chandelier1);
		this.CreatePlatform(this.chandelier2);

		this.CreatePlatform(this.chandelier);
		this.CreatePlatform(this.chandelier3);
		this.CreatePlatform(this.chandelier4);


		this.CreatePlatform(this.chandelier5);
		this.CreatePlatform(this.chandelier6);
		//this.CreatePlatform(this.chandelier7);


		this.CreatePlatform(this.painting3);
		this.CreatePlatform(this.painting5);
		this.CreatePlatform(this.shelfuplast);
		//this.CreatePlatform(this.shelfrat3);
		this.CreatePlatform(this.shelfup1);

				this.CreatePlatform(this.shelfup10);
				this.CreatePlatform(this.shelfup11);
				this.CreatePlatform(this.shelfup12);
				this.CreatePlatform(this.shelfup13);

		this.CreatePlatform(this.shelfup);
		this.CreatePlatform(this.shelfup4);
		this.CreatePlatform(this.shelveplant6);
		this.CreatePlatform(this.bookcaseupper1);
		this.CreatePlatform(this.paintingup2);
		this.CreatePlatform(this.seatbrown1);

		this.CreatePlatform(this.clock10);
		//this.CreatePlatform(this.paintingup1);
	this.CreatePlatform(this.paintingup);
	this.CreatePlatform(this.paintingup2);
	this.CreatePlatform(this.lastcastle4);
		this.CreatePlatform(this.lastcastle1);
			this.CreatePlatform(this.lastcastle);

	this.lastcastle4.body.setOffset(0,180);



		this.physics.world.enable(this.ceiling1);
		this.physics.world.enable(this.ceiling12);
		this.ceiling1.body.immovable = true;
			this.ceiling12.body.immovable = true;
		this.cameras.main.setZoom(0.72);
		this.physics.world.setBounds(0, -3600,17600, 4400);
		this.cameras.main.setBounds(0,-500,17600, 1200);
		//this.cameras.main.startFollow(this.catPlayer,true,0.1,0.6);
			this.cameras.main.startFollow(this.catPlayer,false,0.5,0);
		//camera.startFollow(gameObject, roundPx, lerpX, lerpY, offsetX, offsetY);


		this.physics.add.overlap(this.catPlayer,this.paintsmall1,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintsmall2,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintsmallupoff1,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintsmallupoff2,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintsmallupoff,this.StickToObject,null,this);

				this.physics.add.overlap(this.catPlayer,this.paintboar1,this.StickToObject,null,this);


		this.physics.add.overlap(this.catPlayer,this.paintsmallup2,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintsmallup1,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintsmall,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintsmalldown1,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintsmallup,this.StickToObject,null,this);

			this.physics.add.overlap(this.catPlayer,this.paintboar,this.StickToObject,null,this);

		//all the upper paintings
	this.physics.add.overlap(this.catPlayer,this.paintingceil,this.StickToObject,null,this);
	this.physics.add.overlap(this.catPlayer,this.paintingceil_1,this.StickToObject,null,this);
	this.physics.add.overlap(this.catPlayer,this.paintingceil_2,this.StickToObject,null,this);
	this.physics.add.overlap(this.catPlayer,this.paintingceil_3,this.StickToObject,null,this);

		this.physics.add.overlap(this.catPlayer,this.paintingceil1,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintingceil2,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintingceil3,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintingceil4,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintingceil5,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintingceil6,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintingceil7,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintingceil8,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintingceil9,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintingceil10,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintingceil11,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintingceil12,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintingceil13,this.StickToObject,null,this);

			this.physics.add.overlap(this.catPlayer,this.paintboar2,this.StickToObject,null,this);


		///
		this.physics.add.overlap(this.catPlayer,this.paintsmallup,this.StickToObject,null,this);

		this.physics.add.collider(this.BombsGroup,this.bottom,this.explode,null,this);
		this.physics.add.collider(this.BombsGroup,this.ceiling,this.explode,null,this);
		this.physics.add.collider(this.BombsGroup,this.ceiling1,this.explode,null,this);
		this.physics.add.collider(this.BombsGroup,this.ceiling12,this.explode,null,this);

		this.physics.add.overlap(this.catPlayer,this.paintsmall3,this.StickToObject,null,this);

		this.physics.add.collider(this.rat1,this.BlockGroup);
		this.physics.add.collider(this.ratup,this.BlockGroup);
		this.physics.add.collider(this.catPlayer,this.stoop);

		this.physics.add.collider(this.rat2,this.BlockGroup);
		this.physics.add.collider(this.catPlayer,this.ceiling1);
		this.physics.add.collider(this.catPlayer,this.ceiling12);

		this.physics.add.collider(this.plant0,this.bottom,this.breakeagainstfloor,null,this);
		this.physics.add.collider(this.plant2,this.bottom,this.breakeagainstfloor,null,this);
		this.physics.add.collider(this.plant3,this.bottom,this.breakeagainstfloor,null,this);
		this.physics.add.collider(this.plant1,this.bottom,this.breakeagainstfloor,null,this);
		this.physics.add.collider(this.plantup2,this.ceiling1,this.breakeagainstfloor,null,this);
		this.physics.add.collider(this.plantup1,this.ceiling1,this.breakeagainstfloor,null,this);
		this.physics.add.collider(this.plantup7,this.bottom,this.breakeagainstfloor,null,this);

		this.physics.add.collider(this.plantup10,this.ceiling12,this.breakeagainstfloor,null,this);
		this.physics.add.collider(this.plantup11,this.ceiling12,this.breakeagainstfloor,null,this);
		this.physics.add.collider(this.plantup12,this.ceiling12,this.breakeagainstfloor,null,this);
		this.physics.add.collider(this.plantup13,this.ceiling12,this.breakeagainstfloor,null,this);

			this.physics.add.collider(this.plantup12,this.ceiling,this.breakeagainstfloor,null,this);

		this.physics.add.collider(this.catPlayer,this.plant0,this.push,null,this);
		this.physics.add.collider(this.catPlayer,this.plant2,this.push,null,this);
		this.physics.add.collider(this.catPlayer,this.plant3,this.push,null,this);
		this.physics.add.collider(this.catPlayer,this.plant1,this.push,null,this);

		this.physics.add.collider(this.catPlayer,this.plantup2,this.push,null,this);
		this.physics.add.collider(this.catPlayer,this.plantup7,this.push,null,this);

				this.physics.add.collider(this.catPlayer,this.chandelier7,this.MoveChandelier,null,this);

		this.physics.add.collider(this.catPlayer,this.plantup10,this.push,null,this);
		this.physics.add.collider(this.catPlayer,this.plantup11,this.push,null,this);
		this.physics.add.collider(this.catPlayer,this.plantup12,this.push,null,this);
				this.physics.add.collider(this.catPlayer,this.plantup13,this.push,null,this);

		this.physics.add.collider(this.catPlayer,this.plantup1,this.push,null,this);
		this.physics.add.collider(this.shelfrat1,this.plant3);
		this.physics.add.collider(this.plantup7,this.shelveplant6);
		this.physics.add.collider(this.sawup,this.stoop);



		this.physics.add.collider(this.shelfrat2,this.plant0);
		this.physics.add.collider(this.shelf1,this.plant2);

				this.physics.add.collider(this.plantup11,this.shelfup11);
				this.physics.add.collider(this.shelfup12,this.plantup10);
				this.physics.add.collider(this.shelfup10,this.plantup12);
			this.physics.add.collider(this.shelfup13,this.plantup13);

		this.physics.add.collider(this.shelf3,this.plant1);
		this.physics.add.overlap(this.catPlayer,this.CatchBallGroup,this.CatchBall,null,this);

		this.physics.add.collider(this.fallingBlock1,this.ceiling1,this.Baaam,null,this);
		this.physics.add.collider(this.fallingBlock2,this.ceiling1,this.Baaam,null,this);
		this.physics.add.collider(this.plantup1,this.shelfup4);
		this.physics.add.collider(this.plantup2,this.shelfuplast);

		this.CastleHovering(this.castle1l,this.castle1r,30,6000);

		this.time.addEvent({ delay:1900, callback:() => {
		this.CastleHovering(this.castle2l,this.castle2r,40,4000);
	}, callbackScope: this,repeat:0});

	this.time.addEvent({ delay:1200, callback:() => {
		this.CastleHovering(this.castle3l,this.castle3r,40,1500);
	}, callbackScope: this,repeat:0});

	this.time.addEvent({ delay:1350, callback:() => {
		this.CastleHovering(this.castle4l,this.castle4r,30,3500);
	}, callbackScope: this,repeat:0});


this.LavaballBoing(this.lavaball1,500);
this.LavaballBoing(this.lavaball2,0);

this.LavaballBoing(this.lavaball3,1200);
this.LavaballBoing(this.lavaball4,2000);

this.LavaballBoing(this.lavaball5,3000);
this.LavaballBoing(this.lavaball6,900);

this.LavaballBoing(this.lavaball7,100);
this.LavaballBoing(this.lavaball8,2500);


	}


LavaballBoing(Lava,delay){
this.LavaBallTween=this.tweens.add({
            targets: [Lava],
			y:"-=550",
			 duration:850,
			 delay:delay,
	//scale:{start: 0.1, to: 0.5 },
            ease: 'Quad.easeOut',
            yoyo: true,
            repeat: -1,
			repeatDelay:2000,
        });

Lava.play('SpinLavaBall');
};


	CastleHovering(castleLeft,castleRight,speed,delay){


this.time.addEvent({ delay:delay, callback:() => {
		if(castleLeft.body.velocity.y<0)

		{
		castleLeft.body.setVelocityY(speed);
		castleRight.body.setVelocityY(speed);
		}

		else

		{
	castleLeft.body.setVelocityY(-speed);
	castleRight.body.setVelocityY(-speed);
		}
			}, callbackScope: this,repeat:-1});

	}

	MoveChandelier(Cat,Chandel){

if(Chandel.x < 13000 )

{

Chandel.body.setVelocityX(50);
this.rope7.body.setVelocityX(50);
	console.log('go go chandel');
}else{

	this.rope7.body.setVelocityX(0);
	Chandel.body.setVelocityX(0);
}


	}

	HangOnPaint(cat,paint) {


		if(cat.body.blocked.down || cat.body.touching.down){
			cat.setTexture('cathang');
			cat.stick=false;

		}




	}

	MakeLavaBubble(Lava){


	this.RND=Phaser.Math.Between(0,2000);

	this.time.addEvent({ delay:this.RND, callback:() => {

	Lava.play("LavaBubble");
	//Lava.setPipeline('Light2D');

	}, callbackScope: this,repeat:0});


	}


	StickToObject(cat,paint){

			//this.time.addEvent({ delay: 50, callback:() => {

//console.log("painting :" + paint.type);
//console.log("painting name:" + paint.name);

this.WhichObjectHangOn=paint;


cat.setTexture('catback2');

		//StickItem=pain.
	cat.angle=0;
if(cat.stick){
	cat.body.setAngularVelocity(0);
	cat.body.setVelocityX(0);
	cat.body.setVelocityY(0);
	cat.setGravityY(0);
	cat.stick=false;
	cat.TouchGround=true;
	cat.PlayJumpOnce=true;
	cat.setTexture('catback2');
	cat.x=paint.x ;
	cat.JumpVerticalPaint=false;
	//cat.y=paint.y;
	cat.y=paint.y;

}


	//}, callbackScope: this,repeat:0 });

	this.time.addEvent({ delay: 500, callback:() => {


//cat.stick=true;
	}, callbackScope: this,repeat:0 });

	}

	update(){
				this.step1=0.008;
				this.step2=0.008;

				this.widthline=280;

				Phaser.Math.RotateAroundDistance(this.paintingceil5, this.squarefire_1.x ,this.squarefire_1.y, this.step1,this.widthline);
				Phaser.Math.RotateAroundDistance(this.paintingceil8, this.squarefire_1.x ,this.squarefire_1.y, this.step1,this.widthline);
				Phaser.Math.RotateAroundDistance(this.paintingceil10, this.squarefire_1.x ,this.squarefire_1.y, this.step1,this.widthline);
				Phaser.Math.RotateAroundDistance(this.paintingceil7, this.squarefire_1.x ,this.squarefire_1.y, this.step1,this.widthline);

				Phaser.Math.RotateAroundDistance(this.paintingceil, this.squarefire_3.x ,this.squarefire_3.y, this.step2,this.widthline);
				Phaser.Math.RotateAroundDistance(this.paintingceil_1, this.squarefire_3.x ,this.squarefire_3.y, this.step2,this.widthline);
				Phaser.Math.RotateAroundDistance(this.paintingceil_2, this.squarefire_3.x ,this.squarefire_3.y, this.step2,this.widthline);
				Phaser.Math.RotateAroundDistance(this.paintingceil_3, this.squarefire_3.x ,this.squarefire_3.y, this.step2,this.widthline);



		this.lavaground.tilePositionX-=1.5;

		if(this.sawup.body.blocked.left){

		this.sawup.body.setVelocityX(500);
			this.sawup.flipX=true;
		}

		if(this.sawup.body.blocked.right){

		this.sawup.body.setVelocityX(-500);
				this.sawup.flipX=false;
		}

	//console.log('cat height y :'+this.catPlayer.y);
	//console.log('pan height :'+this.PanHeight);

		console.log('time out Y'+this.catPlayer.JumpVerticalPaint);

		if(this.catPlayer.stick==false){
				this.catPlayer.x =this.WhichObjectHangOn.x ;
		}

		if(this.catPlayer.stick==false && this.catPlayer.JumpVerticalPaint==false){

				this.catPlayer.y=this.WhichObjectHangOn.y+15;

		};


	//	console.log('stik cat :' + this.catPlayer.stick);

	//	this.physics.world.enable(this.ceiling1);
		//this.ceiling1.body.immovable = true;


		this.DropDownWhenjumpCatonObject(this.painting2low);
		this.DropDownWhenjumpCatonObject(this.painting1low);
		this.DropDownWhenjumpCatonObject(this.painting3);
		this.DropDownWhenjumpCatonObject(this.painting5);
		this.DropDownWhenjumpCatonObject(this.paintingup);
		//this.DropDownWhenjumpCatonObject(this.paintingup1);
		this.DropDownWhenjumpCatonObject(this.paintingup2);
		this.DropDownWhenjumpCatonObject(this.paintingceil13);


			if(this.catPlayer.y<-105 && this.catPlayer.y>=-830){
//
			if(this.PanHeight>=-820){

			//this.cameras.main.setBounds(0,this.PanHeight-=15,4800, 800);
			}
			else if(this.PanHeight<-840){

				//	this.cameras.main.setBounds(0,this.PanHeight+=15,4800, 800);
				}
		}

		else if(this.catPlayer.y>=-107){
		if(this.PanHeight<=-100){

		//	this.cameras.main.setBounds(0,this.PanHeight+=15,4800, 800);
			};

		}else if(this.catPlayer.y<-831){

			if(this.PanHeight>=-1670){
console.log('ik zit op de derde verdiep!!!!!!!!!!!');
		//	this.cameras.main.setBounds(0,this.PanHeight-=15,4800, 900);

			};

		}


	//this.WaitAndMoveObject(this.littletable2,870,1630,-150);
	//this.WaitAndMoveObject(this.littletable1,1800,2300,-150);






	//this.WaitAndMoveObjectY(this.shelf4low,-68,260,150);

	this.BulletGroup.children.iterate(function(child){

		if(child){

			if(child.x <-100 || child.x >5000){
			child.destroy();
				console.log('destroy bullet');
			}

		};

		  });


	this.UpdateGroup.children.iterate(function(child){

		if(child){

			child.update();

		};

		  });

	};

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
