
// You can write more code here

/* START OF COMPILED CODE */

class Mission2FishBowl extends BaseScene {

	constructor() {
		super("Mission2FishBowl");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// green
		const green = this.physics.add.image(917, 657, "green");
		green.scaleX = 7.308572865117123;
		green.scaleY = 0.14404780416835078;
		green.tintBottomLeft = 7432810;
		green.tintBottomRight = 5592405;
		green.body.setSize(437, 1232, false);

		// red_large_stripe
		const red_large_stripe = this.add.tileSprite(655, 241, 10000, 1382, "lime_green_large_stripe");
		red_large_stripe.scaleX = 0.2;
		red_large_stripe.scaleY = 0.5372460006952993;
		red_large_stripe.tintTopLeft = 4802889;
		red_large_stripe.tintTopRight = 5197647;
		red_large_stripe.tileScaleX = 0.6;

		// bottom
		const bottom = this.physics.add.sprite(1218, 647, "block_separator_01");
		bottom.scaleX = 5.504107162267043;
		bottom.scaleY = -0.716376328720798;
		bottom.visible = false;
		bottom.body.pushable = false;
		bottom.body.immovable = true;
		bottom.body.setSize(695, 40, false);

		// shelfbird
		const shelfbird = this.physics.add.sprite(1107, 436, "light_wall_shelf");
		shelfbird.scaleX = 0.19216045257298914;
		shelfbird.scaleY = -0.15230182665415037;
		shelfbird.visible = false;
		shelfbird.body.pushable = false;
		shelfbird.body.immovable = true;
		shelfbird.body.setSize(1007, 85, false);

		// skirting_white
		const skirting_white = this.add.tileSprite(500, -106, 10000, 78, "skirting_light");
		skirting_white.scaleX = 0.25;
		skirting_white.scaleY = 0.18021693427896895;

		// skirting_light
		const skirting_light = this.add.tileSprite(600, 611, 10000, 63, "skirting_light");
		skirting_light.scaleX = 0.25;
		skirting_light.scaleY = 0.2528690000816929;

		// lighttable
		const lighttable = this.physics.add.sprite(1116, 604, "light_wood_table");
		lighttable.scaleX = 0.17568632376491572;
		lighttable.scaleY = 0.17568632376491572;
		lighttable.body.setOffset(0, 80);
		lighttable.body.setSize(1606, 681, false);

		// windowout
		const windowout = new IndoorWindow(this, 217, 268);
		this.add.existing(windowout);

		// aquarium
		const aquarium = new Aquarium(this, 1109, 493);
		this.add.existing(aquarium);
		aquarium.scaleX = 1.3524382756011215;
		aquarium.scaleY = 1.3524382756011215;

		// rug_05
		const rug_05 = this.add.image(680, 653, "rug_05");
		rug_05.scaleX = 0.22595859407563645;
		rug_05.scaleY = 0.12876715569084285;

		// littletable
		const littletable = this.physics.add.sprite(219, 606, "light_table_round");
		littletable.scaleX = 0.5549606181280825;
		littletable.scaleY = 0.5549606181280825;
		littletable.body.setOffset(0, 20);
		littletable.body.setSize(210, 200, false);

		// catPlayer
		const catPlayer = new CatPlayer(this, 216, 475);
		this.add.existing(catPlayer);
		catPlayer.scaleX = 0.1566678798725213;
		catPlayer.scaleY = 0.1566678798725213;
		catPlayer.body.maxAngular = 2000;
		catPlayer.body.collideWorldBounds = true;
		catPlayer.body.setOffset(130, 50);
		catPlayer.body.setSize(340, 460, false);

		// broom
		const broom = new Broom(this, 1189, 512);
		this.add.existing(broom);

		// sheld1
		const sheld1 = this.physics.add.sprite(694, 172, "dark_wall_shelf");
		sheld1.scaleX = 0.09344382966873192;
		sheld1.scaleY = 0.09344382966873192;
		sheld1.body.pushable = false;
		sheld1.body.immovable = true;
		sheld1.body.setSize(1007, 85, false);

		// planter
		const planter = this.physics.add.sprite(699, 113, "planter_01");
		planter.scaleX = 0.5835072257155557;
		planter.scaleY = 0.5835072257155557;
		planter.body.gravity.y = 1000;
		planter.body.bounce.y = 0.3;
		planter.body.checkCollision.up = false;
		planter.body.setSize(75, 125, false);

		// paint1
		const paint1 = new fallpainting(this, 507, 330);
		this.add.existing(paint1);

		// paint2
		const paint2 = new fallpainting(this, 936, 228);
		this.add.existing(paint2);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(616, 315, 128, 128);
		rectangle_2.scaleX = 18.151334254837046;
		rectangle_2.scaleY = 7.52701923327568;
		rectangle_2.alpha = 0.2;
		rectangle_2.isFilled = true;
		rectangle_2.fillColor = 2204978;

		this.red_large_stripe = red_large_stripe;
		this.bottom = bottom;
		this.shelfbird = shelfbird;
		this.lighttable = lighttable;
		this.windowout = windowout;
		this.aquarium = aquarium;
		this.littletable = littletable;
		this.catPlayer = catPlayer;
		this.broom = broom;
		this.sheld1 = sheld1;
		this.planter = planter;
		this.paint1 = paint1;
		this.paint2 = paint2;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	red_large_stripe;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bottom;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfbird;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	lighttable;
	/** @type {IndoorWindow} */
	windowout;
	/** @type {Aquarium} */
	aquarium;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	littletable;
	/** @type {CatPlayer} */
	catPlayer;
	/** @type {Broom} */
	broom;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	sheld1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	planter;
	/** @type {fallpainting} */
	paint1;
	/** @type {fallpainting} */
	paint2;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.physics.world.setBounds(0, -1600,1400, 3000);
		this.cameras.main.setBounds(0,-2900,1400, 3600);
		this.UpdateGroup=this.add.group();

		this.DirtGroup=this.add.group();

		this.editorCreate();
		this.test();

this.broom.depth=90;

		this.levelheme=this.sound.add('maintheme');
		this.goaltheme=this.sound.add('missiongoal');
		this.levelheme.play();


		this.windowout.mission="Level";
this.planter.info="Nada";
this.paint1.info="Nada";
this.paint2.info="Nada";
		this.cameras.main.startFollow(this.catPlayer,false,500,0);

		//	this.physics.add.collider(this.catPlayer,this.bottom);


			this.cameras.main.setZoom(0.72);
			this.CreatePlatform(this.littletable);
		this.CreatePlatform(this.lighttable);
		//		this.CreatePlatform(this.rectangle);
		this.CreatePlatform(this.aquarium);
		this.CreatePlatform(this.shelfbird);
		//	this.CreatePlatform(this.shelffish);


	this.physics.add.overlap(this.catPlayer,this.aquarium.can,this.GoToScene,null,this);
	this.physics.add.overlap(this.catPlayer,this.windowout.waythrough,this.JumpOut,null,this);


				//this.physics.add.collider(this.planter,this.bottom,this.breakeagainstfloor,null,this);


	this.physics.add.overlap(this.broom,this.DirtGroup,this.StopBroom,null,this);

		this.physics.add.collider(this.catPlayer,this.planter,this.push,null,this);
		this.physics.add.collider(this.sheld1,this.planter);
		this.physics.add.collider(this.planter,this.bottom,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.paint1.block,this.catPlayer,this.MakeObjectImmovabke,null,this);
		this.physics.add.collider(this.paint1,this.bottom,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.paint2.block,this.catPlayer,this.MakeObjectImmovabke,null,this);
		this.physics.add.collider(this.paint2,this.bottom,this.DropAndLeaveMark,null,this);

	this.addCollidersBroom();

			this.paint1.painting.setTexture("painting_01_light");

		this.CreatePlatform(this.sheld1);


	}


		JumpOut(cat,window){
			if(window.WindowOpen){
		this.scene.stop();
		this.game.sound.stopAll();
		this.scene.start("Level");
		StartPosX=632;
		StartPosY=-70;
			};
	}


	GoToScene(Cat,Player){

	console.log("start new scene");
	this.scene.start("Mission2Underwater");


	};

	update(){

			this.DropDownWhenjumpCatonObject(this.paint1);
			this.DropDownWhenjumpCatonObject(this.paint2);

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
