
// You can write more code here

/* START OF COMPILED CODE */

class Mission2UnderWater3 extends BaseScene {

	constructor() {
		super("Mission2UnderWater3");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// seabed
		const seabed = this.add.nineslice(1216, 314, "seabed", undefined, 2381, 1592, -6, 1, 59, 445);
		seabed.scaleX = 1.0800800057793274;
		seabed.scaleY = 0.581901685798214;

		// rectangle3
		const rectangle3 = this.add.rectangle(641, 661, 128, 128);
		rectangle3.scaleX = 11.19455188188234;
		rectangle3.scaleY = 0.16124814136254448;
		rectangle3.visible = false;
		rectangle3.isFilled = true;
		rectangle3.fillColor = 11776889;

		// background_piece_04
		const background_piece_04 = this.add.image(712, 578, "background_piece_04");
		background_piece_04.scaleX = 0.7032001329507295;
		background_piece_04.scaleY = 0.7032001329507295;
		background_piece_04.alpha = 0.4;
		background_piece_04.alphaTopLeft = 0.4;
		background_piece_04.alphaTopRight = 0.4;
		background_piece_04.alphaBottomLeft = 0.4;
		background_piece_04.alphaBottomRight = 0.4;

		// background_piece_06
		const background_piece_06 = this.add.image(1162, 550, "background_piece_06");
		background_piece_06.scaleX = 0.35882011898718014;
		background_piece_06.scaleY = 0.35882011898718014;
		background_piece_06.alpha = 0.4;
		background_piece_06.alphaTopLeft = 0.4;
		background_piece_06.alphaTopRight = 0.4;
		background_piece_06.alphaBottomLeft = 0.4;
		background_piece_06.alphaBottomRight = 0.4;

		// background_piece_07
		const background_piece_07 = this.add.image(183, 592, "background_piece_07");
		background_piece_07.scaleX = 0.7175042291588758;
		background_piece_07.scaleY = 0.7175042291588758;
		background_piece_07.alpha = 0.4;
		background_piece_07.alphaTopLeft = 0.4;
		background_piece_07.alphaTopRight = 0.4;
		background_piece_07.alphaBottomLeft = 0.4;
		background_piece_07.alphaBottomRight = 0.4;

		// pillar
		const pillar = this.add.image(3, 497, "pillar");
		pillar.scaleX = 0.5889929424641701;
		pillar.scaleY = 0.5889929424641701;
		pillar.visible = false;

		// pillar_1
		const pillar_1 = this.add.image(1089, 547, "pillar");
		pillar_1.scaleX = 0.4236100329827226;
		pillar_1.scaleY = 0.4236100329827226;
		pillar_1.visible = false;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(633, -45, 1400, 20);
		rectangle_1.scaleY = 0.058959080772305605;
		rectangle_1.visible = false;
		rectangle_1.isFilled = true;

		// foreground_piece_01
		const foreground_piece_01 = this.add.image(-152, 622, "foreground_piece_01");
		foreground_piece_01.scaleX = 0.27497139796304504;
		foreground_piece_01.scaleY = 0.27497139796304504;

		// foreground_piece_02
		const foreground_piece_02 = this.add.image(107, 640, "foreground_piece_02");
		foreground_piece_02.scaleX = 0.3376959723010384;
		foreground_piece_02.scaleY = 0.3376959723010384;

		// foreground_piece_03
		const foreground_piece_03 = this.add.image(445, 649, "foreground_piece_03");
		foreground_piece_03.scaleX = 0.435660119678413;
		foreground_piece_03.scaleY = 0.435660119678413;

		// foreground_piece_04
		const foreground_piece_04 = this.add.image(1192, 639, "foreground_piece_04");
		foreground_piece_04.scaleX = 0.39405248053410225;
		foreground_piece_04.scaleY = 0.39405248053410225;

		// foreground_piece_05
		const foreground_piece_05 = this.add.image(835, 662, "foreground_piece_05");
		foreground_piece_05.scaleX = 0.3744427756006714;
		foreground_piece_05.scaleY = 0.3744427756006714;

		// fish
		const fish = new Fish(this, 130, 527);
		this.add.existing(fish);
		fish.scaleX = 0.1251661272554402;
		fish.scaleY = 0.1251661272554402;
		fish.body.collideWorldBounds = true;
		fish.body.onWorldBounds = true;

		// fish_1
		const fish_1 = new Fish(this, 705, 451);
		this.add.existing(fish_1);
		fish_1.scaleX = 0.1251661272554402;
		fish_1.scaleY = 0.1251661272554402;
		fish_1.body.collideWorldBounds = true;
		fish_1.body.onWorldBounds = true;

		// pillar1
		const pillar1 = this.physics.add.sprite(738, 606, "pillar");
		pillar1.scaleX = 0.3922288531779187;
		pillar1.scaleY = 0.3922288531779187;
		pillar1.body.pushable = false;
		pillar1.body.immovable = true;
		pillar1.body.setOffset(100, 0);
		pillar1.body.setSize(100, 600, false);

		// fish_2
		const fish_2 = new Fish(this, 180, 151);
		this.add.existing(fish_2);
		fish_2.scaleX = 0.12516612725544016;
		fish_2.scaleY = 0.12516612725544016;
		fish_2.body.collideWorldBounds = true;
		fish_2.body.onWorldBounds = true;

		// fish_3
		const fish_3 = new Fish(this, 245, 485);
		this.add.existing(fish_3);
		fish_3.scaleX = 0.1251661272554402;
		fish_3.scaleY = 0.1251661272554402;
		fish_3.body.collideWorldBounds = true;
		fish_3.body.onWorldBounds = true;

		// foreground_piece
		const foreground_piece = this.add.image(105, 682, "foreground_piece_03");
		foreground_piece.scaleX = 0.49512369428590813;
		foreground_piece.scaleY = 0.49512369428590813;

		// foreground_piece_1
		const foreground_piece_1 = this.add.image(703, 681, "foreground_piece_04");
		foreground_piece_1.scaleX = 0.44962537324938584;
		foreground_piece_1.scaleY = 0.44962537324938584;

		// fish_4
		const fish_4 = new Fish(this, 524, 543);
		this.add.existing(fish_4);
		fish_4.scaleX = 0.1251661272554402;
		fish_4.scaleY = 0.1251661272554402;
		fish_4.body.collideWorldBounds = true;
		fish_4.body.onWorldBounds = true;

		// fish_5
		const fish_5 = new Fish(this, 233, 176);
		this.add.existing(fish_5);
		fish_5.scaleX = 0.12516612725544118;
		fish_5.scaleY = 0.12516612725544118;
		fish_5.body.collideWorldBounds = true;
		fish_5.body.onWorldBounds = true;

		// fish_6
		const fish_6 = new Fish(this, 659, 365);
		this.add.existing(fish_6);
		fish_6.scaleX = 0.1251661272554402;
		fish_6.scaleY = 0.1251661272554402;
		fish_6.body.collideWorldBounds = true;
		fish_6.body.onWorldBounds = true;

		// fish_7
		const fish_7 = new Fish(this, 488, 239);
		this.add.existing(fish_7);
		fish_7.scaleX = 0.1251661272554402;
		fish_7.scaleY = 0.1251661272554402;
		fish_7.body.collideWorldBounds = true;
		fish_7.body.onWorldBounds = true;

		// foreground_piece_5
		const foreground_piece_5 = this.add.image(1539, 644, "foreground_piece_03");
		foreground_piece_5.scaleX = 0.435660119678413;
		foreground_piece_5.scaleY = 0.435660119678413;

		// fish_8
		const fish_8 = new Fish(this, 227, 208);
		this.add.existing(fish_8);
		fish_8.scaleX = 0.1251661272554402;
		fish_8.scaleY = 0.1251661272554402;
		fish_8.body.collideWorldBounds = true;
		fish_8.body.onWorldBounds = true;

		// background_piece
		const background_piece = this.add.image(2022, 592, "background_piece_07");
		background_piece.scaleX = 0.7175042291588758;
		background_piece.scaleY = 0.7175042291588758;
		background_piece.alpha = 0.4;
		background_piece.alphaTopLeft = 0.4;
		background_piece.alphaTopRight = 0.4;
		background_piece.alphaBottomLeft = 0.4;
		background_piece.alphaBottomRight = 0.4;

		// fish_9
		const fish_9 = new Fish(this, 153, 354);
		this.add.existing(fish_9);
		fish_9.scaleX = 0.12516612725544016;
		fish_9.scaleY = 0.12516612725544016;
		fish_9.body.collideWorldBounds = true;
		fish_9.body.onWorldBounds = true;

		// bottom
		const bottom = this.physics.add.sprite(1032, 687, "skirting_dark");
		bottom.scaleX = 5.382613563663951;
		bottom.scaleY = 0.5272402423947588;
		bottom.visible = false;
		bottom.body.pushable = false;
		bottom.body.immovable = true;
		bottom.body.setSize(500, 32, false);

		// foreground_piece_6
		const foreground_piece_6 = this.add.image(1841, 655, "foreground_piece_05");
		foreground_piece_6.scaleX = 0.3744427756006714;
		foreground_piece_6.scaleY = 0.3744427756006714;

		// pillar2
		const pillar2 = this.physics.add.sprite(1751, 561, "pillar");
		pillar2.scaleX = 0.35943323620172746;
		pillar2.scaleY = 0.35943323620172746;
		pillar2.body.pushable = false;
		pillar2.body.immovable = true;
		pillar2.body.setOffset(100, 0);
		pillar2.body.setSize(100, 600, false);

		// foreground_piece_3
		const foreground_piece_3 = this.add.image(397, 680, "foreground_piece_01");
		foreground_piece_3.scaleX = 0.2452858430064414;
		foreground_piece_3.scaleY = 0.2452858430064414;

		// foreground_piece_9
		const foreground_piece_9 = this.add.image(2194, 659, "foreground_piece_05");
		foreground_piece_9.scaleX = 0.4868846056533288;
		foreground_piece_9.scaleY = 0.4868846056533288;

		// catPlayer
		const catPlayer = new CatPlayer(this, 74, 99);
		this.add.existing(catPlayer);
		catPlayer.body.collideWorldBounds = true;
		catPlayer.body.onWorldBounds = true;

		// foreground_piece_2
		const foreground_piece_2 = this.add.image(1142, 702, "foreground_piece_05");
		foreground_piece_2.scaleX = 0.4868846056533288;
		foreground_piece_2.scaleY = 0.4868846056533288;

		// foreground_piece_4
		const foreground_piece_4 = this.add.image(1587, 681, "foreground_piece_04");
		foreground_piece_4.scaleX = 0.44962537324938584;
		foreground_piece_4.scaleY = 0.44962537324938584;

		// foreground_piece_7
		const foreground_piece_7 = this.add.image(1990, 690, "foreground_piece_03");
		foreground_piece_7.scaleX = 0.49512369428590813;
		foreground_piece_7.scaleY = 0.49512369428590813;

		// foreground_piece_8
		const foreground_piece_8 = this.add.image(2288, 712, "foreground_piece_05");
		foreground_piece_8.scaleX = 0.4868846056533288;
		foreground_piece_8.scaleY = 0.4868846056533288;

		// fish_10
		const fish_10 = new Fish(this, 1497, 310);
		this.add.existing(fish_10);
		fish_10.scaleX = 0.1251661272554402;
		fish_10.scaleY = 0.1251661272554402;
		fish_10.body.collideWorldBounds = true;
		fish_10.body.onWorldBounds = true;

		// fish_11
		const fish_11 = new Fish(this, 1626, 22);
		this.add.existing(fish_11);
		fish_11.scaleX = 0.1251661272554402;
		fish_11.scaleY = 0.1251661272554402;
		fish_11.body.collideWorldBounds = true;
		fish_11.body.onWorldBounds = true;

		// fish_12
		const fish_12 = new Fish(this, 1572, 547);
		this.add.existing(fish_12);
		fish_12.scaleX = 0.1251661272554402;
		fish_12.scaleY = 0.1251661272554402;
		fish_12.body.collideWorldBounds = true;
		fish_12.body.onWorldBounds = true;

		// fish_13
		const fish_13 = new Fish(this, 1636, 207);
		this.add.existing(fish_13);
		fish_13.scaleX = 0.1251661272554402;
		fish_13.scaleY = 0.1251661272554402;
		fish_13.body.collideWorldBounds = true;
		fish_13.body.onWorldBounds = true;

		// fish_14
		const fish_14 = new Fish(this, 1669.8010607384422, 376.1700836301729);
		this.add.existing(fish_14);
		fish_14.scaleX = 0.1251661272554402;
		fish_14.scaleY = 0.1251661272554402;
		fish_14.body.collideWorldBounds = true;
		fish_14.body.onWorldBounds = true;

		// fish_15
		const fish_15 = new Fish(this, 1183, 486);
		this.add.existing(fish_15);
		fish_15.scaleX = 0.1251661272554402;
		fish_15.scaleY = 0.1251661272554402;
		fish_15.body.collideWorldBounds = true;
		fish_15.body.onWorldBounds = true;

		// fish_16
		const fish_16 = new Fish(this, 973, 185);
		this.add.existing(fish_16);
		fish_16.scaleX = 0.1251661272554402;
		fish_16.scaleY = 0.1251661272554402;
		fish_16.body.collideWorldBounds = true;
		fish_16.body.onWorldBounds = true;

		// electricEel
		const electricEel = new ElectricEel(this, 1624, 582);
		this.add.existing(electricEel);
		electricEel.scaleX = 0.6378090794075928;
		electricEel.scaleY = 0.6378090794075928;

		// electricEel_1
		const electricEel_1 = new ElectricEel(this, 953, 64);
		this.add.existing(electricEel_1);
		electricEel_1.scaleX = 0.6378090794075928;
		electricEel_1.scaleY = 0.6378090794075928;

		// electricEel_2
		const electricEel_2 = new ElectricEel(this, 1883, 261);
		this.add.existing(electricEel_2);
		electricEel_2.scaleX = 0.6378090794075928;
		electricEel_2.scaleY = 0.6378090794075928;

		// yellyFish
		const yellyFish = new YellyFish(this, 1202, 248);
		this.add.existing(yellyFish);

		// yellyFish_1
		const yellyFish_1 = new YellyFish(this, 368, 561);
		this.add.existing(yellyFish_1);

		// yellyFish_2
		const yellyFish_2 = new YellyFish(this, 2142, 613);
		this.add.existing(yellyFish_2);

		// yellyFish_3
		const yellyFish_3 = new YellyFish(this, 2315, 115);
		this.add.existing(yellyFish_3);

		// yellyFish_4
		const yellyFish_4 = new YellyFish(this, 1378, 432);
		this.add.existing(yellyFish_4);

		// yellyFish_5
		const yellyFish_5 = new YellyFish(this, 441, 120);
		this.add.existing(yellyFish_5);

		// yellyFish_6
		const yellyFish_6 = new YellyFish(this, 89, 422);
		this.add.existing(yellyFish_6);

		// yellyFish_7
		const yellyFish_7 = new YellyFish(this, 2365, 369);
		this.add.existing(yellyFish_7);

		// yellyFish_8
		const yellyFish_8 = new YellyFish(this, 1609, 618);
		this.add.existing(yellyFish_8);

		// fish_17
		const fish_17 = new Fish(this, 1305, 109);
		this.add.existing(fish_17);
		fish_17.scaleX = 0.1251661272554402;
		fish_17.scaleY = 0.1251661272554402;
		fish_17.body.collideWorldBounds = true;
		fish_17.body.onWorldBounds = true;

		// fish_18
		const fish_18 = new Fish(this, 1026, 369);
		this.add.existing(fish_18);
		fish_18.scaleX = 0.1251661272554402;
		fish_18.scaleY = 0.1251661272554402;
		fish_18.body.collideWorldBounds = true;
		fish_18.body.onWorldBounds = true;

		// electricEel_3
		const electricEel_3 = new ElectricEel(this, 1847, 424);
		this.add.existing(electricEel_3);
		electricEel_3.scaleX = 0.6378090794075928;
		electricEel_3.scaleY = 0.6378090794075928;

		// electricEel (prefab fields)
		electricEel.Speed = 410;
		electricEel.distance = 4000;

		// electricEel_1 (prefab fields)
		electricEel_1.Speed = 400;
		electricEel_1.distance = 2400;

		// electricEel_2 (prefab fields)
		electricEel_2.Speed = 350;
		electricEel_2.distance = 4500;

		// electricEel_3 (prefab fields)
		electricEel_3.Speed = 400;
		electricEel_3.distance = 4000;

		this.rectangle3 = rectangle3;
		this.fish = fish;
		this.fish_1 = fish_1;
		this.pillar1 = pillar1;
		this.fish_2 = fish_2;
		this.fish_3 = fish_3;
		this.fish_4 = fish_4;
		this.fish_5 = fish_5;
		this.fish_6 = fish_6;
		this.fish_7 = fish_7;
		this.fish_8 = fish_8;
		this.fish_9 = fish_9;
		this.bottom = bottom;
		this.pillar2 = pillar2;
		this.catPlayer = catPlayer;
		this.fish_10 = fish_10;
		this.fish_11 = fish_11;
		this.fish_12 = fish_12;
		this.fish_13 = fish_13;
		this.fish_14 = fish_14;
		this.fish_15 = fish_15;
		this.fish_16 = fish_16;
		this.fish_17 = fish_17;
		this.fish_18 = fish_18;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle3;
	/** @type {Fish} */
	fish;
	/** @type {Fish} */
	fish_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	pillar1;
	/** @type {Fish} */
	fish_2;
	/** @type {Fish} */
	fish_3;
	/** @type {Fish} */
	fish_4;
	/** @type {Fish} */
	fish_5;
	/** @type {Fish} */
	fish_6;
	/** @type {Fish} */
	fish_7;
	/** @type {Fish} */
	fish_8;
	/** @type {Fish} */
	fish_9;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bottom;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	pillar2;
	/** @type {CatPlayer} */
	catPlayer;
	/** @type {Fish} */
	fish_10;
	/** @type {Fish} */
	fish_11;
	/** @type {Fish} */
	fish_12;
	/** @type {Fish} */
	fish_13;
	/** @type {Fish} */
	fish_14;
	/** @type {Fish} */
	fish_15;
	/** @type {Fish} */
	fish_16;
	/** @type {Fish} */
	fish_17;
	/** @type {Fish} */
	fish_18;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.Fishes=this.add.group();
		this.physics.world.setBounds(0, -100,2400, 1200);
		this.cameras.main.setBounds(0,-100,2400, 1200);
		this.UpdateGroup=this.add.group();
		this.WaveGroup=this.add.group();
		this.EelsGroup=this.add.group();
		this.BubbleGroup=this.add.group();
		this.YellyFishGroup=this.add.group();
		this.YellyFishGrouptentacles=this.add.group();

			this.goaltheme=this.sound.add('missiongoal');
			this.Yellytheme=this.sound.add('Yellybounce');

	this.cameras.main.setZoom(0.72);


		this.editorCreate();

fishicon=true;
this.Fishes.add(this.fish);
this.Fishes.add(this.fish_1);
this.Fishes.add(this.fish_2);
this.Fishes.add(this.fish_3);
this.Fishes.add(this.fish_4);
this.Fishes.add(this.fish_5);
this.Fishes.add(this.fish_6);
this.Fishes.add(this.fish_7);
this.Fishes.add(this.fish_8);
this.Fishes.add(this.fish_9);
this.Fishes.add(this.fish_10);
this.Fishes.add(this.fish_11);
this.Fishes.add(this.fish_12);
this.Fishes.add(this.fish_13);
this.Fishes.add(this.fish_14);
this.Fishes.add(this.fish_15);
this.Fishes.add(this.fish_16);
this.Fishes.add(this.fish_17);
this.Fishes.add(this.fish_18);

	this.ShowBubbles(2600);
MissionCount=19;
		this.physics.add.overlap(this.catPlayer,this.Fishes,this.EatFish,null,this);

		this.physics.add.overlap(this.catPlayer,this.EelsGroup,this.GetHit,null,this);
		this.physics.add.overlap(this.catPlayer,this.YellyFishGrouptentacles,this.GetHit,null,this);
		this.catPlayer.UnderWater=true;
		this.catPlayer.setGravityY(50);
		this.cameras.main.startFollow(this.catPlayer,false,500,0);
		this.physics.add.collider(this.catPlayer,this.bottom);
		this.physics.add.collider(this.catPlayer,this.pillar1);
		this.physics.add.collider(this.catPlayer,this.pillar2);

		this.physics.add.collider(this.catPlayer,this.YellyFishGroup,this.BounceCat,null,this);

		this.test();
	}

		EatFish(Cat,Mouse){

	if(Mouse){
	Mouse.destroy();
	MissionCount--;
	this.FishNumber++;
	this.mousecatchtheme.play();
			}

	if(MissionCount==0){
	
	ShowCompletetext=true;
	LevelFish3Clear=true;
	this.game.sound.stopAll();
	this.goaltheme.play();


							this.time.addEvent({ delay:1000, callback:() => {
	this.cameras.main.fadeOut(1000);

		this.time.addEvent({ delay:1000, callback:() => {
		//this.scenelevelheme.stop();

		this.scene.start('Level');	
		

				}, callbackScope: this,repeat:0});
						}, callbackScope: this,repeat:0});

	}
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
