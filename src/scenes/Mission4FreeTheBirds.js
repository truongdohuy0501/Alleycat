
// You can write more code here

/* START OF COMPILED CODE */

class Mission4FreeTheBirds extends BaseScene {

	constructor() {
		super("Mission4FreeTheBirds");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// text_1
		const text_1 = this.add.text(525, 231, "", {});
		text_1.text = "mission 4 birdies";
		text_1.setStyle({ "fontSize": "50px" });

		// pink_flock
		const pink_flock = this.add.tileSprite(502, -507, 7000, 1377, "pink_flock");
		pink_flock.visible = false;
		pink_flock.tintTopLeft = 4274994;
		pink_flock.tintTopRight = 4209970;
		pink_flock.tintBottomLeft = 14737364;
		pink_flock.tintBottomRight = 14343118;
		pink_flock.tileScaleX = 0.15;
		pink_flock.tileScaleY = 0.15;

		// shelve1
		const shelve1 = this.physics.add.sprite(1572, 1429, "emptyshelllight");
		shelve1.scaleX = 0.21539399382915148;
		shelve1.scaleY = 0.21539399382915148;
		shelve1.body.setSize(678, 486, false);

		// green
		const green = this.physics.add.sprite(503, 698, "blue_plain");
		green.scaleX = 50;
		green.scaleY = -0.07232993989686196;
		green.tintTopLeft = 15263462;
		green.tintTopRight = 3815994;
		green.tintBottomLeft = 5784130;
		green.tintBottomRight = 5851722;
		green.body.setSize(437, 1232, false);

		// red_large_stripe
		const red_large_stripe = this.add.tileSprite(478, -111, 10000, 1382, "blue_large_stripe");
		red_large_stripe.scaleX = 0.6;
		red_large_stripe.scaleY = 1.1;
		red_large_stripe.tintTopLeft = 5454908;
		red_large_stripe.tintTopRight = 3681581;
		red_large_stripe.tintBottomLeft = 7262163;
		red_large_stripe.tintBottomRight = 1207127;
		red_large_stripe.tileScaleX = 0.18;

		// house_plant_example_01
		const house_plant_example_01 = this.add.image(-1419, 1024, "house_plant_example_01");
		house_plant_example_01.scaleX = 0.16658722427984762;
		house_plant_example_01.scaleY = 0.16658722427984762;

		// skirting_light
		const skirting_light = this.add.tileSprite(-146, 647, 35000, 63, "skirting_light");
		skirting_light.scaleX = 0.2528690000816929;
		skirting_light.scaleY = 0.23514376349021976;

		// littletable
		const littletable = this.physics.add.sprite(-1150, 641, "light_table_round");
		littletable.scaleX = 0.5122056698979438;
		littletable.scaleY = 0.5122056698979438;
		littletable.body.setOffset(0, 20);
		littletable.body.setSize(210, 200, false);

		// bottom
		const bottom = this.physics.add.sprite(1293, 692, "block_separator_01");
		bottom.scaleX = 12;
		bottom.scaleY = 0.5823602337408151;
		bottom.visible = false;
		bottom.body.pushable = false;
		bottom.body.immovable = true;
		bottom.body.setSize(695, 40, false);

		// plant3
		const plant3 = this.physics.add.sprite(-986, 60, "house_plant_example_01");
		plant3.scaleX = 0.14196252531690298;
		plant3.scaleY = 0.14196252531690298;
		plant3.body.gravity.y = 1000;
		plant3.body.bounce.y = 0.3;
		plant3.body.checkCollision.up = false;
		plant3.body.setSize(440, 433, false);

		// shelf5
		const shelf5 = this.physics.add.sprite(1900, 37, "light_wall_shelf");
		shelf5.scaleX = 0.09149874324475171;
		shelf5.scaleY = 0.09149874324475171;
		shelf5.body.pushable = false;
		shelf5.body.immovable = true;
		shelf5.body.setSize(1007, 85, false);

		// rug_09
		const rug_09 = this.add.image(308, 678, "rug_11");
		rug_09.scaleX = 0.26389195497089973;
		rug_09.scaleY = 0.09820691853830661;

		// house_plant_example_5
		const house_plant_example_5 = this.add.image(-1891, 1093, "house_plant_example_15");
		house_plant_example_5.scaleX = 0.14209450530402873;
		house_plant_example_5.scaleY = 0.14209450530402873;

		// shelf4
		const shelf4 = this.physics.add.sprite(-1570, -505, "light_wall_shelf");
		shelf4.scaleX = 0.11930583964252375;
		shelf4.scaleY = 0.05864748809739304;
		shelf4.body.setSize(1007, 85, false);

		// plant2
		const plant2 = this.physics.add.sprite(518, -175, "house_plant_example_01");
		plant2.scaleX = 0.12049007647256352;
		plant2.scaleY = 0.12049007647256352;
		plant2.body.gravity.y = 1000;
		plant2.body.bounce.y = 0.3;
		plant2.body.setSize(440, 433, false);

		// shelf3
		const shelf3 = this.physics.add.sprite(-984, 111, "light_wall_shelf");
		shelf3.scaleX = 0.07954454362634734;
		shelf3.scaleY = 0.07954454362634734;
		shelf3.body.pushable = false;
		shelf3.body.immovable = true;
		shelf3.body.setSize(1007, 85, false);

		// painting4
		const painting4 = this.physics.add.sprite(718, -532, "painting_08_light");
		painting4.scaleX = 0.1567875161254624;
		painting4.scaleY = 0.1567875161254624;
		painting4.body.setSize(454, 437, false);

		// paintinggold5
		const paintinggold5 = this.physics.add.sprite(1686, 1064, "painting_04_gold");
		paintinggold5.scaleX = 0.22179104726039622;
		paintinggold5.scaleY = 0.22179104726039622;
		paintinggold5.body.setSize(505, 357, false);

		// shelf2
		const shelf2 = this.physics.add.sprite(2422, 414, "light_wall_shelf");
		shelf2.scaleX = 0.09979007305110958;
		shelf2.scaleY = 0.05665767613812379;
		shelf2.body.pushable = false;
		shelf2.body.immovable = true;
		shelf2.body.setSize(1007, 85, false);

		// paintingwhite
		const paintingwhite = this.physics.add.sprite(314, 75, "painting_07_dark");
		paintingwhite.scaleX = 0.22227711496057528;
		paintingwhite.scaleY = 0.22227711496057528;
		paintingwhite.body.setSize(263, 320, false);

		// littlecaoch
		const littlecaoch = this.physics.add.sprite(1939, 607, "brown_1_seat");
		littlecaoch.scaleX = 0.17367978441096935;
		littlecaoch.scaleY = 0.17367978441096935;
		littlecaoch.body.setSize(1070, 858, false);

		// salontable
		const salontable = this.physics.add.sprite(-1572, 655, "light_table_small");
		salontable.scaleX = 0.19275556646479203;
		salontable.scaleY = 0.19275556646479203;
		salontable.body.setOffset(0, 20);
		salontable.body.setSize(376, 369, false);

		// bookcase1
		const bookcase1 = this.physics.add.sprite(-644, 545, "light_5_shelves");
		bookcase1.scaleX = 0.24196401848416388;
		bookcase1.scaleY = 0.24196401848416388;
		bookcase1.body.setSize(676, 1109, false);

		// shelf1
		const shelf1 = this.physics.add.sprite(1359, 902, "light_wall_shelf");
		shelf1.scaleX = 0.07573796910261889;
		shelf1.scaleY = 0.07573796910261889;
		shelf1.body.setSize(1007, 85, false);

		// shelf7
		const shelf7 = this.physics.add.sprite(239, 392, "light_wall_shelf");
		shelf7.scaleX = 0.09263653366686453;
		shelf7.scaleY = 0.09263653366686453;
		shelf7.body.setSize(1007, 85, false);

		// shelf6
		const shelf6 = this.physics.add.sprite(534, -137, "light_wall_shelf");
		shelf6.scaleX = 0.08818601806250308;
		shelf6.scaleY = 0.08818601806250308;
		shelf6.body.setSize(1007, 85, false);

		// goup10
		const goup10 = this.physics.add.sprite(2553, 1368, "mediaum_curtain_rail_dark");
		goup10.scaleX = 0.12424444062480014;
		goup10.scaleY = 0.20424444062480013;
		goup10.body.setOffset(0, 10);
		goup10.body.setSize(1081, 69, false);

		// goup
		const goup = this.physics.add.sprite(3107, 1333, "mediaum_curtain_rail_dark");
		goup.scaleX = 0.12424444062480014;
		goup.scaleY = 0.20424444062480013;
		goup.body.setOffset(0, 10);
		goup.body.setSize(1081, 69, false);

		// goup1
		const goup1 = this.physics.add.sprite(525, 1086, "mediaum_curtain_rail_dark");
		goup1.scaleX = 0.12424444062480014;
		goup1.scaleY = 0.20424444062480013;
		goup1.body.setOffset(0, 10);
		goup1.body.setSize(1081, 69, false);

		// goup2
		const goup2 = this.physics.add.sprite(537, -138, "mediaum_curtain_rail_dark");
		goup2.scaleX = 0.1;
		goup2.scaleY = 0.20424444062480013;
		goup2.body.setOffset(0, 10);
		goup2.body.setSize(1081, 69, false);

		// goup3
		const goup3 = this.physics.add.sprite(-1420, 1066, "mediaum_curtain_rail_dark");
		goup3.scaleX = 0.12424444062480014;
		goup3.scaleY = 0.20424444062480013;
		goup3.body.setOffset(0, 10);
		goup3.body.setSize(1081, 69, false);

		// goup4
		const goup4 = this.physics.add.sprite(2323, 1282, "mediaum_curtain_rail_dark");
		goup4.scaleX = 0.12424444062480014;
		goup4.scaleY = 0.20424444062480013;
		goup4.body.setOffset(0, 10);
		goup4.body.setSize(1081, 69, false);

		// goup5
		const goup5 = this.physics.add.sprite(2795, 270, "mediaum_curtain_rail_dark");
		goup5.scaleX = 0.09735148925208056;
		goup5.scaleY = 0.09735148925208056;
		goup5.body.setOffset(0, 10);
		goup5.body.setSize(1081, 69, false);

		// goup7
		const goup7 = this.physics.add.sprite(1683, -455, "mediaum_curtain_rail_dark");
		goup7.scaleX = 0.12424444062480014;
		goup7.scaleY = 0.20424444062480013;
		goup7.visible = false;
		goup7.body.setOffset(0, 10);
		goup7.body.setSize(1081, 69, false);

		// Bookcase3
		const bookcase3 = this.physics.add.sprite(2004, 1384, "light_5_shelves");
		bookcase3.scaleX = 0.2577026689470534;
		bookcase3.scaleY = 0.2577026689470534;
		bookcase3.body.setSize(676, 1109, false);

		// Bookcase4
		const bookcase4 = this.physics.add.sprite(2791, 1384, "light_5_shelves");
		bookcase4.scaleX = 0.2577026689470534;
		bookcase4.scaleY = 0.2577026689470534;
		bookcase4.body.setSize(676, 1109, false);

		// catPlayer
		const catPlayer = new CatPlayer(this, -1572, 465);
		this.add.existing(catPlayer);
		catPlayer.scaleX = 0.1566678798725213;
		catPlayer.scaleY = 0.1566678798725213;
		catPlayer.body.collideWorldBounds = true;

		// shelffinal
		const shelffinal = this.physics.add.sprite(1522, 165, "light_wall_shelf");
		shelffinal.scaleX = 0.08818601806250308;
		shelffinal.scaleY = 0.08818601806250308;
		shelffinal.body.setSize(1007, 85, false);

		// clock1
		const clock1 = this.physics.add.sprite(-1162, -559, "light_wall_clock");
		clock1.scaleX = 0.2086946027688439;
		clock1.scaleY = 0.2086946027688439;
		clock1.body.setOffset(0, 200);
		clock1.body.setSize(330, 350, false);

		// clock2
		const clock2 = this.physics.add.sprite(132, -167, "light_wall_clock");
		clock2.scaleX = 0.20869460276884355;
		clock2.scaleY = 0.20869460276884355;
		clock2.body.setOffset(0, 200);
		clock2.body.setSize(330, 350, false);

		// shelf
		const shelf = this.add.nineslice(-985, 118, "shelf", undefined, 381, 107, 101, 94, 10, 7);
		shelf.scaleX = 0.2861149436926175;
		shelf.scaleY = 0.2861149436926175;

		// clock
		const clock = this.physics.add.sprite(-630, -663, "light_wall_clock");
		clock.scaleX = 0.2086946027688439;
		clock.scaleY = 0.2086946027688439;
		clock.body.setOffset(0, 200);
		clock.body.setSize(330, 350, false);

		// skirting_light_2
		const skirting_light_2 = this.add.tileSprite(-1040, -108, 383, 65, "skirting_light");
		skirting_light_2.scaleX = 3;
		skirting_light_2.scaleY = 0.1;
		skirting_light_2.visible = false;

		// ceiling1
		const ceiling1 = this.add.tileSprite(-1004, 1064, 383, 65, "skirting_light");
		ceiling1.scaleY = 0.2;

		// plantkey
		const plantkey = this.physics.add.sprite(2416, 352, "house_plant_example_01");
		plantkey.scaleX = 0.12049007647256352;
		plantkey.scaleY = 0.12049007647256352;
		plantkey.body.maxVelocity.x = 1000;
		plantkey.body.maxVelocity.y = 1000;
		plantkey.body.gravity.y = 1000;
		plantkey.body.bounce.y = 0.3;
		plantkey.body.checkCollision.up = false;
		plantkey.body.setSize(440, 433, false);

		// ceiling2
		const ceiling2 = this.add.tileSprite(1004, 1064, 383, 65, "skirting_light");
		ceiling2.scaleY = 0.2;

		// ceiling4
		const ceiling4 = this.add.tileSprite(-62, 1064, 383, 65, "skirting_light");
		ceiling4.scaleY = 0.2;

		// ceiling3
		const ceiling3 = this.add.tileSprite(1934, 1064, 383, 65, "skirting_light");
		ceiling3.scaleY = 0.2;

		// clock3
		const clock3 = this.physics.add.sprite(-89, -481, "light_wall_clock");
		clock3.scaleX = 0.2086946027688439;
		clock3.scaleY = 0.2086946027688439;
		clock3.body.setOffset(0, 200);
		clock3.body.setSize(330, 350, false);

		// clock4
		const clock4 = this.physics.add.sprite(-1572, 38, "light_wall_clock");
		clock4.scaleX = 0.20869460276884355;
		clock4.scaleY = 0.20869460276884355;
		clock4.body.setOffset(0, 200);
		clock4.body.setSize(330, 350, false);

		// painting2
		const painting2 = this.physics.add.sprite(-1274, 320, "painting_07_dark");
		painting2.scaleX = 0.18143224150780302;
		painting2.scaleY = 0.18143224150780302;
		painting2.body.setSize(263, 320, false);

		// blueBirdCage1
		const blueBirdCage1 = new BlueBirdCage(this, 1468, -713);
		this.add.existing(blueBirdCage1);
		blueBirdCage1.scaleX = 1.091491788729808;
		blueBirdCage1.scaleY = 1.091491788729808;

		// bluebirdcage2
		const bluebirdcage2 = new BlueBirdCage(this, -1788, -751);
		this.add.existing(bluebirdcage2);
		bluebirdcage2.scaleX = 1.1337464937321373;
		bluebirdcage2.scaleY = 1.1337464937321373;

		// clock5
		const clock5 = this.physics.add.sprite(771, 97, "light_wall_clock");
		clock5.scaleX = 0.20869460276884355;
		clock5.scaleY = 0.20869460276884355;
		clock5.tintTopLeft = 15987700;
		clock5.body.setOffset(0, 200);
		clock5.body.setSize(330, 350, false);

		// painting1
		const painting1 = this.physics.add.sprite(-1414, -253, "painting_06_gold");
		painting1.scaleX = 0.2261369252253308;
		painting1.scaleY = 0.2261369252253308;
		painting1.body.setSize(263, 320, false);

		// clock6
		const clock6 = this.physics.add.sprite(1286, 404, "light_wall_clock");
		clock6.scaleX = 0.2086946027688439;
		clock6.scaleY = 0.2086946027688439;
		clock6.body.setOffset(0, 200);
		clock6.body.setSize(330, 350, false);

		// clock7
		const clock7 = this.physics.add.sprite(2714, -342, "light_wall_clock");
		clock7.scaleX = 0.21665071353160437;
		clock7.scaleY = 0.21665071353160437;
		clock7.body.setOffset(0, 200);
		clock7.body.setSize(330, 350, false);

		// clock8
		const clock8 = this.physics.add.sprite(394, -482, "light_wall_clock");
		clock8.scaleX = 0.2086946027688439;
		clock8.scaleY = 0.2086946027688439;
		clock8.body.setOffset(0, 200);
		clock8.body.setSize(330, 350, false);

		// clock10
		const clock10 = this.physics.add.sprite(1185, 31, "light_wall_clock");
		clock10.scaleX = 0.20444418167443612;
		clock10.scaleY = 0.20444418167443612;
		clock10.body.setOffset(0, 200);
		clock10.body.setSize(330, 350, false);

		// clock11
		const clock11 = this.physics.add.sprite(1022, -663, "light_wall_clock");
		clock11.scaleX = 0.20444418167443612;
		clock11.scaleY = 0.20444418167443612;
		clock11.body.setOffset(0, 200);
		clock11.body.setSize(330, 350, false);

		// clock12
		const clock12 = this.physics.add.sprite(-1144, -145, "light_wall_clock");
		clock12.scaleX = 0.20444418167443612;
		clock12.scaleY = 0.20444418167443612;
		clock12.body.setOffset(0, 200);
		clock12.body.setSize(330, 350, false);

		// clock13
		const clock13 = this.physics.add.sprite(1372, -400, "light_wall_clock");
		clock13.scaleX = 0.20444418167443612;
		clock13.scaleY = 0.20444418167443612;
		clock13.body.setOffset(0, 200);
		clock13.body.setSize(330, 350, false);

		// clock14
		const clock14 = this.physics.add.sprite(1931, -668, "light_wall_clock");
		clock14.scaleX = 0.20444418167443612;
		clock14.scaleY = 0.20444418167443612;
		clock14.body.setOffset(0, 200);
		clock14.body.setSize(330, 350, false);

		// clock15
		const clock15 = this.physics.add.sprite(2538, -674, "light_wall_clock");
		clock15.scaleX = 0.20444418167443612;
		clock15.scaleY = 0.20444418167443612;
		clock15.body.setOffset(0, 200);
		clock15.body.setSize(330, 350, false);

		// clock16
		const clock16 = this.physics.add.sprite(-237, 43, "light_wall_clock");
		clock16.scaleX = 0.20869460276884355;
		clock16.scaleY = 0.20869460276884355;
		clock16.tintBottomLeft = 16382457;
		clock16.tintBottomRight = 6510166;
		clock16.body.setOffset(0, 200);
		clock16.body.setSize(330, 350, false);

		// shelf_1
		const shelf_1 = this.add.nineslice(1355, 908, "shelf", undefined, 381, 107, 101, 94, 10, 7);
		shelf_1.scaleX = 0.2759241109336987;
		shelf_1.scaleY = 0.2759241109336987;

		// shelf_2
		const shelf_2 = this.add.nineslice(-1563, -496, "shelf", undefined, 480, 105, 101, 94, 10, 7);
		shelf_2.scaleX = 0.31040796036892015;
		shelf_2.scaleY = 0.31040796036892015;

		// shelf_3
		const shelf_3 = this.add.nineslice(2796, 279, "shelf", undefined, 381, 107, 101, 94, 10, 7);
		shelf_3.scaleX = 0.3181183115275927;
		shelf_3.scaleY = 0.3181183115275927;

		// shelf_4
		const shelf_4 = this.add.nineslice(1901, 45, "shelf", undefined, 381, 107, 101, 94, 10, 7);
		shelf_4.scaleX = 0.3181183115275927;
		shelf_4.scaleY = 0.3181183115275927;

		// shelf_5
		const shelf_5 = this.add.nineslice(2423, 423, "shelf", undefined, 381, 107, 101, 94, 10, 7);
		shelf_5.scaleX = 0.3111627028822542;
		shelf_5.scaleY = 0.3111627028822542;

		// shelf_6
		const shelf_6 = this.add.nineslice(238, 399, "shelf", undefined, 381, 107, 101, 94, 10, 7);
		shelf_6.scaleX = 0.32116436450983543;
		shelf_6.scaleY = 0.32116436450983543;

		// shelf_7
		const shelf_7 = this.add.nineslice(536, -130, "shelf", undefined, 381, 107, 101, 94, 10, 7);
		shelf_7.scaleX = 0.309249598779942;
		shelf_7.scaleY = 0.309249598779942;

		// shelf_8
		const shelf_8 = this.add.nineslice(1523, 172, "shelf", undefined, 381, 107, 101, 94, 10, 7);
		shelf_8.scaleX = 0.309249598779942;
		shelf_8.scaleY = 0.309249598779942;

		// clock17
		const clock17 = this.physics.add.sprite(508, 322, "light_wall_clock");
		clock17.scaleX = 0.20869460276884344;
		clock17.scaleY = 0.20869460276884344;
		clock17.body.setOffset(0, 200);
		clock17.body.setSize(330, 350, false);

		// clock18
		const clock18 = this.physics.add.sprite(1588, -135, "light_wall_clock");
		clock18.scaleX = 0.20444418167443612;
		clock18.scaleY = 0.20444418167443612;
		clock18.body.setOffset(0, 200);
		clock18.body.setSize(330, 350, false);

		// clock19
		const clock19 = this.physics.add.sprite(2077, 247, "light_wall_clock");
		clock19.scaleX = 0.20444418167443612;
		clock19.scaleY = 0.20444418167443612;
		clock19.body.setOffset(0, 200);
		clock19.body.setSize(330, 350, false);

		// clock9
		const clock9 = this.physics.add.sprite(2332, -87, "light_wall_clock");
		clock9.scaleX = 0.20444418167443612;
		clock9.scaleY = 0.20444418167443612;
		clock9.body.setOffset(0, 200);
		clock9.body.setSize(330, 350, false);

		// paintingwhite2
		const paintingwhite2 = this.physics.add.sprite(-390, -310, "painting_05_gold");
		paintingwhite2.scaleX = 0.21959599686171039;
		paintingwhite2.scaleY = 0.21959599686171039;
		paintingwhite2.body.setSize(263, 320, false);

		// bat2
		const bat2 = new Bat(this, -1050, -385);
		this.add.existing(bat2);
		bat2.scaleX = 0.1312641503772855;
		bat2.scaleY = 0.1312641503772855;
		bat2.body.velocity.x = -600;
		bat2.body.velocity.y = 0;
		bat2.body.collideWorldBounds = true;
		bat2.body.onWorldBounds = true;

		// bat1
		const bat1 = new Bat(this, 868, -711);
		this.add.existing(bat1);
		bat1.scaleX = 0.1312641503772855;
		bat1.scaleY = 0.1312641503772855;
		bat1.body.velocity.x = -600;
		bat1.body.velocity.y = 0;
		bat1.body.collideWorldBounds = true;
		bat1.body.onWorldBounds = true;

		// lighttable
		const lighttable = this.physics.add.sprite(820, 643, "light_wood_table");
		lighttable.scaleX = 0.1364898296166744;
		lighttable.scaleY = 0.1364898296166744;
		lighttable.body.setSize(1606, 681, false);

		// green_2
		const green_2 = this.physics.add.sprite(459, -895, "blue_plain");
		green_2.scaleX = 50;
		green_2.scaleY = -0.071465198245941;
		green_2.flipY = true;
		green_2.tintTopLeft = 11974069;
		green_2.tintTopRight = 10656924;
		green_2.tintBottomLeft = 4078395;
		green_2.tintBottomRight = 3158064;
		green_2.body.setSize(437, 1232, false);

		// paintingwhite3
		const paintingwhite3 = this.physics.add.sprite(959, -263, "painting_05_white");
		paintingwhite3.scaleX = 0.2195959968617116;
		paintingwhite3.scaleY = 0.2195959968617116;
		paintingwhite3.body.setSize(263, 320, false);

		// ceiling_1
		const ceiling_1 = this.add.tileSprite(269, -848, 25000, 78, "skirting_light");
		ceiling_1.scaleX = 0.20762568400836606;
		ceiling_1.scaleY = 0.11478112607423735;
		ceiling_1.tintTopLeft = 3883098;
		ceiling_1.tintTopRight = 2567232;
		ceiling_1.tintBottomLeft = 3291463;
		ceiling_1.tintBottomRight = 3162194;

		// clockhole4
		const clockhole4 = this.add.ellipse(-1573, 19, 128, 128);
		clockhole4.scaleX = 0.3098952339273414;
		clockhole4.scaleY = 0.3098952339273414;
		clockhole4.visible = false;
		clockhole4.isFilled = true;
		clockhole4.fillColor = 1117967;

		// lamp2
		const lamp2 = this.physics.add.sprite(-369, -821, "lamp_21");
		lamp2.scaleX = 0.23716272720297044;
		lamp2.scaleY = 0.23716272720297044;
		lamp2.body.setOffset(0, 50);
		lamp2.body.setSize(321, 529, false);

		// ellipse
		const ellipse = this.add.ellipse(-1349, -878, 128, 128);
		ellipse.scaleX = 0.3916825343304212;
		ellipse.scaleY = 0.07463723645206587;
		ellipse.alpha = 0.4;
		ellipse.isFilled = true;
		ellipse.fillColor = 657673;

		// ellipse_6
		const ellipse_6 = this.add.ellipse(-368, -879, 128, 128);
		ellipse_6.scaleX = 0.3916825343304212;
		ellipse_6.scaleY = 0.07463723645206587;
		ellipse_6.alpha = 0.4;
		ellipse_6.isFilled = true;
		ellipse_6.fillColor = 657673;

		// lamp1
		const lamp1 = this.physics.add.sprite(-1350, -820, "lamp_21");
		lamp1.scaleX = 0.23716272720297044;
		lamp1.scaleY = 0.23716272720297044;
		lamp1.body.setOffset(0, 50);
		lamp1.body.setSize(321, 529, false);

		// lamp3
		const lamp3 = this.physics.add.sprite(494, -820, "lamp_21");
		lamp3.scaleX = 0.23716272720297044;
		lamp3.scaleY = 0.23716272720297044;
		lamp3.body.setOffset(0, 50);
		lamp3.body.setSize(321, 529, false);

		// ellipse_1
		const ellipse_1 = this.add.ellipse(495, -878, 128, 128);
		ellipse_1.scaleX = 0.3916825343304212;
		ellipse_1.scaleY = 0.07463723645206587;
		ellipse_1.alpha = 0.4;
		ellipse_1.isFilled = true;
		ellipse_1.fillColor = 657673;

		// lamp4
		const lamp4 = this.physics.add.sprite(1369, -815, "lamp_21");
		lamp4.scaleX = 0.23716272720297044;
		lamp4.scaleY = 0.23716272720297044;
		lamp4.body.setSize(321, 529, false);

		// ellipse_2
		const ellipse_2 = this.add.ellipse(1370, -873, 128, 128);
		ellipse_2.scaleX = 0.3916825343304212;
		ellipse_2.scaleY = 0.07463723645206587;
		ellipse_2.alpha = 0.4;
		ellipse_2.isFilled = true;
		ellipse_2.fillColor = 657673;

		// lamp5
		const lamp5 = this.physics.add.sprite(2197, -815, "lamp_21");
		lamp5.scaleX = 0.23716272720297044;
		lamp5.scaleY = 0.23716272720297044;
		lamp5.body.setSize(321, 529, false);

		// ellipse_3
		const ellipse_3 = this.add.ellipse(2198, -873, 128, 128);
		ellipse_3.scaleX = 0.3916825343304212;
		ellipse_3.scaleY = 0.07463723645206587;
		ellipse_3.alpha = 0.4;
		ellipse_3.isFilled = true;
		ellipse_3.fillColor = 657673;

		// paintingwhite4
		const paintingwhite4 = this.physics.add.sprite(182, -665, "painting_07_dark");
		paintingwhite4.scaleX = 0.21959599686171039;
		paintingwhite4.scaleY = 0.21959599686171039;
		paintingwhite4.body.setSize(263, 320, false);

		// shelf_9
		const shelf_9 = this.add.nineslice(1682, -445, "shelf", undefined, 520, 121, 101, 94, 10, 7);
		shelf_9.scaleX = 0.271430999840612;
		shelf_9.scaleY = 0.31438533580159667;

		// paintingwhite5
		const paintingwhite5 = this.physics.add.sprite(-1027, -1378, "painting_05_light");
		paintingwhite5.scaleX = 0.1770699000116208;
		paintingwhite5.scaleY = 0.1770699000116208;
		paintingwhite5.body.setSize(263, 320, false);

		// clock20
		const clock20 = this.physics.add.sprite(-706, -162, "light_wall_clock");
		clock20.scaleX = 0.20869460276884355;
		clock20.scaleY = 0.20869460276884355;
		clock20.body.setOffset(0, 200);
		clock20.body.setSize(330, 350, false);

		// paintingwhite6
		const paintingwhite6 = this.physics.add.sprite(-2721, -364, "painting_07_dark");
		paintingwhite6.scaleX = 0.21959599686171039;
		paintingwhite6.scaleY = 0.21959599686171039;
		paintingwhite6.body.setSize(263, 320, false);

		// paintingwhite7
		const paintingwhite7 = this.physics.add.sprite(-515, 182, "painting_06_gold");
		paintingwhite7.scaleX = 0.21959599686171116;
		paintingwhite7.scaleY = 0.21959599686171116;
		paintingwhite7.body.setSize(263, 320, false);

		// clock21
		const clock21 = this.physics.add.sprite(2154, -354, "light_wall_clock");
		clock21.scaleX = 0.20444418167443612;
		clock21.scaleY = 0.20444418167443612;
		clock21.body.setOffset(0, 200);
		clock21.body.setSize(330, 350, false);

		// plant1
		const plant1 = this.physics.add.sprite(1895, -1, "house_plant_example_01");
		plant1.scaleX = 0.12049007647256352;
		plant1.scaleY = 0.12049007647256352;
		plant1.body.gravity.y = 1000;
		plant1.body.bounce.y = 0.3;
		plant1.body.setSize(440, 433, false);

		// paintingwhite8
		const paintingwhite8 = this.physics.add.sprite(1026, 310, "painting_06_light");
		paintingwhite8.scaleX = 0.17706990001162026;
		paintingwhite8.scaleY = 0.17706990001162026;
		paintingwhite8.body.setSize(263, 320, false);

		// paintingwhite9
		const paintingwhite9 = this.physics.add.sprite(2651, -18, "painting_06_light");
		paintingwhite9.scaleX = 0.2195959968617105;
		paintingwhite9.scaleY = 0.2195959968617105;
		paintingwhite9.body.setSize(263, 320, false);

		// paintingwhite10
		const paintingwhite10 = this.physics.add.sprite(2459, 183, "painting_05_dark");
		paintingwhite10.scaleX = 0.21959599686171036;
		paintingwhite10.scaleY = 0.21959599686171036;
		paintingwhite10.body.setSize(263, 320, false);

		// enemyBird1
		const enemyBird1 = new EnemyBird(this, 1818, 121);
		this.add.existing(enemyBird1);

		// clockhole3
		const clockhole3 = this.add.ellipse(-89, -497, 128, 128);
		clockhole3.scaleX = 0.3127243574377552;
		clockhole3.scaleY = 0.3127243574377552;
		clockhole3.visible = false;
		clockhole3.isFilled = true;
		clockhole3.fillColor = 1117967;

		// clockhole11
		const clockhole11 = this.add.ellipse(1021, -680, 128, 128);
		clockhole11.scaleX = 0.29476624597972445;
		clockhole11.scaleY = 0.29476624597972445;
		clockhole11.visible = false;
		clockhole11.isFilled = true;
		clockhole11.fillColor = 1117967;

		// clockhole9
		const clockhole9 = this.add.ellipse(2332, -103, 128, 128);
		clockhole9.scaleX = 0.3050362179414031;
		clockhole9.scaleY = 0.3050362179414031;
		clockhole9.visible = false;
		clockhole9.isFilled = true;
		clockhole9.fillColor = 1117967;

		// clockhole5
		const clockhole5 = this.add.ellipse(770, 81, 128, 128);
		clockhole5.scaleX = 0.3048198796245058;
		clockhole5.scaleY = 0.3048198796245058;
		clockhole5.visible = false;
		clockhole5.isFilled = true;
		clockhole5.fillColor = 1117967;

		// fallpainting1
		const fallpainting1 = new fallpainting(this, -969, 356);
		this.add.existing(fallpainting1);

		// dogInterior1
		const dogInterior1 = new DogInterior(this, 301, 563);
		this.add.existing(dogInterior1);
		dogInterior1.scaleX = 0.8053790025184748;
		dogInterior1.scaleY = 0.8053790025184748;

		// shelf10
		const shelf10 = this.add.nineslice(-936, -359, "shelf", undefined, 381, 107, 101, 94, 10, 7);
		shelf10.scaleX = 0.32116436450983543;
		shelf10.scaleY = 0.32116436450983543;

		// fallpainting2
		const fallpainting2 = new fallpainting(this, -179, 391);
		this.add.existing(fallpainting2);

		// fallpainting3
		const fallpainting3 = new fallpainting(this, 1671, 345);
		this.add.existing(fallpainting3);

		// broom
		const broom = new Broom(this, 2652, 540);
		this.add.existing(broom);

		// indoorwindow1
		const indoorwindow1 = new IndoorWindow(this, -1567.3628727523198, 259.9965235620188);
		this.add.existing(indoorwindow1);
		indoorwindow1.scaleX = 0.8221541225951747;
		indoorwindow1.scaleY = 0.8221541225951747;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(490, -163, 128, 128);
		rectangle_1.blendMode = Phaser.BlendModes.ADD;
		rectangle_1.scaleX = 48.97305516795519;
		rectangle_1.scaleY = 13.722773067637291;
		rectangle_1.visible = false;
		rectangle_1.alpha = 0.3;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 4081269;

		this.shelve1 = shelve1;
		this.green = green;
		this.red_large_stripe = red_large_stripe;
		this.littletable = littletable;
		this.bottom = bottom;
		this.plant3 = plant3;
		this.shelf5 = shelf5;
		this.shelf4 = shelf4;
		this.plant2 = plant2;
		this.shelf3 = shelf3;
		this.painting4 = painting4;
		this.paintinggold5 = paintinggold5;
		this.shelf2 = shelf2;
		this.paintingwhite = paintingwhite;
		this.littlecaoch = littlecaoch;
		this.salontable = salontable;
		this.bookcase1 = bookcase1;
		this.shelf1 = shelf1;
		this.shelf7 = shelf7;
		this.shelf6 = shelf6;
		this.goup10 = goup10;
		this.goup = goup;
		this.goup1 = goup1;
		this.goup2 = goup2;
		this.goup3 = goup3;
		this.goup4 = goup4;
		this.goup5 = goup5;
		this.goup7 = goup7;
		this.bookcase3 = bookcase3;
		this.bookcase4 = bookcase4;
		this.catPlayer = catPlayer;
		this.shelffinal = shelffinal;
		this.clock1 = clock1;
		this.clock2 = clock2;
		this.clock = clock;
		this.ceiling1 = ceiling1;
		this.plantkey = plantkey;
		this.ceiling2 = ceiling2;
		this.ceiling4 = ceiling4;
		this.ceiling3 = ceiling3;
		this.clock3 = clock3;
		this.clock4 = clock4;
		this.painting2 = painting2;
		this.blueBirdCage1 = blueBirdCage1;
		this.bluebirdcage2 = bluebirdcage2;
		this.clock5 = clock5;
		this.painting1 = painting1;
		this.clock6 = clock6;
		this.clock7 = clock7;
		this.clock8 = clock8;
		this.clock10 = clock10;
		this.clock11 = clock11;
		this.clock12 = clock12;
		this.clock13 = clock13;
		this.clock14 = clock14;
		this.clock15 = clock15;
		this.clock16 = clock16;
		this.clock17 = clock17;
		this.clock18 = clock18;
		this.clock19 = clock19;
		this.clock9 = clock9;
		this.paintingwhite2 = paintingwhite2;
		this.bat2 = bat2;
		this.bat1 = bat1;
		this.lighttable = lighttable;
		this.green_2 = green_2;
		this.paintingwhite3 = paintingwhite3;
		this.ceiling_1 = ceiling_1;
		this.clockhole4 = clockhole4;
		this.lamp2 = lamp2;
		this.lamp1 = lamp1;
		this.lamp3 = lamp3;
		this.lamp4 = lamp4;
		this.lamp5 = lamp5;
		this.paintingwhite4 = paintingwhite4;
		this.paintingwhite5 = paintingwhite5;
		this.clock20 = clock20;
		this.paintingwhite6 = paintingwhite6;
		this.paintingwhite7 = paintingwhite7;
		this.clock21 = clock21;
		this.plant1 = plant1;
		this.paintingwhite8 = paintingwhite8;
		this.paintingwhite9 = paintingwhite9;
		this.paintingwhite10 = paintingwhite10;
		this.enemyBird1 = enemyBird1;
		this.clockhole3 = clockhole3;
		this.clockhole11 = clockhole11;
		this.clockhole9 = clockhole9;
		this.clockhole5 = clockhole5;
		this.fallpainting1 = fallpainting1;
		this.dogInterior1 = dogInterior1;
		this.shelf10 = shelf10;
		this.fallpainting2 = fallpainting2;
		this.fallpainting3 = fallpainting3;
		this.broom = broom;
		this.indoorwindow1 = indoorwindow1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelve1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	green;
	/** @type {Phaser.GameObjects.TileSprite} */
	red_large_stripe;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	littletable;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bottom;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintinggold5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingwhite;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	littlecaoch;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	salontable;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bookcase1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf7;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	goup10;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	goup;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	goup1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	goup2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	goup3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	goup4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	goup5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	goup7;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bookcase3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bookcase4;
	/** @type {CatPlayer} */
	catPlayer;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelffinal;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plantkey;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling2;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling4;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting2;
	/** @type {BlueBirdCage} */
	blueBirdCage1;
	/** @type {BlueBirdCage} */
	bluebirdcage2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock7;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock8;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock10;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock11;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock12;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock13;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock14;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock15;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock16;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock17;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock18;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock19;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock9;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingwhite2;
	/** @type {Bat} */
	bat2;
	/** @type {Bat} */
	bat1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lighttable;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	green_2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingwhite3;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling_1;
	/** @type {Phaser.GameObjects.Ellipse} */
	clockhole4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lamp2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lamp1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lamp3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lamp4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lamp5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingwhite4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingwhite5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock20;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingwhite6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingwhite7;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clock21;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingwhite8;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingwhite9;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintingwhite10;
	/** @type {EnemyBird} */
	enemyBird1;
	/** @type {Phaser.GameObjects.Ellipse} */
	clockhole3;
	/** @type {Phaser.GameObjects.Ellipse} */
	clockhole11;
	/** @type {Phaser.GameObjects.Ellipse} */
	clockhole9;
	/** @type {Phaser.GameObjects.Ellipse} */
	clockhole5;
	/** @type {fallpainting} */
	fallpainting1;
	/** @type {DogInterior} */
	dogInterior1;
	/** @type {Phaser.GameObjects.NineSlice} */
	shelf10;
	/** @type {fallpainting} */
	fallpainting2;
	/** @type {fallpainting} */
	fallpainting3;
	/** @type {Broom} */
	broom;
	/** @type {IndoorWindow} */
	indoorwindow1;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.UpdateGroup=this.add.group();
		this.ClocksGroup=this.add.group();
		this.BirdCatchGroup=this.add.group();
		this.HoleClockGroup=this.add.group();
		this.PaintingGroup=this.add.group();
		this.EggGroup=this.add.group();
		this.DirtGroup=this.add.group();
		this.KeyGroup=this.add.group();
		this.EnemyGroup=this.add.group();

	birdicon=true;

	this.keytheme=this.sound.add('takekey');
		this.goaltheme=this.sound.add('missiongoal');
			this.leveltheme=this.sound.add('maintheme');
			this.leveltheme.play();



		this.editorCreate();

		this.test();
		this.BDown=false;
		this.JustOnce=true;


//10
		MissionCount=1;

		this.EnemyGroup.add(this.bat1);
		this.EnemyGroup.add(this.bat2);
		//this.EnemyGroup.add(this.bat3);
		this.EnemyGroup.add(this.dogInterior1.dog);

		this.HoleClockGroup.add(this.clockhole4);

		this.BoingBongBool=true;

		this.plantkey.item="key";

			this.time.addEvent({ delay:1000, callback:() => {

			this.ShootEgg();


					}, callbackScope: this,repeat:-1 });

		this.addCollidersBroom();

		this.ClocksGroup.add(this.clock);
		this.ClocksGroup.add(this.clock1);
		this.ClocksGroup.add(this.clock2);
		this.ClocksGroup.add(this.clock3);
		this.ClocksGroup.add(this.clock4);
		this.ClocksGroup.add(this.clock5);
		this.ClocksGroup.add(this.clock6);
		this.ClocksGroup.add(this.clock7);
		this.ClocksGroup.add(this.clock8);
		this.ClocksGroup.add(this.clock9);
		this.ClocksGroup.add(this.clock10);
		this.ClocksGroup.add(this.clock11);
		this.ClocksGroup.add(this.clock12);
		this.ClocksGroup.add(this.clock13);
		this.ClocksGroup.add(this.clock14);
		this.ClocksGroup.add(this.clock15);
		this.ClocksGroup.add(this.clock16);
		this.ClocksGroup.add(this.clock17);
		this.ClocksGroup.add(this.clock18);
		this.ClocksGroup.add(this.clock19);
		this.ClocksGroup.add(this.clock20);
		this.ClocksGroup.add(this.clock21);

		this.PaintingGroup.add(this.lamp1);
		this.PaintingGroup.add(this.lamp2);
		this.PaintingGroup.add(this.lamp3);
		this.PaintingGroup.add(this.lamp4);
		this.PaintingGroup.add(this.lamp5);

		this.PaintingGroup.add(this.painting1);
		this.PaintingGroup.add(this.painting2);
		this.PaintingGroup.add(this.painting4);

		this.PaintingGroup.add(this.paintingwhite);
		this.PaintingGroup.add(this.paintingwhite2);
		this.PaintingGroup.add(this.paintingwhite3);
		this.PaintingGroup.add(this.paintingwhite4);
		this.PaintingGroup.add(this.paintingwhite5);
		this.PaintingGroup.add(this.paintingwhite6);
		this.PaintingGroup.add(this.paintingwhite7);
		this.PaintingGroup.add(this.paintingwhite8);
		this.PaintingGroup.add(this.paintingwhite9);
		this.PaintingGroup.add(this.paintingwhite10);

		this.cameras.main.setZoom(0.72);

		this.CreatePlatform(this.shelf1);
		this.CreatePlatform(this.shelf2);
		this.CreatePlatform(this.shelf3);
		this.CreatePlatform(this.shelf4);
		this.CreatePlatform(this.shelf5);
		this.CreatePlatform(this.shelf6);
		this.CreatePlatform(this.shelf7);
			this.CreatePlatform(this.shelf10);

		//this.CreatePlatform(this.paintingwhite);
		this.CreatePlatform(this.littletable);
		this.CreatePlatform(this.bookcase1);
		//this.CreatePlatform(this.bookcase2);
		this.CreatePlatform(this.bookcase3);
		this.CreatePlatform(this.bookcase4);
		this.CreatePlatform(this.littlecaoch);

		this.CreatePlatform(this.shelve1);
		this.CreatePlatform(this.lighttable);
	//	this.CreatePlatform(this.bigcoach);
	//	this.CreatePlatform(this.tvscreen);
		//this.CreatePlatform(this.lighttable);

		this.CreatePlatform(this.goup);

		this.CreatePlatform(this.goup1);
		this.CreatePlatform(this.goup2);
		this.CreatePlatform(this.goup3);
		this.CreatePlatform(this.goup4);
		this.CreatePlatform(this.goup5);

		this.CreatePlatform(this.goup7);
		this.CreatePlatform(this.goup10);

		this.CreatePlatform(this.shelffinal);

		this.CreatePlatform(this.paintinggold5);
		this.CreatePlatform(this.salontable);

		this.CreatePlatform(this.ceiling2);
		this.CreatePlatform(this.ceiling1);

		this.CreatePlatform(this.ceiling3);
		this.CreatePlatform(this.ceiling4);

		this.clock4.Hasbird=true;
		this.clock3.Hasbird=true;
		this.clock11.Hasbird=true;

		this.clock9.Hasbird=true;
		this.clock5.Hasbird=true;

		this.clock6.key=true;

		this.clock4.hole=this.clockhole4;
		this.clock5.hole=this.clockhole5;
		this.clock3.hole=this.clockhole3;
		this.clock9.hole=this.clockhole9;
		this.clock11.hole=this.clockhole11;

		this.fallpainting2.painting.setTexture('painting_03_dark');

		//this.addCollidersBroom();
	//	this.AddingRatsStuff();
	//	this.rat1.direction=true;
	//	this.rat1.setVelocityX(200);

		this.physics.world.setBounds(-1800, -1200,4700, 1910);
		this.cameras.main.setBounds(-1800,-900,4700, 1610);

				//this.physics.world.setBounds(-1800,-800,5000, 1500);
		//this.cameras.main.setBounds(-1800,-800,5000, 1500);

			this.physics.add.collider(this.catPlayer,this.bottom);


		this.input.keyboard.on('keydown-B', () =>{

	console.log('test key up()');
	this.BDown=true;

});

		this.input.keyboard.on('keyup-B', () =>{

	console.log('test key up()');
	this.BDown=false;

});



			this.physics.add.collider(this.catPlayer,this.ceiling);
			this.physics.add.collider(this.catPlayer,this.ceiling2);
			this.physics.add.collider(this.catPlayer,this.ceiling3);

	this.physics.add.collider(this.blueBirdCage1,this.bottom);
	this.physics.add.collider(this.bluebirdcage2,this.bottom);

		this.physics.add.collider(this.	plant3,this.shelf3);
	this.physics.add.collider(this.catPlayer,this.plant3,this.push,null,this);
	this.physics.add.collider(this.plant3,this.bottom,this.DropAndLeaveMark,null,this);

	this.physics.add.collider(this.	plant2,this.goup10);
	this.physics.add.collider(this.catPlayer,this.plant2,this.push,null,this);
	this.physics.add.collider(this.plant2,this.bottom,this.DropAndLeaveMark,null,this);

	this.physics.add.collider(this.	plant1,this.shelf5);
	this.physics.add.collider(this.catPlayer,this.plant1,this.push,null,this);
	this.physics.add.collider(this.plant1,this.bottom,this.DropAndLeaveMark,null,this);

			this.physics.add.collider(this.plantkey,this.shelf2);
			this.physics.add.collider(this.catPlayer,this.plantkey,this.push,null,this);
			this.physics.add.collider(this.plantkey,this.bottom,this.DropAndLeaveMark,null,this);

				this.physics.add.collider(this.plant2,this.shelf6);
			this.physics.add.collider(this.catPlayer,this.plant2,this.push,null,this);
			this.physics.add.collider(this.plant2,this.bottom,this.DropAndLeaveMark,null,this);

						this.physics.add.overlap(this.catPlayer,this.KeyGroup,this.TakeKey,null,this);


			this.physics.add.overlap(this.catPlayer,this.PaintingGroup,this.StickToObject,null,this);
			this.physics.add.overlap(this.catPlayer,this.ClocksGroup,this.StickToObject,null,this);
			this.physics.add.overlap(this.catPlayer,this.ClocksGroup,this.DingDong,null,this);


		this.physics.add.collider(this.fallpainting1.block,this.catPlayer,this.MakeObjectImmovabke,null,this);
		this.physics.add.collider(this.fallpainting1,this.bottom,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.fallpainting2.block,this.catPlayer,this.MakeObjectImmovabke,null,this);
		this.physics.add.collider(this.fallpainting2,this.bottom,this.DropAndLeaveMark,null,this);

	this.physics.add.collider(this.fallpainting3.block,this.catPlayer,this.MakeObjectImmovabke,null,this);
	this.physics.add.collider(this.fallpainting3,this.bottom,this.DropAndLeaveMark,null,this);

	this.physics.add.collider(this.blueBirdCage1,this.goup7);
	this.physics.add.collider(this.bluebirdcage2,this.shelf4);
	this.physics.add.collider(this.catPlayer,this.bluebirdcage2,this.pushblue,null,this);
	this.physics.add.collider(this.catPlayer,this.blueBirdCage1,this.pushblue,null,this);
	this.physics.add.overlap(this.broom,this.DirtGroup,this.StopBroom,null,this);
			this.physics.add.overlap(this.catPlayer,this.BirdCatchGroup,this.EatBird,null,this);

				this.physics.add.overlap(this.catPlayer,this.EnemyGroup,this.GetHit,null,this);
						this.physics.add.overlap(this.catPlayer,this.EggGroup,this.GetHit,null,this);
							this.physics.add.overlap(this.catPlayer,this.indoorwindow1.waythrough,this.JumpOut,null,this);

		this.cameras.main.startFollow(this.catPlayer,false,0.2,0.2,0,0);

			this.cameras.main.setZoom(0.72);

			MissionCount=1;

	}

	ShootEgg(){
		if(this.enemyBird1.upclose){
			console.log('shoot egg');
					this.egg = this.physics.add.sprite(this.enemyBird1.x, this.enemyBird1.y+28, "egg grey").setScale(0.07);
					this.egg.body.setGravityY(1000);
					this.EggGroup.add(this.egg);
		};
};

		TakeKey(Cat,Key){
console.log('take key!!!!!!');
if(Key.visible){

this.KeyGroup.add(Key);
console.log('put key in group');
console.log('length group'+this.KeyGroup.getLength());
Key.visible=false;

this.keytheme.play();

}

	};


		pushblue(cat, plant){

	if((this.KeyGroup.getLength()>0) && plant.OpenOnce){
	plant.cage.setTexture('metal_bird_open');
	this.Birdie=new BlackBird(this, plant.x+210, plant.y+120).setScale(0.1);
	plant.OpenOnce=false;
	plant.iconbird.destroy();
	this.KeyGroup.remove(this.KeyGroup.getLast(true), true);
	console.log('legth group after push'+this.KeyGroup.getLength());


this.add.existing(this.Birdie);

	}

if(cat.body.touching.right){
	cat.body.x-=7;
	plant.body.setVelocityX(20);
}else if(cat.body.touching.left){
cat.body.x+=7;
	plant.body.setVelocityX(-20);
}


		this.time.addEvent({ delay:400, callback:() => {
		if(plant.active){
			plant.body.setVelocityX(0);
}

}, callbackScope: this,repeat:0 });


	}

	EatBird(Cat,Bird){

	if(Bird){

	Bird.destroy();
	MissionCount--;
	this.mousecatchtheme.play();


		if(MissionCount==0){
		ShowCompletetext=true;
			this.goaltheme.play();
			LevelBird4Clear=true;
		//	this.catPlayer.body.enable=false;
			//this.GoBackToLevel();

	this.time.addEvent({ delay:2000, callback:() => {
	this.cameras.main.fadeOut(1000);

	this.time.addEvent({ delay:1000, callback:() => {
	this.game.sound.stopAll();
	this.scene.start('Level');	

				}, callbackScope: this,repeat:0});
						}, callbackScope: this,repeat:0});
			}					
		}
	}


	CreateBirdie(Clock){


	this.Birdie= new BlackBird(this, Clock.x, Clock.y).setScale(0.1);
	this.add.existing(this.Birdie);



	};
	ShitOnCat(){

		if(Math.abs(this.enemyBird1.x-this.catPlayer.x)<200)	
		{
			this.enemyBird1.upclose=true;
		}else{
			this.enemyBird1.upclose=false;
		}
	};


DingDong(Cat,Clock){


//if(Cord.rope.BoingBoing){


if(this.BoingBongBool){

this.BoingBongBool=false;

if(Clock.Hasbird && !Clock.key){

	this.CreateBirdie(Clock);
	Clock.Hasbird=false;

}else if(Clock.key){
Clock.key=false;
	console.log('keeeeeeeeeeeeeeeeyy');

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
            targets: [Clock,Clock.hole],
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

//
//}

};


	update(){

this.ShitOnCat();

		this.colliderdingdong=this.physics.overlap(this.catPlayer,this.ClocksGroup);
		//this.colliderdingdong2=this.physics.overlap(this.catPlayer,this.goldcord2);


		if(this.colliderdingdong==false){
		this.BoingBongBool=true;
		}

			if(this.catPlayer.stick==false)
	{
				this.catPlayer.x=this.WhichObjectHangOn.x;
		}
		if(this.catPlayer.stick==false && this.catPlayer.JumpVerticalPaint==false){
				this.catPlayer.y=this.WhichObjectHangOn.y+30;
		};

	this.EggGroup.children.iterate(function(child){

if(child){
	if(child.y>700){
	child.destroy();
console.log('destroy egg');
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
