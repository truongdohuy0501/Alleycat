
// You can write more code here

/* START OF COMPILED CODE */

class Mission2FishBowl5 extends BaseScene {

	constructor() {
		super("Mission2FishBowl5");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// aboveceiling
		const aboveceiling = this.add.image(226, -109, "orange_plain");
		aboveceiling.scaleX = -0.8191517745863153;
		aboveceiling.scaleY = 4.184809639855473;
		aboveceiling.angle = 90;
		aboveceiling.tintTopLeft = 5000268;
		aboveceiling.tintBottomLeft = 5657684;

		// green
		const green = this.add.image(1186, 651, "orange_plain");
		green.scaleX = 24;
		green.scaleY = 0.10948925414161105;
		green.tintTopLeft = 16711422;
		green.tintBottomLeft = 8947848;
		green.tintBottomRight = 9144199;

		// red_large_stripe
		const red_large_stripe = this.add.tileSprite(968, 278, 37000, 1382, "orange_large_stripe");
		red_large_stripe.scaleX = 0.09;
		red_large_stripe.scaleY = 0.5044074460423011;
		red_large_stripe.tintTopLeft = 7957869;
		red_large_stripe.tintTopRight = 8156019;
		red_large_stripe.tileScaleX = 1.15;
		red_large_stripe.tileScaleY = 0.5;

		// window
		const window = this.add.image(156, 358, "window_06");
		window.scaleX = 0.22587207017263713;
		window.scaleY = 0.22587207017263713;

		// bottom
		const bottom = this.physics.add.sprite(724, 642, "block_separator_01");
		bottom.scaleX = 5.504107162267043;
		bottom.scaleY = -0.716376328720798;
		bottom.visible = false;
		bottom.body.pushable = false;
		bottom.body.immovable = true;
		bottom.body.setSize(695, 40, false);

		// side_wall_skirting_no_wall_light
		const side_wall_skirting_no_wall_light = this.add.image(2249, 0, "side_wall_skirting_no_wall_light");
		side_wall_skirting_no_wall_light.scaleX = 0.19573239282698118;
		side_wall_skirting_no_wall_light.scaleY = 0.19573239282698118;
		side_wall_skirting_no_wall_light.angle = -28;
		side_wall_skirting_no_wall_light.visible = false;

		// plant
		const plant = this.add.image(2785, 69, "planter_01");
		plant.scaleX = 0.5835072257155557;
		plant.scaleY = 0.5835072257155557;

		// shelfbird
		const shelfbird = this.physics.add.sprite(476, 437, "light_wall_shelf");
		shelfbird.scaleX = 0.19216045257298914;
		shelfbird.scaleY = -0.15230182665415037;
		shelfbird.visible = false;
		shelfbird.body.pushable = false;
		shelfbird.body.immovable = true;
		shelfbird.body.setSize(1007, 85, false);

		// ceiling
		const ceiling = this.physics.add.sprite(711, -75, "skirting_light");
		ceiling.scaleX = 12;
		ceiling.scaleY = 0.18021693427896895;
		ceiling.body.pushable = false;
		ceiling.body.immovable = true;
		ceiling.body.setSize(383, 65, false);

		// skirtinglight
		const skirtinglight = this.add.tileSprite(664, 632, 35000, 63, "skirting_light");
		skirtinglight.scaleX = 0.13;
		skirtinglight.scaleY = 0.2528690000816929;

		// rug
		const rug = this.add.image(1113, 664, "rug_05");
		rug.scaleX = 0.22595859407563645;
		rug.scaleY = 0.12876715569084285;

		// littletable
		const littletable = this.physics.add.sprite(158, 612, "light_table_round");
		littletable.scaleX = 0.5549606181280825;
		littletable.scaleY = 0.5549606181280825;
		littletable.body.setOffset(0, 20);
		littletable.body.setSize(210, 200, false);

		// sheld10
		const sheld10 = this.physics.add.sprite(2789, 109, "dark_wall_shelf");
		sheld10.scaleX = 0.09214374306752944;
		sheld10.scaleY = 0.11;
		sheld10.body.setSize(1007, 85, false);

		// paint3
		const paint3 = this.physics.add.sprite(1084, 344, "painting_01_dark");
		paint3.scaleX = 0.13333058100639358;
		paint3.scaleY = 0.13333058100639358;
		paint3.body.setSize(739, 504, false);

		// paint2
		const paint2 = this.physics.add.sprite(453, 270, "painting_03_light");
		paint2.scaleX = 0.16022385522903515;
		paint2.scaleY = 0.16022385522903515;
		paint2.body.setSize(614, 432, false);

		// sheld1
		const sheld1 = this.physics.add.sprite(3791, 1044, "light_wall_shelf");
		sheld1.scaleX = 0.2;
		sheld1.scaleY = 0.08;
		sheld1.body.setSize(1007, 85, false);

		// coachy
		const coachy = this.physics.add.sprite(646, 598, "brown_1_seat");
		coachy.scaleX = 0.17367978441096935;
		coachy.scaleY = 0.17367978441096935;
		coachy.body.setSize(1070, 858, false);

		// bed
		const bed = this.physics.add.sprite(3321, 1077, "bed_05");
		bed.scaleX = 0.37553104116386266;
		bed.scaleY = 0.37553104116386266;
		bed.body.setSize(1628, 1068, false);

		// wardrobe
		const wardrobe = this.physics.add.sprite(1508, 535, "light_wardrobe");
		wardrobe.scaleX = 0.2443675057166429;
		wardrobe.scaleY = 0.2443675057166429;
		wardrobe.body.setSize(676, 1109, false);

		// wallclock
		const wallclock = this.add.image(-481, 217, "dark_wall_clock");
		wallclock.scaleX = 0.24279830778301437;
		wallclock.scaleY = 0.24279830778301437;

		// ghost
		const ghost = new Ghost(this, 1378, 120);
		this.add.existing(ghost);
		ghost.scaleX = 0.37512938416149033;
		ghost.scaleY = 0.37512938416149033;
		ghost.alpha = 0.4;
		ghost.body.collideWorldBounds = true;

		// lamp_4
		const lamp_4 = this.add.nineslice(781, -6, "lamp_21", undefined, 339, 1168, 1, 1, 190, 719);
		lamp_4.scaleX = 0.2175454808078271;
		lamp_4.scaleY = 0.2175454808078271;

		// chair1
		const chair1 = this.physics.add.sprite(2596, 898, "light_wood_table");
		chair1.scaleX = 0.1579229924398101;
		chair1.scaleY = 0.1579229924398101;
		chair1.body.setSize(429, 843, false);

		// lamp
		const lamp = this.add.nineslice(2256, 24, "lamp_21", undefined, 339, 1331, 1, 1, 204, 836);
		lamp.scaleX = 0.2175454808078271;
		lamp.scaleY = 0.2175454808078271;

		// painting2
		const painting2 = this.physics.add.sprite(786, 90, "painting_07_light");
		painting2.scaleX = 0.19162617816852628;
		painting2.scaleY = 0.19162617816852628;
		painting2.visible = false;
		painting2.alpha = 0.9;
		painting2.alphaTopLeft = 0.9;
		painting2.alphaTopRight = 0.9;
		painting2.alphaBottomLeft = 0.9;
		painting2.alphaBottomRight = 0.9;
		painting2.body.pushable = false;
		painting2.body.immovable = true;
		painting2.body.setOffset(0, 20);
		painting2.body.setSize(263, 320, false);

		// painting
		const painting = this.physics.add.sprite(2256, 149, "painting_07_light");
		painting.scaleX = 0.19162617816852628;
		painting.scaleY = 0.19162617816852628;
		painting.visible = false;
		painting.alpha = 0.9;
		painting.alphaTopLeft = 0.9;
		painting.alphaTopRight = 0.9;
		painting.alphaBottomLeft = 0.9;
		painting.alphaBottomRight = 0.9;
		painting.body.pushable = false;
		painting.body.immovable = true;
		painting.body.setOffset(0, 20);
		painting.body.setSize(263, 320, false);

		// chairegaaeg
		const chairegaaeg = this.physics.add.sprite(2402, 950, "light_wood_table");
		chairegaaeg.scaleX = 0.1579229924398101;
		chairegaaeg.scaleY = 0.1579229924398101;
		chairegaaeg.body.setSize(429, 843, false);

		// chair2
		const chair2 = this.physics.add.sprite(2264, 629, "light_wood_table");
		chair2.scaleX = 0.14710275297194866;
		chair2.scaleY = 0.14710275297194866;
		chair2.body.setSize(1606, 681, false);

		// aquarium1
		const aquarium1 = new Aquarium(this, 2262, 529);
		this.add.existing(aquarium1);
		aquarium1.scaleX = 1.3504034909736853;
		aquarium1.scaleY = 1.3504034909736853;

		// bookcase1
		const bookcase1 = this.physics.add.sprite(3606, 653, "light_5_shelves");
		bookcase1.scaleX = 0.24452061064970848;
		bookcase1.scaleY = 0.24452061064970848;
		bookcase1.body.setSize(676, 1109, false);

		// painting5
		const painting5 = this.physics.add.sprite(1887, 213, "painting_06_dark");
		painting5.scaleX = 0.19162617816852628;
		painting5.scaleY = 0.19162617816852628;
		painting5.alpha = 0.9;
		painting5.alphaTopLeft = 0.9;
		painting5.alphaTopRight = 0.9;
		painting5.alphaBottomLeft = 0.9;
		painting5.alphaBottomRight = 0.9;
		painting5.body.pushable = false;
		painting5.body.immovable = true;
		painting5.body.setOffset(0, 20);
		painting5.body.setSize(263, 320, false);

		// doginterior
		const doginterior = new DogInterior(this, 1125, 561);
		this.add.existing(doginterior);
		doginterior.scaleX = 0.7996953116660073;
		doginterior.scaleY = 0.7996953116660073;

		// catPlayer
		const catPlayer = new CatPlayer(this, 158, 479);
		this.add.existing(catPlayer);
		catPlayer.body.maxAngular = 3000;
		catPlayer.body.collideWorldBounds = true;

		// broom
		const broom = new Broom(this, 1743, 579);
		this.add.existing(broom);

		// shelfplant
		const shelfplant = this.physics.add.sprite(2789, 117, "shelf");
		shelfplant.scaleX = 0.34902972829781603;
		shelfplant.scaleY = 0.2553219718717177;
		shelfplant.body.setSize(309, 127, false);

		this.aboveceiling = aboveceiling;
		this.green = green;
		this.red_large_stripe = red_large_stripe;
		this.window = window;
		this.bottom = bottom;
		this.plant = plant;
		this.shelfbird = shelfbird;
		this.ceiling = ceiling;
		this.skirtinglight = skirtinglight;
		this.rug = rug;
		this.littletable = littletable;
		this.sheld10 = sheld10;
		this.paint3 = paint3;
		this.paint2 = paint2;
		this.sheld1 = sheld1;
		this.coachy = coachy;
		this.bed = bed;
		this.wardrobe = wardrobe;
		this.wallclock = wallclock;
		this.ghost = ghost;
		this.lamp_4 = lamp_4;
		this.chair1 = chair1;
		this.lamp = lamp;
		this.painting2 = painting2;
		this.painting = painting;
		this.chairegaaeg = chairegaaeg;
		this.chair2 = chair2;
		this.aquarium1 = aquarium1;
		this.bookcase1 = bookcase1;
		this.painting5 = painting5;
		this.doginterior = doginterior;
		this.catPlayer = catPlayer;
		this.broom = broom;
		this.shelfplant = shelfplant;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	aboveceiling;
	/** @type {Phaser.GameObjects.Image} */
	green;
	/** @type {Phaser.GameObjects.TileSprite} */
	red_large_stripe;
	/** @type {Phaser.GameObjects.Image} */
	window;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bottom;
	/** @type {Phaser.GameObjects.Image} */
	plant;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfbird;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	ceiling;
	/** @type {Phaser.GameObjects.TileSprite} */
	skirtinglight;
	/** @type {Phaser.GameObjects.Image} */
	rug;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	littletable;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	sheld10;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	sheld1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	coachy;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bed;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	wardrobe;
	/** @type {Phaser.GameObjects.Image} */
	wallclock;
	/** @type {Ghost} */
	ghost;
	/** @type {Phaser.GameObjects.NineSlice} */
	lamp_4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	chair1;
	/** @type {Phaser.GameObjects.NineSlice} */
	lamp;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	chairegaaeg;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	chair2;
	/** @type {Aquarium} */
	aquarium1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bookcase1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting5;
	/** @type {DogInterior} */
	doginterior;
	/** @type {CatPlayer} */
	catPlayer;
	/** @type {Broom} */
	broom;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfplant;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.UpdateGroup=this.add.group();

		this.editorCreate();

		var ColorLight=0x3b3635;
		var light  = this.lights.addLight(this.window.x,this.window.y-800,150).setIntensity(0.1);
    	this.lights.enable().setAmbientColor(ColorLight);

	this.test();
	this.addCollidersBroom();
	this.AddingRatsStuff();
//	this.rat1.direction=true;
	//this.rat1.direction=true;
	//this.rat1.setVelocityX(200);

	this.cameras.main.setZoom(0.72);
	this.physics.world.setBounds(0, -200,2600, 900);
	this.cameras.main.setBounds(0,-100,2600,800);
	this.cameras.main.startFollow(this.catPlayer,false,0.5,0.8);
	this.physics.add.collider(this.catPlayer,this.bottom);	
	//this.physics.add.collider(this.catPlayer,this.ceiling);	


		//this.physics.add.overlap(this.catPlayer,this.aquarium1.can,this.GoToScene,null,this);


	this.red_large_stripe.setPipeline('Light2D');

		this.ceiling.setPipeline('Light2D');
		this.aboveceiling.setPipeline('Light2D');
		this.skirtinglight.setPipeline('Light2D');
		this.window.setPipeline('Light2D');
		this.painting5.setPipeline('Light2D');

		this.littletable.setPipeline('Light2D');
		this.coachy.setPipeline('Light2D');
		this.wallclock.setPipeline('Light2D');
		this.paint2.setPipeline('Light2D');
		this.paint3.setPipeline('Light2D');
		this.bed.setPipeline('Light2D');
		this.wardrobe.setPipeline('Light2D');
		this.green.setPipeline('Light2D');
		this.bookcase1.setPipeline('Light2D');

		this.rug.setPipeline('Light2D');

		this.plant.setPipeline('Light2D');
		this.chair1.setPipeline('Light2D');
				this.chair2.setPipeline('Light2D');

		this.sheld10.setPipeline('Light2D');
		this.aquarium1.rectangleblue.setPipeline('Light2D');
		this.aquarium1.ceilaquarium.setPipeline('Light2D');
		this.aquarium1.rectangle8.setPipeline('Light2D');
		this.aquarium1.rectangle3.setPipeline('Light2D');

		this.aquarium1.rectangle13.setPipeline('Light2D');
		this.aquarium1.rectangle6.setPipeline('Light2D');
		this.sheld1.setPipeline('Light2D');

		this.doginterior.dog.setPipeline('Light2D');

		this.broom.setPipeline('Light2D');
		this.lamp_4.setPipeline('Light2D');
		this.lamp.setPipeline('Light2D');
		this.shelfplant.setPipeline('Light2D');

		this.aquarium1.rectangleblue.setPipeline('Light2D');
				this.aquarium1.rectangle_4.setPipeline('Light2D');
		this.aquarium1.fish.setPipeline('Light2D');
	//	this.rat1.setPipeline('Light2D');


	this.CreatePlatform(this.littletable);	
	this.CreatePlatform(this.coachy);	
	this.CreatePlatform(this.wallclock);
			this.CreatePlatform(this.paint2);
			this.CreatePlatform(this.paint3);
			this.CreatePlatform(this.bed);
			this.CreatePlatform(this.wardrobe);

			this.CreatePlatform(this.aquarium1.rectangleblue);


		this.CreatePlatform(this.sheld10);
		this.CreatePlatform(this.sheld1);
			this.CreatePlatform(this.chair1);
				this.CreatePlatform(this.chair2);
		this.physics.add.overlap(this.catPlayer,this.aquarium1.can,this.GoToScene,null,this);

			this.physics.add.collider(this.catPlayer,this.painting,this.StickToObject,null,this);
			this.physics.add.collider(this.catPlayer,this.painting2,this.StickToObject,null,this);
			this.physics.add.collider(this.catPlayer,this.painting5,this.StickToObject,null,this);

			this.cameras.main.startFollow(this.catPlayer,false,0.2,0.2,0,0);

	}

GoToScene(Cat,Player){
	console.log("start new scene");
	this.scene.start("Mission2Underwater5");


	};

update(){	

		this.DropDownWhenjumpCatonObject(this.paint2);
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
