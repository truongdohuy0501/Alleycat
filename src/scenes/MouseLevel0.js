
// You can write more code here

/* START OF COMPILED CODE */

class MouseLevel0 extends BaseScene {

	constructor() {
		super("MouseLevel0");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// green
		const green = this.add.image(559, 659, "dark_blue_plain");
		green.scaleX = 16.197484135628;
		green.scaleY = 0.06027911686388105;
		green.tintTopLeft = 6647702;
		green.tintTopRight = 3158140;
		green.tintBottomLeft = 6790099;
		green.tintBottomRight = 6526643;

		// red_large_stripe
		const red_large_stripe = this.add.tileSprite(657, 239, 3700, 1382, "blue_large_stripe");
		red_large_stripe.blendMode = Phaser.BlendModes.SKIP_CHECK;
		red_large_stripe.scaleX = 0.4657136003917984;
		red_large_stripe.scaleY = 0.5486959277268708;
		red_large_stripe.tintTopLeft = 3025964;
		red_large_stripe.tintTopRight = 3289653;
		red_large_stripe.tintBottomLeft = 10066119;
		red_large_stripe.tintBottomRight = 14211552;
		red_large_stripe.tileScaleX = 0.21;

		// bottom
		const bottom = this.physics.add.sprite(574, 655, "block_separator_01");
		bottom.scaleX = 5.504107162267043;
		bottom.scaleY = -0.716376328720798;
		bottom.visible = false;
		bottom.body.pushable = false;
		bottom.body.immovable = true;
		bottom.body.setSize(695, 40, false);

		// side_wall_skirting_no_wall_light
		const side_wall_skirting_no_wall_light = this.add.image(2050, -5, "side_wall_skirting_no_wall_light");
		side_wall_skirting_no_wall_light.scaleX = 0.19573239282698118;
		side_wall_skirting_no_wall_light.scaleY = 0.19573239282698118;
		side_wall_skirting_no_wall_light.angle = -28;
		side_wall_skirting_no_wall_light.visible = false;

		// celinggreen
		const celinggreen = this.add.image(766, -114, "dark_blue_plain");
		celinggreen.scaleX = 16.481301468247903;
		celinggreen.scaleY = 0.043345629751944906;
		celinggreen.tintTopLeft = 7703762;
		celinggreen.tintTopRight = 2966695;
		celinggreen.tintBottomLeft = 4408133;
		celinggreen.tintBottomRight = 4079169;

		// skirting_white
		const skirting_white = this.add.tileSprite(691, -80, 10000, 78, "skirting_light");
		skirting_white.scaleX = 0.2;
		skirting_white.scaleY = 0.15;
		skirting_white.flipY = true;
		skirting_white.tintTopLeft = 3681581;
		skirting_white.tintTopRight = 1773584;

		// skirting_light
		const skirting_light = this.add.tileSprite(674, 614, 10000, 63, "skirting_light");
		skirting_light.scaleX = 0.18;
		skirting_light.scaleY = 0.2528690000816929;

		// windowout
		const windowout = new IndoorWindow(this, 183, 269);
		this.add.existing(windowout);

		// rug
		const rug = this.add.image(1155, 674, "rug_11");
		rug.scaleX = 0.22595859407563645;
		rug.scaleY = 0.0913544484940845;
		rug.tintTopLeft = 13618123;
		rug.tintTopRight = 13618380;

		// plant
		const plant = this.physics.add.sprite(1101, 70, "house_plant_example_09");
		plant.scaleX = 0.09987701846284014;
		plant.scaleY = 0.09987701846284014;
		plant.body.gravity.y = 1000;
		plant.body.bounce.y = 0.4;
		plant.body.collideWorldBounds = true;
		plant.body.setSize(524, 875, false);

		// mousehole4
		const mousehole4 = this.physics.add.image(898, 600, "yellow_wall_clock");
		mousehole4.scaleX = 0.22957211792565463;
		mousehole4.scaleY = 0.3021557439937056;
		mousehole4.visible = false;
		mousehole4.tintFill = true;
		mousehole4.tintTopLeft = 1117967;
		mousehole4.tintTopRight = 1577747;
		mousehole4.tintBottomLeft = 2435377;
		mousehole4.tintBottomRight = 2768188;
		mousehole4.body.setSize(248, 269, false);

		// wardrobe
		const wardrobe = this.physics.add.sprite(1156, 511, "light_wardrobe");
		wardrobe.scaleX = 0.25791333737569;
		wardrobe.scaleY = 0.25791333737569;
		wardrobe.body.setSize(676, 1109, false);

		// opendoor
		const opendoor = this.physics.add.sprite(1172, 474, "dark_wardrobe_door_open");
		opendoor.scaleX = 0.23814756891759764;
		opendoor.scaleY = 0.256032976523456;
		opendoor.visible = false;
		opendoor.body.setOffset(0, 150);
		opendoor.body.setSize(200, 500, false);

		// shelf1
		const shelf1 = this.physics.add.sprite(210, 86, "light_wall_shelf");
		shelf1.scaleX = 0.13;
		shelf1.scaleY = 0.1;
		shelf1.body.setSize(1007, 85, false);

		// mousehole2
		const mousehole2 = this.physics.add.image(1110, 115, "yellow_wall_clock");
		mousehole2.scaleX = 0.22957211792565463;
		mousehole2.scaleY = 0.3021557439937056;
		mousehole2.visible = false;
		mousehole2.tintFill = true;
		mousehole2.tintTopLeft = 1117967;
		mousehole2.tintTopRight = 1577747;
		mousehole2.tintBottomLeft = 2435377;
		mousehole2.tintBottomRight = 2768188;
		mousehole2.body.setSize(248, 269, false);

		// shelf3
		const shelf3 = this.physics.add.sprite(1140, 122, "light_wall_shelf");
		shelf3.scaleX = 0.13;
		shelf3.scaleY = 0.1;
		shelf3.body.setSize(1007, 85, false);

		// mouse3
		const mouse3 = new Mouse(this, 1171, 103);
		this.add.existing(mouse3);
		mouse3.flipX = true;
		mouse3.flipY = false;
		mouse3.body.velocity.x = -70;
		mouse3.body.velocity.y = 0;

		// littletable
		const littletable = this.physics.add.sprite(172, 620, "light_table_round");
		littletable.scaleX = 0.43337451323587933;
		littletable.scaleY = 0.43337451323587933;
		littletable.body.setOffset(0, 20);
		littletable.body.setSize(210, 200, false);

		// lamp1
		const lamp1 = this.add.nineslice(657, 2, "lamp_21", undefined, 321, 902, 6, 2, 57, 301);
		lamp1.scaleX = 0.24260144750663815;
		lamp1.scaleY = 0.24260144750663815;

		// ellipse_5
		const ellipse_5 = this.add.ellipse(657, -104, 128, 128);
		ellipse_5.scaleX = 0.30280492328814523;
		ellipse_5.scaleY = 0.06077007969683164;
		ellipse_5.alpha = 0.4;
		ellipse_5.isFilled = true;
		ellipse_5.fillColor = 657673;

		// table
		const table = this.physics.add.sprite(662, 622, "light_wood_table");
		table.scaleX = 0.1482024736712672;
		table.scaleY = 0.1482024736712672;
		table.body.setOffset(0, 50);
		table.body.setSize(1606, 681, false);

		// mouse4
		const mouse4 = new Mouse(this, 252, 66);
		this.add.existing(mouse4);
		mouse4.visible = true;
		mouse4.body.velocity.x = -50;
		mouse4.body.velocity.y = 0;

		// mouse2
		const mouse2 = new Mouse(this, 744, 657);
		this.add.existing(mouse2);
		mouse2.visible = true;
		mouse2.body.velocity.x = -90;
		mouse2.body.velocity.y = 0;

		// paint2
		const paint2 = this.physics.add.sprite(446, 272, "painting_05_gold");
		paint2.scaleX = 0.18452014277084647;
		paint2.scaleY = 0.18452014277084647;
		paint2.body.pushable = false;
		paint2.body.immovable = true;
		paint2.body.setOffset(0, 100);
		paint2.body.setSize(263, 450, false);

		// paint1
		const paint1 = this.physics.add.sprite(837, 336, "painting_08_dark");
		paint1.scaleX = 0.1649687577358515;
		paint1.scaleY = 0.1649687577358515;
		paint1.body.setOffset(0, 20);
		paint1.body.setSize(400, 600, false);

		// dogInterior1
		const dogInterior1 = new DogInterior(this, 1156, 565);
		this.add.existing(dogInterior1);
		dogInterior1.scaleX = 0.8053790025184748;
		dogInterior1.scaleY = 0.8053790025184748;

		// catPlayer
		const catPlayer = new CatPlayer(this, 181, 446);
		this.add.existing(catPlayer);
		catPlayer.scaleX = 0.1566678798725213;
		catPlayer.scaleY = 0.1566678798725213;
		catPlayer.body.maxAngular = 2000;
		catPlayer.body.collideWorldBounds = true;
		catPlayer.body.setOffset(180, 260);
		catPlayer.body.setSize(180, 250, false);

		// text_2
		const text_2 = this.add.text(327, 126, "", {});
		text_2.scaleX = 0.7277239539115886;
		text_2.scaleY = 0.7277239539115886;
		text_2.visible = false;
		text_2.tintTopLeft = 4835045;
		text_2.tintTopRight = 9708323;
		text_2.tintBottomLeft = 5332190;
		text_2.tintBottomRight = 8832476;
		text_2.text = "Mission complete!";
		text_2.setStyle({ "align": "center", "backgroundColor": "#1d4e5a6e", "baselineX": 0, "baselineY": 0, "color": "#a2cfe8ff", "fixedWidth": 1000, "fixedHeight": 150, "fontFamily": "Goofy", "fontSize": "150px", "fontStyle": "bold", "stroke": "#121313ff", "strokeThickness": 6, "shadow.color": "#0000005e", "shadow.blur": 100, "shadow.stroke": true, "shadow.fill": true });
		text_2.setPadding({"top":-30});
		text_2.setWordWrapWidth(text_2.style.wordWrapWidth, true);

		// eu_double_plug
		const eu_double_plug = this.add.image(1341, 585, "eu_double_plug");
		eu_double_plug.scaleX = 0.28675824532206945;
		eu_double_plug.scaleY = 0.28675824532206945;
		eu_double_plug.tintTopLeft = 2237478;

		// paint3
		const paint3 = this.physics.add.sprite(659, 76, "painting_08_dark");
		paint3.scaleX = 0.14976996200508752;
		paint3.scaleY = 0.14976996200508752;
		paint3.visible = false;
		paint3.body.setOffset(0, 20);
		paint3.body.setSize(400, 600, false);

		// shelf_2
		const shelf_2 = this.add.nineslice(208, 98, "shelf", undefined, 356, 155, 119, 91, 4, -4);
		shelf_2.scaleX = 0.41371091191830817;
		shelf_2.scaleY = 0.26311890637589463;

		// shelf
		const shelf = this.add.nineslice(1140, 134, "shelf", undefined, 360, 149, 119, 91, 4, -4);
		shelf.scaleX = 0.41371091191830817;
		shelf.scaleY = 0.26311890637589463;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(671, 288, 128, 128);
		rectangle_1.scaleX = 13.759510341208973;
		rectangle_1.scaleY = 6.674634624629279;
		rectangle_1.alpha = 0.15;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 462208;

		// mouse3 (prefab fields)
		mouse3.Speed = "-70";
		mouse3.Time = 1000;

		// mouse4 (prefab fields)
		mouse4.Speed = "-50";
		mouse4.Time = 2000;

		// mouse2 (prefab fields)
		mouse2.Speed = "-80";
		mouse2.Time = 1500;

		this.green = green;
		this.red_large_stripe = red_large_stripe;
		this.bottom = bottom;
		this.celinggreen = celinggreen;
		this.skirting_white = skirting_white;
		this.skirting_light = skirting_light;
		this.windowout = windowout;
		this.rug = rug;
		this.plant = plant;
		this.mousehole4 = mousehole4;
		this.wardrobe = wardrobe;
		this.opendoor = opendoor;
		this.shelf1 = shelf1;
		this.mousehole2 = mousehole2;
		this.shelf3 = shelf3;
		this.mouse3 = mouse3;
		this.littletable = littletable;
		this.lamp1 = lamp1;
		this.table = table;
		this.mouse4 = mouse4;
		this.mouse2 = mouse2;
		this.paint2 = paint2;
		this.paint1 = paint1;
		this.dogInterior1 = dogInterior1;
		this.catPlayer = catPlayer;
		this.paint3 = paint3;
		this.shelf_2 = shelf_2;
		this.shelf = shelf;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	green;
	/** @type {Phaser.GameObjects.TileSprite} */
	red_large_stripe;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bottom;
	/** @type {Phaser.GameObjects.Image} */
	celinggreen;
	/** @type {Phaser.GameObjects.TileSprite} */
	skirting_white;
	/** @type {Phaser.GameObjects.TileSprite} */
	skirting_light;
	/** @type {IndoorWindow} */
	windowout;
	/** @type {Phaser.GameObjects.Image} */
	rug;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	plant;
	/** @type {Phaser.Physics.Arcade.Image} */
	mousehole4;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	wardrobe;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	opendoor;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf1;
	/** @type {Phaser.Physics.Arcade.Image} */
	mousehole2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	shelf3;
	/** @type {Mouse} */
	mouse3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	littletable;
	/** @type {Phaser.GameObjects.NineSlice} */
	lamp1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	table;
	/** @type {Mouse} */
	mouse4;
	/** @type {Mouse} */
	mouse2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint1;
	/** @type {DogInterior} */
	dogInterior1;
	/** @type {CatPlayer} */
	catPlayer;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	paint3;
	/** @type {Phaser.GameObjects.NineSlice} */
	shelf_2;
	/** @type {Phaser.GameObjects.NineSlice} */
	shelf;

	/* START-USER-CODE */

	// Write your code here


	create() {

		this.JustOnce=true;
		this.BDown=false;

		mouseicon=true;

		this.levelheme=this.sound.add('maintheme');
		this.goaltheme=this.sound.add('missiongoal');
		this.levelheme.play();

		this.CounterMouse=0;
		this.AmountMouse=5;

	//	this.scene.launch('OverlayScreen');
		this.MouseGroup=this.add.group();


	//	this.MouseGroup.add(this.mouse5);

		this.UpdateGroup=this.add.group();
		this.HoleGroup=this.add.group();
		this.DirtGroup=this.add.group();

		this.editorCreate();
		this.test();

		var ColorLight=0x0d0c0c;

  var light1 = this.lights.addLight(this.paint3.x, this.paint3.y, 1800).setIntensity(1);
    this.lights.enable().setAmbientColor(ColorLight);


		StageClear=LevelMouse1Clear;
		//this.addCollidersBroom();
console.log('your clear item is : '+ StageClear);
		this.physics.world.setBounds(0, -1600,1400, 3000);
		this.cameras.main.setBounds(0,-2900,1400, 3600);
		this.cameras.main.setZoom(0.72);
	//	this.CreatePlatform(this.paint1);
this.plant.showmouse=true;

	var ColorLight=0x222426;
	// var light  = this.lights.addLight(this.lamp1.x, this.lamp1.y+100,7800).setIntensity(20);
    this.lights.enable().setAmbientColor(ColorLight);


	//this.lamp1.setPipeline('Light2D');
		//this.red_large_stripe.setPipeline('Light2D');
		//this.wardrobe.setPipeline('Light2D');
	//	this.table.setPipeline('Light2D');
	//	this.littletable.setPipeline('Light2D');

	//	this.paint1.setPipeline('Light2D');
	//	this.paint2.setPipeline('Light2D');
	//	this.shelf.setPipeline('Light2D');
	//	this.shelf_2.setPipeline('Light2D');
	//	this.mouse3.setPipeline('Light2D');
	//	this.mouse4.setPipeline('Light2D');
//this.green.setPipeline('Light2D');
//this.plant.setPipeline('Light2D');

//this.skirting_light.setPipeline('Light2D');
//this.skirting_white.setPipeline('Light2D');
//this.celinggreen.setPipeline('Light2D');

////this.rug.setPipeline('Light2D');

//this.dogInterior1.dog.setPipeline('Light2D');



	//this.celinggreen.setPipeline('Light2D');
	//this.lamp1.setPipeline('Light2D');


		this.dogInterior1.depth=50;
		//this.MouseGroup.add(this.mouse1);
		this.MouseGroup.add(this.mouse2);
		this.MouseGroup.add(this.mouse3);
		this.MouseGroup.add(this.mouse4);
	//	this.MouseGroup.add(this.mouse6);
		MissionCount=5;

		this.windowout.mission="Level";


		this.physics.add.overlap(this.catPlayer,this.MouseGroup,this.EatMouse,null,this);


		this.CreatePlatform(this.shelf1);
		//this.CreatePlatform(this.shelf2);
		this.CreatePlatform(this.shelf3);
		this.CreatePlatform(this.littletable);
		this.CreatePlatform(this.table);

		this.CreatePlatform(this.wardrobe);



		//this.HoleGroup.add(this.holecheese2);

		this.physics.add.collider(this.catPlayer,this.bottom);
		//this.physics.add.collider(this.plant,this.bottom,this.ShowMouse,null,this);
		this.physics.add.collider(this.plant,this.bottom,this.DropAndLeaveMarkMouse,null,this);

		this.physics.add.collider(this.plant,this.shelf3);
		this.physics.add.collider(this.catPlayer,this.plant,this.push,null,this);

		this.physics.add.overlap(this.catPlayer,this.opendoor,this.OpenDoor,null,this);
		this.physics.add.overlap(this.catPlayer,this.mousehole1,this.Teleport,null,this);

		this.physics.add.overlap(this.catPlayer,this.paint1,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paint3,this.StickToObject,null,this);
		this.physics.add.overlap(this.catPlayer,this.paint2,this.StickToObject,null,this);

		this.physics.add.overlap(this.catPlayer,this.mousehole4,this.Teleport,null,this);
		this.physics.add.overlap(this.catPlayer,this.mousehole5,this.Teleport,null,this);
		this.physics.add.overlap(this.catPlayer,this.mousehole2,this.Teleport,null,this);

		this.physics.add.overlap(this.catPlayer,this.windowout.waythrough,this.JumpOut,null,this);

		this.physics.add.overlap(this.catPlayer,this.dogInterior1.dog,this.GetHit,null,this);



this.input.keyboard.on('keydown-B', () =>{

	console.log('test key up()');
	this.BDown=true;

});

		this.input.keyboard.on('keyup-B', () =>{

	console.log('test key up()');
	this.BDown=false;

});

  	//this.cheese.setMask(this.HoleGroup);
	//this.cheese.setMask(mask);

		//this.MakeHole(this.mask1,this.cheesehole2,this.cheese);

//this.MakeHole(this.mask1,this.mousehole2,this.cheese2);

		//this.MakeHole(this.mask2,this.cheesehole2,this.CheeseMap);


		//  this.cameras.main.setMask(mask1);
	}






	Teleport(Cat,Door){
if(this.BDown){

		this.time.addEvent({ delay: 100, callback:() => {
		Cat.x=Door.info.x+20;
		Cat.y=Door.info.y-60;

}, callbackScope: this,repeat:0 });

};
	}

	MakeHole(Mask,Hole,Cheese){

	Mask = new Phaser.Display.Masks.BitmapMask(this,Hole);
	Mask.invertAlpha = true;
	//Mask.visible=false;


  	Cheese.setMask(Mask);



	}

			EatMouse(Cat,Mouse){

if(Mouse){
	MissionCount--;
Mouse.destroy();
this.mousecatchtheme.play();
this.CounterMouse++;

	if(this.CounterMouse==this.AmountMouse){

		ShowCompletetext=true;


		StageClear=true;
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

	JumpOut(cat,window){

		if(ShowCompletetext==false && window.WindowOpen){

		this.game.sound.stopAll();
		this.scene.start("Level");
		StartPosX=432;
		StartPosY=299;

			};

	}

	OpenDoor(cat,closet){
if(this.opendoor.visible==false){
this.opendoor.visible=true;
const mouse = new Mouse(this, closet.x, closet.y+80);
mouse.walking=false;

this.time.addEvent({ delay:300, callback:() => {

		this.add.existing(mouse);
		this.MouseGroup.add(mouse);

		}, callbackScope: this,repeat:0});
}
	}

	update(){

		if(ShowCompletetext){

			LevelMouse1Clear=true;
		};

	//	this.DropDownWhenjumpCatonObject(this.paint1);
//		this.DropDownWhenjumpCatonObject(this.paint2);

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
