
// You can write more code here

/* START OF COMPILED CODE */

class UpLevel1Spider extends BaseScene {

	constructor() {
		super("UpLevel1Spider");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// red_large_stripe
		const red_large_stripe = this.add.tileSprite(656, 284, 10000, 1382, "red_large_stripe");
		red_large_stripe.scaleX = 0.17;
		red_large_stripe.scaleY = 0.5078962986638802;
		red_large_stripe.tintTopLeft = 2630949;
		red_large_stripe.tintTopRight = 3683894;
		red_large_stripe.tileScaleX = 0.6;

		// green
		const green = this.add.image(731, 664, "red_plain");
		green.scaleX = 15.856115599562646;
		green.scaleY = 0.054575335256016655;
		green.flipY = true;
		green.tintTopLeft = 15000804;
		green.tintTopRight = 13750223;
		green.tintBottomLeft = 4011831;
		green.tintBottomRight = 4406074;

		// skirting_light
		const skirting_light = this.add.tileSprite(452, 631, 15000, 63, "skirting_light");
		skirting_light.scaleX = 0.2528690000816929;
		skirting_light.scaleY = 0.2528690000816929;

		// green_1
		const green_1 = this.add.image(795, -109, "red_plain");
		green_1.scaleX = 15.856115599562646;
		green_1.scaleY = 0.054575335256016516;
		green_1.tintTopLeft = 9670286;
		green_1.tintTopRight = 11774634;
		green_1.tintBottomLeft = 2696228;
		green_1.tintBottomRight = 2236447;

		// skirting_white
		const skirting_white = this.add.tileSprite(480, -410, 20000, 78, "skirting_light");
		skirting_white.scaleX = 0.18021693427896895;
		skirting_white.scaleY = 0.18021693427896895;

		// bottom
		const bottom = this.physics.add.sprite(669, 690, "block_separator_01");
		bottom.scaleX = 5.504107162267043;
		bottom.scaleY = 1.250533984076435;
		bottom.visible = false;
		bottom.body.pushable = false;
		bottom.body.immovable = true;
		bottom.body.setSize(695, 40, false);

		// painting1
		const painting1 = this.physics.add.sprite(422, 240, "painting_06_gold");
		painting1.scaleX = 0.1922307172992766;
		painting1.scaleY = 0.1922307172992766;
		painting1.alpha = 0.9;
		painting1.alphaTopLeft = 0.9;
		painting1.alphaTopRight = 0.9;
		painting1.alphaBottomLeft = 0.9;
		painting1.alphaBottomRight = 0.9;
		painting1.body.checkCollision.down = false;
		painting1.body.pushable = false;
		painting1.body.immovable = true;
		painting1.body.setSize(263, 320, false);

		// littletable
		const littletable = this.physics.add.sprite(134, 619, "light_table_round");
		littletable.scaleX = 0.4106111942992562;
		littletable.scaleY = 0.4106111942992562;
		littletable.body.setOffset(0, 20);
		littletable.body.setSize(210, 200, false);

		// side_wall_skirting_no_wall_light
		const side_wall_skirting_no_wall_light = this.add.image(2133, -72, "side_wall_skirting_no_wall_light");
		side_wall_skirting_no_wall_light.scaleX = 0.19573239282698118;
		side_wall_skirting_no_wall_light.scaleY = 0.19573239282698118;
		side_wall_skirting_no_wall_light.angle = -28;
		side_wall_skirting_no_wall_light.visible = false;

		// cheese2
		const cheese2 = this.physics.add.sprite(1579, 173, "flowersbush");
		cheese2.scaleX = 0.09814298217438955;
		cheese2.scaleY = 0.09814298217438955;
		cheese2.body.setSize(207, 186, false);

		// shelf2
		const shelf2 = this.physics.add.sprite(135, 131, "light_wall_shelf");
		shelf2.scaleX = 0.1;
		shelf2.scaleY = 0.1250780691733577;
		shelf2.visible = false;
		shelf2.body.setSize(1007, 85, false);

		// table
		const table = this.physics.add.sprite(1148, 626, "light_table_small");
		table.scaleX = 0.1688522786885719;
		table.scaleY = 0.1688522786885719;
		table.body.setSize(376, 369, false);

		// windowout
		const windowout = new IndoorWindow(this, 137, 279);
		this.add.existing(windowout);

		// shelf3
		const shelf3 = this.physics.add.sprite(1157, 109, "light_wall_shelf");
		shelf3.scaleX = 0.1;
		shelf3.scaleY = 0.1250780691733577;
		shelf3.visible = false;
		shelf3.body.setSize(1007, 85, false);

		// cheese1
		const cheese1 = this.physics.add.sprite(139, 108, "flowersbush");
		cheese1.scaleX = 0.09814298217439021;
		cheese1.scaleY = 0.09814298217439021;
		cheese1.body.setSize(207, 186, false);

		// cheese3
		const cheese3 = this.physics.add.sprite(1148, 573, "flowersbush");
		cheese3.scaleX = 0.09814298217438955;
		cheese3.scaleY = 0.09814298217438955;
		cheese3.body.setSize(207, 186, false);

		// spiderroom
		const spiderroom = new Spider(this, 651, 12);
		this.add.existing(spiderroom);
		spiderroom.scaleX = 0.2557486287841334;
		spiderroom.scaleY = 0.2557486287841334;

		// cheese5
		const cheese5 = this.physics.add.sprite(1154, 85, "flowersbush");
		cheese5.scaleX = 0.09814298217438955;
		cheese5.scaleY = 0.09814298217438955;
		cheese5.body.setSize(207, 186, false);

		// painting5
		const painting5 = this.physics.add.sprite(951, 224, "painting_05_gold");
		painting5.scaleX = 0.18452014277084647;
		painting5.scaleY = 0.18452014277084647;
		painting5.alpha = 0.9;
		painting5.alphaTopLeft = 0.9;
		painting5.alphaTopRight = 0.9;
		painting5.alphaBottomLeft = 0.9;
		painting5.alphaBottomRight = 0.9;
		painting5.body.checkCollision.down = false;
		painting5.body.pushable = false;
		painting5.body.immovable = true;
		painting5.body.setSize(263, 320, false);

		// catPlayer
		const catPlayer = new CatPlayer(this, 143, 448);
		this.add.existing(catPlayer);
		catPlayer.scaleX = 0.1566678798725213;
		catPlayer.scaleY = 0.1566678798725213;
		catPlayer.body.maxAngular = 2000;
		catPlayer.body.collideWorldBounds = true;
		catPlayer.body.setOffset(130, 50);
		catPlayer.body.setSize(340, 460, false);

		// broom
		const broom = new Broom(this, 1216, 550);
		this.add.existing(broom);
		broom.body.maxAngular = 1000;

		// ceilingbird
		const ceilingbird = this.add.tileSprite(562, -67, 3500, 78, "skirting_light");
		ceilingbird.scaleX = 0.5248939372401809;
		ceilingbird.scaleY = 0.11182328355168925;
		ceilingbird.tintTopLeft = 12434877;
		ceilingbird.tintTopRight = 8877429;
		ceilingbird.tintBottomLeft = 12434877;
		ceilingbird.tintBottomRight = 10658466;

		// lamp_05
		const lamp_05 = this.add.nineslice(618, -8, "lamp_21", undefined, 321, 669, -1, 0, 53, 307);
		lamp_05.scaleX = 0.23681106817032221;
		lamp_05.scaleY = 0.23681106817032221;

		// ellipse_5
		const ellipse_5 = this.add.ellipse(618, -89, 128, 128);
		ellipse_5.scaleX = 0.30280492328814523;
		ellipse_5.scaleY = 0.06077007969683164;
		ellipse_5.alpha = 0.4;
		ellipse_5.isFilled = true;
		ellipse_5.fillColor = 657673;

		// shelf_2
		const shelf_2 = this.physics.add.sprite(1156, 118, "shelf");
		shelf_2.scaleX = 0.41371091191830817;
		shelf_2.scaleY = 0.26311890637589463;
		shelf_2.tintTopLeft = 16185078;
		shelf_2.body.setOffset(0, 20);
		shelf_2.body.setSize(300, 85, false);

		// shelf
		const shelf = this.physics.add.sprite(135, 139, "shelf");
		shelf.scaleX = 0.41371091191830817;
		shelf.scaleY = 0.26311890637589463;
		shelf.tintTopLeft = 15856111;
		shelf.body.setOffset(0, 20);
		shelf.body.setSize(300, 85, false);

		// seat
		const seat = this.physics.add.sprite(613, 590, "brown_2_seat");
		seat.scaleX = 0.17563316101140602;
		seat.scaleY = 0.17563316101140602;
		seat.body.setSize(1070, 858, false);

		// fallpainting1
		const fallpainting1 = new fallpainting(this, 729, 334);
		this.add.existing(fallpainting1);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(636, 304, 128, 128);
		rectangle_1.scaleX = 14.103275136322877;
		rectangle_1.scaleY = 7.443561228300095;
		rectangle_1.alpha = 0.15;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 11345952;

		this.red_large_stripe = red_large_stripe;
		this.bottom = bottom;
		this.painting1 = painting1;
		this.littletable = littletable;
		this.cheese2 = cheese2;
		this.shelf2 = shelf2;
		this.table = table;
		this.windowout = windowout;
		this.shelf3 = shelf3;
		this.cheese1 = cheese1;
		this.cheese3 = cheese3;
		this.spiderroom = spiderroom;
		this.cheese5 = cheese5;
		this.painting5 = painting5;
		this.catPlayer = catPlayer;
		this.broom = broom;
		this.ceilingbird = ceilingbird;
		this.lamp_05 = lamp_05;
		this.shelf_2 = shelf_2;
		this.shelf = shelf;
		this.seat = seat;
		this.fallpainting1 = fallpainting1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	red_large_stripe;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bottom;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	littletable;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cheese2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	table;
	/** @type {IndoorWindow} */
	windowout;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cheese1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cheese3;
	/** @type {Spider} */
	spiderroom;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cheese5;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting5;
	/** @type {CatPlayer} */
	catPlayer;
	/** @type {Broom} */
	broom;
	/** @type {Phaser.GameObjects.TileSprite} */
	ceilingbird;
	/** @type {Phaser.GameObjects.NineSlice} */
	lamp_05;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf_2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	seat;
	/** @type {fallpainting} */
	fallpainting1;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.UpdateGroup=this.add.group();
		this.CheeseGroup=this.add.group();

		this.editorCreate();

this.goaltheme=this.sound.add('missiongoal');
this.leveltheme=this.sound.add('maintheme');

this.leveltheme.play();

spidericon=true;

		this.cheesecatchtheme=this.sound.add('GetMouse');

		this.test();

		this.windowout.mission="Level";
		this.addCollidersBroom();
		this.spiderroom.Moving=true;
		this.physics.world.setBounds(0, -1600,1400, 3000);
		this.cameras.main.setBounds(0,-2900,1400, 3600);
		this.cameras.main.setZoom(0.72);
		this.cameras.main.startFollow(this.catPlayer,false,500,0);

		this.CheeseCount=0;
		this.physics.add.collider(this.catPlayer,this.bottom);
		this.physics.add.overlap(this.catPlayer,this.windowout.waythrough,this.JumpOut,null,this);

		this.physics.add.overlap(this.catPlayer,this.CheeseGroup,this.CatchSpider,null,this);
		this.physics.add.overlap(this.catPlayer,this.painting1,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.painting2,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.painting3,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.painting4,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.painting5,this.StickToObject,null,this);

		this.physics.add.overlap(this.catPlayer,this.spiderroom.spider1,this.GetHit,null,this);



		this.CheeseGroup.add(this.cheese1);
		this.CheeseGroup.add(this.cheese2);
		this.CheeseGroup.add(this.cheese3);
		//this.CheeseGroup.add(this.cheese4);
		this.CheeseGroup.add(this.cheese5);
		//this.CreatePlatform(this.bookcase1);
		//this.CreatePlatform(this.wardrobe);
		this.CreatePlatform(this.table);
		MissionCount=this.CheeseGroup.getLength();


	this.CreatePlatform(this.seat);
		this.CreatePlatform(this.shelf2);
			this.CreatePlatform(this.shelf3);

		this.CreatePlatform(this.littletable);
		//this.CreatePlatform(this.bed);

		//	this.CreatePlatform(this.painting1);
		//	this.CreatePlatform(this.painting2);
	}

		JumpOut(cat,window){

			if(ShowCompletetext==false && window.WindowOpen){

	this.game.sound.stopAll();
		this.scene.start("Level");
		StartPosX=632;
		StartPosY=299;

			};

	}

	CatchSpider(Cat,Cheese){

	if(Cheese){
	Cheese.destroy();
		this.cheesecatchtheme.play();
		this.CheeseCount++;
		MissionCount--;

		if(this.CheeseCount==4){
		ShowCompletetext=true;
		this.game.sound.stopAll();
		//this.scene.game.sound.stopAll();
		this.goaltheme.play();
		LevelSpider1Clear=true;


						this.time.addEvent({ delay:2000, callback:() => {
	this.cameras.main.fadeOut(1000);

		this.time.addEvent({ delay:1000, callback:() => {
		//this.scenelevelheme.stop();

		this.scene.start('Level');	

				}, callbackScope: this,repeat:0});
						}, callbackScope: this,repeat:0});

		}
	}



	};


	update(){


if(ShowCompletetext){

			LevelSpider1Clear=true;
		};

//this.DropDownWhenjumpCatonObject(this.painting1);
//this.DropDownWhenjumpCatonObject(this.painting2);

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
