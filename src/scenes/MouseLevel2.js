
// You can write more code here
var CheckOverlap=false;
/* START OF COMPILED CODE */

class MouseLevel2 extends BaseScene {

	constructor() {
		super("MouseLevel2");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// red_large_stripe
		const red_large_stripe = this.add.tileSprite(675, 249, 5000, 1382, "green_large_stripe");
		red_large_stripe.scaleX = 1.1;
		red_large_stripe.scaleY = 0.6;
		red_large_stripe.tintTopLeft = 4473924;
		red_large_stripe.tintTopRight = 4473924;
		red_large_stripe.tileScaleX = 0.1;

		// redstripeabove
		const redstripeabove = this.add.image(836, -87, "green_plain");
		redstripeabove.scaleX = 0.6153678486624686;
		redstripeabove.scaleY = 5.132801232728735;
		redstripeabove.angle = 90;
		redstripeabove.tintTopRight = 2500134;
		redstripeabove.tintBottomRight = 1315603;

		// skirting_light
		const skirting_light = this.add.tileSprite(600, 634, 10000, 63, "skirting_light");
		skirting_light.scaleX = 0.58;
		skirting_light.scaleY = 0.2528690000816929;

		// bottom
		const bottom = this.physics.add.sprite(993, 661, "block_separator_01");
		bottom.scaleX = 8.016925762653134;
		bottom.scaleY = -0.5941844224800856;
		bottom.visible = false;
		bottom.body.pushable = false;
		bottom.body.immovable = true;
		bottom.body.setSize(695, 40, false);

		// holebottom
		const holebottom = this.physics.add.sprite(-1755, 654, "Mousehole");
		holebottom.scaleX = 0.4732652666964938;
		holebottom.scaleY = 0.6246098807160967;
		holebottom.body.setOffset(-100, 0);
		holebottom.body.setSize(112, 169, false);

		// green
		const green = this.physics.add.image(660, 713, "green_plain");
		green.scaleX = 41.31119914757326;
		green.scaleY = 0.10155142306574311;
		green.flipY = true;
		green.tintBottomLeft = 12895432;
		green.tintBottomRight = 13553358;
		green.body.setSize(437, 1232, false);

		// ceiling
		const ceiling = this.add.tileSprite(898, -55, 10000, 78, "skirting_light");
		ceiling.scaleX = 0.6;
		ceiling.scaleY = 0.09317645979579199;
		ceiling.tintTopLeft = 8221041;
		ceiling.tintBottomLeft = 8946049;

		// rug_05
		const rug_05 = this.add.image(1220, 678, "rug_05");
		rug_05.scaleX = 0.2844883154260839;
		rug_05.scaleY = 0.09484011155831167;

		// littletable
		const littletable = this.physics.add.sprite(175, 623, "light_table_round");
		littletable.scaleX = 0.5549606181280825;
		littletable.scaleY = 0.5549606181280825;
		littletable.body.setOffset(0, 20);
		littletable.body.setSize(210, 200, false);

		// bookcase
		const bookcase = this.physics.add.sprite(782, 537, "light_5_shelves");
		bookcase.scaleX = 0.2338714695689558;
		bookcase.scaleY = 0.2338714695689558;
		bookcase.body.setSize(676, 1109, false);

		// holetrap1
		const holetrap1 = this.physics.add.sprite(2449, 174, "Mousehole");
		holetrap1.scaleX = 0.5379835964993452;
		holetrap1.scaleY = 0.6086488859421559;
		holetrap1.body.setSize(112, 169, false);

		// painting2
		const painting2 = this.physics.add.sprite(1004, 230, "painting_05_gold");
		painting2.scaleX = 0.1870448774346486;
		painting2.scaleY = 0.1870448774346486;
		painting2.body.setSize(263, 320, false);

		// lamp3
		const lamp3 = this.physics.add.sprite(2743, -33, "lamp_21");
		lamp3.scaleX = 0.21266918165598211;
		lamp3.scaleY = 0.21266918165598211;
		lamp3.body.setOffset(0, 400);
		lamp3.body.setSize(300, 300, false);

		// blockmouse2
		const blockmouse2 = this.physics.add.sprite(-1583, 43, "light_wood_chair_front");
		blockmouse2.scaleX = 0.12602794693078379;
		blockmouse2.scaleY = 0.12602794693078379;
		blockmouse2.visible = false;
		blockmouse2.body.pushable = false;
		blockmouse2.body.immovable = true;
		blockmouse2.body.setSize(429, 843, false);

		// green_1
		const green_1 = this.add.image(1484, 671, "green");
		green_1.scaleX = 0.729519085378914;
		green_1.scaleY = 0.0461082363152181;
		green_1.visible = false;

		// shelf
		const shelf = this.physics.add.sprite(1781, 123, "light_wall_shelf");
		shelf.scaleX = 0.12;
		shelf.scaleY = 0.1;
		shelf.setOrigin(0.5, 0.8);
		shelf.body.setSize(1007, 85, false);

		// shelf5
		const shelf5 = this.physics.add.sprite(2405, 176, "light_wall_shelf");
		shelf5.scaleX = 0.18;
		shelf5.scaleY = 0.1;
		shelf5.setOrigin(0.5, 0.8);
		shelf5.body.collideWorldBounds = true;
		shelf5.body.setSize(1007, 85, false);

		// holeceiling
		const holeceiling = this.physics.add.sprite(-1736, 98, "Mousehole");
		holeceiling.scaleX = 0.44231670379339616;
		holeceiling.scaleY = 0.5599480860866577;
		holeceiling.body.setOffset(-100, 0);
		holeceiling.body.setSize(112, 169, false);

		// shelf3
		const shelf3 = this.physics.add.sprite(-1691, 97, "light_wall_shelf");
		shelf3.scaleX = 0.17;
		shelf3.scaleY = 0.1;
		shelf3.setOrigin(0.5, 0.8);
		shelf3.body.setSize(1007, 85, false);

		// paint1
		const paint1 = this.physics.add.sprite(-1546, 369, "painting_07_light");
		paint1.scaleX = 0.19724542105470913;
		paint1.scaleY = 0.19724542105470913;
		paint1.body.setSize(363, 428, false);

		// painting4
		const painting4 = this.physics.add.sprite(2858, 266, "painting_06_light");
		painting4.scaleX = 0.17599063588930186;
		painting4.scaleY = 0.17599063588930186;
		painting4.body.setSize(263, 320, false);

		// shelf4
		const shelf4 = this.physics.add.sprite(-1110, 250, "light_wall_shelf");
		shelf4.scaleX = 0.12;
		shelf4.scaleY = 0.1;
		shelf4.setOrigin(0.5, 0.8);
		shelf4.body.setSize(1007, 85, false);

		// blockmouse3
		const blockmouse3 = this.physics.add.sprite(-803, 610, "light_wood_chair_front");
		blockmouse3.scaleX = 0.12602794693078379;
		blockmouse3.scaleY = 0.12602794693078379;
		blockmouse3.visible = false;
		blockmouse3.body.pushable = false;
		blockmouse3.body.immovable = true;
		blockmouse3.body.setSize(429, 843, false);

		// shelf7
		const shelf7 = this.physics.add.sprite(447, 279, "light_wall_shelf");
		shelf7.scaleX = 0.12;
		shelf7.scaleY = 0.1;
		shelf7.setOrigin(0.5, 0.8);
		shelf7.body.setSize(1007, 85, false);

		// shelf1
		const shelf1 = this.physics.add.sprite(-229, 174, "light_wall_shelf");
		shelf1.scaleX = 0.12;
		shelf1.scaleY = 0.1;
		shelf1.setOrigin(0.5, 0.8);
		shelf1.body.setSize(1007, 85, false);

		// lamp2
		const lamp2 = this.physics.add.sprite(687, -26, "lamp_21");
		lamp2.scaleX = 0.2250417666048226;
		lamp2.scaleY = 0.2250417666048226;
		lamp2.body.setOffset(0, 200);
		lamp2.body.setSize(300, 300, false);

		// lamp1
		const lamp1 = this.physics.add.sprite(-1365, -31, "lamp_21");
		lamp1.scaleX = 0.20467343775387892;
		lamp1.scaleY = 0.20467343775387892;
		lamp1.body.setOffset(0, 200);
		lamp1.body.setSize(300, 300, false);

		// shelf10
		const shelf10 = this.physics.add.sprite(1269, 101, "light_wall_shelf");
		shelf10.scaleX = 0.12;
		shelf10.scaleY = 0.1;
		shelf10.setOrigin(0.5, 0.8);
		shelf10.body.setSize(1007, 85, false);

		// mouserun
		const mouserun = this.physics.add.sprite(-1611, 632, "mouse");
		mouserun.scaleX = 0.16526838545201133;
		mouserun.scaleY = 0.16526838545201133;
		mouserun.body.collideWorldBounds = true;
		mouserun.body.setOffset(50, 100);
		mouserun.body.setSize(200, 160, false);
		mouserun.play("mousewalk");

		// blockmouse1
		const blockmouse1 = this.physics.add.sprite(-1273, 536, "light_wood_chair_front");
		blockmouse1.scaleX = 0.12602794693078379;
		blockmouse1.scaleY = 0.12602794693078379;
		blockmouse1.visible = false;
		blockmouse1.body.pushable = false;
		blockmouse1.body.immovable = true;
		blockmouse1.body.setSize(429, 843, false);

		// bookcase2
		const bookcase2 = this.physics.add.sprite(-886, 541, "light_wardrobe");
		bookcase2.scaleX = 0.23987346181279254;
		bookcase2.scaleY = 0.23987346181279254;
		bookcase2.body.setSize(676, 1109, false);

		// plant1
		const plant1 = this.physics.add.sprite(-1144, 199, "house_plant_example_09");
		plant1.scaleX = 0.08722327998526791;
		plant1.scaleY = 0.08722327998526791;
		plant1.body.gravity.y = 1000;
		plant1.body.bounce.y = 0.3;
		plant1.body.checkCollision.up = false;
		plant1.body.setSize(524, 875, false);

		// brownseat
		const brownseat = this.physics.add.sprite(-322, 603, "brown_1_seat");
		brownseat.scaleX = 0.18656155057028545;
		brownseat.scaleY = 0.18656155057028545;
		brownseat.body.setSize(1070, 858, false);

		// paintingwhite
		const paintingwhite = this.physics.add.sprite(-123, 378, "painting_05_light");
		paintingwhite.scaleX = 0.1988717799780143;
		paintingwhite.scaleY = 0.1988717799780143;
		paintingwhite.body.setSize(263, 320, false);

		// plant3
		const plant3 = this.physics.add.sprite(444, 217, "house_plant_example_02");
		plant3.scaleX = 0.07910692657200113;
		plant3.scaleY = 0.07910692657200113;
		plant3.body.gravity.y = 1000;
		plant3.body.bounce.y = 0.3;
		plant3.body.checkCollision.up = false;
		plant3.body.setOffset(100, 0);
		plant3.body.setSize(300, 1131, false);

		// shelflast
		const shelflast = this.physics.add.sprite(3029, 124, "light_wall_shelf");
		shelflast.scaleX = 0.13844377470891467;
		shelflast.scaleY = 0.1;
		shelflast.setOrigin(0.5, 0.8);
		shelflast.body.setSize(1007, 85, false);

		// painting
		const painting = this.physics.add.sprite(1481, 342, "painting_06_light");
		painting.scaleX = 0.1870448774346486;
		painting.scaleY = 0.1870448774346486;
		painting.body.setSize(263, 320, false);

		// painting12
		const painting12 = this.physics.add.sprite(2129, 354, "painting_02_dark");
		painting12.scaleX = 0.1472205206225461;
		painting12.scaleY = 0.1472205206225461;
		painting12.body.setOffset(0, 150);
		painting12.body.setSize(263, 320, false);

		// holetrap2
		const holetrap2 = this.physics.add.sprite(3158, 640, "Mousehole");
		holetrap2.scaleX = 0.620963956110377;
		holetrap2.scaleY = 0.5617100076777349;
		holetrap2.body.setSize(112, 169, false);

		// stoneblock
		const stoneblock = this.physics.add.sprite(2364, 138, "square_block_100_percent");
		stoneblock.scaleX = 0.100540340802773;
		stoneblock.scaleY = 0.100540340802773;
		stoneblock.setOrigin(0.5, 0.8);
		stoneblock.body.gravity.y = 1000;
		stoneblock.body.bounce.y = 0.3;
		stoneblock.body.collideWorldBounds = true;
		stoneblock.body.onWorldBounds = true;
		stoneblock.body.checkCollision.up = false;
		stoneblock.body.setSize(512, 512, false);

		// mouse2
		const mouse2 = this.physics.add.sprite(2446, 150, "__grey_mouse_walk_001");
		mouse2.scaleX = 0.14765939847775184;
		mouse2.scaleY = 0.14765939847775184;
		mouse2.body.setSize(442, 292, false);

		// fallpainting1
		const fallpainting1 = new fallpainting(this, -597, 235);
		this.add.existing(fallpainting1);
		fallpainting1.scaleX = 0.9612549275114929;
		fallpainting1.scaleY = 0.9612549275114929;

		// mouse3
		const mouse3 = new Mouse(this, 1467, 632);
		this.add.existing(mouse3);
		mouse3.visible = true;
		mouse3.body.velocity.x = -50;
		mouse3.body.velocity.y = 0;

		// bookcased1
		const bookcased1 = new BookCase(this, 1765, 426);
		this.add.existing(bookcased1);
		bookcased1.scaleX = 0.6595757982533058;
		bookcased1.scaleY = 0.6595757982533058;

		// mouse4
		const mouse4 = new Mouse(this, -185, 150);
		this.add.existing(mouse4);
		mouse4.body.velocity.x = -50;
		mouse4.body.velocity.y = 0;

		// brownseat2
		const brownseat2 = this.physics.add.sprite(2640, 594, "brown_1_seat");
		brownseat2.scaleX = 0.18167172853204533;
		brownseat2.scaleY = 0.18167172853204533;
		brownseat2.body.setSize(1070, 858, false);

		// plant4
		const plant4 = this.physics.add.sprite(1260, 54, "house_plant_example_12");
		plant4.scaleX = 0.08728869809836298;
		plant4.scaleY = 0.08728869809836298;
		plant4.body.gravity.y = 1000;
		plant4.body.bounce.y = 0.3;
		plant4.body.checkCollision.up = false;
		plant4.body.setSize(300, 755, false);

		// dogInterior3
		const dogInterior3 = new DogInterior(this, 1210, 560);
		this.add.existing(dogInterior3);
		dogInterior3.scaleX = 0.8426402817717425;
		dogInterior3.scaleY = 0.8426402817717425;

		// broom
		const broom = new Broom(this, 1917, 513);
		this.add.existing(broom);

		// plant6
		const plant6 = this.physics.add.sprite(2997, 82, "house_plant_example_14");
		plant6.scaleX = 0.14360666621789864;
		plant6.scaleY = 0.14360666621789864;
		plant6.body.gravity.y = 1000;
		plant6.body.bounce.y = 0.3;
		plant6.body.checkCollision.up = false;
		plant6.body.setSize(200, 410, false);

		// plant5
		const plant5 = this.physics.add.sprite(1772, 72, "house_plant_example_02");
		plant5.scaleX = 0.06638332389425652;
		plant5.scaleY = 0.06638332389425652;
		plant5.body.gravity.y = 1000;
		plant5.body.bounce.y = 0.3;
		plant5.body.checkCollision.up = false;
		plant5.body.setSize(400, 1131, false);

		// spider2
		const spider2 = new Spider(this, -429, 35);
		this.add.existing(spider2);
		spider2.scaleX = 0.22041154292377588;
		spider2.scaleY = 0.22041154292377588;

		// spider
		const spider = new Spider(this, 2179, 44);
		this.add.existing(spider);
		spider.scaleX = 0.22041154292377588;
		spider.scaleY = 0.22041154292377588;

		// catPlayer
		const catPlayer = new CatPlayer(this, 147, 454);
		this.add.existing(catPlayer);
		catPlayer.body.maxAngular = 2000;
		catPlayer.body.collideWorldBounds = true;

		// indoorwindow1
		const indoorwindow1 = new IndoorWindow(this, 154, 280);
		this.add.existing(indoorwindow1);
		indoorwindow1.scaleX = 0.8221541225951747;
		indoorwindow1.scaleY = 0.8221541225951747;

		// ellipse_5
		const ellipse_5 = this.add.ellipse(687, -90, 128, 128);
		ellipse_5.scaleX = 0.21103183736432507;
		ellipse_5.scaleY = 0.04495267968083329;
		ellipse_5.alpha = 0.4;
		ellipse_5.isFilled = true;
		ellipse_5.fillColor = 657673;

		// ellipse
		const ellipse = this.add.ellipse(2743, -94, 128, 128);
		ellipse.scaleX = 0.3916825343304212;
		ellipse.scaleY = 0.07463723645206587;
		ellipse.alpha = 0.4;
		ellipse.isFilled = true;
		ellipse.fillColor = 657673;

		// ellipse_1
		const ellipse_1 = this.add.ellipse(-1364, -89, 128, 128);
		ellipse_1.scaleX = 0.3090245740926937;
		ellipse_1.scaleY = 0.0909006337769499;
		ellipse_1.alpha = 0.4;
		ellipse_1.isFilled = true;
		ellipse_1.fillColor = 657673;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(905, 356, 128, 128);
		rectangle_1.scaleX = 52.01406204840832;
		rectangle_1.scaleY = 8.762757423095326;
		rectangle_1.visible = false;
		rectangle_1.alpha = 0.15;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 215624;

		// saturateFx
		const saturateFx = rectangle_1.postFX.addColorMatrix();
		saturateFx.saturate(1);

		// mouse3 (prefab fields)
		mouse3.Speed = "-150";
		mouse3.Time = 3000;

		// mouse4 (prefab fields)
		mouse4.Speed = "-48";
		mouse4.Time = 2000;

		this.red_large_stripe = red_large_stripe;
		this.bottom = bottom;
		this.holebottom = holebottom;
		this.ceiling = ceiling;
		this.littletable = littletable;
		this.bookcase = bookcase;
		this.holetrap1 = holetrap1;
		this.painting2 = painting2;
		this.lamp3 = lamp3;
		this.blockmouse2 = blockmouse2;
		this.shelf = shelf;
		this.shelf5 = shelf5;
		this.holeceiling = holeceiling;
		this.shelf3 = shelf3;
		this.paint1 = paint1;
		this.painting4 = painting4;
		this.shelf4 = shelf4;
		this.blockmouse3 = blockmouse3;
		this.shelf7 = shelf7;
		this.shelf1 = shelf1;
		this.lamp2 = lamp2;
		this.lamp1 = lamp1;
		this.shelf10 = shelf10;
		this.mouserun = mouserun;
		this.blockmouse1 = blockmouse1;
		this.bookcase2 = bookcase2;
		this.plant1 = plant1;
		this.brownseat = brownseat;
		this.paintingwhite = paintingwhite;
		this.plant3 = plant3;
		this.shelflast = shelflast;
		this.painting = painting;
		this.painting12 = painting12;
		this.holetrap2 = holetrap2;
		this.stoneblock = stoneblock;
		this.mouse2 = mouse2;
		this.fallpainting1 = fallpainting1;
		this.mouse3 = mouse3;
		this.bookcased1 = bookcased1;
		this.mouse4 = mouse4;
		this.brownseat2 = brownseat2;
		this.plant4 = plant4;
		this.dogInterior3 = dogInterior3;
		this.broom = broom;
		this.plant6 = plant6;
		this.plant5 = plant5;
		this.spider2 = spider2;
		this.spider = spider;
		this.catPlayer = catPlayer;
		this.indoorwindow1 = indoorwindow1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	red_large_stripe;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bottom;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	holebottom;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	littletable;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bookcase;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	holetrap1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lamp3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	blockmouse2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	holeceiling;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	blockmouse3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf7;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lamp2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lamp1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf10;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	mouserun;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	blockmouse1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bookcase2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	brownseat;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingwhite;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelflast;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting12;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	holetrap2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	stoneblock;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	mouse2;
	/** @type {fallpainting} */
	fallpainting1;
	/** @type {Mouse} */
	mouse3;
	/** @type {BookCase} */
	bookcased1;
	/** @type {Mouse} */
	mouse4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	brownseat2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant4;
	/** @type {DogInterior} */
	dogInterior3;
	/** @type {Broom} */
	broom;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant5;
	/** @type {Spider} */
	spider2;
	/** @type {Spider} */
	spider;
	/** @type {CatPlayer} */
	catPlayer;
	/** @type {IndoorWindow} */
	indoorwindow1;

	/* START-USER-CODE */

	// Write your code here

	create() {



		this.UpdateGroup=this.add.group();
		this.BombsGroup=this.add.group();
			this.MousieGroup=this.add.group();
			this.DirtGroup=this.add.group();
			this.TrapGroup=this.add.group();
			//this.MouseGroup=this.add.group();

			this.goaltheme=this.sound.add('missiongoal');
			this.leveltheme=this.sound.add('maintheme');
			this.leveltheme.play();


		this.editorCreate();


mouseicon=true;
StageClear=LevelMouse3Clear;
		this.MousieGroup.add(this.mouserun);

this.plant4.showmouse=true;

		this.physics.world.enable(this.holebottom);
		this.physics.world.enable(this.holeceiling);

		this.TimerTrap=0;
		this.TimerTrapBool=false;
		this.timerf=0;
		this.mouserun.trapped=false;
		this.mouserun.stunned=false;

		this.holetrap1.blocked=false;
		this.holetrap2.blocked=false;

		this.plant1.item="mousetrap";

		this.HoleBlocked=false;


this.SpeedRun=150;

this.mouserun.MouseSpooked=false;
this.mouserun.bottom=true;
this.mouserun.upper=false;
this.mouserun.CanGoThroughHole=true;
this.mouserun.setVelocityX(200);
this.mouserun.stunnedOnce=true;

this.mouse2.play('mousesniff');
this.MousieGroup.add(this.mouse2);
this.MousieGroup.add(this.mouse3);
this.MousieGroup.add(this.mouse4);


		this.test();
		this.addCollidersBroom();
		//this.AddingRatsStuff();
		this.MouseWalkUpAndDown();

		this.AddingMouseStuff();
		this.JustOnce=true;
		this.physics.world.enable(this.ceiling);

		this.ceiling.body.setImmovable(true);

		this.physics.world.setBounds(-1800,-1800,5000, 3000);
		this.cameras.main.setBounds(-1800,-2900,5000, 3600);
		this.cameras.main.setZoom(0.71);
		this.cameras.main.startFollow(this.catPlayer,false,0.1,0,0,0);

		this.CreatePlatform(this.littletable);
		//this.CreatePlatform(this.lightchare);
		this.CreatePlatform(this.shelf1);
		//this.CreatePlatform(this.tele);
		//this.CreatePlatform(this.darkdesk);
		this.CreatePlatform(this.bookcase2);
		//this.CreatePlatform(this.bookcase3);
		this.CreatePlatform(this.bookcase);
		//this.CreatePlatform(this.drawerdark);

		this.CreatePlatform(this.shelf);
		this.CreatePlatform(this.shelf4);
		this.CreatePlatform(this.shelf3);
		this.CreatePlatform(this.shelf5);
		this.CreatePlatform(this.shelf7);
		//this.CreatePlatform(this.clock);

		//this.CreatePlatform(this.paint1);


		this.CreatePlatform(this.shelf3);
		this.CreatePlatform(this.shelf10);
		//this.CreatePlatform(this.bigseat);



		//this.physics.add.collider(this.catPlayer,this.ceiling);
		this.physics.add.overlap(this.catPlayer,this.MousieGroup,this.EatMouse,null,this);

		this.physics.add.collider(this.mouserun,this.blockmouse1);
		this.physics.add.collider(this.mouserun,this.blockmouse2);
		this.physics.add.collider(this.mouserun,this.blockmouse3,this.StopMouseCloset,null,this);
		this.physics.add.overlap(this.mouserun,this.holebottom,this.MouseGoOtheHoleUp,null,this);
		this.physics.add.overlap(this.mouserun,this.holeceiling,this.MouseGoOtheHoleDown,null,this);
		this.physics.add.overlap(this.catPlayer,this.opendoor,this.OpenDoor,null,this);

		this.physics.add.overlap(this.catPlayer,this.paint1,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintingwhite,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.painting2,this.StickToObject,null,this);

			this.physics.add.overlap(this.catPlayer,this.painting3,this.StickToObject,null,this);
			this.physics.add.overlap(this.catPlayer,this.painting4,this.StickToObject,null,this);
			this.physics.add.overlap(this.catPlayer,this.painting12,this.StickToObject,null,this);
			this.physics.add.overlap(this.catPlayer,this.painting,this.StickToObject,null,this);

			this.physics.add.overlap(this.catPlayer,this.lamp1,this.StickToObject,null,this);
			this.physics.add.overlap(this.catPlayer,this.lamp2,this.StickToObject,null,this);
			this.physics.add.overlap(this.catPlayer,this.lamp3,this.StickToObject,null,this);

		this.physics.add.collider(this.catPlayer,this.stoneblock,this.push,null,this);

		this.physics.add.overlap(this.catPlayer,this.painting2,this.StickToObject,null,this);
		this.physics.add.overlap(this.stoneblock,this.holetrap1,this.closeHole,null,this);

		this.physics.add.collider(this.shelf5,this.stoneblock);
		this.physics.add.collider(this.bottom,this.stoneblock);

		this.physics.add.overlap(this.mouserun,this.TrapGroup,this.SniffandClapp,null,this);

		//this.physics.add.collider(this.catPlayer,this.bookcase2,this.CheckCollisionS,null,this);

	//	this.CreatePlatform(this.chair2);
		//this.CreatePlatform(this.shelf2);

		this.CreatePlatform(this.brownseat2);	
		this.CreatePlatform(this.brownseat);

			this.CreatePlatform(this.shelflast);

		this.CreatePlatform(this.bookcased1.shell);



		this.physics.add.overlap(this.catPlayer,this.bookcased1.mouserow,this.dropshelve,null,this);

		this.physics.add.collider(this.fallpainting1.block,this.catPlayer,this.MakeObjectImmovabke,null,this);
		this.physics.add.collider(this.fallpainting1,this.bottom,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.catPlayer,this.plant4,this.push,null,this);
		this.physics.add.collider(this.plant4,this.bottom,this.DropAndLeaveMarkMouse,null,this);
		this.physics.add.collider(this.plant4,this.shelf10);

		this.physics.add.collider(this.catPlayer,this.plant3,this.push,null,this);
		this.physics.add.collider(this.plant3,this.bottom,this.DropAndLeaveMark,null,this);
		this.physics.add.collider(this.plant3,this.shelf7);

		this.physics.add.collider(this.catPlayer,this.plant1,this.push,null,this);
		this.physics.add.collider(this.plant1,this.bottom,this.DropAndLeaveMark,null,this);
		this.physics.add.collider(this.plant1,this.shelf4);

		this.physics.add.collider(this.catPlayer,this.plant6,this.push,null,this);
		this.physics.add.collider(this.plant6,this.bottom,this.DropAndLeaveMark,null,this);
		this.physics.add.collider(this.plant6,this.shelflast);

		this.physics.add.collider(this.catPlayer,this.plant5,this.push,null,this);
		this.physics.add.collider(this.plant5,this.bottom,this.DropAndLeaveMark,null,this);
		this.physics.add.collider(this.plant5,this.shelf);

		this.physics.add.overlap(this.catPlayer,this.dogInterior3.dog,this.GetHit,null,this);
		this.physics.add.overlap(this.catPlayer,this.spider.spider1,this.GetHit,null,this);
		this.physics.add.overlap(this.catPlayer,this.spider2.spider1,this.GetHit,null,this);


		this.physics.add.overlap(this.broom,this.DirtGroup,this.StopBroom,null,this);

		this.physics.add.overlap(this.catPlayer,this.indoorwindow1.waythrough,this.JumpOut,null,this);

		//this.physics.add.overlap(this.catPlayer,this.bookcase2,this.CheckCollisionS,null,this);




this.physics.add.collider(this.catPlayer,this.bookcase2,this.CheckCollisionS,null,this);

//
//console.log(this.isOverlapping);

MissionCount=6;

	}

	dropshelve(cat,shelve){

shelve.body.setGravityY(1000);

this.time.addEvent({ delay:300, callback:() => {
	if(shelve.parentContainer)
	{
			this.MousieGroup.add(shelve.parentContainer.bookmouse);
	};

}, callbackScope: this,repeat:0});
	}




	closeHole(block,hole){
hole.blocked=true;

	}



	SniffandClapp(mouse,trap){
		mouse.trapped=true;

			if(mouse.MouseSpooked==false)
			{
				mouse.body.setVelocity(0);
				//this.TimerTrapBool=true;

			}





	}

	CountDownToSnapp(mouse,delta)
	{
if(mouse.trapped==true && mouse.active){

this.timerf+=delta;
			//this.timerf=Math.floor(this.timerf/1000);
	console.log('timer is: '+Math.floor(this.timerf/1000));
}else{

this.timerf=0;
}
	}

			push(cat, plant){
if(cat.body.touching.right){
	cat.body.x-=7;
	plant.body.setVelocityX(40);
}else if(cat.body.touching.left){
cat.body.x+=7;
	plant.body.setVelocityX(-40);
}


		this.time.addEvent({ delay:400, callback:() => {
		if(plant.active){
			plant.body.setVelocityX(0);
}

}, callbackScope: this,repeat:0 });


	}


			JumpOut(cat,window){

			if(ShowCompletetext==false && window.WindowOpen){
			console.log('test jump out');
			this.game.sound.stopAll();
			this.scene.start("Level");


			};

	}

MouseGoOtheHoleUp(mouse,hole)
{
mouse.trapped=false;
	if(mouse.MouseSpooked){

mouse.y=this.holeceiling.y-24;
mouse.x=this.holeceiling.x+80;
mouse.bottom=false,
mouse.upper=true;
mouse.MouseSpooked=false;
this.SpeedRun=50;
mouse.body.setVelocityX(50);


	}else{
		this.SpeedRun=200;
		//mouse.flipX=false;
//mouse.body.setVelocityX(50);

	}

}

EatMouse(Cat,Mouse){

		if(Mouse && Cat.MouseVisible){
		MissionCount--;
		Mouse.destroy();
		this.mousecatchtheme.play();
		this.CounterMouse++;

			if(MissionCount==0){
console.log('Stage clear!' + StageClear);
				ShowCompletetext=true;
				LevelMouse3Clear=true;
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

}
		};

MouseGoOtheHoleDown(mouse,hole)
{
mouse.trapped=false;
	if(mouse.MouseSpooked){

mouse.y=this.holebottom.y-22;
mouse.x=this.holebottom.x+80;
mouse.bottom=true;
mouse.upper=false;


mouse.MouseSpooked=false;
this.SpeedRun=200;
mouse.body.setVelocityX(200);

}else{
mouse.body.setVelocityX(200);
//mouse.flipX=false;
}


}

	MouseWalkUpAndDown(){
if(this.mouserun.x>800){

}


	}

	CheckIfTrapSlams(mouse,trap){
if(mouse.active){
if(this.timerf>=3000){
	if(mouse.stunnedOnce==true){
mouse.play('mousestunned');
trap.setTexture('__trap_trap_trigger_006');
mouse.stunnedOnce=false;

	}
		mouse.body.setVelocityX(0);
		mouse.stunned=true;
					}
						}
							}

CheckIfCoastIsClear(mouse)
	{
console.log('mouse spook' + mouse.MouseSpooked);

	}

	StartTimer(time,delta)
	{

		if(this.catPlayer.x<500){

								}else{
this.timerf=0;

		}
	}

	CheckBlockHole(hole){

if(Math.abs(this.stoneblock.x-hole.x)<50 && Math.abs(this.stoneblock.y-hole.y)<150){

			hole.blocked=true;
			console.log('blocked:'+ hole.blocked);
		}else{

		hole.blocked=false;	
	//	console.log('blocked:'+ hole.blocked);
		}
	}
CheckCollisionS(){

	CheckOverlap=true;
//	console.log('putting CheckOverlap to true');



}


	update(time,delta){


	this.CheckBlockHole(this.holetrap1);
	this.CheckBlockHole(this.holetrap2);

	this.checkcollisionCloset=this.physics.overlap(this.catPlayer, this.bookcase2);
	this.checkcollisionCloset2=this.physics.overlap(this.catPlayer, this.bookcased1.toprowbook);
	//console.log('check colision closet'+this.checkcollisionCloset);
	//console.log('check colision closetbook'+this.checkcollisionCloset2);

if(this.checkcollisionCloset || this.checkcollisionCloset2){

this.catPlayer.MouseVisible=false;

}else{

	this.catPlayer.MouseVisible=true;

}



	//console.log("check collision"+this.physics.add.overlap());

//console.log('cat pos x'+ this.catPlayer.x);
//console.log('cat pos y'+ this.catPlayer.y);

		if(Math.abs(this.catPlayer.x-this.holetrap1.x)<200 && Math.abs(this.catPlayer.y-this.holetrap1.y)<200  && this.holetrap2.blocked==false ){

this.mouse2.x=this.holetrap2.x;
this.mouse2.y=this.holetrap2.y-20;

		}else if(Math.abs(this.catPlayer.x-this.holetrap2.x)<200 && Math.abs(this.catPlayer.y-this.holetrap2.y)<200 && this.holetrap1.blocked==false){
this.mouse2.x=this.holetrap1.x;
this.mouse2.y=this.holetrap1.y-20;

		}

	this.CheckIfTrapSlams(this.mouserun,this.mousetrap);


this.CountDownToSnapp(this.mouserun,delta);

//console.log('mouse trapped :'+ this.mouserun.trapped);

this.StartTimer(time,delta);	
	//this.timerf+=delta;

//console.log('timer'+this.timerf);

if(this.mouserun.stunned==false && this.mouserun.active){
if((this.mouserun.body.blocked.right || this.mouserun.body.touching.right && this.mouserun.trapped==false)  ){
console.log('speed mouse right:'+this.SpeedRun);
	this.mouserun.setVelocityX(-this.SpeedRun);
this.mouserun.flipX=true;
this.mouserun.MouseSpooked=false;



}
if((this.mouserun.body.blocked.left || this.mouserun.body.touching.left && this.mouserun.trapped==false)){
console.log('speed mouse left:'+this.SpeedRun);
	this.mouserun.setVelocityX(this.SpeedRun);
	this.mouserun.flipX=false;
	this.mouserun.MouseSpooked=false;
}


if(this.catPlayer && this.mouserun.MouseSpooked==false){

		if((this.catPlayer.x - this.mouserun.x)<400 && Math.abs(this.catPlayer.y - this.mouserun.y)<300){
this.mouserun.trapped=false;
this.mouserun.body.setVelocityX(-800);
this.mouserun.MouseSpooked=true;
this.mouserun.flipX=true;

		}

} else if(this.mouserun.x - this.catPlayer.x>10 && Math.abs(this.catPlayer.y - this.mouserun.y)<300){
this.mouserun.trapped=false;
this.mouserun.body.setVelocityX(800);
this.mouserun.MouseSpooked=true;
this.mouserun.flipX=false;
}
};

	//this.DropDownWhenjumpCatonObject(this.paint1);

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
