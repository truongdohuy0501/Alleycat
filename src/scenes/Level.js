//var StartPosX=150;
//StartPosX=2083;
var StartPosY=373;
var StartPosX=8150;
//150 first building

var OverlayLaunchOne=true;
//building1
var LevelMouse1Clear=false;
var LevelFish1Clear=false;
var LevelRat1Clear=false;
var LevelBird1Clear=false;
var LevelSpider1Clear=false;
//building2
var LevelMouse2Clear=false;
var LevelFish2Clear=false;
var LevelRat2Clear=false;
var LevelBird2Clear=false;
var LevelSpider2Clear=false;

//building3
var LevelMouse3Clear=false;
var LevelFish3Clear=false;
var LevelRat3Clear=false;
var LevelBird3Clear=false;
var LevelSpider3Clear=false;

//building4
var LevelMouse4Clear=false;
var LevelFish4Clear=false;
var LevelRat4Clear=false;
var LevelBird4Clear=false;
var LevelSpider4Clear=false;

var StageClear;
// You can write more code here

/* START OF COMPILED CODE */

class Level extends BaseScene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */

		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// sky
		const sky = this.add.tileSprite(3944, -1412, 8000, 983, "sky");
		sky.scaleX = 1.7678584776486805;
		sky.scaleY = 5.190614000243224;
		sky.tintTopLeft = 11916278;
		sky.tintTopRight = 10277870;
		sky.tintBottomLeft = 11394533;
		sky.tintBottomRight = 12511720;
		sky.tileScaleX = 1.1;

		// backcity
		const backcity = this.add.tileSprite(2999, 47, 5000, 722, "far_buildings_layer");
		backcity.scaleX = 2.0142628888019276;
		backcity.scaleY = 2.0142628888019276;
		backcity.tintTopLeft = 10803171;
		backcity.tintTopRight = 10149084;

		// cloud3
		const cloud3 = this.physics.add.sprite(3676, -1516, "cloud_02");
		cloud3.scaleX = 1.321491092920317;
		cloud3.scaleY = 1.321491092920317;
		cloud3.alpha = 0.8;
		cloud3.alphaTopLeft = 0.8;
		cloud3.alphaTopRight = 0.8;
		cloud3.alphaBottomLeft = 0.1;
		cloud3.alphaBottomRight = 0.1;
		cloud3.body.velocity.x = 30;
		cloud3.body.setSize(481, 383, false);

		// cloudsmall
		const cloudsmall = this.physics.add.image(1943, -1261, "cloud_05");
		cloudsmall.alpha = 0.9;
		cloudsmall.alphaTopLeft = 0.9;
		cloudsmall.alphaTopRight = 0.9;
		cloudsmall.alphaBottomLeft = 0.1;
		cloudsmall.alphaBottomRight = 0.1;
		cloudsmall.body.velocity.x = 25;
		cloudsmall.body.setSize(372, 98, false);

		// cloud4
		const cloud4 = this.physics.add.sprite(5421, -1974, "cloud_03");
		cloud4.alphaTopLeft = 0.8;
		cloud4.alphaTopRight = 0.8;
		cloud4.alphaBottomLeft = 0.1;
		cloud4.alphaBottomRight = 0.1;
		cloud4.body.velocity.x = 37;
		cloud4.body.setSize(600, 308, false);

		// cloud5
		const cloud5 = this.physics.add.sprite(-417, -1026, "cloud_02");
		cloud5.scaleX = 1.321491092920317;
		cloud5.scaleY = 1.321491092920317;
		cloud5.alpha = 0.8;
		cloud5.alphaTopLeft = 0.8;
		cloud5.alphaTopRight = 0.8;
		cloud5.alphaBottomLeft = 0.1;
		cloud5.alphaBottomRight = 0.1;
		cloud5.body.velocity.x = 38;
		cloud5.body.setSize(481, 383, false);

		// cloudsmall2
		const cloudsmall2 = this.physics.add.image(7163, -2493, "cloud_05");
		cloudsmall2.alpha = 0.9;
		cloudsmall2.alphaTopLeft = 0.9;
		cloudsmall2.alphaTopRight = 0.9;
		cloudsmall2.alphaBottomLeft = 0.1;
		cloudsmall2.alphaBottomRight = 0.1;
		cloudsmall2.body.velocity.x = 25;
		cloudsmall2.body.setSize(372, 98, false);

		// cloudbig3
		const cloudbig3 = this.physics.add.sprite(870, -1665, "cloud_01");
		cloudbig3.alphaTopLeft = 0.8;
		cloudbig3.alphaTopRight = 0.8;
		cloudbig3.alphaBottomLeft = 0.1;
		cloudbig3.alphaBottomRight = 0.1;
		cloudbig3.body.velocity.x = 38;
		cloudbig3.body.setSize(886, 264, false);

		// cloudbig
		const cloudbig = this.physics.add.image(1683, -2252, "cloud_04");
		cloudbig.scaleX = 1.3333139781884875;
		cloudbig.scaleY = 1.3333139781884875;
		cloudbig.alpha = 0.9;
		cloudbig.alphaTopLeft = 0.9;
		cloudbig.alphaTopRight = 0.9;
		cloudbig.alphaBottomLeft = 0.1;
		cloudbig.alphaBottomRight = 0.1;
		cloudbig.body.velocity.x = 42;
		cloudbig.body.setSize(452, 219, false);

		// fire_escape_steps_up_side_2
		const fire_escape_steps_up_side_2 = this.add.image(6900, -883, "fire_escape_steps_up_side_1");
		fire_escape_steps_up_side_2.scaleX = 0.5716332192788011;
		fire_escape_steps_up_side_2.scaleY = 0.5716332192788011;
		fire_escape_steps_up_side_2.flipX = true;

		// brown_block_6
		const brown_block_6 = this.physics.add.sprite(2245, -733, "brown_block");
		brown_block_6.scaleX = 0.3702241448740421;
		brown_block_6.scaleY = 0.8031575088710714;
		brown_block_6.tintTopLeft = 14077132;
		brown_block_6.tintTopRight = 13285817;
		brown_block_6.tintBottomLeft = 13020589;
		brown_block_6.tintBottomRight = 13615039;
		brown_block_6.body.setSize(665, 344, false);

		// Cityfor
		const cityfor = this.add.tileSprite(3130, 202, 12000, 840, "near_buildings_layer");
		cityfor.scaleX = 1.1535038324086966;
		cityfor.scaleY = 1.1535038324086966;

		// redsocks
		const redsocks = this.physics.add.sprite(3345, -452, "washing_04");
		redsocks.scaleX = 0.626395200377292;
		redsocks.scaleY = 0.626395200377292;
		redsocks.body.setSize(60, 100, false);

		// washingl1
		const washingl1 = this.physics.add.sprite(5113, 318, "washing_07");
		washingl1.scaleX = 0.8328197354869031;
		washingl1.scaleY = 0.8328197354869031;
		washingl1.angle = 9;
		washingl1.body.setSize(59, 68, false);

		// washingl7
		const washingl7 = this.physics.add.sprite(5530, 321, "washing_06");
		washingl7.scaleX = 0.6468325780301887;
		washingl7.scaleY = 0.6468325780301887;
		washingl7.body.setSize(68, 106, false);

		// purple_block_4
		const purple_block_4 = this.add.image(5924, -1291, "purple_block");
		purple_block_4.scaleX = 0.7248803174164451;
		purple_block_4.scaleY = 0.9346683522370929;

		// washcordbend
		const washcordbend = this.add.rectangle(7350, -62, 69, 128);
		washcordbend.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		washcordbend.scaleX = 15;
		washcordbend.scaleY = 0.012276733793308809;
		washcordbend.isFilled = true;
		washcordbend.fillColor = 1442049;

		// washing6
		const washing6 = this.physics.add.sprite(1820, -230, "washing_06");
		washing6.scaleX = 0.5950098051115054;
		washing6.scaleY = 0.5950098051115054;
		washing6.body.setOffset(0, 30);
		washing6.body.setSize(68, 80, false);

		// brown_block_14
		const brown_block_14 = this.physics.add.sprite(4402, -1136, "yellow_block");
		brown_block_14.scaleX = 0.3702241448740421;
		brown_block_14.scaleY = 0.8031575088710714;
		brown_block_14.tintTopLeft = 14077132;
		brown_block_14.tintTopRight = 13285817;
		brown_block_14.tintBottomLeft = 13020589;
		brown_block_14.tintBottomRight = 13615039;
		brown_block_14.body.setSize(665, 344, false);

		// yellowshirt
		const yellowshirt = this.physics.add.sprite(3233, 240, "washing_06");
		yellowshirt.scaleX = 0.6468325780301887;
		yellowshirt.scaleY = 0.6468325780301887;
		yellowshirt.body.setSize(68, 106, false);

		// clothunderpants
		const clothunderpants = this.physics.add.sprite(3005, -449, "washing_02");
		clothunderpants.scaleX = 0.6501472038009779;
		clothunderpants.scaleY = 0.6501472038009779;
		clothunderpants.body.setSize(88, 76, false);

		// clothsec
		const clothsec = this.physics.add.sprite(2890, 235, "washing_07");
		clothsec.scaleX = 0.8328197354869031;
		clothsec.scaleY = 0.8328197354869031;
		clothsec.angle = 9;
		clothsec.body.setSize(59, 68, false);

		// brown_block_7
		const brown_block_7 = this.physics.add.sprite(2245, -615, "brown_block");
		brown_block_7.scaleX = 0.3702241448740421;
		brown_block_7.scaleY = 0.8031575088710714;
		brown_block_7.tintTopLeft = 14077132;
		brown_block_7.tintTopRight = 13285817;
		brown_block_7.tintBottomLeft = 13020589;
		brown_block_7.tintBottomRight = 13615039;
		brown_block_7.body.setSize(665, 344, false);

		// autumn_tree_01
		const autumn_tree_01 = this.add.image(3102, 436, "autumn_tree_01");
		autumn_tree_01.scaleX = 0.2967733299469609;
		autumn_tree_01.scaleY = 0.2967733299469609;

		// greenpants
		const greenpants = this.physics.add.sprite(1490, -231, "washing_07");
		greenpants.scaleX = 0.8829947434045329;
		greenpants.scaleY = 0.8829947434045329;
		greenpants.angle = 5;
		greenpants.body.setOffset(0, 30);
		greenpants.body.setSize(59, 80, false);

		// whitecloth
		const whitecloth = this.physics.add.sprite(1300, 162, "washing_01");
		whitecloth.scaleX = 0.6755035877161384;
		whitecloth.scaleY = 0.6755035877161384;
		whitecloth.body.setOffset(0, 30);
		whitecloth.body.setSize(73, 80, false);

		// chimney
		const chimney = this.add.image(1089, -468, "chimney");
		chimney.scaleX = 0.9335480540358387;
		chimney.scaleY = 0.9335480540358387;

		// washcordbendlast5
		const washcordbendlast5 = this.add.rectangle(5148, 298, 69, 128);
		washcordbendlast5.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		washcordbendlast5.scaleX = 14;
		washcordbendlast5.scaleY = 0.012276733793308809;
		washcordbendlast5.isFilled = true;
		washcordbendlast5.fillColor = 1442049;

		// washcordb6
		const washcordb6 = this.add.rectangle(3202, 214, 65, 150);
		washcordb6.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		washcordb6.scaleX = 9;
		washcordb6.scaleY = 0.01;
		washcordb6.isFilled = true;
		washcordb6.fillColor = 1442049;

		// brown_block_13
		const brown_block_13 = this.add.nineslice(2348, -286, "blue_block", undefined, 2415, 0, 545, 594, 0, 0);
		brown_block_13.scaleX = 0.4508922656320875;
		brown_block_13.scaleY = 0.6170706040734204;
		brown_block_13.tint = 12832223;

		// blue_side_srone_left_4
		const blue_side_srone_left_4 = this.add.tileSprite(6139, -1261, 100, 800, "blue_side_srone_left");
		blue_side_srone_left_4.scaleX = 0.6434618337976579;
		blue_side_srone_left_4.scaleY = 0.5;
		blue_side_srone_left_4.flipX = true;
		blue_side_srone_left_4.tileScaleY = 0.9;

		// blue_side_srone_left_5
		const blue_side_srone_left_5 = this.add.tileSprite(5706, -1254, 100, 800, "blue_side_srone_left");
		blue_side_srone_left_5.scaleX = 0.6434618337976579;
		blue_side_srone_left_5.scaleY = 0.5;
		blue_side_srone_left_5.tileScaleY = 0.9;

		// washcord3
		const washcord3 = this.add.rectangle(1502, -254, 55, 128);
		washcord3.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		washcord3.scaleX = 11;
		washcord3.scaleY = 0.01;
		washcord3.isFilled = true;
		washcord3.fillColor = 1442049;

		// autumn_tree
		const autumn_tree = this.add.image(1726, 436, "autumn_tree_01");
		autumn_tree.scaleX = 0.33708870628589815;
		autumn_tree.scaleY = 0.33708870628589815;

		// bluepants
		const bluepants = this.physics.add.sprite(1603, 171, "washing_05");
		bluepants.scaleX = 0.6915617482806937;
		bluepants.scaleY = 0.6915617482806937;
		bluepants.body.setOffset(0, 30);
		bluepants.body.setSize(64, 80, false);

		// brown_block_10
		const brown_block_10 = this.add.nineslice(2352, 317, "blue_block", undefined, 2415, 0, 545, 594, 0, 0);
		brown_block_10.blendMode = Phaser.BlendModes.COPY;
		brown_block_10.scaleX = 0.4508922656320875;
		brown_block_10.scaleY = 0.6497790878072315;
		brown_block_10.tint = 12832223;

		// green_tree_2
		const green_tree_2 = this.add.image(4432, 416, "green_tree_01");
		green_tree_2.scaleX = 0.38197692390044247;
		green_tree_2.scaleY = 0.38197692390044247;

		// green_tree
		const green_tree = this.add.image(1276, 442, "green_tree_01");
		green_tree.scaleX = 0.38197692390044247;
		green_tree.scaleY = 0.38197692390044247;

		// green_tree_01
		const green_tree_01 = this.add.image(125, 451, "green_tree_01");
		green_tree_01.scaleX = 0.4017364511406707;
		green_tree_01.scaleY = 0.4017364511406707;

		// topblokb2
		const topblokb2 = this.add.nineslice(2357, -497, "blue_block", undefined, 2415, 0, 545, 594, 0, 0);
		topblokb2.scaleX = 0.4508922656320875;
		topblokb2.scaleY = 0.6323546943082627;
		topblokb2.tint = 12832223;

		// brown_block_2
		const brown_block_2 = this.add.nineslice(719, -324, "brown_block", undefined, 2201, 0, 576, 585, 0, 0);
		brown_block_2.scaleX = 0.45252828721617;
		brown_block_2.scaleY = 0.6256458272845141;

		// washcord7
		const washcord7 = this.add.rectangle(3198, -469, 70, 128);
		washcord7.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		washcord7.scaleX = 8.3;
		washcord7.scaleY = 0.01;
		washcord7.isFilled = true;
		washcord7.fillColor = 1442049;

		// green_tree_1
		const green_tree_1 = this.add.image(2080, 598, "green_tree_01");
		green_tree_1.scaleX = 0.38197692390044247;
		green_tree_1.scaleY = 0.38197692390044247;

		// road_1
		const road_1 = this.add.tileSprite(1952, 689, 9500, 649, "road");
		road_1.scaleX = 1.148547694379572;
		road_1.scaleY = 0.10511863502966043;

		// fence1
		const fence1 = this.add.tileSprite(4007, 558, 9000, 188, "dark_wood_fence");
		fence1.setInteractive(new Phaser.Geom.Rectangle(0, 100, 1200, 188), Phaser.Geom.Rectangle.Contains);
		fence1.scaleX = 1.25;
		fence1.tintTopLeft = 13810876;
		fence1.tintTopRight = 15786208;
		fence1.tintBottomLeft = 11837600;
		fence1.tintBottomRight = 13163739;
		fence1.tileScaleX = 0.5;

		// brown_block_8
		const brown_block_8 = this.add.nineslice(2350, 523, "blue_block", undefined, 2435, 0, 545, 594, 0, 0);
		brown_block_8.scaleX = 0.4508922656320875;
		brown_block_8.scaleY = 0.5945075822897468;
		brown_block_8.visible = false;

		// brown_block_9
		const brown_block_9 = this.add.nineslice(2360, 509, "blue_block", undefined, 2415, 0, 545, 594, 0, 0);
		brown_block_9.scaleX = 0.4508922656320875;
		brown_block_9.scaleY = 0.6485301022732397;
		brown_block_9.tint = 12832223;

		// brown_block_12
		const brown_block_12 = this.add.nineslice(2353, -78, "blue_block", undefined, 2415, 0, 545, 594, 0, 0);
		brown_block_12.scaleX = 0.4508922656320875;
		brown_block_12.scaleY = 0.5945075822897468;
		brown_block_12.tint = 12832223;

		// purple_block_2
		const purple_block_2 = this.add.nineslice(6243, -845, "purple_block", undefined, 1258, 600, 501, 199, 0, 7);

		// brown_block_11
		const brown_block_11 = this.add.nineslice(2353, 120, "blue_block", undefined, 2415, 0, 545, 594, 0, 0);
		brown_block_11.scaleX = -0.4584940846379918;
		brown_block_11.scaleY = -0.5672313587720204;
		brown_block_11.tint = 12832223;

		// greybuildingright2
		const greybuildingright2 = this.add.tileSprite(2879, 121, 100, 2100, "grey_side_srone_left");
		greybuildingright2.scaleX = 0.6044296120188143;
		greybuildingright2.scaleY = 0.7;
		greybuildingright2.flipX = true;
		greybuildingright2.alpha = 0.95;
		greybuildingright2.alphaTopLeft = 0.95;
		greybuildingright2.alphaTopRight = 0.95;
		greybuildingright2.alphaBottomLeft = 0.95;
		greybuildingright2.alphaBottomRight = 0.95;
		greybuildingright2.tileScaleY = 0.8;

		// wallbuilding2
		const wallbuilding2 = this.add.tileSprite(1824, 122, 100, 2100, "grey_side_srone_left");
		wallbuilding2.scaleX = 0.6044296120188143;
		wallbuilding2.scaleY = 0.7;
		wallbuilding2.alpha = 0.95;
		wallbuilding2.alphaTopLeft = 0.95;
		wallbuilding2.alphaTopRight = 0.95;
		wallbuilding2.alphaBottomLeft = 0.95;
		wallbuilding2.alphaBottomRight = 0.95;
		wallbuilding2.tileScaleY = 0.8;

		// brown_block_5
		const brown_block_5 = this.add.nineslice(720, 519, "brown_block", undefined, 2201, 0, 545, 594, 0, 0);
		brown_block_5.scaleX = 0.4508922656320875;
		brown_block_5.scaleY = 0.5945075822897468;

		// shutter_2
		const shutter_2 = this.add.image(861, 519, "shutter");
		shutter_2.scaleX = 0.6128155047864006;
		shutter_2.scaleY = 0.6128155047864006;
		shutter_2.alpha = 0.9;
		shutter_2.alphaTopLeft = 0.9;
		shutter_2.alphaTopRight = 0.9;
		shutter_2.alphaBottomLeft = 0.9;
		shutter_2.alphaBottomRight = 0.9;

		// pipe_1
		const pipe_1 = this.add.image(1132, 278, "pipe");
		pipe_1.scaleX = 0.7225184241090002;
		pipe_1.scaleY = 0.7225184241090002;
		pipe_1.angle = 89;
		pipe_1.flipY = true;

		// brown_block_3
		const brown_block_3 = this.add.nineslice(719, 312, "brown_block", undefined, 2201, 0, 545, 594, 0, 0);
		brown_block_3.scaleX = 0.4518009364895714;
		brown_block_3.scaleY = 0.6256458272845137;

		// brown_block
		const brown_block = this.add.nineslice(719, -109, "brown_block", undefined, 2201, 0, 576, 570, 0, 0);
		brown_block.scaleX = 0.45252828721617;
		brown_block.scaleY = 0.6256458272845131;

		// purple_block
		const purple_block = this.add.nineslice(6245, 325, "purple_block", undefined, 1258, 600, 345, 567, 0, 7);

		// purple_block_1
		const purple_block_1 = this.add.nineslice(6247, -251, "purple_block", undefined, 1258, 600, 476, 449, 0, 7);

		// blockwallmid_1
		const blockwallmid_1 = this.add.tileSprite(12546, -1777, 1250, 29, "block_wall_top");
		blockwallmid_1.scaleY = 0.6352806194156675;
		blockwallmid_1.flipX = true;
		blockwallmid_1.flipY = true;

		// grey_block_4
		const grey_block_4 = this.add.image(8899, 441, "grey_block");
		grey_block_4.scaleX = 1.2915975141972877;
		grey_block_4.scaleY = 1.2915975141972877;
		grey_block_4.visible = false;

		// grey_block_7
		const grey_block_7 = this.add.image(12309, -2011, "grey_block");
		grey_block_7.scaleX = 1.2915975141972877;
		grey_block_7.scaleY = 1.2915975141972877;
		grey_block_7.tintTopLeft = 13091008;

		// brown_block_4
		const brown_block_4 = this.add.nineslice(719, 97, "brown_block", undefined, 2201, 0, 576, 570, 0, 0);
		brown_block_4.scaleX = 0.45252828721617;
		brown_block_4.scaleY = 0.6256458272845137;
		brown_block_4.tint = 16777215;

		// blue_side_srone_left_1
		const blue_side_srone_left_1 = this.add.tileSprite(6845, -263, 100, 800, "blue_side_srone_left");
		blue_side_srone_left_1.scaleX = 0.6434618337976579;
		blue_side_srone_left_1.scaleY = 2.2;
		blue_side_srone_left_1.flipX = true;
		blue_side_srone_left_1.tileScaleY = 0.25;

		// grey_block
		const grey_block = this.add.image(8398, 373, "grey_block");
		grey_block.scaleX = 1.6985617549169114;
		grey_block.scaleY = 1.414701952658029;

		// yellow_block
		const yellow_block = this.add.nineslice(4084, 381, "yellow_block", undefined, 1554, 0, 459, 461, 0, 0);
		yellow_block.scaleX = 0.7650615438830866;
		yellow_block.scaleY = 1.4141700669225457;

		// yellow_block_3
		const yellow_block_3 = this.add.nineslice(4076, -838, "yellow_block", undefined, 1554, 0, 459, 461, 0, 0);
		yellow_block_3.scaleX = 0.7612362660932944;
		yellow_block_3.scaleY = 1.031221542202296;

		// fire_escape_steps_up_side_4
		const fire_escape_steps_up_side_4 = this.add.image(9006, -46, "fire_escape_steps_up_side_1");
		fire_escape_steps_up_side_4.scaleX = 0.5716332192788011;
		fire_escape_steps_up_side_4.scaleY = 0.5716332192788011;
		fire_escape_steps_up_side_4.flipX = true;

		// grey_block_3
		const grey_block_3 = this.add.nineslice(8394, -1058, "grey_block", undefined, 697, 344, 108, 448, -21, 8);
		grey_block_3.scaleX = 1.5918762373015758;
		grey_block_3.scaleY = 1.414701952658029;

		// fire_escape_steps_up_side_5
		const fire_escape_steps_up_side_5 = this.add.image(7800, -682, "fire_escape_steps_up_side_1");
		fire_escape_steps_up_side_5.scaleX = 0.5716332192788011;
		fire_escape_steps_up_side_5.scaleY = 0.5716332192788011;

		// grey_block_9
		const grey_block_9 = this.add.image(7914, 447, "grey_block");
		grey_block_9.scaleX = 1.2915975141972877;
		grey_block_9.scaleY = 1.2915975141972877;
		grey_block_9.visible = false;

		// grey_side_srone_left_3
		const grey_side_srone_left_3 = this.add.tileSprite(255, 93, 100, 2100, "brown_side_srone_left");
		grey_side_srone_left_3.scaleX = 0.6411049750035593;
		grey_side_srone_left_3.scaleY = 0.49783235701010103;
		grey_side_srone_left_3.alpha = 0.8;
		grey_side_srone_left_3.alphaTopLeft = 0.8;
		grey_side_srone_left_3.alphaTopRight = 0.8;
		grey_side_srone_left_3.alphaBottomLeft = 0.8;
		grey_side_srone_left_3.alphaBottomRight = 0.8;

		// yellow_side_srone_left
		const yellow_side_srone_left = this.add.tileSprite(3513, 387, 100, 800, "yellow_side_srone_left");
		yellow_side_srone_left.scaleX = 0.5725532826302885;
		yellow_side_srone_left.scaleY = 0.5725532826302885;
		yellow_side_srone_left.alpha = 0.8;
		yellow_side_srone_left.alphaTopLeft = 0.8;
		yellow_side_srone_left.alphaTopRight = 0.8;
		yellow_side_srone_left.alphaBottomLeft = 0.8;
		yellow_side_srone_left.alphaBottomRight = 0.8;

		// grey_block_8
		const grey_block_8 = this.add.image(8391, -576, "grey_block");
		grey_block_8.scaleX = 1.6985617549169114;
		grey_block_8.scaleY = 1.414701952658029;

		// grey_block_2
		const grey_block_2 = this.add.image(8394, -103, "grey_block");
		grey_block_2.scaleX = 1.6985617549169114;
		grey_block_2.scaleY = 1.414701952658029;

		// blue_side_srone_left_6
		const blue_side_srone_left_6 = this.add.tileSprite(8937, -338, 100, 900, "blue_side_srone_left");
		blue_side_srone_left_6.scaleX = 0.6434618337976579;
		blue_side_srone_left_6.scaleY = 2.2;
		blue_side_srone_left_6.flipX = true;
		blue_side_srone_left_6.tileScaleY = 0.25;

		// blue_side_srone_left_7
		const blue_side_srone_left_7 = this.add.tileSprite(7852, -357, 100, 880, "blue_side_srone_left");
		blue_side_srone_left_7.scaleX = 0.6434618337976579;
		blue_side_srone_left_7.scaleY = 2.2;
		blue_side_srone_left_7.tileScaleY = 0.25;

		// yellow_side_srone_left_1
		const yellow_side_srone_left_1 = this.add.tileSprite(4647.2591550262205, 391, 100, 800, "yellow_side_srone_left");
		yellow_side_srone_left_1.scaleX = 0.5700988858502513;
		yellow_side_srone_left_1.scaleY = 0.5700988858502513;
		yellow_side_srone_left_1.flipX = true;
		yellow_side_srone_left_1.alpha = 0.8;
		yellow_side_srone_left_1.alphaTopLeft = 0.8;
		yellow_side_srone_left_1.alphaTopRight = 0.8;
		yellow_side_srone_left_1.alphaBottomLeft = 0.8;
		yellow_side_srone_left_1.alphaBottomRight = 0.8;

		// buildingwall1
		const buildingwall1 = this.add.tileSprite(1187, 103, 100, 2100, "brown_side_srone_left");
		buildingwall1.scaleX = 0.6411049750035593;
		buildingwall1.scaleY = 0.49783235701010103;
		buildingwall1.flipX = true;
		buildingwall1.alpha = 0.8;
		buildingwall1.alphaTopLeft = 0.8;
		buildingwall1.alphaTopRight = 0.8;
		buildingwall1.alphaBottomLeft = 0.8;
		buildingwall1.alphaBottomRight = 0.8;

		// pavement_narrow_repeating
		const pavement_narrow_repeating = this.add.tileSprite(4700, 683, 13000, 146, "pavement_narrow_repeating");
		pavement_narrow_repeating.scaleX = 0.8040230531283681;
		pavement_narrow_repeating.scaleY = 1.204664296353928;
		pavement_narrow_repeating.flipY = true;

		// road
		const road = this.add.tileSprite(4000, 687, 4000, 649, "road");
		road.scaleX = 4;
		road.scaleY = 0.09725308467247876;

		// pavement_narrow_repeating_1
		const pavement_narrow_repeating_1 = this.add.tileSprite(4000, 831, 9000, 146, "pavement_narrow_repeating");
		pavement_narrow_repeating_1.scaleX = 1.5;
		pavement_narrow_repeating_1.scaleY = 2.045987515308889;
		pavement_narrow_repeating_1.flipY = true;

		// brown_block_1
		const brown_block_1 = this.physics.add.sprite(851, -566, "brown_block");
		brown_block_1.scaleX = 0.41436632793472816;
		brown_block_1.scaleY = 0.8031575088710714;
		brown_block_1.tintTopLeft = 14077132;
		brown_block_1.tintTopRight = 13285817;
		brown_block_1.tintBottomLeft = 13020589;
		brown_block_1.tintBottomRight = 13615039;
		brown_block_1.body.setSize(665, 344, false);

		// wall_repeating
		const wall_repeating = this.add.tileSprite(2076, 583, 2500, 259, "wall_repeating");
		wall_repeating.scaleX = 0.5758339120031017;
		wall_repeating.scaleY = 0.5758339120031017;
		wall_repeating.visible = false;

		// water_tower
		const water_tower = this.add.image(2692, -671, "water_tower");
		water_tower.scaleX = 0.6859962776574015;
		water_tower.scaleY = 0.6859962776574015;

		// large_shop_window
		const large_shop_window = this.add.image(3871, 316, "large_shop_window");
		large_shop_window.scaleX = 0.42830093332415986;
		large_shop_window.scaleY = 0.42830093332415986;
		large_shop_window.alpha = 0.8;
		large_shop_window.alphaTopLeft = 0.8;
		large_shop_window.alphaTopRight = 0.8;
		large_shop_window.alphaBottomLeft = 0.8;
		large_shop_window.alphaBottomRight = 0.8;

		// platformtwo
		const platformtwo = this.add.tileSprite(3191, 487, 1100, 29, "block_wall_top");
		platformtwo.scaleX = 0.5;
		platformtwo.scaleY = 0.5243546465936467;
		platformtwo.visible = false;
		platformtwo.alpha = 0.8;
		platformtwo.alphaTopLeft = 0.8;
		platformtwo.alphaTopRight = 0.8;
		platformtwo.alphaBottomLeft = 0.8;
		platformtwo.alphaBottomRight = 0.8;
		platformtwo.tintTopLeft = 13615536;
		platformtwo.tintTopRight = 13813939;
		platformtwo.tintBottomLeft = 13091483;
		platformtwo.tintBottomRight = 12169859;

		// fence2
		const fence2 = this.physics.add.image(4300, 689, "dark_wood_fence");
		fence2.setInteractive(new Phaser.Geom.Rectangle(0, 100, 2500, 20), Phaser.Geom.Rectangle.Contains);
		fence2.scaleX = 50;
		fence2.scaleY = 0.44266200779710085;
		fence2.visible = false;
		fence2.body.pushable = false;
		fence2.body.immovable = true;
		fence2.body.setSize(244, 192, false);

		// fencecol
		const fencecol = this.physics.add.sprite(1505, 416, "dark_wood_fence");
		fencecol.setInteractive(new Phaser.Geom.Rectangle(0, 100, 244, 192), Phaser.Geom.Rectangle.Contains);
		fencecol.scaleX = 2.4326575667510464;
		fencecol.scaleY = -0.7907060752750409;
		fencecol.flipY = true;
		fencecol.visible = false;
		fencecol.body.checkCollision.down = false;
		fencecol.body.checkCollision.left = false;
		fencecol.body.checkCollision.right = false;
		fencecol.body.pushable = false;
		fencecol.body.immovable = true;
		fencecol.body.setSize(244, 192, false);

		// fencecol2
		const fencecol2 = this.physics.add.sprite(108, 440, "dark_wood_fence");
		fencecol2.setInteractive(new Phaser.Geom.Rectangle(0, 100, 244, 192), Phaser.Geom.Rectangle.Contains);
		fencecol2.scaleX = 0.979409630641223;
		fencecol2.scaleY = -0.5377901460393111;
		fencecol2.flipY = true;
		fencecol2.visible = false;
		fencecol2.body.checkCollision.down = false;
		fencecol2.body.checkCollision.left = false;
		fencecol2.body.checkCollision.right = false;
		fencecol2.body.pushable = false;
		fencecol2.body.immovable = true;
		fencecol2.body.setSize(244, 192, false);

		// washcord
		const washcord = this.add.rectangle(714, 337, 96, 128);
		washcord.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		washcord.scaleX = 10.24994191504008;
		washcord.scaleY = 0.029559026472868864;
		washcord.isFilled = true;
		washcord.fillColor = 1442049;

		// firescape4
		const firescape4 = this.physics.add.sprite(6861, -837, "fire_escape_platform_1");
		firescape4.scaleX = 0.8726904200702011;
		firescape4.scaleY = 0.8726904200702011;
		firescape4.body.setOffset(0, 100);
		firescape4.body.setSize(219, 115, false);

		// antenna
		const antenna = this.add.image(335, -486, "antenna");
		antenna.scaleX = 0.8776013659821876;
		antenna.scaleY = 0.8776013659821876;

		// shutter
		const shutter = this.add.image(789, 605, "shutter");
		shutter.scaleX = 0.5939709280128067;
		shutter.scaleY = 0.5939709280128067;
		shutter.visible = false;

		// trashcan
		const trashcan = this.physics.add.image(1087, 586, "trash_can_no_lid");
		trashcan.scaleX = 0.3782578033495354;
		trashcan.scaleY = 0.3782578033495354;
		trashcan.body.checkCollision.left = false;
		trashcan.body.checkCollision.right = false;
		trashcan.body.pushable = false;
		trashcan.body.immovable = true;
		trashcan.body.setOffset(0, 10);
		trashcan.body.setSize(200, 350, false);

		// washcordbyel1
		const washcordbyel1 = this.add.rectangle(5148, -595, 80, 128);
		washcordbyel1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		washcordbyel1.scaleX = 12;
		washcordbyel1.scaleY = 0.012276733793308809;
		washcordbyel1.isFilled = true;
		washcordbyel1.fillColor = 1442049;

		// windowlove3
		const windowlove3 = this.add.image(4400, -1146, "window_01");
		windowlove3.scaleX = 0.7767224245044714;
		windowlove3.scaleY = 0.7767224245044714;

		// _0_percent_2
		const _0_percent_2 = this.add.image(4399, -1132, "0-percent");
		_0_percent_2.scaleX = 0.11712998958064078;
		_0_percent_2.scaleY = 0.11712998958064078;

		// platformbuilding
		const platformbuilding = this.add.tileSprite(4401, -1275, 749, 29, "block_wall_top");
		platformbuilding.scaleX = 0.37;
		platformbuilding.scaleY = 0.6645643148142695;
		platformbuilding.tileScaleX = 1.54;

		// openwindowlove3
		const openwindowlove3 = this.add.image(4399, -1145, "window_01_open");
		openwindowlove3.scaleX = 0.7767224245044714;
		openwindowlove3.scaleY = 0.7767224245044714;
		openwindowlove3.visible = false;

		// heart3loveroom
		const heart3loveroom = this.physics.add.sprite(4399, -1131, "100-percent");
		heart3loveroom.scaleX = 0.1344739131946201;
		heart3loveroom.scaleY = 0.1344739131946201;
		heart3loveroom.visible = false;
		heart3loveroom.body.setSize(256, 256, false);

		// arial
		const arial = this.add.image(1871, -645, "arial");
		arial.scaleX = 0.8119789289891599;
		arial.scaleY = 0.8119789289891599;

		// dumpster
		const dumpster = this.physics.add.image(434, 571, "dumpster");
		dumpster.scaleX = 0.45502024159753196;
		dumpster.scaleY = 0.45502024159753196;
		dumpster.body.checkCollision.left = false;
		dumpster.body.checkCollision.right = false;
		dumpster.body.pushable = false;
		dumpster.body.immovable = true;
		dumpster.body.setOffset(30, 30);
		dumpster.body.setSize(300, 200, false);

		// fire_escape_steps_up_side
		const fire_escape_steps_up_side = this.add.image(3460, -255, "fire_escape_steps_up_side_1");
		fire_escape_steps_up_side.scaleX = 0.6044008910907528;
		fire_escape_steps_up_side.scaleY = 0.6044008910907528;

		// man_hole_cover
		const man_hole_cover = this.add.image(566, 679, "man_hole_cover");
		man_hole_cover.scaleX = 0.7226786985726019;
		man_hole_cover.scaleY = 0.39089405572629204;

		// blockroof
		const blockroof = this.add.nineslice(2351, -605, "block_separator_01", undefined, 1115, 0, 205, 194, 0, 0);
		blockroof.scaleX = 1.02;
		blockroof.scaleY = -0.39755278005913663;

		// step
		const step = this.physics.add.sprite(435, 209, "step");
		step.scaleX = 0.3994816244253585;
		step.scaleY = 0.3994816244253585;
		step.visible = false;
		step.body.checkCollision.down = false;
		step.body.checkCollision.left = false;
		step.body.checkCollision.right = false;
		step.body.pushable = false;
		step.body.immovable = true;
		step.body.setSize(180, 32, false);

		// step1
		const step1 = this.physics.add.sprite(529, -172, "step");
		step1.scaleX = 0.3994816244253585;
		step1.scaleY = 0.3994816244253585;
		step1.body.checkCollision.down = false;
		step1.body.checkCollision.left = false;
		step1.body.checkCollision.right = false;
		step1.body.pushable = false;
		step1.body.immovable = true;
		step1.body.setSize(180, 32, false);

		// step3
		const step3 = this.physics.add.sprite(723, 208, "step");
		step3.scaleX = 0.4597905632442396;
		step3.scaleY = 0.4597905632442396;
		step3.visible = false;
		step3.body.checkCollision.down = false;
		step3.body.checkCollision.left = false;
		step3.body.checkCollision.right = false;
		step3.body.pushable = false;
		step3.body.immovable = true;
		step3.body.setSize(180, 32, false);

		// washcord2
		const washcord2 = this.add.rectangle(720, -24, 97, 128);
		washcord2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 120, 128), Phaser.Geom.Rectangle.Contains);
		washcord2.scaleX = 10.12325003218265;
		washcord2.scaleY = 0.030139694308405476;
		washcord2.isFilled = true;
		washcord2.fillColor = 1442049;

		// step4
		const step4 = this.physics.add.sprite(1003, 209, "step");
		step4.scaleX = 0.3994816244253585;
		step4.scaleY = 0.3994816244253585;
		step4.body.checkCollision.down = false;
		step4.body.checkCollision.left = false;
		step4.body.checkCollision.right = false;
		step4.body.pushable = false;
		step4.body.immovable = true;
		step4.body.setSize(180, 32, false);

		// step6
		const step6 = this.physics.add.sprite(853, -168, "step");
		step6.scaleX = 0.3994816244253585;
		step6.scaleY = 0.3994816244253585;
		step6.body.checkCollision.down = false;
		step6.body.checkCollision.left = false;
		step6.body.checkCollision.right = false;
		step6.body.pushable = false;
		step6.body.immovable = true;
		step6.body.setSize(180, 32, false);

		// yellow_block_2
		const yellow_block_2 = this.add.nineslice(4079, -491, "yellow_block", undefined, 1554, 0, 459, 461, 0, 0);
		yellow_block_2.scaleX = 0.7650615438830866;
		yellow_block_2.scaleY = 1.031221542202296;

		// arial_1
		this.add.image(6587, -1555, "arial");

		// chimney_2
		const chimney_2 = this.add.image(7879, -1403, "chimney");
		chimney_2.scaleX = 0.8979682984570669;
		chimney_2.scaleY = 0.8979682984570669;

		// washcordb
		const washcordb = this.add.rectangle(5143, -121, 80, 128);
		washcordb.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		washcordb.scaleX = 12;
		washcordb.scaleY = 0.012276733793308809;
		washcordb.isFilled = true;
		washcordb.fillColor = 1442049;

		// yellow_block_1
		const yellow_block_1 = this.add.nineslice(4083, -111, "yellow_block", undefined, 1554, 0, 459, 461, 0, 0);
		yellow_block_1.scaleX = 0.7650615438830866;
		yellow_block_1.scaleY = 1.4727357742757772;

		// yellowbuilding3left
		const yellowbuilding3left = this.add.tileSprite(3509, -439, 100, 850, "yellow_side_srone_left");
		yellowbuilding3left.scaleX = 0.47528198637465846;
		yellowbuilding3left.scaleY = 1.3427459046641612;
		yellowbuilding3left.alpha = 0.8;
		yellowbuilding3left.alphaTopLeft = 0.8;
		yellowbuilding3left.alphaTopRight = 0.8;
		yellowbuilding3left.alphaBottomLeft = 0.8;
		yellowbuilding3left.alphaBottomRight = 0.8;
		yellowbuilding3left.tileScaleY = 0.5;

		// fire_escape_steps_up_side_3
		const fire_escape_steps_up_side_3 = this.add.image(5593, -330, "fire_escape_steps_up_side_1");
		fire_escape_steps_up_side_3.scaleX = 0.5716332192788011;
		fire_escape_steps_up_side_3.scaleY = 0.5716332192788011;

		// chimney_3
		const chimney_3 = this.add.image(4082, -1068, "chimney");
		chimney_3.scaleX = 0.7816996236394784;
		chimney_3.scaleY = 0.7816996236394784;

		// trashcan2
		const trashcan2 = this.physics.add.image(4447, 588, "trash_can_no_lid");
		trashcan2.scaleX = 0.3914461683284906;
		trashcan2.scaleY = 0.3914461683284906;
		trashcan2.flipX = true;
		trashcan2.body.checkCollision.left = false;
		trashcan2.body.checkCollision.right = false;
		trashcan2.body.pushable = false;
		trashcan2.body.immovable = true;
		trashcan2.body.setOffset(0, 10);
		trashcan2.body.setSize(200, 350, false);

		// rooftop_2
		const rooftop_2 = this.add.tileSprite(719, 337, 1570, 29, "block_wall_top");
		rooftop_2.scaleX = 0.6291493278068844;
		rooftop_2.scaleY = -0.47778951634254746;
		rooftop_2.alpha = 0.8;
		rooftop_2.alphaTopLeft = 0.8;
		rooftop_2.alphaTopRight = 0.8;
		rooftop_2.alphaBottomLeft = 0.8;
		rooftop_2.alphaBottomRight = 0.8;
		rooftop_2.tintTopLeft = 13615536;
		rooftop_2.tintTopRight = 13813939;
		rooftop_2.tintBottomLeft = 13091483;
		rooftop_2.tintBottomRight = 12169859;

		// aircon
		const aircon = this.add.image(3653, -1042, "aircon");
		aircon.scaleX = 0.8789425185637108;
		aircon.scaleY = 0.8789425185637108;

		// small_shop_window
		const small_shop_window = this.add.image(3875, 332, "small_shop_window");
		small_shop_window.scaleX = 0.39809844876855455;
		small_shop_window.scaleY = 0.39809844876855455;
		small_shop_window.visible = false;
		small_shop_window.alpha = 0.8;
		small_shop_window.alphaTopLeft = 0.8;
		small_shop_window.alphaTopRight = 0.8;
		small_shop_window.alphaBottomLeft = 0.8;
		small_shop_window.alphaBottomRight = 0.8;

		// blue_side_srone_left
		const blue_side_srone_left = this.add.tileSprite(5646, -259, 100, 800, "blue_side_srone_left");
		blue_side_srone_left.scaleX = 0.6434618337976579;
		blue_side_srone_left.scaleY = 2.2;
		blue_side_srone_left.tileScaleY = 0.25;

		// dumpster2
		const dumpster2 = this.physics.add.image(4198, 568, "dumpster");
		dumpster2.scaleX = 0.4934932962574923;
		dumpster2.scaleY = 0.4934932962574923;
		dumpster2.body.checkCollision.left = false;
		dumpster2.body.checkCollision.right = false;
		dumpster2.body.pushable = false;
		dumpster2.body.immovable = true;
		dumpster2.body.setOffset(30, 30);
		dumpster2.body.setSize(300, 200, false);

		// blocklasttop2
		const blocklasttop2 = this.add.tileSprite(13156, -1769, 1950, 29, "block_wall_top");
		blocklasttop2.scaleX = 0.95;
		blocklasttop2.scaleY = 0.40053425802346326;

		// fencecolyel1
		const fencecolyel1 = this.physics.add.sprite(7350, 419, "dark_wood_fence");
		fencecolyel1.setInteractive(new Phaser.Geom.Rectangle(0, 100, 244, 192), Phaser.Geom.Rectangle.Contains);
		fencecolyel1.scaleX = 3.956014288399349;
		fencecolyel1.scaleY = -0.5678481360117457;
		fencecolyel1.flipY = true;
		fencecolyel1.visible = false;
		fencecolyel1.body.checkCollision.down = false;
		fencecolyel1.body.checkCollision.left = false;
		fencecolyel1.body.checkCollision.right = false;
		fencecolyel1.body.pushable = false;
		fencecolyel1.body.immovable = true;
		fencecolyel1.body.setSize(244, 192, false);

		// stepb21
		const stepb21 = this.physics.add.sprite(2007, 128, "step");
		stepb21.scaleX = 0.4597905632442396;
		stepb21.scaleY = 0.4597905632442396;
		stepb21.body.checkCollision.down = false;
		stepb21.body.checkCollision.left = false;
		stepb21.body.checkCollision.right = false;
		stepb21.body.pushable = false;
		stepb21.body.immovable = true;
		stepb21.body.setSize(180, 32, false);

		// stepb23
		const stepb23 = this.physics.add.sprite(2702, 135, "step");
		stepb23.scaleX = 0.4597905632442396;
		stepb23.scaleY = 0.4597905632442396;
		stepb23.body.checkCollision.down = false;
		stepb23.body.checkCollision.left = false;
		stepb23.body.checkCollision.right = false;
		stepb23.body.pushable = false;
		stepb23.body.immovable = true;
		stepb23.body.setSize(180, 32, false);

		// stepb24
		const stepb24 = this.physics.add.sprite(2346, 131, "step");
		stepb24.scaleX = 0.4597905632442396;
		stepb24.scaleY = 0.4597905632442396;
		stepb24.body.checkCollision.down = false;
		stepb24.body.checkCollision.left = false;
		stepb24.body.checkCollision.right = false;
		stepb24.body.pushable = false;
		stepb24.body.immovable = true;
		stepb24.body.setSize(180, 32, false);

		// stepb25
		const stepb25 = this.physics.add.sprite(1999, -293, "step");
		stepb25.scaleX = 0.4597905632442396;
		stepb25.scaleY = 0.4597905632442396;
		stepb25.body.checkCollision.down = false;
		stepb25.body.checkCollision.left = false;
		stepb25.body.checkCollision.right = false;
		stepb25.body.pushable = false;
		stepb25.body.immovable = true;
		stepb25.body.setSize(180, 32, false);

		// stepb26
		const stepb26 = this.physics.add.sprite(2683, -307, "step");
		stepb26.scaleX = 0.4597905632442396;
		stepb26.scaleY = 0.4597905632442396;
		stepb26.body.checkCollision.down = false;
		stepb26.body.checkCollision.left = false;
		stepb26.body.checkCollision.right = false;
		stepb26.body.pushable = false;
		stepb26.body.immovable = true;
		stepb26.body.setSize(180, 32, false);

		// poster
		const poster = this.add.image(4427, 370, "poster_01");
		poster.scaleX = 0.4014906416516424;
		poster.scaleY = 0.4014906416516424;
		poster.angle = 23;

		// hydrant
		const hydrant = this.add.image(12306, -2672, "hydrant");
		hydrant.scaleX = 0.37475403556643977;
		hydrant.scaleY = 0.37475403556643977;
		hydrant.alpha = 0.9;
		hydrant.alphaTopLeft = 0.9;
		hydrant.alphaTopRight = 0.9;
		hydrant.alphaBottomLeft = 0.9;
		hydrant.alphaBottomRight = 0.9;

		// washing_4
		const washing_4 = this.add.image(5354, -96, "washing_07");
		washing_4.scaleX = 0.8328197354869031;
		washing_4.scaleY = 0.8328197354869031;
		washing_4.angle = 9;

		// Window34
		const window34 = new WindowClass(this, 3876, -135);
		this.add.existing(window34);

		// Window35
		const window35 = new WindowClass(this, 4277, -135);
		this.add.existing(window35);

		// step33
		const step33 = this.physics.add.sprite(3876, 363, "step");
		step33.name = "step33";
		step33.scaleX = 1.1320589653854007;
		step33.scaleY = 0.33618341401535023;
		step33.visible = false;
		step33.body.checkCollision.down = false;
		step33.body.checkCollision.left = false;
		step33.body.checkCollision.right = false;
		step33.body.pushable = false;
		step33.body.immovable = true;
		step33.body.setSize(180, 32, false);

		// step32
		const step32 = this.physics.add.sprite(4278, -78, "step");
		step32.scaleX = 0.4597905632442396;
		step32.scaleY = 0.4597905632442396;
		step32.visible = false;
		step32.body.checkCollision.down = false;
		step32.body.checkCollision.left = false;
		step32.body.checkCollision.right = false;
		step32.body.pushable = false;
		step32.body.immovable = true;
		step32.body.setSize(180, 32, false);

		// rooftop_1
		const rooftop_1 = this.add.tileSprite(719, -25, 1580, 29, "block_wall_top");
		rooftop_1.scaleX = 0.6291493278068844;
		rooftop_1.scaleY = -0.47778951634254746;
		rooftop_1.alpha = 0.8;
		rooftop_1.alphaTopLeft = 0.8;
		rooftop_1.alphaTopRight = 0.8;
		rooftop_1.alphaBottomLeft = 0.8;
		rooftop_1.alphaBottomRight = 0.8;
		rooftop_1.tintTopLeft = 13615536;
		rooftop_1.tintTopRight = 13813939;
		rooftop_1.tintBottomLeft = 13091483;
		rooftop_1.tintBottomRight = 12169859;

		// step31
		const step31 = this.physics.add.sprite(3875, -79, "step");
		step31.scaleX = 0.4597905632442396;
		step31.scaleY = 0.4597905632442396;
		step31.visible = false;
		step31.body.checkCollision.down = false;
		step31.body.checkCollision.left = false;
		step31.body.checkCollision.right = false;
		step31.body.pushable = false;
		step31.body.immovable = true;
		step31.body.setSize(180, 32, false);

		// Window32
		const window32 = new WindowClass(this, 4097, -648);
		this.add.existing(window32);

		// Window33
		const window33 = new WindowClass(this, 4401, -648);
		this.add.existing(window33);
		window33.scaleX = 1;
		window33.scaleY = 1;

		// step34
		const step34 = this.physics.add.sprite(4098, -592, "step");
		step34.name = "step34";
		step34.scaleX = 0.4597905632442396;
		step34.scaleY = 0.4597905632442396;
		step34.visible = false;
		step34.body.checkCollision.down = false;
		step34.body.checkCollision.left = false;
		step34.body.checkCollision.right = false;
		step34.body.pushable = false;
		step34.body.immovable = true;
		step34.body.setSize(180, 32, false);

		// step35
		const step35 = this.physics.add.sprite(4399, -590, "step");
		step35.name = "step35";
		step35.scaleX = 0.4597905632442396;
		step35.scaleY = 0.4597905632442396;
		step35.visible = false;
		step35.body.checkCollision.down = false;
		step35.body.checkCollision.left = false;
		step35.body.checkCollision.right = false;
		step35.body.pushable = false;
		step35.body.immovable = true;
		step35.body.setSize(180, 32, false);

		// window_21
		const window_21 = this.add.image(12941, -2150, "window_01");
		window_21.scaleX = 0.7889227673016052;
		window_21.scaleY = 0.7889227673016052;

		// window_22
		const window_22 = this.add.image(13133, -2146, "window_01");
		window_22.scaleX = 0.7889227673016052;
		window_22.scaleY = 0.7889227673016052;

		// window_23
		const window_23 = this.add.image(13318, -2146, "window_01");
		window_23.scaleX = 0.7889227673016052;
		window_23.scaleY = 0.7889227673016052;

		// windowL13
		const windowL13 = new WindowClass(this, 1005, 150);
		this.add.existing(windowL13);

		// windowL12
		const windowL12 = new WindowClass(this, 726, 150);
		this.add.existing(windowL12);

		// windowL14
		const windowL14 = new WindowClass(this, 429, 150);
		this.add.existing(windowL14);

		// windowL11
		const windowL11 = new WindowClass(this, 529, -227);
		this.add.existing(windowL11);

		// windowL15
		const windowL15 = new WindowClass(this, 856, -227);
		this.add.existing(windowL15);

		// WindowL24
		const windowL24 = new WindowClass(this, 1994, -352);
		this.add.existing(windowL24);
		windowL24.alpha = 0.9;

		// WindowL25
		const windowL25 = new WindowClass(this, 2686, -362);
		this.add.existing(windowL25);
		windowL25.alpha = 0.9;

		// blocksep
		const blocksep = this.add.nineslice(720, -427, "block_separator_01", undefined, 1136, 0, 269, 184, 0, 0);
		blocksep.scaleX = 0.8876310528642842;
		blocksep.scaleY = 0.5236340513568921;
		blocksep.visible = false;

		// windowlove2
		const windowlove2 = this.add.image(2243, -743, "window_01");
		windowlove2.scaleX = 0.7767224245044714;
		windowlove2.scaleY = 0.7767224245044714;

		// _0_percent_1
		const _0_percent_1 = this.add.image(2242, -729, "0-percent");
		_0_percent_1.scaleX = 0.11712998958064078;
		_0_percent_1.scaleY = 0.11712998958064078;

		// topwallL1
		const topwallL1 = this.add.tileSprite(720, -425, 749, 29, "block_wall_top");
		topwallL1.scaleX = 1.3446708834650134;
		topwallL1.scaleY = 0.6645643148142695;
		topwallL1.tileScaleX = 0.735;

		// window_01
		const window_01 = this.add.image(844, -593.7767224245046, "window_01");
		window_01.scaleX = 0.7767224245044714;
		window_01.scaleY = 0.7767224245044714;

		// openwindowlove
		const openwindowlove = this.add.image(844, -594, "window_01_open");
		openwindowlove.scaleX = 0.7767224245044714;
		openwindowlove.scaleY = 0.7767224245044714;
		openwindowlove.visible = false;

		// loveplat
		const loveplat = this.add.tileSprite(852, -706, 749, 29, "block_wall_top");
		loveplat.scaleX = 0.4;
		loveplat.scaleY = 0.6645643148142695;
		loveplat.tileScaleX = 1.54;

		// fishitem
		const fishitem = this.physics.add.sprite(856, -211, "__female_gambusia_swim_000");
		fishitem.scaleX = 0.10286225103379901;
		fishitem.scaleY = 0.10286225103379901;
		fishitem.tintTopLeft = 4276031;
		fishitem.tintTopRight = 4210752;
		fishitem.tintBottomLeft = 4735811;
		fishitem.tintBottomRight = 4802889;
		fishitem.body.setSize(550, 240, false);

		// purple_block_3
		const purple_block_3 = this.add.nineslice(6579, -1419, "purple_block", undefined, 665, 484, 0, 3, 139, 178);
		purple_block_3.scaleX = 0.45505728634514986;
		purple_block_3.scaleY = 1.1428565838907123;

		// platformbuilding2
		const platformbuilding2 = this.add.tileSprite(2244, -872, 749, 29, "block_wall_top");
		platformbuilding2.scaleX = 0.37;
		platformbuilding2.scaleY = 0.6645643148142695;
		platformbuilding2.tileScaleX = 1.54;

		// ItemSpider
		const itemSpider = this.physics.add.sprite(1004, 159, "__brown_spider_idle_008");
		itemSpider.scaleX = 0.07761133935997001;
		itemSpider.scaleY = 0.07761133935997001;
		itemSpider.tintTopLeft = 4276031;
		itemSpider.tintTopRight = 4210752;
		itemSpider.tintBottomLeft = 4735811;
		itemSpider.tintBottomRight = 4802889;
		itemSpider.body.setSize(591, 661, false);

		// mouseitem
		const mouseitem = this.physics.add.sprite(424, 161, "__grey_mouse_walk_000");
		mouseitem.scaleX = 0.13345414075092935;
		mouseitem.scaleY = 0.13345414075092935;
		mouseitem.tintTopLeft = 4276031;
		mouseitem.tintTopRight = 4210752;
		mouseitem.tintBottomLeft = 4735811;
		mouseitem.tintBottomRight = 4802889;
		mouseitem.body.setSize(442, 292, false);

		// birdcageitem
		const birdcageitem = this.physics.add.sprite(726, 164, "gold_bird_cage_closed_no_back_bars");
		birdcageitem.scaleX = 0.08090658792800536;
		birdcageitem.scaleY = 0.08090658792800536;
		birdcageitem.tintTopLeft = 4276031;
		birdcageitem.tintTopRight = 4210752;
		birdcageitem.tintBottomLeft = 4735811;
		birdcageitem.tintBottomRight = 4802889;
		birdcageitem.body.setSize(413, 500, false);

		// ratitem
		const ratitem = this.physics.add.sprite(525, -211, "__grey_yellow_eyes_idle_standing_000");
		ratitem.scaleX = 0.12937473066256244;
		ratitem.scaleY = 0.12937473066256244;
		ratitem.tintTopLeft = 4276031;
		ratitem.tintTopRight = 4210752;
		ratitem.tintBottomLeft = 4735811;
		ratitem.tintBottomRight = 4802889;
		ratitem.body.setSize(536, 268, false);

		// checkmouse
		const checkmouse = this.add.image(429, 166, "checkmark-xxl");
		checkmouse.scaleX = 0.1121754501485466;
		checkmouse.scaleY = 0.1121754501485466;
		checkmouse.alpha = 0.5;
		checkmouse.alphaTopLeft = 0.5;
		checkmouse.alphaTopRight = 0.5;
		checkmouse.alphaBottomLeft = 0.5;
		checkmouse.alphaBottomRight = 0.5;

		// birdagecheck
		const birdagecheck = this.add.image(724, 166, "checkmark-xxl");
		birdagecheck.scaleX = 0.1121754501485466;
		birdagecheck.scaleY = 0.1121754501485466;
		birdagecheck.alpha = 0.5;
		birdagecheck.alphaTopLeft = 0.5;
		birdagecheck.alphaTopRight = 0.5;
		birdagecheck.alphaBottomLeft = 0.5;
		birdagecheck.alphaBottomRight = 0.5;

		// spidercheck
		const spidercheck = this.add.image(1004, 166, "checkmark-xxl");
		spidercheck.scaleX = 0.1121754501485466;
		spidercheck.scaleY = 0.1121754501485466;
		spidercheck.alpha = 0.5;
		spidercheck.alphaTopLeft = 0.5;
		spidercheck.alphaTopRight = 0.5;
		spidercheck.alphaBottomLeft = 0.5;
		spidercheck.alphaBottomRight = 0.5;

		// fishcheck
		const fishcheck = this.add.image(855, -209, "checkmark-xxl");
		fishcheck.scaleX = 0.1121754501485466;
		fishcheck.scaleY = 0.1121754501485466;
		fishcheck.alpha = 0.5;
		fishcheck.alphaTopLeft = 0.5;
		fishcheck.alphaTopRight = 0.5;
		fishcheck.alphaBottomLeft = 0.5;
		fishcheck.alphaBottomRight = 0.5;

		// WindowL23
		const windowL23 = new WindowClass(this, 2701, 78);
		this.add.existing(windowL23);
		windowL23.alpha = 0.9;

		// WindowL21
		const windowL21 = new WindowClass(this, 2350, 75);
		this.add.existing(windowL21);
		windowL21.alpha = 0.9;

		// catPlayer
		const catPlayer = new CatPlayer(this, 175, 427);
		this.add.existing(catPlayer);
		catPlayer.scaleX = 0.15201730813506723;
		catPlayer.scaleY = 0.15201730813506723;
		catPlayer.flipX = true;
		catPlayer.flipY = false;
		catPlayer.body.enable = true;
		catPlayer.body.collideWorldBounds = true;
		catPlayer.body.setOffset(130, 50);
		catPlayer.body.setSize(340, 460, false);

		// WindowL22
		const windowL22 = new WindowClass(this, 2006, 74);
		this.add.existing(windowL22);
		windowL22.alpha = 0.9;

		// ratcheck
		const ratcheck = this.add.image(526, -209, "checkmark-xxl");
		ratcheck.scaleX = 0.1121754501485466;
		ratcheck.scaleY = 0.1121754501485466;
		ratcheck.alpha = 0.5;
		ratcheck.alphaTopLeft = 0.5;
		ratcheck.alphaTopRight = 0.5;
		ratcheck.alphaBottomLeft = 0.5;
		ratcheck.alphaBottomRight = 0.5;

		// _0_percent
		const _0_percent = this.add.image(843, -580, "0-percent");
		_0_percent.scaleX = 0.11712998958064078;
		_0_percent.scaleY = 0.11712998958064078;

		// LoveIntrance
		const loveIntrance = this.physics.add.sprite(845, -576, "100-percent");
		loveIntrance.scaleX = 0.1344739131946201;
		loveIntrance.scaleY = 0.1344739131946201;
		loveIntrance.visible = false;
		loveIntrance.body.setSize(256, 256, false);

		// window_broken_01
		const window_broken_01 = this.add.image(2334, -356, "window_broken_01");
		window_broken_01.scaleX = 0.8117861674108046;
		window_broken_01.scaleY = 0.8117861674108046;

		// trashcanb2
		const trashcanb2 = this.physics.add.sprite(3721, 577, "trash_can_lid");
		trashcanb2.scaleX = 0.19225678948774275;
		trashcanb2.scaleY = 0.19225678948774275;
		trashcanb2.body.setOffset(0, 60);
		trashcanb2.body.setSize(442, 561, false);

		// tramstop
		const tramstop = this.physics.add.sprite(2536, 551, "tram_stop");
		tramstop.scaleX = 0.2628966669299176;
		tramstop.scaleY = 0.2628966669299176;
		tramstop.alpha = 0.85;
		tramstop.alphaTopLeft = 0.85;
		tramstop.alphaTopRight = 0.85;
		tramstop.alphaBottomLeft = 0.85;
		tramstop.alphaBottomRight = 0.85;
		tramstop.body.setOffset(0, 20);
		tramstop.body.setSize(792, 660, false);

		// shadowFx_2
		tramstop.preFX.addShadow(0, 0, 0.1, 0.2, 0, 6, 1);

		// stepbblock2dis
		const stepbblock2dis = this.physics.add.sprite(2315, -299, "step");
		stepbblock2dis.scaleX = 0.4597905632442396;
		stepbblock2dis.scaleY = 0.4597905632442396;
		stepbblock2dis.visible = false;
		stepbblock2dis.body.checkCollision.down = false;
		stepbblock2dis.body.checkCollision.left = false;
		stepbblock2dis.body.checkCollision.right = false;
		stepbblock2dis.body.pushable = false;
		stepbblock2dis.body.immovable = true;
		stepbblock2dis.body.setSize(180, 32, false);

		// trashside
		const trashside = this.physics.add.sprite(4020, 595, "trash_can_group");
		trashside.scaleX = 0.1721663411708699;
		trashside.scaleY = 0.1721663411708699;
		trashside.body.setOffset(0, 100);
		trashside.body.setSize(420, 364, false);

		// arrow1
		const arrow1 = this.physics.add.sprite(428, 228, "short_straight_up");
		arrow1.scaleX = 0.12232717242392994;
		arrow1.scaleY = 0.12232717242392994;
		arrow1.tintTopLeft = 16448250;
		arrow1.tintTopRight = 16250871;
		arrow1.tintBottomLeft = 16184821;
		arrow1.body.setSize(2000, 2000, false);

		// shop
		const shop = this.physics.add.sprite(2092, 517, "small_shop_grey");
		shop.scaleX = 0.5532537947633331;
		shop.scaleY = 0.5532537947633331;
		shop.alpha = 0.8;
		shop.alphaTopLeft = 0.8;
		shop.alphaTopRight = 0.8;
		shop.alphaBottomLeft = 0.8;
		shop.alphaBottomRight = 0.8;
		shop.body.setSize(462, 352, false);

		// shadowFx_1
		shop.preFX.addShadow(0.1, 0.5, 0.1, 0.5, 0, 6, 1);

		// arrow2
		const arrow2 = this.physics.add.sprite(729, 228, "short_straight_up");
		arrow2.scaleX = 0.12232717242392994;
		arrow2.scaleY = 0.12232717242392994;
		arrow2.tintTopLeft = 16448250;
		arrow2.tintTopRight = 16250871;
		arrow2.tintBottomLeft = 16184821;
		arrow2.body.setSize(2000, 2000, false);

		// arrow3
		const arrow3 = this.physics.add.sprite(1004, 229, "short_straight_up");
		arrow3.scaleX = 0.12232717242392994;
		arrow3.scaleY = 0.12232717242392994;
		arrow3.tintTopLeft = 16448250;
		arrow3.tintTopRight = 16250871;
		arrow3.tintBottomLeft = 16184821;
		arrow3.body.setSize(2000, 2000, false);

		// arrow4
		const arrow4 = this.physics.add.sprite(857, -142.63855220833304, "short_straight_up");
		arrow4.scaleX = 0.12232717242392994;
		arrow4.scaleY = 0.12232717242392994;
		arrow4.tintTopLeft = 16448250;
		arrow4.tintTopRight = 16250871;
		arrow4.tintBottomLeft = 16184821;
		arrow4.body.setSize(2000, 2000, false);

		// blockwallmid2
		const blockwallmid2 = this.add.tileSprite(6244, -507, 1250, 29, "block_wall_top");
		blockwallmid2.scaleX = 1.008;
		blockwallmid2.scaleY = 0.35;
		blockwallmid2.tileScaleX = 0.8;

		// arrow5
		const arrow5 = this.physics.add.sprite(526.8883933236493, -142.63855220833304, "short_straight_up");
		arrow5.scaleX = 0.12232717242392994;
		arrow5.scaleY = 0.12232717242392994;
		arrow5.tintTopLeft = 16448250;
		arrow5.tintTopRight = 16250871;
		arrow5.tintBottomLeft = 16184821;
		arrow5.body.setSize(2000, 2000, false);

		// awning_blue_large
		const awning_blue_large = this.add.image(2091, 434, "awning_blue_large");
		awning_blue_large.scaleX = 0.5618130864171722;
		awning_blue_large.scaleY = 0.2899067615150892;
		awning_blue_large.alpha = 0.9;
		awning_blue_large.alphaTopLeft = 0.9;
		awning_blue_large.alphaTopRight = 0.9;
		awning_blue_large.alphaBottomLeft = 0.9;
		awning_blue_large.alphaBottomRight = 0.9;

		// rooftop
		const rooftop = this.add.tileSprite(2353, -159, 1570, 29, "block_wall_top");
		rooftop.scaleX = 0.71;
		rooftop.scaleY = -0.47778951634254746;
		rooftop.alpha = 0.8;
		rooftop.alphaTopLeft = 0.8;
		rooftop.alphaTopRight = 0.8;
		rooftop.alphaBottomLeft = 0.8;
		rooftop.alphaBottomRight = 0.8;
		rooftop.tintTopLeft = 13615536;
		rooftop.tintTopRight = 13813939;
		rooftop.tintBottomLeft = 13091483;
		rooftop.tintBottomRight = 12169859;
		rooftop.tileScaleX = 0.8;

		// poster_01
		const poster_01 = this.add.image(3626, -847, "poster_01");
		poster_01.scaleX = 0.36801346215395325;
		poster_01.scaleY = 0.36801346215395325;
		poster_01.angle = 7;
		poster_01.alpha = 0.6;
		poster_01.alphaTopLeft = 0.6;
		poster_01.alphaTopRight = 0.6;
		poster_01.alphaBottomLeft = 0.6;
		poster_01.alphaBottomRight = 0.6;

		// street_light
		const street_light = this.add.image(2305, 481, "street_light");
		street_light.scaleX = 0.424035755843557;
		street_light.scaleY = 0.424035755843557;
		street_light.flipX = true;
		street_light.visible = false;

		// bussign
		const bussign = this.physics.add.sprite(2778, 549, "bus_stop_sign");
		bussign.scaleX = 0.345525617125278;
		bussign.scaleY = 0.345525617125278;
		bussign.alpha = 0.9;
		bussign.alphaTopLeft = 0.9;
		bussign.alphaTopRight = 0.9;
		bussign.alphaBottomLeft = 0.9;
		bussign.alphaBottomRight = 0.9;
		bussign.body.setSize(165, 446, false);

		// billboard
		const billboard = this.physics.add.sprite(2537, 322, "small_bill_board");
		billboard.scaleX = 0.8773718462211781;
		billboard.scaleY = 0.8773718462211781;
		billboard.alpha = 0.6;
		billboard.alphaTopLeft = 0.6;
		billboard.alphaTopRight = 0.6;
		billboard.alphaBottomLeft = 0.6;
		billboard.alphaBottomRight = 0.6;
		billboard.tintTopLeft = 10661318;
		billboard.tintTopRight = 12568280;
		billboard.tintBottomLeft = 4483748;
		billboard.tintBottomRight = 5080508;
		billboard.body.setSize(277, 103, false);

		// shadowFx
		billboard.preFX.addShadow(0, -1, 0.1, 1, 0, 3, 1);

		// text1
		const text1 = this.add.text(2507, 306, "", {});
		text1.scaleX = 1.007530320222008;
		text1.scaleY = 1.007530320222008;
		text1.text = "BUS";
		text1.setStyle({ "align": "center", "color": "#0a0909ff", "fontSize": "35px", "fontStyle": "bold", "shadow.stroke": true });

		// mouseitem2
		const mouseitem2 = this.physics.add.sprite(2349, 91, "__grey_mouse_walk_000");
		mouseitem2.scaleX = 0.13345414075092935;
		mouseitem2.scaleY = 0.13345414075092935;
		mouseitem2.tintTopLeft = 4276031;
		mouseitem2.tintTopRight = 4210752;
		mouseitem2.tintBottomLeft = 4735811;
		mouseitem2.tintBottomRight = 4802889;
		mouseitem2.body.setSize(442, 292, false);

		// Birdcageitem2
		const birdcageitem2 = this.physics.add.sprite(2702, 93, "gold_bird_cage_closed_no_back_bars");
		birdcageitem2.scaleX = 0.08090658792800536;
		birdcageitem2.scaleY = 0.08090658792800536;
		birdcageitem2.tintTopLeft = 4276031;
		birdcageitem2.tintTopRight = 4210752;
		birdcageitem2.tintBottomLeft = 4735811;
		birdcageitem2.tintBottomRight = 4802889;
		birdcageitem2.body.setSize(413, 500, false);

		// ItemSpider2
		const itemSpider2 = this.physics.add.sprite(2009, 90, "__brown_spider_idle_008");
		itemSpider2.scaleX = 0.07761133935997001;
		itemSpider2.scaleY = 0.07761133935997001;
		itemSpider2.tintTopLeft = 4276031;
		itemSpider2.tintTopRight = 4210752;
		itemSpider2.tintBottomLeft = 4735811;
		itemSpider2.tintBottomRight = 4802889;
		itemSpider2.body.setSize(591, 661, false);

		// ratitem2
		const ratitem2 = this.physics.add.sprite(1997, -332, "__grey_yellow_eyes_idle_standing_000");
		ratitem2.scaleX = 0.12937473066256244;
		ratitem2.scaleY = 0.12937473066256244;
		ratitem2.tintTopLeft = 4276031;
		ratitem2.tintTopRight = 4210752;
		ratitem2.tintBottomLeft = 4735811;
		ratitem2.tintBottomRight = 4802889;
		ratitem2.body.setSize(536, 268, false);

		// fishitem2
		const fishitem2 = this.physics.add.sprite(2687, -338, "__female_gambusia_swim_000");
		fishitem2.scaleX = 0.10286225103379901;
		fishitem2.scaleY = 0.10286225103379901;
		fishitem2.tintTopLeft = 4276031;
		fishitem2.tintTopRight = 4210752;
		fishitem2.tintBottomLeft = 4735811;
		fishitem2.tintBottomRight = 4802889;
		fishitem2.body.setSize(550, 240, false);

		// Window31
		const window31 = new WindowClass(this, 3757, -648);
		this.add.existing(window31);

		// arrow8
		const arrow8 = this.physics.add.sprite(2000, 173, "short_straight_up");
		arrow8.scaleX = 0.12232717242392994;
		arrow8.scaleY = 0.12232717242392994;
		arrow8.tintTopLeft = 16448250;
		arrow8.tintTopRight = 16250871;
		arrow8.tintBottomLeft = 16184821;
		arrow8.body.setSize(2000, 2000, false);

		// arrow9
		const arrow9 = this.physics.add.sprite(2348, 171, "short_straight_up");
		arrow9.scaleX = 0.12232717242392994;
		arrow9.scaleY = 0.12232717242392994;
		arrow9.tintTopLeft = 16448250;
		arrow9.tintTopRight = 16250871;
		arrow9.tintBottomLeft = 16184821;
		arrow9.body.setSize(2000, 2000, false);

		// arrow10
		const arrow10 = this.physics.add.sprite(2706, 174, "short_straight_up");
		arrow10.scaleX = 0.12232717242392994;
		arrow10.scaleY = 0.12232717242392994;
		arrow10.tintTopLeft = 16448250;
		arrow10.tintTopRight = 16250871;
		arrow10.tintBottomLeft = 16184821;
		arrow10.body.setSize(2000, 2000, false);

		// arrow7
		const arrow7 = this.physics.add.sprite(2691, -263, "short_straight_up");
		arrow7.scaleX = 0.12232717242392994;
		arrow7.scaleY = 0.12232717242392994;
		arrow7.tintTopLeft = 16448250;
		arrow7.tintTopRight = 16250871;
		arrow7.tintBottomLeft = 16184821;
		arrow7.body.setSize(2000, 2000, false);

		// arrow6
		const arrow6 = this.physics.add.sprite(1993, -257, "short_straight_up");
		arrow6.scaleX = 0.12232717242392994;
		arrow6.scaleY = 0.12232717242392994;
		arrow6.tintTopLeft = 16448250;
		arrow6.tintTopRight = 16250871;
		arrow6.tintBottomLeft = 16184821;
		arrow6.body.setSize(2000, 2000, false);

		// Ratcheck2
		const ratcheck2 = this.add.image(1999, -331, "checkmark-xxl");
		ratcheck2.scaleX = 0.1121754501485466;
		ratcheck2.scaleY = 0.1121754501485466;
		ratcheck2.visible = false;
		ratcheck2.alpha = 0.5;
		ratcheck2.alphaTopLeft = 0.5;
		ratcheck2.alphaTopRight = 0.5;
		ratcheck2.alphaBottomLeft = 0.5;
		ratcheck2.alphaBottomRight = 0.5;

		// fire_escape_steps_up_side_1
		const fire_escape_steps_up_side_1 = this.add.image(4699, -797, "fire_escape_steps_up_side_1");
		fire_escape_steps_up_side_1.scaleX = 0.5716332192788011;
		fire_escape_steps_up_side_1.scaleY = 0.5716332192788011;
		fire_escape_steps_up_side_1.flipX = true;

		// yellow_side_srone_left_2
		const yellow_side_srone_left_2 = this.add.tileSprite(4652, -439, 100, 850, "yellow_side_srone_left");
		yellow_side_srone_left_2.scaleX = 0.47528198637465846;
		yellow_side_srone_left_2.scaleY = 1.3427459046641574;
		yellow_side_srone_left_2.flipX = true;
		yellow_side_srone_left_2.alpha = 0.8;
		yellow_side_srone_left_2.alphaTopLeft = 0.8;
		yellow_side_srone_left_2.alphaTopRight = 0.8;
		yellow_side_srone_left_2.alphaBottomLeft = 0.8;
		yellow_side_srone_left_2.alphaBottomRight = 0.8;
		yellow_side_srone_left_2.tileScaleY = 0.5;

		// blocksep1
		const blocksep1 = this.add.nineslice(4079, -1008, "block_separator_01", undefined, 1338, 0, 269, 184, 0, 0);
		blocksep1.scaleX = 0.9169478607878823;
		blocksep1.scaleY = 0.385783340536251;

		// blocktop2
		const blocktop2 = this.add.nineslice(4078, 159, "block_top", undefined, 1611, 173, 414, 374, -2, -25);
		blocktop2.scaleX = 0.7833153949713022;
		blocktop2.scaleY = 0.30056698304053675;

		// Fishcheck2
		const fishcheck2 = this.add.image(2685, -340, "checkmark-xxl");
		fishcheck2.scaleX = 0.1121754501485466;
		fishcheck2.scaleY = 0.1121754501485466;
		fishcheck2.alpha = 0.5;
		fishcheck2.alphaTopLeft = 0.5;
		fishcheck2.alphaTopRight = 0.5;
		fishcheck2.alphaBottomLeft = 0.5;
		fishcheck2.alphaBottomRight = 0.5;

		// firescape
		const firescape = this.physics.add.sprite(4663, -751, "fire_escape_platform_1");
		firescape.scaleX = 0.8726904200702011;
		firescape.scaleY = 0.8726904200702011;
		firescape.body.setOffset(0, 100);
		firescape.body.setSize(219, 115, false);

		// blocksep2
		const blocksep2 = this.add.tileSprite(4079, -425, 1575, 36, "block_wall_top");
		blocksep2.scaleX = 0.76;
		blocksep2.scaleY = 0.32579245333998536;
		blocksep2.tileScaleX = 0.917;
		blocksep2.tileScaleY = 1.5;

		// Spidercheck2
		const spidercheck2 = this.add.image(2006, 90, "checkmark-xxl");
		spidercheck2.scaleX = 0.1121754501485466;
		spidercheck2.scaleY = 0.1121754501485466;
		spidercheck2.alpha = 0.5;
		spidercheck2.alphaTopLeft = 0.5;
		spidercheck2.alphaTopRight = 0.5;
		spidercheck2.alphaBottomLeft = 0.5;
		spidercheck2.alphaBottomRight = 0.5;

		// Birdcheck2
		const birdcheck2 = this.add.image(2707, 92, "checkmark-xxl");
		birdcheck2.scaleX = 0.1121754501485466;
		birdcheck2.scaleY = 0.1121754501485466;
		birdcheck2.alpha = 0.5;
		birdcheck2.alphaTopLeft = 0.5;
		birdcheck2.alphaTopRight = 0.5;
		birdcheck2.alphaBottomLeft = 0.5;
		birdcheck2.alphaBottomRight = 0.5;

		// Mousecheck2
		const mousecheck2 = this.add.image(2347, 95, "checkmark-xxl");
		mousecheck2.scaleX = 0.1121754501485466;
		mousecheck2.scaleY = 0.1121754501485466;
		mousecheck2.alpha = 0.5;
		mousecheck2.alphaTopLeft = 0.5;
		mousecheck2.alphaTopRight = 0.5;
		mousecheck2.alphaBottomLeft = 0.5;
		mousecheck2.alphaBottomRight = 0.5;

		// openwindowlove2
		const openwindowlove2 = this.add.image(2242, -742, "window_01_open");
		openwindowlove2.scaleX = 0.7767224245044714;
		openwindowlove2.scaleY = 0.7767224245044714;
		openwindowlove2.visible = false;

		// heart2loveroom
		const heart2loveroom = this.physics.add.sprite(2242, -728, "100-percent");
		heart2loveroom.scaleX = 0.1344739131946201;
		heart2loveroom.scaleY = 0.1344739131946201;
		heart2loveroom.visible = false;
		heart2loveroom.body.setSize(256, 256, false);

		// firescape2
		const firescape2 = this.physics.add.sprite(3494, -206, "fire_escape_platform_1");
		firescape2.scaleX = 0.8726904200702011;
		firescape2.scaleY = 0.8726904200702011;
		firescape2.body.setOffset(0, 100);
		firescape2.body.setSize(219, 115, false);

		// step333
		const step333 = this.physics.add.sprite(3757, -593, "step");
		step333.name = "step333";
		step333.scaleX = 0.4597905632442396;
		step333.scaleY = 0.4597905632442396;
		step333.visible = false;
		step333.body.checkCollision.down = false;
		step333.body.checkCollision.left = false;
		step333.body.checkCollision.right = false;
		step333.body.pushable = false;
		step333.body.immovable = true;
		step333.body.setSize(180, 32, false);

		// fishitem3
		const fishitem3 = this.physics.add.sprite(4275, -117, "__female_gambusia_swim_000");
		fishitem3.scaleX = 0.10286225103379901;
		fishitem3.scaleY = 0.10286225103379901;
		fishitem3.tintTopLeft = 4276031;
		fishitem3.tintTopRight = 4210752;
		fishitem3.tintBottomLeft = 4735811;
		fishitem3.tintBottomRight = 4802889;
		fishitem3.body.setSize(550, 240, false);

		// mouseitem3
		const mouseitem3 = this.physics.add.sprite(3755, -632, "__grey_mouse_walk_000");
		mouseitem3.scaleX = 0.13345414075092935;
		mouseitem3.scaleY = 0.13345414075092935;
		mouseitem3.tintTopLeft = 4276031;
		mouseitem3.tintTopRight = 4210752;
		mouseitem3.tintBottomLeft = 4735811;
		mouseitem3.tintBottomRight = 4802889;
		mouseitem3.body.setSize(442, 292, false);

		// ratitem3
		const ratitem3 = this.physics.add.sprite(3873, -119, "__grey_yellow_eyes_idle_standing_000");
		ratitem3.scaleX = 0.12937473066256244;
		ratitem3.scaleY = 0.12937473066256244;
		ratitem3.tintTopLeft = 4276031;
		ratitem3.tintTopRight = 4210752;
		ratitem3.tintBottomLeft = 4735811;
		ratitem3.tintBottomRight = 4802889;
		ratitem3.body.setSize(536, 268, false);

		// itemSpider3
		const itemSpider3 = this.physics.add.sprite(4095, -638, "__brown_spider_idle_008");
		itemSpider3.scaleX = 0.07761133935997001;
		itemSpider3.scaleY = 0.07761133935997001;
		itemSpider3.tintTopLeft = 4276031;
		itemSpider3.tintTopRight = 4210752;
		itemSpider3.tintBottomLeft = 4735811;
		itemSpider3.tintBottomRight = 4802889;
		itemSpider3.body.setSize(591, 661, false);

		// Birdcageitem3
		const birdcageitem3 = this.physics.add.sprite(4401, -635, "gold_bird_cage_closed_no_back_bars");
		birdcageitem3.scaleX = 0.08090658792800536;
		birdcageitem3.scaleY = 0.08090658792800536;
		birdcageitem3.tintTopLeft = 4276031;
		birdcageitem3.tintTopRight = 4210752;
		birdcageitem3.tintBottomLeft = 4735811;
		birdcageitem3.tintBottomRight = 4802889;
		birdcageitem3.body.setSize(413, 500, false);

		// arrow11
		const arrow11 = this.physics.add.sprite(3752, -527, "short_straight_up");
		arrow11.scaleX = 0.12232717242392994;
		arrow11.scaleY = 0.12232717242392994;
		arrow11.tintTopLeft = 16448250;
		arrow11.tintTopRight = 16250871;
		arrow11.tintBottomLeft = 16184821;
		arrow11.body.setSize(2000, 2000, false);

		// arrow12
		const arrow12 = this.physics.add.sprite(4095, -529, "short_straight_up");
		arrow12.scaleX = 0.12232717242392994;
		arrow12.scaleY = 0.12232717242392994;
		arrow12.tintTopLeft = 16448250;
		arrow12.tintTopRight = 16250871;
		arrow12.tintBottomLeft = 16184821;
		arrow12.body.setSize(2000, 2000, false);

		// arrow13
		const arrow13 = this.physics.add.sprite(4399, -535, "short_straight_up");
		arrow13.scaleX = 0.12232717242392994;
		arrow13.scaleY = 0.12232717242392994;
		arrow13.tintTopLeft = 16448250;
		arrow13.tintTopRight = 16250871;
		arrow13.tintBottomLeft = 16184821;
		arrow13.body.setSize(2000, 2000, false);

		// arrow14
		const arrow14 = this.physics.add.sprite(3872, -18, "short_straight_up");
		arrow14.scaleX = 0.12232717242392994;
		arrow14.scaleY = 0.12232717242392994;
		arrow14.tintTopLeft = 16448250;
		arrow14.tintTopRight = 16250871;
		arrow14.tintBottomLeft = 16184821;
		arrow14.body.setSize(2000, 2000, false);

		// arrow15
		const arrow15 = this.physics.add.sprite(4274.848359905316, -18.41335966674427, "short_straight_up");
		arrow15.scaleX = 0.12232717242392994;
		arrow15.scaleY = 0.12232717242392994;
		arrow15.tintTopLeft = 16448250;
		arrow15.tintTopRight = 16250871;
		arrow15.tintBottomLeft = 16184821;
		arrow15.body.setSize(2000, 2000, false);

		// Mousecheck3
		const mousecheck3 = this.add.image(3759, -630, "checkmark-xxl");
		mousecheck3.scaleX = 0.1121754501485466;
		mousecheck3.scaleY = 0.1121754501485466;
		mousecheck3.alpha = 0.5;
		mousecheck3.alphaTopLeft = 0.5;
		mousecheck3.alphaTopRight = 0.5;
		mousecheck3.alphaBottomLeft = 0.5;
		mousecheck3.alphaBottomRight = 0.5;

		// Birdcheck3
		const birdcheck3 = this.add.image(4401, -635, "checkmark-xxl");
		birdcheck3.scaleX = 0.1121754501485466;
		birdcheck3.scaleY = 0.1121754501485466;
		birdcheck3.alpha = 0.5;
		birdcheck3.alphaTopLeft = 0.5;
		birdcheck3.alphaTopRight = 0.5;
		birdcheck3.alphaBottomLeft = 0.5;
		birdcheck3.alphaBottomRight = 0.5;

		// spidercheck3
		const spidercheck3 = this.add.image(4096, -634, "checkmark-xxl");
		spidercheck3.scaleX = 0.1121754501485466;
		spidercheck3.scaleY = 0.1121754501485466;
		spidercheck3.alpha = 0.5;
		spidercheck3.alphaTopLeft = 0.5;
		spidercheck3.alphaTopRight = 0.5;
		spidercheck3.alphaBottomLeft = 0.5;
		spidercheck3.alphaBottomRight = 0.5;

		// ratcheck3
		const ratcheck3 = this.add.image(3875, -116, "checkmark-xxl");
		ratcheck3.scaleX = 0.1121754501485466;
		ratcheck3.scaleY = 0.1121754501485466;
		ratcheck3.alpha = 0.5;
		ratcheck3.alphaTopLeft = 0.5;
		ratcheck3.alphaTopRight = 0.5;
		ratcheck3.alphaBottomLeft = 0.5;
		ratcheck3.alphaBottomRight = 0.5;

		// fishcheck3
		const fishcheck3 = this.add.image(4279, -116, "checkmark-xxl");
		fishcheck3.scaleX = 0.1121754501485466;
		fishcheck3.scaleY = 0.1121754501485466;
		fishcheck3.alpha = 0.5;
		fishcheck3.alphaTopLeft = 0.5;
		fishcheck3.alphaTopRight = 0.5;
		fishcheck3.alphaBottomLeft = 0.5;
		fishcheck3.alphaBottomRight = 0.5;

		// platformtwo2
		const platformtwo2 = this.add.tileSprite(5149, 477, 1100, 29, "block_wall_top");
		platformtwo2.scaleX = 0.85;
		platformtwo2.scaleY = 0.5243546465936467;
		platformtwo2.visible = false;
		platformtwo2.alpha = 0.8;
		platformtwo2.alphaTopLeft = 0.8;
		platformtwo2.alphaTopRight = 0.8;
		platformtwo2.alphaBottomLeft = 0.8;
		platformtwo2.alphaBottomRight = 0.8;
		platformtwo2.tintTopLeft = 13615536;
		platformtwo2.tintTopRight = 13813939;
		platformtwo2.tintBottomLeft = 13091483;
		platformtwo2.tintBottomRight = 12169859;

		// washy2
		const washy2 = this.add.rectangle(1496, 148, 55, 128);
		washy2.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		washy2.scaleX = 11;
		washy2.scaleY = 0.01;
		washy2.isFilled = true;
		washy2.fillColor = 1442049;

		// blue_side_srone_left_2
		const blue_side_srone_left_2 = this.add.tileSprite(6716, -1490, 100, 800, "blue_side_srone_left");
		blue_side_srone_left_2.scaleX = 0.6434618337976579;
		blue_side_srone_left_2.scaleY = 0.85;
		blue_side_srone_left_2.flipX = true;
		blue_side_srone_left_2.visible = false;
		blue_side_srone_left_2.tileScaleY = 0.6;

		// blue_side_srone_left_3
		const blue_side_srone_left_3 = this.add.tileSprite(6444, -1491, 100, 800, "blue_side_srone_left");
		blue_side_srone_left_3.scaleX = 0.6434618337976579;
		blue_side_srone_left_3.scaleY = 0.85;
		blue_side_srone_left_3.visible = false;
		blue_side_srone_left_3.tileScaleY = 0.6;

		// blocksepred1
		const blocksepred1 = this.add.nineslice(6239, -1142, "block_separator_01", undefined, 1338, 0, 269, 184, 0, 0);
		blocksepred1.scaleX = 0.96;
		blocksepred1.scaleY = 0.385783340536251;

		// firescape5
		const firescape5 = this.physics.add.sprite(5633, -285, "fire_escape_platform_1");
		firescape5.scaleX = 0.8726904200702011;
		firescape5.scaleY = 0.8726904200702011;
		firescape5.body.setOffset(0, 100);
		firescape5.body.setSize(219, 115, false);

		// roofb4
		const roofb4 = this.add.nineslice(6578, -1701, "block_separator_01", undefined, 1338, 0, 269, 184, 0, 0);
		roofb4.scaleX = 0.25;
		roofb4.scaleY = 0.385783340536251;

		// large_shop_window_2
		const large_shop_window_2 = this.add.image(5936, 294, "large_shop_window");
		large_shop_window_2.scaleX = 0.41381830030244215;
		large_shop_window_2.scaleY = 0.41381830030244215;
		large_shop_window_2.alpha = 0.9;
		large_shop_window_2.alphaTopLeft = 0.9;
		large_shop_window_2.alphaTopRight = 0.9;
		large_shop_window_2.alphaBottomLeft = 0.9;
		large_shop_window_2.alphaBottomRight = 0.9;

		// large_shop_window_3
		const large_shop_window_3 = this.add.image(6567, 294, "large_shop_window");
		large_shop_window_3.scaleX = 0.41381830030244215;
		large_shop_window_3.scaleY = 0.41381830030244215;
		large_shop_window_3.alpha = 0.9;
		large_shop_window_3.alphaTopLeft = 0.9;
		large_shop_window_3.alphaTopRight = 0.9;
		large_shop_window_3.alphaBottomLeft = 0.9;
		large_shop_window_3.alphaBottomRight = 0.9;

		// washing
		const washing = this.add.image(5247, -569, "washing_06");
		washing.scaleX = 0.6468325780301887;
		washing.scaleY = 0.6468325780301887;

		// clothunderpants_1
		const clothunderpants_1 = this.physics.add.sprite(4918, -577, "washing_02");
		clothunderpants_1.scaleX = 0.6501472038009779;
		clothunderpants_1.scaleY = 0.6501472038009779;
		clothunderpants_1.body.setSize(88, 76, false);

		// trashcanbl1
		const trashcanbl1 = this.physics.add.sprite(5824, 573, "trash_can_lid");
		trashcanbl1.scaleX = 0.19225678948774275;
		trashcanbl1.scaleY = 0.19225678948774275;
		trashcanbl1.body.useDamping = true;
		trashcanbl1.body.setOffset(0, 60);
		trashcanbl1.body.setSize(442, 561, false);

		// trashcanlast
		const trashcanlast = this.physics.add.sprite(8606, 571, "trash_can_lid");
		trashcanlast.scaleX = 0.19225678948774275;
		trashcanlast.scaleY = 0.19225678948774275;
		trashcanlast.flipX = true;
		trashcanlast.tintTopLeft = 14008512;
		trashcanlast.tintTopRight = 12366771;
		trashcanlast.body.setOffset(0, 60);
		trashcanlast.body.setSize(442, 561, false);

		// parachute2
		const parachute2 = this.physics.add.sprite(6567, 234, "awning_blue_large");
		parachute2.scaleX = 0.5183229984833753;
		parachute2.scaleY = 0.5183229984833753;
		parachute2.body.checkCollision.down = false;
		parachute2.body.checkCollision.left = false;
		parachute2.body.checkCollision.right = false;
		parachute2.body.pushable = false;
		parachute2.body.immovable = true;
		parachute2.body.setOffset(0, 50);
		parachute2.body.setSize(581, 102, false);

		// parachute1
		const parachute1 = this.physics.add.sprite(5939, 232, "awning_blue_large");
		parachute1.scaleX = 0.5183229984833753;
		parachute1.scaleY = 0.5183229984833753;
		parachute1.body.checkCollision.down = false;
		parachute1.body.checkCollision.left = false;
		parachute1.body.checkCollision.right = false;
		parachute1.body.pushable = false;
		parachute1.body.immovable = true;
		parachute1.body.setOffset(0, 50);
		parachute1.body.setSize(581, 102, false);

		// mail_box
		const mail_box = this.physics.add.sprite(6679, 569, "mail_box");
		mail_box.scaleX = 0.2967146364476922;
		mail_box.scaleY = 0.2967146364476922;
		mail_box.body.setSize(281, 431, false);

		// roofb4t
		const roofb4t = this.add.nineslice(5924, -1457, "block_separator_01", undefined, 1338, 0, 269, 184, 0, 0);
		roofb4t.scaleX = 0.38;
		roofb4t.scaleY = 0.385783340536251;

		// trashsidel1
		const trashsidel1 = this.physics.add.sprite(6296, 582, "trash_can_group");
		trashsidel1.scaleX = 0.1721663411708699;
		trashsidel1.scaleY = 0.1721663411708699;
		trashsidel1.body.setOffset(0, 100);
		trashsidel1.body.setSize(420, 364, false);

		// steplred2
		const steplred2 = this.physics.add.sprite(6484, -110, "step");
		steplred2.name = "steplred2";
		steplred2.scaleX = 0.4597905632442396;
		steplred2.scaleY = 0.4597905632442396;
		steplred2.visible = false;
		steplred2.body.checkCollision.down = false;
		steplred2.body.checkCollision.left = false;
		steplred2.body.checkCollision.right = false;
		steplred2.body.pushable = false;
		steplred2.body.immovable = true;
		steplred2.body.setSize(180, 32, false);

		// steplred1
		const steplred1 = this.physics.add.sprite(6005, -109, "step");
		steplred1.name = "steplred1";
		steplred1.scaleX = 0.4597905632442396;
		steplred1.scaleY = 0.4597905632442396;
		steplred1.visible = false;
		steplred1.body.checkCollision.down = false;
		steplred1.body.checkCollision.left = false;
		steplred1.body.checkCollision.right = false;
		steplred1.body.pushable = false;
		steplred1.body.immovable = true;
		steplred1.body.setSize(180, 32, false);

		// large_shop_window_1
		const large_shop_window_1 = this.add.image(6258, -776, "large_shop_window");
		large_shop_window_1.scaleX = 0.41381830030244215;
		large_shop_window_1.scaleY = 0.41381830030244215;
		large_shop_window_1.alpha = 0.9;
		large_shop_window_1.alphaTopLeft = 0.9;
		large_shop_window_1.alphaTopRight = 0.9;
		large_shop_window_1.alphaBottomLeft = 0.9;
		large_shop_window_1.alphaBottomRight = 0.9;

		// parachute3
		const parachute3 = this.physics.add.sprite(6261, -827, "awning_blue_large");
		parachute3.scaleX = 0.5183229984833753;
		parachute3.scaleY = 0.5183229984833753;
		parachute3.body.checkCollision.down = false;
		parachute3.body.checkCollision.left = false;
		parachute3.body.checkCollision.right = false;
		parachute3.body.pushable = false;
		parachute3.body.immovable = true;
		parachute3.body.setOffset(0, 50);
		parachute3.body.setSize(581, 102, false);

		// steplredlev4
		const steplredlev4 = this.physics.add.sprite(5864, -756, "step");
		steplredlev4.name = "steplredlev4";
		steplredlev4.scaleX = 0.4597905632442396;
		steplredlev4.scaleY = 0.4597905632442396;
		steplredlev4.visible = false;
		steplredlev4.body.checkCollision.down = false;
		steplredlev4.body.checkCollision.left = false;
		steplredlev4.body.checkCollision.right = false;
		steplredlev4.body.pushable = false;
		steplredlev4.body.immovable = true;
		steplredlev4.body.setSize(180, 32, false);

		// steplredredl3
		const steplredredl3 = this.physics.add.sprite(6627, -755, "step");
		steplredredl3.name = "steplredredl3";
		steplredredl3.scaleX = 0.4597905632442396;
		steplredredl3.scaleY = 0.4597905632442396;
		steplredredl3.visible = false;
		steplredredl3.body.checkCollision.down = false;
		steplredredl3.body.checkCollision.left = false;
		steplredredl3.body.checkCollision.right = false;
		steplredredl3.body.pushable = false;
		steplredredl3.body.immovable = true;
		steplredredl3.body.setSize(180, 32, false);

		// window44
		const window44 = new WindowClass(this, 6006, -171);
		this.add.existing(window44);

		// window43
		const window43 = new WindowClass(this, 6486, -169);
		this.add.existing(window43);

		// window45
		const window45 = new WindowClass(this, 5849, -808);
		this.add.existing(window45);

		// window42
		const window42 = new WindowClass(this, 6604, -811);
		this.add.existing(window42);

		// window41
		const window41 = new WindowClass(this, 5925, -1304);
		this.add.existing(window41);

		// window
		const window = this.add.image(6585, -1502, "window_01");
		window.scaleX = 0.8058046867648366;
		window.scaleY = 0.8058046867648366;

		// ratitem4
		const ratitem4 = this.physics.add.sprite(6005, -154, "__grey_yellow_eyes_idle_standing_000");
		ratitem4.scaleX = 0.12937473066256244;
		ratitem4.scaleY = 0.12937473066256244;
		ratitem4.tintTopLeft = 4276031;
		ratitem4.tintTopRight = 4210752;
		ratitem4.tintBottomLeft = 4735811;
		ratitem4.tintBottomRight = 4802889;
		ratitem4.body.setSize(536, 268, false);

		// fishitem4
		const fishitem4 = this.physics.add.sprite(5849, -790, "__female_gambusia_swim_000");
		fishitem4.scaleX = 0.10286225103379901;
		fishitem4.scaleY = 0.10286225103379901;
		fishitem4.tintTopLeft = 4276031;
		fishitem4.tintTopRight = 4210752;
		fishitem4.tintBottomLeft = 4735811;
		fishitem4.tintBottomRight = 4802889;
		fishitem4.body.setSize(550, 240, false);

		// Birdcageitem4
		const birdcageitem4 = this.physics.add.sprite(6486, -154, "gold_bird_cage_closed_no_back_bars");
		birdcageitem4.scaleX = 0.08090658792800536;
		birdcageitem4.scaleY = 0.08090658792800536;
		birdcageitem4.tintTopLeft = 4276031;
		birdcageitem4.tintTopRight = 4210752;
		birdcageitem4.tintBottomLeft = 4735811;
		birdcageitem4.tintBottomRight = 4802889;
		birdcageitem4.body.setSize(413, 500, false);

		// itemSpider4
		const itemSpider4 = this.physics.add.sprite(6603, -797, "__brown_spider_idle_008");
		itemSpider4.scaleX = 0.07761133935997001;
		itemSpider4.scaleY = 0.07761133935997001;
		itemSpider4.tintTopLeft = 4276031;
		itemSpider4.tintTopRight = 4210752;
		itemSpider4.tintBottomLeft = 4735811;
		itemSpider4.tintBottomRight = 4802889;
		itemSpider4.body.setSize(591, 661, false);

		// mouseitem4
		const mouseitem4 = this.physics.add.sprite(5922, -1289, "__grey_mouse_walk_000");
		mouseitem4.scaleX = 0.13345414075092935;
		mouseitem4.scaleY = 0.13345414075092935;
		mouseitem4.tintTopLeft = 4276031;
		mouseitem4.tintTopRight = 4210752;
		mouseitem4.tintBottomLeft = 4735811;
		mouseitem4.tintBottomRight = 4802889;
		mouseitem4.body.setSize(442, 292, false);

		// aircon_1
		const aircon_1 = this.add.image(5756, -1493, "aircon");
		aircon_1.scaleX = 0.8249207473345339;
		aircon_1.scaleY = 0.8249207473345339;

		// arial_2
		const arial_2 = this.add.image(6473, -1735, "arial");
		arial_2.scaleX = 0.6842914831405458;
		arial_2.scaleY = 0.6842914831405458;

		// openwindowlove4
		const openwindowlove4 = this.add.image(6585, -1503, "window_01_open");
		openwindowlove4.scaleX = 0.7767224245044714;
		openwindowlove4.scaleY = 0.7767224245044714;
		openwindowlove4.visible = false;

		// steplredlev5
		const steplredlev5 = this.physics.add.sprite(5923, -1250, "step");
		steplredlev5.name = "steplredlev5";
		steplredlev5.scaleX = 0.4597905632442396;
		steplredlev5.scaleY = 0.4597905632442396;
		steplredlev5.visible = false;
		steplredlev5.body.checkCollision.down = false;
		steplredlev5.body.checkCollision.left = false;
		steplredlev5.body.checkCollision.right = false;
		steplredlev5.body.pushable = false;
		steplredlev5.body.immovable = true;
		steplredlev5.body.setSize(180, 32, false);

		// heart4loveroom
		const heart4loveroom = this.physics.add.sprite(6584, -1489, "100-percent");
		heart4loveroom.scaleX = 0.1344739131946201;
		heart4loveroom.scaleY = 0.1344739131946201;
		heart4loveroom.visible = false;
		heart4loveroom.body.setSize(256, 256, false);

		// fishcheck4
		const fishcheck4 = this.add.image(5847, -792, "checkmark-xxl");
		fishcheck4.scaleX = 0.1121754501485466;
		fishcheck4.scaleY = 0.1121754501485466;
		fishcheck4.alpha = 0.5;
		fishcheck4.alphaTopLeft = 0.5;
		fishcheck4.alphaTopRight = 0.5;
		fishcheck4.alphaBottomLeft = 0.5;
		fishcheck4.alphaBottomRight = 0.5;

		// ratcheck4
		const ratcheck4 = this.add.image(6013, -158, "checkmark-xxl");
		ratcheck4.scaleX = 0.1121754501485466;
		ratcheck4.scaleY = 0.1121754501485466;
		ratcheck4.alpha = 0.5;
		ratcheck4.alphaTopLeft = 0.5;
		ratcheck4.alphaTopRight = 0.5;
		ratcheck4.alphaBottomLeft = 0.5;
		ratcheck4.alphaBottomRight = 0.5;

		// spidercheck4
		const spidercheck4 = this.add.image(6596, -807, "checkmark-xxl");
		spidercheck4.scaleX = 0.1121754501485466;
		spidercheck4.scaleY = 0.1121754501485466;
		spidercheck4.alpha = 0.5;
		spidercheck4.alphaTopLeft = 0.5;
		spidercheck4.alphaTopRight = 0.5;
		spidercheck4.alphaBottomLeft = 0.5;
		spidercheck4.alphaBottomRight = 0.5;

		// birdcheck4
		const birdcheck4 = this.add.image(6484, -162, "checkmark-xxl");
		birdcheck4.scaleX = 0.1121754501485466;
		birdcheck4.scaleY = 0.1121754501485466;
		birdcheck4.alpha = 0.5;
		birdcheck4.alphaTopLeft = 0.5;
		birdcheck4.alphaTopRight = 0.5;
		birdcheck4.alphaBottomLeft = 0.5;
		birdcheck4.alphaBottomRight = 0.5;

		// grey_block_10
		const grey_block_10 = this.add.image(13334, -923, "grey_block");
		grey_block_10.scaleX = 1.2915975141972877;
		grey_block_10.scaleY = 1.2915975141972877;

		// mousecheck4
		const mousecheck4 = this.add.image(5922, -1291, "checkmark-xxl");
		mousecheck4.scaleX = 0.1121754501485466;
		mousecheck4.scaleY = 0.1121754501485466;
		mousecheck4.alpha = 0.5;
		mousecheck4.alphaTopLeft = 0.5;
		mousecheck4.alphaTopRight = 0.5;
		mousecheck4.alphaBottomLeft = 0.5;
		mousecheck4.alphaBottomRight = 0.5;

		// arrow16
		const arrow16 = this.physics.add.sprite(6004, -44, "short_straight_up");
		arrow16.scaleX = 0.12232717242392994;
		arrow16.scaleY = 0.12232717242392994;
		arrow16.tintTopLeft = 16448250;
		arrow16.tintTopRight = 16250871;
		arrow16.tintBottomLeft = 16184821;
		arrow16.body.setSize(2000, 2000, false);

		// arrow17
		const arrow17 = this.physics.add.sprite(5848, -676, "short_straight_up");
		arrow17.scaleX = 0.12232717242392994;
		arrow17.scaleY = 0.12232717242392994;
		arrow17.tintTopLeft = 16448250;
		arrow17.tintTopRight = 16250871;
		arrow17.tintBottomLeft = 16184821;
		arrow17.body.setSize(2000, 2000, false);

		// arrow18
		const arrow18 = this.physics.add.sprite(6608, -683, "short_straight_up");
		arrow18.scaleX = 0.12232717242392994;
		arrow18.scaleY = 0.12232717242392994;
		arrow18.tintTopLeft = 16448250;
		arrow18.tintTopRight = 16250871;
		arrow18.tintBottomLeft = 16184821;
		arrow18.body.setSize(2000, 2000, false);

		// arrow19
		const arrow19 = this.physics.add.sprite(5926, -1180, "short_straight_up");
		arrow19.scaleX = 0.12232717242392994;
		arrow19.scaleY = 0.12232717242392994;
		arrow19.tintTopLeft = 16448250;
		arrow19.tintTopRight = 16250871;
		arrow19.tintBottomLeft = 16184821;
		arrow19.body.setSize(2000, 2000, false);

		// arrow20
		const arrow20 = this.physics.add.sprite(6487, -40, "short_straight_up");
		arrow20.scaleX = 0.12232717242392994;
		arrow20.scaleY = 0.12232717242392994;
		arrow20.tintTopLeft = 16448250;
		arrow20.tintTopRight = 16250871;
		arrow20.tintBottomLeft = 16184821;
		arrow20.body.setSize(2000, 2000, false);

		// grey_block_1
		const grey_block_1 = this.add.image(2969, 4582, "grey_block");
		grey_block_1.scaleX = 0.9469061322854652;
		grey_block_1.scaleY = 0.9469061322854652;
		grey_block_1.visible = false;

		// green_door_01
		const green_door_01 = this.add.image(12152, -2479, "green_door_01");
		green_door_01.scaleX = 0.7178729484752997;
		green_door_01.scaleY = 0.7178729484752997;

		// door_frame
		const door_frame = this.add.image(12154, -2495, "door_frame");
		door_frame.scaleX = 0.6796927703177682;
		door_frame.scaleY = 0.6796927703177682;

		// woofie
		const woofie = new DogExterior(this, 1894, 577);
		this.add.existing(woofie);
		woofie.body.collideWorldBounds = true;
		woofie.body.onWorldBounds = true;
		woofie.body.checkCollision.up = true;
		woofie.body.checkCollision.down = true;
		woofie.body.checkCollision.left = true;
		woofie.body.checkCollision.right = true;
		woofie.body.immovable = true;
		woofie.body.setOffset(120, 0);
		woofie.body.setSize(100, 100, false);

		// grey_block_lift_shaft_2
		const grey_block_lift_shaft_2 = this.add.image(2404, 1013, "grey_block_lift_shaft");
		grey_block_lift_shaft_2.scaleX = 1.5022358089872774;
		grey_block_lift_shaft_2.scaleY = 1.5022358089872774;

		// grey_block_lift_shaft_3
		const grey_block_lift_shaft_3 = this.add.image(8373, -2294, "grey_block_lift_shaft");
		grey_block_lift_shaft_3.scaleX = 1.2358305159014518;
		grey_block_lift_shaft_3.scaleY = 1.2358305159014518;

		// trashcanb
		const trashcanb = this.physics.add.sprite(2620, 4393, "trash_can_lid");
		trashcanb.scaleX = 0.19225678948774275;
		trashcanb.scaleY = 0.19225678948774275;
		trashcanb.flipX = true;
		trashcanb.tintTopLeft = 14008512;
		trashcanb.tintTopRight = 12366771;
		trashcanb.body.setOffset(0, 60);
		trashcanb.body.setSize(442, 561, false);

		// blue_side_srone_left_8
		const blue_side_srone_left_8 = this.add.tileSprite(15073, -1680, 100, 800, "blue_side_srone_left");
		blue_side_srone_left_8.scaleX = 0.6434618337976579;
		blue_side_srone_left_8.scaleY = 0.5;
		blue_side_srone_left_8.tileScaleY = 0.9;

		// window_3
		const window_3 = this.add.image(15689, -1651, "window_3");
		window_3.scaleX = 0.8013484370196791;
		window_3.scaleY = 0.8013484370196791;

		// window_2
		const window_2 = this.add.image(13712, -2704, "window_3");
		window_2.scaleX = 0.8007462717120388;
		window_2.scaleY = 0.8007462717120388;

		// grey_block_5
		const grey_block_5 = this.add.image(8374, -1549, "grey_block");
		grey_block_5.scaleX = 1.2915975141972877;
		grey_block_5.scaleY = 1.2915975141972877;

		// grey_block_6
		const grey_block_6 = this.add.image(8379, -1970, "grey_block");
		grey_block_6.scaleX = 1.2915975141972877;
		grey_block_6.scaleY = 1.2915975141972877;

		// blue_side_srone_left_9
		const blue_side_srone_left_9 = this.add.tileSprite(8779, -1755, 100, 1730, "blue_side_srone_left");
		blue_side_srone_left_9.scaleX = 0.6434618337976579;
		blue_side_srone_left_9.scaleY = 0.5;
		blue_side_srone_left_9.flipX = true;
		blue_side_srone_left_9.tileScaleY = 0.9;

		// window_5
		const window_5 = this.add.image(12404, -2072, "window_3");
		window_5.scaleX = 0.8007462717120388;
		window_5.scaleY = 0.8007462717120388;

		// chimney_1
		const chimney_1 = this.add.image(8905, -1400, "chimney");
		chimney_1.scaleX = 0.8979682984570669;
		chimney_1.scaleY = 0.8979682984570669;

		// blue_side_srone_left_10
		const blue_side_srone_left_10 = this.add.tileSprite(7967, -1757, 100, 1730, "blue_side_srone_left");
		blue_side_srone_left_10.scaleX = 0.6434618337976579;
		blue_side_srone_left_10.scaleY = 0.5;
		blue_side_srone_left_10.tileScaleY = 0.9;

		// blockwallmid_2
		const blockwallmid_2 = this.add.tileSprite(13726, -1838, 460, 20, "block_wall_top");
		blockwallmid_2.scaleY = 0.6352806194156675;
		blockwallmid_2.angle = 90;
		blockwallmid_2.flipX = true;

		// small_shop_window_1
		const small_shop_window_1 = this.add.image(9391, 217, "small_shop_window");
		small_shop_window_1.scaleX = 0.3667426249529734;
		small_shop_window_1.scaleY = 0.3667426249529734;
		small_shop_window_1.alpha = 0.8;
		small_shop_window_1.alphaTopLeft = 0.8;
		small_shop_window_1.alphaTopRight = 0.8;
		small_shop_window_1.alphaBottomLeft = 0.8;
		small_shop_window_1.alphaBottomRight = 0.8;

		// windowlast1
		const windowlast1 = this.physics.add.sprite(8091, 328, "small_shop_window");
		windowlast1.scaleX = 0.42151863203897044;
		windowlast1.scaleY = 0.42151863203897044;
		windowlast1.alpha = 0.8;
		windowlast1.alphaTopLeft = 0.8;
		windowlast1.alphaTopRight = 0.8;
		windowlast1.alphaBottomLeft = 0.8;
		windowlast1.alphaBottomRight = 0.8;
		windowlast1.body.setOffset(0, 225);
		windowlast1.body.setSize(263, 241, false);

		// windowlast2
		const windowlast2 = this.physics.add.sprite(8537, 155, "large_shop_window");
		windowlast2.scaleX = 0.46959442559563286;
		windowlast2.scaleY = 0.46959442559563286;
		windowlast2.alpha = 0.8;
		windowlast2.alphaTopLeft = 0.8;
		windowlast2.alphaTopRight = 0.8;
		windowlast2.alphaBottomLeft = 0.8;
		windowlast2.alphaBottomRight = 0.8;
		windowlast2.body.setOffset(0, 225);
		windowlast2.body.setSize(460, 241, false);

		// blue_side_srone_left_11
		const blue_side_srone_left_11 = this.add.tileSprite(13188, -1220, 100, 1060, "blue_side_srone_left");
		blue_side_srone_left_11.scaleX = 0.6434618337976579;
		blue_side_srone_left_11.scaleY = 0.5;
		blue_side_srone_left_11.flipX = true;
		blue_side_srone_left_11.tileScaleY = 0.9;

		// blue_side_srone_left_12
		const blue_side_srone_left_12 = this.add.tileSprite(12706, -1999, 100, 1060, "blue_side_srone_left");
		blue_side_srone_left_12.scaleX = 0.6434618337976579;
		blue_side_srone_left_12.scaleY = 0.4266172157168978;
		blue_side_srone_left_12.flipX = true;
		blue_side_srone_left_12.tileScaleY = 0.9;

		// firescape_1
		const firescape_1 = this.physics.add.sprite(8967, 0, "fire_escape_platform_1");
		firescape_1.scaleX = 0.8726904200702011;
		firescape_1.scaleY = 0.8726904200702011;
		firescape_1.body.setOffset(0, 100);
		firescape_1.body.setSize(219, 115, false);

		// blockwallmid
		const blockwallmid = this.add.tileSprite(13026, -1509, 970, 29, "block_wall_top");
		blockwallmid.scaleX = 0.9;
		blockwallmid.scaleY = 0.6587029692541941;
		blockwallmid.flipX = true;
		blockwallmid.tilePositionX = 105;
		blockwallmid.tileScaleX = 1.29;

		// billboard_1
		const billboard_1 = this.physics.add.sprite(12820, -2084, "small_bill_board");
		billboard_1.scaleX = 0.7677804810584435;
		billboard_1.scaleY = 0.758873178661238;
		billboard_1.alpha = 0.6;
		billboard_1.alphaTopLeft = 0.6;
		billboard_1.alphaTopRight = 0.6;
		billboard_1.alphaBottomLeft = 0.6;
		billboard_1.alphaBottomRight = 0.6;
		billboard_1.tintTopLeft = 10661318;
		billboard_1.tintTopRight = 12568280;
		billboard_1.tintBottomLeft = 4483748;
		billboard_1.tintBottomRight = 5080508;
		billboard_1.body.setSize(277, 103, false);

		// shadowFx_3
		billboard_1.preFX.addShadow(0, -1, 0.1, 1, 0, 3, 1);

		// text_1
		const text_1 = this.add.text(12741, -2114, "", {});
		text_1.preFX.padding = 0.2;
		text_1.scaleX = 1.5535229736724894;
		text_1.scaleY = 1.5381343995806056;
		text_1.text = "Watch it";
		text_1.setStyle({ "baselineX": 3, "fontFamily": "Awesome", "fontSize": "30px", "maxLines": 1, "stroke": "#060606ff", "strokeThickness": 1.2, "shadow.offsetX": 1, "shadow.offsetY": 1, "shadow.blur": 1, "shadow.fill": true, "resolution": 2 });
		text_1.setPadding({"left":10,"right":10});
		text_1.setLineSpacing(2);
		text_1.setWordWrapWidth(120);

		// platformtwo_1
		const platformtwo_1 = this.add.tileSprite(9333, 454, 1100, 29, "block_wall_top");
		platformtwo_1.scaleX = 0.6139297054737364;
		platformtwo_1.scaleY = 0.5243546465936467;
		platformtwo_1.visible = false;
		platformtwo_1.alpha = 0.8;
		platformtwo_1.alphaTopLeft = 0.8;
		platformtwo_1.alphaTopRight = 0.8;
		platformtwo_1.alphaBottomLeft = 0.8;
		platformtwo_1.alphaBottomRight = 0.8;
		platformtwo_1.tintTopLeft = 13615536;
		platformtwo_1.tintTopRight = 13813939;
		platformtwo_1.tintBottomLeft = 13091483;
		platformtwo_1.tintBottomRight = 12169859;

		// stepBlock1
		const stepBlock1 = new StepBlock(this, 8250, -85);
		this.add.existing(stepBlock1);
		stepBlock1.scaleX = 0.7371687156268603;
		stepBlock1.scaleY = 1.0115583323110042;
		stepBlock1.alpha = 0.4;

		// firescapelast1
		const firescapelast1 = this.physics.add.sprite(7846, -636, "fire_escape_platform_1");
		firescapelast1.scaleX = 0.8726904200702011;
		firescapelast1.scaleY = 0.8726904200702011;
		firescapelast1.flipX = true;
		firescapelast1.body.setOffset(0, 100);
		firescapelast1.body.setSize(219, 115, false);

		// platformtwo_2
		const platformtwo_2 = this.add.tileSprite(12218, -1456, 1100, 29, "block_wall_top");
		platformtwo_2.scaleX = 0.6139297054737364;
		platformtwo_2.scaleY = 0.5243546465936467;
		platformtwo_2.visible = false;
		platformtwo_2.alpha = 0.8;
		platformtwo_2.alphaTopLeft = 0.8;
		platformtwo_2.alphaTopRight = 0.8;
		platformtwo_2.alphaBottomLeft = 0.8;
		platformtwo_2.alphaBottomRight = 0.8;
		platformtwo_2.tintTopLeft = 13615536;
		platformtwo_2.tintTopRight = 13813939;
		platformtwo_2.tintBottomLeft = 13091483;
		platformtwo_2.tintBottomRight = 12169859;

		// stepBlock2
		const stepBlock2 = new StepBlock(this, 8612, -355);
		this.add.existing(stepBlock2);
		stepBlock2.scaleX = 0.847460760004689;
		stepBlock2.scaleY = 1.1030253813731088;
		stepBlock2.alpha = 0.4;

		// step51
		const step51 = this.physics.add.sprite(8176, -346, "step");
		step51.name = "step51";
		step51.scaleX = 0.4597905632442396;
		step51.scaleY = 0.4597905632442396;
		step51.visible = false;
		step51.body.checkCollision.down = false;
		step51.body.checkCollision.left = false;
		step51.body.checkCollision.right = false;
		step51.body.pushable = false;
		step51.body.immovable = true;
		step51.body.setSize(180, 32, false);

		// step52
		const step52 = this.physics.add.sprite(8710, -693, "step");
		step52.name = "step52";
		step52.scaleX = 0.4597905632442396;
		step52.scaleY = 0.4597905632442396;
		step52.visible = false;
		step52.body.checkCollision.down = false;
		step52.body.checkCollision.left = false;
		step52.body.checkCollision.right = false;
		step52.body.pushable = false;
		step52.body.immovable = true;
		step52.body.setSize(180, 32, false);

		// stepladderleft
		const stepladderleft = this.physics.add.sprite(7851, -570, "step");
		stepladderleft.name = "stepladderleft";
		stepladderleft.scaleX = 0.9778427422157434;
		stepladderleft.scaleY = 0.6141521468953506;
		stepladderleft.visible = false;
		stepladderleft.body.checkCollision.down = false;
		stepladderleft.body.checkCollision.left = false;
		stepladderleft.body.checkCollision.right = false;
		stepladderleft.body.pushable = false;
		stepladderleft.body.immovable = true;
		stepladderleft.body.setSize(180, 32, false);

		// stepladderleft1
		const stepladderleft1 = this.physics.add.sprite(8970, 39, "step");
		stepladderleft1.name = "stepladderleft1";
		stepladderleft1.scaleX = 0.9778427422157434;
		stepladderleft1.scaleY = 0.6141521468953506;
		stepladderleft1.visible = false;
		stepladderleft1.body.checkCollision.down = false;
		stepladderleft1.body.checkCollision.left = false;
		stepladderleft1.body.checkCollision.right = false;
		stepladderleft1.body.pushable = false;
		stepladderleft1.body.immovable = true;
		stepladderleft1.body.setSize(180, 32, false);

		// stepBlock3
		const stepBlock3 = new StepBlock(this, 8295, -777);
		this.add.existing(stepBlock3);
		stepBlock3.scaleX = 0.847460760004689;
		stepBlock3.scaleY = 1.1030253813731088;
		stepBlock3.alpha = 0.4;

		// stepBlock4
		const stepBlock4 = new StepBlock(this, 8594, -1022);
		this.add.existing(stepBlock4);
		stepBlock4.scaleX = 0.6971934433376743;
		stepBlock4.scaleY = 0.95635667752653;
		stepBlock4.alpha = 0.4;

		// stepBlock5
		const stepBlock5 = new StepBlock(this, 8406, -1810);
		this.add.existing(stepBlock5);
		stepBlock5.scaleX = 0.6066644829684937;
		stepBlock5.scaleY = 1.030778854898828;
		stepBlock5.alpha = 0.4;

		// blocksepred
		const blocksepred = this.add.nineslice(8393, -1327, "block_separator_01", undefined, 1338, 0, 269, 184, 0, 0);
		blocksepred.scaleX = 0.86;
		blocksepred.scaleY = 0.385783340536251;

		// step53
		const step53 = this.physics.add.sprite(8133, -1051, "step");
		step53.name = "step53";
		step53.scaleX = 0.4597905632442396;
		step53.scaleY = 0.4597905632442396;
		step53.visible = false;
		step53.body.checkCollision.down = false;
		step53.body.checkCollision.left = false;
		step53.body.checkCollision.right = false;
		step53.body.pushable = false;
		step53.body.immovable = true;
		step53.body.setSize(180, 32, false);

		// stepBlock7
		const stepBlock7 = new StepBlock(this, 8198, -1632);
		this.add.existing(stepBlock7);
		stepBlock7.scaleX = 0.6971934433376743;
		stepBlock7.scaleY = 0.95635667752653;
		stepBlock7.alpha = 0.4;

		// stepBlock6
		const stepBlock6 = new StepBlock(this, 8530, -1484);
		this.add.existing(stepBlock6);
		stepBlock6.scaleX = 0.6971934433376743;
		stepBlock6.scaleY = 0.95635667752653;
		stepBlock6.alpha = 0.4;

		// poster5
		const poster5 = this.physics.add.sprite(10235, -587, "poster_01");
		poster5.scaleX = 0.5007194768950565;
		poster5.scaleY = 0.5007194768950565;
		poster5.angle = 5;
		poster5.alpha = 0.7;
		poster5.alphaTopLeft = 0.7;
		poster5.alphaTopRight = 0.7;
		poster5.alphaBottomLeft = 0.7;
		poster5.alphaBottomRight = 0.7;
		poster5.body.setSize(101, 132, false);

		// blocksepred_1
		const blocksepred_1 = this.add.nineslice(8372, -2194, "block_separator_01", undefined, 1338, 0, 269, 184, 0, 0);
		blocksepred_1.scaleX = 0.66;
		blocksepred_1.scaleY = 0.385783340536251;

		// step54
		const step54 = this.physics.add.sprite(8602, -1877, "step");
		step54.name = "step54";
		step54.scaleX = 0.4597905632442396;
		step54.scaleY = 0.4597905632442396;
		step54.visible = false;
		step54.body.checkCollision.down = false;
		step54.body.checkCollision.left = false;
		step54.body.checkCollision.right = false;
		step54.body.pushable = false;
		step54.body.immovable = true;
		step54.body.setSize(180, 32, false);

		// step55
		const step55 = this.physics.add.sprite(8125, -1867, "step");
		step55.name = "step55";
		step55.scaleX = 0.4597905632442396;
		step55.scaleY = 0.4597905632442396;
		step55.visible = false;
		step55.body.checkCollision.down = false;
		step55.body.checkCollision.left = false;
		step55.body.checkCollision.right = false;
		step55.body.pushable = false;
		step55.body.immovable = true;
		step55.body.setSize(180, 32, false);

		// eagle1
		const eagle1 = this.physics.add.sprite(8924, -1750, "__eagle_flying_000");
		eagle1.scaleX = 0.29589246908582933;
		eagle1.scaleY = 0.29589246908582933;
		eagle1.body.velocity.x = -450;
		eagle1.body.collideWorldBounds = true;
		eagle1.body.onWorldBounds = true;
		eagle1.body.setSize(818, 866, false);

		// window_10
		const window_10 = new WindowClass(this, 8181, -405);
		this.add.existing(window_10);

		// window_1
		const window_1 = new WindowClass(this, 8706, -749);
		this.add.existing(window_1);

		// window_4
		const window_4 = new WindowClass(this, 8132, -1109);
		this.add.existing(window_4);

		// window_6
		const window_6 = new WindowClass(this, 8126, -1927);
		this.add.existing(window_6);

		// window_9
		const window_9 = new WindowClass(this, 8596, -1929);
		this.add.existing(window_9);

		// shaderfull
		const shaderfull = this.add.rectangle(4512, -905, 128, 128);
		shaderfull.blendMode = Phaser.BlendModes.LUMINOSITY;
		shaderfull.scaleX = 81.56642608919448;
		shaderfull.scaleY = 26.16854379983087;
		shaderfull.alpha = 0.05;
		shaderfull.isFilled = true;
		shaderfull.fillColor = 1335490;

		// saturateFx
		const saturateFx = shaderfull.postFX.addColorMatrix();
		saturateFx.saturate(3);

		this.backcity = backcity;
		this.cloud3 = cloud3;
		this.cloudsmall = cloudsmall;
		this.cloud4 = cloud4;
		this.cloud5 = cloud5;
		this.cloudsmall2 = cloudsmall2;
		this.cloudbig3 = cloudbig3;
		this.cloudbig = cloudbig;
		this.brown_block_6 = brown_block_6;
		this.cityfor = cityfor;
		this.redsocks = redsocks;
		this.washingl1 = washingl1;
		this.washingl7 = washingl7;
		this.washcordbend = washcordbend;
		this.washing6 = washing6;
		this.brown_block_14 = brown_block_14;
		this.yellowshirt = yellowshirt;
		this.clothunderpants = clothunderpants;
		this.clothsec = clothsec;
		this.brown_block_7 = brown_block_7;
		this.greenpants = greenpants;
		this.whitecloth = whitecloth;
		this.washcordbendlast5 = washcordbendlast5;
		this.washcordb6 = washcordb6;
		this.brown_block_13 = brown_block_13;
		this.washcord3 = washcord3;
		this.bluepants = bluepants;
		this.brown_block_10 = brown_block_10;
		this.topblokb2 = topblokb2;
		this.brown_block_2 = brown_block_2;
		this.washcord7 = washcord7;
		this.fence1 = fence1;
		this.brown_block_8 = brown_block_8;
		this.brown_block_9 = brown_block_9;
		this.brown_block_12 = brown_block_12;
		this.purple_block_2 = purple_block_2;
		this.brown_block_11 = brown_block_11;
		this.greybuildingright2 = greybuildingright2;
		this.wallbuilding2 = wallbuilding2;
		this.brown_block_5 = brown_block_5;
		this.brown_block_3 = brown_block_3;
		this.brown_block = brown_block;
		this.purple_block = purple_block;
		this.purple_block_1 = purple_block_1;
		this.blockwallmid_1 = blockwallmid_1;
		this.brown_block_4 = brown_block_4;
		this.buildingwall1 = buildingwall1;
		this.pavement_narrow_repeating = pavement_narrow_repeating;
		this.brown_block_1 = brown_block_1;
		this.platformtwo = platformtwo;
		this.fence2 = fence2;
		this.fencecol = fencecol;
		this.fencecol2 = fencecol2;
		this.washcord = washcord;
		this.firescape4 = firescape4;
		this.trashcan = trashcan;
		this.washcordbyel1 = washcordbyel1;
		this.windowlove3 = windowlove3;
		this.platformbuilding = platformbuilding;
		this.openwindowlove3 = openwindowlove3;
		this.heart3loveroom = heart3loveroom;
		this.dumpster = dumpster;
		this.blockroof = blockroof;
		this.step = step;
		this.step1 = step1;
		this.step3 = step3;
		this.washcord2 = washcord2;
		this.step4 = step4;
		this.step6 = step6;
		this.washcordb = washcordb;
		this.yellowbuilding3left = yellowbuilding3left;
		this.trashcan2 = trashcan2;
		this.rooftop_2 = rooftop_2;
		this.dumpster2 = dumpster2;
		this.blocklasttop2 = blocklasttop2;
		this.fencecolyel1 = fencecolyel1;
		this.stepb21 = stepb21;
		this.stepb23 = stepb23;
		this.stepb24 = stepb24;
		this.stepb25 = stepb25;
		this.stepb26 = stepb26;
		this.window34 = window34;
		this.window35 = window35;
		this.step33 = step33;
		this.step32 = step32;
		this.rooftop_1 = rooftop_1;
		this.step31 = step31;
		this.window32 = window32;
		this.window33 = window33;
		this.step34 = step34;
		this.step35 = step35;
		this.windowL13 = windowL13;
		this.windowL12 = windowL12;
		this.windowL14 = windowL14;
		this.windowL11 = windowL11;
		this.windowL15 = windowL15;
		this.windowL24 = windowL24;
		this.windowL25 = windowL25;
		this.blocksep = blocksep;
		this.windowlove2 = windowlove2;
		this.topwallL1 = topwallL1;
		this.openwindowlove = openwindowlove;
		this.loveplat = loveplat;
		this.fishitem = fishitem;
		this.platformbuilding2 = platformbuilding2;
		this.itemSpider = itemSpider;
		this.mouseitem = mouseitem;
		this.birdcageitem = birdcageitem;
		this.ratitem = ratitem;
		this.checkmouse = checkmouse;
		this.birdagecheck = birdagecheck;
		this.spidercheck = spidercheck;
		this.fishcheck = fishcheck;
		this.windowL23 = windowL23;
		this.windowL21 = windowL21;
		this.catPlayer = catPlayer;
		this.windowL22 = windowL22;
		this.ratcheck = ratcheck;
		this.loveIntrance = loveIntrance;
		this.trashcanb2 = trashcanb2;
		this.tramstop = tramstop;
		this.stepbblock2dis = stepbblock2dis;
		this.trashside = trashside;
		this.arrow1 = arrow1;
		this.shop = shop;
		this.arrow2 = arrow2;
		this.arrow3 = arrow3;
		this.arrow4 = arrow4;
		this.blockwallmid2 = blockwallmid2;
		this.arrow5 = arrow5;
		this.rooftop = rooftop;
		this.bussign = bussign;
		this.billboard = billboard;
		this.text1 = text1;
		this.mouseitem2 = mouseitem2;
		this.birdcageitem2 = birdcageitem2;
		this.itemSpider2 = itemSpider2;
		this.ratitem2 = ratitem2;
		this.fishitem2 = fishitem2;
		this.window31 = window31;
		this.arrow8 = arrow8;
		this.arrow9 = arrow9;
		this.arrow10 = arrow10;
		this.arrow7 = arrow7;
		this.arrow6 = arrow6;
		this.ratcheck2 = ratcheck2;
		this.blocksep1 = blocksep1;
		this.blocktop2 = blocktop2;
		this.fishcheck2 = fishcheck2;
		this.firescape = firescape;
		this.blocksep2 = blocksep2;
		this.spidercheck2 = spidercheck2;
		this.birdcheck2 = birdcheck2;
		this.mousecheck2 = mousecheck2;
		this.openwindowlove2 = openwindowlove2;
		this.heart2loveroom = heart2loveroom;
		this.firescape2 = firescape2;
		this.step333 = step333;
		this.fishitem3 = fishitem3;
		this.mouseitem3 = mouseitem3;
		this.ratitem3 = ratitem3;
		this.itemSpider3 = itemSpider3;
		this.birdcageitem3 = birdcageitem3;
		this.arrow11 = arrow11;
		this.arrow12 = arrow12;
		this.arrow13 = arrow13;
		this.arrow14 = arrow14;
		this.arrow15 = arrow15;
		this.mousecheck3 = mousecheck3;
		this.birdcheck3 = birdcheck3;
		this.spidercheck3 = spidercheck3;
		this.ratcheck3 = ratcheck3;
		this.fishcheck3 = fishcheck3;
		this.platformtwo2 = platformtwo2;
		this.washy2 = washy2;
		this.blocksepred1 = blocksepred1;
		this.firescape5 = firescape5;
		this.roofb4 = roofb4;
		this.clothunderpants_1 = clothunderpants_1;
		this.trashcanbl1 = trashcanbl1;
		this.trashcanlast = trashcanlast;
		this.parachute2 = parachute2;
		this.parachute1 = parachute1;
		this.mail_box = mail_box;
		this.roofb4t = roofb4t;
		this.trashsidel1 = trashsidel1;
		this.steplred2 = steplred2;
		this.steplred1 = steplred1;
		this.parachute3 = parachute3;
		this.steplredlev4 = steplredlev4;
		this.steplredredl3 = steplredredl3;
		this.window44 = window44;
		this.window43 = window43;
		this.window45 = window45;
		this.window42 = window42;
		this.window41 = window41;
		this.ratitem4 = ratitem4;
		this.fishitem4 = fishitem4;
		this.birdcageitem4 = birdcageitem4;
		this.itemSpider4 = itemSpider4;
		this.mouseitem4 = mouseitem4;
		this.openwindowlove4 = openwindowlove4;
		this.steplredlev5 = steplredlev5;
		this.heart4loveroom = heart4loveroom;
		this.fishcheck4 = fishcheck4;
		this.ratcheck4 = ratcheck4;
		this.spidercheck4 = spidercheck4;
		this.birdcheck4 = birdcheck4;
		this.mousecheck4 = mousecheck4;
		this.arrow16 = arrow16;
		this.arrow17 = arrow17;
		this.arrow18 = arrow18;
		this.arrow19 = arrow19;
		this.arrow20 = arrow20;
		this.woofie = woofie;
		this.trashcanb = trashcanb;
		this.blockwallmid_2 = blockwallmid_2;
		this.windowlast1 = windowlast1;
		this.windowlast2 = windowlast2;
		this.firescape_1 = firescape_1;
		this.blockwallmid = blockwallmid;
		this.billboard_1 = billboard_1;
		this.text_1 = text_1;
		this.platformtwo_1 = platformtwo_1;
		this.stepBlock1 = stepBlock1;
		this.firescapelast1 = firescapelast1;
		this.platformtwo_2 = platformtwo_2;
		this.stepBlock2 = stepBlock2;
		this.step51 = step51;
		this.step52 = step52;
		this.stepladderleft = stepladderleft;
		this.stepladderleft1 = stepladderleft1;
		this.stepBlock3 = stepBlock3;
		this.stepBlock4 = stepBlock4;
		this.stepBlock5 = stepBlock5;
		this.blocksepred = blocksepred;
		this.step53 = step53;
		this.stepBlock7 = stepBlock7;
		this.stepBlock6 = stepBlock6;
		this.poster5 = poster5;
		this.blocksepred_1 = blocksepred_1;
		this.step54 = step54;
		this.step55 = step55;
		this.eagle1 = eagle1;
		this.window_10 = window_10;
		this.window_1 = window_1;
		this.window_4 = window_4;
		this.window_6 = window_6;
		this.window_9 = window_9;
		this.shaderfull = shaderfull;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	backcity;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cloud3;
	/** @type {Phaser.Physics.Arcade.Image} */
	cloudsmall;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cloud4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cloud5;
	/** @type {Phaser.Physics.Arcade.Image} */
	cloudsmall2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cloudbig3;
	/** @type {Phaser.Physics.Arcade.Image} */
	cloudbig;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	brown_block_6;
	/** @type {Phaser.GameObjects.TileSprite} */
	cityfor;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	redsocks;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	washingl1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	washingl7;
	/** @type {Phaser.GameObjects.Rectangle} */
	washcordbend;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	washing6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	brown_block_14;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	yellowshirt;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clothunderpants;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clothsec;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	brown_block_7;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	greenpants;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	whitecloth;
	/** @type {Phaser.GameObjects.Rectangle} */
	washcordbendlast5;
	/** @type {Phaser.GameObjects.Rectangle} */
	washcordb6;
	/** @type {Phaser.GameObjects.NineSlice} */
	brown_block_13;
	/** @type {Phaser.GameObjects.Rectangle} */
	washcord3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bluepants;
	/** @type {Phaser.GameObjects.NineSlice} */
	brown_block_10;
	/** @type {Phaser.GameObjects.NineSlice} */
	topblokb2;
	/** @type {Phaser.GameObjects.NineSlice} */
	brown_block_2;
	/** @type {Phaser.GameObjects.Rectangle} */
	washcord7;
	/** @type {Phaser.GameObjects.TileSprite} */
	fence1;
	/** @type {Phaser.GameObjects.NineSlice} */
	brown_block_8;
	/** @type {Phaser.GameObjects.NineSlice} */
	brown_block_9;
	/** @type {Phaser.GameObjects.NineSlice} */
	brown_block_12;
	/** @type {Phaser.GameObjects.NineSlice} */
	purple_block_2;
	/** @type {Phaser.GameObjects.NineSlice} */
	brown_block_11;
	/** @type {Phaser.GameObjects.TileSprite} */
	greybuildingright2;
	/** @type {Phaser.GameObjects.TileSprite} */
	wallbuilding2;
	/** @type {Phaser.GameObjects.NineSlice} */
	brown_block_5;
	/** @type {Phaser.GameObjects.NineSlice} */
	brown_block_3;
	/** @type {Phaser.GameObjects.NineSlice} */
	brown_block;
	/** @type {Phaser.GameObjects.NineSlice} */
	purple_block;
	/** @type {Phaser.GameObjects.NineSlice} */
	purple_block_1;
	/** @type {Phaser.GameObjects.TileSprite} */
	blockwallmid_1;
	/** @type {Phaser.GameObjects.NineSlice} */
	brown_block_4;
	/** @type {Phaser.GameObjects.TileSprite} */
	buildingwall1;
	/** @type {Phaser.GameObjects.TileSprite} */
	pavement_narrow_repeating;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	brown_block_1;
	/** @type {Phaser.GameObjects.TileSprite} */
	platformtwo;
	/** @type {Phaser.Physics.Arcade.Image} */
	fence2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	fencecol;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	fencecol2;
	/** @type {Phaser.GameObjects.Rectangle} */
	washcord;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	firescape4;
	/** @type {Phaser.Physics.Arcade.Image} */
	trashcan;
	/** @type {Phaser.GameObjects.Rectangle} */
	washcordbyel1;
	/** @type {Phaser.GameObjects.Image} */
	windowlove3;
	/** @type {Phaser.GameObjects.TileSprite} */
	platformbuilding;
	/** @type {Phaser.GameObjects.Image} */
	openwindowlove3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	heart3loveroom;
	/** @type {Phaser.Physics.Arcade.Image} */
	dumpster;
	/** @type {Phaser.GameObjects.NineSlice} */
	blockroof;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	step;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	step1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	step3;
	/** @type {Phaser.GameObjects.Rectangle} */
	washcord2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	step4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	step6;
	/** @type {Phaser.GameObjects.Rectangle} */
	washcordb;
	/** @type {Phaser.GameObjects.TileSprite} */
	yellowbuilding3left;
	/** @type {Phaser.Physics.Arcade.Image} */
	trashcan2;
	/** @type {Phaser.GameObjects.TileSprite} */
	rooftop_2;
	/** @type {Phaser.Physics.Arcade.Image} */
	dumpster2;
	/** @type {Phaser.GameObjects.TileSprite} */
	blocklasttop2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	fencecolyel1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	stepb21;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	stepb23;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	stepb24;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	stepb25;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	stepb26;
	/** @type {WindowClass} */
	window34;
	/** @type {WindowClass} */
	window35;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	step33;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	step32;
	/** @type {Phaser.GameObjects.TileSprite} */
	rooftop_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	step31;
	/** @type {WindowClass} */
	window32;
	/** @type {WindowClass} */
	window33;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	step34;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	step35;
	/** @type {WindowClass} */
	windowL13;
	/** @type {WindowClass} */
	windowL12;
	/** @type {WindowClass} */
	windowL14;
	/** @type {WindowClass} */
	windowL11;
	/** @type {WindowClass} */
	windowL15;
	/** @type {WindowClass} */
	windowL24;
	/** @type {WindowClass} */
	windowL25;
	/** @type {Phaser.GameObjects.NineSlice} */
	blocksep;
	/** @type {Phaser.GameObjects.Image} */
	windowlove2;
	/** @type {Phaser.GameObjects.TileSprite} */
	topwallL1;
	/** @type {Phaser.GameObjects.Image} */
	openwindowlove;
	/** @type {Phaser.GameObjects.TileSprite} */
	loveplat;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	fishitem;
	/** @type {Phaser.GameObjects.TileSprite} */
	platformbuilding2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	itemSpider;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	mouseitem;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	birdcageitem;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	ratitem;
	/** @type {Phaser.GameObjects.Image} */
	checkmouse;
	/** @type {Phaser.GameObjects.Image} */
	birdagecheck;
	/** @type {Phaser.GameObjects.Image} */
	spidercheck;
	/** @type {Phaser.GameObjects.Image} */
	fishcheck;
	/** @type {WindowClass} */
	windowL23;
	/** @type {WindowClass} */
	windowL21;
	/** @type {CatPlayer} */
	catPlayer;
	/** @type {WindowClass} */
	windowL22;
	/** @type {Phaser.GameObjects.Image} */
	ratcheck;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	loveIntrance;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	trashcanb2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	tramstop;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	stepbblock2dis;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	trashside;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	arrow1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shop;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	arrow2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	arrow3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	arrow4;
	/** @type {Phaser.GameObjects.TileSprite} */
	blockwallmid2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	arrow5;
	/** @type {Phaser.GameObjects.TileSprite} */
	rooftop;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bussign;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	billboard;
	/** @type {Phaser.GameObjects.Text} */
	text1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	mouseitem2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	birdcageitem2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	itemSpider2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	ratitem2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	fishitem2;
	/** @type {WindowClass} */
	window31;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	arrow8;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	arrow9;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	arrow10;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	arrow7;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	arrow6;
	/** @type {Phaser.GameObjects.Image} */
	ratcheck2;
	/** @type {Phaser.GameObjects.NineSlice} */
	blocksep1;
	/** @type {Phaser.GameObjects.NineSlice} */
	blocktop2;
	/** @type {Phaser.GameObjects.Image} */
	fishcheck2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	firescape;
	/** @type {Phaser.GameObjects.TileSprite} */
	blocksep2;
	/** @type {Phaser.GameObjects.Image} */
	spidercheck2;
	/** @type {Phaser.GameObjects.Image} */
	birdcheck2;
	/** @type {Phaser.GameObjects.Image} */
	mousecheck2;
	/** @type {Phaser.GameObjects.Image} */
	openwindowlove2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	heart2loveroom;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	firescape2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	step333;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	fishitem3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	mouseitem3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	ratitem3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	itemSpider3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	birdcageitem3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	arrow11;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	arrow12;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	arrow13;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	arrow14;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	arrow15;
	/** @type {Phaser.GameObjects.Image} */
	mousecheck3;
	/** @type {Phaser.GameObjects.Image} */
	birdcheck3;
	/** @type {Phaser.GameObjects.Image} */
	spidercheck3;
	/** @type {Phaser.GameObjects.Image} */
	ratcheck3;
	/** @type {Phaser.GameObjects.Image} */
	fishcheck3;
	/** @type {Phaser.GameObjects.TileSprite} */
	platformtwo2;
	/** @type {Phaser.GameObjects.Rectangle} */
	washy2;
	/** @type {Phaser.GameObjects.NineSlice} */
	blocksepred1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	firescape5;
	/** @type {Phaser.GameObjects.NineSlice} */
	roofb4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	clothunderpants_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	trashcanbl1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	trashcanlast;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	parachute2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	parachute1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	mail_box;
	/** @type {Phaser.GameObjects.NineSlice} */
	roofb4t;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	trashsidel1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	steplred2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	steplred1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	parachute3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	steplredlev4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	steplredredl3;
	/** @type {WindowClass} */
	window44;
	/** @type {WindowClass} */
	window43;
	/** @type {WindowClass} */
	window45;
	/** @type {WindowClass} */
	window42;
	/** @type {WindowClass} */
	window41;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	ratitem4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	fishitem4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	birdcageitem4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	itemSpider4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	mouseitem4;
	/** @type {Phaser.GameObjects.Image} */
	openwindowlove4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	steplredlev5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	heart4loveroom;
	/** @type {Phaser.GameObjects.Image} */
	fishcheck4;
	/** @type {Phaser.GameObjects.Image} */
	ratcheck4;
	/** @type {Phaser.GameObjects.Image} */
	spidercheck4;
	/** @type {Phaser.GameObjects.Image} */
	birdcheck4;
	/** @type {Phaser.GameObjects.Image} */
	mousecheck4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	arrow16;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	arrow17;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	arrow18;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	arrow19;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	arrow20;
	/** @type {DogExterior} */
	woofie;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	trashcanb;
	/** @type {Phaser.GameObjects.TileSprite} */
	blockwallmid_2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	windowlast1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	windowlast2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	firescape_1;
	/** @type {Phaser.GameObjects.TileSprite} */
	blockwallmid;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	billboard_1;
	/** @type {Phaser.GameObjects.Text} */
	text_1;
	/** @type {Phaser.GameObjects.TileSprite} */
	platformtwo_1;
	/** @type {StepBlock} */
	stepBlock1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	firescapelast1;
	/** @type {Phaser.GameObjects.TileSprite} */
	platformtwo_2;
	/** @type {StepBlock} */
	stepBlock2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	step51;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	step52;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	stepladderleft;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	stepladderleft1;
	/** @type {StepBlock} */
	stepBlock3;
	/** @type {StepBlock} */
	stepBlock4;
	/** @type {StepBlock} */
	stepBlock5;
	/** @type {Phaser.GameObjects.NineSlice} */
	blocksepred;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	step53;
	/** @type {StepBlock} */
	stepBlock7;
	/** @type {StepBlock} */
	stepBlock6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	poster5;
	/** @type {Phaser.GameObjects.NineSlice} */
	blocksepred_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	step54;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	step55;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	eagle1;
	/** @type {WindowClass} */
	window_10;
	/** @type {WindowClass} */
	window_1;
	/** @type {WindowClass} */
	window_4;
	/** @type {WindowClass} */
	window_6;
	/** @type {WindowClass} */
	window_9;
	/** @type {Phaser.GameObjects.Rectangle} */
	shaderfull;

	/* START-USER-CODE */

	// Write more your code here

	create() {

ShowCompletetext=false;

this.ClotheGroup=this.add.group();
this.WallBuildingGroup=this.add.group();

this.BoingOnce=true;



fishicon=false;
 raticon=false;
 birdicon=false;
 mouseicon=false;
 spidericon=false;

var colliderrope;

		if(OverlayLaunchOne){
		this.scene.launch('OverlayScreen');
			OverlayLaunchOne=false;
			this.scene.bringToTop('OverlayScreen');
		}
//		this.cameras.main.setBounds(1400,-2900,2000, 3600);
//first section is 0-1400
		this.cameras.main.setBounds(0,-3200,10000, 3900);
		this.cameras.main.setZoom(0.71);
		this.physics.world.setBounds(0, -2300,10000, 3900);

this.levelheme=this.sound.add('jingle');

		this.time.addEvent({ delay:2000, callback:() => {

		this.levelheme.play();
		this.levelheme.setVolume(0.4);
		this.levelheme.setLoop(true);

				}, callbackScope: this,repeat:0});


 this.cameras.main.fadeIn(2000);


		//Mission1FreeTheBirds
this.TrashGroup=this.add.group();
this.UpdateGroup=this.add.group();

		this.CollideObjectsGroup=this.add.group();

		this.editorCreate();

this.firescape4.depth=552;

		this.WallBuildingGroup.add(this.buildingwall1);
		this.WallBuildingGroup.add(this.wallbuilding2);
		this.WallBuildingGroup.add(this.greybuildingright2);
		this.WallBuildingGroup.add(this.yellowbuilding3left);

		this.ClotheGroup.add(this.bluepants);
		this.ClotheGroup.add(this.whitecloth);
		this.ClotheGroup.add(this.greenpants);
		this.ClotheGroup.add(this.redsocks);
		this.ClotheGroup.add(this.yellowshirt);
		this.ClotheGroup.add(this.washing6);
		this.ClotheGroup.add(this.clothunderpants);
		this.ClotheGroup.add(this.clothsec);

this.shaderfull.depth=500;
this.firescapelast1.depth=10000;

this.catPlayer.x=StartPosX;
this.catPlayer.y=StartPosY;

this.physics.world.enable(this.rooftop);
this.physics.world.enable(this.washy2);
this.physics.world.enable(this.buildingwall1);
this.physics.world.enable(this.wallbuilding2);
this.physics.world.enable(this.greybuildingright2);
this.physics.world.enable(this.yellowbuilding3left);


//this.washy2.body.setImmovable=true;

//this.rooftop

this.rooftop.body.setOffset(0,20);
this.bussign.body.setOffset(0,20);


this.RND=Phaser.Math.Between(500,2500)

	this.time.addEvent({ delay: this.RND, callback:() => {


//this.stone1.play('stoneshift');

	}, callbackScope: this,repeat:0 });

//this.stone2.play('stoneshift');


this.physics.world.enable(this.fence1);
this.fence1.body.setOffset(0,-20);


this.loveIntrance.mission="LoveRoom1";

this.clothingLineUpDownBool=false;
this.catIsOnRope=false;



		//this.catPlayer.body.setOffset(90,200);

			this.CollideObjectsGroup.add(this.step);
			this.CollideObjectsGroup.add(this.step1);
			this.CollideObjectsGroup.add(this.step3);

			this.CollideObjectsGroup.add(this.step4);
		//	this.CollideObjectsGroup.add(this.step5);
			this.CollideObjectsGroup.add(this.step6);
			//this.CollideObjectsGroup.add(this.step21);S
			this.CollideObjectsGroup.add(this.stepb21);
			//this.CollideObjectsGroup.add(this.stepb22);
			this.CollideObjectsGroup.add(this.stepb23);
			this.CollideObjectsGroup.add(this.stepb24);
			this.CollideObjectsGroup.add(this.stepb25);
			this.CollideObjectsGroup.add(this.stepb26);
			this.CollideObjectsGroup.add(this.trashcan2);
			//this.CreatePlatform(this.rooftop);
			//this.CreatePlatform(this.fencecolyel);
			this.CreatePlatform(this.fencecolyel1);
			this.CreatePlatform(this.washcordbend);
			this.CreatePlatform(this.washcordb);
			this.CreatePlatform(this.blocksep2);
			this.CreatePlatform(this.blocksep1);
			this.CreatePlatform(this.blockwallmid);
//this.CreatePlatform(this.stepbl1.step);
			this.CreatePlatform(this.rooftop);
			this.CreatePlatform(this.platformbuilding2);
			this.CreatePlatform(this.platformtwo2);
		this.CreatePlatform(this.blockroof);
		this.CreatePlatform(this.washcord);
		this.CreatePlatform(this.washcord2);
		this.CreatePlatform(this.platformtwo);
		this.CreatePlatform(this.topblokb2);
		this.CreatePlatform(this.trashside);
		this.CreatePlatform(this.firescape);
		this.CreatePlatform(this.firescape2);
		this.CreatePlatform(this.firescape4);
		this.CreatePlatform(this.firescape5);

			//this.CreatePlatform(this.parachute1);
			//this.CreatePlatform(this.parachute2);

		this.firescape.depth=1000;
		this.firescape2.depth=1000;

		this.CreatePlatform(this.bussign);
			this.CreatePlatform(this.billboard);

	//	this.CollideObjectsGroup.add(this.block_separator_02);

		this.CreatePlatform(this.shop);
		this.CreatePlatform(this.tramstop);

		this.CreatePlatform(this.washcord7);
		this.CreatePlatform(this.washcordb6);
		this.CreatePlatform(this.washcord3);
		this.CreatePlatform(this.washy2);
		this.CreatePlatform(this.washcordbendlast5);
		this.CreatePlatform(this.washcordbyel1);
								 //washcordb2
		//this.CreatePlatform(this.washcordb5);
		this.CreatePlatform(this.blocktop2);
		this.CreatePlatform(this.dumpster2);
		this.CreatePlatform(this.washcordb);
		this.CreatePlatform(this.topwallL1);
		this.CreatePlatform(this.step31);
		this.CreatePlatform(this.step32);
		this.CreatePlatform(this.step33);
		this.CreatePlatform(this.step333);
		this.CreatePlatform(this.step34);
		this.CreatePlatform(this.step35);
		//this.CreatePlatform(this.blocklasttop);
		this.CreatePlatform(this.blocklasttop2);
		this.CreatePlatform(this.washcordbendlast5);	
		this.CreatePlatform(this.loveplat);
		this.CreatePlatform(this.stepbblock2dis);
		this.CreatePlatform(this.trashcanb2);
		this.CreatePlatform(this.platformbuilding);
		this.CreatePlatform(this.blockwallmid2);

		this.CreatePlatform(this.trashcanbl1);
		this.CreatePlatform(this.trashsidel1);

			this.CreatePlatform(this.steplred1);
			this.CreatePlatform(this.steplred2);
				this.CreatePlatform(this.steplredlev4);
				this.CreatePlatform(this.steplredredl3);
	this.CreatePlatform(this.steplredlev5);
	this.CreatePlatform(this.step51);
	this.CreatePlatform(this.step52);
		this.CreatePlatform(this.step53);
			this.CreatePlatform(this.step54);
				this.CreatePlatform(this.step55);

		this.CreatePlatform(this.firescapelast1);



			this.CreatePlatform(this.blocksepred1);
			this.CreatePlatform(this.roofb4t);
				this.CreatePlatform(this.roofb4);

				this.CreatePlatform(this.mail_box);

				this.CreatePlatform(this.windowlast1);
					this.CreatePlatform(this.windowlast2);

						this.CreatePlatform(this.trashcanlast);

							this.CreatePlatform(this.stepBlock1.rectangle);
							this.CreatePlatform(this.stepBlock2.rectangle);
							this.CreatePlatform(this.stepBlock3.rectangle);
							this.CreatePlatform(this.stepBlock4.rectangle);
							this.CreatePlatform(this.stepBlock5.rectangle);
							this.CreatePlatform(this.stepBlock6.rectangle);
							this.CreatePlatform(this.stepBlock7.rectangle);

									this.CreatePlatform(this.stepladderleft1);
									this.CreatePlatform(this.blocksepred);


this.eagle1.play('Eaglefly');





//Building 1 sections
		this.windowL14.entrance.mission="MouseLevel0";
		this.windowL13.entrance.mission="UpLevel1Spider";
		this.windowL11.entrance.mission="Mission1Rats";
		this.windowL12.entrance.mission="Mission1FreeTheBirds";
		this.windowL15.entrance.mission="Mission2FishBowl";

//Building 2 sections
		this.windowL21.entrance.mission="MouseLevel1";
		this.windowL22.entrance.mission="UpLevel2Spider";
		this.windowL23.entrance.mission="Mission2FreeTheBirds";
		this.windowL24.entrance.mission="Mission2Rats";
		this.windowL25.entrance.mission="Mission2FishBowl2";

		//Building 3 sections
		this.window31.entrance.mission="MouseLevel2";
		this.window32.entrance.mission="Up3LevelSpider";
		this.window33.entrance.mission="Mission3FreeTheBirds";
		this.window34.entrance.mission="Mission3Rats";
		this.window35.entrance.mission="Mission2FishBowl3";


		//Building 4 sections
		this.window45.entrance.mission="Mission2FishBowl4";
		this.window44.entrance.mission="Mission4Rats";
		this.window43.entrance.mission="Mission4FreeTheBirds";
		this.window42.entrance.mission="Up4LevelSpider";
		this.window41.entrance.mission="MouseLevel3";




			this.camy=this.cameras.main.startFollow(this.catPlayer,true,0.3,0.2,0,0);

			this.physics.add.overlap(this.catPlayer,this.woofie,this.GetHit,null,this);
			this.physics.add.overlap(this.catPlayer,this.TrashGroup,this.GetHit,null,this);

		this.physics.add.overlap(this.catPlayer,this.poster5,this.StickToObject,null,this);

			this.physics.add.collider(this.catPlayer,this.fence2);

			this.physics.add.collider(this.catPlayer,this.washcordbendlast5);
			this.physics.add.collider(this.catPlayer,this.fencecol);
			this.physics.add.collider(this.catPlayer,this.fencecol2);

			this.physics.add.collider(this.catPlayer,this.parachute1,this.JumpUpParachute,null,this);
			this.physics.add.collider(this.catPlayer,this.parachute2,this.JumpUpParachute,null,this);
			this.physics.add.collider(this.catPlayer,this.parachute3,this.JumpUpParachute,null,this);

			this.physics.add.collider(this.catPlayer,this.dumpster);
			this.physics.add.collider(this.catPlayer,this.trashcan);
			this.physics.add.collider(this.catPlayer,this.trashcan);
			this.physics.add.collider(this.catPlayer,this.CollideObjectsGroup);

			this.physics.add.collider(this.catPlayer,this.washcord);
			this.physics.add.collider(this.catPlayer,this.washcord2);
			//this.physics.add.collider(this.catPlayer,this.washcord3);
			this.physics.add.collider(this.catPlayer,this.flooroutside);

//BUILDING 1
			this.physics.add.overlap(this.catPlayer,this.loveIntrance,this.GoToLoveLevel,null,this);
			this.physics.add.overlap(this.catPlayer,this.windowL14.entrance,this.GoToMission,null,this);
			this.physics.add.overlap(this.catPlayer,this.windowL13.entrance,this.GoToMission,null,this);
			this.physics.add.overlap(this.catPlayer,this.windowL11.entrance,this.GoToMission,null,this);
			this.physics.add.overlap(this.catPlayer,this.windowL15.entrance,this.GoToMission,null,this);
			this.physics.add.overlap(this.catPlayer,this.windowL12.entrance,this.GoToMission,null,this);

//BUILDING 2
			this.physics.add.overlap(this.catPlayer,this.windowL21.entrance,this.GoToMission,null,this);
			this.physics.add.overlap(this.catPlayer,this.windowL22.entrance,this.GoToMission,null,this);
			this.physics.add.overlap(this.catPlayer,this.windowL23.entrance,this.GoToMission,null,this);
			this.physics.add.overlap(this.catPlayer,this.windowL24.entrance,this.GoToMission,null,this);
			this.physics.add.overlap(this.catPlayer,this.windowL25.entrance,this.GoToMission,null,this);
			this.physics.add.overlap(this.catPlayer,this.heart2loveroom,this.GoToLoveLevel2,null,this);

//BUILDING 3
			this.physics.add.overlap(this.catPlayer,this.window31.entrance,this.GoToMission,null,this);
			this.physics.add.overlap(this.catPlayer,this.window32.entrance,this.GoToMission,null,this);
			this.physics.add.overlap(this.catPlayer,this.window33.entrance,this.GoToMission,null,this);
			this.physics.add.overlap(this.catPlayer,this.window34.entrance,this.GoToMission,null,this);
			this.physics.add.overlap(this.catPlayer,this.window35.entrance,this.GoToMission,null,this);
			this.physics.add.overlap(this.catPlayer,this.heart3loveroom,this.GoToLoveLevel3,null,this);
//BUILDING 4
			this.physics.add.overlap(this.catPlayer,this.window45.entrance,this.GoToMission,null,this);
			this.physics.add.overlap(this.catPlayer,this.window44.entrance,this.GoToMission,null,this);
			this.physics.add.overlap(this.catPlayer,this.window43.entrance,this.GoToMission,null,this);
			this.physics.add.overlap(this.catPlayer,this.window42.entrance,this.GoToMission,null,this);
			this.physics.add.overlap(this.catPlayer,this.window41.entrance,this.GoToMission,null,this);
				this.physics.add.overlap(this.catPlayer,this.heart4loveroom,this.GoToLoveLevel4,null,this);

		//	this.physics.add.overlap(this.catPlayer,this.ClotheGroup,this.StickToObject,null,this);
this.physics.add.overlap(this.catPlayer,this.ClotheGroup,this.Testje,null,this);

	//	this.physics.add.collider(this.catPlayer,this.washcordb2);

			//this.colliderrope=this.physics.collide(this.catPlayer,this.washcordb2);
//console.log('cat on cord' + this.colliderrope);





	 this.arrowtween=this.tweens.add({
            targets: [this.arrow1,
			this.arrow2,
			this.arrow3,
			this.arrow4,
			this.arrow5,this.arrow6,this.arrow7,this.arrow8,this.arrow9,this.arrow10,
			this.arrow11,this.arrow12,this.arrow13,this.arrow14,this.arrow15,
			this.arrow16,
			this.arrow17,
			this.arrow18,
			this.arrow19,
			this.arrow20,
			],
         	//scaleY:"+=21",
			y:"+=50",
	 duration:400,
	//scale:{start: 0.1, to: 0.5 },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat:-1,

        });
	};

Testje(){
console.log('allaaaaasss');

}

Shake(Item){

	 this.tweenStrain=this.tweens.add({
            targets: [Item],
			//x:"+=180",
			scale:0.55,
			 duration:90,
	//scale:{start: 0.1, to: 0.5 },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: 3,
        });


	};

GoToLoveLevel(){
if(LevelMouse1Clear && LevelFish1Clear && LevelRat1Clear && LevelBird1Clear && LevelSpider1Clear)
{

this.levelheme.stop();
	this.scene.stop('Level');
	this.scene.start('LoveRoom1');
}




};

JumpUpParachute(Cat, Parachute){

if(Cat.body.touching.down && Parachute.body.touching.up){
	Cat.body.setVelocityY(-1500);
};

this.Shake(Parachute);
}

BoingBoing(cat, rope){

if(this.BoingOnce && cat.body.touching.down && rope.body.touching.up){
 this.tweenchan=this.tweens.add({
            targets: [rope],
			y:"+120",
			duration:100,
	//scale:{start: 0.1, to: 0.5 },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat:0,
        });

		cat.body.setVelocityY(-1000);
this.BoingOnce=false;

	this.time.addEvent({ delay: 200, callback:() => {

this.BoingOnce=true;

	}, callbackScope: this,repeat:0 });



}

}


GoToLoveLevel2(){
if(LevelMouse2Clear && LevelFish2Clear && LevelRat2Clear && LevelBird2Clear && LevelSpider2Clear)
{

this.levelheme.stop();
	this.scene.stop('Level');
	this.scene.start('LoveLevel2');
}
}

GoToLoveLevel3(){
if(LevelMouse3Clear && LevelFish3Clear && LevelRat3Clear && LevelBird3Clear && LevelSpider3Clear)
{

this.levelheme.stop();
	this.scene.stop('Level');
	this.scene.start('LoveLevel3');
}
}

GoToLoveLevel4(){
	//LevelMouse4Clear && LevelFish4Clear && LevelRat4Clear && LevelBird4Clear && 
if(LevelSpider4Clear)
{

this.levelheme.stop();
	this.scene.stop('Level');
	this.scene.start('LoveLevel4');
};

}
	MoveClotesOnRop(Cloth,Rope,Speed){

		if(Speed<0){

		if(Cloth.x<Rope.x-500){
		Cloth.body.x+=950;
		}else{
			Cloth.body.setVelocityX(Speed);
		}
					}
		else{
			if(Cloth.x>Rope.x+500){
		Cloth.body.x-=950;
		}else{
			Cloth.body.setVelocityX(Speed);
		}


		}
	}

	CreatePlatform(Object){


		this.physics.world.enable(Object);
		Object.body.setImmovable(true);
		Object.body.checkCollision.down = false;
		Object.body.checkCollision.left = false;
		Object.body.checkCollision.right = false;

		this.CollideObjectsGroup.add(Object);

	}

	CheckWindow(Window,Clear,Check,Arrow,Item){

if(Window.entrance.Open==true){
			if(Clear){
console.log('is the mouse area cleared?');
		Check.visible=true;
			}
		//	console.log('is the mouse area NOT cleared?');
		Item.visible=true;
		Arrow.visible=true;
		}else{

			Item.visible=false;
			Check.visible=false;
			Arrow.visible=false;
		}

	}

	CheckLevelsBuilding1(){
if(LevelMouse1Clear && LevelFish1Clear && LevelRat1Clear && LevelBird1Clear && LevelSpider1Clear){

		this.openwindowlove.visible=true;
		this.loveIntrance.visible=true;
		}

	this.CheckWindow(this.windowL13,LevelSpider1Clear,this.spidercheck,this.arrow3,this.itemSpider);
	this.CheckWindow(this.windowL12,LevelBird1Clear,this.birdagecheck,this.arrow2,this.birdcageitem);
	this.CheckWindow(this.windowL14,LevelMouse1Clear,this.checkmouse,this.arrow1,this.mouseitem);
	this.CheckWindow(this.windowL11,LevelRat1Clear,this.ratcheck,this.arrow5,this.ratitem);
	this.CheckWindow(this.windowL15,LevelFish1Clear,this.fishcheck,this.arrow4,this.fishitem);
		///checking all windows open and cloes
	}

	CheckLevelsBuilding2(){
if(LevelMouse2Clear && LevelFish2Clear && LevelRat2Clear && LevelBird2Clear && LevelSpider2Clear){

		this.heart2loveroom.visible=true;
		this.openwindowlove2.visible=true;
		}

	this.CheckWindow(this.windowL24,LevelRat2Clear,this.ratcheck2,this.arrow6,this.ratitem2);
	this.CheckWindow(this.windowL25,LevelFish2Clear,this.fishcheck2,this.arrow7,this.fishitem2);
	this.CheckWindow(this.windowL22,LevelSpider2Clear,this.spidercheck2,this.arrow8,this.itemSpider2);
	this.CheckWindow(this.windowL21,LevelMouse2Clear,this.mousecheck2,this.arrow9,this.mouseitem2);
	this.CheckWindow(this.windowL23,LevelBird2Clear,this.birdcheck2,this.arrow10,this.birdcageitem2);

		///checking all windows open and cloes
	}

	CheckLevelsBuilding3(){
if(LevelMouse3Clear && LevelFish3Clear && LevelRat3Clear && LevelBird3Clear && LevelSpider3Clear){
		this.heart3loveroom.visible=true;
		this.openwindowlove3.visible=true;
		}

	this.CheckWindow(this.window34,LevelRat3Clear,this.ratcheck3,this.arrow14,this.ratitem3);
	this.CheckWindow(this.window35,LevelFish3Clear,this.fishcheck3,this.arrow15,this.fishitem3);
	this.CheckWindow(this.window32,LevelSpider3Clear,this.spidercheck3,this.arrow12,this.itemSpider3);
	this.CheckWindow(this.window31,LevelMouse3Clear,this.mousecheck3,this.arrow11,this.mouseitem3);
	this.CheckWindow(this.window33,LevelBird3Clear,this.birdcheck3,this.arrow13,this.birdcageitem3);

		///checking all windows open and cloes
	}


	CheckLevelsBuilding4(){
		// && LevelFish4Clear && LevelRat4Clear && LevelBird4Clear && LevelSpider4Clear
if(LevelSpider4Clear)
		{
		this.heart4loveroom.visible=true;
		this.openwindowlove4.visible=true;
		}

	this.CheckWindow(this.window44,LevelRat4Clear,this.ratcheck4,this.arrow16,this.ratitem4);
	this.CheckWindow(this.window45,LevelFish4Clear,this.fishcheck4,this.arrow17,this.fishitem4);
	this.CheckWindow(this.window42,LevelSpider4Clear,this.spidercheck4,this.arrow18,this.itemSpider4);
	this.CheckWindow(this.window41,LevelMouse4Clear,this.mousecheck4,this.arrow19,this.mouseitem4);
	this.CheckWindow(this.window43,LevelBird4Clear,this.birdcheck4,this.arrow20,this.birdcageitem4);

		///checking all windows open and cloes
	}



	update(){

			if(this.catPlayer.stick==false){
				this.catPlayer.x=this.WhichObjectHangOn.x;
		}

		if(this.catPlayer.stick==false && this.catPlayer.JumpVerticalPaint==false){
				this.catPlayer.y=this.WhichObjectHangOn.y+30;
		};

this.CheckLevelsBuilding1();
this.CheckLevelsBuilding2();
this.CheckLevelsBuilding3();
this.CheckLevelsBuilding4();

	this.hangingcollider=this.physics.overlap(this.catPlayer,this.WallBuildingGroup);

//	console.log('hanging against wall'+this.hangingcollider);

	if(this.hangingcollider){
	this.catPlayer.HangOn=false;

	}else{

		this.catPlayer.HangOn=true;	
	}


//this.catIsOnRope//

//woshcord1
	this.MoveClotesOnRop(this.washing6,this.washcord3,-40);
	this.MoveClotesOnRop(this.greenpants,this.washcord3,-40);
//washcord2
this.MoveClotesOnRop(this.whitecloth,this.washy2,60);
this.MoveClotesOnRop(this.bluepants,this.washy2,60);
this.MoveClotesOnRop(this.clothsec,this.washcordb6,-60);
this.MoveClotesOnRop(this.clothunderpants,this.washcord7,60);
this.MoveClotesOnRop(this.redsocks,this.washcord7,60);
this.MoveClotesOnRop(this.yellowshirt,this.washcordb6,-60);
		//washcord3
		this.MoveClotesOnRop(this.washingl1,this.washcordbendlast5,-60);
		this.MoveClotesOnRop(this.washingl7,this.washcordbendlast5,-60);

if(this.eagle1.body.blocked.left){
this.eagle1.body.setVelocityX(450);
this.eagle1.flipX=true;
}else if(this.eagle1.body.blocked.right){
this.eagle1.flipX=false;
	this.eagle1.body.setVelocityX(-450);
}


		if(this.cloudsmall.x>12000){
		this.cloudsmall.x=0;
		}
		if(this.cloudbig.x>12000){
		this.cloudbig.x=0;
		}
		if(this.cloud3.x>12000){
		this.cloud3.x=0;
		}
			if(this.cloud4.x>12000){
		this.cloud4.x=0;
		}
			if(this.cloud5.x>12000){
		this.cloud5.x=0;
		}
				if(this.cloudsmall2.x>12000){
		this.cloudsmall2.x=0;
		}
				if(this.cloudbig3.x>12000){
		this.cloudbig3.x=0;
		}


//this.cityfor.setScrollFactor(0,0);
		this.cityfor.tilePositionX=this.camy.scrollX*0.015;
		this.backcity.tilePositionX=this.camy.scrollX*0.00;
	//	this.bluebuilding.body.setVelocityX(this.camy.scrollX*0.1);
			//this.backcity.tilePositionX=this.hydrant.x+=10;
		//this.camy.scrollX=this.hydrant.x*51;
	this.UpdateGroup.children.iterate(function(child){

if(child){

	child.update();

};
  });


	this.TrashGroup.children.iterate(function(child){

if(child){

	if(child.y>900){
child.destroy();
console.log('trash destroyed');
	}

};

  });
	}



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
