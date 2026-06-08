
// You can write more code here
var lightTV1;
var lightTV12; 

var lightlamp1;
var lightlamp2;
var lightlamp3;
var lightstandlamp;

var lightlampup1;
var lightlampup2;
var lightlampup3;
var lightlampup4;
var lightlampup5;
var lightlampup6;
var lightlampup7;


/* START OF COMPILED CODE */

class Mission5FreeTheBirds extends BaseScene {

	constructor() {
		super("Mission5FreeTheBirds");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// bottom
		const bottom = this.physics.add.sprite(624, 680, "block_separator_01");
		bottom.scaleX = 8.016925762653134;
		bottom.scaleY = -0.5941844224800856;
		bottom.visible = false;
		bottom.body.pushable = false;
		bottom.body.immovable = true;
		bottom.body.setSize(695, 40, false);

		// upstairswall_1
		const upstairswall_1 = this.add.tileSprite(779, -518, 5000, 1377, "dark_blue_flock");
		upstairswall_1.scaleX = 1.1;
		upstairswall_1.tintTopLeft = 4274994;
		upstairswall_1.tintTopRight = 4209970;
		upstairswall_1.tintBottomLeft = 14737364;
		upstairswall_1.tintBottomRight = 14343118;
		upstairswall_1.tileScaleX = 0.15;
		upstairswall_1.tileScaleY = 0.15;

		// upstairswall
		const upstairswall = this.add.tileSprite(764, -1042, 5000, 1377, "dark_blue_flock");
		upstairswall.scaleX = 1.1;
		upstairswall.scaleY = 1.4;
		upstairswall.tintTopLeft = 4274994;
		upstairswall.tintTopRight = 4209970;
		upstairswall.tintBottomLeft = 3420972;
		upstairswall.tintBottomRight = 14343118;
		upstairswall.tileScaleX = 0.15;
		upstairswall.tileScaleY = 0.15;

		// standlamp3
		const standlamp3 = this.physics.add.sprite(-2434, -363, "lamp_02");
		standlamp3.scaleX = 0.235093197289408;
		standlamp3.scaleY = 0.235093197289408;
		standlamp3.body.setSize(297, 805, false);

		// bookcaseup
		const bookcaseup = this.physics.add.sprite(544, -205, "dark_5_shelves");
		bookcaseup.scaleX = 0.2051448160616487;
		bookcaseup.scaleY = 0.2051448160616487;
		bookcaseup.body.setSize(676, 1109, false);

		// draupstairs3
		const draupstairs3 = this.physics.add.sprite(-2202, -677, "dark_five_draw");
		draupstairs3.scaleX = 0.20233928076890573;
		draupstairs3.scaleY = 0.20233928076890573;
		draupstairs3.body.pushable = false;
		draupstairs3.body.immovable = true;
		draupstairs3.body.setSize(677, 610, false);

		// draupstairs4
		const draupstairs4 = this.physics.add.sprite(-889, -165, "dark_five_draw");
		draupstairs4.scaleX = 0.20233928076890573;
		draupstairs4.scaleY = 0.20233928076890573;
		draupstairs4.body.pushable = false;
		draupstairs4.body.immovable = true;
		draupstairs4.body.setSize(677, 610, false);

		// bedupstairs
		const bedupstairs = this.physics.add.sprite(3292, -2442, "bed_05");
		bedupstairs.scaleX = 0.3026650918509507;
		bedupstairs.scaleY = 0.3026650918509507;
		bedupstairs.body.setSize(1628, 1068, false);

		// framedoor1
		const framedoor1 = this.physics.add.sprite(5907, -1633, "door_frame_dark");
		framedoor1.scaleX = 0.2742195972414023;
		framedoor1.scaleY = 0.28131163215697413;
		framedoor1.body.setSize(576, 1055, false);

		// door1
		const door1 = this.physics.add.sprite(5907, -1625, "door_27");
		door1.scaleX = 0.2753290815164602;
		door1.scaleY = 0.2843219684261587;
		door1.body.setSize(459, 985, false);

		// framedoorup1
		const framedoorup1 = this.physics.add.sprite(5907, -1633, "door_frame_dark");
		framedoorup1.scaleX = 0.2742195972414023;
		framedoorup1.scaleY = 0.28131163215697413;
		framedoorup1.visible = false;
		framedoorup1.body.setSize(576, 1055, false);

		// green
		const green = this.physics.add.sprite(430, 722, "dark_blue_plain");
		green.scaleX = 43.24419453885726;
		green.scaleY = 0.11224644776012249;
		green.flipY = true;
		green.tintBottomLeft = 4669761;
		green.tintBottomRight = 8618369;
		green.body.setSize(437, 1232, false);

		// framedoor3
		const framedoor3 = this.physics.add.sprite(4561, -1661, "door_frame_dark");
		framedoor3.scaleX = 0.2742195972414023;
		framedoor3.scaleY = 0.28131163215697413;
		framedoor3.body.setSize(576, 1055, false);

		// door3
		const door3 = this.physics.add.sprite(4525, -1662, "door_27");
		door3.scaleX = 0.2753290815164602;
		door3.scaleY = 0.2843219684261587;
		door3.body.setSize(459, 985, false);

		// framedoorup3
		const framedoorup3 = this.physics.add.sprite(3862, -1634, "door_frame_dark");
		framedoorup3.scaleX = 0.2742195972414023;
		framedoorup3.scaleY = 0.28131163215697413;
		framedoorup3.visible = false;
		framedoorup3.body.setSize(576, 1055, false);

		// wallfirstfloor
		const wallfirstfloor = this.add.tileSprite(886, 269, 5000, 1382, "darkbluelargestripe");
		wallfirstfloor.scaleX = 1.3;
		wallfirstfloor.scaleY = 0.5392977458395293;
		wallfirstfloor.tintTopLeft = 3682609;
		wallfirstfloor.tintTopRight = 4666934;
		wallfirstfloor.tintBottomLeft = 8745072;
		wallfirstfloor.tintBottomRight = 12955567;
		wallfirstfloor.tileScaleX = 0.14;

		// skirtbrown
		const skirtbrown = this.add.tileSprite(712, 640, 2000, 63, "skirting_light");
		skirtbrown.scaleX = 4;
		skirtbrown.scaleY = 0.2528690000816929;

		// blackseat
		const blackseat = this.physics.add.sprite(-1114, 609, "brown_1_seat");
		blackseat.scaleX = 0.17753264075431735;
		blackseat.scaleY = 0.17753264075431735;
		blackseat.body.setSize(1070, 858, false);

		// framedoorbel1
		const framedoorbel1 = this.physics.add.sprite(1945, 477, "door_frame_dark");
		framedoorbel1.scaleX = 0.2742195972414023;
		framedoorbel1.scaleY = 0.28131163215697413;
		framedoorbel1.visible = false;
		framedoorbel1.body.setSize(576, 1055, false);

		// opendoor
		const opendoor = this.physics.add.sprite(-312, 490, "door_frame_dark");
		opendoor.scaleX = 0.27644577989159735;
		opendoor.scaleY = 0.27644577989159735;
		opendoor.visible = false;
		opendoor.body.setSize(576, 1055, false);

		// draupstairs
		const draupstairs = this.physics.add.sprite(-533, 616, "dark_five_draw");
		draupstairs.scaleX = 0.20233928076890573;
		draupstairs.scaleY = 0.20233928076890573;
		draupstairs.body.pushable = false;
		draupstairs.body.immovable = true;
		draupstairs.body.setSize(677, 610, false);

		// largeseat_1
		const largeseat_1 = this.physics.add.sprite(4233, -566, "brown_2_seat");
		largeseat_1.scaleX = 0.1819203560184136;
		largeseat_1.scaleY = 0.1819203560184136;
		largeseat_1.tintTopLeft = 3287594;
		largeseat_1.body.setSize(1570, 824, false);

		// opendoor2
		const opendoor2 = this.physics.add.sprite(-311, 486, "door_frame_dark");
		opendoor2.scaleX = 0.27644577989159735;
		opendoor2.scaleY = 0.27644577989159735;
		opendoor2.visible = false;
		opendoor2.body.setSize(576, 1055, false);

		// standlamp2
		const standlamp2 = this.physics.add.sprite(-843, -2027, "lamp_02");
		standlamp2.scaleX = 0.235093197289408;
		standlamp2.scaleY = 0.235093197289408;
		standlamp2.body.setSize(297, 805, false);

		// blackseat2
		const blackseat2 = this.physics.add.sprite(-2970, -503, "brown_1_seat");
		blackseat2.scaleX = 0.17753264075431735;
		blackseat2.scaleY = 0.17753264075431735;
		blackseat2.body.setSize(1070, 858, false);

		// bookcase1
		const bookcase1 = this.physics.add.sprite(411, 561, "dark_5_shelves");
		bookcase1.scaleX = 0.2051448160616487;
		bookcase1.scaleY = 0.2051448160616487;
		bookcase1.body.setSize(676, 1109, false);

		// bookcase2
		const bookcase2 = this.physics.add.sprite(2542, -2486, "dark_5_shelves");
		bookcase2.scaleX = 0.20514481606164744;
		bookcase2.scaleY = 0.20514481606164744;
		bookcase2.body.setSize(676, 1109, false);

		// windowfirst
		const windowfirst = this.physics.add.sprite(-1546, 319, "window_06");
		windowfirst.scaleX = 0.22587207017263713;
		windowfirst.scaleY = 0.22587207017263713;
		windowfirst.body.setSize(495, 768, false);

		// ceiling1
		const ceiling1 = this.add.tileSprite(900, -103, 18000, 78, "skirting_dark");
		ceiling1.scaleX = 0.18021693427896895;
		ceiling1.scaleY = 0.18021693427896895;

		// ceiling3
		const ceiling3 = this.add.tileSprite(3438, -103, 8000, 78, "skirting_dark");
		ceiling3.scaleX = 0.18021693427896895;
		ceiling3.scaleY = 0.18021693427896895;
		ceiling3.flipY = true;

		// ceiling_1
		const ceiling_1 = this.add.tileSprite(639, -1842, 2000, 78, "skirting_light");
		ceiling_1.scaleX = 3;
		ceiling_1.scaleY = 0.2723387119848415;

		// darkdesk
		const darkdesk = this.physics.add.sprite(2648, 630, "dark_desk");
		darkdesk.scaleX = 0.1817628619879825;
		darkdesk.scaleY = 0.1817628619879825;
		darkdesk.body.setSize(1164, 572, false);

		// whitepainting
		const whitepainting = this.physics.add.sprite(4669, -2239, "painting_01_dark");
		whitepainting.scaleX = 0.14390728983716622;
		whitepainting.scaleY = 0.14390728983716622;
		whitepainting.body.setSize(635, 437, false);

		// shelf1
		const shelf1 = this.physics.add.sprite(931, -1379, "light_wall_shelf");
		shelf1.scaleX = 0.0947036164438777;
		shelf1.scaleY = 0.13810902210740583;
		shelf1.body.setSize(1007, 85, false);

		// keyghost
		const keyghost = this.physics.add.sprite(1918, 47, "key_01");
		keyghost.scaleX = 0.19640383206702783;
		keyghost.scaleY = 0.19640383206702783;
		keyghost.flipY = true;
		keyghost.alpha = 0.2;
		keyghost.alphaTopLeft = 0.2;
		keyghost.alphaTopRight = 0.2;
		keyghost.alphaBottomLeft = 0.2;
		keyghost.alphaBottomRight = 0.2;
		keyghost.body.setSize(67, 112, false);

		// screenupstairs
		const screenupstairs = this.physics.add.sprite(1583, -2510, "computer_monitor");
		screenupstairs.scaleX = 0.2516137375604127;
		screenupstairs.scaleY = 0.2516137375604127;
		screenupstairs.body.setSize(467, 348, false);

		// paint3
		const paint3 = this.physics.add.sprite(10, 385, "painting_03_dark");
		paint3.scaleX = 0.17087250256268535;
		paint3.scaleY = 0.17087250256268535;
		paint3.body.setSize(614, 432, false);

		// shelf4
		const shelf4 = this.physics.add.sprite(2291, 271, "light_wall_shelf");
		shelf4.scaleX = 0.0947036164438777;
		shelf4.scaleY = 0.0947036164438777;
		shelf4.body.setSize(1007, 85, false);

		// shelf5
		const shelf5 = this.physics.add.sprite(3187, 27, "light_wall_shelf");
		shelf5.scaleX = 0.0947036164438777;
		shelf5.scaleY = 0.0947036164438777;
		shelf5.body.setSize(1007, 85, false);

		// littletable
		const littletable = this.physics.add.sprite(-1552, 627, "light_table_round");
		littletable.scaleX = 0.5549606181280825;
		littletable.scaleY = 0.5549606181280825;
		littletable.body.setOffset(0, 20);
		littletable.body.setSize(210, 200, false);

		// shelf2
		const shelf2 = this.physics.add.sprite(-1504, 884, "light_wall_shelf");
		shelf2.scaleX = 0.0947036164438777;
		shelf2.scaleY = 0.13810902210740583;
		shelf2.body.setSize(1007, 85, false);

		// clock
		const clock = this.physics.add.sprite(-32, -2140, "blue_wall_clock");
		clock.scaleX = 0.315635373261943;
		clock.scaleY = 0.315635373261943;
		clock.body.setSize(248, 269, false);

		// painting1
		const painting1 = this.physics.add.sprite(-913, 369, "painting_04_dark");
		painting1.scaleX = 0.19527137458689636;
		painting1.scaleY = 0.19527137458689636;
		painting1.body.setSize(505, 357, false);

		// shelf3
		const shelf3 = this.physics.add.sprite(1442, 125, "light_wall_shelf");
		shelf3.scaleX = 0.0947036164438777;
		shelf3.scaleY = 0.1;
		shelf3.body.setSize(1007, 85, false);

		// shelf
		const shelf = this.physics.add.sprite(-1478, -2432, "light_wall_shelf");
		shelf.scaleX = 0.0947036164438777;
		shelf.scaleY = 0.0947036164438777;
		shelf.body.setSize(1007, 85, false);

		// shelf6
		const shelf6 = this.physics.add.sprite(-877, -2184, "light_wall_shelf");
		shelf6.scaleX = 0.0947036164438777;
		shelf6.scaleY = 0.0947036164438777;
		shelf6.body.velocity.y = -150;
		shelf6.body.setSize(1007, 85, false);

		// bookcase3
		const bookcase3 = this.physics.add.sprite(675, -2446, "dark_3_shelves");
		bookcase3.scaleX = 0.19594399183590053;
		bookcase3.scaleY = 0.19594399183590053;
		bookcase3.body.setSize(679, 621, false);

		// ghost
		const ghost = new Ghost(this, 1922, 43);
		this.add.existing(ghost);
		ghost.scaleX = 0.4438750822888975;
		ghost.scaleY = 0.4438750822888975;
		ghost.alpha = 0.5;
		ghost.body.collideWorldBounds = true;

		// ghost_1
		const ghost_1 = new Ghost(this, 2219, -1618);
		this.add.existing(ghost_1);
		ghost_1.scaleX = 0.4438750822888975;
		ghost_1.scaleY = 0.4438750822888975;
		ghost_1.alpha = 0.4;
		ghost_1.body.collideWorldBounds = true;

		// ghost1
		const ghost1 = new Ghost(this, 862, 417);
		this.add.existing(ghost1);
		ghost1.scaleX = 0.4438750822888975;
		ghost1.scaleY = 0.4438750822888975;
		ghost1.alpha = 0.4;
		ghost1.body.collideWorldBounds = true;

		// shelfup5
		const shelfup5 = this.physics.add.sprite(-1545, 144, "shelf");
		shelfup5.scaleX = 0.4695104011909677;
		shelfup5.scaleY = 0.3559238471440259;
		shelfup5.body.setOffset(0, 20);
		shelfup5.body.setSize(320, 85, false);

		// spider2
		const spider2 = new Spider(this, 1210, 53);
		this.add.existing(spider2);
		spider2.scaleX = 0.22041154292377693;
		spider2.scaleY = 0.22041154292377693;

		// spider4
		const spider4 = new Spider(this, 2110, 53);
		this.add.existing(spider4);
		spider4.scaleX = 0.22041154292377693;
		spider4.scaleY = 0.22041154292377693;

		// shelfup7
		const shelfup7 = this.physics.add.sprite(3490, -2487, "light_wall_shelf");
		shelfup7.scaleX = 0.0947036164438777;
		shelfup7.scaleY = 0.0947036164438777;
		shelfup7.body.setSize(1007, 85, false);

		// shelfup6
		const shelfup6 = this.physics.add.sprite(5533, -2276, "light_wall_shelf");
		shelfup6.scaleX = 0.0947036164438777;
		shelfup6.scaleY = 0.0947036164438777;
		shelfup6.body.velocity.y = -150;
		shelfup6.body.setSize(1007, 85, false);

		// bat
		const bat = new Bat(this, -495, -1060);
		this.add.existing(bat);
		bat.scaleX = 0.15808932514316845;
		bat.scaleY = 0.15808932514316845;
		bat.body.velocity.x = -400;
		bat.body.velocity.y = 0;
		bat.body.collideWorldBounds = true;

		// draupstairs2
		const draupstairs2 = this.physics.add.sprite(2023, 619, "dark_five_draw");
		draupstairs2.scaleX = 0.20233928076890573;
		draupstairs2.scaleY = 0.20233928076890573;
		draupstairs2.body.pushable = false;
		draupstairs2.body.immovable = true;
		draupstairs2.body.setSize(677, 610, false);

		// blue1
		const blue1 = new BlueBirdCage(this, 1823, 340);
		this.add.existing(blue1);

		// shelfup11
		const shelfup11 = this.physics.add.sprite(325, -1993, "light_wall_shelf");
		shelfup11.scaleX = 0.0947036164438777;
		shelfup11.scaleY = 0.0947036164438777;
		shelfup11.body.velocity.x = -150;
		shelfup11.body.setSize(1007, 85, false);

		// shelfup10
		const shelfup10 = this.physics.add.sprite(4507, -2633, "light_wall_shelf");
		shelfup10.scaleX = 0.0947036164438777;
		shelfup10.scaleY = 0.0947036164438777;
		shelfup10.body.velocity.x = 150;
		shelfup10.body.setSize(1007, 85, false);

		// shelfup20
		const shelfup20 = this.physics.add.sprite(-2257, -1633, "light_wall_shelf");
		shelfup20.scaleX = 0.15;
		shelfup20.scaleY = 0.0947036164438777;
		shelfup20.body.setSize(1007, 85, false);

		// birdcage1
		const birdcage1 = new birdcage(this, 2635, 297);
		this.add.existing(birdcage1);
		birdcage1.scaleX = 0.8;
		birdcage1.scaleY = 0.8;

		// birdcage2
		const birdcage2 = new birdcage(this, -1548, 72);
		this.add.existing(birdcage2);
		birdcage2.scaleX = 0.7077208781438222;
		birdcage2.scaleY = 0.7077208781438222;

		// plant1
		const plant1 = this.physics.add.sprite(2251, -2569, "house_plant_example_06");
		plant1.scaleX = 0.1093872541274608;
		plant1.scaleY = 0.1093872541274608;
		plant1.body.setSize(612, 448, false);

		// plant2
		const plant2 = this.physics.add.sprite(2290, 242, "house_plant_example_06");
		plant2.scaleX = 0.1093872541274608;
		plant2.scaleY = 0.1093872541274608;
		plant2.body.setSize(612, 448, false);

		// rugdog
		const rugdog = this.physics.add.sprite(-78, 691, "rug_11");
		rugdog.scaleX = 0.26389195497089973;
		rugdog.scaleY = 0.09820691853830661;
		rugdog.body.setSize(1160, 297, false);

		// ceiling
		const ceiling = this.add.tileSprite(1324, -62, 8000, 78, "skirting_dark");
		ceiling.scaleX = 0.8;
		ceiling.scaleY = 0.15;
		ceiling.tintTopLeft = 8944250;
		ceiling.tintTopRight = 9797503;
		ceiling.tintBottomLeft = 9077635;
		ceiling.tintBottomRight = 9998480;

		// clock6
		const clock6 = this.physics.add.sprite(3672, 189, "light_wall_clock");
		clock6.scaleX = 0.17972350051097075;
		clock6.scaleY = 0.17972350051097075;
		clock6.body.setSize(330, 630, false);

		// redstripeabove
		const redstripeabove = this.physics.add.sprite(1678, -82, "green_plain");
		redstripeabove.scaleX = 0.2540626146741389;
		redstripeabove.scaleY = 5.132801232728735;
		redstripeabove.angle = 90;
		redstripeabove.tintTopLeft = 8487297;
		redstripeabove.tintTopRight = 5130826;
		redstripeabove.tintBottomLeft = 8486269;
		redstripeabove.tintBottomRight = 5328205;
		redstripeabove.body.setSize(128, 1382, false);

		// clock1
		const clock1 = this.physics.add.sprite(3660, 450, "light_wall_clock");
		clock1.scaleX = 0.17972350051097075;
		clock1.scaleY = 0.17972350051097075;
		clock1.body.setOffset(0, 200);
		clock1.body.setSize(330, 350, false);

		// lamp5
		const lamp5 = this.add.nineslice(-784, 14, "lamp_21", undefined, 328, 935, 1, 1, 116, 326);
		lamp5.scaleX = 0.2175454808078271;
		lamp5.scaleY = 0.2175454808078271;

		// lamp7
		const lamp7 = this.add.nineslice(1797, 92, "lamp_21", undefined, 314, 1616, 1, 1, 116, 326);
		lamp7.scaleX = 0.21962681433719844;
		lamp7.scaleY = 0.21962681433719844;

		// lamp8
		const lamp8 = this.add.nineslice(3640, -269, "lamp_21", undefined, 321, 1056, 1, 1, 116, 326);
		lamp8.scaleX = 0.21962681433719844;
		lamp8.scaleY = 0.21962681433719844;

		// largeseat
		const largeseat = this.physics.add.sprite(968, 605, "brown_2_seat");
		largeseat.scaleX = 0.1819203560184136;
		largeseat.scaleY = 0.1819203560184136;
		largeseat.body.setSize(1570, 824, false);

		// paint1
		const paint1 = this.physics.add.sprite(-1248, 192, "painting_05_dark");
		paint1.scaleX = 0.20621216733702666;
		paint1.scaleY = 0.20621216733702666;
		paint1.body.pushable = false;
		paint1.body.immovable = true;
		paint1.body.setSize(263, 320, false);

		// ceiling2
		const ceiling2 = this.add.tileSprite(-1400, -101, 8000, 78, "skirting_dark");
		ceiling2.scaleX = 0.8;
		ceiling2.scaleY = 0.19;
		ceiling2.tintTopLeft = 5916487;
		ceiling2.tintTopRight = 4073255;

		// paint2
		const paint2 = this.physics.add.sprite(-332, 269, "painting_07_dark");
		paint2.scaleX = 0.20621216733702666;
		paint2.scaleY = 0.20621216733702666;
		paint2.body.pushable = false;
		paint2.body.immovable = true;
		paint2.body.setSize(263, 320, false);

		// salontable
		const salontable = this.physics.add.sprite(-1906, 300, "light_table_small");
		salontable.scaleX = 0.19275556646479203;
		salontable.scaleY = 0.19275556646479203;
		salontable.body.setOffset(0, 20);
		salontable.body.setSize(376, 369, false);

		// birdcage3
		const birdcage3 = new birdcage(this, -533, 485);
		this.add.existing(birdcage3);
		birdcage3.scaleX = 0.7077208781438222;
		birdcage3.scaleY = 0.7077208781438222;

		// standlamp1
		const standlamp1 = this.physics.add.sprite(1415, 585, "lamp_02");
		standlamp1.scaleX = 0.235093197289408;
		standlamp1.scaleY = 0.235093197289408;
		standlamp1.body.setSize(297, 805, false);

		// paint4
		const paint4 = this.physics.add.sprite(1082, 296, "painting_07_dark");
		paint4.scaleX = 0.20621216733702666;
		paint4.scaleY = 0.20621216733702666;
		paint4.body.pushable = false;
		paint4.body.immovable = true;
		paint4.body.setSize(263, 320, false);

		// plant3
		const plant3 = this.physics.add.sprite(1442, 98, "house_plant_example_06");
		plant3.scaleX = 0.1093872541274608;
		plant3.scaleY = 0.1093872541274608;
		plant3.body.setSize(612, 448, false);

		// chairmove1
		const chairmove1 = this.physics.add.sprite(-3060, -945, "light_wood_chair_front");
		chairmove1.scaleX = 0.1920845304396787;
		chairmove1.scaleY = 0.1920845304396787;
		chairmove1.body.setSize(429, 843, false);

		// catPlayer
		const catPlayer = new CatPlayer(this, -1532, 451);
		this.add.existing(catPlayer);
		catPlayer.body.collideWorldBounds = true;

		// oldtele1
		const oldtele1 = this.physics.add.sprite(2651, 522, "old_tele");
		oldtele1.scaleX = 0.19907866047484432;
		oldtele1.scaleY = 0.19907866047484432;
		oldtele1.body.checkCollision.down = false;
		oldtele1.body.checkCollision.left = false;
		oldtele1.body.checkCollision.right = false;
		oldtele1.body.pushable = false;
		oldtele1.body.immovable = true;
		oldtele1.body.setOffset(0, 170);
		oldtele1.body.setSize(552, 572, false);

		// lampcol1
		const lampcol1 = this.physics.add.sprite(-785, 92, "painting_05_dark");
		lampcol1.scaleX = 0.20621216733702666;
		lampcol1.scaleY = 0.20621216733702666;
		lampcol1.visible = false;
		lampcol1.body.pushable = false;
		lampcol1.body.immovable = true;
		lampcol1.body.setSize(263, 320, false);

		// lampcol2
		const lampcol2 = this.physics.add.sprite(211, 92, "painting_05_dark");
		lampcol2.scaleX = 0.20621216733702666;
		lampcol2.scaleY = 0.20621216733702666;
		lampcol2.visible = false;
		lampcol2.body.pushable = false;
		lampcol2.body.immovable = true;
		lampcol2.body.setSize(263, 320, false);

		// lampcol3
		const lampcol3 = this.physics.add.sprite(1797, 259, "painting_05_dark");
		lampcol3.scaleX = 0.20621216733702666;
		lampcol3.scaleY = 0.20621216733702666;
		lampcol3.visible = false;
		lampcol3.body.pushable = false;
		lampcol3.body.immovable = true;
		lampcol3.body.setSize(263, 320, false);

		// paint5
		const paint5 = this.physics.add.sprite(2657, 158, "painting_07_dark");
		paint5.scaleX = 0.20621216733702666;
		paint5.scaleY = 0.20621216733702666;
		paint5.body.pushable = false;
		paint5.body.immovable = true;
		paint5.body.setSize(263, 320, false);

		// blue2
		const blue2 = new BlueBirdCage(this, 212, 212);
		this.add.existing(blue2);
		blue2.visible = true;

		// standcol
		const standcol = this.physics.add.sprite(1419, 519, "painting_07_dark");
		standcol.scaleX = 0.1696788128716;
		standcol.scaleY = 0.1696788128716;
		standcol.visible = false;
		standcol.body.pushable = false;
		standcol.body.immovable = true;
		standcol.body.setSize(263, 320, false);

		// lamp6
		const lamp6 = this.add.nineslice(209, 15, "lamp_21", undefined, 352, 927, 1, 1, 116, 326);
		lamp6.scaleX = 0.2175454808078271;
		lamp6.scaleY = 0.2175454808078271;

		// ellipse_5
		const ellipse_5 = this.add.ellipse(210, -86, 128, 128);
		ellipse_5.scaleX = 0.17349000566323536;
		ellipse_5.scaleY = 0.04495267968083329;
		ellipse_5.alpha = 0.4;
		ellipse_5.isFilled = true;
		ellipse_5.fillColor = 657673;

		// ellipse
		const ellipse = this.add.ellipse(-784, -86, 128, 128);
		ellipse.scaleX = 0.17349000566323536;
		ellipse.scaleY = 0.04495267968083329;
		ellipse.alpha = 0.4;
		ellipse.isFilled = true;
		ellipse.fillColor = 657673;

		// dogInterior1
		const dogInterior1 = new DogInterior(this, -71, 578);
		this.add.existing(dogInterior1);
		dogInterior1.scaleX = 0.8146439667492517;
		dogInterior1.scaleY = 0.8146439667492517;

		// blockdesk1
		const blockdesk1 = this.physics.add.sprite(1722, 613, "dark_desk");
		blockdesk1.scaleX = 0.1817628619879825;
		blockdesk1.scaleY = 0.1817628619879825;
		blockdesk1.visible = false;
		blockdesk1.body.pushable = false;
		blockdesk1.body.immovable = true;
		blockdesk1.body.setSize(1164, 572, false);

		// blockdesk2
		const blockdesk2 = this.physics.add.sprite(2598, 615, "dark_desk");
		blockdesk2.scaleX = 0.1817628619879825;
		blockdesk2.scaleY = 0.1817628619879825;
		blockdesk2.visible = false;
		blockdesk2.body.pushable = false;
		blockdesk2.body.immovable = true;
		blockdesk2.body.setSize(1164, 572, false);

		// shelf11
		const shelf11 = this.physics.add.sprite(662, 198, "light_wall_shelf");
		shelf11.scaleX = 0.0947036164438777;
		shelf11.scaleY = 0.1;
		shelf11.body.setSize(1007, 85, false);

		// plant5
		const plant5 = this.physics.add.sprite(660, 168, "house_plant_example_01");
		plant5.scaleX = 0.12047385329019386;
		plant5.scaleY = 0.12047385329019386;
		plant5.body.setSize(612, 448, false);

		// clock_1
		const clock_1 = this.physics.add.sprite(-1393, -785, "light_wall_clock");
		clock_1.scaleX = 0.17972350051097075;
		clock_1.scaleY = 0.17972350051097075;
		clock_1.body.setSize(330, 630, false);

		// clock_2
		const clock_2 = this.physics.add.sprite(-257, -2204, "light_wall_clock");
		clock_2.scaleX = 0.17972350051097075;
		clock_2.scaleY = 0.17972350051097075;
		clock_2.body.setSize(330, 630, false);

		// clock_3
		const clock_3 = this.physics.add.sprite(-965, -1417, "light_wall_clock");
		clock_3.scaleX = 0.17972350051097075;
		clock_3.scaleY = 0.17972350051097075;
		clock_3.body.setSize(330, 630, false);

		// clock_4
		const clock_4 = this.physics.add.sprite(1666, -2052, "light_wall_clock");
		clock_4.scaleX = 0.17972350051097075;
		clock_4.scaleY = 0.17972350051097075;
		clock_4.body.setSize(330, 630, false);

		// clock_5
		const clock_5 = this.physics.add.sprite(-611, -2016, "light_wall_clock");
		clock_5.scaleX = 0.17972350051097075;
		clock_5.scaleY = 0.17972350051097075;
		clock_5.body.setSize(330, 630, false);

		// oldtele2
		const oldtele2 = this.physics.add.sprite(-887, -279, "old_tele");
		oldtele2.scaleX = 0.19907866047484432;
		oldtele2.scaleY = 0.19907866047484432;
		oldtele2.body.checkCollision.down = false;
		oldtele2.body.checkCollision.left = false;
		oldtele2.body.checkCollision.right = false;
		oldtele2.body.pushable = false;
		oldtele2.body.immovable = true;
		oldtele2.body.setOffset(0, 170);
		oldtele2.body.setSize(552, 572, false);

		// clock_6
		const clock_6 = this.physics.add.sprite(2381, -2063, "light_wall_clock");
		clock_6.scaleX = 0.17972350051097075;
		clock_6.scaleY = 0.17972350051097075;
		clock_6.body.setSize(330, 630, false);

		// clock_7
		const clock_7 = this.physics.add.sprite(2667, -1612, "light_wall_clock");
		clock_7.scaleX = 0.17972350051097075;
		clock_7.scaleY = 0.17972350051097075;
		clock_7.body.setSize(330, 630, false);

		// clock_8
		const clock_8 = this.physics.add.sprite(2580, -604, "light_wall_clock");
		clock_8.scaleX = 0.17972350051097075;
		clock_8.scaleY = 0.17972350051097075;
		clock_8.body.setSize(330, 630, false);

		// clock_9
		const clock_9 = this.physics.add.sprite(1751, -562, "light_wall_clock");
		clock_9.scaleX = 0.17972350051097075;
		clock_9.scaleY = 0.17972350051097075;
		clock_9.body.setSize(330, 630, false);

		// clock_10
		const clock_10 = this.physics.add.sprite(1528, -881, "light_wall_clock");
		clock_10.scaleX = 0.17972350051097075;
		clock_10.scaleY = 0.17972350051097075;
		clock_10.body.setSize(330, 630, false);

		// clock_11
		const clock_11 = this.physics.add.sprite(800, -951, "light_wall_clock");
		clock_11.scaleX = 0.17972350051097075;
		clock_11.scaleY = 0.17972350051097075;
		clock_11.body.setSize(330, 630, false);

		// clock_12
		const clock_12 = this.physics.add.sprite(492, -1200, "light_wall_clock");
		clock_12.scaleX = 0.17972350051097075;
		clock_12.scaleY = 0.17972350051097075;
		clock_12.body.setSize(330, 630, false);

		// clock_13
		const clock_13 = this.physics.add.sprite(1200, -2150, "light_wall_clock");
		clock_13.scaleX = 0.17972350051097075;
		clock_13.scaleY = 0.17972350051097075;
		clock_13.body.setSize(330, 630, false);

		// clock_14
		const clock_14 = this.physics.add.sprite(534, -628, "light_wall_clock");
		clock_14.scaleX = 0.17972350051097075;
		clock_14.scaleY = 0.17972350051097075;
		clock_14.body.setSize(330, 630, false);

		// clock_15
		const clock_15 = this.physics.add.sprite(176, -863, "light_wall_clock");
		clock_15.scaleX = 0.17972350051097075;
		clock_15.scaleY = 0.17972350051097075;
		clock_15.body.setSize(330, 630, false);

		// paint
		const paint = this.physics.add.sprite(2756, -429, "painting_07_dark");
		paint.scaleX = 0.20621216733702666;
		paint.scaleY = 0.20621216733702666;
		paint.body.pushable = false;
		paint.body.immovable = true;
		paint.body.setSize(263, 320, false);

		// paint_1
		const paint_1 = this.physics.add.sprite(907, -496, "painting_07_dark");
		paint_1.scaleX = 0.20621216733702666;
		paint_1.scaleY = 0.20621216733702666;
		paint_1.body.pushable = false;
		paint_1.body.immovable = true;
		paint_1.body.setSize(263, 320, false);

		// paint_2
		const paint_2 = this.physics.add.sprite(-1248, -1115, "painting_07_dark");
		paint_2.scaleX = 0.20621216733702666;
		paint_2.scaleY = 0.20621216733702666;
		paint_2.body.pushable = false;
		paint_2.body.immovable = true;
		paint_2.body.setSize(263, 320, false);

		// painting2
		const painting2 = this.physics.add.sprite(52, -402, "painting_04_dark");
		painting2.scaleX = 0.19527137458689636;
		painting2.scaleY = 0.19527137458689636;
		painting2.body.setSize(505, 357, false);

		// paint7
		const paint7 = this.physics.add.sprite(1470, -407, "painting_06_dark");
		paint7.scaleX = 0.20621216733702666;
		paint7.scaleY = 0.20621216733702666;
		paint7.body.pushable = false;
		paint7.body.immovable = true;
		paint7.body.setSize(263, 320, false);

		// paint_4
		const paint_4 = this.physics.add.sprite(-1264, -450, "painting_07_dark");
		paint_4.scaleX = 0.20621216733702666;
		paint_4.scaleY = 0.20621216733702666;
		paint_4.body.pushable = false;
		paint_4.body.immovable = true;
		paint_4.body.setSize(263, 320, false);

		// clock_16
		const clock_16 = this.physics.add.sprite(-407, -499, "light_wall_clock");
		clock_16.scaleX = 0.17972350051097075;
		clock_16.scaleY = 0.17972350051097075;
		clock_16.body.setSize(330, 630, false);

		// clock_17
		const clock_17 = this.physics.add.sprite(1390, -1589, "light_wall_clock");
		clock_17.scaleX = 0.17972350051097075;
		clock_17.scaleY = 0.17972350051097075;
		clock_17.body.setSize(330, 630, false);

		// clock_18
		const clock_18 = this.physics.add.sprite(-381, -1237, "light_wall_clock");
		clock_18.scaleX = 0.17972350051097075;
		clock_18.scaleY = 0.17972350051097075;
		clock_18.body.setSize(330, 630, false);

		// clock_19
		const clock_19 = this.physics.add.sprite(-1414, -1978, "light_wall_clock");
		clock_19.scaleX = 0.17972350051097075;
		clock_19.scaleY = 0.17972350051097075;
		clock_19.body.setSize(330, 630, false);

		// clock_20
		const clock_20 = this.physics.add.sprite(-543, -2074, "light_wall_clock");
		clock_20.scaleX = 0.17972350051097075;
		clock_20.scaleY = 0.17972350051097075;
		clock_20.body.setSize(330, 630, false);

		// bookcase
		const bookcase = this.physics.add.sprite(1869, -223, "dark_5_shelves");
		bookcase.scaleX = 0.2051448160616487;
		bookcase.scaleY = 0.2051448160616487;
		bookcase.body.setSize(676, 1109, false);

		// bookcase_1
		const bookcase_1 = this.physics.add.sprite(4060, -1128, "dark_5_shelves");
		bookcase_1.scaleX = 0.2051448160616487;
		bookcase_1.scaleY = 0.2051448160616487;
		bookcase_1.body.setSize(676, 1109, false);

		// lamp2
		const lamp2 = this.add.nineslice(-670, -1696, "lamp_21", undefined, 300, 1050, -5, 4, 85, 337);
		lamp2.scaleX = 0.2547525082067139;
		lamp2.scaleY = 0.2643420624792317;

		// paint6
		const paint6 = this.physics.add.sprite(953, -2256, "painting_06_dark");
		paint6.scaleX = 0.20621216733702666;
		paint6.scaleY = 0.20621216733702666;
		paint6.body.pushable = false;
		paint6.body.immovable = true;
		paint6.body.setSize(263, 320, false);

		// lowtable_1
		const lowtable_1 = this.physics.add.sprite(4030, -396, "light_wood_table");
		lowtable_1.scaleX = 0.14085492429942487;
		lowtable_1.scaleY = 0.132181487123701;
		lowtable_1.body.pushable = false;
		lowtable_1.body.immovable = true;
		lowtable_1.body.setOffset(0, 20);
		lowtable_1.body.setSize(1606, 681, false);

		// oldtele3
		const oldtele3 = this.physics.add.sprite(2081, -1943, "old_tele");
		oldtele3.scaleX = 0.19907866047484432;
		oldtele3.scaleY = 0.19907866047484432;
		oldtele3.body.checkCollision.down = false;
		oldtele3.body.checkCollision.left = false;
		oldtele3.body.checkCollision.right = false;
		oldtele3.body.pushable = false;
		oldtele3.body.immovable = true;
		oldtele3.body.setOffset(0, 170);
		oldtele3.body.setSize(552, 572, false);

		// lamp3
		const lamp3 = this.add.nineslice(-60, -1321, "lamp_21", undefined, 352, 4309, 1, 1, 116, 326);
		lamp3.scaleX = 0.2175454808078271;
		lamp3.scaleY = 0.24063164984531815;

		// shelf_1
		const shelf_1 = this.physics.add.sprite(1351, -2797, "light_wall_shelf");
		shelf_1.scaleX = 0.0947036164438777;
		shelf_1.scaleY = 0.08;
		shelf_1.body.setSize(1007, 85, false);

		// plant
		const plant = this.physics.add.sprite(1351, -2824, "house_plant_example_06");
		plant.scaleX = 0.1093872541274608;
		plant.scaleY = 0.1093872541274608;
		plant.body.setSize(612, 448, false);

		// shelf_2
		const shelf_2 = this.physics.add.sprite(-1619, -348, "light_wall_shelf");
		shelf_2.scaleX = 0.0947036164438777;
		shelf_2.scaleY = 0.1;
		shelf_2.body.setSize(1007, 85, false);

		// plant_1
		const plant_1 = this.physics.add.sprite(-1619, -375, "house_plant_example_06");
		plant_1.scaleX = 0.1093872541274608;
		plant_1.scaleY = 0.1093872541274608;
		plant_1.body.setSize(612, 448, false);

		// shelf_3
		const shelf_3 = this.physics.add.sprite(3077, -2125, "light_wall_shelf");
		shelf_3.scaleX = 0.0947036164438777;
		shelf_3.scaleY = 0.1;
		shelf_3.body.setSize(1007, 85, false);

		// plant_2
		const plant_2 = this.physics.add.sprite(3077, -2152, "house_plant_example_06");
		plant_2.scaleX = 0.1093872541274608;
		plant_2.scaleY = 0.1093872541274608;
		plant_2.body.setSize(612, 448, false);

		// lamp1
		const lamp1 = this.add.nineslice(-1656, -1381, "lamp_21", undefined, 352, 6583, 1, 1, 116, 326);
		lamp1.scaleX = 0.2175454808078271;
		lamp1.scaleY = 0.2175454808078271;

		// paint8
		const paint8 = this.physics.add.sprite(-726, -788, "painting_06_dark");
		paint8.scaleX = 0.20621216733702666;
		paint8.scaleY = 0.20621216733702666;
		paint8.body.pushable = false;
		paint8.body.immovable = true;
		paint8.body.setSize(263, 320, false);

		// lamp
		const lamp = this.add.nineslice(1174, -1183, "lamp_21", undefined, 352, 5866, 1, 1, 116, 326);
		lamp.scaleX = 0.2175454808078271;
		lamp.scaleY = 0.2175454808078271;

		// lamp9
		const lamp9 = this.add.nineslice(2300, -1202, "lamp_21", undefined, 352, 6156, 1, 1, 116, 326);
		lamp9.scaleX = 0.2175454808078271;
		lamp9.scaleY = 0.2175454808078271;

		// paint9
		const paint9 = this.physics.add.sprite(2002, -1066, "painting_06_dark");
		paint9.scaleX = 0.20621216733702666;
		paint9.scaleY = 0.20621216733702666;
		paint9.body.pushable = false;
		paint9.body.immovable = true;
		paint9.body.setSize(263, 320, false);

		// clock_21
		const clock_21 = this.physics.add.sprite(-1479, -1544, "light_wall_clock");
		clock_21.scaleX = 0.17972350051097075;
		clock_21.scaleY = 0.17972350051097075;
		clock_21.body.setSize(330, 630, false);

		// ghost_2
		const ghost_2 = new Ghost(this, -807, -364);
		this.add.existing(ghost_2);
		ghost_2.scaleX = 0.4438750822888975;
		ghost_2.scaleY = 0.4438750822888975;
		ghost_2.alpha = 0.5;
		ghost_2.body.collideWorldBounds = true;

		// collampup1
		const collampup1 = this.physics.add.sprite(-1656, -695, "painting_07_dark");
		collampup1.scaleX = 0.20621216733702666;
		collampup1.scaleY = 0.20621216733702666;
		collampup1.visible = false;
		collampup1.body.pushable = false;
		collampup1.body.immovable = true;
		collampup1.body.setSize(263, 320, false);

		// collampup2
		const collampup2 = this.physics.add.sprite(-671, -1587, "painting_07_dark");
		collampup2.scaleX = 0.20621216733702666;
		collampup2.scaleY = 0.20621216733702666;
		collampup2.visible = false;
		collampup2.body.pushable = false;
		collampup2.body.immovable = true;
		collampup2.body.setSize(263, 320, false);

		// collampup3
		const collampup3 = this.physics.add.sprite(-60, -831, "painting_07_dark");
		collampup3.scaleX = 0.20621216733702666;
		collampup3.scaleY = 0.20621216733702666;
		collampup3.visible = false;
		collampup3.body.pushable = false;
		collampup3.body.immovable = true;
		collampup3.body.setSize(263, 320, false);

		// collampup4
		const collampup4 = this.physics.add.sprite(1176, -574, "painting_07_dark");
		collampup4.scaleX = 0.20384648690262167;
		collampup4.scaleY = 0.1426887933071463;
		collampup4.visible = false;
		collampup4.body.pushable = false;
		collampup4.body.immovable = true;
		collampup4.body.setSize(263, 320, false);

		// collampup5
		const collampup5 = this.physics.add.sprite(2305, -560, "painting_07_dark");
		collampup5.scaleX = 0.2253566266003108;
		collampup5.scaleY = 0.14620838505178835;
		collampup5.visible = false;
		collampup5.body.pushable = false;
		collampup5.body.immovable = true;
		collampup5.body.setSize(263, 320, false);

		// paint10
		const paint10 = this.physics.add.sprite(2581, -1325, "painting_06_dark");
		paint10.scaleX = 0.20621216733702666;
		paint10.scaleY = 0.20621216733702666;
		paint10.body.pushable = false;
		paint10.body.immovable = true;
		paint10.body.setSize(263, 320, false);

		// lamp_2
		const lamp_2 = this.add.nineslice(1745, -1700, "lamp_21", undefined, 352, 1222, 1, 1, 116, 326);
		lamp_2.scaleX = 0.2175454808078271;
		lamp_2.scaleY = 0.2175454808078271;

		// collampup6
		const collampup6 = this.physics.add.sprite(1747, -1593, "painting_07_dark");
		collampup6.scaleX = 0.2253566266003108;
		collampup6.scaleY = 0.14620838505178835;
		collampup6.visible = false;
		collampup6.body.pushable = false;
		collampup6.body.immovable = true;
		collampup6.body.setSize(263, 320, false);

		// paint_3
		const paint_3 = this.physics.add.sprite(529, -941, "painting_07_dark");
		paint_3.scaleX = 0.20621216733702666;
		paint_3.scaleY = 0.20621216733702666;
		paint_3.visible = false;
		paint_3.body.pushable = false;
		paint_3.body.immovable = true;
		paint_3.body.setSize(263, 320, false);

		// lamp_1
		const lamp_1 = this.add.nineslice(483, -1730, "lamp_21", undefined, 352, 1557, 1, 1, 116, 326);
		lamp_1.scaleX = 0.2175454808078271;
		lamp_1.scaleY = 0.2175454808078271;

		// painting
		const painting = this.physics.add.sprite(-2578, -729, "painting_04_dark");
		painting.scaleX = 0.19527137458689636;
		painting.scaleY = 0.19527137458689636;
		painting.body.setSize(505, 357, false);

		// shelfupp
		const shelfupp = this.physics.add.sprite(-1617, -335, "shelf");
		shelfupp.scaleX = 0.3918188817495938;
		shelfupp.scaleY = 0.3918188817495938;
		shelfupp.body.setSize(309, 127, false);

		// paint_5
		const paint_5 = this.physics.add.sprite(135, -1398, "painting_06_dark");
		paint_5.scaleX = 0.20621216733702666;
		paint_5.scaleY = 0.20621216733702666;
		paint_5.body.pushable = false;
		paint_5.body.immovable = true;
		paint_5.body.setSize(263, 320, false);

		// birdcagie
		const birdcagie = this.physics.add.sprite(938, -1429, "metal_bird_open");
		birdcagie.scaleX = 0.19574411071992207;
		birdcagie.scaleY = 0.19574411071992207;
		birdcagie.body.setSize(413, 500, false);

		// shelfupp_1
		const shelfupp_1 = this.physics.add.sprite(928, -1366, "shelf");
		shelfupp_1.scaleX = 0.3918188817495938;
		shelfupp_1.scaleY = 0.3918188817495938;
		shelfupp_1.body.setSize(309, 127, false);

		// bat_1
		const bat_1 = new Bat(this, 2774, -1635);
		this.add.existing(bat_1);
		bat_1.scaleX = 0.15808932514316845;
		bat_1.scaleY = 0.15808932514316845;
		bat_1.body.velocity.x = -400;
		bat_1.body.velocity.y = 0;
		bat_1.body.collideWorldBounds = true;

		// collampup7
		const collampup7 = this.physics.add.sprite(484, -1587, "painting_07_dark");
		collampup7.scaleX = 0.20621216733702666;
		collampup7.scaleY = 0.20621216733702666;
		collampup7.visible = false;
		collampup7.body.pushable = false;
		collampup7.body.immovable = true;
		collampup7.body.setSize(263, 320, false);

		this.bottom = bottom;
		this.upstairswall_1 = upstairswall_1;
		this.upstairswall = upstairswall;
		this.standlamp3 = standlamp3;
		this.bookcaseup = bookcaseup;
		this.draupstairs3 = draupstairs3;
		this.draupstairs4 = draupstairs4;
		this.bedupstairs = bedupstairs;
		this.framedoor1 = framedoor1;
		this.door1 = door1;
		this.framedoorup1 = framedoorup1;
		this.green = green;
		this.framedoor3 = framedoor3;
		this.door3 = door3;
		this.framedoorup3 = framedoorup3;
		this.wallfirstfloor = wallfirstfloor;
		this.skirtbrown = skirtbrown;
		this.blackseat = blackseat;
		this.framedoorbel1 = framedoorbel1;
		this.opendoor = opendoor;
		this.draupstairs = draupstairs;
		this.largeseat_1 = largeseat_1;
		this.opendoor2 = opendoor2;
		this.standlamp2 = standlamp2;
		this.blackseat2 = blackseat2;
		this.bookcase1 = bookcase1;
		this.bookcase2 = bookcase2;
		this.windowfirst = windowfirst;
		this.ceiling1 = ceiling1;
		this.ceiling3 = ceiling3;
		this.ceiling_1 = ceiling_1;
		this.darkdesk = darkdesk;
		this.whitepainting = whitepainting;
		this.shelf1 = shelf1;
		this.keyghost = keyghost;
		this.screenupstairs = screenupstairs;
		this.paint3 = paint3;
		this.shelf4 = shelf4;
		this.shelf5 = shelf5;
		this.littletable = littletable;
		this.shelf2 = shelf2;
		this.clock = clock;
		this.painting1 = painting1;
		this.shelf3 = shelf3;
		this.shelf = shelf;
		this.shelf6 = shelf6;
		this.bookcase3 = bookcase3;
		this.ghost = ghost;
		this.ghost_1 = ghost_1;
		this.ghost1 = ghost1;
		this.shelfup5 = shelfup5;
		this.spider2 = spider2;
		this.spider4 = spider4;
		this.shelfup7 = shelfup7;
		this.shelfup6 = shelfup6;
		this.bat = bat;
		this.draupstairs2 = draupstairs2;
		this.blue1 = blue1;
		this.shelfup11 = shelfup11;
		this.shelfup10 = shelfup10;
		this.shelfup20 = shelfup20;
		this.birdcage1 = birdcage1;
		this.birdcage2 = birdcage2;
		this.plant1 = plant1;
		this.plant2 = plant2;
		this.rugdog = rugdog;
		this.ceiling = ceiling;
		this.clock6 = clock6;
		this.redstripeabove = redstripeabove;
		this.clock1 = clock1;
		this.lamp5 = lamp5;
		this.lamp7 = lamp7;
		this.lamp8 = lamp8;
		this.largeseat = largeseat;
		this.paint1 = paint1;
		this.ceiling2 = ceiling2;
		this.paint2 = paint2;
		this.salontable = salontable;
		this.birdcage3 = birdcage3;
		this.standlamp1 = standlamp1;
		this.paint4 = paint4;
		this.plant3 = plant3;
		this.chairmove1 = chairmove1;
		this.catPlayer = catPlayer;
		this.oldtele1 = oldtele1;
		this.lampcol1 = lampcol1;
		this.lampcol2 = lampcol2;
		this.lampcol3 = lampcol3;
		this.paint5 = paint5;
		this.blue2 = blue2;
		this.standcol = standcol;
		this.lamp6 = lamp6;
		this.dogInterior1 = dogInterior1;
		this.blockdesk1 = blockdesk1;
		this.blockdesk2 = blockdesk2;
		this.shelf11 = shelf11;
		this.plant5 = plant5;
		this.clock_1 = clock_1;
		this.clock_2 = clock_2;
		this.clock_3 = clock_3;
		this.clock_4 = clock_4;
		this.clock_5 = clock_5;
		this.oldtele2 = oldtele2;
		this.clock_6 = clock_6;
		this.clock_7 = clock_7;
		this.clock_8 = clock_8;
		this.clock_9 = clock_9;
		this.clock_10 = clock_10;
		this.clock_11 = clock_11;
		this.clock_12 = clock_12;
		this.clock_13 = clock_13;
		this.clock_14 = clock_14;
		this.clock_15 = clock_15;
		this.paint = paint;
		this.paint_1 = paint_1;
		this.paint_2 = paint_2;
		this.painting2 = painting2;
		this.paint7 = paint7;
		this.paint_4 = paint_4;
		this.clock_16 = clock_16;
		this.clock_17 = clock_17;
		this.clock_18 = clock_18;
		this.clock_19 = clock_19;
		this.clock_20 = clock_20;
		this.bookcase = bookcase;
		this.bookcase_1 = bookcase_1;
		this.lamp2 = lamp2;
		this.paint6 = paint6;
		this.lowtable_1 = lowtable_1;
		this.oldtele3 = oldtele3;
		this.lamp3 = lamp3;
		this.shelf_1 = shelf_1;
		this.plant = plant;
		this.shelf_2 = shelf_2;
		this.plant_1 = plant_1;
		this.shelf_3 = shelf_3;
		this.plant_2 = plant_2;
		this.lamp1 = lamp1;
		this.paint8 = paint8;
		this.lamp = lamp;
		this.lamp9 = lamp9;
		this.paint9 = paint9;
		this.clock_21 = clock_21;
		this.ghost_2 = ghost_2;
		this.collampup1 = collampup1;
		this.collampup2 = collampup2;
		this.collampup3 = collampup3;
		this.collampup4 = collampup4;
		this.collampup5 = collampup5;
		this.paint10 = paint10;
		this.lamp_2 = lamp_2;
		this.collampup6 = collampup6;
		this.paint_3 = paint_3;
		this.lamp_1 = lamp_1;
		this.painting = painting;
		this.shelfupp = shelfupp;
		this.paint_5 = paint_5;
		this.birdcagie = birdcagie;
		this.shelfupp_1 = shelfupp_1;
		this.bat_1 = bat_1;
		this.collampup7 = collampup7;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	bottom;
	/** @type {Phaser.GameObjects.TileSprite} */
	upstairswall_1;
	/** @type {Phaser.GameObjects.TileSprite} */
	upstairswall;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	standlamp3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bookcaseup;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	draupstairs3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	draupstairs4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bedupstairs;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	framedoor1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	door1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	framedoorup1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	green;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	framedoor3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	door3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	framedoorup3;
	/** @type {Phaser.GameObjects.TileSprite} */
	wallfirstfloor;
	/** @type {Phaser.GameObjects.TileSprite} */
	skirtbrown;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	blackseat;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	framedoorbel1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	opendoor;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	draupstairs;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	largeseat_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	opendoor2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	standlamp2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	blackseat2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bookcase1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bookcase2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	windowfirst;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling1;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling3;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	darkdesk;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	whitepainting;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	keyghost;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	screenupstairs;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	littletable;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bookcase3;
	/** @type {Ghost} */
	ghost;
	/** @type {Ghost} */
	ghost_1;
	/** @type {Ghost} */
	ghost1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup5;
	/** @type {Spider} */
	spider2;
	/** @type {Spider} */
	spider4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup7;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup6;
	/** @type {Bat} */
	bat;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	draupstairs2;
	/** @type {BlueBirdCage} */
	blue1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup11;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup10;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfup20;
	/** @type {birdcage} */
	birdcage1;
	/** @type {birdcage} */
	birdcage2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	rugdog;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	redstripeabove;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock1;
	/** @type {Phaser.GameObjects.NineSlice} */
	lamp5;
	/** @type {Phaser.GameObjects.NineSlice} */
	lamp7;
	/** @type {Phaser.GameObjects.NineSlice} */
	lamp8;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	largeseat;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint1;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	salontable;
	/** @type {birdcage} */
	birdcage3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	standlamp1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	chairmove1;
	/** @type {CatPlayer} */
	catPlayer;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	oldtele1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lampcol1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lampcol2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lampcol3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint5;
	/** @type {BlueBirdCage} */
	blue2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	standcol;
	/** @type {Phaser.GameObjects.NineSlice} */
	lamp6;
	/** @type {DogInterior} */
	dogInterior1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	blockdesk1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	blockdesk2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf11;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock_2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock_3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock_4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock_5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	oldtele2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock_6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock_7;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock_8;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock_9;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock_10;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock_11;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock_12;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock_13;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock_14;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock_15;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint_2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint7;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint_4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock_16;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock_17;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock_18;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock_19;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock_20;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bookcase;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bookcase_1;
	/** @type {Phaser.GameObjects.NineSlice} */
	lamp2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lowtable_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	oldtele3;
	/** @type {Phaser.GameObjects.NineSlice} */
	lamp3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf_2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf_3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant_2;
	/** @type {Phaser.GameObjects.NineSlice} */
	lamp1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint8;
	/** @type {Phaser.GameObjects.NineSlice} */
	lamp;
	/** @type {Phaser.GameObjects.NineSlice} */
	lamp9;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint9;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock_21;
	/** @type {Ghost} */
	ghost_2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	collampup1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	collampup2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	collampup3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	collampup4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	collampup5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint10;
	/** @type {Phaser.GameObjects.NineSlice} */
	lamp_2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	collampup6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint_3;
	/** @type {Phaser.GameObjects.NineSlice} */
	lamp_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfupp;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint_5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	birdcagie;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfupp_1;
	/** @type {Bat} */
	bat_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	collampup7;

	/* START-USER-CODE */

	// Write your code here

	create() {



		this.UpdateGroup=this.add.group();
		this.PaintHangOnGroup=this.add.group();
		this.darkLightGroup=this.add.group();
		this.BDown=false;
		this.JustOnce=true;

		this.DirtGroup=this.add.group();
		this.BirdCatchGroup=this.add.group();

		this.BoingBongBool=true;
this.PanHeight=-100;




	this.input.keyboard.on('keydown-B', () =>{
	console.log('test key down()');
	this.BDown=true;


});


	this.input.keyboard.on('keyup-B', () =>{
	console.log('test key up()');
	this.BDown=false;

});



		this.editorCreate();

	this.oldtele1.AlertOnce=false;

	this.PaintHangOnGroup.add(this.clock_9);
	this.PaintHangOnGroup.add(this.clock_8);
	this.PaintHangOnGroup.add(this.clock_16);
	this.PaintHangOnGroup.add(this.clock_17);
	this.PaintHangOnGroup.add(this.clock_18);

	this.PaintHangOnGroup.add(this.clock_1);
	this.PaintHangOnGroup.add(this.clock_2);
	this.PaintHangOnGroup.add(this.clock_3);
	this.PaintHangOnGroup.add(this.clock_4);
	this.PaintHangOnGroup.add(this.clock_5);
	this.PaintHangOnGroup.add(this.clock_6);
	this.PaintHangOnGroup.add(this.clock_7);
	this.PaintHangOnGroup.add(this.clock_10);
	this.PaintHangOnGroup.add(this.clock_11);
	this.PaintHangOnGroup.add(this.clock_12);
	this.PaintHangOnGroup.add(this.clock_21);

	this.PaintHangOnGroup.add(this.collampup1);
	this.PaintHangOnGroup.add(this.collampup2);
	this.PaintHangOnGroup.add(this.collampup3);
	this.PaintHangOnGroup.add(this.collampup4);
	this.PaintHangOnGroup.add(this.collampup5);
	this.PaintHangOnGroup.add(this.collampup6);
	this.PaintHangOnGroup.add(this.collampup7);

	this.PaintHangOnGroup.add(this.paint10);
	this.PaintHangOnGroup.add(this.clock_14);
	this.PaintHangOnGroup.add(this.clock_15);
	this.PaintHangOnGroup.add(this.paint_3);
	this.PaintHangOnGroup.add(this.paint_5);
	this.PaintHangOnGroup.add(this.paint9);



		this.PaintHangOnGroup.add(this.paint_2);
			this.PaintHangOnGroup.add(this.paint_1);

		//this.bookcase3.OKgoChair=true;	

		this.physics.world.enable(this.ceiling1);
		this.ceiling1.body.setImmovable(true);

		this.physics.world.enable(this.ceiling2);
		this.ceiling2.body.setImmovable(true);

		this.physics.world.enable(this.ceiling3);
		this.ceiling3.body.setImmovable(true);

		this.physics.add.collider(this.catPlayer,this.ceiling1);
		this.physics.add.collider(this.catPlayer,this.ceiling2);
		this.physics.add.collider(this.catPlayer,this.ceiling3);

		this.physics.add.collider(this.blue1,this.draupstairs2);

		this.physics.add.overlap(this.catPlayer,this.paint1,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paint2,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paint4,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paint_4,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paint5,this.StickToObject,null,this);

		this.physics.add.overlap(this.catPlayer,this.paint6,this.StickToObject,null,this);

		this.physics.add.overlap(this.catPlayer,this.paint7,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paint,this.StickToObject,null,this);

		this.physics.add.overlap(this.catPlayer,this.lampcol1,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.lampcol2,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.lampcol3,this.StickToObject,null,this);

		this.physics.add.overlap(this.catPlayer,this.clock1,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.clock6,this.StickToObject,null,this);

		this.physics.add.overlap(this.catPlayer,this.PaintHangOnGroup,this.StickToObject,null,this);

		this.physics.add.collider(this.shelfup20,this.birdcage1);
		this.physics.add.collider(this.shelfup5,this.birdcage2);
		this.physics.add.collider(this.draupstairs,this.birdcage3);


		this.darkLightGroup.add(this.windowfirst);
		this.test();

		this.oldtele1.AlertOnce=false;
		this.oldtele2.AlertOnce=false;

		this.OKgoChair=true;
		this.cameras.main.setZoom(0.71);
		this.cameras.main.startFollow(this.catPlayer,false,0.3,0,0,0);

		this.physics.world.setBounds(-1800, -2000,4700, 2710);
		this.cameras.main.setBounds(-1800,-2000,4700, 2710);
		//this.ColorLight=0x3b3635;
	this.ColorLight=0x322a2a;



    	this.lights.enable().setAmbientColor(this.ColorLight);
	//	this.Light = this.lights.addLight(800,150, 800).setIntensity(2);
		//this.Light1 = this.lights.addLight(-1000,150, 800).setIntensity(2);
		//this.Light = this.lights.addLight(this.lamp8.x,this.lamp8.y, 1200).setIntensity(1);

		//this.Light1 = this.lights.addLight(this.lamp1.x,this.lamp1.y, 1200).setIntensity(1);

		//this.Light2 = this.lights.addLight(this.lamp2.x,this.lamp2.y, 1200).setIntensity(1);

		//this.Light3 = this.lights.addLight(this.lamp3.x,this.lamp3.y, 1200).setIntensity(1);

		var lightwindow  = this.lights.addLight(this.windowfirst.x, this.windowfirst.y, 1000).setIntensity(1);

		lightlamp1  = this.lights.addLight(this.lamp5.x, this.lamp5.y+100, 1000).setIntensity(1);
		lightlamp1.visible=false;

		lightlamp2  = this.lights.addLight(this.lamp6.x, this.lamp6.y+100, 1000).setIntensity(1);
		lightlamp2.visible=false;

		lightlamp3  = this.lights.addLight(this.lampcol3.x, this.lampcol3.y, 1000).setIntensity(1);
		lightlamp3.visible=false;

		lightstandlamp  = this.lights.addLight(this.standlamp1.x, this.standlamp1.y-50, 1000).setIntensity(2);
		lightstandlamp.visible=false;

		lightTV1  = this.lights.addLight(this.oldtele1.x-10, this.oldtele1.y+20, 1000).setIntensity(2);
		lightTV1.visible=false;

		lightTV12  = this.lights.addLight(this.oldtele2.x-10, this.oldtele2.y+20, 1500).setIntensity(2);
		lightTV12.visible=false;

		lightlampup1  = this.lights.addLight(this.collampup1.x, this.collampup1.y, 1000).setIntensity(2);
		lightlampup1.visible=false;

		lightlampup2  = this.lights.addLight(this.collampup2.x, this.collampup2.y, 1000).setIntensity(2);
		lightlampup2.visible=false;

		lightlampup3  = this.lights.addLight(this.collampup3.x, this.collampup3.y, 1000).setIntensity(2);
		lightlampup3.visible=false;

		lightlampup4  = this.lights.addLight(this.collampup4.x, this.collampup4.y, 1000).setIntensity(2);
		lightlampup4.visible=false;

		lightlampup5  = this.lights.addLight(this.collampup5.x, this.collampup5.y, 1000).setIntensity(2);
		lightlampup5.visible=false;

		lightlampup6  = this.lights.addLight(this.collampup6.x, this.collampup6.y, 1000).setIntensity(2);
		lightlampup6.visible=false;

		lightlampup7  = this.lights.addLight(this.collampup7.x, this.collampup7.y, 1000).setIntensity(2);
		lightlampup7.visible=false;


		this.wallfirstfloor.setPipeline('Light2D');
		this.windowfirst.setPipeline('Light2D');
		this.green.setPipeline('Light2D');
		this.catPlayer.setPipeline('Light2D');
		this.upstairswall.setPipeline('Light2D');
		this.bookcase.setPipeline('Light2D');
		this.bookcase1.setPipeline('Light2D');
		this.bookcase2.setPipeline('Light2D');
		this.bookcase3.setPipeline('Light2D');
		this.blackseat.setPipeline('Light2D');
		this.shelf.setPipeline('Light2D');
		this.shelf1.setPipeline('Light2D');
		this.shelf2.setPipeline('Light2D');
		this.shelf3.setPipeline('Light2D');
		this.shelf4.setPipeline('Light2D');
		this.shelf5.setPipeline('Light2D');
		this.shelf6.setPipeline('Light2D');
		this.paint3.setPipeline('Light2D');
		this.darkdesk.setPipeline('Light2D');
		this.oldtele1.setPipeline('Light2D');
		this.oldtele2.setPipeline('Light2D');
		this.oldtele3.setPipeline('Light2D');
		this.bat_1.setPipeline('Light2D');
		this.ghost_2.setPipeline('Light2D');
		this.shelfupp_1.setPipeline('Light2D');
		this.birdcagie.setPipeline('Light2D');
		this.lamp.setPipeline('Light2D');
		this.lamp3.setPipeline('Light2D');
		this.lamp1.setPipeline('Light2D');
		this.lamp_1.setPipeline('Light2D');
		this.lamp2.setPipeline('Light2D');
		this.lamp_2.setPipeline('Light2D');

		this.plant.setPipeline('Light2D');

		this.plant_1.setPipeline('Light2D');
		this.shelf_1.setPipeline('Light2D');
		this.shelf_2.setPipeline('Light2D');

		this.paint_1.setPipeline('Light2D');
		this.paint_2.setPipeline('Light2D');
		this.paint_3.setPipeline('Light2D');
		this.paint_5.setPipeline('Light2D');

		this.paint10.setPipeline('Light2D');
		this.painting.setPipeline('Light2D');

		this.ceiling_1.setPipeline('Light2D');


		this.PaintHangOnGroup.add(this.collampup1);



		this.painting2.setPipeline('Light2D');
		this.blackseat2.setPipeline('Light2D');

		this.draupstairs2.setPipeline('Light2D');
		this.draupstairs3.setPipeline('Light2D');
		this.draupstairs4.setPipeline('Light2D');

		this.bookcaseup.setPipeline('Light2D');

		this.clock_1.setPipeline('Light2D');
		this.clock_2.setPipeline('Light2D');
		this.clock_3.setPipeline('Light2D');
		this.clock_4.setPipeline('Light2D');
		this.clock_5.setPipeline('Light2D');
		this.clock_6.setPipeline('Light2D');
		this.clock_7.setPipeline('Light2D');
		this.clock_8.setPipeline('Light2D');
		this.clock_9.setPipeline('Light2D');
		this.clock_10.setPipeline('Light2D');
		this.clock_11.setPipeline('Light2D');
		this.clock_12.setPipeline('Light2D');
		this.clock_13.setPipeline('Light2D');
		this.clock_14.setPipeline('Light2D');
		this.clock_15.setPipeline('Light2D');
		this.clock_16.setPipeline('Light2D');
		this.clock_17.setPipeline('Light2D');
		this.clock_18.setPipeline('Light2D');
		this.clock_19.setPipeline('Light2D');
		this.clock_20.setPipeline('Light2D');
		this.clock_21.setPipeline('Light2D');

			//this.clock_21.setPipeline('Light2D');



		this.salontable.setPipeline('Light2D');
		this.shelf11.setPipeline('Light2D');
		this.plant5.setPipeline('Light2D');
		this.shelfup5.setPipeline('Light2D');
		this.shelfup6.setPipeline('Light2D');
		this.shelfup7.setPipeline('Light2D');
		this.shelfup10.setPipeline('Light2D');
		this.shelfup11.setPipeline('Light2D');
		this.shelfup20.setPipeline('Light2D');
		this.bat.setPipeline('Light2D');
		this.shelfupp.setPipeline('Light2D');
		this.blue1.cage.setPipeline('Light2D');
		this.blue1.iconbird.setPipeline('Light2D');
		this.blue2.cage.setPipeline('Light2D');
		this.blue2.iconbird.setPipeline('Light2D');
		this.ceiling.setPipeline('Light2D');
		this.ceiling1.setPipeline('Light2D');
		this.ceiling2.setPipeline('Light2D');
		this.clock.setPipeline('Light2D');	
		//this.lowtable.setPipeline('Light2D');	
		this.whitepainting.setPipeline('Light2D');	
		this.bedupstairs.setPipeline('Light2D');	
		this.plant1.setPipeline('Light2D');	
		this.plant2.setPipeline('Light2D');	
		this.door3.setPipeline('Light2D');	
		this.framedoor3.setPipeline('Light2D');	
		this.paint_4.setPipeline('Light2D');
		this.spider4.spider1.setPipeline('Light2D');	
		//this.broom.setPipeline('Light2D');	
		this.littletable.setPipeline('Light2D');
		this.painting1.setPipeline('Light2D');
		this.paint4.setPipeline('Light2D');
		this.paint7.setPipeline('Light2D');
		this.paint9.setPipeline('Light2D');
		this.skirtbrown.setPipeline('Light2D');

		this.ceiling1.setPipeline('Light2D');
		this.ceiling2.setPipeline('Light2D');
		this.ceiling3.setPipeline('Light2D');
		this.screenupstairs.setPipeline('Light2D');
		this.draupstairs.setPipeline('Light2D');
		this.dogInterior1.dog.setPipeline('Light2D');
		this.framedoorbel1.setPipeline('Light2D');
		this.framedoorup1.setPipeline('Light2D');
		this.framedoorup3.setPipeline('Light2D');
		this.rugdog.setPipeline('Light2D');
		this.lamp5.setPipeline('Light2D');
		this.paint2.setPipeline('Light2D');

		this.largeseat.setPipeline('Light2D');
		this.birdcage2.birdcage.setPipeline('Light2D');
		this.birdcage2.birdorange.setPipeline('Light2D');
		//this.doginterior.dog.setPipeline('Light2D');
		this.birdcage3.birdcage.setPipeline('Light2D');
		this.birdcage3.birdorange.setPipeline('Light2D');

		this.paint1.setPipeline('Light2D');
		this.chairmove1.setPipeline('Light2D');
		this.plant3.setPipeline('Light2D');	
		this.paint5.setPipeline('Light2D');	
		this.paint6.setPipeline('Light2D');	
		this.paint8.setPipeline('Light2D');	
		this.standlamp1.setPipeline('Light2D');	
		this.standlamp2.setPipeline('Light2D');	
		this.standlamp3.setPipeline('Light2D');	
		this.lamp9.setPipeline('Light2D');	
		this.draupstairs2.setPipeline('Light2D');	
		this.ghost1.setPipeline('Light2D');	
		this.ghost.setPipeline('Light2D');	
		this.lamp6.setPipeline('Light2D');	
		this.lamp7.setPipeline('Light2D');	
		this.clock1.setPipeline('Light2D');	
		this.clock6.setPipeline('Light2D');	
		this.spider2.spider1.setPipeline('Light2D');	
		this.redstripeabove.setPipeline('Light2D');	
		this.paint.setPipeline('Light2D');	
		this.paint6.setPipeline('Light2D');	


		//door1
		this.testcollider1=this.physics.add.overlap(this.catPlayer,this.opendoor2,this.OpenDoorForBird,null,this);
		this.opendoor2.JustOnce=true;
		this.opendoor2.info=this.testcollider1;	

		//door2
		this.testcollider2=this.physics.add.overlap(this.catPlayer,this.framedoorbel1,this.OpenDoorForBird,null,this);
		this.framedoorbel1.JustOnce=true;
		this.framedoorbel1.info=this.testcollider2;	

		//door3
		this.testcollider3=this.physics.add.overlap(this.catPlayer,this.framedoorup1,this.OpenDoorForBird,null,this);
		this.framedoorup1.JustOnce=true;
		this.framedoorup1.info=this.testcollider3;	

		//door4
		this.testcollider4=this.physics.add.overlap(this.catPlayer,this.framedoorup3,this.OpenDoorForBird,null,this);
		this.framedoorup3.JustOnce=true;
		this.framedoorup3.info=this.testcollider4;	



this.CreatePlatform(this.paint3);

		//this.CreatePlatform(this.oldtele1);
		//this.CreatePlatform(this.draupstairs2);
		this.CreatePlatform(this.shelf);
		this.CreatePlatform(this.shelf1);
		this.CreatePlatform(this.shelf2);
		this.CreatePlatform(this.shelf3);
		this.CreatePlatform(this.shelf4);
		this.CreatePlatform(this.shelf5);
		this.CreatePlatform(this.shelf6);
		//this.CreatePlatform(this.lowtable);
		this.CreatePlatform(this.bedupstairs);
		this.CreatePlatform(this.screenupstairs);
		this.CreatePlatform(this.blackseat);
		this.CreatePlatform(this.shelfup5);
		this.CreatePlatform(this.shelfup6);
		this.CreatePlatform(this.shelfup7);
		this.CreatePlatform(this.shelf_2);
		this.CreatePlatform(this.bookcase);
		this.CreatePlatform(this.bookcaseup);
		this.CreatePlatform(this.blackseat);
		//this.CreatePlatform(this.paint5);
		this.CreatePlatform(this.shelfup10);
		this.CreatePlatform(this.shelfup11);
		this.CreatePlatform(this.shelfup20);
		this.CreatePlatform(this.bookcase1);
		this.CreatePlatform(this.bookcase2);
		this.CreatePlatform(this.bookcase3);
		this.CreatePlatform(this.littletable);
		this.CreatePlatform(this.painting1);
		this.CreatePlatform(this.largeseat);
		this.CreatePlatform(this.standlamp1);
		this.CreatePlatform(this.draupstairs);
		this.CreatePlatform(this.shelf11);
		this.CreatePlatform(this.darkdesk);

		this.MovePainting(this.clock_8,1,4000,"-=400",420);
		this.MovePainting(this.clock_7,0,3000,"-=150",20);
		this.MovePainting(this.clock_9,0,3000,"+=200",120);
		this.MovePainting(this.clock_10,1,4000,"-=200",1120);
		//this.MovePainting(this.clock_14,1,4000,"+=350",520);
		this.MovePainting(this.clock_16,1,4800,"-=200",620);
		this.MovePainting(this.clock_18,1,4800,"-=250",120);
		this.MovePainting(this.clock_5,0,4800,"+=300",420);
		this.MovePainting(this.clock_1,0,4000,"+=300",520);
		this.MovePainting(this.clock_3,1,4000,"+=250",520);
		this.MovePainting(this.clock_21,0,4000,"+=200",1520);

		this.FlickerTV(this.oldtele1,lightTV1);
		this.FlickerTV(this.oldtele2,lightTV12);

		//this.MakeBirdCageReady(this.birdcage1);
		this.MakeBirdCageReady(this.birdcage2);
		this.MakeBirdCageReady(this.birdcage3);

			this.physics.add.overlap(this.catPlayer,this.clock1,this.DingDong,null,this);
			this.physics.add.overlap(this.catPlayer,this.clock6,this.DingDong,null,this);
				this.physics.add.overlap(this.catPlayer,this.clock_9,this.DingDong,null,this);

			this.physics.add.overlap(this.catPlayer,this.lampcol1,this.LightsOn,null,this);
			this.physics.add.overlap(this.catPlayer,this.lampcol2,this.LightsOn,null,this);
			this.physics.add.overlap(this.catPlayer,this.lampcol3,this.LightsOn,null,this);
			this.physics.add.overlap(this.catPlayer,this.standcol,this.LightsOn,null,this);
			this.physics.add.overlap(this.catPlayer,this.collampup1,this.LightsOn,null,this);
			this.physics.add.overlap(this.catPlayer,this.collampup2,this.LightsOn,null,this);
			this.physics.add.overlap(this.catPlayer,this.collampup3,this.LightsOn,null,this);
			this.physics.add.overlap(this.catPlayer,this.collampup4,this.LightsOn,null,this);
			this.physics.add.overlap(this.catPlayer,this.collampup5,this.LightsOn,null,this);
			this.physics.add.overlap(this.catPlayer,this.collampup6,this.LightsOn,null,this);
			this.physics.add.overlap(this.catPlayer,this.collampup7,this.LightsOn,null,this);

			this.physics.add.collider(this.catPlayer,this.oldtele1,this.EverythingMoves,null,this);

			this.physics.add.collider(this.blue2,this.bookcase1);
			this.physics.add.collider(this.catPlayer,this.oldtele2);
			this.physics.add.collider(this.draupstairs2,this.blockdesk2);
			this.physics.add.collider(this.draupstairs2,this.blockdesk1);
			this.physics.add.collider(this.draupstairs2,this.catPlayer);


this.lampcol1.whichlight=lightlamp1;
this.lampcol2.whichlight=lightlamp2;
this.standcol.whichlight=lightstandlamp;
this.lampcol3.whichlight=lightlamp3;
this.oldtele1.whichlight=lightTV1;

this.collampup1.whichlight=lightlampup1;
this.collampup2.whichlight=lightlampup2;
this.collampup3.whichlight=lightlampup3;
this.collampup4.whichlight=lightlampup4;
this.collampup5.whichlight=lightlampup5;
this.collampup6.whichlight=lightlampup6;
this.collampup7.whichlight=lightlampup7;

	}

	EverythingMoves(Cat,TV){

		if(TV.AlertOnce==false){
		this.MovePainting(this.paint5,1,2200,"-=200",400);
		TV.AlertOnce=true;

		TV.whichlight.visible=true;
		this.draupstairs2.body.setVelocityX(70);

								}


	console.log('sitting on TV ' + TV.AlertOnce);

							 };

	DingDong(Cat,Clock){


if(this.BoingBongBool){
console.log('ding dong');
this.BoingBongBool=false;

this.time.addEvent({ delay:1000, callback:() => {
		this.BoingBongBool=true;
			}, callbackScope: this,repeat:0});




if(Clock.Hasbird && !Clock.key){

	this.CreateBirdie(Clock);
	Clock.Hasbird=false;

}else if(Clock.key){
Clock.key=false;


	this.key1 = this.physics.add.sprite(Clock.x+50, Clock.y-50, "key_01").setScale(0.3);
	this.key1.body.setVelocityY(-500);
		this.key1.body.setVelocityX(50);
		this.key1.body.setGravityY(800);
		this.key1.body.setImmovable=true;
			//this.KeyGroup.add(this.key1);
			this.add.existing(this.key1);
		this.physics.add.overlap(this.catPlayer,this.key1,this.TakeKey,null,this);

		this.keyColl=this.physics.add.collider(this.key1,this.bottom);
		this.time.addEvent({ delay:2000, callback:() => {
	this.key1.body.setVelocityX(0);
}, callbackScope: this,repeat:0});
}

	 this.tweenStrain=this.tweens.add({
            targets: Clock,
			y:"+=80",
			 duration:400,
	//scale:{start: 0.1, to: 0.5 },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: 0,
			onComplete:() => {
				if(Clock.hole){
 					Clock.hole.visible=true;
				}

            },

        });

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

	update(){


		this.step=0.005;
		Phaser.Math.RotateAroundDistance(this.clock_14, this.paint_3.x,this.paint_3.y, this.step,315);
		Phaser.Math.RotateAroundDistance(this.clock_15, this.paint_3.x,this.paint_3.y, this.step,315);
		Phaser.Math.RotateAroundDistance(this.clock_12, this.paint_3.x,this.paint_3.y, this.step,315);
		Phaser.Math.RotateAroundDistance(this.clock_11, this.paint_3.x,this.paint_3.y, this.step,315);

if(this.catPlayer.y<-100 ){
//
			if(this.PanHeight>=-900){
			//console.log('pan goes 1');
			this.cameras.main.setBounds(-1800,this.PanHeight-=20,4700,800);
			this.cameras.main.startFollow(this.catPlayer,false,0.2,0.2,0,100);
				//this.physics.world.setBounds(-1800,-2400,5000, 3100);
				//this.cameras.main.setBounds(-1800,-2400,5000, 3100);
			};
		}

		else

		{
		if(this.PanHeight<=-120){

console.log('pan goes 2');
			this.cameras.main.setBounds(-1800,this.PanHeight+=20,4700, 800);
			this.cameras.main.startFollow(this.catPlayer,false,0.2,0,0,0);

			};


		}


		if(this.catPlayer.y<-550){
			console.log('pan goes 3');
	this.cameras.main.setBounds(-1800,-1840,4700,1740);

		}	

//if(this.drawer.ready){
		if(this.draupstairs2.body.blocked.right || this.draupstairs2.body.touching.right ){

			this.draupstairs2.body.setVelocityX(-70);

		} else 

		if(this.draupstairs2.body.blocked.left || this.draupstairs2.body.touching.left){

			this.draupstairs2.body.setVelocityX(70);

		}
//};


			if(this.catPlayer.stick==false)
	{
				this.catPlayer.x=this.WhichObjectHangOn.x;
		}
		if(this.catPlayer.stick==false && this.catPlayer.JumpVerticalPaint==false){
				this.catPlayer.y=this.WhichObjectHangOn.y+30;
		};

		this.keyghost.x=this.ghost.x;
		this.keyghost.y=this.ghost.y;

		this.ghostdistance1=Math.abs(this.ghost.x-this.lamp7.x);
		this.ghostdistance2=Math.abs(this.ghost.x-this.lamp5.x);

		if(Math.abs(this.ghost.x-this.lamp7.x)<800){

		this.ghost.alpha=(this.ghostdistance1/800);

		}

			if(Math.abs(this.ghost.x-this.lamp5.x)<800){
		this.ghost.alpha=(this.ghostdistance2/800);
		}

		if(this.ghost.alpha<0.3){
			this.keyghost.visible=true;
		}else{
		this.keyghost.visible=false;

		}

		//	this.MoveObject(this.brownseat1,-1000,-600,150,0,0,0);
		this.MoveObject(this.shelfup10,1500,1800,150,0,0,0);
		this.MoveObject(this.shelfup11,1500,1800,150,0,0,0);
		this.MoveVertical(this.shelf6,-740,-470,150);
		this.MoveVertical(this.shelfup7,-740,-320,150);
		this.DropDownWhenjumpCatonObject(this.painting1);
		this.DropDownWhenjumpCatonObject(this.paint3);

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
