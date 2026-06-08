
// You can write more code here

/* START OF COMPILED CODE */

class Mission2FishBowl4 extends BaseScene {

	constructor() {
		super("Mission2FishBowl4");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// green
		const green = this.add.image(1227, 689, "pink_plain");
		green.scaleX = 25;
		green.scaleY = 0.10948925414161105;
		green.tintTopLeft = 16711422;
		green.tintBottomLeft = 3091757;
		green.tintBottomRight = 2037527;

		// red_large_stripe
		const red_large_stripe = this.add.tileSprite(1200, 262, 5000, 1382, "pink_large_stripe");
		red_large_stripe.scaleX = 0.564207920481931;
		red_large_stripe.scaleY = 0.5129131469424957;
		red_large_stripe.tintTopLeft = 3879217;
		red_large_stripe.tintTopRight = 4666420;
		red_large_stripe.tileScaleX = 0.2;
		red_large_stripe.tileScaleY = 0.5;

		// bottom
		const bottom = this.physics.add.sprite(765, 650, "block_separator_01");
		bottom.scaleX = 5.504107162267043;
		bottom.scaleY = -0.716376328720798;
		bottom.visible = false;
		bottom.body.pushable = false;
		bottom.body.immovable = true;
		bottom.body.setSize(695, 40, false);

		// planter2
		const planter2 = this.physics.add.sprite(1443, 186, "planter_01");
		planter2.scaleX = 0.5835072257155557;
		planter2.scaleY = 0.5835072257155557;
		planter2.body.gravity.y = 1000;
		planter2.body.bounce.y = 0.3;
		planter2.body.checkCollision.up = false;
		planter2.body.setSize(75, 125, false);

		// shelfbird
		const shelfbird = this.physics.add.sprite(517, 445, "light_wall_shelf");
		shelfbird.scaleX = 0.19216045257298914;
		shelfbird.scaleY = -0.15230182665415037;
		shelfbird.visible = false;
		shelfbird.body.pushable = false;
		shelfbird.body.immovable = true;
		shelfbird.body.setSize(1007, 85, false);

		// ceiling
		const ceiling = this.physics.add.sprite(750, -58, "skirting_light");
		ceiling.scaleX = 22;
		ceiling.scaleY = 0.12;
		ceiling.body.pushable = false;
		ceiling.body.immovable = true;
		ceiling.body.setSize(383, 65, false);

		// skirting_light
		const skirting_light = this.add.tileSprite(705, 620, 35000, 63, "skirting_light");
		skirting_light.scaleX = 0.2528690000816929;
		skirting_light.scaleY = 0.2528690000816929;

		// rug_05
		const rug_05 = this.add.image(772, 662, "rug_05");
		rug_05.scaleX = 0.22595859407563645;
		rug_05.scaleY = 0.12876715569084285;

		// red_large_stripe_1
		const red_large_stripe_1 = this.add.image(296, -115, "pink_plain");
		red_large_stripe_1.scaleX = -0.8191517745863153;
		red_large_stripe_1.scaleY = 4.184809639855473;
		red_large_stripe_1.angle = 90;
		red_large_stripe_1.tintTopLeft = 5000268;
		red_large_stripe_1.tintBottomLeft = 5657684;

		// littletable
		const littletable = this.physics.add.sprite(199, 607, "light_table_round");
		littletable.scaleX = 0.5549606181280825;
		littletable.scaleY = 0.5549606181280825;
		littletable.body.setOffset(0, 20);
		littletable.body.setSize(210, 200, false);

		// sheld10
		const sheld10 = this.physics.add.sprite(1447, 228, "dark_wall_shelf");
		sheld10.scaleX = 0.09214374306752944;
		sheld10.scaleY = 0.11;
		sheld10.visible = false;
		sheld10.body.setSize(1007, 85, false);

		// planter1
		const planter1 = this.physics.add.sprite(627, 243, "planter_01");
		planter1.scaleX = 0.5835072257155557;
		planter1.scaleY = 0.5835072257155557;
		planter1.body.gravity.y = 1000;
		planter1.body.bounce.y = 0.3;
		planter1.body.checkCollision.up = false;
		planter1.body.setSize(75, 125, false);

		// sheld4
		const sheld4 = this.physics.add.sprite(636, 286, "dark_wall_shelf");
		sheld4.scaleX = 0.09214374306752944;
		sheld4.scaleY = 0.11;
		sheld4.visible = false;
		sheld4.body.setSize(1007, 85, false);

		// sheld1
		const sheld1 = this.physics.add.sprite(2257, 112, "dark_wall_shelf");
		sheld1.scaleX = 0.12;
		sheld1.scaleY = 0.17;
		sheld1.visible = false;
		sheld1.body.setSize(1007, 85, false);

		// coachy
		const coachy = this.physics.add.sprite(1438, 576, "brown_1_seat");
		coachy.scaleX = 0.17367978441096935;
		coachy.scaleY = 0.17367978441096935;
		coachy.body.setOffset(350, 0);
		coachy.body.setSize(500, 858, false);

		// bookshelve
		const bookshelve = this.physics.add.sprite(1089, 514, "light_5_shelves");
		bookshelve.scaleX = 0.23147463654580747;
		bookshelve.scaleY = 0.23147463654580747;
		bookshelve.body.setSize(676, 1109, false);

		// dogInterior1
		const dogInterior1 = new DogInterior(this, 777, 535);
		this.add.existing(dogInterior1);
		dogInterior1.scaleX = 0.9263418715428249;
		dogInterior1.scaleY = 0.9263418715428249;

		// lamp_21
		const lamp_21 = this.add.image(829, -23, "lamp_21");
		lamp_21.scaleX = 0.23184315713752807;
		lamp_21.scaleY = 0.23184315713752807;

		// ellipse_6
		const ellipse_6 = this.add.ellipse(829, -83, 128, 128);
		ellipse_6.scaleX = 0.3916825343304212;
		ellipse_6.scaleY = 0.07463723645206587;
		ellipse_6.alpha = 0.4;
		ellipse_6.isFilled = true;
		ellipse_6.fillColor = 657673;

		// drawer
		const drawer = this.physics.add.sprite(1995, 560, "dark_five_draw");
		drawer.scaleX = 0.26344376543732057;
		drawer.scaleY = 0.26344376543732057;
		drawer.body.setSize(677, 610, false);

		// aquarium1
		const aquarium1 = new Aquarium(this, 1996, 423);
		this.add.existing(aquarium1);
		aquarium1.scaleX = 1.2999836594160086;
		aquarium1.scaleY = 1.2999836594160086;

		// fallpainting1
		const fallpainting1 = new fallpainting(this, 1697, 288);
		this.add.existing(fallpainting1);

		// planter3
		const planter3 = this.physics.add.sprite(2252, 60, "house_plant_example_13");
		planter3.scaleX = 0.11164624583557965;
		planter3.scaleY = 0.11164624583557965;
		planter3.body.gravity.y = 1000;
		planter3.body.bounce.y = 0.3;
		planter3.body.checkCollision.up = false;
		planter3.body.setSize(691, 760, false);

		// shelf
		const shelf = this.physics.add.sprite(631, 296, "shelf");
		shelf.scaleX = 0.39242656855214236;
		shelf.scaleY = 0.2890376829521746;
		shelf.tintTopLeft = 13746462;
		shelf.body.setOffset(0, 20);
		shelf.body.setSize(300, 85, false);

		// shelf_1
		const shelf_1 = this.physics.add.sprite(1442, 236, "shelf");
		shelf_1.scaleX = 0.39242656855214236;
		shelf_1.scaleY = 0.2890376829521746;
		shelf_1.tintTopLeft = 13746462;
		shelf_1.body.setOffset(0, 20);
		shelf_1.body.setSize(300, 85, false);

		// shelf_2
		const shelf_2 = this.physics.add.sprite(2259, 122, "shelf");
		shelf_2.scaleX = 0.461807891116832;
		shelf_2.scaleY = 0.33134517674962705;
		shelf_2.tintTopLeft = 13746462;
		shelf_2.body.setOffset(0, 20);
		shelf_2.body.setSize(300, 85, false);

		// broom
		const broom = new Broom(this, 1771, 567);
		this.add.existing(broom);

		// paintinglast
		const paintinglast = this.physics.add.sprite(1954, 155, "painting_08_light");
		paintinglast.scaleX = 0.14799256727512844;
		paintinglast.scaleY = 0.14799256727512844;
		paintinglast.body.setSize(454, 437, false);

		// fallpainting2
		const fallpainting2 = new fallpainting(this, 926, 242);
		this.add.existing(fallpainting2);

		// fallpainting3
		const fallpainting3 = new fallpainting(this, 418, 359);
		this.add.existing(fallpainting3);

		// catPlayer
		const catPlayer = new CatPlayer(this, 199, 491);
		this.add.existing(catPlayer);
		catPlayer.body.maxAngular = 2000;
		catPlayer.body.collideWorldBounds = true;
		catPlayer.body.onWorldBounds = true;

		// rectangle
		const rectangle = this.add.rectangle(1208, 297, 128, 128);
		rectangle.scaleX = 22.21182524675878;
		rectangle.scaleY = 7.859129421412868;
		rectangle.visible = false;
		rectangle.alpha = 0.1;
		rectangle.isFilled = true;
		rectangle.fillColor = 10699175;

		// saturateFx
		const saturateFx = rectangle.postFX.addColorMatrix();
		saturateFx.saturate(1);

		// paintinglamp
		const paintinglamp = this.physics.add.sprite(829, 18, "painting_08_light");
		paintinglamp.scaleX = 0.14799256727512844;
		paintinglamp.scaleY = 0.14799256727512844;
		paintinglamp.visible = false;
		paintinglamp.body.setSize(454, 437, false);

		// indoorwindow1
		const indoorwindow1 = new IndoorWindow(this, 207, 258);
		this.add.existing(indoorwindow1);
		indoorwindow1.scaleX = 0.8221541225951747;
		indoorwindow1.scaleY = 0.8221541225951747;

		this.red_large_stripe = red_large_stripe;
		this.bottom = bottom;
		this.planter2 = planter2;
		this.shelfbird = shelfbird;
		this.ceiling = ceiling;
		this.littletable = littletable;
		this.sheld10 = sheld10;
		this.planter1 = planter1;
		this.sheld4 = sheld4;
		this.sheld1 = sheld1;
		this.coachy = coachy;
		this.bookshelve = bookshelve;
		this.dogInterior1 = dogInterior1;
		this.drawer = drawer;
		this.aquarium1 = aquarium1;
		this.fallpainting1 = fallpainting1;
		this.planter3 = planter3;
		this.shelf = shelf;
		this.shelf_1 = shelf_1;
		this.shelf_2 = shelf_2;
		this.broom = broom;
		this.paintinglast = paintinglast;
		this.fallpainting2 = fallpainting2;
		this.fallpainting3 = fallpainting3;
		this.catPlayer = catPlayer;
		this.paintinglamp = paintinglamp;
		this.indoorwindow1 = indoorwindow1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	red_large_stripe;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bottom;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	planter2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelfbird;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	ceiling;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	littletable;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	sheld10;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	planter1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	sheld4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	sheld1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	coachy;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bookshelve;
	/** @type {DogInterior} */
	dogInterior1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	drawer;
	/** @type {Aquarium} */
	aquarium1;
	/** @type {fallpainting} */
	fallpainting1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	planter3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf_2;
	/** @type {Broom} */
	broom;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintinglast;
	/** @type {fallpainting} */
	fallpainting2;
	/** @type {fallpainting} */
	fallpainting3;
	/** @type {CatPlayer} */
	catPlayer;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paintinglamp;
	/** @type {IndoorWindow} */
	indoorwindow1;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.UpdateGroup=this.add.group();
		this.DirtGroup=this.add.group();

		this.editorCreate();

	this.leveltheme=this.sound.add('maintheme');
	this.goaltheme=this.sound.add('missiongoal');
	this.leveltheme.play();

		this.cameras.main.setZoom(0.72);
		this.physics.world.setBounds(0, -1600,2400, 3000);
		this.cameras.main.setBounds(0,-2900,2400, 3600);
		this.cameras.main.startFollow(this.catPlayer,false,0.2,0);


		this.test();
		this.AddingRatsStuff();
		this.addCollidersBroom();

		this.broom.depth=101;
		this.dogInterior1.depth=102;

		this.CreatePlatform(this.bookshelve);
		this.CreatePlatform(this.sheld1);
		this.CreatePlatform(this.sheld10);
		this.CreatePlatform(this.sheld4);

		this.CreatePlatform(this.coachy);
		this.CreatePlatform(this.drawer);

		this.CreatePlatform(this.littletable);

		this.physics.add.overlap(this.catPlayer,this.aquarium1.can,this.GoToScene,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintinglast,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paintinglamp,this.StickToObject,null,this);

		this.physics.add.collider(this.sheld4,this.planter1);
		this.physics.add.collider(this.catPlayer,this.planter1,this.push,null,this);
		this.physics.add.collider(this.planter1,this.bottom,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.sheld10,this.planter2);
		this.physics.add.collider(this.catPlayer,this.planter2,this.push,null,this);
		this.physics.add.collider(this.planter2,this.bottom,this.DropAndLeaveMark,null,this);

				this.physics.add.collider(this.sheld1,this.planter3);
		this.physics.add.collider(this.catPlayer,this.planter3,this.push,null,this);
		this.physics.add.collider(this.planter3,this.bottom,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.fallpainting1.block,this.catPlayer,this.MakeObjectImmovabke,null,this);
		this.physics.add.collider(this.fallpainting1,this.bottom,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.fallpainting2.block,this.catPlayer,this.MakeObjectImmovabke,null,this);
		this.physics.add.collider(this.fallpainting2,this.bottom,this.DropAndLeaveMark,null,this);

		this.physics.add.collider(this.fallpainting3.block,this.catPlayer,this.MakeObjectImmovabke,null,this);
		this.physics.add.collider(this.fallpainting3,this.bottom,this.DropAndLeaveMark,null,this);
			this.physics.add.overlap(this.broom,this.DirtGroup,this.StopBroom,null,this);
			this.physics.add.overlap(this.catPlayer,this.dogInterior1.dog,this.GetHit,null,this);
			this.physics.add.overlap(this.catPlayer,this.indoorwindow1.waythrough,this.JumpOut,null,this);

		this.fallpainting2.painting.setTexture('painting_01_light');
	}


	GoToScene(Cat,Player){
	console.log("start new scene");
	this.scene.start("Mission2Underwater4");


	};


	update(){

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
