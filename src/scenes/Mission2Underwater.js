//
// You can write more code here

/* START OF COMPILED CODE */

class Mission2Underwater extends BaseScene {

	constructor() {
		super("Mission2Underwater");

		/* START-USER-CTR-CODE */

		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// watewave
		const watewave = this.add.tileSprite(680, -248, 152, 4200, "water_02");
		watewave.scaleX = 0.15077399603207947;
		watewave.scaleY = 0.34572339883200687;
		watewave.angle = 90;
		watewave.alpha = 0.5;
		watewave.alphaTopLeft = 0.5;
		watewave.alphaTopRight = 0.5;
		watewave.alphaBottomLeft = 0.5;
		watewave.alphaBottomRight = 0.5;

		// seabed
		const seabed = this.add.nineslice(661, 327, "seabed", undefined, 2381, 1592, -6, 1, 59, 445);
		seabed.scaleX = 0.688764177657498;
		seabed.scaleY = 0.581901685798214;

		// rectangle3
		const rectangle3 = this.add.rectangle(725, 664, 128, 128);
		rectangle3.scaleX = 11.19455188188234;
		rectangle3.scaleY = 0.16124814136254448;
		rectangle3.visible = false;
		rectangle3.isFilled = true;
		rectangle3.fillColor = 11776889;

		// background_piece_04
		const background_piece_04 = this.add.image(796, 581, "background_piece_04");
		background_piece_04.scaleX = 0.7032001329507295;
		background_piece_04.scaleY = 0.7032001329507295;
		background_piece_04.alpha = 0.4;
		background_piece_04.alphaTopLeft = 0.4;
		background_piece_04.alphaTopRight = 0.4;
		background_piece_04.alphaBottomLeft = 0.4;
		background_piece_04.alphaBottomRight = 0.4;

		// background_piece_06
		const background_piece_06 = this.add.image(1246, 553, "background_piece_06");
		background_piece_06.scaleX = 0.35882011898718014;
		background_piece_06.scaleY = 0.35882011898718014;
		background_piece_06.alpha = 0.4;
		background_piece_06.alphaTopLeft = 0.4;
		background_piece_06.alphaTopRight = 0.4;
		background_piece_06.alphaBottomLeft = 0.4;
		background_piece_06.alphaBottomRight = 0.4;

		// background_piece_07
		const background_piece_07 = this.add.image(267, 595, "background_piece_07");
		background_piece_07.scaleX = 0.7175042291588758;
		background_piece_07.scaleY = 0.7175042291588758;
		background_piece_07.alpha = 0.4;
		background_piece_07.alphaTopLeft = 0.4;
		background_piece_07.alphaTopRight = 0.4;
		background_piece_07.alphaBottomLeft = 0.4;
		background_piece_07.alphaBottomRight = 0.4;

		// pillar
		const pillar = this.add.image(87, 500, "pillar");
		pillar.scaleX = 0.5889929424641701;
		pillar.scaleY = 0.5889929424641701;
		pillar.visible = false;

		// pillar_1
		const pillar_1 = this.add.image(1173, 550, "pillar");
		pillar_1.scaleX = 0.4236100329827226;
		pillar_1.scaleY = 0.4236100329827226;
		pillar_1.visible = false;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(717, -42, 1400, 20);
		rectangle_1.scaleY = 0.058959080772305605;
		rectangle_1.visible = false;
		rectangle_1.isFilled = true;

		// bottom
		const bottom = this.physics.add.sprite(569, 700, "skirting_dark");
		bottom.scaleX = 5.382613563663951;
		bottom.scaleY = 0.5272402423947588;
		bottom.visible = false;
		bottom.body.pushable = false;
		bottom.body.immovable = true;
		bottom.body.setSize(500, 32, false);

		// bottom_1
		const bottom_1 = this.physics.add.sprite(1429, 216, "skirting_dark");
		bottom_1.scaleX = 3.5098519006354274;
		bottom_1.scaleY = 0.47385031385472925;
		bottom_1.angle = 90;
		bottom_1.visible = false;
		bottom_1.body.pushable = false;
		bottom_1.body.immovable = true;
		bottom_1.body.setSize(500, 32, false);

		// bottom_2
		const bottom_2 = this.physics.add.sprite(6, 526, "skirting_dark");
		bottom_2.scaleX = 5.382613563663951;
		bottom_2.scaleY = 0.5272402423947588;
		bottom_2.angle = -90;
		bottom_2.visible = false;
		bottom_2.body.pushable = false;
		bottom_2.body.immovable = true;
		bottom_2.body.setSize(500, 32, false);

		// enddoor
		const enddoor = this.physics.add.sprite(589, -104, "skirting_dark");
		enddoor.scaleX = 5.382613563663951;
		enddoor.scaleY = 0.5272402423947588;
		enddoor.visible = false;
		enddoor.body.pushable = false;
		enddoor.body.immovable = true;
		enddoor.body.setSize(500, 32, false);

		// foreground_piece_01
		const foreground_piece_01 = this.add.image(-68, 625, "foreground_piece_01");
		foreground_piece_01.scaleX = 0.27497139796304504;
		foreground_piece_01.scaleY = 0.27497139796304504;

		// foreground_piece_02
		const foreground_piece_02 = this.add.image(191, 643, "foreground_piece_02");
		foreground_piece_02.scaleX = 0.3376959723010384;
		foreground_piece_02.scaleY = 0.3376959723010384;

		// foreground_piece_03
		const foreground_piece_03 = this.add.image(529, 652, "foreground_piece_03");
		foreground_piece_03.scaleX = 0.435660119678413;
		foreground_piece_03.scaleY = 0.435660119678413;

		// foreground_piece_04
		const foreground_piece_04 = this.add.image(1276, 642, "foreground_piece_04");
		foreground_piece_04.scaleX = 0.39405248053410225;
		foreground_piece_04.scaleY = 0.39405248053410225;

		// foreground_piece_05
		const foreground_piece_05 = this.add.image(919, 665, "foreground_piece_05");
		foreground_piece_05.scaleX = 0.3744427756006714;
		foreground_piece_05.scaleY = 0.3744427756006714;

		// catPlayer
		const catPlayer = new CatPlayer(this, 97, 16);
		this.add.existing(catPlayer);
		catPlayer.scaleX = 0.1566678798725213;
		catPlayer.scaleY = 0.1566678798725213;
		catPlayer.body.maxSpeed = 500;
		catPlayer.body.collideWorldBounds = true;
		catPlayer.body.setOffset(130, 50);
		catPlayer.body.setSize(340, 460, false);

		// foreground_piece
		const foreground_piece = this.add.image(195, 689, "foreground_piece_03");
		foreground_piece.scaleX = 0.49512369428590813;
		foreground_piece.scaleY = 0.49512369428590813;

		// foreground_piece_1
		const foreground_piece_1 = this.add.image(1104, 687, "foreground_piece_04");
		foreground_piece_1.scaleX = 0.44962537324938584;
		foreground_piece_1.scaleY = 0.44962537324938584;

		// foreground_piece_2
		const foreground_piece_2 = this.add.image(633, 705, "foreground_piece_05");
		foreground_piece_2.scaleX = 0.4868846056533288;
		foreground_piece_2.scaleY = 0.4868846056533288;

		// fish
		const fish = new Fish(this, 506, 274);
		this.add.existing(fish);
		fish.scaleX = 0.14186362814864467;
		fish.scaleY = 0.14186362814864467;
		fish.tintTopLeft = 16777215;
		fish.tintTopRight = 16777215;
		fish.tintBottomLeft = 16777215;
		fish.tintBottomRight = 16777215;
		fish.body.collideWorldBounds = true;
		fish.body.onWorldBounds = true;

		// fish_1
		const fish_1 = new Fish(this, 579, 382);
		this.add.existing(fish_1);
		fish_1.scaleX = 0.14186362814864467;
		fish_1.scaleY = 0.14186362814864467;
		fish_1.tintTopLeft = 16777215;
		fish_1.tintTopRight = 16777215;
		fish_1.tintBottomLeft = 16777215;
		fish_1.tintBottomRight = 16777215;
		fish_1.body.collideWorldBounds = true;
		fish_1.body.onWorldBounds = true;

		// fish_2
		const fish_2 = new Fish(this, 264, 154);
		this.add.existing(fish_2);
		fish_2.scaleX = 0.14186362814864448;
		fish_2.scaleY = 0.14186362814864448;
		fish_2.tintTopLeft = 16777215;
		fish_2.tintTopRight = 16777215;
		fish_2.tintBottomLeft = 16777215;
		fish_2.tintBottomRight = 16777215;
		fish_2.body.collideWorldBounds = true;
		fish_2.body.onWorldBounds = true;

		// fish_3
		const fish_3 = new Fish(this, 215, 422);
		this.add.existing(fish_3);
		fish_3.scaleX = 0.1418636281486446;
		fish_3.scaleY = 0.1418636281486446;
		fish_3.tintTopLeft = 16777215;
		fish_3.tintTopRight = 16777215;
		fish_3.tintBottomLeft = 16777215;
		fish_3.tintBottomRight = 16777215;
		fish_3.body.collideWorldBounds = true;
		fish_3.body.onWorldBounds = true;

		// fish_4
		const fish_4 = new Fish(this, 439, 571);
		this.add.existing(fish_4);
		fish_4.scaleX = 0.14186362814864467;
		fish_4.scaleY = 0.14186362814864467;
		fish_4.tintTopLeft = 16777215;
		fish_4.tintTopRight = 16777215;
		fish_4.tintBottomLeft = 16777215;
		fish_4.tintBottomRight = 16777215;
		fish_4.body.collideWorldBounds = true;
		fish_4.body.onWorldBounds = true;

		// fish_5
		const fish_5 = new Fish(this, 719, 590);
		this.add.existing(fish_5);
		fish_5.scaleX = 0.1418636281486457;
		fish_5.scaleY = 0.1418636281486457;
		fish_5.tintTopLeft = 16777215;
		fish_5.tintTopRight = 16777215;
		fish_5.tintBottomLeft = 16777215;
		fish_5.tintBottomRight = 16777215;
		fish_5.body.collideWorldBounds = true;
		fish_5.body.onWorldBounds = true;

		// fish_6
		const fish_6 = new Fish(this, 950, 196);
		this.add.existing(fish_6);
		fish_6.scaleX = 0.14186362814864467;
		fish_6.scaleY = 0.14186362814864467;
		fish_6.tintTopLeft = 16777215;
		fish_6.tintTopRight = 16777215;
		fish_6.tintBottomLeft = 16777215;
		fish_6.tintBottomRight = 16777215;
		fish_6.body.collideWorldBounds = true;
		fish_6.body.onWorldBounds = true;

		// fish_7
		const fish_7 = new Fish(this, 309, 489);
		this.add.existing(fish_7);
		fish_7.scaleX = 0.14186362814864467;
		fish_7.scaleY = 0.14186362814864467;
		fish_7.tintTopLeft = 16777215;
		fish_7.tintTopRight = 16777215;
		fish_7.tintBottomLeft = 16777215;
		fish_7.tintBottomRight = 16777215;
		fish_7.body.collideWorldBounds = true;
		fish_7.body.onWorldBounds = true;

		// fish_8
		const fish_8 = new Fish(this, 819, 380);
		this.add.existing(fish_8);
		fish_8.scaleX = 0.14186362814864467;
		fish_8.scaleY = 0.14186362814864467;
		fish_8.tintTopLeft = 16777215;
		fish_8.tintTopRight = 16777215;
		fish_8.tintBottomLeft = 16777215;
		fish_8.tintBottomRight = 16777215;
		fish_8.body.collideWorldBounds = true;
		fish_8.body.onWorldBounds = true;

		// electriceel1
		const electriceel1 = new ElectricEel(this, 1180, 71);
		this.add.existing(electriceel1);
		electriceel1.scaleX = 0.5726694265503376;
		electriceel1.scaleY = 0.5726694265503376;

		// electriceel2
		const electriceel2 = new ElectricEel(this, 535, 47);
		this.add.existing(electriceel2);
		electriceel2.scaleX = 0.5726694265503376;
		electriceel2.scaleY = 0.5726694265503376;

		// electriceel3
		const electriceel3 = new ElectricEel(this, 868, 272);
		this.add.existing(electriceel3);
		electriceel3.scaleX = 0.5726694265503376;
		electriceel3.scaleY = 0.5726694265503376;

		// electriceel4
		const electriceel4 = new ElectricEel(this, 1027, 448);
		this.add.existing(electriceel4);
		electriceel4.scaleX = 0.5726694265503376;
		electriceel4.scaleY = 0.5726694265503376;

		// fish_9
		const fish_9 = new Fish(this, 165, 319);
		this.add.existing(fish_9);
		fish_9.scaleX = 0.14186362814864456;
		fish_9.scaleY = 0.14186362814864456;
		fish_9.tintTopLeft = 16777215;
		fish_9.tintTopRight = 16777215;
		fish_9.tintBottomLeft = 16777215;
		fish_9.tintBottomRight = 16777215;
		fish_9.body.collideWorldBounds = true;
		fish_9.body.onWorldBounds = true;

		// electriceel5
		const electriceel5 = new ElectricEel(this, 509, 177);
		this.add.existing(electriceel5);
		electriceel5.scaleX = 0.5726694265503376;
		electriceel5.scaleY = 0.5726694265503376;

		// electriceel1 (prefab fields)
		electriceel1.Speed = 310;
		electriceel1.distance = 2100;

		// electriceel2 (prefab fields)
		electriceel2.Speed = 400;
		electriceel2.distance = 2300;

		// electriceel3 (prefab fields)
		electriceel3.Speed = 490;
		electriceel3.distance = 2700;

		// electriceel4 (prefab fields)
		electriceel4.Speed = 550;
		electriceel4.distance = 2500;

		// electriceel5 (prefab fields)
		electriceel5.Speed = 400;
		electriceel5.distance = 1528;

		this.watewave = watewave;
		this.rectangle3 = rectangle3;
		this.bottom = bottom;
		this.bottom_1 = bottom_1;
		this.bottom_2 = bottom_2;
		this.enddoor = enddoor;
		this.catPlayer = catPlayer;
		this.fish = fish;
		this.fish_1 = fish_1;
		this.fish_2 = fish_2;
		this.fish_3 = fish_3;
		this.fish_4 = fish_4;
		this.fish_5 = fish_5;
		this.fish_6 = fish_6;
		this.fish_7 = fish_7;
		this.fish_8 = fish_8;
		this.electriceel1 = electriceel1;
		this.electriceel2 = electriceel2;
		this.electriceel3 = electriceel3;
		this.electriceel4 = electriceel4;
		this.fish_9 = fish_9;
		this.electriceel5 = electriceel5;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	watewave;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bottom;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bottom_1;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	bottom_2;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	enddoor;
	/** @type {CatPlayer} */
	catPlayer;
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
	/** @type {ElectricEel} */
	electriceel1;
	/** @type {ElectricEel} */
	electriceel2;
	/** @type {ElectricEel} */
	electriceel3;
	/** @type {ElectricEel} */
	electriceel4;
	/** @type {Fish} */
	fish_9;
	/** @type {ElectricEel} */
	electriceel5;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.Fishes=this.add.group();
		this.EelsGroup=this.add.group();
		fishicon=true;
		this.FishNumber=0;

		this.physics.world.setBounds(0, -1600,1400, 3000);
		this.cameras.main.setBounds(0,-2900,1400, 3600);
		this.UpdateGroup=this.add.group();
		this.WaveGroup=this.add.group();
	this.cameras.main.setZoom(0.72);


		this.goaltheme=this.sound.add('missiongoal');
		this.BubbleGroup=this.add.group();


		this.editorCreate();

		this.EelsGroup.add(this.electriceel1.electriceelinside);
		this.EelsGroup.add(this.electriceel2.electriceelinside);
		this.EelsGroup.add(this.electriceel3.electriceelinside);
		this.EelsGroup.add(this.electriceel4.electriceelinside);
		this.EelsGroup.add(this.electriceel5.electriceelinside);

		console.log(' eelsgroup :'+this.EelsGroup.getLength()); 


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



	this.watewave.setCrop(-100,0,90,10000);
	MissionCount=this.Fishes.getLength();

	this.physics.add.overlap(this.catPlayer,this.Fishes,this.EatFish,null,this);
	this.physics.add.overlap(this.catPlayer,this.EelsGroup,this.GetHit,null,this);


		this.catPlayer.UnderWater=true;
			this.catPlayer.setGravityY(20);


this.ShowBubbles();
			this.physics.add.collider(this.catPlayer,this.bottom);
			this.physics.add.collider(this.catPlayer,this.enddoor);

		this.bottom.setDepth(5);


		this.test();

		//	this.test();	

	}

	TestOverlap(Cat,Eel){

	console.log('waaaaazaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
	}

	MoveSpikes(Object,Speed,ys,xs){

		this.physics.world.enable(Object);
		//Object.body.setVelocityX(Speed);
	//	this.WaveGroup.add(Object);
		this.RND=Phaser.Math.Between(0,800);
this.time.addEvent({ delay: this.RND, callback:() => {

		 this.tweenZzz=this.tweens.add({
            targets: Object,
         	y:ys,
			x:xs,
//flipX:true,
	 duration:Speed,
            ease: 'Sine.easeInOut',
           yoyo: true,
            repeat: -1,
        });

	}, callbackScope: this,repeat:0});

		}

ShowBubbles(){


this.time.addEvent({ delay: 1000, callback:() => {

	this.RNDX=Phaser.Math.Between(-300,1500);
this.RNDBubbel=Phaser.Math.Between(50,100);

this.Bubble=this.physics.add.sprite(this.RNDX, 800, "bubble-64px");
	this.Bubble.alpha=0.7;
this.Bubble.body.setGravityY(-50);	
	this.Bubble.setScale(this.RNDBubbel*0.01,this.RNDBubbel*0.01);	
	this.add.existing(this.Bubble);
	this.BubbleGroup.add(this.Bubble);

	}, callbackScope: this,repeat:-1});

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
		StartPosX=632;
		StartPosY=-70;

				}, callbackScope: this,repeat:0});
						}, callbackScope: this,repeat:0});



	}
		};


	MoveFish(Object,Speed){

		this.physics.world.enable(Object);
		Object.body.setVelocityX(Speed);
	//	this.WaveGroup.add(Object);
		this.RND=Phaser.Math.Between(0,2000);

this.time.addEvent({ delay: this.RND, callback:() => {

	this.time.addEvent({ delay:500, callback:() => {

		this.Direction=Phaser.Math.Between(0,10);
		console.log("Direcion Fish"+this.Direction);


	if(this.Direction>=6 || Object.body.y<0){
	Object.body.setVelocityY(40);


	}else if(this.Direction<=5 || Object.body.y>700){

	Object.body.setVelocityY(-40);

	} 



	}, callbackScope: this,repeat:-1});



		 this.tweenZzz=this.tweens.add({
            targets: Object,
         	x:'+=530',
flipX:true,
	 duration:2500,
            ease: 'Sine.easeInOut',
           yoyo: true,
            repeat: -1,
        });

	}, callbackScope: this,repeat:0});

		}

	update(){


if(ShowCompletetext){

			LevelFish1Clear=true;
		};


		this.watewave.tilePositionY+=2;

		this.WaveGroup.children.iterate(function(child){

			if(child.x>1500){
			child.x=0;
			}


 });

			this.UpdateGroup.children.iterate(function(child){

if(child){

	child.update();

};

  });

					this.BubbleGroup.children.iterate(function(child){

if(child){
if(child.y<-100){

	child.destroy();
	console.log('destroyed bubble');
}


};

  });

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
