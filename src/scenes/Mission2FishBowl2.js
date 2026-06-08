
// You can write more code here

/* START OF COMPILED CODE */

class Mission2FishBowl2 extends BaseScene {

	constructor() {
		super("Mission2FishBowl2");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// red_large_stripe_1
		const red_large_stripe_1 = this.add.image(910, -85, "red_plain");
		red_large_stripe_1.scaleX = -0.8191517745863153;
		red_large_stripe_1.scaleY = 4.184809639855473;
		red_large_stripe_1.angle = 90;
		red_large_stripe_1.tintTopLeft = 8419962;
		red_large_stripe_1.tintTopRight = 8420219;
		red_large_stripe_1.tintBottomLeft = 7895160;
		red_large_stripe_1.tintBottomRight = 7038052;

		// green
		const green = this.add.nineslice(1236, 656, "red_plain", undefined, 600, 2613, 10, 10, 416, 240);
		green.scaleX = 7.308572865117123;
		green.scaleY = 0.08644173953713145;
		green.tint = 15197155;

		// red_large_stripe
		const red_large_stripe = this.add.tileSprite(1041, 244, 37000, 1382, "red_large_stripe");
		red_large_stripe.scaleX = 0.1281025380134249;
		red_large_stripe.scaleY = 0.5193019965495469;
		red_large_stripe.tintTopLeft = 4538689;
		red_large_stripe.tintTopRight = 4144959;

		// bottom
		const bottom = this.physics.add.sprite(815, 645, "block_separator_01");
		bottom.scaleX = 5.504107162267043;
		bottom.scaleY = -0.716376328720798;
		bottom.visible = false;
		bottom.body.pushable = false;
		bottom.body.immovable = true;
		bottom.body.setSize(695, 40, false);

		// side_wall_skirting_no_wall_light
		const side_wall_skirting_no_wall_light = this.add.image(2729, -38, "side_wall_skirting_no_wall_light");
		side_wall_skirting_no_wall_light.scaleX = 0.19573239282698118;
		side_wall_skirting_no_wall_light.scaleY = 0.19573239282698118;
		side_wall_skirting_no_wall_light.angle = -28;
		side_wall_skirting_no_wall_light.visible = false;

		// skirting_white_1
		const skirting_white_1 = this.add.tileSprite(3334, 70, 3000, 78, "skirting_light");
		skirting_white_1.scaleX = 0.17994244294040715;
		skirting_white_1.scaleY = 0.17994244294040715;
		skirting_white_1.angle = 10;

		// lamp_21
		const lamp_21 = this.add.image(753, -42, "lamp_21");
		lamp_21.scaleX = 0.2527822554099052;
		lamp_21.scaleY = 0.2527822554099052;

		// shelfbird
		const shelfbird = this.physics.add.sprite(212, 110, "light_wall_shelf");
		shelfbird.scaleX = 0.12017115331935263;
		shelfbird.scaleY = 0.13164580036354856;
		shelfbird.body.pushable = false;
		shelfbird.body.immovable = true;
		shelfbird.body.setSize(1007, 85, false);

		// skirting_white
		const skirting_white = this.add.tileSprite(1392, -101, 35000, 78, "skirting_light");
		skirting_white.scaleX = 0.18021693427896895;
		skirting_white.scaleY = 0.18021693427896895;

		// skirting_light
		const skirting_light = this.add.tileSprite(1348, 609, 35000, 63, "skirting_light");
		skirting_light.scaleX = 0.2528690000816929;
		skirting_light.scaleY = 0.2528690000816929;

		// rug_05
		const rug_05 = this.add.image(663, 653, "rug_05");
		rug_05.scaleX = 0.22595859407563645;
		rug_05.scaleY = 0.12876715569084285;

		// littletable
		const littletable = this.physics.add.sprite(193, 613, "light_table_round");
		littletable.scaleX = 0.5549606181280825;
		littletable.scaleY = 0.5549606181280825;
		littletable.body.setOffset(0, 20);
		littletable.body.setSize(210, 200, false);

		// sheld1
		const sheld1 = this.physics.add.sprite(1002, 106, "dark_wall_shelf");
		sheld1.scaleX = 0.11361626026491173;
		sheld1.scaleY = 0.13654655556878456;
		sheld1.body.setSize(1007, 85, false);

		// wardrobe
		const wardrobe = this.physics.add.sprite(1232, 519, "dark_5_shelves");
		wardrobe.scaleX = 0.22682595825611238;
		wardrobe.scaleY = 0.22682595825611238;
		wardrobe.body.setSize(676, 1109, false);

		// broom
		const broom = new Broom(this, 1115, 554);
		this.add.existing(broom);

		// plant1
		const plant1 = this.physics.add.sprite(212, 64, "house_plant_example_07");
		plant1.scaleX = 0.06417326126162727;
		plant1.scaleY = 0.06417326126162727;
		plant1.body.gravity.y = 1000;
		plant1.body.bounce.y = 0.3;
		plant1.body.checkCollision.up = false;
		plant1.body.setSize(400, 1099, false);

		// plant2
		const plant2 = this.physics.add.sprite(997, 57, "house_plant_example_02");
		plant2.scaleX = 0.06906310111065361;
		plant2.scaleY = 0.06906310111065361;
		plant2.body.gravity.y = 1000;
		plant2.body.bounce.y = 0.3;
		plant2.body.checkCollision.up = false;
		plant2.body.setSize(340, 1131, false);

		// aquarium1
		const aquarium1 = new Aquarium(this, 1231, 346);
		this.add.existing(aquarium1);
		aquarium1.scaleX = 1.1270408085988943;
		aquarium1.scaleY = 1.1270408085988943;

		// catPlayer
		const catPlayer = new CatPlayer(this, 143, 481);
		this.add.existing(catPlayer);
		catPlayer.body.maxAngular = 3000;
		catPlayer.body.collideWorldBounds = true;

		// fallpainting1
		const fallpainting1 = new fallpainting(this, 660, 359);
		this.add.existing(fallpainting1);
		fallpainting1.scaleX = 1.0504968603869018;
		fallpainting1.scaleY = 1.0504968603869018;

		// paint1
		const paint1 = this.physics.add.sprite(873, 261, "painting_05_gold");
		paint1.scaleX = 0.1967513749987968;
		paint1.scaleY = 0.1967513749987968;
		paint1.alpha = 0.9;
		paint1.alphaTopLeft = 0.9;
		paint1.alphaTopRight = 0.9;
		paint1.alphaBottomLeft = 0.9;
		paint1.alphaBottomRight = 0.9;
		paint1.body.setSize(263, 320, false);

		// paint2
		const paint2 = this.physics.add.sprite(472, 201, "painting_07_dark");
		paint2.scaleX = 0.19124682230305967;
		paint2.scaleY = 0.19124682230305967;
		paint2.body.setSize(263, 320, false);

		// windowout1
		const windowout1 = new IndoorWindow(this, 195, 260);
		this.add.existing(windowout1);
		windowout1.scaleX = 0.8251463179983998;
		windowout1.scaleY = 0.8251463179983998;

		this.red_large_stripe = red_large_stripe;
		this.bottom = bottom;
		this.shelfbird = shelfbird;
		this.littletable = littletable;
		this.sheld1 = sheld1;
		this.wardrobe = wardrobe;
		this.broom = broom;
		this.plant1 = plant1;
		this.plant2 = plant2;
		this.aquarium1 = aquarium1;
		this.catPlayer = catPlayer;
		this.fallpainting1 = fallpainting1;
		this.paint1 = paint1;
		this.paint2 = paint2;
		this.windowout1 = windowout1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	red_large_stripe;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bottom;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfbird;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	littletable;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	sheld1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	wardrobe;
	/** @type {Broom} */
	broom;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant2;
	/** @type {Aquarium} */
	aquarium1;
	/** @type {CatPlayer} */
	catPlayer;
	/** @type {fallpainting} */
	fallpainting1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint2;
	/** @type {IndoorWindow} */
	windowout1;

	/* START-USER-CODE */

	// Write your code here

	create() {


		this.UpdateGroup=this.add.group();
		this.DirtGroup=this.add.group();

		this.leveltheme=this.sound.add('maintheme');
this.leveltheme.play();


		this.editorCreate();
StartPosX=2093;
	StartPosY=386;

		this.test();

		this.cameras.main.setZoom(0.72);
		this.physics.world.setBounds(0, -1600,1400, 3000);
		this.cameras.main.setBounds(0,-2900,1400, 3600);

		this.addCollidersBroom();

		this.cameras.main.startFollow(this.catPlayer,false,500,0);
		this.broom.depth=90;


		this.CreatePlatform(this.littletable);
	//	this.CreatePlatform(this.lighttable);
		//this.CreatePlatform(this.paint1);
		//this.CreatePlatform(this.paint2);
		this.CreatePlatform(this.sheld1);
				this.CreatePlatform(this.shelfbird);
		this.CreatePlatform(this.aquarium1.ceilaquarium);
				this.CreatePlatform(this.wardrobe);



		this.aquarium1.body.setSize(1500,200);
		this.physics.add.overlap(this.catPlayer,this.aquarium1.can,this.GoToScene,null,this);

		this.physics.add.collider(this.fallpainting1.block,this.catPlayer,this.MakeObjectImmovabke,null,this);
		this.physics.add.collider(this.fallpainting1,this.bottom,this.DropAndLeaveMark,null,this);
			this.physics.add.overlap(this.broom,this.DirtGroup,this.StopBroom,null,this);
			this.physics.add.overlap(this.catPlayer,this.paint1,this.StickToObject,null,this);
			this.physics.add.overlap(this.catPlayer,this.paint2,this.StickToObject,null,this);
	this.physics.add.collider(this.shelfbird,this.plant1);
	this.physics.add.collider(this.sheld1,this.plant2);

		this.physics.add.collider(this.catPlayer,this.plant1,this.push,null,this);
		this.physics.add.collider(this.plant1,this.bottom,this.DropAndLeaveMark,null,this);

			this.physics.add.collider(this.catPlayer,this.plant2,this.push,null,this);
		this.physics.add.collider(this.plant2,this.bottom,this.DropAndLeaveMark,null,this);

				this.physics.add.overlap(this.catPlayer,this.windowout1.waythrough,this.JumpOut,null,this);



	}

	GoToScene(Cat,Player){
	console.log("start new scene");
	this.scene.start("Mission2UnderWater2");


	};

	update(){

		this.UpdateGroup.children.iterate(function(child){

if(child){

	child.update();

};

  });

		//this.DropDownWhenjumpCatonObject(this.paint1);
			//this.DropDownWhenjumpCatonObject(this.paint2);

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
