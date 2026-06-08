
// You can write more code here

/* START OF COMPILED CODE */

class Mission4Rats extends BaseScene {

	constructor() {
		super("Mission4Rats");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// red_large_stripe_1
		const red_large_stripe_1 = this.add.tileSprite(2300, -785, 315, 1377, "background");
		red_large_stripe_1.preFX.padding = 50;
		red_large_stripe_1.scaleX = -4.391333618626975;
		red_large_stripe_1.scaleY = 5.132801232728735;
		red_large_stripe_1.angle = 90;
		red_large_stripe_1.tintTopRight = 13665412;
		red_large_stripe_1.tintBottomRight = 1775897;
		red_large_stripe_1.tileScaleX = 0.017;
		red_large_stripe_1.tileScaleY = 0.04;

		// floor_1
		const floor_1 = this.add.tileSprite(1129, -5, 2234, 792, "floor");
		floor_1.scaleX = 2.5;
		floor_1.scaleY = 0.3332521943685721;
		floor_1.tileScaleX = 0.08;
		floor_1.tileScaleY = 1.1;

		// green
		const green = this.add.image(2808, 666, "green_plain");
		green.scaleX = 50;
		green.scaleY = 0.12179876030749923;
		green.tintBottomLeft = 9276299;
		green.tintBottomRight = 7829367;

		// ceiling
		const ceiling = this.physics.add.image(1045, -80, "skirting_light");
		ceiling.scaleX = 15;
		ceiling.scaleY = 0.5651677102666276;
		ceiling.flipY = true;
		ceiling.visible = false;
		ceiling.body.setSize(383, 65, false);

		// red_large_stripe
		const red_large_stripe = this.add.tileSprite(2412, 271, 10000, 1382, "background");
		red_large_stripe.scaleX = 0.8;
		red_large_stripe.scaleY = 0.5038242770353811;
		red_large_stripe.tintTopLeft = 5259071;
		red_large_stripe.tintTopRight = 5917515;
		red_large_stripe.tintBottomLeft = 13156544;
		red_large_stripe.tintBottomRight = 15395305;
		red_large_stripe.tileScaleX = 0.2;
		red_large_stripe.tileScaleY = 0.4;

		// skirting_light
		const skirting_light = this.add.tileSprite(1713, 620, 35000, 63, "skirting_light");
		skirting_light.scaleX = 0.2528690000816929;
		skirting_light.scaleY = 0.2528690000816929;

		// floor
		const floor = this.add.tileSprite(2333, 742, 2234, 792, "floor");
		floor.scaleX = 4;
		floor.scaleY = 0.3332521943685721;
		floor.tileScaleX = 0.08;
		floor.tileScaleY = 1.1;

		// opendoor1
		const opendoor1 = this.physics.add.sprite(4462, 478, "dark_wardrobe_door_open");
		opendoor1.scaleX = 0.3990294319411307;
		opendoor1.scaleY = 0.3879795166868173;
		opendoor1.flipX = true;
		opendoor1.visible = false;
		opendoor1.body.setSize(375, 898, false);

		// shelfbird
		const shelfbird = this.physics.add.sprite(345, 430, "light_wall_shelf");
		shelfbird.scaleX = 0.11476203836684157;
		shelfbird.scaleY = 0.18471964985289846;
		shelfbird.visible = false;
		shelfbird.body.pushable = false;
		shelfbird.body.immovable = true;
		shelfbird.body.setSize(1007, 85, false);

		// tablelast
		const tablelast = this.physics.add.sprite(-766, -1341, "light_wood_table");
		tablelast.scaleX = 0.1514629244949275;
		tablelast.scaleY = 0.1514629244949275;
		tablelast.body.setOffset(0, 70);
		tablelast.body.setSize(1606, 681, false);

		// painting2
		const painting2 = this.physics.add.sprite(1308, 1636, "painting_03_light");
		painting2.scaleX = 0.1779781357342463;
		painting2.scaleY = 0.1779781357342463;
		painting2.alpha = 0.9;
		painting2.alphaTopLeft = 0.9;
		painting2.alphaTopRight = 0.9;
		painting2.alphaBottomLeft = 0.9;
		painting2.alphaBottomRight = 0.9;
		painting2.body.setSize(614, 432, false);

		// block3
		const block3 = this.physics.add.sprite(3706, 101, "bubble-64px");
		block3.visible = false;
		block3.body.pushable = false;
		block3.body.immovable = true;
		block3.body.setSize(64, 64, false);

		// block4
		const block4 = this.physics.add.sprite(3963, 100, "bubble-64px");
		block4.visible = false;
		block4.body.pushable = false;
		block4.body.immovable = true;
		block4.body.setSize(64, 64, false);

		// planter2
		const planter2 = this.physics.add.sprite(1273, 148, "planter_01");
		planter2.scaleX = 0.6141687496204493;
		planter2.scaleY = 0.6141687496204493;
		planter2.body.gravity.y = 1000;
		planter2.body.bounce.y = 0.3;
		planter2.body.checkCollision.up = false;
		planter2.body.setSize(75, 125, false);

		// chair1
		const chair1 = this.physics.add.sprite(2041, -172, "dark_wood_chair_front");
		chair1.scaleX = 0.17716911247665676;
		chair1.scaleY = 0.17716911247665676;
		chair1.body.setSize(429, 843, false);

		// block5
		const block5 = this.physics.add.sprite(1642, -652, "bubble-64px");
		block5.visible = false;
		block5.body.pushable = false;
		block5.body.immovable = true;
		block5.body.setSize(64, 64, false);

		// blockcar
		const blockcar = this.physics.add.sprite(4498, 300, "bubble-64px");
		blockcar.visible = false;
		blockcar.body.pushable = false;
		blockcar.body.immovable = true;
		blockcar.body.setSize(64, 64, false);

		// bottom
		const bottom = this.physics.add.sprite(752, 694, "block_separator_01");
		bottom.scaleX = 12;
		bottom.scaleY = 0.5823602337408151;
		bottom.visible = false;
		bottom.body.pushable = false;
		bottom.body.immovable = true;
		bottom.body.setSize(695, 40, false);

		// dark_five_draw
		const dark_five_draw = this.add.image(-2713, -1079, "dark_five_draw");
		dark_five_draw.scaleX = 0.1749293619163773;
		dark_five_draw.scaleY = 0.1749293619163773;

		// brownseat1
		const brownseat1 = this.physics.add.sprite(3173, 1236, "brown_1_seat");
		brownseat1.scaleX = 0.16509478414180956;
		brownseat1.scaleY = 0.16509478414180956;
		brownseat1.body.setSize(1070, 858, false);

		// shelfcar1
		const shelfcar1 = this.physics.add.sprite(4555, 191, "light_wall_shelf");
		shelfcar1.scaleX = 0.15;
		shelfcar1.scaleY = 0.1;
		shelfcar1.body.pushable = false;
		shelfcar1.body.immovable = true;
		shelfcar1.body.setSize(1007, 85, false);

		// littletableup1
		const littletableup1 = this.physics.add.sprite(-265, 225, "light_table_round");
		littletableup1.scaleX = 0.5122056698979438;
		littletableup1.scaleY = 0.5122056698979438;
		littletableup1.body.pushable = false;
		littletableup1.body.immovable = true;
		littletableup1.body.setOffset(0, 20);
		littletableup1.body.setSize(210, 200, false);

		// rat2
		const rat2 = new Rat(this, 3851, 115);
		this.add.existing(rat2);
		rat2.visible = true;
		rat2.body.velocity.x = 50;
		rat2.body.velocity.y = 0;

		// shelf
		const shelf = this.physics.add.sprite(1278, 188, "light_wall_shelf");
		shelf.scaleX = 0.1;
		shelf.scaleY = 0.1;
		shelf.body.pushable = false;
		shelf.body.immovable = true;
		shelf.body.setSize(1007, 85, false);

		// container_1
		const container_1 = new RatCannon(this, 506, -1057);
		this.add.existing(container_1);

		// shelfup1
		const shelfup1 = this.physics.add.sprite(2888, -438, "light_wall_shelf");
		shelfup1.scaleX = 0.18;
		shelfup1.scaleY = 0.1006799198725784;
		shelfup1.visible = false;
		shelfup1.body.setSize(1007, 85, false);

		// shelfup2
		const shelfup2 = this.physics.add.sprite(3118, -660, "light_wall_shelf");
		shelfup2.scaleX = 0.12;
		shelfup2.scaleY = 0.1006799198725784;
		shelfup2.body.setSize(1007, 85, false);

		// sliceDevice6
		const sliceDevice6 = new SliceDevice(this, 2732, -436);
		this.add.existing(sliceDevice6);

		// ropup3
		const ropup3 = this.physics.add.sprite(1134, -1104, "long_rope_piece");
		ropup3.scaleX = 0.1592984004884527;
		ropup3.scaleY = 0.5;
		ropup3.body.setSize(63, 1042, false);

		// shelf4low
		const shelf4low = this.physics.add.sprite(3826, 146, "light_wall_shelf");
		shelf4low.scaleX = 0.13;
		shelf4low.scaleY = 0.1;
		shelf4low.body.pushable = false;
		shelf4low.body.immovable = true;
		shelf4low.body.setSize(1007, 85, false);

		// shelveplant6
		const shelveplant6 = this.physics.add.sprite(3752, -525, "light_wall_shelf");
		shelveplant6.scaleX = 0.1;
		shelveplant6.scaleY = 0.1;
		shelveplant6.body.pushable = false;
		shelveplant6.body.immovable = true;
		shelveplant6.body.setSize(1007, 85, false);

		// chandelier3
		const chandelier3 = this.physics.add.sprite(2944, 173, "chandelier_large");
		chandelier3.scaleX = 0.2565954494266046;
		chandelier3.scaleY = 0.2565954494266046;
		chandelier3.body.pushable = false;
		chandelier3.body.immovable = true;
		chandelier3.body.setOffset(0, 300);
		chandelier3.body.setSize(721, 150, false);

		// skirting_light_1
		const skirting_light_1 = this.add.tileSprite(2547, -938, 35000, 63, "skirting_light");
		skirting_light_1.scaleX = 0.2528690000816929;
		skirting_light_1.scaleY = 0.2528690000816929;
		skirting_light_1.tintTopLeft = 8553090;
		skirting_light_1.tintTopRight = 8877429;
		skirting_light_1.tintBottomLeft = 9013127;
		skirting_light_1.tintBottomRight = 7564396;

		// boar2
		const boar2 = this.physics.add.sprite(1573, 327, "hanging_flag");
		boar2.scaleX = 0.28502051859012206;
		boar2.scaleY = 0.28502051859012206;
		boar2.body.setOffset(0, 250);
		boar2.body.setSize(308, 150, false);

		// chandelier2
		const chandelier2 = this.physics.add.sprite(1987, 171, "chandelier_large");
		chandelier2.scaleX = 0.2565954494266046;
		chandelier2.scaleY = 0.2565954494266046;
		chandelier2.body.pushable = false;
		chandelier2.body.immovable = true;
		chandelier2.body.setOffset(0, 300);
		chandelier2.body.setSize(721, 150, false);

		// smalltable
		const smalltable = this.physics.add.sprite(113, 646, "light_table_round");
		smalltable.scaleX = 0.49255836073780523;
		smalltable.scaleY = 0.49255836073780523;
		smalltable.body.setSize(240, 193, false);

		// planter1
		const planter1 = this.physics.add.sprite(117, 58, "planter_01");
		planter1.scaleX = 0.6141687496204493;
		planter1.scaleY = 0.6141687496204493;
		planter1.body.gravity.y = 1000;
		planter1.body.bounce.y = 0.3;
		planter1.body.checkCollision.up = false;
		planter1.body.setOffset(0, -10);
		planter1.body.setSize(75, 125, false);

		// boar1
		const boar1 = this.physics.add.sprite(391, 315, "boar_head_light");
		boar1.scaleX = 0.2690452860264519;
		boar1.scaleY = 0.2690452860264519;
		boar1.body.setOffset(20, 0);
		boar1.body.setSize(308, 355, false);

		// saw
		const saw = this.physics.add.sprite(1606, 651, "rotating_saw_01");
		saw.scaleX = 0.3868651654475982;
		saw.scaleY = 0.3868651654475982;
		saw.body.velocity.x = 800;
		saw.body.collideWorldBounds = true;
		saw.body.onWorldBounds = true;
		saw.body.setSize(274, 144, false);

		// paintig
		const paintig = this.physics.add.sprite(3435, -408, "painting_05_dark");
		paintig.scaleX = 0.2045503967654808;
		paintig.scaleY = 0.2045503967654808;
		paintig.body.setSize(263, 320, false);

		// shelf1
		const shelf1 = this.physics.add.sprite(118, 110, "dark_wall_shelf");
		shelf1.scaleX = 0.12;
		shelf1.scaleY = 0.1;
		shelf1.body.setSize(1007, 85, false);

		// paintingupr
		const paintingupr = this.physics.add.sprite(4032, -345, "boar_head_light");
		paintingupr.scaleX = 0.2891427699888127;
		paintingupr.scaleY = 0.2891427699888127;
		paintingupr.body.setOffset(20, 50);
		paintingupr.body.setSize(200, 320, false);

		// shelf1down
		const shelf1down = this.physics.add.sprite(116, 122, "shelf");
		shelf1down.scaleX = 0.45;
		shelf1down.scaleY = 0.3241390110831035;
		shelf1down.body.pushable = false;
		shelf1down.body.immovable = true;
		shelf1down.body.setSize(309, 127, false);

		// shelf_2
		const shelf_2 = this.add.image(1274, 198, "shelf");
		shelf_2.scaleX = 0.4;
		shelf_2.scaleY = 0.3;

		// shelf_3
		const shelf_3 = this.add.image(3826, 157, "shelf");
		shelf_3.scaleX = 0.5;
		shelf_3.scaleY = 0.3;

		// boar3
		const boar3 = this.physics.add.sprite(2213, 404, "boar_head_light");
		boar3.scaleX = 0.2972569871874225;
		boar3.scaleY = 0.2972569871874225;
		boar3.body.setOffset(20, 100);
		boar3.body.setSize(200, 200, false);

		// boar4
		const boar4 = this.physics.add.sprite(3228, 286, "deer_head");
		boar4.scaleX = 0.2972569871874225;
		boar4.scaleY = 0.2972569871874225;
		boar4.body.setSize(308, 355, false);

		// chandelier5
		const chandelier5 = this.physics.add.sprite(1137, -808, "chandelier_large");
		chandelier5.scaleX = 0.2565954494266046;
		chandelier5.scaleY = 0.2565954494266046;
		chandelier5.body.setOffset(0, 300);
		chandelier5.body.setSize(721, 300, false);

		// paintig1
		const paintig1 = this.physics.add.sprite(988, 317, "painting_07_dark");
		paintig1.scaleX = 0.18025318945534863;
		paintig1.scaleY = 0.18025318945534863;
		paintig1.body.setSize(263, 320, false);

		// chandelier1
		const chandelier1 = this.physics.add.sprite(766, 170, "chandelier_large");
		chandelier1.scaleX = 0.24263209916707398;
		chandelier1.scaleY = 0.24263209916707398;
		chandelier1.body.bounce.y = 0.3;
		chandelier1.body.pushable = false;
		chandelier1.body.immovable = true;
		chandelier1.body.setOffset(0, 300);
		chandelier1.body.setSize(721, 150, false);

		// catPlayer
		const catPlayer = new CatPlayer(this, 122, 503);
		this.add.existing(catPlayer);
		catPlayer.body.maxAngular = 2000;
		catPlayer.body.collideWorldBounds = true;

		// sliceDevice1
		const sliceDevice1 = new SliceDevice(this, 1267, 357);
		this.add.existing(sliceDevice1);

		// sliceDevice3
		const sliceDevice3 = new SliceDevice(this, 3602, 305);
		this.add.existing(sliceDevice3);

		// sliceDevice4
		const sliceDevice4 = new SliceDevice(this, 4499, 302);
		this.add.existing(sliceDevice4);

		// redstripeabove
		const redstripeabove = this.add.image(826, -61, "background");
		redstripeabove.scaleX = 0.012233559311267544;
		redstripeabove.scaleY = 4.5;
		redstripeabove.angle = 90;
		redstripeabove.tintTopLeft = 15455187;
		redstripeabove.tintTopRight = 3947323;
		redstripeabove.tintBottomLeft = 15914710;
		redstripeabove.tintBottomRight = 4144959;

		// ellipse_2
		const ellipse_2 = this.add.ellipse(2940, -60, 128, 128);
		ellipse_2.scaleX = 0.3916825343304212;
		ellipse_2.scaleY = 0.07463723645206587;
		ellipse_2.alpha = 0.4;
		ellipse_2.isFilled = true;
		ellipse_2.fillColor = 657673;

		// ellipse_6
		const ellipse_6 = this.add.ellipse(760, -59, 128, 128);
		ellipse_6.scaleX = 0.3916825343304212;
		ellipse_6.scaleY = 0.07463723645206587;
		ellipse_6.alpha = 0.4;
		ellipse_6.isFilled = true;
		ellipse_6.fillColor = 657673;

		// ellipse
		const ellipse = this.add.ellipse(1981, -61, 128, 128);
		ellipse.scaleX = 0.3916825343304212;
		ellipse.scaleY = 0.07463723645206587;
		ellipse.alpha = 0.4;
		ellipse.isFilled = true;
		ellipse.fillColor = 657673;

		// ceiling_1
		const ceiling_1 = this.physics.add.image(1623, -42, "skirting_light");
		ceiling_1.scaleX = 12;
		ceiling_1.scaleY = 0.12605433434901228;
		ceiling_1.flipY = true;
		ceiling_1.tintTopLeft = 3750201;
		ceiling_1.tintTopRight = 10986146;
		ceiling_1.tintBottomLeft = 3289650;
		ceiling_1.tintBottomRight = 9013127;
		ceiling_1.body.setSize(383, 65, false);

		// paintingfirst
		const paintingfirst = this.physics.add.sprite(-256, 350, "painting_05_dark");
		paintingfirst.scaleX = 0.18025318945534863;
		paintingfirst.scaleY = 0.18025318945534863;
		paintingfirst.body.setSize(263, 320, false);

		// long_rope_piece_1
		const long_rope_piece_1 = this.add.image(762, 32, "long_rope_piece");
		long_rope_piece_1.scaleX = 0.11473913171425401;
		long_rope_piece_1.scaleY = 0.18;

		// paintig2
		const paintig2 = this.physics.add.sprite(2659, 292, "painting_05_dark");
		paintig2.scaleX = 0.19066217211354516;
		paintig2.scaleY = 0.19066217211354516;
		paintig2.body.setOffset(0, 200);
		paintig2.body.setSize(263, 320, false);

		// long_rope_piece
		const long_rope_piece = this.add.image(1983, 29, "long_rope_piece");
		long_rope_piece.scaleX = 0.14565690457535763;
		long_rope_piece.scaleY = 0.18;

		// paintig3
		const paintig3 = this.physics.add.sprite(4128, 284, "deer_head");
		paintig3.scaleX = 0.31153232441649215;
		paintig3.scaleY = 0.31153232441649215;
		paintig3.body.setSize(263, 320, false);

		// bat1
		const bat1 = new Bat(this, 1641, 102);
		this.add.existing(bat1);
		bat1.scaleX = 0.14060645560031024;
		bat1.scaleY = 0.14060645560031024;
		bat1.body.velocity.x = -500;
		bat1.body.velocity.y = 0;
		bat1.body.collideWorldBounds = true;
		bat1.body.onWorldBounds = true;
		bat1.body.setOffset(100, 0);
		bat1.body.setSize(300, 300, false);

		// cord1
		const cord1 = this.physics.add.sprite(3737, -850, "gold_cord_02");
		cord1.scaleX = 0.5209964524640183;
		cord1.scaleY = 0.47;
		cord1.body.setOffset(0, 300);
		cord1.body.setSize(50, 150, false);

		// paintingupr1
		const paintingupr1 = this.physics.add.sprite(4357, -404, "painting_07_dark");
		paintingupr1.scaleX = 0.19096119425809746;
		paintingupr1.scaleY = 0.19096119425809746;
		paintingupr1.body.setSize(263, 320, false);

		// shelf_4
		const shelf_4 = this.add.image(3751, -513, "shelf");
		shelf_4.scaleX = 0.41794123037393244;
		shelf_4.scaleY = 0.3398119850084342;

		// long_rope_piece_3
		const long_rope_piece_3 = this.add.image(2941, 31, "long_rope_piece");
		long_rope_piece_3.scaleX = 0.14565690457535763;
		long_rope_piece_3.scaleY = 0.18;

		// shelveplant
		const shelveplant = this.physics.add.sprite(4453, -599, "shelf");
		shelveplant.scaleX = 0.3733287313368078;
		shelveplant.scaleY = 0.3249618243630143;
		shelveplant.body.pushable = false;
		shelveplant.body.immovable = true;
		shelveplant.body.setSize(300, 85, false);

		// sliceDevice5
		const sliceDevice5 = new SliceDevice(this, 4160, -708);
		this.add.existing(sliceDevice5);

		// sliceDevice2
		const sliceDevice2 = new SliceDevice(this, 2513, 148);
		this.add.existing(sliceDevice2);

		// rope4
		const rope4 = this.physics.add.sprite(2349, -1110, "long_rope_piece");
		rope4.scaleX = 0.1592984004884527;
		rope4.scaleY = 0.5;
		rope4.body.setSize(63, 1042, false);

		// chandelier4
		const chandelier4 = this.physics.add.sprite(2352, -814, "chandelier_large");
		chandelier4.scaleX = 0.2565954494266046;
		chandelier4.scaleY = 0.2565954494266046;
		chandelier4.body.setOffset(0, 300);
		chandelier4.body.setSize(721, 300, false);

		// plant1up
		const plant1up = this.physics.add.sprite(3115, -719, "planter_01");
		plant1up.scaleX = 0.6141687496204493;
		plant1up.scaleY = 0.6141687496204493;
		plant1up.body.gravity.y = 1000;
		plant1up.body.bounce.y = 0.3;
		plant1up.body.checkCollision.up = false;
		plant1up.body.setSize(75, 125, false);

		// smalltable4
		const smalltable4 = this.physics.add.sprite(1802, 657, "dark_table_small");
		smalltable4.scaleX = 0.20795322134120403;
		smalltable4.scaleY = 0.20795322134120403;
		smalltable4.body.setOffset(0, 30);
		smalltable4.body.setSize(376, 369, false);

		// painitngup3
		const painitngup3 = this.physics.add.sprite(2008, -565, "boar_head_light");
		painitngup3.scaleX = 0.29175869467511156;
		painitngup3.scaleY = 0.29175869467511156;
		painitngup3.body.setOffset(20, 50);
		painitngup3.body.setSize(200, 320, false);

		// paintig_1
		const paintig_1 = this.physics.add.sprite(4477, -1216, "painting_05_dark");
		paintig_1.scaleX = 0.2045503967654808;
		paintig_1.scaleY = 0.2045503967654808;
		paintig_1.body.setSize(263, 320, false);

		// paintigup2
		const paintigup2 = this.physics.add.sprite(2811, -635, "painting_05_dark");
		paintigup2.scaleX = 0.2045503967654808;
		paintigup2.scaleY = 0.2045503967654808;
		paintigup2.body.setSize(263, 320, false);

		// paintigup3
		const paintigup3 = this.physics.add.sprite(907, -371, "deer_head");
		paintigup3.scaleX = 0.2954340113794831;
		paintigup3.scaleY = 0.2954340113794831;
		paintigup3.body.setSize(263, 320, false);

		// starcorner
		const starcorner = this.physics.add.sprite(4454, -1042, "full-star-thick-black-border");
		starcorner.scaleX = 0.11154502965303469;
		starcorner.scaleY = 0.11154502965303469;
		starcorner.body.setSize(512, 490, false);

		// shelfup6
		const shelfup6 = this.physics.add.sprite(1738, -433, "shelf");
		shelfup6.scaleX = 0.41794123037393244;
		shelfup6.scaleY = 0.3;
		shelfup6.body.setSize(309, 127, false);

		// goldcord2
		const goldcord2 = this.physics.add.sprite(1722, -837, "gold_cord_02");
		goldcord2.scaleX = 0.45;
		goldcord2.scaleY = 0.5;
		goldcord2.body.setOffset(0, 150);
		goldcord2.body.setSize(50, 383, false);

		// long_rope_piece_5
		const long_rope_piece_5 = this.add.image(245, -854, "long_rope_piece");
		long_rope_piece_5.scaleX = 0.1592984004884527;
		long_rope_piece_5.scaleY = 0.5;

		// chandelier6
		const chandelier6 = this.physics.add.sprite(248, -558, "chandelier_large");
		chandelier6.scaleX = 0.2565954494266046;
		chandelier6.scaleY = 0.2565954494266046;
		chandelier6.body.bounce.y = 0.3;
		chandelier6.body.pushable = false;
		chandelier6.body.immovable = true;
		chandelier6.body.setOffset(0, 300);
		chandelier6.body.setSize(721, 120, false);

		// shelfup5
		const shelfup5 = this.add.nineslice(3118, -650, "shelf", undefined, 458, 139, 107, 110, -25, 2);
		shelfup5.scaleX = 0.3;
		shelfup5.scaleY = 0.28;

		// redstripeabove_1
		const redstripeabove_1 = this.add.image(1494, -881, "background");
		redstripeabove_1.scaleX = 0.0184909405351871;
		redstripeabove_1.scaleY = 4.5;
		redstripeabove_1.angle = 90;
		redstripeabove_1.tintTopLeft = 15455187;
		redstripeabove_1.tintTopRight = 3947323;
		redstripeabove_1.tintBottomLeft = 15914710;
		redstripeabove_1.tintBottomRight = 4144959;

		// ceiling_2
		const ceiling_2 = this.physics.add.image(2295, -864, "skirting_light");
		ceiling_2.scaleX = 12;
		ceiling_2.scaleY = -0.30532712866658424;
		ceiling_2.flipY = true;
		ceiling_2.tintTopLeft = 3750201;
		ceiling_2.tintTopRight = 10986146;
		ceiling_2.tintBottomLeft = 3289650;
		ceiling_2.tintBottomRight = 9013127;
		ceiling_2.body.setSize(383, 65, false);

		// cordtest
		const cordtest = this.physics.add.sprite(3740, -768, "painting_07_dark");
		cordtest.scaleX = 0.19096119425809746;
		cordtest.scaleY = 0.19096119425809746;
		cordtest.visible = false;
		cordtest.body.setSize(263, 320, false);

		// testcord2
		const testcord2 = this.physics.add.sprite(1719, -736, "painting_07_dark");
		testcord2.scaleX = 0.19096119425809746;
		testcord2.scaleY = 0.19096119425809746;
		testcord2.visible = false;
		testcord2.body.setSize(263, 320, false);

		// shelfuplast
		const shelfuplast = this.physics.add.sprite(747, -664, "shelf");
		shelfuplast.scaleX = 0.41794123037393244;
		shelfuplast.scaleY = 0.3;
		shelfuplast.body.setSize(309, 127, false);

		// broom
		const broom = new Broom(this, 1523, 588);
		this.add.existing(broom);

		// fallpainting1
		const fallpainting1 = new fallpainting(this, 1401, -459);
		this.add.existing(fallpainting1);
		fallpainting1.scaleX = 0.9176295414294239;
		fallpainting1.scaleY = 0.9176295414294239;

		// indoorwindow1
		const indoorwindow1 = new IndoorWindow(this, 117, 299);
		this.add.existing(indoorwindow1);
		indoorwindow1.scaleX = 0.8221541225951747;
		indoorwindow1.scaleY = 0.8221541225951747;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(2507, -523, 128, 128);
		rectangle_1.blendMode = Phaser.BlendModes.EXCLUSION;
		rectangle_1.scaleX = 86.802114153528;
		rectangle_1.scaleY = 24.449164288365218;
		rectangle_1.alpha = 0.4;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 1052959;

		// saturateFx
		const saturateFx = rectangle_1.postFX.addColorMatrix();
		saturateFx.saturate(1);

		// sliceDevice1 (prefab fields)
		sliceDevice1.circle = 1;

		// sliceDevice3 (prefab fields)
		sliceDevice3.circle = 0;

		// sliceDevice4 (prefab fields)
		sliceDevice4.circle = 0;

		// sliceDevice2 (prefab fields)
		sliceDevice2.circle = 1;

		this.floor_1 = floor_1;
		this.ceiling = ceiling;
		this.red_large_stripe = red_large_stripe;
		this.floor = floor;
		this.opendoor1 = opendoor1;
		this.shelfbird = shelfbird;
		this.tablelast = tablelast;
		this.painting2 = painting2;
		this.block3 = block3;
		this.block4 = block4;
		this.planter2 = planter2;
		this.chair1 = chair1;
		this.block5 = block5;
		this.blockcar = blockcar;
		this.bottom = bottom;
		this.brownseat1 = brownseat1;
		this.shelfcar1 = shelfcar1;
		this.littletableup1 = littletableup1;
		this.rat2 = rat2;
		this.shelf = shelf;
		this.shelfup1 = shelfup1;
		this.shelfup2 = shelfup2;
		this.sliceDevice6 = sliceDevice6;
		this.ropup3 = ropup3;
		this.shelf4low = shelf4low;
		this.shelveplant6 = shelveplant6;
		this.chandelier3 = chandelier3;
		this.boar2 = boar2;
		this.chandelier2 = chandelier2;
		this.smalltable = smalltable;
		this.planter1 = planter1;
		this.boar1 = boar1;
		this.saw = saw;
		this.paintig = paintig;
		this.shelf1 = shelf1;
		this.paintingupr = paintingupr;
		this.shelf1down = shelf1down;
		this.boar3 = boar3;
		this.boar4 = boar4;
		this.chandelier5 = chandelier5;
		this.paintig1 = paintig1;
		this.chandelier1 = chandelier1;
		this.catPlayer = catPlayer;
		this.sliceDevice1 = sliceDevice1;
		this.sliceDevice3 = sliceDevice3;
		this.sliceDevice4 = sliceDevice4;
		this.ceiling_1 = ceiling_1;
		this.paintingfirst = paintingfirst;
		this.paintig2 = paintig2;
		this.paintig3 = paintig3;
		this.bat1 = bat1;
		this.cord1 = cord1;
		this.paintingupr1 = paintingupr1;
		this.shelveplant = shelveplant;
		this.sliceDevice5 = sliceDevice5;
		this.sliceDevice2 = sliceDevice2;
		this.rope4 = rope4;
		this.chandelier4 = chandelier4;
		this.plant1up = plant1up;
		this.smalltable4 = smalltable4;
		this.painitngup3 = painitngup3;
		this.paintig_1 = paintig_1;
		this.paintigup2 = paintigup2;
		this.paintigup3 = paintigup3;
		this.starcorner = starcorner;
		this.shelfup6 = shelfup6;
		this.goldcord2 = goldcord2;
		this.chandelier6 = chandelier6;
		this.ceiling_2 = ceiling_2;
		this.cordtest = cordtest;
		this.testcord2 = testcord2;
		this.shelfuplast = shelfuplast;
		this.broom = broom;
		this.fallpainting1 = fallpainting1;
		this.indoorwindow1 = indoorwindow1;
		this.rectangle_1 = rectangle_1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	floor_1;
	/** @type {Phaser.Physics.Arcade.Image} */
	ceiling;
	/** @type {Phaser.GameObjects.TileSprite} */
	red_large_stripe;
	/** @type {Phaser.GameObjects.TileSprite} */
	floor;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	opendoor1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfbird;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	tablelast;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	block3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	block4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	planter2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	chair1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	block5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	blockcar;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bottom;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	brownseat1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfcar1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	littletableup1;
	/** @type {Rat} */
	rat2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup2;
	/** @type {SliceDevice} */
	sliceDevice6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	ropup3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf4low;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelveplant6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	chandelier3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	boar2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	chandelier2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	smalltable;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	planter1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	boar1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	saw;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintig;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingupr;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf1down;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	boar3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	boar4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	chandelier5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintig1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	chandelier1;
	/** @type {CatPlayer} */
	catPlayer;
	/** @type {SliceDevice} */
	sliceDevice1;
	/** @type {SliceDevice} */
	sliceDevice3;
	/** @type {SliceDevice} */
	sliceDevice4;
	/** @type {Phaser.Physics.Arcade.Image} */
	ceiling_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingfirst;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintig2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintig3;
	/** @type {Bat} */
	bat1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cord1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingupr1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelveplant;
	/** @type {SliceDevice} */
	sliceDevice5;
	/** @type {SliceDevice} */
	sliceDevice2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	rope4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	chandelier4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant1up;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	smalltable4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painitngup3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintig_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintigup2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintigup3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	starcorner;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	goldcord2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	chandelier6;
	/** @type {Phaser.Physics.Arcade.Image} */
	ceiling_2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cordtest;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	testcord2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfuplast;
	/** @type {Broom} */
	broom;
	/** @type {fallpainting} */
	fallpainting1;
	/** @type {IndoorWindow} */
	indoorwindow1;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_1;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.UpdateGroup=this.add.group();
		this.CatchBallGroup=this.add.group();
		this.BombsGroup=this.add.group();
		this.BulletGroup=this.add.group();
		this.StarGroup=this.add.group();
		this.DirtGroup=this.add.group();
		this.EnemyGroup=this.add.group();
		this.CounterBalls=0;
		MissionCount=6;



	this.goaltheme=this.sound.add('missiongoal');
this.leveltheme=this.sound.add('maintheme');
this.leveltheme.play();


		this.catchtheme=this.sound.add('GetMouse');
		this.donetheme=this.sound.add('jobdone');
		this.Boomtheme=this.sound.add('Boom2');	
raticon=true;

this.justDropChandler=true;

		this.editorCreate();



		this.plant1up.item="star"; 
		this.StarGroup.add(this.starcorner);

		this.add.shader('bomb', 400, 300, 512, 512);

		this.collidierchandeliers=false;

		this.chandelier1.crackfloor=this.crack1;

		this.SpeedSaw=700;

		this.PanHeight=-100;
		this.Restart=true;

		this.BoingOnce=true;
		this.chandeliercoll=true;

		this.cordtest.BoingBoing=false;
		this.cordtest.rope=this.cord1;

		this.testcord2.BoingBoing=false;
		this.testcord2.rope=this.goldcord2;

		this.saw.play('wielding');

		this.BlockGroup=this.add.group();

		this.BlockGroup.add(this.block3);
		this.BlockGroup.add(this.block4);
		this.BlockGroup.add(this.block5);

		//this.rat1.direction=true;
		//this.rat1.speed=50;

		this.rat2.direction=true;
		this.rat2.speed=70;


		this.test();
			this.addCollidersBroom();

		this.physics.world.enable(this.ceiling);
		this.ceiling.body.immovable = true;
		this.cameras.main.setZoom(0.71);
		this.physics.world.setBounds(0, -3100,4800, 3800);
		this.cameras.main.setBounds(0,-100,4800, 800);
		this.cameras.main.startFollow(this.catPlayer,false,0.2,0.2,0,0);

		this.physics.add.collider(this.catPlayer,this.ceiling);
		this.physics.add.collider(this.catPlayer,this.bottom);

this.chandelier1.number=0;
this.chandelier2.number=0;
this.chandelier3.number=0;
this.chandelier6.number=0;


this.EnemyGroup.add(this.bat1);
this.EnemyGroup.add(this.sliceDevice1.swingblade);
this.EnemyGroup.add(this.sliceDevice2.swingblade);
this.EnemyGroup.add(this.sliceDevice3.swingblade);
this.EnemyGroup.add(this.sliceDevice4.swingblade);
this.EnemyGroup.add(this.sliceDevice5.swingblade);
this.EnemyGroup.add(this.sliceDevice6.swingblade);
this.EnemyGroup.add(this.saw);



		this.physics.add.collider(this.catPlayer,this.shelfcar1,this.StickAround,null,this);



		this.physics.add.collider(this.plant1up,this.shelfup2);
		this.physics.add.collider(this.catPlayer,this.plant1up,this.push,null,this);
		this.physics.add.collider(this.plant1up,this.ceiling,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.catPlayer,this.plant1,this.push,null,this);
		this.physics.add.collider(this.catPlayer,this.plant2,this.push,null,this);
		this.physics.add.collider(this.catPlayer,this.plant3,this.push,null,this);
		this.physics.add.collider(this.catPlayer,this.plant4,this.push,null,this);

		this.physics.add.collider(this.catPlayer,this.plant6,this.push,null,this);
		this.physics.add.collider(this.catPlayer,this.plant7,this.push,null,this);


				this.physics.add.overlap(this.catPlayer,this.EnemyGroup,this.GetHit,null,this);
				this.physics.add.overlap(this.catPlayer,this.BombsGroup,this.GetHit,null,this);
					this.physics.add.overlap(this.catPlayer,this.BulletGroup,this.GetHit,null,this);

		this.physics.add.overlap(this.catPlayer,this.CatchBallGroup,this.CatchBall,null,this);

		this.physics.add.collider(this.BombsGroup,this.bottom,this.explode,null,this);
		this.physics.add.collider(this.BombsGroup,this.ceiling,this.explode,null,this);

		this.physics.add.collider(this.starcorner,this.shelveplant);


		this.physics.add.overlap(this.catPlayer,this.boar1,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.boar2,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.boar3,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.boar4,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintingfirst,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintig1,this.StickToObject,null,this);
	this.physics.add.overlap(this.catPlayer,this.paintig,this.StickToObject,null,this);

		this.physics.add.overlap(this.catPlayer,this.paintig2,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintig3,this.StickToObject,null,this);
this.physics.add.overlap(this.catPlayer,this.paintingupr,this.StickToObject,null,this);
this.physics.add.overlap(this.catPlayer,this.paintingupr1,this.StickToObject,null,this);


this.physics.add.overlap(this.catPlayer,this.painitngup3,this.StickToObject,null,this);
this.physics.add.overlap(this.catPlayer,this.paintigup2,this.StickToObject,null,this);
this.physics.add.overlap(this.catPlayer,this.paintigup3,this.StickToObject,null,this);
this.physics.add.overlap(this.catPlayer,this.cordtest,this.StickToObject,null,this);
this.physics.add.overlap(this.catPlayer,this.cordtest,this.DingDong,null,this);
this.physics.add.overlap(this.catPlayer,this.testcord2,this.DingDong,null,this);
this.physics.add.overlap(this.catPlayer,this.testcord2,this.DropChandeliers,null,this);
this.physics.add.overlap(this.catPlayer,this.testcord2,this.StickToObject,null,this);

this.physics.add.collider(this.rat2,this.BlockGroup);
this.physics.add.collider(this.chandelier1,this.bottom,this.Explodebig,null,this);
this.physics.add.collider(this.chandelier2,this.bottom,this.Explodebig,null,this);
this.physics.add.collider(this.chandelier3,this.bottom,this.Explodebig,null,this);
this.physics.add.collider(this.chandelier6,this.ceiling,this.Explodebig,null,this);

		this.physics.add.collider(this.catPlayer,this.planter1,this.push,null,this);
		this.physics.add.collider(this.shelf1down,this.planter1);
		this.physics.add.collider(this.planter1,this.bottom,this.DropAndLeaveMark,null,this);

				this.physics.add.collider(this.catPlayer,this.planter2,this.push,null,this);
		this.physics.add.collider(this.shelf,this.planter2);
		this.physics.add.collider(this.planter2,this.bottom,this.DropAndLeaveMark,null,this);



this.physics.add.collider(this.fallpainting1.block,this.catPlayer,this.MakeObjectImmovabke,null,this);
this.physics.add.collider(this.fallpainting1,this.ceiling,this.DropAndLeaveMark,null,this);
		this.physics.add.overlap(this.catPlayer,this.indoorwindow1.waythrough,this.JumpOut,null,this);

this.physics.add.overlap(this.catPlayer,this.StarGroup,this.CatchBall,null,this);

this.CreatePlatform(this.smalltable);
this.CreatePlatform(this.shelf1);
this.CreatePlatform(this.chair1);
this.CreatePlatform(this.shelf);
this.CreatePlatform(this.shelveplant6);
this.CreatePlatform(this.shelveplant);
this.CreatePlatform(this.smalltable4);
this.CreatePlatform(this.shelfup6);
this.CreatePlatform(this.chandelier4);
this.CreatePlatform(this.chandelier5);
this.CreatePlatform(this.shelfup2);
this.CreatePlatform(this.shelfuplast);

		//this.painting1.info="Nada";
			this.painting2.info="Nada";
	}

	DropChandeliers(){
console.log('drop chndelier');

if(this.justDropChandler){
 this.tweenchan=this.tweens.add({
            targets: [this.rope4,this.chandelier4],
			y:"+=350",
			 duration:650,
	//scale:{start: 0.1, to: 0.5 },
            ease: 'Sine.easeInOut',
            yoyo: false,
            repeat: 0,
        });

		 this.tweenchan2=this.tweens.add({
            targets: [this.ropup3,this.chandelier5],
			y:"+=250",
			 duration:650,
	//scale:{start: 0.1, to: 0.5 },
            ease: 'Sine.easeInOut',
            yoyo: false,
            repeat: 0,
        });

this.justDropChandler=false;

	}

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
		LevelRat4Clear=true;
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

	Explodebig(Bomb,ground){

if(Bomb){
	this.Star=this.physics.add.sprite(Bomb.x, ground.y-40, "full-star-thick-black-border").setScale(0.1);
	this.StarGroup.add(this.Star);
	Bomb.destroy();
		//this.Boomtheme.play();
		const expo = new explosion(this, Bomb.x, Bomb.y+20).setScale(0.35);
		this.add.existing(expo);

		  this.cameras.main.shake(100);


	}

	}

	HitChandelier(Chand){
console.log('test function chandelier');
	//this.catPlayer.body.setBounce(0.2);


if(this.chandeliercoll && Chand.number<3){
//this.catPlayer.body.setBounce(0.2);
 this.tweenBoing=this.tweens.add({
            targets: Chand,
			y:"+=20",
			 duration:50,
	//scale:{start: 0.1, to: 0.5 },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: 0,

        });


 this.tweenCat=this.tweens.add({
            targets: this.catPlayer,
			y:"-=10",
			 duration:50,
	//scale:{start: 0.1, to: 0.5 },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: 0,

        });

	this.chandeliercoll=false;

	Chand.number++;
	console.log(Chand.number);

	if(Chand.number>=3){

		Chand.body.setGravityY(1000);
		//	this.catPlayer.body.setBounce(0.2);
		Chand.body.setImmovable=false;
	}
};
	}

	DingDong(Cat,Cord){


if(Cord.rope.BoingBoing){

if(Cord.rope==this.cord1 && this.starcorner.active){
this.starcorner.body.setGravityY(300);
}


	 this.tweenStrain=this.tweens.add({
            targets: [Cord.rope,Cord],
			y:"+=80",
			 duration:600,
	//scale:{start: 0.1, to: 0.5 },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: 0,
        });

Cord.rope.BoingBoing=false;

}

};

CheckChandeliers(Chand){



if(Chand.active){

		if(Chand.body.velocity.y>50){

			Chand.body.immovable=false}



		this.collidierchandeliers=this.physics.collide(this.catPlayer,Chand);

		//isOverlapping = this.physics.overlap(this.CatPlayer, this.bookcase)

//console.log('check collision chandeliers true:'+ 	this.collidierchandeliers);

		if(this.collidierchandeliers==false){

			this.time.addEvent({ delay:2500, callback:() => {

			}, callbackScope: this,repeat:0});
		}
		else
			{
console.log('check collision chandeliers falsei!!!!'+ this.collidierchandeliers);

if(this.catPlayer.body.blocked.down || this.catPlayer.body.touching.down){
	//this.catPlayer.body.setBounce(0.5);
this.HitChandelier(Chand);
this.chandeliercoll=false;
}


			//	}, callbackScope: this,repeat:0});
			}

		}




};



	update(time,delta){

			if(!this.catPlayer.PlayJumpOnce){

			this.chandeliercoll=true;
			console.log('jump!!!');
				//this.catPlayer.body.setBounce(0.1);
		}

		this.CheckChandeliers(this.chandelier1);
		this.CheckChandeliers(this.chandelier2);
		this.CheckChandeliers(this.chandelier3);
		this.CheckChandeliers(this.chandelier6);


		this.colliderdingdong=this.physics.overlap(this.catPlayer,this.cordtest);
		this.colliderdingdong2=this.physics.overlap(this.catPlayer,this.goldcord2);

	//	console.log('cat on cord : ' +this.colliderdingdong);

		if(this.colliderdingdong==false){
		this.cord1.BoingBoing=true;
		}

			if(this.colliderdingdong2==false){
		this.goldcord2.BoingBoing=true;
		}
//console.log('is there a whichobjecthangon? '+ this.WhichObjectHangOn);


	if(this.catPlayer.stick==false)
	{
				this.catPlayer.x=this.WhichObjectHangOn.x;
		}
		if(this.catPlayer.stick==false && this.catPlayer.JumpVerticalPaint==false){
				this.catPlayer.y=this.WhichObjectHangOn.y+30;
		};




		if(this.saw.body.blocked.left || this.saw.body.blocked.right){
this.SpeedSaw*=-1;
//console.log('test boink saw'+ this.SpeedSaw);
this.saw.body.setVelocityX(this.SpeedSaw);

		}


		//console.log('cat y pos '+this.catPlayer.y);

		if(this.catPlayer.y<-100 ){
//
			if(this.PanHeight>=-850){

			this.cameras.main.setBounds(0,this.PanHeight-=20,4500, 800);

			};

		}

		else{
		if(this.PanHeight<=-110){

			this.cameras.main.setBounds(0,this.PanHeight+=20,4500, 800);
			};


		}

	this.GetValueY(this.shelfcar1);

	Phaser.Math.RotateAroundDistance(this.shelfcar1, this.blockcar.x,this.blockcar.y,0.001*delta, 250);


	this.UpdateGroup.children.iterate(function(child){

		if(child){

			child.update();

		};

		  });

		  	this.BulletGroup.children.iterate(function(child){

		if(child){



			if(child.x>4500){

				child.destroy();
				console.log('destroy bullet');
			}

		};

		  });




	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
