var CatCollhole1=false;
var CatCollhole5=false;
// You can write more code here

/* START OF COMPILED CODE */

class MouseLevel3 extends BaseScene {

	constructor() {
		super("MouseLevel3");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// red_large_stripe_1
		const red_large_stripe_1 = this.add.tileSprite(585, -102, 10000, 1382, "cheesebackground");
		red_large_stripe_1.scaleX = 0.5751891662397572;
		red_large_stripe_1.scaleY = 1.0728195797178246;
		red_large_stripe_1.tintTopLeft = 6170664;
		red_large_stripe_1.tintTopRight = 65793;
		red_large_stripe_1.tintBottomLeft = 13812675;
		red_large_stripe_1.tilePositionX = 500;
		red_large_stripe_1.tilePositionY = 495;
		red_large_stripe_1.tileScaleX = 0.8;
		red_large_stripe_1.tileScaleY = 0.44;

		// red_large_stripe
		const red_large_stripe = this.add.tileSprite(585, -102, 10000, 1382, "cheesebackground");
		red_large_stripe.scaleX = 0.5751891662397572;
		red_large_stripe.scaleY = 1.0728195797178246;
		red_large_stripe.tintTopLeft = 6170664;
		red_large_stripe.tintTopRight = 65793;
		red_large_stripe.tintBottomLeft = 13812675;
		red_large_stripe.tilePositionX = 500;
		red_large_stripe.tilePositionY = 495;
		red_large_stripe.tileScaleX = 0.8;
		red_large_stripe.tileScaleY = 0.44;

		// block_horizontal_repeating_top
		const block_horizontal_repeating_top = this.add.tileSprite(500, 656, 256, 256, "block-horizontal-repeating-top");
		block_horizontal_repeating_top.scaleX = 25;
		block_horizontal_repeating_top.scaleY = 0.26781116281284567;
		block_horizontal_repeating_top.tileScaleX = 0.02;

		// green
		const green = this.add.tileSprite(1265, 688, 800, 2613, "cheesebackground");
		green.scaleX = 9.742545548761658;
		green.scaleY = 0.031131893861152043;
		green.tintTopRight = 16382457;
		green.tintBottomLeft = 11420226;
		green.tintBottomRight = 9117985;
		green.tilePositionY = 170;
		green.tileScaleX = 0.04;
		green.tileScaleY = 2;

		// bottom
		const bottom = this.physics.add.sprite(966, 664, "block_separator_01");
		bottom.scaleX = 8.016925762653134;
		bottom.scaleY = -0.5941844224800856;
		bottom.visible = false;
		bottom.body.pushable = false;
		bottom.body.immovable = true;
		bottom.body.setSize(695, 40, false);

		// ceiling
		const ceiling = this.add.tileSprite(845, -837, 25000, 78, "skirting_light");
		ceiling.scaleX = 0.20762568400836606;
		ceiling.scaleY = 0.2723387119848415;

		// ceiling_1
		const ceiling_1 = this.add.tileSprite(1500, 651, 10000, 78, "skirting_light");
		ceiling_1.scaleX = 0.8;
		ceiling_1.scaleY = 0.15;
		ceiling_1.visible = false;
		ceiling_1.tintTopLeft = 12309858;
		ceiling_1.tintTopRight = 12567860;
		ceiling_1.tintBottomLeft = 12177733;
		ceiling_1.tintBottomRight = 12568882;

		// shelf10
		const shelf10 = this.physics.add.sprite(-2627, 240, "light_wall_shelf");
		shelf10.scaleX = 0.13810902210740583;
		shelf10.scaleY = 0.13810902210740583;
		shelf10.body.setSize(1007, 85, false);

		// skirting_dark
		this.add.tileSprite(987, -918, 7000, 65, "skirting_dark");

		// mousesnif1
		const mousesnif1 = this.physics.add.sprite(-893, -311, "__grey_mouse_sniff_004");
		mousesnif1.scaleX = 0.13508710527319806;
		mousesnif1.scaleY = 0.13508710527319806;
		mousesnif1.alpha = 0.8;
		mousesnif1.alphaTopLeft = 0.8;
		mousesnif1.alphaTopRight = 0.8;
		mousesnif1.alphaBottomLeft = 0.8;
		mousesnif1.alphaBottomRight = 0.8;
		mousesnif1.body.setSize(442, 292, false);

		// mousesnif2
		const mousesnif2 = this.physics.add.sprite(-1640, -181, "__grey_mouse_sniff_004");
		mousesnif2.scaleX = 0.13508710527319806;
		mousesnif2.scaleY = 0.13508710527319806;
		mousesnif2.alpha = 0.8;
		mousesnif2.alphaTopLeft = 0.8;
		mousesnif2.alphaTopRight = 0.8;
		mousesnif2.alphaBottomLeft = 0.8;
		mousesnif2.alphaBottomRight = 0.8;
		mousesnif2.body.setSize(442, 292, false);

		// mousesnif3
		const mousesnif3 = this.physics.add.sprite(-366, -713, "__grey_mouse_sniff_004");
		mousesnif3.scaleX = 0.13508710527319806;
		mousesnif3.scaleY = 0.13508710527319806;
		mousesnif3.alpha = 0.8;
		mousesnif3.alphaTopLeft = 0.8;
		mousesnif3.alphaTopRight = 0.8;
		mousesnif3.alphaBottomLeft = 0.8;
		mousesnif3.alphaBottomRight = 0.8;
		mousesnif3.body.setSize(442, 292, false);

		// mousesnif4
		const mousesnif4 = this.physics.add.sprite(-892, 198, "__grey_mouse_sniff_004");
		mousesnif4.scaleX = 0.13508710527319806;
		mousesnif4.scaleY = 0.13508710527319806;
		mousesnif4.alpha = 0.8;
		mousesnif4.alphaTopLeft = 0.8;
		mousesnif4.alphaTopRight = 0.8;
		mousesnif4.alphaBottomLeft = 0.8;
		mousesnif4.alphaBottomRight = 0.8;
		mousesnif4.body.setSize(442, 292, false);

		// mousesnif5
		const mousesnif5 = this.physics.add.sprite(-756, -682, "__grey_mouse_sniff_004");
		mousesnif5.scaleX = 0.13508710527319806;
		mousesnif5.scaleY = 0.13508710527319806;
		mousesnif5.alpha = 0.8;
		mousesnif5.alphaTopLeft = 0.8;
		mousesnif5.alphaTopRight = 0.8;
		mousesnif5.alphaBottomLeft = 0.8;
		mousesnif5.alphaBottomRight = 0.8;
		mousesnif5.body.setSize(442, 292, false);

		// catPlayer
		const catPlayer = new CatPlayer(this, -1649, 501);
		this.add.existing(catPlayer);
		catPlayer.scaleX = 0.1566678798725213;
		catPlayer.scaleY = 0.1566678798725213;
		catPlayer.body.collideWorldBounds = true;

		// hole1
		const hole1 = this.add.ellipse(-1251, 310, 128, 128);
		hole1.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole1.scaleX = 0.43664276118435935;
		hole1.scaleY = 0.43664276118435935;
		hole1.alpha = 0.4;
		hole1.isFilled = true;
		hole1.fillColor = 0;
		hole1.isStroked = true;
		hole1.strokeColor = 1511440;
		hole1.lineWidth = 5;
		hole1.smoothness = 100;

		// indoorwindow1
		const indoorwindow1 = new IndoorWindow(this, -1651, 319);
		this.add.existing(indoorwindow1);

		// gradientFx
		indoorwindow1.postFX.addGradient(16711680, 65280, 0.7, 0, 0, 0, 1, 0);

		// cheeseplatform1
		const cheeseplatform1 = this.physics.add.sprite(-902, 616, "cheese_slice_stack_01");
		cheeseplatform1.scaleX = 0.5021897896347327;
		cheeseplatform1.scaleY = 0.5021897896347327;
		cheeseplatform1.tintTopLeft = 15724527;
		cheeseplatform1.body.setOffset(0, 20);
		cheeseplatform1.body.setSize(523, 195, false);

		// cheeseplatform2
		const cheeseplatform2 = this.physics.add.sprite(3772, 527, "cheese_slice_stack_02");
		cheeseplatform2.scaleX = 0.502856351669054;
		cheeseplatform2.scaleY = 0.502856351669054;
		cheeseplatform2.tintTopLeft = 14343116;
		cheeseplatform2.tintBottomLeft = 14606293;
		cheeseplatform2.body.setOffset(0, 20);
		cheeseplatform2.body.setSize(539, 431, false);

		// hole2
		const hole2 = this.add.ellipse(-1014, -572, 128, 128);
		hole2.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole2.scaleX = 0.33784243968029987;
		hole2.scaleY = 0.33784243968029987;
		hole2.alpha = 0.4;
		hole2.isFilled = true;
		hole2.fillColor = 0;
		hole2.isStroked = true;
		hole2.strokeColor = 1511440;
		hole2.lineWidth = 5;
		hole2.smoothness = 100;

		// hole3
		const hole3 = this.add.ellipse(-1639, -176, 128, 128);
		hole3.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole3.scaleX = 0.42583298991764496;
		hole3.scaleY = 0.42583298991764496;
		hole3.alpha = 0.4;
		hole3.isFilled = true;
		hole3.fillColor = 0;
		hole3.isStroked = true;
		hole3.strokeColor = 1511440;
		hole3.lineWidth = 5;
		hole3.smoothness = 100;

		// hole4
		const hole4 = this.add.ellipse(-131, -61, 128, 128);
		hole4.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole4.scaleX = 0.33970848784852026;
		hole4.scaleY = 0.33970848784852026;
		hole4.alpha = 0.4;
		hole4.isFilled = true;
		hole4.fillColor = 0;
		hole4.isStroked = true;
		hole4.strokeColor = 1511440;
		hole4.lineWidth = 5;
		hole4.smoothness = 100;

		// cheeseplatform
		const cheeseplatform = this.physics.add.sprite(4486, 300, "cheese_slice_stack_02");
		cheeseplatform.scaleX = 0.502856351669054;
		cheeseplatform.scaleY = 0.502856351669054;
		cheeseplatform.tintTopLeft = 12633204;
		cheeseplatform.tintBottomLeft = 11186749;
		cheeseplatform.body.setOffset(0, 20);
		cheeseplatform.body.setSize(539, 431, false);

		// hole5
		const hole5 = this.add.ellipse(-895, -307, 128, 128);
		hole5.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole5.scaleX = 0.4458993958467758;
		hole5.scaleY = 0.4458993958467758;
		hole5.alpha = 0.4;
		hole5.isFilled = true;
		hole5.fillColor = 0;
		hole5.isStroked = true;
		hole5.strokeColor = 1511440;
		hole5.lineWidth = 5;
		hole5.smoothness = 100;

		// hole6
		const hole6 = this.add.ellipse(-369, -201, 128, 128);
		hole6.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole6.scaleX = 0.40733091406778615;
		hole6.scaleY = 0.40733091406778615;
		hole6.alpha = 0.4;
		hole6.isFilled = true;
		hole6.fillColor = 0;
		hole6.isStroked = true;
		hole6.strokeColor = 1511440;
		hole6.lineWidth = 5;
		hole6.smoothness = 100;

		// hole7
		const hole7 = this.add.ellipse(-752, -686, 128, 128);
		hole7.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole7.scaleX = 0.433781066156667;
		hole7.scaleY = 0.433781066156667;
		hole7.alpha = 0.4;
		hole7.isFilled = true;
		hole7.fillColor = 0;
		hole7.isStroked = true;
		hole7.strokeColor = 1511440;
		hole7.lineWidth = 5;
		hole7.smoothness = 100;

		// hole8
		const hole8 = this.add.ellipse(-131, 450, 128, 128);
		hole8.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole8.scaleX = 0.3422244151422469;
		hole8.scaleY = 0.3422244151422469;
		hole8.alpha = 0.4;
		hole8.isFilled = true;
		hole8.fillColor = 0;
		hole8.isStroked = true;
		hole8.strokeColor = 1511440;
		hole8.lineWidth = 5;
		hole8.smoothness = 100;

		// cheesewheel6
		const cheesewheel6 = this.physics.add.sprite(-171, -434, "cheese_prop_10");
		cheesewheel6.scaleX = 0.46685212027020023;
		cheesewheel6.scaleY = 0.46685212027020023;
		cheesewheel6.tintTopLeft = 13212981;
		cheesewheel6.tintTopRight = 13542234;
		cheesewheel6.tintBottomLeft = 8882478;
		cheesewheel6.tintBottomRight = 12889179;
		cheesewheel6.body.angularVelocity = 60;
		cheesewheel6.body.setSize(615, 635, false);

		// hole9
		const hole9 = this.add.ellipse(-1566, 92, 128, 128);
		hole9.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole9.scaleX = 0.424794077954826;
		hole9.scaleY = 0.424794077954826;
		hole9.alpha = 0.4;
		hole9.isFilled = true;
		hole9.fillColor = 0;
		hole9.isStroked = true;
		hole9.strokeColor = 1511440;
		hole9.lineWidth = 5;
		hole9.smoothness = 100;

		// hole10
		const hole10 = this.add.ellipse(-13, 202, 128, 128);
		hole10.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole10.scaleX = 0.3819134300817096;
		hole10.scaleY = 0.3819134300817096;
		hole10.alpha = 0.4;
		hole10.isFilled = true;
		hole10.fillColor = 0;
		hole10.isStroked = true;
		hole10.strokeColor = 1511440;
		hole10.lineWidth = 5;
		hole10.smoothness = 100;

		// hole11
		const hole11 = this.add.ellipse(-371, -710, 128, 128);
		hole11.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole11.scaleX = 0.4655103783604621;
		hole11.scaleY = 0.4655103783604621;
		hole11.alpha = 0.4;
		hole11.isFilled = true;
		hole11.fillColor = 0;
		hole11.isStroked = true;
		hole11.strokeColor = 1511440;
		hole11.lineWidth = 5;
		hole11.smoothness = 100;

		// hole12
		const hole12 = this.add.ellipse(-674, 430, 128, 128);
		hole12.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole12.scaleX = 0.260866919305048;
		hole12.scaleY = 0.260866919305048;
		hole12.alpha = 0.4;
		hole12.isFilled = true;
		hole12.fillColor = 0;
		hole12.isStroked = true;
		hole12.strokeColor = 1511440;
		hole12.lineWidth = 5;
		hole12.smoothness = 100;

		// hole13
		const hole13 = this.add.ellipse(-1014, -59, 128, 128);
		hole13.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole13.scaleX = 0.39820829183615575;
		hole13.scaleY = 0.39820829183615575;
		hole13.alpha = 0.4;
		hole13.isFilled = true;
		hole13.fillColor = 0;
		hole13.isStroked = true;
		hole13.strokeColor = 1511440;
		hole13.lineWidth = 5;
		hole13.smoothness = 100;

		// hole14
		const hole14 = this.add.ellipse(-896, 203, 128, 128);
		hole14.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole14.scaleX = 0.4448171807776147;
		hole14.scaleY = 0.4448171807776147;
		hole14.alpha = 0.4;
		hole14.isFilled = true;
		hole14.fillColor = 0;
		hole14.isStroked = true;
		hole14.strokeColor = 1511440;
		hole14.lineWidth = 5;
		hole14.smoothness = 100;

		// cheesewheel5
		const cheesewheel5 = this.physics.add.sprite(2767, -321, "cheese_prop_10");
		cheesewheel5.scaleX = 0.4398218482295853;
		cheesewheel5.scaleY = 0.4398218482295853;
		cheesewheel5.tintTopLeft = 13212981;
		cheesewheel5.tintTopRight = 13542234;
		cheesewheel5.tintBottomLeft = 8882478;
		cheesewheel5.tintBottomRight = 12889179;
		cheesewheel5.body.angularVelocity = 60;
		cheesewheel5.body.setSize(615, 635, false);

		// cheesewheel4
		const cheesewheel4 = this.physics.add.sprite(965, 177, "cheese_prop_10");
		cheesewheel4.scaleX = 0.5916645529337906;
		cheesewheel4.scaleY = 0.5916645529337906;
		cheesewheel4.tintTopLeft = 13212981;
		cheesewheel4.tintTopRight = 13542234;
		cheesewheel4.tintBottomLeft = 8882478;
		cheesewheel4.tintBottomRight = 12889179;
		cheesewheel4.body.angularVelocity = 60;
		cheesewheel4.body.setSize(615, 635, false);

		// hole15
		const hole15 = this.add.ellipse(-366, 310, 128, 128);
		hole15.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole15.scaleX = 0.4260179189796247;
		hole15.scaleY = 0.4260179189796247;
		hole15.alpha = 0.4;
		hole15.isFilled = true;
		hole15.fillColor = 0;
		hole15.isStroked = true;
		hole15.strokeColor = 1511440;
		hole15.lineWidth = 5;
		hole15.smoothness = 100;

		// hole16
		const hole16 = this.add.ellipse(200, -415, 128, 128);
		hole16.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole16.scaleX = 0.4260179189796247;
		hole16.scaleY = 0.4260179189796247;
		hole16.alpha = 0.4;
		hole16.isFilled = true;
		hole16.fillColor = 0;
		hole16.isStroked = true;
		hole16.strokeColor = 1511440;
		hole16.lineWidth = 5;
		hole16.smoothness = 100;

		// hole17
		const hole17 = this.add.ellipse(131, -175, 128, 128);
		hole17.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole17.scaleX = 0.4260179189796247;
		hole17.scaleY = 0.4260179189796247;
		hole17.alpha = 0.4;
		hole17.isFilled = true;
		hole17.fillColor = 0;
		hole17.isStroked = true;
		hole17.strokeColor = 1511440;
		hole17.lineWidth = 5;
		hole17.smoothness = 100;

		// cheesewheel1
		const cheesewheel1 = this.physics.add.sprite(559, -584, "cheese_prop_10");
		cheesewheel1.scaleX = 0.482410567038333;
		cheesewheel1.scaleY = 0.482410567038333;
		cheesewheel1.tintTopLeft = 13212981;
		cheesewheel1.tintTopRight = 13542234;
		cheesewheel1.tintBottomLeft = 8882478;
		cheesewheel1.tintBottomRight = 12889179;
		cheesewheel1.body.angularVelocity = 60;
		cheesewheel1.body.setSize(615, 635, false);

		// cheesewheel2
		const cheesewheel2 = this.physics.add.sprite(2263, 112, "cheese_prop_10");
		cheesewheel2.scaleX = 0.484199017318943;
		cheesewheel2.scaleY = 0.484199017318943;
		cheesewheel2.tintTopLeft = 13212981;
		cheesewheel2.tintTopRight = 13542234;
		cheesewheel2.tintBottomLeft = 8882478;
		cheesewheel2.tintBottomRight = 12889179;
		cheesewheel2.body.angularVelocity = 60;
		cheesewheel2.body.setSize(615, 635, false);

		// cheesewheel3
		const cheesewheel3 = this.physics.add.sprite(1659, -432, "cheese_prop_10");
		cheesewheel3.scaleX = 0.5107670641097999;
		cheesewheel3.scaleY = 0.5107670641097999;
		cheesewheel3.tintTopLeft = 13212981;
		cheesewheel3.tintTopRight = 13542234;
		cheesewheel3.tintBottomLeft = 8882478;
		cheesewheel3.tintBottomRight = 12889179;
		cheesewheel3.body.angularVelocity = 60;
		cheesewheel3.body.setSize(615, 635, false);

		// cheeswheel7
		const cheeswheel7 = this.physics.add.sprite(-1300, -423, "cheese_prop_10");
		cheeswheel7.scaleX = 0.46054810104130905;
		cheeswheel7.scaleY = 0.46054810104130905;
		cheeswheel7.tintTopLeft = 13212981;
		cheeswheel7.tintTopRight = 13542234;
		cheeswheel7.tintBottomLeft = 8882478;
		cheeswheel7.tintBottomRight = 12889179;
		cheeswheel7.body.angularVelocity = 60;
		cheeswheel7.body.setSize(615, 635, false);

		// wall2
		const wall2 = this.physics.add.sprite(3983, -705, "light_wall_shelf");
		wall2.scaleX = 0.4;
		wall2.scaleY = 0.15;
		wall2.body.setSize(1020, 98, false);

		// wall3
		const wall3 = this.physics.add.sprite(3244, -1074, "light_wall_shelf");
		wall3.scaleX = 0.28;
		wall3.scaleY = 0.15;
		wall3.body.setSize(1020, 98, false);

		// pillar_center_repeating_3
		const pillar_center_repeating_3 = this.add.tileSprite(3255, -1071, 256, 256, "pillar-center-repeating");
		pillar_center_repeating_3.scaleX = 0.1978299440574784;
		pillar_center_repeating_3.scaleY = 0.8308957507554543;
		pillar_center_repeating_3.angle = 90;
		pillar_center_repeating_3.tileScaleX = 1.15;
		pillar_center_repeating_3.tileScaleY = 0.2;

		// wall_1
		const wall_1 = this.physics.add.sprite(3972, -701, "light_wall_shelf");
		wall_1.scaleX = 0.3542029753129412;
		wall_1.scaleY = 0.15;
		wall_1.body.setSize(1020, 98, false);

		// pillar_center_repeating_2
		const pillar_center_repeating_2 = this.add.tileSprite(3972, -695, 256, 256, "pillar-center-repeating");
		pillar_center_repeating_2.scaleX = 0.21815493109970593;
		pillar_center_repeating_2.scaleY = 1.4;
		pillar_center_repeating_2.angle = 90;
		pillar_center_repeating_2.tileScaleX = 1.1;
		pillar_center_repeating_2.tileScaleY = 0.14;

		// pillar_base_4
		const pillar_base_4 = this.add.image(3777, -692, "pillar-base");
		pillar_base_4.scaleX = 0.24340605560863543;
		pillar_base_4.scaleY = 0.23787431778277732;

		// pillar_base_5
		const pillar_base_5 = this.add.image(4172, -692, "pillar-base");
		pillar_base_5.scaleX = 0.24213449483984748;
		pillar_base_5.scaleY = 0.24213449483984748;
		pillar_base_5.flipX = true;

		// mousesnifcheese6
		const mousesnifcheese6 = this.physics.add.sprite(514, 290, "__grey_mouse_sniff_004");
		mousesnifcheese6.scaleX = 0.13508710527319806;
		mousesnifcheese6.scaleY = 0.13508710527319806;
		mousesnifcheese6.body.setSize(442, 292, false);

		// mousesniff6
		const mousesniff6 = this.physics.add.sprite(841, -178, "__grey_mouse_sniff_004");
		mousesniff6.scaleX = 0.13508710527319806;
		mousesniff6.scaleY = 0.13508710527319806;
		mousesniff6.visible = false;
		mousesniff6.body.setSize(442, 292, false);

		// mousesniff7
		const mousesniff7 = this.physics.add.sprite(827, -706, "__grey_mouse_sniff_004");
		mousesniff7.scaleX = 0.13508710527319806;
		mousesniff7.scaleY = 0.13508710527319806;
		mousesniff7.body.setSize(442, 292, false);

		// pillar_base_12
		const pillar_base_12 = this.add.image(3120, -1067, "pillar-base");
		pillar_base_12.scaleX = 0.2776851946734986;
		pillar_base_12.scaleY = 0.22682537276773074;

		// pillar_base_13
		const pillar_base_13 = this.add.image(3374, -1067, "pillar-base");
		pillar_base_13.scaleX = 0.22496007831556517;
		pillar_base_13.scaleY = 0.2281911076703238;
		pillar_base_13.flipX = true;

		// rectangle
		const rectangle = this.add.rectangle(3244, -1067, 128, 128);
		rectangle.scaleX = 2.3841740860326643;
		rectangle.scaleY = 0.26252975714138793;
		rectangle.alpha = 0.5;
		rectangle.isFilled = true;
		rectangle.fillColor = 3350046;

		// mousesniff8
		const mousesniff8 = this.physics.add.sprite(1564, -131, "__grey_mouse_sniff_004");
		mousesniff8.scaleX = 0.13508710527319806;
		mousesniff8.scaleY = 0.13508710527319806;
		mousesniff8.body.setSize(442, 292, false);

		// mousesniff9
		const mousesniff9 = this.physics.add.sprite(2811, 170, "__grey_mouse_sniff_004");
		mousesniff9.scaleX = 0.13508710527319806;
		mousesniff9.scaleY = 0.13508710527319806;
		mousesniff9.body.setSize(442, 292, false);

		// mousesniff10
		const mousesniff10 = this.physics.add.sprite(2019, -678, "__grey_mouse_sniff_004");
		mousesniff10.scaleX = 0.13508710527319806;
		mousesniff10.scaleY = 0.13508710527319806;
		mousesniff10.body.setSize(442, 292, false);

		// hole21
		const hole21 = this.add.ellipse(-1639, -688, 128, 128);
		hole21.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole21.scaleX = 0.4526643958691766;
		hole21.scaleY = 0.4526643958691766;
		hole21.alpha = 0.4;
		hole21.isFilled = true;
		hole21.fillColor = 0;
		hole21.isStroked = true;
		hole21.strokeColor = 1511440;
		hole21.lineWidth = 5;
		hole21.smoothness = 100;

		// holech1
		const holech1 = this.add.ellipse(-1336, -332, 128, 128);
		holech1.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		holech1.scaleX = 0.39786037062127555;
		holech1.scaleY = 0.39786037062127555;
		holech1.alpha = 0.6;
		holech1.isFilled = true;
		holech1.fillColor = 0;
		holech1.isStroked = true;
		holech1.strokeColor = 1511440;
		holech1.lineWidth = 5;
		holech1.smoothness = 100;

		// holech2
		const holech2 = this.add.ellipse(-1290, -525, 128, 128);
		holech2.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		holech2.scaleX = 0.3978603706212913;
		holech2.scaleY = 0.3978603706212913;
		holech2.alpha = 0.6;
		holech2.isFilled = true;
		holech2.fillColor = 0;
		holech2.isStroked = true;
		holech2.strokeColor = 1511440;
		holech2.lineWidth = 5;
		holech2.smoothness = 100;

		// holech3
		const holech3 = this.add.ellipse(475, -590, 128, 128);
		holech3.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		holech3.scaleX = 0.4260179189796247;
		holech3.scaleY = 0.4260179189796247;
		holech3.alpha = 0.6;
		holech3.isFilled = true;
		holech3.fillColor = 0;
		holech3.isStroked = true;
		holech3.strokeColor = 1511440;
		holech3.lineWidth = 5;
		holech3.smoothness = 100;

		// holech4
		const holech4 = this.add.ellipse(641, -575, 128, 128);
		holech4.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		holech4.scaleX = 0.4260179189796247;
		holech4.scaleY = 0.4260179189796247;
		holech4.alpha = 0.6;
		holech4.isFilled = true;
		holech4.fillColor = 0;
		holech4.isStroked = true;
		holech4.strokeColor = 1511440;
		holech4.lineWidth = 5;
		holech4.smoothness = 100;

		// holech5
		const holech5 = this.add.ellipse(1622, -506, 128, 128);
		holech5.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		holech5.scaleX = 0.4260179189796247;
		holech5.scaleY = 0.4260179189796247;
		holech5.alpha = 0.6;
		holech5.isFilled = true;
		holech5.fillColor = 0;
		holech5.isStroked = true;
		holech5.strokeColor = 1511440;
		holech5.lineWidth = 5;
		holech5.smoothness = 100;

		// holech6
		const holech6 = this.add.ellipse(1713, -367, 128, 128);
		holech6.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		holech6.scaleX = 0.4260179189796247;
		holech6.scaleY = 0.4260179189796247;
		holech6.alpha = 0.6;
		holech6.isFilled = true;
		holech6.fillColor = 0;
		holech6.isStroked = true;
		holech6.strokeColor = 1511440;
		holech6.lineWidth = 5;
		holech6.smoothness = 100;

		// holech7
		const holech7 = this.add.ellipse(2222, 47, 128, 128);
		holech7.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		holech7.scaleX = 0.4260179189796247;
		holech7.scaleY = 0.4260179189796247;
		holech7.alpha = 0.6;
		holech7.isFilled = true;
		holech7.fillColor = 0;
		holech7.isStroked = true;
		holech7.strokeColor = 1511440;
		holech7.lineWidth = 5;
		holech7.smoothness = 70;

		// holech8
		const holech8 = this.add.ellipse(2313, 186, 128, 128);
		holech8.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		holech8.scaleX = 0.4260179189796247;
		holech8.scaleY = 0.4260179189796247;
		holech8.alpha = 0.6;
		holech8.isFilled = true;
		holech8.fillColor = 0;
		holech8.isStroked = true;
		holech8.strokeColor = 1511440;
		holech8.lineWidth = 5;
		holech8.smoothness = 100;

		// holech9
		const holech9 = this.add.ellipse(890, 68, 128, 128);
		holech9.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		holech9.scaleX = 0.4260179189796247;
		holech9.scaleY = 0.4260179189796247;
		holech9.alpha = 0.6;
		holech9.isFilled = true;
		holech9.fillColor = 0;
		holech9.isStroked = true;
		holech9.strokeColor = 1511440;
		holech9.lineWidth = 5;
		holech9.smoothness = 100;

		// holech10
		const holech10 = this.add.ellipse(1032, 278, 128, 128);
		holech10.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		holech10.scaleX = 0.4260179189796247;
		holech10.scaleY = 0.4260179189796247;
		holech10.alpha = 0.6;
		holech10.isFilled = true;
		holech10.fillColor = 0;
		holech10.isStroked = true;
		holech10.strokeColor = 1511440;
		holech10.lineWidth = 5;
		holech10.smoothness = 100;

		// holech11
		const holech11 = this.add.ellipse(2729, -389, 128, 128);
		holech11.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		holech11.scaleX = 0.4260179189796247;
		holech11.scaleY = 0.4260179189796247;
		holech11.alpha = 0.6;
		holech11.isFilled = true;
		holech11.fillColor = 0;
		holech11.isStroked = true;
		holech11.strokeColor = 1511440;
		holech11.lineWidth = 5;
		holech11.smoothness = 100;

		// holech12
		const holech12 = this.add.ellipse(2820, -250, 128, 128);
		holech12.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		holech12.scaleX = 0.4260179189796247;
		holech12.scaleY = 0.4260179189796247;
		holech12.alpha = 0.6;
		holech12.isFilled = true;
		holech12.fillColor = 0;
		holech12.isStroked = true;
		holech12.strokeColor = 1511440;
		holech12.lineWidth = 5;
		holech12.smoothness = 100;

		// holech13
		const holech13 = this.add.ellipse(-216, -498, 128, 128);
		holech13.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		holech13.scaleX = 0.4260179189796247;
		holech13.scaleY = 0.4260179189796247;
		holech13.alpha = 0.6;
		holech13.isFilled = true;
		holech13.fillColor = 0;
		holech13.isStroked = true;
		holech13.strokeColor = 1511440;
		holech13.lineWidth = 5;
		holech13.smoothness = 100;

		// holech14
		const holech14 = this.add.ellipse(-125, -359, 128, 128);
		holech14.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		holech14.scaleX = 0.4260179189796247;
		holech14.scaleY = 0.4260179189796247;
		holech14.alpha = 0.6;
		holech14.isFilled = true;
		holech14.fillColor = 0;
		holech14.isStroked = true;
		holech14.strokeColor = 1511440;
		holech14.lineWidth = 5;
		holech14.smoothness = 100;

		// mousesnifcheese1
		const mousesnifcheese1 = this.physics.add.sprite(-1336, -338, "__grey_mouse_sniff_004");
		mousesnifcheese1.scaleX = 0.13508710527319806;
		mousesnifcheese1.scaleY = 0.13508710527319806;
		mousesnifcheese1.body.setSize(442, 292, false);

		// hole22
		const hole22 = this.add.ellipse(513, -200, 128, 128);
		hole22.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole22.scaleX = 0.4260179189796247;
		hole22.scaleY = 0.4260179189796247;
		hole22.alpha = 0.4;
		hole22.isFilled = true;
		hole22.fillColor = 0;
		hole22.isStroked = true;
		hole22.strokeColor = 1511440;
		hole22.lineWidth = 5;
		hole22.smoothness = 100;

		// hole23
		const hole23 = this.add.ellipse(834, -701, 128, 128);
		hole23.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole23.scaleX = 0.4260179189796247;
		hole23.scaleY = 0.4260179189796247;
		hole23.alpha = 0.4;
		hole23.isFilled = true;
		hole23.fillColor = 0;
		hole23.isStroked = true;
		hole23.strokeColor = 1511440;
		hole23.lineWidth = 5;
		hole23.smoothness = 100;

		// hole24
		const hole24 = this.add.ellipse(1311, 72, 128, 128);
		hole24.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole24.scaleX = 0.23843587044250447;
		hole24.scaleY = 0.23843587044250447;
		hole24.alpha = 0.4;
		hole24.isFilled = true;
		hole24.fillColor = 0;
		hole24.isStroked = true;
		hole24.strokeColor = 1511440;
		hole24.lineWidth = 5;
		hole24.smoothness = 100;

		// hole25
		const hole25 = this.add.ellipse(837, -191, 128, 128);
		hole25.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole25.scaleX = 0.4293564370171937;
		hole25.scaleY = 0.4293564370171937;
		hole25.alpha = 0.4;
		hole25.isFilled = true;
		hole25.fillColor = 0;
		hole25.isStroked = true;
		hole25.strokeColor = 1511440;
		hole25.lineWidth = 5;
		hole25.smoothness = 100;

		// hole26
		const hole26 = this.add.ellipse(1393, -709, 128, 128);
		hole26.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole26.scaleX = 0.4260179189796247;
		hole26.scaleY = 0.4260179189796247;
		hole26.alpha = 0.4;
		hole26.isFilled = true;
		hole26.fillColor = 0;
		hole26.isStroked = true;
		hole26.strokeColor = 1511440;
		hole26.lineWidth = 5;
		hole26.smoothness = 100;

		// hole41
		const hole41 = this.add.ellipse(2519, -60, 128, 128);
		hole41.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole41.scaleX = 0.36316554274137985;
		hole41.scaleY = 0.36316554274137985;
		hole41.alpha = 0.4;
		hole41.isFilled = true;
		hole41.fillColor = 0;
		hole41.isStroked = true;
		hole41.strokeColor = 1511440;
		hole41.lineWidth = 5;
		hole41.smoothness = 100;

		// hole27
		const hole27 = this.add.ellipse(-676, -81, 128, 128);
		hole27.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole27.scaleX = 0.2709652348067405;
		hole27.scaleY = 0.2709652348067405;
		hole27.alpha = 0.4;
		hole27.isFilled = true;
		hole27.fillColor = 0;
		hole27.isStroked = true;
		hole27.strokeColor = 1511440;
		hole27.lineWidth = 5;
		hole27.smoothness = 100;

		// hole28
		const hole28 = this.add.ellipse(1512, -144, 128, 128);
		hole28.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole28.scaleX = 0.4260179189796247;
		hole28.scaleY = 0.4260179189796247;
		hole28.alpha = 0.4;
		hole28.isFilled = true;
		hole28.fillColor = 0;
		hole28.isStroked = true;
		hole28.strokeColor = 1511440;
		hole28.lineWidth = 5;
		hole28.smoothness = 100;

		// hole29
		const hole29 = this.add.ellipse(-1234, 23, 128, 128);
		hole29.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole29.scaleX = 0.28926949901554316;
		hole29.scaleY = 0.28926949901554316;
		hole29.alpha = 0.4;
		hole29.isFilled = true;
		hole29.fillColor = 0;
		hole29.isStroked = true;
		hole29.strokeColor = 1511440;
		hole29.lineWidth = 5;
		hole29.smoothness = 100;

		// hole30
		const hole30 = this.add.ellipse(514, 309, 128, 128);
		hole30.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole30.scaleX = 0.4260179189796247;
		hole30.scaleY = 0.4260179189796247;
		hole30.alpha = 0.4;
		hole30.isFilled = true;
		hole30.fillColor = 0;
		hole30.isStroked = true;
		hole30.strokeColor = 1511440;
		hole30.lineWidth = 5;
		hole30.smoothness = 100;

		// dogInterior1
		const dogInterior1 = new DogInterior(this, 779, 545);
		this.add.existing(dogInterior1);
		dogInterior1.scaleX = 0.8318276168859287;
		dogInterior1.scaleY = 0.8318276168859287;

		// hole31
		const hole31 = this.add.ellipse(1898, -686, 128, 128);
		hole31.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole31.scaleX = 0.4260179189796247;
		hole31.scaleY = 0.4260179189796247;
		hole31.alpha = 0.4;
		hole31.isFilled = true;
		hole31.fillColor = 0;
		hole31.isStroked = true;
		hole31.strokeColor = 1511440;
		hole31.lineWidth = 5;
		hole31.smoothness = 100;

		// hole32
		const hole32 = this.add.ellipse(2281, -199, 128, 128);
		hole32.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole32.scaleX = 0.4260179189796247;
		hole32.scaleY = 0.4260179189796247;
		hole32.alpha = 0.4;
		hole32.isFilled = true;
		hole32.fillColor = 0;
		hole32.isStroked = true;
		hole32.strokeColor = 1511440;
		hole32.lineWidth = 5;
		hole32.smoothness = 100;

		// hole33
		const hole33 = this.add.ellipse(1971, -416, 128, 128);
		hole33.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole33.scaleX = 0.4260179189796247;
		hole33.scaleY = 0.4260179189796247;
		hole33.alpha = 0.4;
		hole33.isFilled = true;
		hole33.fillColor = 0;
		hole33.isStroked = true;
		hole33.strokeColor = 1511440;
		hole33.lineWidth = 5;
		hole33.smoothness = 100;

		// hole34
		const hole34 = this.add.ellipse(2852, 93, 128, 128);
		hole34.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole34.scaleX = 0.4260179189796247;
		hole34.scaleY = 0.4260179189796247;
		hole34.alpha = 0.4;
		hole34.isFilled = true;
		hole34.fillColor = 0;
		hole34.isStroked = true;
		hole34.strokeColor = 1511440;
		hole34.lineWidth = 5;
		hole34.smoothness = 100;

		// hole35
		const hole35 = this.add.ellipse(2520, -571, 128, 128);
		hole35.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole35.scaleX = 0.4260179189796247;
		hole35.scaleY = 0.4260179189796247;
		hole35.alpha = 0.4;
		hole35.isFilled = true;
		hole35.fillColor = 0;
		hole35.isStroked = true;
		hole35.strokeColor = 1511440;
		hole35.lineWidth = 5;
		hole35.smoothness = 100;

		// hole36
		const hole36 = this.add.ellipse(2775, -688, 128, 128);
		hole36.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole36.scaleX = 0.4260179189796247;
		hole36.scaleY = 0.4260179189796247;
		hole36.alpha = 0.4;
		hole36.isFilled = true;
		hole36.fillColor = 0;
		hole36.isStroked = true;
		hole36.strokeColor = 1511440;
		hole36.lineWidth = 5;
		hole36.smoothness = 100;

		// hole40
		const hole40 = this.add.ellipse(2602, 321, 128, 128);
		hole40.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole40.scaleX = 0.4260179189796247;
		hole40.scaleY = 0.4260179189796247;
		hole40.alpha = 0.4;
		hole40.isFilled = true;
		hole40.fillColor = 0;
		hole40.isStroked = true;
		hole40.strokeColor = 1511440;
		hole40.lineWidth = 5;
		hole40.smoothness = 100;

		// hole37
		const hole37 = this.add.ellipse(1399, 310, 128, 128);
		hole37.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole37.scaleX = 0.4260179189796247;
		hole37.scaleY = 0.4260179189796247;
		hole37.alpha = 0.4;
		hole37.isFilled = true;
		hole37.fillColor = 0;
		hole37.isStroked = true;
		hole37.strokeColor = 1511440;
		hole37.lineWidth = 5;
		hole37.smoothness = 100;

		// hole38
		const hole38 = this.add.ellipse(1135, -736, 128, 128);
		hole38.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole38.scaleX = 0.3472955634655955;
		hole38.scaleY = 0.3472955634655955;
		hole38.alpha = 0.4;
		hole38.isFilled = true;
		hole38.fillColor = 0;
		hole38.isStroked = true;
		hole38.strokeColor = 1511440;
		hole38.lineWidth = 5;
		hole38.smoothness = 100;

		// hole39
		const hole39 = this.add.ellipse(1897, 331, 128, 128);
		hole39.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole39.scaleX = 0.4260179189796247;
		hole39.scaleY = 0.4260179189796247;
		hole39.alpha = 0.4;
		hole39.isFilled = true;
		hole39.fillColor = 0;
		hole39.isStroked = true;
		hole39.strokeColor = 1511440;
		hole39.lineWidth = 5;
		hole39.smoothness = 100;

		// cheeseplatformlast
		const cheeseplatformlast = this.physics.add.sprite(2873, 610, "cheese_slice_stack_01");
		cheeseplatformlast.scaleX = 0.5021897896347327;
		cheeseplatformlast.scaleY = 0.5021897896347327;
		cheeseplatformlast.tintTopLeft = 15724527;
		cheeseplatformlast.body.setOffset(0, 20);
		cheeseplatformlast.body.setSize(523, 195, false);

		// mousesnifcheese2
		const mousesnifcheese2 = this.physics.add.sprite(968, 129, "__grey_mouse_sniff_004");
		mousesnifcheese2.scaleX = 0.13508710527319806;
		mousesnifcheese2.scaleY = 0.13508710527319806;
		mousesnifcheese2.body.setSize(442, 292, false);

		// hole42
		const hole42 = this.add.ellipse(3017, -206, 128, 128);
		hole42.setInteractive(new Phaser.Geom.Rectangle(0, 100, 128, 200), Phaser.Geom.Rectangle.Contains);
		hole42.scaleX = 0.2821327265332738;
		hole42.scaleY = 0.2821327265332738;
		hole42.alpha = 0.4;
		hole42.isFilled = true;
		hole42.fillColor = 0;
		hole42.isStroked = true;
		hole42.strokeColor = 1511440;
		hole42.lineWidth = 5;
		hole42.smoothness = 100;

		// container_1
		const container_1 = new CheeseSlicer(this, -660, -503);
		this.add.existing(container_1);

		// cheeseSlicer1
		const cheeseSlicer1 = new CheeseSlicer(this, -1270, 54);
		this.add.existing(cheeseSlicer1);

		// cheeseSlicer
		const cheeseSlicer = new CheeseSlicer(this, -20, 109);
		this.add.existing(cheeseSlicer);

		// cheeseSlicer_1
		const cheeseSlicer_1 = new CheeseSlicer(this, -592, 89);
		this.add.existing(cheeseSlicer_1);

		// cheeseSlicer_2
		const cheeseSlicer_2 = new CheeseSlicer(this, 491, -3);
		this.add.existing(cheeseSlicer_2);

		// cheeseSlicer_3
		const cheeseSlicer_3 = new CheeseSlicer(this, 1133, -444);
		this.add.existing(cheeseSlicer_3);

		// cheeseSlicer_4
		const cheeseSlicer_4 = new CheeseSlicer(this, 1713.7065986567723, 106.7425223729502);
		this.add.existing(cheeseSlicer_4);

		// cheeseSlicer_5
		const cheeseSlicer_5 = new CheeseSlicer(this, 2292, -455);
		this.add.existing(cheeseSlicer_5);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(764, 5, 128, 128);
		rectangle_1.scaleX = 60.198912898620335;
		rectangle_1.scaleY = 23.43431116049416;
		rectangle_1.visible = false;
		rectangle_1.alpha = 0.15;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 9408596;

		// saturateFx
		const saturateFx = rectangle_1.postFX.addColorMatrix();
		saturateFx.saturate(1);

		this.red_large_stripe_1 = red_large_stripe_1;
		this.red_large_stripe = red_large_stripe;
		this.bottom = bottom;
		this.ceiling = ceiling;
		this.ceiling_1 = ceiling_1;
		this.shelf10 = shelf10;
		this.mousesnif1 = mousesnif1;
		this.mousesnif2 = mousesnif2;
		this.mousesnif3 = mousesnif3;
		this.mousesnif4 = mousesnif4;
		this.mousesnif5 = mousesnif5;
		this.catPlayer = catPlayer;
		this.hole1 = hole1;
		this.indoorwindow1 = indoorwindow1;
		this.cheeseplatform1 = cheeseplatform1;
		this.cheeseplatform2 = cheeseplatform2;
		this.hole2 = hole2;
		this.hole3 = hole3;
		this.hole4 = hole4;
		this.cheeseplatform = cheeseplatform;
		this.hole5 = hole5;
		this.hole6 = hole6;
		this.hole7 = hole7;
		this.hole8 = hole8;
		this.cheesewheel6 = cheesewheel6;
		this.hole9 = hole9;
		this.hole10 = hole10;
		this.hole11 = hole11;
		this.hole12 = hole12;
		this.hole13 = hole13;
		this.hole14 = hole14;
		this.cheesewheel5 = cheesewheel5;
		this.cheesewheel4 = cheesewheel4;
		this.hole15 = hole15;
		this.hole16 = hole16;
		this.hole17 = hole17;
		this.cheesewheel1 = cheesewheel1;
		this.cheesewheel2 = cheesewheel2;
		this.cheesewheel3 = cheesewheel3;
		this.cheeswheel7 = cheeswheel7;
		this.wall2 = wall2;
		this.wall3 = wall3;
		this.wall_1 = wall_1;
		this.mousesnifcheese6 = mousesnifcheese6;
		this.mousesniff6 = mousesniff6;
		this.mousesniff7 = mousesniff7;
		this.mousesniff8 = mousesniff8;
		this.mousesniff9 = mousesniff9;
		this.mousesniff10 = mousesniff10;
		this.hole21 = hole21;
		this.holech1 = holech1;
		this.holech2 = holech2;
		this.holech3 = holech3;
		this.holech4 = holech4;
		this.holech5 = holech5;
		this.holech6 = holech6;
		this.holech7 = holech7;
		this.holech8 = holech8;
		this.holech9 = holech9;
		this.holech10 = holech10;
		this.holech11 = holech11;
		this.holech12 = holech12;
		this.holech13 = holech13;
		this.holech14 = holech14;
		this.mousesnifcheese1 = mousesnifcheese1;
		this.hole22 = hole22;
		this.hole23 = hole23;
		this.hole24 = hole24;
		this.hole25 = hole25;
		this.hole26 = hole26;
		this.hole41 = hole41;
		this.hole27 = hole27;
		this.hole28 = hole28;
		this.hole29 = hole29;
		this.hole30 = hole30;
		this.dogInterior1 = dogInterior1;
		this.hole31 = hole31;
		this.hole32 = hole32;
		this.hole33 = hole33;
		this.hole34 = hole34;
		this.hole35 = hole35;
		this.hole36 = hole36;
		this.hole40 = hole40;
		this.hole37 = hole37;
		this.hole38 = hole38;
		this.hole39 = hole39;
		this.cheeseplatformlast = cheeseplatformlast;
		this.mousesnifcheese2 = mousesnifcheese2;
		this.hole42 = hole42;
		this.container_1 = container_1;
		this.cheeseSlicer1 = cheeseSlicer1;
		this.cheeseSlicer = cheeseSlicer;
		this.cheeseSlicer_2 = cheeseSlicer_2;
		this.cheeseSlicer_3 = cheeseSlicer_3;
		this.cheeseSlicer_4 = cheeseSlicer_4;
		this.cheeseSlicer_5 = cheeseSlicer_5;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	red_large_stripe_1;
	/** @type {Phaser.GameObjects.TileSprite} */
	red_large_stripe;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bottom;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceiling_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf10;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	mousesnif1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	mousesnif2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	mousesnif3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	mousesnif4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	mousesnif5;
	/** @type {CatPlayer} */
	catPlayer;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole1;
	/** @type {IndoorWindow} */
	indoorwindow1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cheeseplatform1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cheeseplatform2;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole2;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole3;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cheeseplatform;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole5;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole6;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole7;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole8;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cheesewheel6;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole9;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole10;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole11;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole12;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole13;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole14;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cheesewheel5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cheesewheel4;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole15;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole16;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole17;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cheesewheel1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cheesewheel2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cheesewheel3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cheeswheel7;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	wall2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	wall3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	wall_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	mousesnifcheese6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	mousesniff6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	mousesniff7;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	mousesniff8;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	mousesniff9;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	mousesniff10;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole21;
	/** @type {Phaser.GameObjects.Ellipse} */
	holech1;
	/** @type {Phaser.GameObjects.Ellipse} */
	holech2;
	/** @type {Phaser.GameObjects.Ellipse} */
	holech3;
	/** @type {Phaser.GameObjects.Ellipse} */
	holech4;
	/** @type {Phaser.GameObjects.Ellipse} */
	holech5;
	/** @type {Phaser.GameObjects.Ellipse} */
	holech6;
	/** @type {Phaser.GameObjects.Ellipse} */
	holech7;
	/** @type {Phaser.GameObjects.Ellipse} */
	holech8;
	/** @type {Phaser.GameObjects.Ellipse} */
	holech9;
	/** @type {Phaser.GameObjects.Ellipse} */
	holech10;
	/** @type {Phaser.GameObjects.Ellipse} */
	holech11;
	/** @type {Phaser.GameObjects.Ellipse} */
	holech12;
	/** @type {Phaser.GameObjects.Ellipse} */
	holech13;
	/** @type {Phaser.GameObjects.Ellipse} */
	holech14;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	mousesnifcheese1;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole22;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole23;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole24;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole25;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole26;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole41;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole27;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole28;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole29;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole30;
	/** @type {DogInterior} */
	dogInterior1;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole31;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole32;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole33;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole34;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole35;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole36;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole40;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole37;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole38;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole39;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cheeseplatformlast;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	mousesnifcheese2;
	/** @type {Phaser.GameObjects.Ellipse} */
	hole42;
	/** @type {CheeseSlicer} */
	container_1;
	/** @type {CheeseSlicer} */
	cheeseSlicer1;
	/** @type {CheeseSlicer} */
	cheeseSlicer;
	/** @type {CheeseSlicer} */
	cheeseSlicer_2;
	/** @type {CheeseSlicer} */
	cheeseSlicer_3;
	/** @type {CheeseSlicer} */
	cheeseSlicer_4;
	/** @type {CheeseSlicer} */
	cheeseSlicer_5;

	/* START-USER-CODE */

	// Write your code here

	create() {


mouseicon=true;

		this.physics.world.setBounds(-1800,-1000,5000, 1700);
		this.cameras.main.setBounds(-1800,-800,5000, 1500);
		this.cameras.main.setZoom(0.74);

		this.UpdateGroup=this.add.group();
		this.HolesGroup=this.add.group();
		this.CropItemGroup=this.add.group();

		this.EnemyGroup=this.add.group();

		this.MouseGroup=this.add.group();

		this.goaltheme=this.sound.add('missiongoal');
			this.leveltheme=this.sound.add('maintheme');
			this.leveltheme.play();



		//this.CatCollhole1=false;
		//this.CatCollhole5=false;


		this.editorCreate();



		this.mousesnif1.play('mousesniff');
		this.mousesnif2.play('mousesniff');
		this.mousesnif3.play('mousesniff');
		this.mousesnif4.play('mousesniff');

		this.hole5.mouseIn=true;
		this.hole3.mouseIn=true;
		this.hole11.mouseIn=true;
		this.hole14.mouseIn=true;
		this.hole7.mouseIn=true;
		this.hole30.mouseIn=true;
		this.holech1.mouseIn=true;
		this.hole28.mouseIn=true;
		this.hole32.mouseIn=true;
		this.hole31.mouseIn=true;
		this.holech9.mouseIn=true;
		//this.holech10.mouseIn=true;

 this.tweenchan=this.tweens.add({
            targets: [this.skewerf,this.skewer2],
			y:"+=250",
			 duration:950,
	//scale:{start: 0.1, to: 0.5 },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1,
        });

	//	this.StartMouseChanger();


		this.ChangeMouse(this.mousesnif2,this.hole3,this.hole21);
		this.ChangeMouse(this.mousesnif3,this.hole11,this.hole15);
		this.ChangeMouse(this.mousesnif4,this.hole14,this.hole17);
		this.ChangeMouse(this.mousesnif1,this.hole5,this.hole1);
		this.ChangeMouse(this.mousesnif5,this.hole7,this.hole16);
		this.ChangeMouse(this.mousesnifcheese6,this.hole30,this.hole22);
		this.ChangeMouse(this.mousesniff6,this.hole6,this.hole25);
		this.ChangeMouse(this.mousesniff7,this.hole23,this.hole26);
		this.ChangeMouse(this.mousesniff8,this.hole28,this.hole39);
		this.ChangeMouse(this.mousesniff9,this.hole32,this.hole34);
		this.ChangeMouse(this.mousesniff10,this.hole31,this.hole36);






		this.test();

		this.AddingRatsStuff();

			this.AddingMouseStuff();


		//	this.cornersidecheese.setCrop(0, 20, 500, 500);

			this.HolesGroup.add(this.hole1);
			this.HolesGroup.add(this.hole2);
			this.HolesGroup.add(this.hole3);
			this.HolesGroup.add(this.hole4);
			this.HolesGroup.add(this.hole5);
			this.HolesGroup.add(this.hole6);
			this.HolesGroup.add(this.hole7);
			this.HolesGroup.add(this.hole8);
			this.HolesGroup.add(this.hole9);
			this.HolesGroup.add(this.hole10);
			this.HolesGroup.add(this.hole11);
			this.HolesGroup.add(this.hole12);
			this.HolesGroup.add(this.hole13);
			this.HolesGroup.add(this.hole14);
			this.HolesGroup.add(this.hole15);
			this.HolesGroup.add(this.hole16);
			this.HolesGroup.add(this.hole17);
			this.HolesGroup.add(this.hole21);





			this.HolesGroup.add(this.hole22);
			this.HolesGroup.add(this.hole23);
			this.HolesGroup.add(this.hole24);
			this.HolesGroup.add(this.hole25);
			this.HolesGroup.add(this.hole26);
			this.HolesGroup.add(this.hole27);
			this.HolesGroup.add(this.hole28);
			this.HolesGroup.add(this.hole29);
			this.HolesGroup.add(this.hole30);
			this.HolesGroup.add(this.hole31);
			this.HolesGroup.add(this.hole32);
			this.HolesGroup.add(this.hole33);
			this.HolesGroup.add(this.hole34);
			this.HolesGroup.add(this.hole35);
			this.HolesGroup.add(this.hole36);
			this.HolesGroup.add(this.hole37);
			this.HolesGroup.add(this.hole38);
			this.HolesGroup.add(this.hole39);
			this.HolesGroup.add(this.hole40);
			this.HolesGroup.add(this.hole41);
			this.HolesGroup.add(this.hole42);

			this.HolesGroup.add(this.holech1);
			this.HolesGroup.add(this.holech2);
			this.HolesGroup.add(this.holech3);
			this.HolesGroup.add(this.holech4);
			this.HolesGroup.add(this.holech5);
			this.HolesGroup.add(this.holech6);
			this.HolesGroup.add(this.holech7);
			this.HolesGroup.add(this.holech8);
			this.HolesGroup.add(this.holech9);
			this.HolesGroup.add(this.holech10);
			this.HolesGroup.add(this.holech11);
			this.HolesGroup.add(this.holech12);
			this.HolesGroup.add(this.holech13);
			this.HolesGroup.add(this.holech14);

			this.CreatePlatform(this.cheeseplatform1);
			this.CreatePlatform(this.cheeseplatform2);



			this.time.addEvent({ delay:3000, callback:() => {

			if(this.mousesnifcheese1.active){

				this.CheckMouseRotatinghole(this.mousesnifcheese1,this.holech1,this.holech2);
					}

					if(this.mousesnifcheese2.active){
					this.CheckMouseRotatinghole(this.mousesnifcheese2,this.holech9,this.holech10);
					};
					}, callbackScope: this,repeat:-1});


		//this.CreatePlatform(this.plagtformcheese);



this.physics.world.enable(this.HolesGroup);

		this.MouseGroup.add(this.mousesnif2);
		this.MouseGroup.add(this.mousesnif1);
		this.MouseGroup.add(this.mousesnif3);
		this.MouseGroup.add(this.mousesnif4);
		this.MouseGroup.add(this.mousesnif5);
		this.MouseGroup.add(this.mousesniff6);
		this.MouseGroup.add(this.mousesniff7);
		this.MouseGroup.add(this.mousesnifcheese1);
		this.MouseGroup.add(this.mousesnifcheese2);
		this.MouseGroup.add(this.mousesnifcheese6);
		this.MouseGroup.add(this.mousesniff8);
		this.MouseGroup.add(this.mousesniff9);
		this.MouseGroup.add(this.mousesniff10);

		this.physics.add.overlap(this.catPlayer,this.HolesGroup,this.StickToObject,null,this);
				this.physics.add.overlap(this.catPlayer,this.MouseGroup,this.EatMouse,null,this);
						this.physics.add.overlap(this.catPlayer,this.mousesnif4,this.EatMouse,null,this);
	this.physics.add.overlap(this.catPlayer,this.cheeseSlicer1.holeslice,this.GetHit,null,this);
		this.physics.add.overlap(this.catPlayer,this.EnemyGroup,this.GetHit,null,this);

		this.physics.add.overlap(this.catPlayer,this.dogInterior1.dog,this.GetHit,null,this);

				this.physics.add.overlap(this.catPlayer,this.indoorwindow1.waythrough,this.JumpOut,null,this);

		this.cameras.main.startFollow(this.catPlayer,false,0.2,0.2,0,0);
//12
		MissionCount=7;

		this.CropItemGroup.children.iterate(function(child){

if(child){

	child.setCrop(1,1, child.width-10, child.height-10);
	//child.setCrop(0, 0, child.body.displayWidth-20, 500);

}

  });


this.HolesGroup.children.iterate(function(child){

if(child){

child.body.setSize(100,110);
child.body.setOffset(0,50);

};

  });

	//	this.CreatePlatform(this.goup);

	}

	EatMouse(Cat,Mouse){

		if(Mouse){
		MissionCount--;
		Mouse.destroy();
		this.mousecatchtheme.play();
		this.CounterMouse++;

			if(MissionCount==0){
console.log('Stage clear!' + StageClear);
				ShowCompletetext=true;
				LevelMouse4Clear=true;
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


ChangeMouse(Mouse,Hole1,Hole2){
this.RND=Phaser.Math.Between(0,1500);

this.time.addEvent({ delay:this.RND, callback:() => {
	Mouse.play('mousesniff');
	this.time.addEvent({ delay:3000, callback:() => {
		if(Mouse.active){

		this.CollHole1=this.physics.overlap(this.catPlayer,Hole1);
		this.CollHole2=this.physics.overlap(this.catPlayer,Hole2);

	if(Hole1.mouseIn && this.CollHole2==false)
		{
		Mouse.x=Hole2.x;
		Mouse.y=Hole2.y;
		Hole1.mouseIn=false;
		}
	else if(this.CollHole1==false)
	{
Mouse.x=Hole1.x;
Mouse.y=Hole1.y;
Hole1.mouseIn=true;
	}
		};
		}, callbackScope: this,repeat:-1});

		}, callbackScope: this,repeat:0});



}

CheckMouseRotatinghole(Mouse,Hole1,Hole2){
Mouse.play('mousesniff');


		this.CollHole1=this.physics.overlap(this.catPlayer,Hole1);
		this.CollHole2=this.physics.overlap(this.catPlayer,Hole2);

	if(Hole1.mouseIn && this.CollHole1==false)
	{
Mouse.x=Hole2.x;
Mouse.y=Hole2.y;
Hole1.mouseIn=false;
	}
	else if(this.CollHole2==false)
	{
Mouse.x=Hole1.x;
Mouse.y=Hole1.y;
Hole1.mouseIn=true;
	}


}

KeepUpWithTheRotationMouse(Mouse, Hole1, Hole2)
{
if(Hole1.mouseIn)
	{
Mouse.x=Hole2.x;
Mouse.y=Hole2.y;

	}
	else
	{
Mouse.x=Hole1.x;
Mouse.y=Hole1.y;

	}

};


	update(){





this.KeepUpWithTheRotationMouse(this.mousesnifcheese1, this.holech1, this.holech2);
this.KeepUpWithTheRotationMouse(this.mousesnifcheese2, this.holech9, this.holech10);
//this.mousesnifcheese1.x=this.holech1.x;
//this.mousesnifcheese1.y=this.holech1.y;




		if(this.catPlayer.stick==false)
	{
				this.catPlayer.x=this.WhichObjectHangOn.x;
		}
		if(this.catPlayer.stick==false && this.catPlayer.JumpVerticalPaint==false){
				this.catPlayer.y=this.WhichObjectHangOn.y+30;
		};

this.step=0.02;
this.step2=0.025;
			Phaser.Math.RotateAroundDistance(this.holech1, this.cheeswheel7.x,this.cheeswheel7.y, this.step, 100);
			Phaser.Math.RotateAroundDistance(this.holech2, this.cheeswheel7.x,this.cheeswheel7.y, this.step, 101);

			Phaser.Math.RotateAroundDistance(this.holech3, this.cheesewheel1.x,this.cheesewheel1.y, this.step, 101);
			Phaser.Math.RotateAroundDistance(this.holech4, this.cheesewheel1.x,this.cheesewheel1.y, this.step, 99);

			Phaser.Math.RotateAroundDistance(this.holech5, this.cheesewheel3.x,this.cheesewheel3.y, this.step2, 80);
			Phaser.Math.RotateAroundDistance(this.holech6, this.cheesewheel3.x,this.cheesewheel3.y, this.step2, 90);

			Phaser.Math.RotateAroundDistance(this.holech7, this.cheesewheel2.x,this.cheesewheel2.y, this.step, 100);
			Phaser.Math.RotateAroundDistance(this.holech8, this.cheesewheel2.x,this.cheesewheel2.y, this.step, 95);

			Phaser.Math.RotateAroundDistance(this.holech9, this.cheesewheel4.x,this.cheesewheel4.y, this.step2, 100);
			Phaser.Math.RotateAroundDistance(this.holech10, this.cheesewheel4.x,this.cheesewheel4.y, this.step2, 105);

			Phaser.Math.RotateAroundDistance(this.holech11, this.cheesewheel5.x,this.cheesewheel5.y, this.step, 80);
			Phaser.Math.RotateAroundDistance(this.holech12, this.cheesewheel5.x,this.cheesewheel5.y, this.step, 81);

			Phaser.Math.RotateAroundDistance(this.holech13, this.cheesewheel6.x,this.cheesewheel6.y, this.step, 80);
			Phaser.Math.RotateAroundDistance(this.holech14, this.cheesewheel6.x,this.cheesewheel6.y, this.step, 85);


if(this.catPlayer.body.touching.down){

//this.catPlayer.body.

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
