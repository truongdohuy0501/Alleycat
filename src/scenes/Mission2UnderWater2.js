
// You can write more code here

/* START OF COMPILED CODE */

class Mission2UnderWater2 extends BaseScene {

	constructor() {
		super("Mission2UnderWater2");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// seabed
		const seabed = this.add.nineslice(626, 307, "seabed", undefined, 2381, 1592, -6, 1, 59, 445);
		seabed.scaleX = 0.688764177657498;
		seabed.scaleY = 0.581901685798214;

		// rectangle3
		const rectangle3 = this.add.rectangle(690, 644, 128, 128);
		rectangle3.scaleX = 11.19455188188234;
		rectangle3.scaleY = 0.16124814136254448;
		rectangle3.visible = false;
		rectangle3.isFilled = true;
		rectangle3.fillColor = 11776889;

		// background_piece_04
		const background_piece_04 = this.add.image(761, 561, "background_piece_04");
		background_piece_04.scaleX = 0.7032001329507295;
		background_piece_04.scaleY = 0.7032001329507295;
		background_piece_04.alpha = 0.4;
		background_piece_04.alphaTopLeft = 0.4;
		background_piece_04.alphaTopRight = 0.4;
		background_piece_04.alphaBottomLeft = 0.4;
		background_piece_04.alphaBottomRight = 0.4;

		// background_piece_06
		const background_piece_06 = this.add.image(1211, 533, "background_piece_06");
		background_piece_06.scaleX = 0.35882011898718014;
		background_piece_06.scaleY = 0.35882011898718014;
		background_piece_06.alpha = 0.4;
		background_piece_06.alphaTopLeft = 0.4;
		background_piece_06.alphaTopRight = 0.4;
		background_piece_06.alphaBottomLeft = 0.4;
		background_piece_06.alphaBottomRight = 0.4;

		// background_piece_07
		const background_piece_07 = this.add.image(232, 575, "background_piece_07");
		background_piece_07.scaleX = 0.7175042291588758;
		background_piece_07.scaleY = 0.7175042291588758;
		background_piece_07.alpha = 0.4;
		background_piece_07.alphaTopLeft = 0.4;
		background_piece_07.alphaTopRight = 0.4;
		background_piece_07.alphaBottomLeft = 0.4;
		background_piece_07.alphaBottomRight = 0.4;

		// pillar
		const pillar = this.add.image(52, 480, "pillar");
		pillar.scaleX = 0.5889929424641701;
		pillar.scaleY = 0.5889929424641701;
		pillar.visible = false;

		// pillar_1
		const pillar_1 = this.add.image(1138, 530, "pillar");
		pillar_1.scaleX = 0.4236100329827226;
		pillar_1.scaleY = 0.4236100329827226;
		pillar_1.visible = false;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(682, -62, 1400, 20);
		rectangle_1.scaleY = 0.058959080772305605;
		rectangle_1.visible = false;
		rectangle_1.isFilled = true;

		// foreground_piece_01
		const foreground_piece_01 = this.add.image(-103, 605, "foreground_piece_01");
		foreground_piece_01.scaleX = 0.27497139796304504;
		foreground_piece_01.scaleY = 0.27497139796304504;

		// foreground_piece_02
		const foreground_piece_02 = this.add.image(156, 623, "foreground_piece_02");
		foreground_piece_02.scaleX = 0.3376959723010384;
		foreground_piece_02.scaleY = 0.3376959723010384;

		// foreground_piece_03
		const foreground_piece_03 = this.add.image(494, 632, "foreground_piece_03");
		foreground_piece_03.scaleX = 0.435660119678413;
		foreground_piece_03.scaleY = 0.435660119678413;

		// foreground_piece_04
		const foreground_piece_04 = this.add.image(1241, 622, "foreground_piece_04");
		foreground_piece_04.scaleX = 0.39405248053410225;
		foreground_piece_04.scaleY = 0.39405248053410225;

		// foreground_piece_05
		const foreground_piece_05 = this.add.image(884, 645, "foreground_piece_05");
		foreground_piece_05.scaleX = 0.3744427756006714;
		foreground_piece_05.scaleY = 0.3744427756006714;

		// fish
		const fish = new Fish(this, 179, 539);
		this.add.existing(fish);
		fish.scaleX = 0.13758702920787746;
		fish.scaleY = 0.13758702920787746;
		fish.body.collideWorldBounds = true;
		fish.body.onWorldBounds = true;

		// fish_1
		const fish_1 = new Fish(this, 754, 434);
		this.add.existing(fish_1);
		fish_1.scaleX = 0.13758702920787746;
		fish_1.scaleY = 0.13758702920787746;
		fish_1.body.collideWorldBounds = true;
		fish_1.body.onWorldBounds = true;

		// fish_2
		const fish_2 = new Fish(this, 229, 134);
		this.add.existing(fish_2);
		fish_2.scaleX = 0.1375870292078774;
		fish_2.scaleY = 0.1375870292078774;
		fish_2.body.collideWorldBounds = true;
		fish_2.body.onWorldBounds = true;

		// fish_3
		const fish_3 = new Fish(this, 294, 468);
		this.add.existing(fish_3);
		fish_3.scaleX = 0.13758702920787746;
		fish_3.scaleY = 0.13758702920787746;
		fish_3.body.collideWorldBounds = true;
		fish_3.body.onWorldBounds = true;

		// fish_4
		const fish_4 = new Fish(this, 573, 526);
		this.add.existing(fish_4);
		fish_4.scaleX = 0.13758702920787746;
		fish_4.scaleY = 0.13758702920787746;
		fish_4.body.collideWorldBounds = true;
		fish_4.body.onWorldBounds = true;

		// fish_5
		const fish_5 = new Fish(this, 282, 159);
		this.add.existing(fish_5);
		fish_5.scaleX = 0.13758702920787855;
		fish_5.scaleY = 0.13758702920787855;
		fish_5.body.collideWorldBounds = true;
		fish_5.body.onWorldBounds = true;

		// fish_6
		const fish_6 = new Fish(this, 708, 348);
		this.add.existing(fish_6);
		fish_6.scaleX = 0.13758702920787746;
		fish_6.scaleY = 0.13758702920787746;
		fish_6.body.collideWorldBounds = true;
		fish_6.body.onWorldBounds = true;

		// fish_7
		const fish_7 = new Fish(this, 537, 222);
		this.add.existing(fish_7);
		fish_7.scaleX = 0.13758702920787746;
		fish_7.scaleY = 0.13758702920787746;
		fish_7.body.collideWorldBounds = true;
		fish_7.body.onWorldBounds = true;

		// fish_8
		const fish_8 = new Fish(this, 276, 191);
		this.add.existing(fish_8);
		fish_8.scaleX = 0.13758702920787746;
		fish_8.scaleY = 0.13758702920787746;
		fish_8.body.collideWorldBounds = true;
		fish_8.body.onWorldBounds = true;

		// fish_9
		const fish_9 = new Fish(this, 202, 337);
		this.add.existing(fish_9);
		fish_9.scaleX = 0.1375870292078774;
		fish_9.scaleY = 0.1375870292078774;
		fish_9.body.collideWorldBounds = true;
		fish_9.body.onWorldBounds = true;

		// bottom
		const bottom = this.physics.add.sprite(700, 687, "skirting_dark");
		bottom.scaleX = 5.382613563663951;
		bottom.scaleY = 0.5272402423947588;
		bottom.visible = false;
		bottom.body.pushable = false;
		bottom.body.immovable = true;
		bottom.body.setSize(500, 32, false);

		// catPlayer
		const catPlayer = new CatPlayer(this, 99, 91);
		this.add.existing(catPlayer);
		catPlayer.body.collideWorldBounds = true;
		catPlayer.body.onWorldBounds = true;

		// foreground_piece_2
		const foreground_piece_2 = this.add.image(1191, 685, "foreground_piece_05");
		foreground_piece_2.scaleX = 0.4868846056533288;
		foreground_piece_2.scaleY = 0.4868846056533288;

		// foreground_piece_3
		const foreground_piece_3 = this.add.image(45, 652, "foreground_piece_01");
		foreground_piece_3.scaleX = 0.2452858430064414;
		foreground_piece_3.scaleY = 0.2452858430064414;

		// foreground_piece
		const foreground_piece = this.add.image(323, 668, "foreground_piece_03");
		foreground_piece.scaleX = 0.49512369428590813;
		foreground_piece.scaleY = 0.49512369428590813;

		// foreground_piece_1
		const foreground_piece_1 = this.add.image(752, 664, "foreground_piece_04");
		foreground_piece_1.scaleX = 0.44962537324938584;
		foreground_piece_1.scaleY = 0.44962537324938584;

		// yellyFish
		const yellyFish = new YellyFish(this, 333, 243);
		this.add.existing(yellyFish);
		yellyFish.scaleX = 0.9374012845760028;
		yellyFish.scaleY = 0.9374012845760028;

		// yellyFish_1
		const yellyFish_1 = new YellyFish(this, 849, 120);
		this.add.existing(yellyFish_1);
		yellyFish_1.scaleX = 0.937401284578668;
		yellyFish_1.scaleY = 0.937401284578668;

		// yellyFish_2
		const yellyFish_2 = new YellyFish(this, 207, 368);
		this.add.existing(yellyFish_2);
		yellyFish_2.scaleX = 0.9374012845770918;
		yellyFish_2.scaleY = 0.9374012845770918;

		// yellyFish_3
		const yellyFish_3 = new YellyFish(this, 476, 130);
		this.add.existing(yellyFish_3);
		yellyFish_3.scaleX = 0.9374012845790758;
		yellyFish_3.scaleY = 0.9374012845790758;

		// yellyFish_4
		const yellyFish_4 = new YellyFish(this, 537, 397);
		this.add.existing(yellyFish_4);
		yellyFish_4.scaleX = 0.9374012845808952;
		yellyFish_4.scaleY = 0.9374012845808952;

		// yellyFish_5
		const yellyFish_5 = new YellyFish(this, 382, 527);
		this.add.existing(yellyFish_5);
		yellyFish_5.scaleX = 0.9374012845807078;
		yellyFish_5.scaleY = 0.9374012845807078;

		// yellyFish_6
		const yellyFish_6 = new YellyFish(this, 1060, 421);
		this.add.existing(yellyFish_6);
		yellyFish_6.scaleX = 0.9374012845778539;
		yellyFish_6.scaleY = 0.9374012845778539;

		// yellyFish_7
		const yellyFish_7 = new YellyFish(this, 685, 433);
		this.add.existing(yellyFish_7);
		yellyFish_7.scaleX = 0.9374012845766853;
		yellyFish_7.scaleY = 0.9374012845766853;

		// yellyFish_8
		const yellyFish_8 = new YellyFish(this, 848, 540);
		this.add.existing(yellyFish_8);
		yellyFish_8.scaleX = 0.9374012845780011;
		yellyFish_8.scaleY = 0.9374012845780011;

		// yellyFish_9
		const yellyFish_9 = new YellyFish(this, 907, 305);
		this.add.existing(yellyFish_9);
		yellyFish_9.scaleX = 0.9374012845766575;
		yellyFish_9.scaleY = 0.9374012845766575;

		// yellyFish_10
		const yellyFish_10 = new YellyFish(this, 206, 588);
		this.add.existing(yellyFish_10);
		yellyFish_10.scaleX = 0.9374012845769757;
		yellyFish_10.scaleY = 0.9374012845769757;

		// yellyFish_11
		const yellyFish_11 = new YellyFish(this, 165, 138);
		this.add.existing(yellyFish_11);
		yellyFish_11.scaleX = 0.9374012845805878;
		yellyFish_11.scaleY = 0.9374012845805878;

		// yellyFish_12
		const yellyFish_12 = new YellyFish(this, 1146, 568);
		this.add.existing(yellyFish_12);
		yellyFish_12.scaleX = 0.9374012845760709;
		yellyFish_12.scaleY = 0.9374012845760709;

		// yellyFish_13
		const yellyFish_13 = new YellyFish(this, 1195, 169);
		this.add.existing(yellyFish_13);
		yellyFish_13.scaleX = 0.9374012845769615;
		yellyFish_13.scaleY = 0.9374012845769615;

		// yellyFish_14
		const yellyFish_14 = new YellyFish(this, 1212, 400);
		this.add.existing(yellyFish_14);
		yellyFish_14.scaleX = 0.9374012845781199;
		yellyFish_14.scaleY = 0.9374012845781199;

		// yellyFish_15
		const yellyFish_15 = new YellyFish(this, 1199, 252);
		this.add.existing(yellyFish_15);
		yellyFish_15.scaleX = 0.9374012845775024;
		yellyFish_15.scaleY = 0.9374012845775024;

		// electricEel
		const electricEel = new ElectricEel(this, 960, 505);
		this.add.existing(electricEel);
		electricEel.scaleX = 0.5731742305944492;
		electricEel.scaleY = 0.5731742305944492;

		// electricEel_1
		const electricEel_1 = new ElectricEel(this, 987, 110);
		this.add.existing(electricEel_1);
		electricEel_1.scaleX = 0.5731742305944492;
		electricEel_1.scaleY = 0.5731742305944492;

		// yellyFish_16
		const yellyFish_16 = new YellyFish(this, 732, 232);
		this.add.existing(yellyFish_16);
		yellyFish_16.scaleX = 0.9374012845781168;
		yellyFish_16.scaleY = 0.9374012845781168;

		// yellyFish_17
		const yellyFish_17 = new YellyFish(this, 965, 621);
		this.add.existing(yellyFish_17);
		yellyFish_17.scaleX = 0.9374012845762181;
		yellyFish_17.scaleY = 0.9374012845762181;

		// electricEel_2
		const electricEel_2 = new ElectricEel(this, 1075, 313);
		this.add.existing(electricEel_2);
		electricEel_2.scaleX = 0.5731742305944492;
		electricEel_2.scaleY = 0.5731742305944492;

		// fish10
		const fish10 = new Fish(this, 248, 263);
		this.add.existing(fish10);
		fish10.scaleX = 0.13758702920787746;
		fish10.scaleY = 0.13758702920787746;
		fish10.body.collideWorldBounds = true;
		fish10.body.onWorldBounds = true;

		// fish11
		const fish11 = new Fish(this, 858.5538441095468, 567.7338566925399);
		this.add.existing(fish11);
		fish11.scaleX = 0.13758702920787746;
		fish11.scaleY = 0.13758702920787746;
		fish11.body.collideWorldBounds = true;
		fish11.body.onWorldBounds = true;

		// electricEel (prefab fields)
		electricEel.Speed = 400;
		electricEel.distance = 4000;

		// electricEel_1 (prefab fields)
		electricEel_1.Speed = 420;
		electricEel_1.distance = 3900;

		// electricEel_2 (prefab fields)
		electricEel_2.Speed = 500;
		electricEel_2.distance = 3000;

		this.rectangle3 = rectangle3;
		this.fish = fish;
		this.fish_1 = fish_1;
		this.fish_2 = fish_2;
		this.fish_3 = fish_3;
		this.fish_4 = fish_4;
		this.fish_5 = fish_5;
		this.fish_6 = fish_6;
		this.fish_7 = fish_7;
		this.fish_8 = fish_8;
		this.fish_9 = fish_9;
		this.bottom = bottom;
		this.catPlayer = catPlayer;
		this.electricEel = electricEel;
		this.electricEel_1 = electricEel_1;
		this.electricEel_2 = electricEel_2;
		this.fish10 = fish10;
		this.fish11 = fish11;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle3;
	/** @type {Fish} */
	fish;
	/** @type {Fish} */
	fish_1;
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
	/** @type {CatPlayer} */
	catPlayer;
	/** @type {ElectricEel} */
	electricEel;
	/** @type {ElectricEel} */
	electricEel_1;
	/** @type {ElectricEel} */
	electricEel_2;
	/** @type {Fish} */
	fish10;
	/** @type {Fish} */
	fish11;

	/* START-USER-CODE */

	// Write your code here

	create() {

		StartPosX=2093;
		StartPosY=386;


		this.Fishes=this.add.group();
		this.EelsGroup=this.add.group();

		this.physics.world.setBounds(0, -100,1400, 800);
		this.cameras.main.setBounds(0,-100,1400, 800);
		this.UpdateGroup=this.add.group();
		this.WaveGroup=this.add.group();
		this.BubbleGroup=this.add.group();
		this.YellyFishGrouptentacles=this.add.group();

		this.goaltheme=this.sound.add('missiongoal');


MissionCount=12;
		this.EelsGroup=this.add.group();
		fishicon=true;
		this.cameras.main.setZoom(0.72);
		this.YellyFishGroup=this.add.group();

		this.Yellytheme=this.sound.add('Yellybounce');
		this.editorCreate();



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
this.Fishes.add(this.fish10);
this.Fishes.add(this.fish11);

		this.physics.add.overlap(this.catPlayer,this.Fishes,this.EatFish,null,this);

		this.physics.add.collider(this.catPlayer,this.YellyFishGroup,this.BounceCat,null,this);

		

this.physics.add.overlap(this.catPlayer,this.YellyFishGrouptentacles,this.GetHit,null,this);
this.physics.add.overlap(this.catPlayer,this.EelsGroup,this.GetHit,null,this);

		this.catPlayer.UnderWater=true;
		this.catPlayer.setGravityY(20);
		this.ShowBubbles();


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
	LevelFish1Clear=true;
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


	BounceCat(Cat,Yelly){

		if(Cat.body.touching.down || Cat.body.blocked.down && (Yelly.body.touching.up || Yelly.body.blocked.up)){
this.Yellytheme.play();
Cat.body.setVelocityY(-150);
//Yelly.body.setVelocityY(150);

		}



	}

	update(){

		if(ShowCompletetext){

			LevelFish2Clear=true;
		};


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
