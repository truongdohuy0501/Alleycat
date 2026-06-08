
// You can write more code here

/* START OF COMPILED CODE */

class LoveLevel4 extends BaseScene {

	constructor() {
		super("LoveLevel4");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// sky
		const sky = this.add.image(592, -4123, "sky");
		sky.scaleX = 1.0825492526253053;
		sky.scaleY = 10.419272087292146;
		sky.tintTopLeft = 14291474;
		sky.tintTopRight = 1518946;
		sky.tintBottomLeft = 12549501;
		sky.tintBottomRight = 8225985;

		// sky_1
		const sky_1 = this.add.image(594, -792, "sky");
		sky_1.scaleX = 1.0825492526253053;
		sky_1.scaleY = 3.771733843063168;
		sky_1.alphaTopLeft = 0;
		sky_1.alphaTopRight = 0;
		sky_1.tintTopLeft = 14291474;
		sky_1.tintTopRight = 7110054;
		sky_1.tintBottomLeft = 3886231;
		sky_1.tintBottomRight = 7358810;

		// heartPlatform0
		const heartPlatform0 = new HeartPlatform(this, -80, 666);
		this.add.existing(heartPlatform0);
		heartPlatform0.scaleX = 0.6859590093117656;
		heartPlatform0.scaleY = 0.8;
		heartPlatform0.visible = true;
		heartPlatform0.alpha = 0.4;

		// health_12
		const health_12 = this.add.image(1311, 508, "redheart");
		health_12.scaleX = 0.31849922434064726;
		health_12.scaleY = 0.31849922434064726;
		health_12.alpha = 0.5;
		health_12.alphaTopLeft = 0.5;
		health_12.alphaTopRight = 0.5;
		health_12.alphaBottomLeft = 0.5;
		health_12.alphaBottomRight = 0.5;

		// health_13
		const health_13 = this.add.image(1311, 418, "redheart");
		health_13.scaleX = 0.3184992243406469;
		health_13.scaleY = 0.3184992243406469;
		health_13.alpha = 0.5;
		health_13.alphaTopLeft = 0.5;
		health_13.alphaTopRight = 0.5;
		health_13.alphaBottomLeft = 0.5;
		health_13.alphaBottomRight = 0.5;

		// health_14
		const health_14 = this.add.image(1311, 678, "redheart");
		health_14.scaleX = 0.31849922434064726;
		health_14.scaleY = 0.31849922434064726;
		health_14.alpha = 0.5;
		health_14.alphaTopLeft = 0.5;
		health_14.alphaTopRight = 0.5;
		health_14.alphaBottomLeft = 0.5;
		health_14.alphaBottomRight = 0.5;

		// health_15
		const health_15 = this.add.image(1311, 596, "redheart");
		health_15.scaleX = 0.31849922434064726;
		health_15.scaleY = 0.31849922434064726;
		health_15.alpha = 0.5;
		health_15.alphaTopLeft = 0.5;
		health_15.alphaTopRight = 0.5;
		health_15.alphaBottomLeft = 0.5;
		health_15.alphaBottomRight = 0.5;

		// health
		const health = this.add.image(-179, 513, "redheart");
		health.scaleX = 0.31849922434064726;
		health.scaleY = 0.31849922434064726;
		health.alpha = 0.5;
		health.alphaTopLeft = 0.5;
		health.alphaTopRight = 0.5;
		health.alphaBottomLeft = 0.5;
		health.alphaBottomRight = 0.5;

		// health_1
		const health_1 = this.add.image(-179, 423, "redheart");
		health_1.scaleX = 0.3184992243406469;
		health_1.scaleY = 0.3184992243406469;
		health_1.alpha = 0.5;
		health_1.alphaTopLeft = 0.5;
		health_1.alphaTopRight = 0.5;
		health_1.alphaBottomLeft = 0.5;
		health_1.alphaBottomRight = 0.5;

		// health_2
		const health_2 = this.add.image(-179, 683, "redheart");
		health_2.scaleX = 0.31849922434064726;
		health_2.scaleY = 0.31849922434064726;
		health_2.alpha = 0.5;
		health_2.alphaTopLeft = 0.5;
		health_2.alphaTopRight = 0.5;
		health_2.alphaBottomLeft = 0.5;
		health_2.alphaBottomRight = 0.5;

		// health_3
		const health_3 = this.add.image(-179, 601, "redheart");
		health_3.scaleX = 0.31849922434064726;
		health_3.scaleY = 0.31849922434064726;
		health_3.alpha = 0.5;
		health_3.alphaTopLeft = 0.5;
		health_3.alphaTopRight = 0.5;
		health_3.alphaBottomLeft = 0.5;
		health_3.alphaBottomRight = 0.5;

		// health_4
		const health_4 = this.add.image(-179, 329, "redheart");
		health_4.scaleX = 0.31849922434064726;
		health_4.scaleY = 0.31849922434064726;
		health_4.alpha = 0.5;
		health_4.alphaTopLeft = 0.5;
		health_4.alphaTopRight = 0.5;
		health_4.alphaBottomLeft = 0.5;
		health_4.alphaBottomRight = 0.5;

		// health_5
		const health_5 = this.add.image(-179, 233, "redheart");
		health_5.scaleX = 0.3184992243406469;
		health_5.scaleY = 0.3184992243406469;
		health_5.alpha = 0.5;
		health_5.alphaTopLeft = 0.5;
		health_5.alphaTopRight = 0.5;
		health_5.alphaBottomLeft = 0.5;
		health_5.alphaBottomRight = 0.5;

		// health_6
		const health_6 = this.add.image(-177, -32, "redheart");
		health_6.scaleX = 0.31849922434064726;
		health_6.scaleY = 0.31849922434064726;
		health_6.alpha = 0.5;
		health_6.alphaTopLeft = 0.5;
		health_6.alphaTopRight = 0.5;
		health_6.alphaBottomLeft = 0.5;
		health_6.alphaBottomRight = 0.5;

		// health_7
		const health_7 = this.add.image(-177, -122, "redheart");
		health_7.scaleX = 0.3184992243406469;
		health_7.scaleY = 0.3184992243406469;
		health_7.alpha = 0.5;
		health_7.alphaTopLeft = 0.5;
		health_7.alphaTopRight = 0.5;
		health_7.alphaBottomLeft = 0.5;
		health_7.alphaBottomRight = 0.5;

		// health_8
		const health_8 = this.add.image(-177, 138, "redheart");
		health_8.scaleX = 0.31849922434064726;
		health_8.scaleY = 0.31849922434064726;
		health_8.alpha = 0.5;
		health_8.alphaTopLeft = 0.5;
		health_8.alphaTopRight = 0.5;
		health_8.alphaBottomLeft = 0.5;
		health_8.alphaBottomRight = 0.5;

		// health_9
		const health_9 = this.add.image(-177, 56, "redheart");
		health_9.scaleX = 0.31849922434064726;
		health_9.scaleY = 0.31849922434064726;
		health_9.alpha = 0.5;
		health_9.alphaTopLeft = 0.5;
		health_9.alphaTopRight = 0.5;
		health_9.alphaBottomLeft = 0.5;
		health_9.alphaBottomRight = 0.5;

		// health_10
		const health_10 = this.add.image(-177, -218, "redheart");
		health_10.scaleX = 0.31849922434064726;
		health_10.scaleY = 0.31849922434064726;
		health_10.alpha = 0.5;
		health_10.alphaTopLeft = 0.5;
		health_10.alphaTopRight = 0.5;
		health_10.alphaBottomLeft = 0.5;
		health_10.alphaBottomRight = 0.5;

		// health_11
		const health_11 = this.add.image(-177, -319, "redheart");
		health_11.scaleX = 0.3184992243406469;
		health_11.scaleY = 0.3184992243406469;
		health_11.alpha = 0.5;
		health_11.alphaTopLeft = 0.5;
		health_11.alphaTopRight = 0.5;
		health_11.alphaBottomLeft = 0.5;
		health_11.alphaBottomRight = 0.5;

		// health_16
		const health_16 = this.add.image(1311, 322, "redheart");
		health_16.scaleX = 0.31849922434064726;
		health_16.scaleY = 0.31849922434064726;
		health_16.alpha = 0.5;
		health_16.alphaTopLeft = 0.5;
		health_16.alphaTopRight = 0.5;
		health_16.alphaBottomLeft = 0.5;
		health_16.alphaBottomRight = 0.5;

		// health_17
		const health_17 = this.add.image(1311, 226, "redheart");
		health_17.scaleX = 0.3184992243406469;
		health_17.scaleY = 0.3184992243406469;
		health_17.alpha = 0.5;
		health_17.alphaTopLeft = 0.5;
		health_17.alphaTopRight = 0.5;
		health_17.alphaBottomLeft = 0.5;
		health_17.alphaBottomRight = 0.5;

		// health_18
		const health_18 = this.add.image(1311, -32, "redheart");
		health_18.scaleX = 0.31849922434064726;
		health_18.scaleY = 0.31849922434064726;
		health_18.alpha = 0.5;
		health_18.alphaTopLeft = 0.5;
		health_18.alphaTopRight = 0.5;
		health_18.alphaBottomLeft = 0.5;
		health_18.alphaBottomRight = 0.5;

		// health_19
		const health_19 = this.add.image(1311, -122, "redheart");
		health_19.scaleX = 0.3184992243406469;
		health_19.scaleY = 0.3184992243406469;
		health_19.alpha = 0.5;
		health_19.alphaTopLeft = 0.5;
		health_19.alphaTopRight = 0.5;
		health_19.alphaBottomLeft = 0.5;
		health_19.alphaBottomRight = 0.5;

		// health_20
		const health_20 = this.add.image(1311, 138, "redheart");
		health_20.scaleX = 0.31849922434064726;
		health_20.scaleY = 0.31849922434064726;
		health_20.alpha = 0.5;
		health_20.alphaTopLeft = 0.5;
		health_20.alphaTopRight = 0.5;
		health_20.alphaBottomLeft = 0.5;
		health_20.alphaBottomRight = 0.5;

		// health_21
		const health_21 = this.add.image(1311, 56, "redheart");
		health_21.scaleX = 0.31849922434064726;
		health_21.scaleY = 0.31849922434064726;
		health_21.alpha = 0.5;
		health_21.alphaTopLeft = 0.5;
		health_21.alphaTopRight = 0.5;
		health_21.alphaBottomLeft = 0.5;
		health_21.alphaBottomRight = 0.5;

		// health_22
		const health_22 = this.add.image(1311, -218, "redheart");
		health_22.scaleX = 0.31849922434064726;
		health_22.scaleY = 0.31849922434064726;
		health_22.alpha = 0.5;
		health_22.alphaTopLeft = 0.5;
		health_22.alphaTopRight = 0.5;
		health_22.alphaBottomLeft = 0.5;
		health_22.alphaBottomRight = 0.5;

		// health_23
		const health_23 = this.add.image(1311, -319, "redheart");
		health_23.scaleX = 0.3184992243406469;
		health_23.scaleY = 0.3184992243406469;
		health_23.alpha = 0.5;
		health_23.alphaTopLeft = 0.5;
		health_23.alphaTopRight = 0.5;
		health_23.alphaBottomLeft = 0.5;
		health_23.alphaBottomRight = 0.5;

		// catPlayer
		const catPlayer = new CatPlayer(this, 164, 613);
		this.add.existing(catPlayer);
		catPlayer.visible = true;
		catPlayer.body.collideWorldBounds = true;
		catPlayer.body.onWorldBounds = true;

		// health_24
		const health_24 = this.add.image(-174, -576, "redheart");
		health_24.scaleX = 0.31849922434064726;
		health_24.scaleY = 0.31849922434064726;
		health_24.alpha = 0.5;
		health_24.alphaTopLeft = 0.5;
		health_24.alphaTopRight = 0.5;
		health_24.alphaBottomLeft = 0.5;
		health_24.alphaBottomRight = 0.5;

		// health_25
		const health_25 = this.add.image(-174, -666, "redheart");
		health_25.scaleX = 0.3184992243406469;
		health_25.scaleY = 0.3184992243406469;
		health_25.alpha = 0.5;
		health_25.alphaTopLeft = 0.5;
		health_25.alphaTopRight = 0.5;
		health_25.alphaBottomLeft = 0.5;
		health_25.alphaBottomRight = 0.5;

		// health_26
		const health_26 = this.add.image(-174, -406, "redheart");
		health_26.scaleX = 0.31849922434064726;
		health_26.scaleY = 0.31849922434064726;
		health_26.alpha = 0.5;
		health_26.alphaTopLeft = 0.5;
		health_26.alphaTopRight = 0.5;
		health_26.alphaBottomLeft = 0.5;
		health_26.alphaBottomRight = 0.5;

		// health_27
		const health_27 = this.add.image(-174, -488, "redheart");
		health_27.scaleX = 0.31849922434064726;
		health_27.scaleY = 0.31849922434064726;
		health_27.alpha = 0.5;
		health_27.alphaTopLeft = 0.5;
		health_27.alphaTopRight = 0.5;
		health_27.alphaBottomLeft = 0.5;
		health_27.alphaBottomRight = 0.5;

		// health_28
		const health_28 = this.add.image(-174, -760, "redheart");
		health_28.scaleX = 0.31849922434064726;
		health_28.scaleY = 0.31849922434064726;
		health_28.alpha = 0.5;
		health_28.alphaTopLeft = 0.5;
		health_28.alphaTopRight = 0.5;
		health_28.alphaBottomLeft = 0.5;
		health_28.alphaBottomRight = 0.5;

		// health_29
		const health_29 = this.add.image(-174, -856, "redheart");
		health_29.scaleX = 0.3184992243406469;
		health_29.scaleY = 0.3184992243406469;
		health_29.alpha = 0.5;
		health_29.alphaTopLeft = 0.5;
		health_29.alphaTopRight = 0.5;
		health_29.alphaBottomLeft = 0.5;
		health_29.alphaBottomRight = 0.5;

		// health_30
		const health_30 = this.add.image(-172, -1121, "redheart");
		health_30.scaleX = 0.31849922434064726;
		health_30.scaleY = 0.31849922434064726;
		health_30.alpha = 0.5;
		health_30.alphaTopLeft = 0.5;
		health_30.alphaTopRight = 0.5;
		health_30.alphaBottomLeft = 0.5;
		health_30.alphaBottomRight = 0.5;

		// health_31
		const health_31 = this.add.image(-172, -1211, "redheart");
		health_31.scaleX = 0.3184992243406469;
		health_31.scaleY = 0.3184992243406469;
		health_31.alpha = 0.5;
		health_31.alphaTopLeft = 0.5;
		health_31.alphaTopRight = 0.5;
		health_31.alphaBottomLeft = 0.5;
		health_31.alphaBottomRight = 0.5;

		// health_32
		const health_32 = this.add.image(-172, -951, "redheart");
		health_32.scaleX = 0.31849922434064726;
		health_32.scaleY = 0.31849922434064726;
		health_32.alpha = 0.5;
		health_32.alphaTopLeft = 0.5;
		health_32.alphaTopRight = 0.5;
		health_32.alphaBottomLeft = 0.5;
		health_32.alphaBottomRight = 0.5;

		// health_33
		const health_33 = this.add.image(-172, -1033, "redheart");
		health_33.scaleX = 0.31849922434064726;
		health_33.scaleY = 0.31849922434064726;
		health_33.alpha = 0.5;
		health_33.alphaTopLeft = 0.5;
		health_33.alphaTopRight = 0.5;
		health_33.alphaBottomLeft = 0.5;
		health_33.alphaBottomRight = 0.5;

		// health_34
		const health_34 = this.add.image(-172, -1307, "redheart");
		health_34.scaleX = 0.31849922434064726;
		health_34.scaleY = 0.31849922434064726;
		health_34.alpha = 0.5;
		health_34.alphaTopLeft = 0.5;
		health_34.alphaTopRight = 0.5;
		health_34.alphaBottomLeft = 0.5;
		health_34.alphaBottomRight = 0.5;

		// health_35
		const health_35 = this.add.image(-172, -1408, "redheart");
		health_35.scaleX = 0.3184992243406469;
		health_35.scaleY = 0.3184992243406469;
		health_35.alpha = 0.5;
		health_35.alphaTopLeft = 0.5;
		health_35.alphaTopRight = 0.5;
		health_35.alphaBottomLeft = 0.5;
		health_35.alphaBottomRight = 0.5;

		// health_36
		const health_36 = this.add.image(1314, -576, "redheart");
		health_36.scaleX = 0.31849922434064726;
		health_36.scaleY = 0.31849922434064726;
		health_36.alpha = 0.5;
		health_36.alphaTopLeft = 0.5;
		health_36.alphaTopRight = 0.5;
		health_36.alphaBottomLeft = 0.5;
		health_36.alphaBottomRight = 0.5;

		// health_37
		const health_37 = this.add.image(1314, -666, "redheart");
		health_37.scaleX = 0.3184992243406469;
		health_37.scaleY = 0.3184992243406469;
		health_37.alpha = 0.5;
		health_37.alphaTopLeft = 0.5;
		health_37.alphaTopRight = 0.5;
		health_37.alphaBottomLeft = 0.5;
		health_37.alphaBottomRight = 0.5;

		// health_38
		const health_38 = this.add.image(1314, -406, "redheart");
		health_38.scaleX = 0.31849922434064726;
		health_38.scaleY = 0.31849922434064726;
		health_38.alpha = 0.5;
		health_38.alphaTopLeft = 0.5;
		health_38.alphaTopRight = 0.5;
		health_38.alphaBottomLeft = 0.5;
		health_38.alphaBottomRight = 0.5;

		// health_39
		const health_39 = this.add.image(1314, -488, "redheart");
		health_39.scaleX = 0.31849922434064726;
		health_39.scaleY = 0.31849922434064726;
		health_39.alpha = 0.5;
		health_39.alphaTopLeft = 0.5;
		health_39.alphaTopRight = 0.5;
		health_39.alphaBottomLeft = 0.5;
		health_39.alphaBottomRight = 0.5;

		// health_40
		const health_40 = this.add.image(1314, -760, "redheart");
		health_40.scaleX = 0.31849922434064726;
		health_40.scaleY = 0.31849922434064726;
		health_40.alpha = 0.5;
		health_40.alphaTopLeft = 0.5;
		health_40.alphaTopRight = 0.5;
		health_40.alphaBottomLeft = 0.5;
		health_40.alphaBottomRight = 0.5;

		// health_41
		const health_41 = this.add.image(1314, -856, "redheart");
		health_41.scaleX = 0.3184992243406469;
		health_41.scaleY = 0.3184992243406469;
		health_41.alpha = 0.5;
		health_41.alphaTopLeft = 0.5;
		health_41.alphaTopRight = 0.5;
		health_41.alphaBottomLeft = 0.5;
		health_41.alphaBottomRight = 0.5;

		// health_42
		const health_42 = this.add.image(1316, -1121, "redheart");
		health_42.scaleX = 0.31849922434064726;
		health_42.scaleY = 0.31849922434064726;
		health_42.alpha = 0.5;
		health_42.alphaTopLeft = 0.5;
		health_42.alphaTopRight = 0.5;
		health_42.alphaBottomLeft = 0.5;
		health_42.alphaBottomRight = 0.5;

		// health_43
		const health_43 = this.add.image(1316, -1211, "redheart");
		health_43.scaleX = 0.3184992243406469;
		health_43.scaleY = 0.3184992243406469;
		health_43.alpha = 0.5;
		health_43.alphaTopLeft = 0.5;
		health_43.alphaTopRight = 0.5;
		health_43.alphaBottomLeft = 0.5;
		health_43.alphaBottomRight = 0.5;

		// health_44
		const health_44 = this.add.image(1316, -951, "redheart");
		health_44.scaleX = 0.31849922434064726;
		health_44.scaleY = 0.31849922434064726;
		health_44.alpha = 0.5;
		health_44.alphaTopLeft = 0.5;
		health_44.alphaTopRight = 0.5;
		health_44.alphaBottomLeft = 0.5;
		health_44.alphaBottomRight = 0.5;

		// health_45
		const health_45 = this.add.image(1316, -1033, "redheart");
		health_45.scaleX = 0.31849922434064726;
		health_45.scaleY = 0.31849922434064726;
		health_45.alpha = 0.5;
		health_45.alphaTopLeft = 0.5;
		health_45.alphaTopRight = 0.5;
		health_45.alphaBottomLeft = 0.5;
		health_45.alphaBottomRight = 0.5;

		// health_46
		const health_46 = this.add.image(1316, -1307, "redheart");
		health_46.scaleX = 0.31849922434064726;
		health_46.scaleY = 0.31849922434064726;
		health_46.alpha = 0.5;
		health_46.alphaTopLeft = 0.5;
		health_46.alphaTopRight = 0.5;
		health_46.alphaBottomLeft = 0.5;
		health_46.alphaBottomRight = 0.5;

		// health_47
		const health_47 = this.add.image(1316, -1408, "redheart");
		health_47.scaleX = 0.3184992243406469;
		health_47.scaleY = 0.3184992243406469;
		health_47.alpha = 0.5;
		health_47.alphaTopLeft = 0.5;
		health_47.alphaTopRight = 0.5;
		health_47.alphaBottomLeft = 0.5;
		health_47.alphaBottomRight = 0.5;

		// heartPlatform_2
		const heartPlatform_2 = new HeartPlatform(this, -60, -5673);
		this.add.existing(heartPlatform_2);
		heartPlatform_2.scaleX = 0.6859590093117656;
		heartPlatform_2.scaleY = 0.8;
		heartPlatform_2.visible = true;
		heartPlatform_2.alpha = 0.4;

		// heartPlatform
		const heartPlatform = new HeartPlatform(this, -57, -2670);
		this.add.existing(heartPlatform);
		heartPlatform.scaleX = 0.6859590093117656;
		heartPlatform.scaleY = 0.8;
		heartPlatform.visible = true;
		heartPlatform.alpha = 0.4;

		// health_48
		const health_48 = this.add.image(-170, -1716, "redheart");
		health_48.scaleX = 0.31849922434064726;
		health_48.scaleY = 0.31849922434064726;
		health_48.alpha = 0.5;
		health_48.alphaTopLeft = 0.5;
		health_48.alphaTopRight = 0.5;
		health_48.alphaBottomLeft = 0.5;
		health_48.alphaBottomRight = 0.5;

		// health_49
		const health_49 = this.add.image(-170, -1806, "redheart");
		health_49.scaleX = 0.3184992243406469;
		health_49.scaleY = 0.3184992243406469;
		health_49.alpha = 0.5;
		health_49.alphaTopLeft = 0.5;
		health_49.alphaTopRight = 0.5;
		health_49.alphaBottomLeft = 0.5;
		health_49.alphaBottomRight = 0.5;

		// health_50
		const health_50 = this.add.image(-170, -1546, "redheart");
		health_50.scaleX = 0.31849922434064726;
		health_50.scaleY = 0.31849922434064726;
		health_50.alpha = 0.5;
		health_50.alphaTopLeft = 0.5;
		health_50.alphaTopRight = 0.5;
		health_50.alphaBottomLeft = 0.5;
		health_50.alphaBottomRight = 0.5;

		// health_51
		const health_51 = this.add.image(-170, -1628, "redheart");
		health_51.scaleX = 0.31849922434064726;
		health_51.scaleY = 0.31849922434064726;
		health_51.alpha = 0.5;
		health_51.alphaTopLeft = 0.5;
		health_51.alphaTopRight = 0.5;
		health_51.alphaBottomLeft = 0.5;
		health_51.alphaBottomRight = 0.5;

		// health_52
		const health_52 = this.add.image(-170, -1900, "redheart");
		health_52.scaleX = 0.31849922434064726;
		health_52.scaleY = 0.31849922434064726;
		health_52.alpha = 0.5;
		health_52.alphaTopLeft = 0.5;
		health_52.alphaTopRight = 0.5;
		health_52.alphaBottomLeft = 0.5;
		health_52.alphaBottomRight = 0.5;

		// health_53
		const health_53 = this.add.image(-170, -1996, "redheart");
		health_53.scaleX = 0.3184992243406469;
		health_53.scaleY = 0.3184992243406469;
		health_53.alpha = 0.5;
		health_53.alphaTopLeft = 0.5;
		health_53.alphaTopRight = 0.5;
		health_53.alphaBottomLeft = 0.5;
		health_53.alphaBottomRight = 0.5;

		// health_54
		const health_54 = this.add.image(-168, -2261, "redheart");
		health_54.scaleX = 0.31849922434064726;
		health_54.scaleY = 0.31849922434064726;
		health_54.alpha = 0.5;
		health_54.alphaTopLeft = 0.5;
		health_54.alphaTopRight = 0.5;
		health_54.alphaBottomLeft = 0.5;
		health_54.alphaBottomRight = 0.5;

		// health_55
		const health_55 = this.add.image(-168, -2351, "redheart");
		health_55.scaleX = 0.3184992243406469;
		health_55.scaleY = 0.3184992243406469;
		health_55.alpha = 0.5;
		health_55.alphaTopLeft = 0.5;
		health_55.alphaTopRight = 0.5;
		health_55.alphaBottomLeft = 0.5;
		health_55.alphaBottomRight = 0.5;

		// health_56
		const health_56 = this.add.image(-168, -2091, "redheart");
		health_56.scaleX = 0.31849922434064726;
		health_56.scaleY = 0.31849922434064726;
		health_56.alpha = 0.5;
		health_56.alphaTopLeft = 0.5;
		health_56.alphaTopRight = 0.5;
		health_56.alphaBottomLeft = 0.5;
		health_56.alphaBottomRight = 0.5;

		// health_57
		const health_57 = this.add.image(-168, -2173, "redheart");
		health_57.scaleX = 0.31849922434064726;
		health_57.scaleY = 0.31849922434064726;
		health_57.alpha = 0.5;
		health_57.alphaTopLeft = 0.5;
		health_57.alphaTopRight = 0.5;
		health_57.alphaBottomLeft = 0.5;
		health_57.alphaBottomRight = 0.5;

		// health_58
		const health_58 = this.add.image(-168, -2447, "redheart");
		health_58.scaleX = 0.31849922434064726;
		health_58.scaleY = 0.31849922434064726;
		health_58.alpha = 0.5;
		health_58.alphaTopLeft = 0.5;
		health_58.alphaTopRight = 0.5;
		health_58.alphaBottomLeft = 0.5;
		health_58.alphaBottomRight = 0.5;

		// health_59
		const health_59 = this.add.image(-168, -2548, "redheart");
		health_59.scaleX = 0.3184992243406469;
		health_59.scaleY = 0.3184992243406469;
		health_59.alpha = 0.5;
		health_59.alphaTopLeft = 0.5;
		health_59.alphaTopRight = 0.5;
		health_59.alphaBottomLeft = 0.5;
		health_59.alphaBottomRight = 0.5;

		// health_60
		const health_60 = this.add.image(-165, -2805, "redheart");
		health_60.scaleX = 0.31849922434064726;
		health_60.scaleY = 0.31849922434064726;
		health_60.alpha = 0.5;
		health_60.alphaTopLeft = 0.5;
		health_60.alphaTopRight = 0.5;
		health_60.alphaBottomLeft = 0.5;
		health_60.alphaBottomRight = 0.5;

		// health_61
		const health_61 = this.add.image(-165, -2895, "redheart");
		health_61.scaleX = 0.3184992243406469;
		health_61.scaleY = 0.3184992243406469;
		health_61.alpha = 0.5;
		health_61.alphaTopLeft = 0.5;
		health_61.alphaTopRight = 0.5;
		health_61.alphaBottomLeft = 0.5;
		health_61.alphaBottomRight = 0.5;

		// health_62
		const health_62 = this.add.image(-165, -2635, "redheart");
		health_62.scaleX = 0.31849922434064726;
		health_62.scaleY = 0.31849922434064726;
		health_62.alpha = 0.5;
		health_62.alphaTopLeft = 0.5;
		health_62.alphaTopRight = 0.5;
		health_62.alphaBottomLeft = 0.5;
		health_62.alphaBottomRight = 0.5;

		// health_63
		const health_63 = this.add.image(-165, -2717, "redheart");
		health_63.scaleX = 0.31849922434064726;
		health_63.scaleY = 0.31849922434064726;
		health_63.alpha = 0.5;
		health_63.alphaTopLeft = 0.5;
		health_63.alphaTopRight = 0.5;
		health_63.alphaBottomLeft = 0.5;
		health_63.alphaBottomRight = 0.5;

		// health_64
		const health_64 = this.add.image(-165, -2989, "redheart");
		health_64.scaleX = 0.31849922434064726;
		health_64.scaleY = 0.31849922434064726;
		health_64.alpha = 0.5;
		health_64.alphaTopLeft = 0.5;
		health_64.alphaTopRight = 0.5;
		health_64.alphaBottomLeft = 0.5;
		health_64.alphaBottomRight = 0.5;

		// health_65
		const health_65 = this.add.image(-165, -3085, "redheart");
		health_65.scaleX = 0.3184992243406469;
		health_65.scaleY = 0.3184992243406469;
		health_65.alpha = 0.5;
		health_65.alphaTopLeft = 0.5;
		health_65.alphaTopRight = 0.5;
		health_65.alphaBottomLeft = 0.5;
		health_65.alphaBottomRight = 0.5;

		// health_66
		const health_66 = this.add.image(-163, -3350, "redheart");
		health_66.scaleX = 0.31849922434064726;
		health_66.scaleY = 0.31849922434064726;
		health_66.alpha = 0.5;
		health_66.alphaTopLeft = 0.5;
		health_66.alphaTopRight = 0.5;
		health_66.alphaBottomLeft = 0.5;
		health_66.alphaBottomRight = 0.5;

		// health_67
		const health_67 = this.add.image(-163, -3440, "redheart");
		health_67.scaleX = 0.3184992243406469;
		health_67.scaleY = 0.3184992243406469;
		health_67.alpha = 0.5;
		health_67.alphaTopLeft = 0.5;
		health_67.alphaTopRight = 0.5;
		health_67.alphaBottomLeft = 0.5;
		health_67.alphaBottomRight = 0.5;

		// health_68
		const health_68 = this.add.image(-163, -3180, "redheart");
		health_68.scaleX = 0.31849922434064726;
		health_68.scaleY = 0.31849922434064726;
		health_68.alpha = 0.5;
		health_68.alphaTopLeft = 0.5;
		health_68.alphaTopRight = 0.5;
		health_68.alphaBottomLeft = 0.5;
		health_68.alphaBottomRight = 0.5;

		// health_69
		const health_69 = this.add.image(-163, -3262, "redheart");
		health_69.scaleX = 0.31849922434064726;
		health_69.scaleY = 0.31849922434064726;
		health_69.alpha = 0.5;
		health_69.alphaTopLeft = 0.5;
		health_69.alphaTopRight = 0.5;
		health_69.alphaBottomLeft = 0.5;
		health_69.alphaBottomRight = 0.5;

		// health_70
		const health_70 = this.add.image(-163, -3536, "redheart");
		health_70.scaleX = 0.31849922434064726;
		health_70.scaleY = 0.31849922434064726;
		health_70.alpha = 0.5;
		health_70.alphaTopLeft = 0.5;
		health_70.alphaTopRight = 0.5;
		health_70.alphaBottomLeft = 0.5;
		health_70.alphaBottomRight = 0.5;

		// health_71
		const health_71 = this.add.image(-163, -3637, "redheart");
		health_71.scaleX = 0.3184992243406469;
		health_71.scaleY = 0.3184992243406469;
		health_71.alpha = 0.5;
		health_71.alphaTopLeft = 0.5;
		health_71.alphaTopRight = 0.5;
		health_71.alphaBottomLeft = 0.5;
		health_71.alphaBottomRight = 0.5;

		// health_72
		const health_72 = this.add.image(1316, -1712, "redheart");
		health_72.scaleX = 0.31849922434064726;
		health_72.scaleY = 0.31849922434064726;
		health_72.alpha = 0.5;
		health_72.alphaTopLeft = 0.5;
		health_72.alphaTopRight = 0.5;
		health_72.alphaBottomLeft = 0.5;
		health_72.alphaBottomRight = 0.5;

		// health_73
		const health_73 = this.add.image(1316, -1802, "redheart");
		health_73.scaleX = 0.3184992243406469;
		health_73.scaleY = 0.3184992243406469;
		health_73.alpha = 0.5;
		health_73.alphaTopLeft = 0.5;
		health_73.alphaTopRight = 0.5;
		health_73.alphaBottomLeft = 0.5;
		health_73.alphaBottomRight = 0.5;

		// health_74
		const health_74 = this.add.image(1316, -1542, "redheart");
		health_74.scaleX = 0.31849922434064726;
		health_74.scaleY = 0.31849922434064726;
		health_74.alpha = 0.5;
		health_74.alphaTopLeft = 0.5;
		health_74.alphaTopRight = 0.5;
		health_74.alphaBottomLeft = 0.5;
		health_74.alphaBottomRight = 0.5;

		// health_75
		const health_75 = this.add.image(1316, -1624, "redheart");
		health_75.scaleX = 0.31849922434064726;
		health_75.scaleY = 0.31849922434064726;
		health_75.alpha = 0.5;
		health_75.alphaTopLeft = 0.5;
		health_75.alphaTopRight = 0.5;
		health_75.alphaBottomLeft = 0.5;
		health_75.alphaBottomRight = 0.5;

		// health_76
		const health_76 = this.add.image(1316, -1896, "redheart");
		health_76.scaleX = 0.31849922434064726;
		health_76.scaleY = 0.31849922434064726;
		health_76.alpha = 0.5;
		health_76.alphaTopLeft = 0.5;
		health_76.alphaTopRight = 0.5;
		health_76.alphaBottomLeft = 0.5;
		health_76.alphaBottomRight = 0.5;

		// health_77
		const health_77 = this.add.image(1316, -1992, "redheart");
		health_77.scaleX = 0.3184992243406469;
		health_77.scaleY = 0.3184992243406469;
		health_77.alpha = 0.5;
		health_77.alphaTopLeft = 0.5;
		health_77.alphaTopRight = 0.5;
		health_77.alphaBottomLeft = 0.5;
		health_77.alphaBottomRight = 0.5;

		// health_78
		const health_78 = this.add.image(1318, -2257, "redheart");
		health_78.scaleX = 0.31849922434064726;
		health_78.scaleY = 0.31849922434064726;
		health_78.alpha = 0.5;
		health_78.alphaTopLeft = 0.5;
		health_78.alphaTopRight = 0.5;
		health_78.alphaBottomLeft = 0.5;
		health_78.alphaBottomRight = 0.5;

		// health_79
		const health_79 = this.add.image(1318, -2347, "redheart");
		health_79.scaleX = 0.3184992243406469;
		health_79.scaleY = 0.3184992243406469;
		health_79.alpha = 0.5;
		health_79.alphaTopLeft = 0.5;
		health_79.alphaTopRight = 0.5;
		health_79.alphaBottomLeft = 0.5;
		health_79.alphaBottomRight = 0.5;

		// health_80
		const health_80 = this.add.image(1318, -2087, "redheart");
		health_80.scaleX = 0.31849922434064726;
		health_80.scaleY = 0.31849922434064726;
		health_80.alpha = 0.5;
		health_80.alphaTopLeft = 0.5;
		health_80.alphaTopRight = 0.5;
		health_80.alphaBottomLeft = 0.5;
		health_80.alphaBottomRight = 0.5;

		// health_81
		const health_81 = this.add.image(1318, -2169, "redheart");
		health_81.scaleX = 0.31849922434064726;
		health_81.scaleY = 0.31849922434064726;
		health_81.alpha = 0.5;
		health_81.alphaTopLeft = 0.5;
		health_81.alphaTopRight = 0.5;
		health_81.alphaBottomLeft = 0.5;
		health_81.alphaBottomRight = 0.5;

		// health_82
		const health_82 = this.add.image(1318, -2443, "redheart");
		health_82.scaleX = 0.31849922434064726;
		health_82.scaleY = 0.31849922434064726;
		health_82.alpha = 0.5;
		health_82.alphaTopLeft = 0.5;
		health_82.alphaTopRight = 0.5;
		health_82.alphaBottomLeft = 0.5;
		health_82.alphaBottomRight = 0.5;

		// health_83
		const health_83 = this.add.image(1318, -2544, "redheart");
		health_83.scaleX = 0.3184992243406469;
		health_83.scaleY = 0.3184992243406469;
		health_83.alpha = 0.5;
		health_83.alphaTopLeft = 0.5;
		health_83.alphaTopRight = 0.5;
		health_83.alphaBottomLeft = 0.5;
		health_83.alphaBottomRight = 0.5;

		// health_84
		const health_84 = this.add.image(1318, -2801, "redheart");
		health_84.scaleX = 0.31849922434064726;
		health_84.scaleY = 0.31849922434064726;
		health_84.alpha = 0.5;
		health_84.alphaTopLeft = 0.5;
		health_84.alphaTopRight = 0.5;
		health_84.alphaBottomLeft = 0.5;
		health_84.alphaBottomRight = 0.5;

		// health_85
		const health_85 = this.add.image(1318, -2891, "redheart");
		health_85.scaleX = 0.3184992243406469;
		health_85.scaleY = 0.3184992243406469;
		health_85.alpha = 0.5;
		health_85.alphaTopLeft = 0.5;
		health_85.alphaTopRight = 0.5;
		health_85.alphaBottomLeft = 0.5;
		health_85.alphaBottomRight = 0.5;

		// health_86
		const health_86 = this.add.image(1318, -2631, "redheart");
		health_86.scaleX = 0.31849922434064726;
		health_86.scaleY = 0.31849922434064726;
		health_86.alpha = 0.5;
		health_86.alphaTopLeft = 0.5;
		health_86.alphaTopRight = 0.5;
		health_86.alphaBottomLeft = 0.5;
		health_86.alphaBottomRight = 0.5;

		// health_87
		const health_87 = this.add.image(1318, -2713, "redheart");
		health_87.scaleX = 0.31849922434064726;
		health_87.scaleY = 0.31849922434064726;
		health_87.alpha = 0.5;
		health_87.alphaTopLeft = 0.5;
		health_87.alphaTopRight = 0.5;
		health_87.alphaBottomLeft = 0.5;
		health_87.alphaBottomRight = 0.5;

		// health_88
		const health_88 = this.add.image(1318, -2985, "redheart");
		health_88.scaleX = 0.31849922434064726;
		health_88.scaleY = 0.31849922434064726;
		health_88.alpha = 0.5;
		health_88.alphaTopLeft = 0.5;
		health_88.alphaTopRight = 0.5;
		health_88.alphaBottomLeft = 0.5;
		health_88.alphaBottomRight = 0.5;

		// health_89
		const health_89 = this.add.image(1318, -3081, "redheart");
		health_89.scaleX = 0.3184992243406469;
		health_89.scaleY = 0.3184992243406469;
		health_89.alpha = 0.5;
		health_89.alphaTopLeft = 0.5;
		health_89.alphaTopRight = 0.5;
		health_89.alphaBottomLeft = 0.5;
		health_89.alphaBottomRight = 0.5;

		// health_90
		const health_90 = this.add.image(1318, -3346, "redheart");
		health_90.scaleX = 0.31849922434064726;
		health_90.scaleY = 0.31849922434064726;
		health_90.alpha = 0.5;
		health_90.alphaTopLeft = 0.5;
		health_90.alphaTopRight = 0.5;
		health_90.alphaBottomLeft = 0.5;
		health_90.alphaBottomRight = 0.5;

		// health_91
		const health_91 = this.add.image(1318, -3436, "redheart");
		health_91.scaleX = 0.3184992243406469;
		health_91.scaleY = 0.3184992243406469;
		health_91.alpha = 0.5;
		health_91.alphaTopLeft = 0.5;
		health_91.alphaTopRight = 0.5;
		health_91.alphaBottomLeft = 0.5;
		health_91.alphaBottomRight = 0.5;

		// health_92
		const health_92 = this.add.image(1318, -3176, "redheart");
		health_92.scaleX = 0.31849922434064726;
		health_92.scaleY = 0.31849922434064726;
		health_92.alpha = 0.5;
		health_92.alphaTopLeft = 0.5;
		health_92.alphaTopRight = 0.5;
		health_92.alphaBottomLeft = 0.5;
		health_92.alphaBottomRight = 0.5;

		// health_93
		const health_93 = this.add.image(1318, -3258, "redheart");
		health_93.scaleX = 0.31849922434064726;
		health_93.scaleY = 0.31849922434064726;
		health_93.alpha = 0.5;
		health_93.alphaTopLeft = 0.5;
		health_93.alphaTopRight = 0.5;
		health_93.alphaBottomLeft = 0.5;
		health_93.alphaBottomRight = 0.5;

		// health_94
		const health_94 = this.add.image(1318, -3532, "redheart");
		health_94.scaleX = 0.31849922434064726;
		health_94.scaleY = 0.31849922434064726;
		health_94.alpha = 0.5;
		health_94.alphaTopLeft = 0.5;
		health_94.alphaTopRight = 0.5;
		health_94.alphaBottomLeft = 0.5;
		health_94.alphaBottomRight = 0.5;

		// health_95
		const health_95 = this.add.image(1318, -3633, "redheart");
		health_95.scaleX = 0.3184992243406469;
		health_95.scaleY = 0.3184992243406469;
		health_95.alpha = 0.5;
		health_95.alphaTopLeft = 0.5;
		health_95.alphaTopRight = 0.5;
		health_95.alphaBottomLeft = 0.5;
		health_95.alphaBottomRight = 0.5;

		// ninjastar1
		const ninjastar1 = this.physics.add.sprite(404, -2097, "Ninja star");
		ninjastar1.scaleX = 0.42986391835571236;
		ninjastar1.scaleY = 0.42986391835571236;
		ninjastar1.body.angularVelocity = 220;
		ninjastar1.body.setSize(251, 251, false);

		// ninjastar2
		const ninjastar2 = this.physics.add.sprite(929, -1686, "Ninja star");
		ninjastar2.scaleX = 0.42986391835571236;
		ninjastar2.scaleY = 0.42986391835571236;
		ninjastar2.angle = 25;
		ninjastar2.body.angularVelocity = 220;
		ninjastar2.body.setSize(251, 251, false);

		// enemyCat
		const enemyCat = new EnemyCat(this, 711, -2733);
		this.add.existing(enemyCat);
		enemyCat.body.collideWorldBounds = true;
		enemyCat.body.onWorldBounds = true;

		// ninjastar3
		const ninjastar3 = this.physics.add.sprite(719, -2483, "Ninja star");
		ninjastar3.scaleX = 0.42986391835571236;
		ninjastar3.scaleY = 0.42986391835571236;
		ninjastar3.angle = 25;
		ninjastar3.body.angularVelocity = 220;
		ninjastar3.body.setSize(251, 251, false);

		// ninjastar4
		const ninjastar4 = this.physics.add.sprite(34, -3412, "Ninja star");
		ninjastar4.scaleX = 0.42986391835571236;
		ninjastar4.scaleY = 0.42986391835571236;
		ninjastar4.angle = 25;
		ninjastar4.body.angularVelocity = 220;
		ninjastar4.body.setSize(251, 251, false);

		// ninjastar5
		const ninjastar5 = this.physics.add.sprite(491, -3859, "Ninja star");
		ninjastar5.scaleX = 0.42986391835571236;
		ninjastar5.scaleY = 0.42986391835571236;
		ninjastar5.angle = 25;
		ninjastar5.body.angularVelocity = 220;
		ninjastar5.body.setSize(251, 251, false);

		// ninjastar6
		const ninjastar6 = this.physics.add.sprite(222, -1347, "Ninja star");
		ninjastar6.scaleX = 0.42986391835571236;
		ninjastar6.scaleY = 0.42986391835571236;
		ninjastar6.body.angularVelocity = 220;
		ninjastar6.body.setSize(251, 251, false);

		// ninjastar7
		const ninjastar7 = this.physics.add.sprite(97, -4555, "Ninja star");
		ninjastar7.scaleX = 0.42986391835571236;
		ninjastar7.scaleY = 0.42986391835571236;
		ninjastar7.angle = 25;
		ninjastar7.body.angularVelocity = 220;
		ninjastar7.body.setSize(251, 251, false);

		// ninjastar8
		const ninjastar8 = this.physics.add.sprite(37, -5570, "Ninja star");
		ninjastar8.scaleX = 0.42986391835571236;
		ninjastar8.scaleY = 0.42986391835571236;
		ninjastar8.body.angularVelocity = 220;
		ninjastar8.body.setSize(251, 251, false);

		// ninjastar9
		const ninjastar9 = this.physics.add.sprite(866, -642, "Ninja star");
		ninjastar9.scaleX = 0.42986391835571236;
		ninjastar9.scaleY = 0.42986391835571236;
		ninjastar9.angle = 25;
		ninjastar9.body.angularVelocity = 220;
		ninjastar9.body.setSize(251, 251, false);

		// ninjastar10
		const ninjastar10 = this.physics.add.sprite(186, -507, "Ninja star");
		ninjastar10.scaleX = 0.42986391835571236;
		ninjastar10.scaleY = 0.42986391835571236;
		ninjastar10.body.angularVelocity = 220;
		ninjastar10.body.setSize(251, 251, false);

		// ninjastar11
		const ninjastar11 = this.physics.add.sprite(248, -5109, "Ninja star");
		ninjastar11.scaleX = 0.42986391835571236;
		ninjastar11.scaleY = 0.42986391835571236;
		ninjastar11.angle = 25;
		ninjastar11.body.angularVelocity = 220;
		ninjastar11.body.setSize(251, 251, false);

		// ninjastar12
		const ninjastar12 = this.physics.add.sprite(539, -1679, "Ninja star");
		ninjastar12.scaleX = 0.42986391835571236;
		ninjastar12.scaleY = 0.42986391835571236;
		ninjastar12.angle = 25;
		ninjastar12.body.angularVelocity = 220;
		ninjastar12.body.setSize(251, 251, false);

		// ninjastar13
		const ninjastar13 = this.physics.add.sprite(487, -954, "Ninja star");
		ninjastar13.scaleX = 0.42986391835571236;
		ninjastar13.scaleY = 0.42986391835571236;
		ninjastar13.angle = 25;
		ninjastar13.body.angularVelocity = 220;
		ninjastar13.body.setSize(251, 251, false);

		// ninjastar14
		const ninjastar14 = this.physics.add.sprite(96, -3094, "Ninja star");
		ninjastar14.scaleX = 0.42986391835571236;
		ninjastar14.scaleY = 0.42986391835571236;
		ninjastar14.angle = 25;
		ninjastar14.body.angularVelocity = 220;
		ninjastar14.body.setSize(251, 251, false);

		// health_96
		const health_96 = this.add.image(1318, -3721, "redheart");
		health_96.scaleX = 0.31849922434064726;
		health_96.scaleY = 0.31849922434064726;
		health_96.alpha = 0.5;
		health_96.alphaTopLeft = 0.5;
		health_96.alphaTopRight = 0.5;
		health_96.alphaBottomLeft = 0.5;
		health_96.alphaBottomRight = 0.5;

		// health_97
		const health_97 = this.add.image(1318, -3811, "redheart");
		health_97.scaleX = 0.3184992243406469;
		health_97.scaleY = 0.3184992243406469;
		health_97.alpha = 0.5;
		health_97.alphaTopLeft = 0.5;
		health_97.alphaTopRight = 0.5;
		health_97.alphaBottomLeft = 0.5;
		health_97.alphaBottomRight = 0.5;

		// health_98
		const health_98 = this.add.image(1318, -3905, "redheart");
		health_98.scaleX = 0.31849922434064726;
		health_98.scaleY = 0.31849922434064726;
		health_98.alpha = 0.5;
		health_98.alphaTopLeft = 0.5;
		health_98.alphaTopRight = 0.5;
		health_98.alphaBottomLeft = 0.5;
		health_98.alphaBottomRight = 0.5;

		// health_99
		const health_99 = this.add.image(1318, -4001, "redheart");
		health_99.scaleX = 0.3184992243406469;
		health_99.scaleY = 0.3184992243406469;
		health_99.alpha = 0.5;
		health_99.alphaTopLeft = 0.5;
		health_99.alphaTopRight = 0.5;
		health_99.alphaBottomLeft = 0.5;
		health_99.alphaBottomRight = 0.5;

		// health_100
		const health_100 = this.add.image(1318, -4266, "redheart");
		health_100.scaleX = 0.31849922434064726;
		health_100.scaleY = 0.31849922434064726;
		health_100.alpha = 0.5;
		health_100.alphaTopLeft = 0.5;
		health_100.alphaTopRight = 0.5;
		health_100.alphaBottomLeft = 0.5;
		health_100.alphaBottomRight = 0.5;

		// health_101
		const health_101 = this.add.image(1318, -4356, "redheart");
		health_101.scaleX = 0.3184992243406469;
		health_101.scaleY = 0.3184992243406469;
		health_101.alpha = 0.5;
		health_101.alphaTopLeft = 0.5;
		health_101.alphaTopRight = 0.5;
		health_101.alphaBottomLeft = 0.5;
		health_101.alphaBottomRight = 0.5;

		// health_102
		const health_102 = this.add.image(1318, -4096, "redheart");
		health_102.scaleX = 0.31849922434064726;
		health_102.scaleY = 0.31849922434064726;
		health_102.alpha = 0.5;
		health_102.alphaTopLeft = 0.5;
		health_102.alphaTopRight = 0.5;
		health_102.alphaBottomLeft = 0.5;
		health_102.alphaBottomRight = 0.5;

		// health_103
		const health_103 = this.add.image(1318, -4178, "redheart");
		health_103.scaleX = 0.31849922434064726;
		health_103.scaleY = 0.31849922434064726;
		health_103.alpha = 0.5;
		health_103.alphaTopLeft = 0.5;
		health_103.alphaTopRight = 0.5;
		health_103.alphaBottomLeft = 0.5;
		health_103.alphaBottomRight = 0.5;

		// health_104
		const health_104 = this.add.image(1318, -4452, "redheart");
		health_104.scaleX = 0.31849922434064726;
		health_104.scaleY = 0.31849922434064726;
		health_104.alpha = 0.5;
		health_104.alphaTopLeft = 0.5;
		health_104.alphaTopRight = 0.5;
		health_104.alphaBottomLeft = 0.5;
		health_104.alphaBottomRight = 0.5;

		// health_105
		const health_105 = this.add.image(1318, -4553, "redheart");
		health_105.scaleX = 0.3184992243406469;
		health_105.scaleY = 0.3184992243406469;
		health_105.alpha = 0.5;
		health_105.alphaTopLeft = 0.5;
		health_105.alphaTopRight = 0.5;
		health_105.alphaBottomLeft = 0.5;
		health_105.alphaBottomRight = 0.5;

		// health_106
		const health_106 = this.add.image(1318, -4810, "redheart");
		health_106.scaleX = 0.31849922434064726;
		health_106.scaleY = 0.31849922434064726;
		health_106.alpha = 0.5;
		health_106.alphaTopLeft = 0.5;
		health_106.alphaTopRight = 0.5;
		health_106.alphaBottomLeft = 0.5;
		health_106.alphaBottomRight = 0.5;

		// health_107
		const health_107 = this.add.image(1318, -4900, "redheart");
		health_107.scaleX = 0.3184992243406469;
		health_107.scaleY = 0.3184992243406469;
		health_107.alpha = 0.5;
		health_107.alphaTopLeft = 0.5;
		health_107.alphaTopRight = 0.5;
		health_107.alphaBottomLeft = 0.5;
		health_107.alphaBottomRight = 0.5;

		// health_108
		const health_108 = this.add.image(1318, -4640, "redheart");
		health_108.scaleX = 0.31849922434064726;
		health_108.scaleY = 0.31849922434064726;
		health_108.alpha = 0.5;
		health_108.alphaTopLeft = 0.5;
		health_108.alphaTopRight = 0.5;
		health_108.alphaBottomLeft = 0.5;
		health_108.alphaBottomRight = 0.5;

		// health_109
		const health_109 = this.add.image(1318, -4722, "redheart");
		health_109.scaleX = 0.31849922434064726;
		health_109.scaleY = 0.31849922434064726;
		health_109.alpha = 0.5;
		health_109.alphaTopLeft = 0.5;
		health_109.alphaTopRight = 0.5;
		health_109.alphaBottomLeft = 0.5;
		health_109.alphaBottomRight = 0.5;

		// health_110
		const health_110 = this.add.image(1318, -4994, "redheart");
		health_110.scaleX = 0.31849922434064726;
		health_110.scaleY = 0.31849922434064726;
		health_110.alpha = 0.5;
		health_110.alphaTopLeft = 0.5;
		health_110.alphaTopRight = 0.5;
		health_110.alphaBottomLeft = 0.5;
		health_110.alphaBottomRight = 0.5;

		// health_111
		const health_111 = this.add.image(1318, -5090, "redheart");
		health_111.scaleX = 0.3184992243406469;
		health_111.scaleY = 0.3184992243406469;
		health_111.alpha = 0.5;
		health_111.alphaTopLeft = 0.5;
		health_111.alphaTopRight = 0.5;
		health_111.alphaBottomLeft = 0.5;
		health_111.alphaBottomRight = 0.5;

		// health_112
		const health_112 = this.add.image(1318, -5355, "redheart");
		health_112.scaleX = 0.31849922434064726;
		health_112.scaleY = 0.31849922434064726;
		health_112.alpha = 0.5;
		health_112.alphaTopLeft = 0.5;
		health_112.alphaTopRight = 0.5;
		health_112.alphaBottomLeft = 0.5;
		health_112.alphaBottomRight = 0.5;

		// health_113
		const health_113 = this.add.image(1318, -5445, "redheart");
		health_113.scaleX = 0.3184992243406469;
		health_113.scaleY = 0.3184992243406469;
		health_113.alpha = 0.5;
		health_113.alphaTopLeft = 0.5;
		health_113.alphaTopRight = 0.5;
		health_113.alphaBottomLeft = 0.5;
		health_113.alphaBottomRight = 0.5;

		// health_114
		const health_114 = this.add.image(1318, -5185, "redheart");
		health_114.scaleX = 0.31849922434064726;
		health_114.scaleY = 0.31849922434064726;
		health_114.alpha = 0.5;
		health_114.alphaTopLeft = 0.5;
		health_114.alphaTopRight = 0.5;
		health_114.alphaBottomLeft = 0.5;
		health_114.alphaBottomRight = 0.5;

		// health_115
		const health_115 = this.add.image(1318, -5267, "redheart");
		health_115.scaleX = 0.31849922434064726;
		health_115.scaleY = 0.31849922434064726;
		health_115.alpha = 0.5;
		health_115.alphaTopLeft = 0.5;
		health_115.alphaTopRight = 0.5;
		health_115.alphaBottomLeft = 0.5;
		health_115.alphaBottomRight = 0.5;

		// health_116
		const health_116 = this.add.image(1318, -5541, "redheart");
		health_116.scaleX = 0.31849922434064726;
		health_116.scaleY = 0.31849922434064726;
		health_116.alpha = 0.5;
		health_116.alphaTopLeft = 0.5;
		health_116.alphaTopRight = 0.5;
		health_116.alphaBottomLeft = 0.5;
		health_116.alphaBottomRight = 0.5;

		// health_117
		const health_117 = this.add.image(1318, -5642, "redheart");
		health_117.scaleX = 0.3184992243406469;
		health_117.scaleY = 0.3184992243406469;
		health_117.alpha = 0.5;
		health_117.alphaTopLeft = 0.5;
		health_117.alphaTopRight = 0.5;
		health_117.alphaBottomLeft = 0.5;
		health_117.alphaBottomRight = 0.5;

		// health_118
		const health_118 = this.add.image(-157, -3743, "redheart");
		health_118.scaleX = 0.31849922434064726;
		health_118.scaleY = 0.31849922434064726;
		health_118.alpha = 0.5;
		health_118.alphaTopLeft = 0.5;
		health_118.alphaTopRight = 0.5;
		health_118.alphaBottomLeft = 0.5;
		health_118.alphaBottomRight = 0.5;

		// health_119
		const health_119 = this.add.image(-157, -3833, "redheart");
		health_119.scaleX = 0.3184992243406469;
		health_119.scaleY = 0.3184992243406469;
		health_119.alpha = 0.5;
		health_119.alphaTopLeft = 0.5;
		health_119.alphaTopRight = 0.5;
		health_119.alphaBottomLeft = 0.5;
		health_119.alphaBottomRight = 0.5;

		// health_120
		const health_120 = this.add.image(-157, -3927, "redheart");
		health_120.scaleX = 0.31849922434064726;
		health_120.scaleY = 0.31849922434064726;
		health_120.alpha = 0.5;
		health_120.alphaTopLeft = 0.5;
		health_120.alphaTopRight = 0.5;
		health_120.alphaBottomLeft = 0.5;
		health_120.alphaBottomRight = 0.5;

		// health_121
		const health_121 = this.add.image(-157, -4023, "redheart");
		health_121.scaleX = 0.3184992243406469;
		health_121.scaleY = 0.3184992243406469;
		health_121.alpha = 0.5;
		health_121.alphaTopLeft = 0.5;
		health_121.alphaTopRight = 0.5;
		health_121.alphaBottomLeft = 0.5;
		health_121.alphaBottomRight = 0.5;

		// health_122
		const health_122 = this.add.image(-155, -4288, "redheart");
		health_122.scaleX = 0.31849922434064726;
		health_122.scaleY = 0.31849922434064726;
		health_122.alpha = 0.5;
		health_122.alphaTopLeft = 0.5;
		health_122.alphaTopRight = 0.5;
		health_122.alphaBottomLeft = 0.5;
		health_122.alphaBottomRight = 0.5;

		// health_123
		const health_123 = this.add.image(-155, -4378, "redheart");
		health_123.scaleX = 0.3184992243406469;
		health_123.scaleY = 0.3184992243406469;
		health_123.alpha = 0.5;
		health_123.alphaTopLeft = 0.5;
		health_123.alphaTopRight = 0.5;
		health_123.alphaBottomLeft = 0.5;
		health_123.alphaBottomRight = 0.5;

		// health_124
		const health_124 = this.add.image(-155, -4118, "redheart");
		health_124.scaleX = 0.31849922434064726;
		health_124.scaleY = 0.31849922434064726;
		health_124.alpha = 0.5;
		health_124.alphaTopLeft = 0.5;
		health_124.alphaTopRight = 0.5;
		health_124.alphaBottomLeft = 0.5;
		health_124.alphaBottomRight = 0.5;

		// health_125
		const health_125 = this.add.image(-155, -4200, "redheart");
		health_125.scaleX = 0.31849922434064726;
		health_125.scaleY = 0.31849922434064726;
		health_125.alpha = 0.5;
		health_125.alphaTopLeft = 0.5;
		health_125.alphaTopRight = 0.5;
		health_125.alphaBottomLeft = 0.5;
		health_125.alphaBottomRight = 0.5;

		// health_126
		const health_126 = this.add.image(-155, -4474, "redheart");
		health_126.scaleX = 0.31849922434064726;
		health_126.scaleY = 0.31849922434064726;
		health_126.alpha = 0.5;
		health_126.alphaTopLeft = 0.5;
		health_126.alphaTopRight = 0.5;
		health_126.alphaBottomLeft = 0.5;
		health_126.alphaBottomRight = 0.5;

		// health_127
		const health_127 = this.add.image(-155, -4575, "redheart");
		health_127.scaleX = 0.3184992243406469;
		health_127.scaleY = 0.3184992243406469;
		health_127.alpha = 0.5;
		health_127.alphaTopLeft = 0.5;
		health_127.alphaTopRight = 0.5;
		health_127.alphaBottomLeft = 0.5;
		health_127.alphaBottomRight = 0.5;

		// health_128
		const health_128 = this.add.image(-152, -4832, "redheart");
		health_128.scaleX = 0.31849922434064726;
		health_128.scaleY = 0.31849922434064726;
		health_128.alpha = 0.5;
		health_128.alphaTopLeft = 0.5;
		health_128.alphaTopRight = 0.5;
		health_128.alphaBottomLeft = 0.5;
		health_128.alphaBottomRight = 0.5;

		// health_129
		const health_129 = this.add.image(-152, -4922, "redheart");
		health_129.scaleX = 0.3184992243406469;
		health_129.scaleY = 0.3184992243406469;
		health_129.alpha = 0.5;
		health_129.alphaTopLeft = 0.5;
		health_129.alphaTopRight = 0.5;
		health_129.alphaBottomLeft = 0.5;
		health_129.alphaBottomRight = 0.5;

		// health_130
		const health_130 = this.add.image(-152, -4662, "redheart");
		health_130.scaleX = 0.31849922434064726;
		health_130.scaleY = 0.31849922434064726;
		health_130.alpha = 0.5;
		health_130.alphaTopLeft = 0.5;
		health_130.alphaTopRight = 0.5;
		health_130.alphaBottomLeft = 0.5;
		health_130.alphaBottomRight = 0.5;

		// health_131
		const health_131 = this.add.image(-152, -4744, "redheart");
		health_131.scaleX = 0.31849922434064726;
		health_131.scaleY = 0.31849922434064726;
		health_131.alpha = 0.5;
		health_131.alphaTopLeft = 0.5;
		health_131.alphaTopRight = 0.5;
		health_131.alphaBottomLeft = 0.5;
		health_131.alphaBottomRight = 0.5;

		// health_132
		const health_132 = this.add.image(-152, -5016, "redheart");
		health_132.scaleX = 0.31849922434064726;
		health_132.scaleY = 0.31849922434064726;
		health_132.alpha = 0.5;
		health_132.alphaTopLeft = 0.5;
		health_132.alphaTopRight = 0.5;
		health_132.alphaBottomLeft = 0.5;
		health_132.alphaBottomRight = 0.5;

		// health_133
		const health_133 = this.add.image(-152, -5112, "redheart");
		health_133.scaleX = 0.3184992243406469;
		health_133.scaleY = 0.3184992243406469;
		health_133.alpha = 0.5;
		health_133.alphaTopLeft = 0.5;
		health_133.alphaTopRight = 0.5;
		health_133.alphaBottomLeft = 0.5;
		health_133.alphaBottomRight = 0.5;

		// health_134
		const health_134 = this.add.image(-150, -5377, "redheart");
		health_134.scaleX = 0.31849922434064726;
		health_134.scaleY = 0.31849922434064726;
		health_134.alpha = 0.5;
		health_134.alphaTopLeft = 0.5;
		health_134.alphaTopRight = 0.5;
		health_134.alphaBottomLeft = 0.5;
		health_134.alphaBottomRight = 0.5;

		// health_135
		const health_135 = this.add.image(-150, -5467, "redheart");
		health_135.scaleX = 0.3184992243406469;
		health_135.scaleY = 0.3184992243406469;
		health_135.alpha = 0.5;
		health_135.alphaTopLeft = 0.5;
		health_135.alphaTopRight = 0.5;
		health_135.alphaBottomLeft = 0.5;
		health_135.alphaBottomRight = 0.5;

		// health_136
		const health_136 = this.add.image(-150, -5207, "redheart");
		health_136.scaleX = 0.31849922434064726;
		health_136.scaleY = 0.31849922434064726;
		health_136.alpha = 0.5;
		health_136.alphaTopLeft = 0.5;
		health_136.alphaTopRight = 0.5;
		health_136.alphaBottomLeft = 0.5;
		health_136.alphaBottomRight = 0.5;

		// health_137
		const health_137 = this.add.image(-150, -5289, "redheart");
		health_137.scaleX = 0.31849922434064726;
		health_137.scaleY = 0.31849922434064726;
		health_137.alpha = 0.5;
		health_137.alphaTopLeft = 0.5;
		health_137.alphaTopRight = 0.5;
		health_137.alphaBottomLeft = 0.5;
		health_137.alphaBottomRight = 0.5;

		// health_138
		const health_138 = this.add.image(-150, -5563, "redheart");
		health_138.scaleX = 0.31849922434064726;
		health_138.scaleY = 0.31849922434064726;
		health_138.alpha = 0.5;
		health_138.alphaTopLeft = 0.5;
		health_138.alphaTopRight = 0.5;
		health_138.alphaBottomLeft = 0.5;
		health_138.alphaBottomRight = 0.5;

		// health_139
		const health_139 = this.add.image(-150, -5664, "redheart");
		health_139.scaleX = 0.3184992243406469;
		health_139.scaleY = 0.3184992243406469;
		health_139.alpha = 0.5;
		health_139.alphaTopLeft = 0.5;
		health_139.alphaTopRight = 0.5;
		health_139.alphaBottomLeft = 0.5;
		health_139.alphaBottomRight = 0.5;

		// ninjastar15
		const ninjastar15 = this.physics.add.sprite(438, -100, "Ninja star");
		ninjastar15.scaleX = 0.42986391835571236;
		ninjastar15.scaleY = 0.42986391835571236;
		ninjastar15.body.angularVelocity = 220;
		ninjastar15.body.setSize(251, 251, false);

		// ninjastar16
		const ninjastar16 = this.physics.add.sprite(873, 133, "Ninja star");
		ninjastar16.scaleX = 0.42986391835571236;
		ninjastar16.scaleY = 0.42986391835571236;
		ninjastar16.body.angularVelocity = 220;
		ninjastar16.body.setSize(251, 251, false);

		// enemyCat1
		const enemyCat1 = new EnemyCat(this, 572, -5735);
		this.add.existing(enemyCat1);
		enemyCat1.body.collideWorldBounds = true;
		enemyCat1.body.onWorldBounds = true;

		// heartPlatform_1
		const heartPlatform_1 = new HeartPlatform(this, -60, -5971);
		this.add.existing(heartPlatform_1);
		heartPlatform_1.scaleX = 0.6859590093117656;
		heartPlatform_1.scaleY = 0.8;
		heartPlatform_1.visible = true;
		heartPlatform_1.alpha = 0.4;

		// heartPlatform_3
		const heartPlatform_3 = new HeartPlatform(this, -60, -6259);
		this.add.existing(heartPlatform_3);
		heartPlatform_3.scaleX = 0.6859590093117656;
		heartPlatform_3.scaleY = 0.8;
		heartPlatform_3.visible = true;
		heartPlatform_3.alpha = 0.4;

		// heartPlatform_4
		const heartPlatform_4 = new HeartPlatform(this, -60, -6550);
		this.add.existing(heartPlatform_4);
		heartPlatform_4.scaleX = 0.6859590093117656;
		heartPlatform_4.scaleY = 0.8;
		heartPlatform_4.visible = true;
		heartPlatform_4.alpha = 0.4;

		// health_140
		const health_140 = this.add.image(-146, -5762, "redheart");
		health_140.scaleX = 0.3184992243406469;
		health_140.scaleY = 0.3184992243406469;
		health_140.alpha = 0.5;
		health_140.alphaTopLeft = 0.5;
		health_140.alphaTopRight = 0.5;
		health_140.alphaBottomLeft = 0.5;
		health_140.alphaBottomRight = 0.5;

		// health_141
		const health_141 = this.add.image(-144, -6027, "redheart");
		health_141.scaleX = 0.31849922434064726;
		health_141.scaleY = 0.31849922434064726;
		health_141.alpha = 0.5;
		health_141.alphaTopLeft = 0.5;
		health_141.alphaTopRight = 0.5;
		health_141.alphaBottomLeft = 0.5;
		health_141.alphaBottomRight = 0.5;

		// health_142
		const health_142 = this.add.image(-144, -6117, "redheart");
		health_142.scaleX = 0.3184992243406469;
		health_142.scaleY = 0.3184992243406469;
		health_142.alpha = 0.5;
		health_142.alphaTopLeft = 0.5;
		health_142.alphaTopRight = 0.5;
		health_142.alphaBottomLeft = 0.5;
		health_142.alphaBottomRight = 0.5;

		// health_143
		const health_143 = this.add.image(-144, -5857, "redheart");
		health_143.scaleX = 0.31849922434064726;
		health_143.scaleY = 0.31849922434064726;
		health_143.alpha = 0.5;
		health_143.alphaTopLeft = 0.5;
		health_143.alphaTopRight = 0.5;
		health_143.alphaBottomLeft = 0.5;
		health_143.alphaBottomRight = 0.5;

		// health_144
		const health_144 = this.add.image(-144, -5939, "redheart");
		health_144.scaleX = 0.31849922434064726;
		health_144.scaleY = 0.31849922434064726;
		health_144.alpha = 0.5;
		health_144.alphaTopLeft = 0.5;
		health_144.alphaTopRight = 0.5;
		health_144.alphaBottomLeft = 0.5;
		health_144.alphaBottomRight = 0.5;

		// health_145
		const health_145 = this.add.image(-144, -6213, "redheart");
		health_145.scaleX = 0.31849922434064726;
		health_145.scaleY = 0.31849922434064726;
		health_145.alpha = 0.5;
		health_145.alphaTopLeft = 0.5;
		health_145.alphaTopRight = 0.5;
		health_145.alphaBottomLeft = 0.5;
		health_145.alphaBottomRight = 0.5;

		// health_146
		const health_146 = this.add.image(-144, -6314, "redheart");
		health_146.scaleX = 0.3184992243406469;
		health_146.scaleY = 0.3184992243406469;
		health_146.alpha = 0.5;
		health_146.alphaTopLeft = 0.5;
		health_146.alphaTopRight = 0.5;
		health_146.alphaBottomLeft = 0.5;
		health_146.alphaBottomRight = 0.5;

		// health_147
		const health_147 = this.add.image(-141, -6571, "redheart");
		health_147.scaleX = 0.31849922434064726;
		health_147.scaleY = 0.31849922434064726;
		health_147.alpha = 0.5;
		health_147.alphaTopLeft = 0.5;
		health_147.alphaTopRight = 0.5;
		health_147.alphaBottomLeft = 0.5;
		health_147.alphaBottomRight = 0.5;

		// health_148
		const health_148 = this.add.image(-141, -6661, "redheart");
		health_148.scaleX = 0.3184992243406469;
		health_148.scaleY = 0.3184992243406469;
		health_148.alpha = 0.5;
		health_148.alphaTopLeft = 0.5;
		health_148.alphaTopRight = 0.5;
		health_148.alphaBottomLeft = 0.5;
		health_148.alphaBottomRight = 0.5;

		// health_149
		const health_149 = this.add.image(-141, -6401, "redheart");
		health_149.scaleX = 0.31849922434064726;
		health_149.scaleY = 0.31849922434064726;
		health_149.alpha = 0.5;
		health_149.alphaTopLeft = 0.5;
		health_149.alphaTopRight = 0.5;
		health_149.alphaBottomLeft = 0.5;
		health_149.alphaBottomRight = 0.5;

		// health_150
		const health_150 = this.add.image(-141, -6483, "redheart");
		health_150.scaleX = 0.31849922434064726;
		health_150.scaleY = 0.31849922434064726;
		health_150.alpha = 0.5;
		health_150.alphaTopLeft = 0.5;
		health_150.alphaTopRight = 0.5;
		health_150.alphaBottomLeft = 0.5;
		health_150.alphaBottomRight = 0.5;

		// health_151
		const health_151 = this.add.image(-141, -6755, "redheart");
		health_151.scaleX = 0.31849922434064726;
		health_151.scaleY = 0.31849922434064726;
		health_151.alpha = 0.5;
		health_151.alphaTopLeft = 0.5;
		health_151.alphaTopRight = 0.5;
		health_151.alphaBottomLeft = 0.5;
		health_151.alphaBottomRight = 0.5;

		// health_152
		const health_152 = this.add.image(-141, -6851, "redheart");
		health_152.scaleX = 0.3184992243406469;
		health_152.scaleY = 0.3184992243406469;
		health_152.alpha = 0.5;
		health_152.alphaTopLeft = 0.5;
		health_152.alphaTopRight = 0.5;
		health_152.alphaBottomLeft = 0.5;
		health_152.alphaBottomRight = 0.5;

		// health_153
		const health_153 = this.add.image(-139, -7116, "redheart");
		health_153.scaleX = 0.31849922434064726;
		health_153.scaleY = 0.31849922434064726;
		health_153.alpha = 0.5;
		health_153.alphaTopLeft = 0.5;
		health_153.alphaTopRight = 0.5;
		health_153.alphaBottomLeft = 0.5;
		health_153.alphaBottomRight = 0.5;

		// health_154
		const health_154 = this.add.image(-139, -7206, "redheart");
		health_154.scaleX = 0.3184992243406469;
		health_154.scaleY = 0.3184992243406469;
		health_154.alpha = 0.5;
		health_154.alphaTopLeft = 0.5;
		health_154.alphaTopRight = 0.5;
		health_154.alphaBottomLeft = 0.5;
		health_154.alphaBottomRight = 0.5;

		// health_155
		const health_155 = this.add.image(-139, -6946, "redheart");
		health_155.scaleX = 0.31849922434064726;
		health_155.scaleY = 0.31849922434064726;
		health_155.alpha = 0.5;
		health_155.alphaTopLeft = 0.5;
		health_155.alphaTopRight = 0.5;
		health_155.alphaBottomLeft = 0.5;
		health_155.alphaBottomRight = 0.5;

		// health_156
		const health_156 = this.add.image(-139, -7028, "redheart");
		health_156.scaleX = 0.31849922434064726;
		health_156.scaleY = 0.31849922434064726;
		health_156.alpha = 0.5;
		health_156.alphaTopLeft = 0.5;
		health_156.alphaTopRight = 0.5;
		health_156.alphaBottomLeft = 0.5;
		health_156.alphaBottomRight = 0.5;

		// health_157
		const health_157 = this.add.image(-139, -7302, "redheart");
		health_157.scaleX = 0.31849922434064726;
		health_157.scaleY = 0.31849922434064726;
		health_157.alpha = 0.5;
		health_157.alphaTopLeft = 0.5;
		health_157.alphaTopRight = 0.5;
		health_157.alphaBottomLeft = 0.5;
		health_157.alphaBottomRight = 0.5;

		// health_158
		const health_158 = this.add.image(-139, -7403, "redheart");
		health_158.scaleX = 0.3184992243406469;
		health_158.scaleY = 0.3184992243406469;
		health_158.alpha = 0.5;
		health_158.alphaTopLeft = 0.5;
		health_158.alphaTopRight = 0.5;
		health_158.alphaBottomLeft = 0.5;
		health_158.alphaBottomRight = 0.5;

		// health_159
		const health_159 = this.add.image(1320, -5737, "redheart");
		health_159.scaleX = 0.3184992243406469;
		health_159.scaleY = 0.3184992243406469;
		health_159.alpha = 0.5;
		health_159.alphaTopLeft = 0.5;
		health_159.alphaTopRight = 0.5;
		health_159.alphaBottomLeft = 0.5;
		health_159.alphaBottomRight = 0.5;

		// health_160
		const health_160 = this.add.image(1322, -6002, "redheart");
		health_160.scaleX = 0.31849922434064726;
		health_160.scaleY = 0.31849922434064726;
		health_160.alpha = 0.5;
		health_160.alphaTopLeft = 0.5;
		health_160.alphaTopRight = 0.5;
		health_160.alphaBottomLeft = 0.5;
		health_160.alphaBottomRight = 0.5;

		// health_161
		const health_161 = this.add.image(1322, -6092, "redheart");
		health_161.scaleX = 0.3184992243406469;
		health_161.scaleY = 0.3184992243406469;
		health_161.alpha = 0.5;
		health_161.alphaTopLeft = 0.5;
		health_161.alphaTopRight = 0.5;
		health_161.alphaBottomLeft = 0.5;
		health_161.alphaBottomRight = 0.5;

		// health_162
		const health_162 = this.add.image(1322, -5832, "redheart");
		health_162.scaleX = 0.31849922434064726;
		health_162.scaleY = 0.31849922434064726;
		health_162.alpha = 0.5;
		health_162.alphaTopLeft = 0.5;
		health_162.alphaTopRight = 0.5;
		health_162.alphaBottomLeft = 0.5;
		health_162.alphaBottomRight = 0.5;

		// health_163
		const health_163 = this.add.image(1322, -5914, "redheart");
		health_163.scaleX = 0.31849922434064726;
		health_163.scaleY = 0.31849922434064726;
		health_163.alpha = 0.5;
		health_163.alphaTopLeft = 0.5;
		health_163.alphaTopRight = 0.5;
		health_163.alphaBottomLeft = 0.5;
		health_163.alphaBottomRight = 0.5;

		// health_164
		const health_164 = this.add.image(1322, -6188, "redheart");
		health_164.scaleX = 0.31849922434064726;
		health_164.scaleY = 0.31849922434064726;
		health_164.alpha = 0.5;
		health_164.alphaTopLeft = 0.5;
		health_164.alphaTopRight = 0.5;
		health_164.alphaBottomLeft = 0.5;
		health_164.alphaBottomRight = 0.5;

		// health_165
		const health_165 = this.add.image(1322, -6289, "redheart");
		health_165.scaleX = 0.3184992243406469;
		health_165.scaleY = 0.3184992243406469;
		health_165.alpha = 0.5;
		health_165.alphaTopLeft = 0.5;
		health_165.alphaTopRight = 0.5;
		health_165.alphaBottomLeft = 0.5;
		health_165.alphaBottomRight = 0.5;

		// health_166
		const health_166 = this.add.image(1325, -6546, "redheart");
		health_166.scaleX = 0.31849922434064726;
		health_166.scaleY = 0.31849922434064726;
		health_166.alpha = 0.5;
		health_166.alphaTopLeft = 0.5;
		health_166.alphaTopRight = 0.5;
		health_166.alphaBottomLeft = 0.5;
		health_166.alphaBottomRight = 0.5;

		// health_167
		const health_167 = this.add.image(1325, -6636, "redheart");
		health_167.scaleX = 0.3184992243406469;
		health_167.scaleY = 0.3184992243406469;
		health_167.alpha = 0.5;
		health_167.alphaTopLeft = 0.5;
		health_167.alphaTopRight = 0.5;
		health_167.alphaBottomLeft = 0.5;
		health_167.alphaBottomRight = 0.5;

		// health_168
		const health_168 = this.add.image(1325, -6376, "redheart");
		health_168.scaleX = 0.31849922434064726;
		health_168.scaleY = 0.31849922434064726;
		health_168.alpha = 0.5;
		health_168.alphaTopLeft = 0.5;
		health_168.alphaTopRight = 0.5;
		health_168.alphaBottomLeft = 0.5;
		health_168.alphaBottomRight = 0.5;

		// health_169
		const health_169 = this.add.image(1325, -6458, "redheart");
		health_169.scaleX = 0.31849922434064726;
		health_169.scaleY = 0.31849922434064726;
		health_169.alpha = 0.5;
		health_169.alphaTopLeft = 0.5;
		health_169.alphaTopRight = 0.5;
		health_169.alphaBottomLeft = 0.5;
		health_169.alphaBottomRight = 0.5;

		// health_170
		const health_170 = this.add.image(1325, -6730, "redheart");
		health_170.scaleX = 0.31849922434064726;
		health_170.scaleY = 0.31849922434064726;
		health_170.alpha = 0.5;
		health_170.alphaTopLeft = 0.5;
		health_170.alphaTopRight = 0.5;
		health_170.alphaBottomLeft = 0.5;
		health_170.alphaBottomRight = 0.5;

		// health_171
		const health_171 = this.add.image(1325, -6826, "redheart");
		health_171.scaleX = 0.3184992243406469;
		health_171.scaleY = 0.3184992243406469;
		health_171.alpha = 0.5;
		health_171.alphaTopLeft = 0.5;
		health_171.alphaTopRight = 0.5;
		health_171.alphaBottomLeft = 0.5;
		health_171.alphaBottomRight = 0.5;

		// health_172
		const health_172 = this.add.image(1327, -7091, "redheart");
		health_172.scaleX = 0.31849922434064726;
		health_172.scaleY = 0.31849922434064726;
		health_172.alpha = 0.5;
		health_172.alphaTopLeft = 0.5;
		health_172.alphaTopRight = 0.5;
		health_172.alphaBottomLeft = 0.5;
		health_172.alphaBottomRight = 0.5;

		// health_173
		const health_173 = this.add.image(1327, -7181, "redheart");
		health_173.scaleX = 0.3184992243406469;
		health_173.scaleY = 0.3184992243406469;
		health_173.alpha = 0.5;
		health_173.alphaTopLeft = 0.5;
		health_173.alphaTopRight = 0.5;
		health_173.alphaBottomLeft = 0.5;
		health_173.alphaBottomRight = 0.5;

		// health_174
		const health_174 = this.add.image(1327, -6921, "redheart");
		health_174.scaleX = 0.31849922434064726;
		health_174.scaleY = 0.31849922434064726;
		health_174.alpha = 0.5;
		health_174.alphaTopLeft = 0.5;
		health_174.alphaTopRight = 0.5;
		health_174.alphaBottomLeft = 0.5;
		health_174.alphaBottomRight = 0.5;

		// health_175
		const health_175 = this.add.image(1327, -7003, "redheart");
		health_175.scaleX = 0.31849922434064726;
		health_175.scaleY = 0.31849922434064726;
		health_175.alpha = 0.5;
		health_175.alphaTopLeft = 0.5;
		health_175.alphaTopRight = 0.5;
		health_175.alphaBottomLeft = 0.5;
		health_175.alphaBottomRight = 0.5;

		// health_176
		const health_176 = this.add.image(1327, -7277, "redheart");
		health_176.scaleX = 0.31849922434064726;
		health_176.scaleY = 0.31849922434064726;
		health_176.alpha = 0.5;
		health_176.alphaTopLeft = 0.5;
		health_176.alphaTopRight = 0.5;
		health_176.alphaBottomLeft = 0.5;
		health_176.alphaBottomRight = 0.5;

		// health_177
		const health_177 = this.add.image(1327, -7378, "redheart");
		health_177.scaleX = 0.3184992243406469;
		health_177.scaleY = 0.3184992243406469;
		health_177.alpha = 0.5;
		health_177.alphaTopLeft = 0.5;
		health_177.alphaTopRight = 0.5;
		health_177.alphaBottomLeft = 0.5;
		health_177.alphaBottomRight = 0.5;

		// rectangle
		const rectangle = this.add.rectangle(617, -4146, 128, 128);
		rectangle.scaleX = 20.615414869426598;
		rectangle.scaleY = 82.2491672679324;
		rectangle.visible = false;
		rectangle.alpha = 0.1;
		rectangle.isFilled = true;
		rectangle.fillColor = 12463142;

		// saturateFx
		const saturateFx = rectangle.postFX.addColorMatrix();
		saturateFx.saturate(1);

		// enemyCat2
		const enemyCat2 = new EnemyCat(this, 794, -6316);
		this.add.existing(enemyCat2);
		enemyCat2.body.collideWorldBounds = true;
		enemyCat2.body.onWorldBounds = true;

		// enemyCat3
		const enemyCat3 = new EnemyCat(this, 295, -6608);
		this.add.existing(enemyCat3);
		enemyCat3.body.collideWorldBounds = true;
		enemyCat3.body.onWorldBounds = true;

		// enemyCat4
		const enemyCat4 = new EnemyCat(this, 57, -6031);
		this.add.existing(enemyCat4);
		enemyCat4.body.collideWorldBounds = true;
		enemyCat4.body.onWorldBounds = true;

		// feline
		const feline = this.physics.add.sprite(321, -7032, "__white_cat_sitting_011");
		feline.scaleX = 0.19586329317477102;
		feline.scaleY = 0.19586329317477102;
		feline.body.setSize(636, 582, false);

		// feline heart
		const feline_heart = this.physics.add.sprite(320, -6987, "redheart");
		feline_heart.scaleX = 0.31876119197505925;
		feline_heart.scaleY = 0.31876119197505925;
		feline_heart.body.setSize(256, 256, false);

		// wallleft
		const wallleft = this.physics.add.sprite(-159, -2992, "redheart");
		wallleft.scaleX = 0.2542281543652115;
		wallleft.scaleY = 29.15405364640106;
		wallleft.visible = false;
		wallleft.alpha = 0.5;
		wallleft.alphaTopLeft = 0.5;
		wallleft.alphaTopRight = 0.5;
		wallleft.alphaBottomLeft = 0.5;
		wallleft.alphaBottomRight = 0.5;
		wallleft.body.pushable = false;
		wallleft.body.immovable = true;
		wallleft.body.setSize(256, 256, false);

		// awougaheart
		const awougaheart = this.physics.add.sprite(842, -8179, "100-percent");
		awougaheart.scaleX = 1.0683576286637164;
		awougaheart.scaleY = 0.7096208157108833;
		awougaheart.visible = false;
		awougaheart.body.setSize(256, 256, false);

		// feline2
		const feline2 = this.physics.add.sprite(965, -8163, "__white_cat_sitting_011");
		feline2.scaleX = 0.18623933142280713;
		feline2.scaleY = 0.18623933142280713;
		feline2.visible = false;
		feline2.body.setSize(636, 582, false);

		// wallright
		const wallright = this.physics.add.sprite(1382, -2984, "redheart");
		wallright.scaleX = 0.2542281543652115;
		wallright.scaleY = 29.15405364640106;
		wallright.visible = false;
		wallright.alpha = 0.5;
		wallright.alphaTopLeft = 0.5;
		wallright.alphaTopRight = 0.5;
		wallright.alphaBottomLeft = 0.5;
		wallright.alphaBottomRight = 0.5;
		wallright.body.pushable = false;
		wallright.body.immovable = true;
		wallright.body.setSize(256, 256, false);

		// heartPlatform0 (prefab fields)
		heartPlatform0.AllHearts = true;

		// heartPlatform_2 (prefab fields)
		heartPlatform_2.AllHearts = true;

		// heartPlatform (prefab fields)
		heartPlatform.AllHearts = true;

		// heartPlatform_1 (prefab fields)
		heartPlatform_1.AllHearts = true;

		// heartPlatform_3 (prefab fields)
		heartPlatform_3.AllHearts = true;

		// heartPlatform_4 (prefab fields)
		heartPlatform_4.AllHearts = true;

		this.sky = sky;
		this.sky_1 = sky_1;
		this.heartPlatform0 = heartPlatform0;
		this.catPlayer = catPlayer;
		this.heartPlatform_2 = heartPlatform_2;
		this.heartPlatform = heartPlatform;
		this.ninjastar1 = ninjastar1;
		this.ninjastar2 = ninjastar2;
		this.enemyCat = enemyCat;
		this.ninjastar3 = ninjastar3;
		this.ninjastar4 = ninjastar4;
		this.ninjastar5 = ninjastar5;
		this.ninjastar6 = ninjastar6;
		this.ninjastar7 = ninjastar7;
		this.ninjastar8 = ninjastar8;
		this.ninjastar9 = ninjastar9;
		this.ninjastar10 = ninjastar10;
		this.ninjastar11 = ninjastar11;
		this.ninjastar12 = ninjastar12;
		this.ninjastar13 = ninjastar13;
		this.ninjastar14 = ninjastar14;
		this.ninjastar15 = ninjastar15;
		this.ninjastar16 = ninjastar16;
		this.enemyCat1 = enemyCat1;
		this.heartPlatform_1 = heartPlatform_1;
		this.heartPlatform_3 = heartPlatform_3;
		this.heartPlatform_4 = heartPlatform_4;
		this.enemyCat2 = enemyCat2;
		this.enemyCat3 = enemyCat3;
		this.enemyCat4 = enemyCat4;
		this.feline = feline;
		this.feline_heart = feline_heart;
		this.wallleft = wallleft;
		this.awougaheart = awougaheart;
		this.feline2 = feline2;
		this.wallright = wallright;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	sky;
	/** @type {Phaser.GameObjects.Image} */
	sky_1;
	/** @type {HeartPlatform} */
	heartPlatform0;
	/** @type {CatPlayer} */
	catPlayer;
	/** @type {HeartPlatform} */
	heartPlatform_2;
	/** @type {HeartPlatform} */
	heartPlatform;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	ninjastar1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	ninjastar2;
	/** @type {EnemyCat} */
	enemyCat;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	ninjastar3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	ninjastar4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	ninjastar5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	ninjastar6;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	ninjastar7;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	ninjastar8;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	ninjastar9;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	ninjastar10;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	ninjastar11;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	ninjastar12;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	ninjastar13;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	ninjastar14;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	ninjastar15;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	ninjastar16;
	/** @type {EnemyCat} */
	enemyCat1;
	/** @type {HeartPlatform} */
	heartPlatform_1;
	/** @type {HeartPlatform} */
	heartPlatform_3;
	/** @type {HeartPlatform} */
	heartPlatform_4;
	/** @type {EnemyCat} */
	enemyCat2;
	/** @type {EnemyCat} */
	enemyCat3;
	/** @type {EnemyCat} */
	enemyCat4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	feline;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	feline_heart;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	wallleft;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	awougaheart;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	feline2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	wallright;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.LoveHeartsGroup=this.add.group();
		this.LoveFloatHeartsGroup=this.add.group();
		this.LoveHeartsGroupArrow=this.add.group();
		this.UpdateGroup=this.add.group();
		this.ArrowGroup=this.add.group();
		this.EnemyCatsGroup=this.add.group();
		this.EnemyGroup=this.add.group();
		this.StickGroup=this.add.group();
		this.BallGroup=this.add.group();
		this.DartsGroup=this.add.group();

		this.GotHer=false;

		this.editorCreate();

		this.DartsDirection=true;

		this.lovetheme=this.sound.add('Lovelevel');
	this.goaltheme=this.sound.add('missiongoal');

	this.lovetheme.setVolume(0.3);
	this.lovetheme.play();



this.EnemyGroup.add(this.ninjastar1);
this.EnemyGroup.add(this.ninjastar2);
this.EnemyGroup.add(this.ninjastar3);
this.EnemyGroup.add(this.ninjastar4);
this.EnemyGroup.add(this.ninjastar5);
this.EnemyGroup.add(this.ninjastar6);
this.EnemyGroup.add(this.ninjastar7);
this.EnemyGroup.add(this.ninjastar8);
this.EnemyGroup.add(this.ninjastar9);
this.EnemyGroup.add(this.ninjastar10);
this.EnemyGroup.add(this.ninjastar11);
this.EnemyGroup.add(this.ninjastar12);
this.EnemyGroup.add(this.ninjastar13);
this.EnemyGroup.add(this.ninjastar14);
this.EnemyGroup.add(this.ninjastar15);
this.EnemyGroup.add(this.ninjastar16);




		this.heartPlatform0.AllRedHearts=true;	

		this.CatchPresent=true;
		this.cameras.main.setZoom(0.65);

		this.physics.world.setBounds(-200,-8150,1500,9050);
		this.cameras.main.setBounds(-200,-8150,1500,8850);
		this.cameras.main.startFollow(this.catPlayer,false,0.2,0.2,0,100);
		this.physics.add.collider(this.catPlayer,this.LoveHeartsGroup);
			this.physics.add.overlap(this.catPlayer,this.feline,this.Awouga,null,this);
		this.physics.add.collider(this.catPlayer,this.LoveFloatHeartsGroup);
				this.physics.add.collider(this.EnemyCatsGroup,this.wallleft);
			this.physics.add.collider(this.catPlayer,this.wallleft);
			this.physics.add.collider(this.catPlayer,this.wallright);

			this.physics.add.overlap(this.catPlayer,this.EnemyCatsGroup,this.GetHit,null,this);
			this.physics.add.overlap(this.catPlayer,this.EnemyGroup,this.GetHit,null,this);
			this.physics.add.overlap(this.catPlayer,this.DartsGroup,this.GetHit,null,this);

		//,this.HolDdownSpeed,null,this);
		this.physics.add.overlap(this.DartsGroup,this.LoveFloatHeartsGroup,this.DestroyHeart,null,this);
			this.physics.add.overlap(this.catPlayer,this.EnemyCatsGroup,this.FallThroughFloor,null,this);

		this.heartPlatform0.depth=5;

				 this.tweenFemaleCat=this.tweens.add({
            targets: [this.feline,this.feline_heart],
			x:"+=1150",
			 duration:2050,
	//scale:{start: 0.1, to: 0.5 },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1,
        });


		 this.tweenNinjaStar=this.tweens.add({
            targets: [this.ninjastar6,this.ninjastar7,this.ninjastar8,this.ninjastar3,this.ninjastar4],
			x:"+=1250",
			 duration:3050,
	//scale:{start: 0.1, to: 0.5 },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1,
        });

	this.time.addEvent({ delay: 4000, callback:() => {

this.ThrowDart();

	}, callbackScope: this,repeat:-1 });

	this.time.addEvent({ delay: 800, callback:() => {

this.SpawnHeart();


	}, callbackScope: this,repeat:-1 });


	this.time.addEvent({ delay: 200, callback:() => {

this.ShowFloatingHeart();


	}, callbackScope: this,repeat:-1 });


	}

Awouga(Cat, feline){
Cat.CatFinishStage=true;
	Cat.WalkLeft=false;
		Cat.WalkRight=true;


	if(Cat.flipX==true){

	Cat.setTexture('__black_cat_sit_tranistion_to_004');
	Cat.body.enable=false;
	Cat.PlayJumpOnce=false;
	this.GotHer=true;
	this.awougaheart.x=Cat.x+40;
	this.awougaheart.y=Cat.y;

	this.feline2.x=Cat.x+70;
	this.feline2.y=Cat.y;
	this.feline2.flipX=false;
	Cat.setTexture('__black_cat_sit_tranistion_to_004');
	this.game.sound.stopAll();
	this.goaltheme.play();
	this.destroyenemycats();
	this.GoBackToLevel();

	}else if(Cat.flipX==false){

	Cat.setTexture('__black_cat_sit_tranistion_to_004');
	Cat.PlayJumpOnce=false;
	Cat.body.enable=false;
	this.GotHer=true;
	this.awougaheart.x=Cat.x-40;
	this.awougaheart.y=Cat.y;

	this.feline2.x=Cat.x-70;
	this.feline2.y=Cat.y;
	this.feline2.flipX=true;
	Cat.setTexture('__black_cat_sit_tranistion_to_004');
	this.game.sound.stopAll();
	this.goaltheme.play();
	this.destroyenemycats()
	this.GoBackToLevel();
		}

	}

	DestroyHeart(Cat,Heart){

if(Heart){

	Heart.destroy();
}

	}

	HolDdownSpeed(Cat, Heart){
if(Cat.body.touching.down){
Heart.body.setGravityY(-50);
Heart.body.setGravityY(0);

this.CheckIsUp(Heart);

}

	}

	GotFemaleLady(){
if(this.GotHer==true){

			this.feline2.visible=true;
		this.awougaheart.visible=true;

if(this.EnemyCatsGroup.children){
this.EnemyCatsGroup.children.visible=false;
//ShowCompletetext=true;
//this.sky.visible=false;
};

if(this.feline){

this.feline.destroy();

}

		}

	}

	CheckIsUp(Heart){


	this.time.addEvent({ delay: 200, callback:() => {

	if(Heart.active)
	{
	if(Heart.active && !Heart.body.touching.up)
		{
		Heart.body.setVelocityY(-120);
		//Heart.body.setGravityY(-30);
		}
	};

	}, callbackScope: this,repeat:0 });

					}

	ThrowDart()
	{
this.RND=Phaser.Math.Between(-50,-450);

		if(this.DartsDirection){

this.DartsDirection=false;
this.DartArrow= this.physics.add.sprite(-200, this.catPlayer.y-350-this.RND, "Darts").setScale(0.2);
this.DartArrow.body.setVelocityX(800);
this.DartArrow.flipX=true;

		}else{

this.DartsDirection=true;
this.DartArrow= this.physics.add.sprite(1400, this.catPlayer.y-350-this.RND, "Darts").setScale(0.2);
this.DartArrow.body.setVelocityX(-800);
//this.HeartFloat.flipX=true;
		}

this.DartArrow.body.setSize(this.DartArrow.width/2,this.DartArrow.height/2)
		this.DartsGroup.add(this.DartArrow);




	};

	update(){

		this.GotFemaleLady();

this.UpdateGroup.children.iterate(function(child){

if(child){

	child.update();

};


		  });

		  this.LoveHeartsGroup.children.iterate(function(child){

if(child){

	if(child.y<-6000){
		child.destroy();
	///	console.log('destroy heart');
	}

};


		  });

	}

	SpawnHeart(){


this.RND=Phaser.Math.Between(-50,1200);
this.RNDSize=Phaser.Math.Between(1,20);
//console.log('floating heart');
this.HeartFloat= this.physics.add.sprite(this.RND, 800, "redheart").setScale(0.32);


this.HeartFloat.body.setVelocityY(-100+(-this.RNDSize));
this.HeartFloat.body.pushable = false;
this.HeartFloat.body.immovable=true;
this.HeartFloat.body.immovable=true;
this.HeartFloat.body.checkCollision.down = false;
this.HeartFloat.setOffset(0,40);
//this.HeartFloat.body.checkCollision.left = false;
//this.HeartFloat.body.checkCollision.right = false;

this.LoveFloatHeartsGroup.add(this.HeartFloat);
this.HeartFloat.alpha=0.8;
this.HeartFloat.depth=200;

	this.tweenHeartBeat=this.tweens.add({
            targets: this.HeartFloat,
         	//scaleY:"+=21",
			//scale:"+=0.1",
			x:"-=10",
	 duration:500,
	//scale:{start: 0.1, to: 0.5 },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1,
			//repeatDelay: 1500,
        });

	};



	ShowFloatingHeart(){

this.RND=Phaser.Math.Between(-50,1200);
this.RNDSize=Phaser.Math.Between(1,15);
console.log('floating heart');
this.HeartFloat= this.physics.add.sprite(this.RND, 800, "health").setScale(0.25+(this.RNDSize*0.01));
this.HeartFloat.body.setGravityY(-12);
this.HeartFloat.alpha=0.3;
this.HeartFloat.depth=1;
this.add.existing(this.HeartFloat);

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
