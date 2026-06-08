
// You can write more code here

/* START OF COMPILED CODE */

class Up3LevelSpider extends BaseScene {

	constructor() {
		super("Up3LevelSpider");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// green
		const green = this.add.image(627, 654, "dark_blue_plain");
		green.scaleX = 15.964687337484047;
		green.scaleY = 0.10485117397067724;
		green.tintBottomLeft = 8355711;
		green.tintBottomRight = 7895160;

		// skirting_light
		const skirting_light = this.add.tileSprite(439, 633, 15000, 63, "skirting_light");
		skirting_light.scaleX = 0.2528690000816929;
		skirting_light.scaleY = 0.2528690000816929;

		// ceiling2
		const ceiling2 = this.add.tileSprite(636, -895, 15000, 5000, "blue_large_stripe");
		ceiling2.scaleX = 0.1281025380134249;
		ceiling2.scaleY = 0.610607988844728;
		ceiling2.tintTopLeft = 3487029;
		ceiling2.tintTopRight = 3158064;
		ceiling2.tintBottomLeft = 12500670;
		ceiling2.tintBottomRight = 12237498;
		ceiling2.tileScaleX = 0.8;

		// shelve
		const shelve = this.physics.add.sprite(1266, -229, "light_5_shelves");
		shelve.scaleX = 0.21527643266675234;
		shelve.scaleY = 0.21527643266675234;
		shelve.body.setSize(676, 1109, false);

		// bed
		const bed = this.physics.add.sprite(705, -190, "bed_05");
		bed.scaleX = 0.16339065952524107;
		bed.scaleY = 0.16339065952524107;
		bed.body.setSize(1628, 1068, false);

		// green_1
		const green_1 = this.add.image(1182, -102, "red_plain");
		green_1.scaleX = 15.964687337484047;
		green_1.scaleY = 0.014266231936905908;
		green_1.tintBottomLeft = 8355711;
		green_1.tintBottomRight = 7895160;

		// cheese5
		const cheese5 = this.physics.add.sprite(1998, 290, "cheese");
		cheese5.scaleX = 0.18831940255420793;
		cheese5.scaleY = 0.18831940255420793;
		cheese5.body.setSize(207, 186, false);

		// cheese4
		const cheese4 = this.physics.add.sprite(-644, 397, "cheese");
		cheese4.scaleX = 0.18831940255420793;
		cheese4.scaleY = 0.18831940255420793;
		cheese4.body.setSize(207, 186, false);

		// cheese1
		const cheese1 = this.physics.add.sprite(2063, 75, "cheese");
		cheese1.scaleX = 0.18831940255420793;
		cheese1.scaleY = 0.18831940255420793;
		cheese1.body.setSize(207, 186, false);

		// ceiling1
		const ceiling1 = this.add.tileSprite(1058, -113, 10000, 78, "skirting_light");
		ceiling1.scaleX = 0.18021693427896895;
		ceiling1.scaleY = 0.18021693427896895;

		// bottom
		const bottom = this.physics.add.sprite(656, 692, "block_separator_01");
		bottom.scaleX = 5.504107162267043;
		bottom.scaleY = 1.250533984076435;
		bottom.visible = false;
		bottom.body.pushable = false;
		bottom.body.immovable = true;
		bottom.body.setSize(695, 40, false);

		// paint4
		const paint4 = this.add.image(2591, -550, "painting_04_light");
		paint4.scaleX = 0.1895961116756187;
		paint4.scaleY = 0.1895961116756187;

		// shelfup2
		const shelfup2 = this.physics.add.sprite(2245, 41, "light_wall_shelf");
		shelfup2.scaleX = 0.1250780691733577;
		shelfup2.scaleY = 0.1250780691733577;
		shelfup2.body.setSize(1007, 85, false);

		// shelfup1
		const shelfup1 = this.physics.add.sprite(140, -608, "light_wall_shelf");
		shelfup1.scaleX = 0.1250780691733577;
		shelfup1.scaleY = 0.1250780691733577;
		shelfup1.body.setSize(1007, 85, false);

		// shelfup3
		const shelfup3 = this.physics.add.sprite(1257, -649, "light_wall_shelf");
		shelfup3.scaleX = 0.1250780691733577;
		shelfup3.scaleY = 0.1250780691733577;
		shelfup3.body.setSize(1007, 85, false);

		// green_2
		const green_2 = this.add.image(158, -850, "red_plain");
		green_2.scaleX = 15.964687337484047;
		green_2.scaleY = 0.014266231936905908;
		green_2.tintBottomLeft = 8355711;
		green_2.tintBottomRight = 7895160;

		// ceiling3
		const ceiling3 = this.add.tileSprite(280, -865, 10000, 78, "skirting_light");
		ceiling3.scaleX = 0.18021693427896895;
		ceiling3.scaleY = 0.18021693427896895;

		// smallchair
		const smallchair = this.physics.add.sprite(112, 620, "light_table_small");
		smallchair.scaleX = 0.20051634652048822;
		smallchair.scaleY = 0.20051634652048822;
		smallchair.body.setSize(376, 369, false);

		// computerchair
		const computerchair = this.physics.add.sprite(482, 578, "black_office_chair_front");
		computerchair.scaleX = 0.19602661660822723;
		computerchair.scaleY = 0.19602661660822723;
		computerchair.body.setSize(600, 986, false);

		// pcdesk
		const pcdesk = this.physics.add.sprite(1161, 604, "dark_desk");
		pcdesk.scaleX = 0.2063015387012218;
		pcdesk.scaleY = 0.2063015387012218;
		pcdesk.body.setSize(1164, 572, false);

		// computerscreen
		const computerscreen = this.physics.add.sprite(1146, 510, "computer_monitor");
		computerscreen.scaleX = 0.27791418679727736;
		computerscreen.scaleY = 0.27791418679727736;
		computerscreen.body.setSize(467, 348, false);

		// shelf1
		const shelf1 = this.physics.add.sprite(-633, 416, "light_wall_shelf");
		shelf1.scaleX = 0.1250780691733577;
		shelf1.scaleY = 0.1250780691733577;
		shelf1.body.setSize(1007, 85, false);

		// shelf3
		const shelf3 = this.physics.add.sprite(129, 153, "light_wall_shelf");
		shelf3.scaleX = 0.11064110134823676;
		shelf3.scaleY = 0.11076399679052332;
		shelf3.body.setSize(1007, 85, false);

		// shelf2
		const shelf2 = this.physics.add.sprite(1193, 117, "light_wall_shelf");
		shelf2.scaleX = 0.1250780691733577;
		shelf2.scaleY = 0.1250780691733577;
		shelf2.body.setSize(1007, 85, false);

		// painting3
		const painting3 = this.physics.add.sprite(2667, -151, "painting_03_light");
		painting3.scaleX = 0.1779781357342463;
		painting3.scaleY = 0.1779781357342463;
		painting3.alpha = 0.9;
		painting3.alphaTopLeft = 0.9;
		painting3.alphaTopRight = 0.9;
		painting3.alphaBottomLeft = 0.9;
		painting3.alphaBottomRight = 0.9;
		painting3.body.setSize(614, 432, false);

		// uppertable
		const uppertable = this.physics.add.sprite(573, -896, "light_table_round");
		uppertable.scaleX = 0.39293680289905397;
		uppertable.scaleY = 0.39293680289905397;
		uppertable.body.setSize(240, 193, false);

		// bookcase1
		const bookcase1 = this.physics.add.sprite(207, -986, "light_5_shelves");
		bookcase1.scaleX = 0.21527643266675234;
		bookcase1.scaleY = 0.21527643266675234;
		bookcase1.body.setSize(676, 1109, false);

		// shelfup10
		const shelfup10 = this.physics.add.sprite(204, -1378, "light_wall_shelf");
		shelfup10.scaleX = 0.1250780691733577;
		shelfup10.scaleY = 0.1250780691733577;
		shelfup10.body.setSize(1007, 85, false);

		// shelfup11
		const shelfup11 = this.physics.add.sprite(931, -1366, "light_wall_shelf");
		shelfup11.scaleX = 0.1250780691733577;
		shelfup11.scaleY = 0.1250780691733577;
		shelfup11.body.setSize(1007, 85, false);

		// painting4
		const painting4 = this.physics.add.sprite(2735, -1035, "painting_09_dark");
		painting4.scaleX = 0.17630558717971065;
		painting4.scaleY = 0.17630558717971065;
		painting4.body.setSize(635, 437, false);

		// bookcase
		const bookcase = this.physics.add.sprite(933, -984, "light_5_shelves");
		bookcase.scaleX = 0.21527643266675234;
		bookcase.scaleY = 0.21527643266675234;
		bookcase.body.setSize(676, 1109, false);

		// dark_wall_shelf
		const dark_wall_shelf = this.add.image(155, -1874, "dark_wall_shelf");
		dark_wall_shelf.scaleX = 0.24858210854867147;
		dark_wall_shelf.scaleY = 0.24858210854867147;

		// dark_wall_shelf_1
		const dark_wall_shelf_1 = this.add.image(405, -1874, "dark_wall_shelf");
		dark_wall_shelf_1.scaleX = 0.24858210854867147;
		dark_wall_shelf_1.scaleY = 0.24858210854867147;

		// dark_wall_shelf_2
		const dark_wall_shelf_2 = this.add.image(654, -1874, "dark_wall_shelf");
		dark_wall_shelf_2.scaleX = 0.24858210854867147;
		dark_wall_shelf_2.scaleY = 0.24858210854867147;

		// dark_wall_shelf_3
		const dark_wall_shelf_3 = this.add.image(905, -1874, "dark_wall_shelf");
		dark_wall_shelf_3.scaleX = 0.24858210854867147;
		dark_wall_shelf_3.scaleY = 0.24858210854867147;

		// dark_wall_shelf_4
		const dark_wall_shelf_4 = this.add.image(1146, -1874, "dark_wall_shelf");
		dark_wall_shelf_4.scaleX = 0.24858210854867147;
		dark_wall_shelf_4.scaleY = 0.24858210854867147;

		// dark_wall_shelf_5
		const dark_wall_shelf_5 = this.add.image(1381, -1874, "dark_wall_shelf");
		dark_wall_shelf_5.scaleX = 0.24858210854867147;
		dark_wall_shelf_5.scaleY = 0.24858210854867147;

		// dark_wall_shelf_6
		const dark_wall_shelf_6 = this.add.image(-34, -1874, "dark_wall_shelf");
		dark_wall_shelf_6.scaleX = 0.24858210854867147;
		dark_wall_shelf_6.scaleY = 0.24858210854867147;

		// dark_wall_shelf_7
		const dark_wall_shelf_7 = this.add.image(1389, -1892, "dark_wall_shelf");
		dark_wall_shelf_7.scaleX = 0.24858210854867147;
		dark_wall_shelf_7.scaleY = 0.24858210854867147;

		// dark_wall_shelf_8
		const dark_wall_shelf_8 = this.add.image(1154, -1892, "dark_wall_shelf");
		dark_wall_shelf_8.scaleX = 0.24858210854867147;
		dark_wall_shelf_8.scaleY = 0.24858210854867147;

		// dark_wall_shelf_9
		const dark_wall_shelf_9 = this.add.image(913, -1892, "dark_wall_shelf");
		dark_wall_shelf_9.scaleX = 0.24858210854867147;
		dark_wall_shelf_9.scaleY = 0.24858210854867147;

		// dark_wall_shelf_10
		const dark_wall_shelf_10 = this.add.image(662, -1892, "dark_wall_shelf");
		dark_wall_shelf_10.scaleX = 0.24858210854867147;
		dark_wall_shelf_10.scaleY = 0.24858210854867147;

		// dark_wall_shelf_11
		const dark_wall_shelf_11 = this.add.image(413, -1892, "dark_wall_shelf");
		dark_wall_shelf_11.scaleX = 0.24858210854867147;
		dark_wall_shelf_11.scaleY = 0.24858210854867147;

		// dark_wall_shelf_12
		const dark_wall_shelf_12 = this.add.image(163, -1892, "dark_wall_shelf");
		dark_wall_shelf_12.scaleX = 0.24858210854867147;
		dark_wall_shelf_12.scaleY = 0.24858210854867147;

		// dark_wall_shelf_13
		const dark_wall_shelf_13 = this.add.image(-26, -1892, "dark_wall_shelf");
		dark_wall_shelf_13.scaleX = 0.24858210854867147;
		dark_wall_shelf_13.scaleY = 0.24858210854867147;

		// bottomlast
		const bottomlast = this.physics.add.sprite(787, -1774, "block_separator_01");
		bottomlast.scaleX = 5.504107162267043;
		bottomlast.scaleY = 1.250533984076435;
		bottomlast.visible = false;
		bottomlast.body.pushable = false;
		bottomlast.body.immovable = true;
		bottomlast.body.setSize(695, 40, false);

		// bat_1
		const bat_1 = new Bat(this, 1086, -1237);
		this.add.existing(bat_1);
		bat_1.scaleX = 0.15808932514316845;
		bat_1.scaleY = 0.15808932514316845;
		bat_1.body.velocity.x = -400;
		bat_1.body.velocity.y = 0;
		bat_1.body.collideWorldBounds = true;

		// spider3
		const spider3 = new Spider(this, 569, -1532);
		this.add.existing(spider3);
		spider3.scaleX = 0.2557486287841334;
		spider3.scaleY = 0.2557486287841334;

		// catPlayer
		const catPlayer = new CatPlayer(this, 154, 480);
		this.add.existing(catPlayer);
		catPlayer.body.bounce.x = 0;
		catPlayer.body.bounce.y = 0.1;
		catPlayer.body.maxAngular = 2000;
		catPlayer.body.collideWorldBounds = true;

		// broom
		const broom = new Broom(this, 1485, 552);
		this.add.existing(broom);

		// lamp_05
		const lamp_05 = this.add.image(1015, -49, "lamp_21");
		lamp_05.scaleX = 0.19276613868768133;
		lamp_05.scaleY = 0.19276613868768133;

		// paint1
		const paint1 = this.physics.add.sprite(371, 255, "painting_05_dark");
		paint1.scaleX = 0.20979923073399342;
		paint1.scaleY = 0.20979923073399342;
		paint1.body.setSize(263, 320, false);

		// paint2
		const paint2 = this.physics.add.sprite(930, 245, "painting_07_light");
		paint2.scaleX = 0.21141004999290297;
		paint2.scaleY = 0.21141004999290297;
		paint2.body.setSize(263, 320, false);

		// plant2
		const plant2 = this.physics.add.sprite(1185, 67, "house_plant_example_09");
		plant2.scaleX = 0.10626246239418813;
		plant2.scaleY = 0.10626246239418813;
		plant2.body.gravity.y = 1000;
		plant2.body.bounce.y = 0.3;
		plant2.body.collideWorldBounds = true;
		plant2.body.onWorldBounds = true;
		plant2.body.checkCollision.up = false;
		plant2.body.setOffset(180, 0);
		plant2.body.setSize(200, 875, false);

		// plant1
		const plant1 = this.physics.add.sprite(120, 102, "house_plant_example_09");
		plant1.scaleX = 0.10626246239418813;
		plant1.scaleY = 0.10626246239418813;
		plant1.body.gravity.y = 1000;
		plant1.body.bounce.y = 0.3;
		plant1.body.collideWorldBounds = true;
		plant1.body.onWorldBounds = true;
		plant1.body.checkCollision.up = false;
		plant1.body.setOffset(180, 0);
		plant1.body.setSize(200, 875, false);

		// plant4
		const plant4 = this.physics.add.sprite(1240, -699, "house_plant_example_09");
		plant4.scaleX = 0.10626246239418813;
		plant4.scaleY = 0.10626246239418813;
		plant4.body.gravity.y = 1000;
		plant4.body.bounce.y = 0.3;
		plant4.body.collideWorldBounds = true;
		plant4.body.onWorldBounds = true;
		plant4.body.checkCollision.up = false;
		plant4.body.setOffset(180, 0);
		plant4.body.setSize(200, 875, false);

		// plant3
		const plant3 = this.physics.add.sprite(111, -662, "house_plant_example_09");
		plant3.scaleX = 0.10626246239418813;
		plant3.scaleY = 0.10626246239418813;
		plant3.body.gravity.y = 1000;
		plant3.body.bounce.y = 0.3;
		plant3.body.collideWorldBounds = true;
		plant3.body.onWorldBounds = true;
		plant3.body.checkCollision.up = false;
		plant3.body.setOffset(180, 0);
		plant3.body.setSize(200, 875, false);

		// paint3l
		const paint3l = this.physics.add.sprite(335, -435, "painting_07_light");
		paint3l.scaleX = 0.21141004999290297;
		paint3l.scaleY = 0.21141004999290297;
		paint3l.body.setSize(263, 320, false);

		// indoorwindow1
		const indoorwindow1 = new IndoorWindow(this, 119, 255);
		this.add.existing(indoorwindow1);

		// paint4l
		const paint4l = this.physics.add.sprite(1040, -509, "painting_05_dark");
		paint4l.scaleX = 0.20979923073399342;
		paint4l.scaleY = 0.20979923073399342;
		paint4l.body.setSize(263, 320, false);

		// spider2
		const spider2 = new Spider(this, 683, -768);
		this.add.existing(spider2);
		spider2.scaleX = 0.2557486287841334;
		spider2.scaleY = 0.2557486287841334;

		// plant6
		const plant6 = this.physics.add.sprite(933, -1417, "house_plant_example_09");
		plant6.scaleX = 0.10626246239418813;
		plant6.scaleY = 0.10626246239418813;
		plant6.body.gravity.y = 1000;
		plant6.body.bounce.y = 0.3;
		plant6.body.checkCollision.up = false;
		plant6.body.setOffset(180, 0);
		plant6.body.setSize(200, 875, false);

		// plant5
		const plant5 = this.physics.add.sprite(197, -1430, "house_plant_example_09");
		plant5.scaleX = 0.10626246239418813;
		plant5.scaleY = 0.10626246239418813;
		plant5.body.gravity.y = 1000;
		plant5.body.bounce.y = 0.3;
		plant5.body.checkCollision.up = false;
		plant5.body.setOffset(180, 0);
		plant5.body.setSize(200, 875, false);

		// fallpainting1
		const fallpainting1 = new fallpainting(this, 658, 314);
		this.add.existing(fallpainting1);

		// fallpainting2
		const fallpainting2 = new fallpainting(this, 635, -539);
		this.add.existing(fallpainting2);

		// fallpainting3
		const fallpainting3 = new fallpainting(this, 528, -1226);
		this.add.existing(fallpainting3);

		// spiderroom
		const spiderroom = new Spider(this, 659, -17);
		this.add.existing(spiderroom);
		spiderroom.scaleX = 0.2557486287841334;
		spiderroom.scaleY = 0.2557486287841334;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(888, -513, 128, 128);
		rectangle_1.scaleX = 46.886245738048274;
		rectangle_1.scaleY = 35.831637224160346;
		rectangle_1.alpha = 0.1;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 3293379;

		// saturateFx
		const saturateFx = rectangle_1.postFX.addColorMatrix();
		saturateFx.saturate(1);

		this.ceiling2 = ceiling2;
		this.shelve = shelve;
		this.bed = bed;
		this.cheese5 = cheese5;
		this.cheese4 = cheese4;
		this.cheese1 = cheese1;
		this.ceiling1 = ceiling1;
		this.bottom = bottom;
		this.paint4 = paint4;
		this.shelfup2 = shelfup2;
		this.shelfup1 = shelfup1;
		this.shelfup3 = shelfup3;
		this.ceiling3 = ceiling3;
		this.smallchair = smallchair;
		this.computerchair = computerchair;
		this.pcdesk = pcdesk;
		this.computerscreen = computerscreen;
		this.shelf1 = shelf1;
		this.shelf3 = shelf3;
		this.shelf2 = shelf2;
		this.painting3 = painting3;
		this.uppertable = uppertable;
		this.bookcase1 = bookcase1;
		this.shelfup10 = shelfup10;
		this.shelfup11 = shelfup11;
		this.painting4 = painting4;
		this.bookcase = bookcase;
		this.bottomlast = bottomlast;
		this.bat_1 = bat_1;
		this.spider3 = spider3;
		this.catPlayer = catPlayer;
		this.broom = broom;
		this.paint1 = paint1;
		this.paint2 = paint2;
		this.plant2 = plant2;
		this.plant1 = plant1;
		this.plant4 = plant4;
		this.plant3 = plant3;
		this.paint3l = paint3l;
		this.indoorwindow1 = indoorwindow1;
		this.paint4l = paint4l;
		this.spider2 = spider2;
		this.plant6 = plant6;
		this.plant5 = plant5;
		this.fallpainting1 = fallpainting1;
		this.fallpainting2 = fallpainting2;
		this.fallpainting3 = fallpainting3;
		this.spiderroom = spiderroom;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelve;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bed;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cheese5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cheese4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cheese1;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bottom;
	/** @type {Phaser.GameObjects.Image} */
	paint4;
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
	computerchair;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	pcdesk;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	computerscreen;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	uppertable;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bookcase1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup10;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup11;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bookcase;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bottomlast;
	/** @type {Bat} */
	bat_1;
	/** @type {Spider} */
	spider3;
	/** @type {CatPlayer} */
	catPlayer;
	/** @type {Broom} */
	broom;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint3l;
	/** @type {IndoorWindow} */
	indoorwindow1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint4l;
	/** @type {Spider} */
	spider2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant5;
	/** @type {fallpainting} */
	fallpainting1;
	/** @type {fallpainting} */
	fallpainting2;
	/** @type {fallpainting} */
	fallpainting3;
	/** @type {Spider} */
	spiderroom;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.UpdateGroup=this.add.group();
		this.FlowerGroup=this.add.group();
		this.CheeseGroup=this.add.group();
		this.DirtGroup=this.add.group();
		this.cheesecatchtheme=this.sound.add('GetMouse');
		this.goaltheme=this.sound.add('missiongoal');
this.leveltheme=this.sound.add('maintheme');

this.leveltheme.play();




		this.camerapan=0;
		this.Restart=true;

		this.editorCreate();


		this.fallpainting2.painting.setTexture('painting_01_dark');
			this.fallpainting3.painting.setTexture('painting_03_gold')
		this.PanHeight=-950;
		this.number=-910;

		this.plant1.item="flower";
		this.plant3.item="flower";
		this.plant2.item="flower";
		this.plant4.item="flower";
		this.plant5.item="flower";
		this.plant6.item="flower";


		this.ceiling1.dirt="nodirt";
		this.ceiling3.dirt="nodirt";

		MissionCount=6;


		this.physics.world.enable(this.ceiling1);
		this.physics.world.enable(this.ceiling3);

		this.ceiling1.body.immovable = true;
		this.ceiling3.body.immovable = true;


		this.test();
		this.addCollidersBroom();
		this.spiderroom.Moving=true;
	//this.spider2.Moving=true;

		//this.spider2.Moving=true;
		this.physics.world.setBounds(0, -1900,1400, 2800);
		this.cameras.main.setBounds(0,-2950,1400, 3650);
		this.cameras.main.setZoom(0.71);
		//this.cameras.main.startFollow(this.catPlayer,true,100,1,5,5);

			this.cameras.main.startFollow(this.catPlayer,false,100,0.1,0.2,0.2);
			//this.cameras.main.startFollow(this.catPlayer,true,100,100,5,this.camerapan);

		this.CreatePlatform(this.shelf1);
		this.CreatePlatform(this.shelf2);
		this.CreatePlatform(this.shelf3);

		this.CreatePlatform(this.computerchair);
		this.CreatePlatform(this.pcdesk);

		this.CreatePlatform(this.computerscreen);
		this.CreatePlatform(this.smallchair);

		this.CreatePlatform(this.shelf3);

		this.CreatePlatform(this.shelfup3);
		this.CreatePlatform(this.shelfup1);
		this.CreatePlatform(this.shelfup2);

		this.CreatePlatform(this.shelfup10);
		this.CreatePlatform(this.shelfup11);

		//this.CreatePlatform(this.ceiling1);
		//this.CreatePlatform(this.ceiling3);
		this.CreatePlatform(this.bed);
		this.CreatePlatform(this.shelve);

		//this.CreatePlatform(this.paint3);
		this.CreatePlatform(this.paint4);

		this.CreatePlatform(this.painting4);
		this.CreatePlatform(this.painting3);
		this.CreatePlatform(this.bookcase1);
		this.CreatePlatform(this.bookcase);


		this.CreatePlatform(this.uppertable);




		this.physics.add.collider(this.catPlayer,this.bottom);

				this.physics.add.collider(this.catPlayer,this.ceiling1);
				this.physics.add.collider(this.catPlayer,this.ceiling3);

		this.physics.add.collider(this.catPlayer,this.bottomlast);

	//	this.physics.add.collider(this.catPlayer,this.ceiling1);
		this.physics.add.overlap(this.catPlayer,this.CheeseGroup,this.CatchSpider,null,this);

		this.physics.add.overlap(this.catPlayer,this.paint1,this.StickToObject,null,this);
			this.physics.add.overlap(this.catPlayer,this.paint2,this.StickToObject,null,this);
			this.physics.add.overlap(this.catPlayer,this.paint3l,this.StickToObject,null,this);
			this.physics.add.overlap(this.catPlayer,this.paint4l,this.StickToObject,null,this);

		this.physics.add.collider(this.plant2,this.shelf2);
		this.physics.add.collider(this.catPlayer,this.plant2,this.push,null,this);
		this.physics.add.collider(this.plant2,this.bottom,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.plant1,this.shelf3);
		this.physics.add.collider(this.catPlayer,this.plant1,this.push,null,this);
		this.physics.add.collider(this.plant1,this.bottom,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.plant3,this.shelfup1);
		this.physics.add.collider(this.catPlayer,this.plant3,this.push,null,this);
		this.physics.add.collider(this.plant3,this.ceiling1,this.DropAndLeaveMark,null,this);
		this.physics.add.collider(this.plant3,this.bottom,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.plant4,this.shelfup3);
		this.physics.add.collider(this.catPlayer,this.plant4,this.push,null,this);
		this.physics.add.collider(this.plant4,this.ceiling1,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.plant5,this.shelfup10);
		this.physics.add.collider(this.catPlayer,this.plant5,this.push,null,this);
		this.physics.add.collider(this.plant5,this.ceiling3,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.plant6,this.shelfup11);
		this.physics.add.collider(this.catPlayer,this.plant6,this.push,null,this);
		this.physics.add.collider(this.plant6,this.ceiling3,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.fallpainting1,this.bottom,this.DropAndLeaveMark,null,this);
		this.physics.add.collider(this.fallpainting1.block,this.catPlayer,this.MakeObjectImmovabke,null,this);

		this.physics.add.collider(this.fallpainting2,this.ceiling1,this.DropAndLeaveMark,null,this);
		this.physics.add.collider(this.fallpainting2.block,this.catPlayer,this.MakeObjectImmovabke,null,this);

		this.physics.add.collider(this.fallpainting3,this.ceiling3,this.DropAndLeaveMark,null,this);
		this.physics.add.collider(this.fallpainting3.block,this.catPlayer,this.MakeObjectImmovabke,null,this);

		this.physics.add.overlap(this.catPlayer,this.FlowerGroup,this.CatchSpider,null,this);

			this.physics.add.overlap(this.catPlayer,this.spiderroom.spider1,this.GetHit,null,this);
					this.physics.add.overlap(this.catPlayer,this.spider2.spider1,this.GetHit,null,this);
							this.physics.add.overlap(this.catPlayer,this.spider3.spider1,this.GetHit,null,this);
							this.physics.add.overlap(this.catPlayer,this.bat_1,this.GetHit,null,this);

			this.physics.add.overlap(this.broom,this.DirtGroup,this.StopBroom,null,this);
			this.physics.add.overlap(this.catPlayer,this.indoorwindow1.waythrough,this.JumpOut,null,this);



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
		LevelSpider3Clear=true;

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


	update(delta){


//this.DropDownWhenjumpCatonObject(this.paint1);
this.DropDownWhenjumpCatonObject(this.paint4);

this.DropDownWhenjumpCatonObject(this.painting3);
this.DropDownWhenjumpCatonObject(this.painting4);



		//console.log('test spider room'+ this.catPlayer.y + 'en panheight '+ this.PanHeight);

		if(this.catPlayer.y<-100 && this.catPlayer.y>-780){

			if(this.PanHeight<-1710){

			this.cameras.main.setBounds(0,this.PanHeight+=20,1400, 1650);
			}else if (this.PanHeight >=-1690){
			this.cameras.main.setBounds(0,this.PanHeight-=20,1400, 1650);
			}

			this.spider2.Moving=true;


		}
		else if(this.catPlayer.y>=100 && this.catPlayer.y>=-780)
			{
				//this.cameras.main.setBounds(0,this.PanHeight+=2,1400, 1650);

				if(this.PanHeight<-950){
				this.cameras.main.setBounds(0,this.PanHeight+=20,1400, 1650);
				}
				else if(this.PanHeight>-950){
				this.cameras.main.setBounds(0,this.PanHeight-=20,1400, 1650);
				}


			}

		else if(this.catPlayer.y<-780){

this.spider3.Moving=true;
			if(this.PanHeight>=-2450){
			this.cameras.main.setBounds(0,this.PanHeight-=20,1400, 1650);
			}


			console.log('uppe floor');
		}

		if(this.camerapan>=300)
			{
			//this.Restart=false;
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
