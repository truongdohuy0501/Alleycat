
// You can write more code here

/* START OF COMPILED CODE */

class MouseLevel1 extends BaseScene {

	constructor() {
		super("MouseLevel1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// red_large_stripe_1
		const red_large_stripe_1 = this.add.image(1795, -134, "pink_plain");
		red_large_stripe_1.scaleX = -1.67187496525173;
		red_large_stripe_1.scaleY = 4.184809639855473;
		red_large_stripe_1.angle = 90;
		red_large_stripe_1.tintTopLeft = 2368034;
		red_large_stripe_1.tintBottomLeft = 3157036;
		red_large_stripe_1.tintBottomRight = 16579836;

		// green
		const green = this.add.image(1488, 674, "pink_plain");
		green.scaleX = 27.749165890494655;
		green.scaleY = 0.09114227195024169;
		green.tintTopLeft = 16316664;
		green.tintTopRight = 16514043;
		green.tintBottomLeft = 1250067;
		green.tintBottomRight = 2236962;

		// red_large_stripe
		const red_large_stripe = this.add.tileSprite(791, 235, 40000, 1382, "pink_large_stripe");
		red_large_stripe.scaleX = 0.1240532790468374;
		red_large_stripe.scaleY = 0.5501472356022378;
		red_large_stripe.tintTopLeft = 3092271;
		red_large_stripe.tintTopRight = 2565927;
		red_large_stripe.tileScaleX = 0.9;

		// lamp
		const lamp = this.add.image(2883, -51, "lamp_21");
		lamp.scaleX = 0.22974276773294663;
		lamp.scaleY = 0.22974276773294663;

		// bottom
		const bottom = this.physics.add.sprite(1010, 653, "block_separator_01");
		bottom.scaleX = 7;
		bottom.scaleY = -0.716376328720798;
		bottom.visible = false;
		bottom.body.pushable = false;
		bottom.body.immovable = true;
		bottom.body.setSize(695, 40, false);

		// side_wall_skirting_no_wall_light
		const side_wall_skirting_no_wall_light = this.add.image(2486, -31, "side_wall_skirting_no_wall_light");
		side_wall_skirting_no_wall_light.scaleX = 0.19573239282698118;
		side_wall_skirting_no_wall_light.scaleY = 0.19573239282698118;
		side_wall_skirting_no_wall_light.angle = -28;
		side_wall_skirting_no_wall_light.visible = false;

		// lamp_1
		const lamp_1 = this.add.image(768, -49, "lamp_21");
		lamp_1.scaleX = 0.22974276773294663;
		lamp_1.scaleY = 0.22974276773294663;

		// skirting_white
		const skirting_white = this.add.tileSprite(1135, -110, 35000, 78, "skirting_light");
		skirting_white.scaleX = 0.18021693427896895;
		skirting_white.scaleY = 0.18021693427896895;
		skirting_white.tintTopLeft = 6310988;
		skirting_white.tintTopRight = 6972259;
		skirting_white.tintBottomLeft = 6578272;
		skirting_white.tintBottomRight = 7367788;

		// skirting_light
		const skirting_light = this.add.tileSprite(1104, 616, 35000, 63, "skirting_light");
		skirting_light.scaleX = 0.2528690000816929;
		skirting_light.scaleY = 0.2528690000816929;

		// mousehole2
		const mousehole2 = this.physics.add.image(2421, 624, "yellow_wall_clock");
		mousehole2.scaleX = 0.24528494950734564;
		mousehole2.scaleY = 0.38257522575328007;
		mousehole2.visible = false;
		mousehole2.tintFill = true;
		mousehole2.tintTopLeft = 1117967;
		mousehole2.tintTopRight = 1577747;
		mousehole2.tintBottomLeft = 591623;
		mousehole2.tintBottomRight = 591880;
		mousehole2.body.setSize(248, 269, false);

		// rug_05
		const rug_05 = this.add.image(1667, 663, "rug_05");
		rug_05.scaleX = 0.2844883154260839;
		rug_05.scaleY = 0.11633433519795526;

		// littletable
		const littletable = this.physics.add.sprite(194, 609, "light_table_round");
		littletable.scaleX = 0.43337451323587933;
		littletable.scaleY = 0.43337451323587933;
		littletable.body.setOffset(0, 20);
		littletable.body.setSize(210, 200, false);

		// polygon_1
		const polygon_1 = this.add.polygon(1471, 921, "35 100 0 50 70 0 140 50 105 100 362 NaN");
		polygon_1.scaleX = 2.256156669862869;
		polygon_1.scaleY = 2.256156669862869;
		polygon_1.isFilled = true;

		// closetmouse
		const closetmouse = new ClosetOpenDoor(this, 1316, 444);
		this.add.existing(closetmouse);
		closetmouse.scaleX = 0.9793126123286557;
		closetmouse.scaleY = 0.9793126123286557;

		// wardrobe
		const wardrobe = this.physics.add.sprite(3476, 526, "light_wardrobe");
		wardrobe.scaleX = 0.24482783656788817;
		wardrobe.scaleY = 0.24482783656788817;
		wardrobe.tintBottomLeft = 7171437;
		wardrobe.tintBottomRight = 10855845;
		wardrobe.body.setSize(676, 1109, false);

		// shelf2
		const shelf2 = this.physics.add.sprite(2321, 197, "light_wall_shelf");
		shelf2.scaleX = 0.12324476090779189;
		shelf2.scaleY = 0.12324476090779189;
		shelf2.body.setSize(1007, 85, false);

		// painting2
		const painting2 = new fallpainting(this, 874, 310);
		this.add.existing(painting2);

		// bookcased
		const bookcased = new BookCase(this, 2781, 393);
		this.add.existing(bookcased);
		bookcased.scaleX = 0.7317440253778007;
		bookcased.scaleY = 0.7317440253778007;

		// plant2
		const plant2 = this.physics.add.sprite(1092, 108, "house_plant_example_05");
		plant2.scaleX = 0.13738296661597074;
		plant2.scaleY = 0.13738296661597074;
		plant2.body.gravity.y = 1000;
		plant2.body.bounce.y = 0.4;
		plant2.body.setOffset(150, -20);
		plant2.body.setSize(150, 539, false);

		// plant1
		const plant1 = this.physics.add.sprite(200, 53, "house_plant_example_07");
		plant1.scaleX = 0.07197268861660382;
		plant1.scaleY = 0.07197268861660382;
		plant1.body.gravity.y = 1000;
		plant1.body.bounce.y = 0.4;
		plant1.body.setOffset(0, 100);
		plant1.body.setSize(500, 970, false);

		// shelf
		const shelf = this.physics.add.sprite(-396, 14, "light_wall_shelf");
		shelf.scaleX = 0.16144851043231992;
		shelf.scaleY = 0.16144851043231992;
		shelf.body.setSize(1007, 85, false);

		// shelf1
		const shelf1 = this.physics.add.sprite(1100, 160, "shelf");
		shelf1.scaleX = 0.40792169505653936;
		shelf1.scaleY = 0.3466656561189361;
		shelf1.body.setOffset(10, 10);
		shelf1.body.setSize(300, 85, false);

		// brownseat
		const brownseat = this.physics.add.sprite(2081, 577, "brown_1_seat");
		brownseat.scaleX = 0.17118965496389263;
		brownseat.scaleY = 0.17118965496389263;
		brownseat.body.setSize(1070, 858, false);

		// spider1
		const spider1 = new Spider(this, 1755, -2);
		this.add.existing(spider1);
		spider1.scaleX = 0.22041154292377693;
		spider1.scaleY = 0.22041154292377693;

		// spider2
		const spider2 = new Spider(this, 2617, 1);
		this.add.existing(spider2);
		spider2.scaleX = 0.22041154292377588;
		spider2.scaleY = 0.22041154292377588;

		// shelf3
		const shelf3 = this.physics.add.sprite(197, 115, "shelf");
		shelf3.scaleX = 0.37331629265837957;
		shelf3.scaleY = 0.32321724452522194;
		shelf3.body.pushable = false;
		shelf3.body.immovable = true;
		shelf3.body.setOffset(0, 10);
		shelf3.body.setSize(309, 127, false);

		// bigseat
		const bigseat = this.physics.add.sprite(657, 581, "brown_2_seat2");
		bigseat.scaleX = 0.18656385949222287;
		bigseat.scaleY = 0.18656385949222287;
		bigseat.tintBottomLeft = 9669258;
		bigseat.tintBottomRight = 11314340;
		bigseat.body.setSize(1570, 824, false);

		// broom
		const broom = new Broom(this, 2475, 488);
		this.add.existing(broom);
		broom.scaleX = 0.23138112899246127;
		broom.scaleY = 0.23138112899246127;

		// painting0
		const painting0 = this.physics.add.sprite(547, 185, "painting_07_light");
		painting0.scaleX = 0.21330516005865924;
		painting0.scaleY = 0.21330516005865924;
		painting0.body.setSize(263, 320, false);

		// painting3
		const painting3 = this.physics.add.sprite(1632, 262, "painting_02_dark");
		painting3.scaleX = 0.1559189322466132;
		painting3.scaleY = 0.1559189322466132;
		painting3.body.setSize(363, 428, false);

		// painting4
		const painting4 = this.physics.add.sprite(1933, 158, "painting_05_light");
		painting4.scaleX = 0.21456563451137026;
		painting4.scaleY = 0.21456563451137026;
		painting4.body.setSize(263, 320, false);

		// dogInterior1
		const dogInterior1 = new DogInterior(this, 1661, 542);
		this.add.existing(dogInterior1);
		dogInterior1.scaleX = 0.8539063685692403;
		dogInterior1.scaleY = 0.8539063685692403;

		// mouse1
		const mouse1 = new Mouse(this, 1159, 645);
		this.add.existing(mouse1);
		mouse1.body.velocity.x = -120;
		mouse1.body.velocity.y = 0;

		// plant3
		const plant3 = this.physics.add.sprite(2317, 154, "house_plant_example_14");
		plant3.scaleX = 0.14767050325216982;
		plant3.scaleY = 0.14767050325216982;
		plant3.body.gravity.y = 1000;
		plant3.body.bounce.y = 0.3;
		plant3.body.setSize(312, 410, false);

		// catPlayer
		const catPlayer = new CatPlayer(this, 194, 451);
		this.add.existing(catPlayer);
		catPlayer.scaleX = 0.15201730813506723;
		catPlayer.scaleY = 0.15201730813506723;
		catPlayer.body.maxAngular = 3000;
		catPlayer.body.collideWorldBounds = true;
		catPlayer.body.setOffset(130, 50);
		catPlayer.body.setSize(340, 460, false);

		// windowout1
		const windowout1 = new IndoorWindow(this, 190, 274);
		this.add.existing(windowout1);

		// mouse1 (prefab fields)
		mouse1.Speed = "-120";
		mouse1.Time = 2500;

		this.red_large_stripe = red_large_stripe;
		this.bottom = bottom;
		this.mousehole2 = mousehole2;
		this.littletable = littletable;
		this.closetmouse = closetmouse;
		this.wardrobe = wardrobe;
		this.shelf2 = shelf2;
		this.painting2 = painting2;
		this.bookcased = bookcased;
		this.plant2 = plant2;
		this.plant1 = plant1;
		this.shelf = shelf;
		this.shelf1 = shelf1;
		this.brownseat = brownseat;
		this.spider1 = spider1;
		this.spider2 = spider2;
		this.shelf3 = shelf3;
		this.bigseat = bigseat;
		this.broom = broom;
		this.painting0 = painting0;
		this.painting3 = painting3;
		this.painting4 = painting4;
		this.dogInterior1 = dogInterior1;
		this.mouse1 = mouse1;
		this.plant3 = plant3;
		this.catPlayer = catPlayer;
		this.windowout1 = windowout1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	red_large_stripe;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bottom;
	/** @type {Phaser.Physics.Arcade.Image} */
	mousehole2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	littletable;
	/** @type {ClosetOpenDoor} */
	closetmouse;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	wardrobe;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf2;
	/** @type {fallpainting} */
	painting2;
	/** @type {BookCase} */
	bookcased;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	brownseat;
	/** @type {Spider} */
	spider1;
	/** @type {Spider} */
	spider2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bigseat;
	/** @type {Broom} */
	broom;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting0;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	painting4;
	/** @type {DogInterior} */
	dogInterior1;
	/** @type {Mouse} */
	mouse1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant3;
	/** @type {CatPlayer} */
	catPlayer;
	/** @type {IndoorWindow} */
	windowout1;

	/* START-USER-CODE */

	// Write your code here

	create() {


	StartPosX=2093;
	StartPosY=386;

	StageClear=LevelMouse2Clear;


	this.UpdateGroup=this.add.group();

		this.editorCreate();
		this.test();
		this.addCollidersBroom();


		this.levelheme=this.sound.add('maintheme');
		this.goaltheme=this.sound.add('missiongoal');

		this.levelheme.play();

		this.CounterMouse=0;
		this.AmountMouse=5;
			MissionCount=5;

		mouseicon=true;

		this.mousecatchtheme=this.sound.add('GetMouse');

		this.plant1.showmouse=true;
		this.plant2.showmouse=false;
		this.plant3.showmouse=true;

	this.DirtGroup=this.add.group();

		this.MouseGroup=this.add.group();
		this.MouseGroup.add(this.mouse1);
		//this.MouseGroup.add(this.mouse2);
		//this.MouseGroup.add(this.mouse3);
		//this.MouseGroup.add(this.mouse4);
	//	this.MouseGroup.add(this.mouse5);
			//this.MouseGroup.add(this.mouse6);
		this.physics.world.setBounds(0, -1600,3100, 3000);
		this.cameras.main.setBounds(0,-2900,3100, 3600);


		//this.mousehole.setCrop(-100,0,890,140);
			//this.mousehole2.setCrop(-100,0,890,140);
		this.cameras.main.setZoom(0.71);
	this.CreatePlatform(this.littletable);

		//	this.CreatePlatform(this.bookcase);
	//	this.CreatePlatform(this.bookcase2);
	//	this.CreatePlatform(this.bookcase3);
			this.CreatePlatform(this.wardrobe);
				this.CreatePlatform(this.bigseat);
			//	this.CreatePlatform(this.bookcase2);
				this.CreatePlatform(this.shelf3);
this.CreatePlatform(this.bookcased.shell);





	//	this.CreatePlatform(this.bookcase4);

		//this.CreatePlatform(this.brownseat);	
this.CreatePlatform(this.shelf1);	
		this.CreatePlatform(this.shelf2);
		//this.CreatePlatform(this.painting1);
	//	this.CreatePlatform(this.painting2);
			this.CreatePlatform(this.brownseat);

				//this.CreatePlatform(this.paintingbig);
				this.CreatePlatform(this.closetmouse.wardrobe);



//		this.CreatePlatform(this.shelf3);

//this.CreatePlatform(this.bookcase);

		this.cameras.main.startFollow(this.catPlayer,false,0.2,0,50,0);

		this.physics.add.collider(this.catPlayer,this.bottom);


				this.physics.add.overlap(this.catPlayer,this.painting3,this.StickToObject,null,this);
				this.physics.add.overlap(this.catPlayer,this.painting4,this.StickToObject,null,this);
				this.physics.add.overlap(this.catPlayer,this.painting0,this.StickToObject,null,this);
				this.physics.add.overlap(this.catPlayer,this.closetmouse,this.OpenDoor,null,this);
				this.physics.add.overlap(this.broom,this.DirtGroup,this.StopBroom,null,this);



		this.physics.add.collider(this.plant1,this.shelf3);
		this.physics.add.collider(this.catPlayer,this.plant1,this.push,null,this);
		this.physics.add.collider(this.plant1,this.bottom,this.DropAndLeaveMarkMouse,null,this);

		this.physics.add.collider(this.plant2,this.shelf1);
		this.physics.add.collider(this.catPlayer,this.plant2,this.push,null,this);
		this.physics.add.collider(this.plant2,this.bottom,this.DropAndLeaveMarkMouse,null,this);

			this.physics.add.collider(this.plant3,this.shelf2);
		this.physics.add.collider(this.catPlayer,this.plant3,this.push,null,this);
		this.physics.add.collider(this.plant3,this.bottom,this.DropAndLeaveMarkMouse,null,this);
		//	this.physics.add.collider(this.plant1,this.bottom,this.ShowMouse,null,this);

				this.physics.add.overlap(this.catPlayer,this.bookcased.mouserow,this.ShowMouseInt,null,this);
				this.physics.add.overlap(this.catPlayer,this.MouseGroup,this.EatMouse,null,this);
				this.physics.add.collider(this.painting2,this.bottom,this.DropAndLeaveMark,null,this);
				this.physics.add.collider(this.bookcased.mouserow,this.bottom,this.DropAndLeaveMark,null,this);
				this.physics.add.collider(this.painting2.block,this.catPlayer,this.MakeObjectImmovabke,null,this);

				this.physics.add.overlap(this.catPlayer,this.dogInterior1.dog,this.GetHit,null,this);
					this.physics.add.overlap(this.catPlayer,this.spider1.spider1,this.GetHit,null,this);
						this.physics.add.overlap(this.catPlayer,this.spider2.spider1,this.GetHit,null,this);

				this.physics.add.overlap(this.catPlayer,this.windowout1.waythrough,this.JumpOut,null,this);



				this.bookcased.mouserow.depth=100;


				//

	}

		JumpOut(cat,window){

			if(ShowCompletetext==false && window.WindowOpen){

	this.game.sound.stopAll();
		this.scene.start("Level");


			};

	}


	ShowMouseInt(cat, shelf){

shelf.body.setGravityY(900);
shelf.setDepth(500);


this.time.addEvent({ delay:300, callback:() => {
	if(shelf.parentContainer)
	{
			this.MouseGroup.add(shelf.parentContainer.bookmouse);
	};

}, callbackScope: this,repeat:0});

	}

	OpenDoor(cat,closet){
if(closet.door.visible==false){
closet.door.visible=true;
const mouse = new Mouse(this, closet.x+50, closet.y+105);
mouse.walking=false;

this.time.addEvent({ delay:300, callback:() => {

		this.add.existing(mouse);
		this.MouseGroup.add(mouse);

		}, callbackScope: this,repeat:0});
}
	}



StopBroom(broom,dirt){
	broom.clean=true;

broom.body.setVelocityX(0);

if(dirt.active){

this.time.addEvent({ delay:3000, callback:() => {
dirt.destroy();
broom.clean=false;
broom.BackToSweeping();
}, callbackScope: this,repeat:0});

}

}
MakeObjectImmovabke(paint,Cat){


this.time.addEvent({ delay:300, callback:() => {
	if(paint.active){
paint.parentContainer.body.setGravityY(900);
paint.parentContainer.body.setBounceX(0.5);
paint.parentContainer.body.setAngularVelocity(12);
	};
	}, callbackScope: this,repeat:0});

};


DropAndLeaveMark(painting, bottom){

var	tempMatrix = new Phaser.GameObjects.Components.TransformMatrix();
				var	tempParentMatrix = new Phaser.GameObjects.Components.TransformMatrix();
				painting.getWorldTransformMatrix(tempMatrix, tempParentMatrix);
				var d = tempMatrix.decomposeMatrix();
if(painting){

	this.time.addEvent({ delay:100, callback:() => {

	painting.destroy();



this.mudd=this.scene.scene.physics.add.sprite(d.translateX, bottom.y+10, "puddle").setScale(0.06);
this.DirtGroup.add(this.mudd);
this.add.existing(this.mudd);

//this.physics.add.sprite(painting.x+10, bottom.y, "littlecloud").setScale(0.1);
this.expo= new explosion(this, d.translateX, bottom.y).setScale(0.3);
console.log('boom');

this.add.existing(this.expo);

	}, callbackScope: this,repeat:0});


}

	}



	update(){


	if(ShowCompletetext){

			LevelMouse2Clear=true;

		};

//this.DropDownWhenjumpCatonObject(this.painting1);
//this.DropDownWhenjumpCatonObject(this.painting2);
//this.DropDownWhenjumpCatonObject(this.paintingbig);


//if(this.painting1.body.touching.up){

	//this.painting1.body.setGravityY(1000);

//};

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
