
// You can write more code here

/* START OF COMPILED CODE */

class Mission2FishBowl3 extends BaseScene {

	constructor() {
		super("Mission2FishBowl3");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// red_large_stripe_1
		const red_large_stripe_1 = this.add.image(807, -69, "pink");
		red_large_stripe_1.scaleX = -0.8191517745863153;
		red_large_stripe_1.scaleY = 4.184809639855473;
		red_large_stripe_1.angle = 90;
		red_large_stripe_1.tintTopLeft = 8025975;
		red_large_stripe_1.tintBottomLeft = 7236973;

		// green
		const green = this.add.image(866, 659, "pink");
		green.scaleX = 7.308572865117123;
		green.scaleY = 0.08644173953713145;
		green.tintTopLeft = 16711422;
		green.tintBottomLeft = 8947848;
		green.tintBottomRight = 9144199;

		// red_large_stripe
		const red_large_stripe = this.add.tileSprite(938, 259, 10000, 1382, "pink_large_stripe");
		red_large_stripe.scaleX = 0.3153765806792921;
		red_large_stripe.scaleY = 0.5179712333690109;
		red_large_stripe.tintTopLeft = 7957869;
		red_large_stripe.tintTopRight = 8156019;
		red_large_stripe.tileScaleX = 0.4;

		// lamp
		const lamp = this.add.image(2246, -25, "lamp_21");
		lamp.scaleX = 0.2527822554099052;
		lamp.scaleY = 0.2527822554099052;

		// lamp_21
		const lamp_21 = this.add.image(340, -22, "lamp_21");
		lamp_21.scaleX = 0.2527822554099052;
		lamp_21.scaleY = 0.2527822554099052;

		// bottom
		const bottom = this.physics.add.sprite(712, 648, "block_separator_01");
		bottom.scaleX = 5.504107162267043;
		bottom.scaleY = -0.716376328720798;
		bottom.visible = false;
		bottom.body.pushable = false;
		bottom.body.immovable = true;
		bottom.body.setSize(695, 40, false);

		// side_wall_skirting_no_wall_light
		const side_wall_skirting_no_wall_light = this.add.image(2626, -22, "side_wall_skirting_no_wall_light");
		side_wall_skirting_no_wall_light.scaleX = 0.19573239282698118;
		side_wall_skirting_no_wall_light.scaleY = 0.19573239282698118;
		side_wall_skirting_no_wall_light.angle = -28;
		side_wall_skirting_no_wall_light.visible = false;

		// shelfbird
		const shelfbird = this.physics.add.sprite(1057, 450, "light_wall_shelf");
		shelfbird.scaleX = 0.19216045257298914;
		shelfbird.scaleY = -0.15230182665415037;
		shelfbird.visible = false;
		shelfbird.body.pushable = false;
		shelfbird.body.immovable = true;
		shelfbird.body.setSize(1007, 85, false);

		// skirting_white
		const skirting_white = this.add.tileSprite(1287, -89, 10000, 78, "skirting_light");
		skirting_white.scaleX = 0.4;
		skirting_white.scaleY = 0.18021693427896895;

		// skirting_light
		const skirting_light = this.add.tileSprite(1245, 625, 10000, 63, "skirting_light");
		skirting_light.scaleX = 0.3;
		skirting_light.scaleY = 0.2528690000816929;

		// rug_05
		const rug_05 = this.add.image(1280, 660, "rug_05");
		rug_05.scaleX = 0.22595859407563645;
		rug_05.scaleY = 0.12876715569084285;

		// paint1
		const paint1 = this.physics.add.sprite(3002, 906, "painting_09_dark");
		paint1.scaleX = 0.1656916890789125;
		paint1.scaleY = 0.1656916890789125;
		paint1.body.setSize(635, 437, false);

		// littletable
		const littletable = this.physics.add.sprite(169, 612, "light_table_round");
		littletable.scaleX = 0.5549606181280825;
		littletable.scaleY = 0.5549606181280825;
		littletable.body.setOffset(0, 20);
		littletable.body.setSize(210, 200, false);

		// plant2
		const plant2 = this.physics.add.sprite(1528, 121, "house_plant_example_13");
		plant2.scaleX = 0.10083912764056313;
		plant2.scaleY = 0.10083912764056313;
		plant2.body.gravity.y = 1000;
		plant2.body.bounce.y = 0.3;
		plant2.body.checkCollision.up = false;
		plant2.body.setOffset(100, 0);
		plant2.body.setSize(400, 760, false);

		// sheld1
		const sheld1 = this.physics.add.sprite(974, 148, "dark_wall_shelf");
		sheld1.scaleX = 0.1;
		sheld1.scaleY = 0.14217770933087454;
		sheld1.body.setSize(900, 85, false);

		// paint3
		const paint3 = this.physics.add.sprite(2523, 814, "painting_01_dark");
		paint3.scaleX = 0.13333058100639358;
		paint3.scaleY = 0.13333058100639358;
		paint3.body.setSize(739, 504, false);

		// lighttable
		const lighttable = this.physics.add.sprite(2093, 616, "light_wood_table");
		lighttable.scaleX = 0.14224856477305506;
		lighttable.scaleY = 0.14224856477305506;
		lighttable.body.setOffset(0, 80);
		lighttable.body.setSize(1606, 681, false);

		// aquarium1
		const aquarium1 = new Aquarium(this, 2086, 520);
		this.add.existing(aquarium1);
		aquarium1.scaleX = 1.3057321579972159;
		aquarium1.scaleY = 1.3057321579972159;

		// plant3
		const plant3 = this.physics.add.sprite(2116, 77, "house_plant_example_07");
		plant3.scaleX = 0.07962138116732341;
		plant3.scaleY = 0.07962138116732341;
		plant3.body.gravity.y = 1000;
		plant3.body.bounce.y = 0.3;
		plant3.body.checkCollision.up = false;
		plant3.body.setOffset(100, 0);
		plant3.body.setSize(400, 1099, false);

		// plant1
		const plant1 = this.physics.add.sprite(973, 85, "house_plant_example_07");
		plant1.scaleX = 0.07241105056354416;
		plant1.scaleY = 0.07241105056354416;
		plant1.body.gravity.y = 1000;
		plant1.body.bounce.y = 0.3;
		plant1.body.checkCollision.up = false;
		plant1.body.setOffset(120, 0);
		plant1.body.setSize(400, 1099, false);

		// paint2
		const paint2 = this.physics.add.sprite(2777, 872, "painting_03_light");
		paint2.scaleX = 0.16022385522903515;
		paint2.scaleY = 0.16022385522903515;
		paint2.body.setSize(614, 432, false);

		// sheld4
		const sheld4 = this.physics.add.sprite(1535, 206, "dark_wall_shelf");
		sheld4.scaleX = 0.09214374306752944;
		sheld4.scaleY = 0.14217770933087454;
		sheld4.body.setSize(1007, 85, false);

		// catPlayer
		const catPlayer = new CatPlayer(this, 160, 465);
		this.add.existing(catPlayer);
		catPlayer.body.maxAngular = 2000;
		catPlayer.body.collideWorldBounds = true;

		// sheld3
		const sheld3 = this.physics.add.sprite(2131, 156, "dark_wall_shelf");
		sheld3.scaleX = 0.09214374306752944;
		sheld3.scaleY = 0.14217770933087454;
		sheld3.body.setSize(1007, 85, false);

		// paintstick1
		const paintstick1 = this.physics.add.sprite(1243, 346, "painting_02_gold");
		paintstick1.scaleX = 0.1439217528707446;
		paintstick1.scaleY = 0.1439217528707446;
		paintstick1.body.setSize(363, 428, false);

		// paintstick2
		const paintstick2 = this.physics.add.sprite(1807, 282, "painting_06_gold");
		paintstick2.scaleX = 0.19743895217271196;
		paintstick2.scaleY = 0.19743895217271196;
		paintstick2.body.setSize(263, 320, false);

		// littlecaoch
		const littlecaoch = this.physics.add.sprite(730, 587, "brown_1_seat");
		littlecaoch.scaleX = 0.17367978441096935;
		littlecaoch.scaleY = 0.17367978441096935;
		littlecaoch.body.setSize(1070, 858, false);

		// dogInterior1
		const dogInterior1 = new DogInterior(this, 1285, 555);
		this.add.existing(dogInterior1);
		dogInterior1.scaleX = 0.7996953116660073;
		dogInterior1.scaleY = 0.7996953116660073;

		// shelf
		const shelf = this.physics.add.sprite(974, 156, "shelf");
		shelf.scaleX = 0.4009148996608724;
		shelf.scaleY = 0.2783880794466854;
		shelf.tintTopLeft = 13746462;
		shelf.body.setOffset(0, 20);
		shelf.body.setSize(300, 85, false);

		// shelf_1
		const shelf_1 = this.physics.add.sprite(1532, 213, "shelf");
		shelf_1.scaleX = 0.4338957231311694;
		shelf_1.scaleY = 0.287544098672767;
		shelf_1.tintTopLeft = 13746462;
		shelf_1.body.setOffset(0, 20);
		shelf_1.body.setSize(300, 85, false);

		// shelf_2
		const shelf_2 = this.physics.add.sprite(2125, 164, "shelf");
		shelf_2.scaleX = 0.4338957231311694;
		shelf_2.scaleY = 0.287544098672767;
		shelf_2.tintTopLeft = 13746462;
		shelf_2.body.setOffset(0, 20);
		shelf_2.body.setSize(300, 85, false);

		// broom
		const broom = new Broom(this, 1498, 544);
		this.add.existing(broom);

		// fallpainting1
		const fallpainting1 = new fallpainting(this, 545, 241);
		this.add.existing(fallpainting1);

		// indoorwindow1
		const indoorwindow1 = new IndoorWindow(this, 163, 276);
		this.add.existing(indoorwindow1);
		indoorwindow1.scaleX = 0.8221541225951747;
		indoorwindow1.scaleY = 0.8221541225951747;

		this.red_large_stripe = red_large_stripe;
		this.bottom = bottom;
		this.shelfbird = shelfbird;
		this.paint1 = paint1;
		this.littletable = littletable;
		this.plant2 = plant2;
		this.sheld1 = sheld1;
		this.paint3 = paint3;
		this.lighttable = lighttable;
		this.aquarium1 = aquarium1;
		this.plant3 = plant3;
		this.plant1 = plant1;
		this.paint2 = paint2;
		this.sheld4 = sheld4;
		this.catPlayer = catPlayer;
		this.sheld3 = sheld3;
		this.paintstick1 = paintstick1;
		this.paintstick2 = paintstick2;
		this.littlecaoch = littlecaoch;
		this.dogInterior1 = dogInterior1;
		this.shelf = shelf;
		this.shelf_1 = shelf_1;
		this.shelf_2 = shelf_2;
		this.broom = broom;
		this.fallpainting1 = fallpainting1;
		this.indoorwindow1 = indoorwindow1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	red_large_stripe;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bottom;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfbird;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	littletable;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	sheld1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lighttable;
	/** @type {Aquarium} */
	aquarium1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	sheld4;
	/** @type {CatPlayer} */
	catPlayer;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	sheld3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintstick1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintstick2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	littlecaoch;
	/** @type {DogInterior} */
	dogInterior1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf_2;
	/** @type {Broom} */
	broom;
	/** @type {fallpainting} */
	fallpainting1;
	/** @type {IndoorWindow} */
	indoorwindow1;

	/* START-USER-CODE */

	// Write your code here

	create() {

			this.UpdateGroup=this.add.group();
			this.DirtGroup=this.add.group();

					this.leveltheme=this.sound.add('maintheme');
	this.goaltheme=this.sound.add('missiongoal');
	this.leveltheme.play();

		this.editorCreate();

		this.test();

		this.addCollidersBroom();

		this.CreatePlatform(this.littletable);
		this.CreatePlatform(this.littlecaoch);
		this.CreatePlatform(this.sheld1);
		this.CreatePlatform(this.sheld4);
			//this.CreatePlatform(this.sheld1);
		this.CreatePlatform(this.paint1);
		this.CreatePlatform(this.paint2);
		this.CreatePlatform(this.paint3);

			this.CreatePlatform(this.sheld3);


		this.CreatePlatform(this.aquarium1.ceilaquarium);
		this.physics.add.overlap(this.catPlayer,this.aquarium1.can,this.GoToScene,null,this);

		this.physics.add.overlap(this.catPlayer,this.paintstick1,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintstick2,this.StickToObject,null,this);

		this.physics.add.collider(this.sheld1,this.plant1);
		this.physics.add.collider(this.plant2,this.sheld4);
		this.physics.add.collider(this.plant3,this.sheld3);

		this.physics.add.collider(this.catPlayer,this.plant1,this.push,null,this);
		this.physics.add.collider(this.catPlayer,this.plant2,this.push,null,this);
		this.physics.add.collider(this.catPlayer,this.plant3,this.push,null,this);

		this.physics.add.collider(this.plant1,this.bottom,this.DropAndLeaveMark,null,this);
		this.physics.add.collider(this.plant2,this.bottom,this.DropAndLeaveMark,null,this);
		this.physics.add.collider(this.plant3,this.bottom,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.fallpainting1.block,this.catPlayer,this.MakeObjectImmovabke,null,this);
		this.physics.add.collider(this.fallpainting1,this.bottom,this.DropAndLeaveMark,null,this);

			this.physics.add.overlap(this.catPlayer,this.dogInterior1.dog,this.GetHit,null,this);

			this.physics.add.overlap(this.catPlayer,this.indoorwindow1.waythrough,this.JumpOut,null,this);


this.broom.depth=1000;
		this.cameras.main.setZoom(0.73);
		this.physics.world.setBounds(0, -1600,2400, 3000);
		this.cameras.main.setBounds(0,-2900,2400, 3600);
this.cameras.main.startFollow(this.catPlayer,false,0.2,0);
this.physics.add.overlap(this.broom,this.DirtGroup,this.StopBroom,null,this);
	}

		GoToScene(Cat,Player){
	console.log("start new scene");
	this.scene.start("Mission2UnderWater3");


	};

	update(){

			this.DropDownWhenjumpCatonObject(this.paint1);
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
