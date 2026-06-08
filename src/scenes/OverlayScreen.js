var ShowCompletetext=false;
var MouseLevel1overlay;
var Streetoverlay;
var BirdCage1overlay;
var Spider1overlay;
var Rats1overlay;
var Love1overlay;
var Fish1Overlay;


//house2
var MouseLevel2overlay;
var	Up2LevelSpideroverlay;
var	BirdCage2overlay;
var Fish2Overlay;
var Rats2overlay;
var Love2overlay;

//House3

var MouseLevel3overlay;
var Up3LevelSpideroverlay;
	var BirdCage3overlay;
	var Fish3Overlay1;
	var Fish3Overlay2;
	var Rats3overlay;
	var Love3overlay;

//House4

var MouseLevel4overlay;
var Up4LevelSpideroverlay;
	var BirdCage4overlay;
	var Fish4Overlay1;
	var Fish4Overlay2;
	var Rats4overlay;
	var Love4overlay;

var fishicon=false;
var raticon=false;
var birdicon=false;
var mouseicon=false;
var spidericon=false;



var MissionCount=5;


// You can write more code here

/* START OF COMPILED CODE */

class OverlayScreen extends Phaser.Scene {

	constructor() {
		super("OverlayScreen");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// ellipse_1
		const ellipse_1 = this.add.rectangle(87, 53, 128, 128);
		ellipse_1.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		ellipse_1.scaleX = 0.8420969115069692;
		ellipse_1.scaleY = 0.2909264455958094;
		ellipse_1.visible = false;
		ellipse_1.isFilled = true;
		ellipse_1.fillColor = 1315346;
		ellipse_1.fillAlpha = 0.3;
		ellipse_1.isStroked = true;
		ellipse_1.strokeColor = 591880;

		// heart3
		const heart3 = this.add.image(53, 53, "100-percent");
		heart3.scaleX = 0.1406250016427852;
		heart3.scaleY = 0.1406250016427852;

		// heart1
		const heart1 = this.add.image(96, 53, "100-percent");
		heart1.scaleX = 0.1406250016427852;
		heart1.scaleY = 0.1406250016427852;

		// heart2
		const heart2 = this.add.image(139, 53, "100-percent");
		heart2.scaleX = 0.1406250016427852;
		heart2.scaleY = 0.1406250016427852;

		// redround
		const redround = this.add.image(881, 56, "meter_icon_holder_red");
		redround.scaleX = 0.06743051843931211;
		redround.scaleY = 0.06743051843931211;

		// completetext
		const completetext = this.add.text(225, 155, "", {});
		completetext.scaleX = 0.5590000013417582;
		completetext.scaleY = 0.5590000013417582;
		completetext.tintTopLeft = 4835045;
		completetext.tintTopRight = 9708323;
		completetext.tintBottomLeft = 5332190;
		completetext.tintBottomRight = 8832476;
		completetext.text = "Mission complete!";
		completetext.setStyle({ "align": "center", "backgroundColor": "#1d4e5a6e", "baselineX": 0, "baselineY": 0, "color": "#a2cfe8ff", "fixedWidth": 1000, "fixedHeight": 150, "fontFamily": "Goofy", "fontSize": "150px", "fontStyle": "bold", "stroke": "#121313ff", "strokeThickness": 6, "shadow.color": "#0000005e", "shadow.blur": 100, "shadow.stroke": true, "shadow.fill": true });
		completetext.setPadding({"top":-30});
		completetext.setWordWrapWidth(completetext.style.wordWrapWidth, true);

		// GameOverText
		const gameOverText = this.add.text(225, 155, "", {});
		gameOverText.scaleX = 0.5590000013417582;
		gameOverText.scaleY = 0.5590000013417582;
		gameOverText.visible = false;
		gameOverText.tintTopLeft = 4835045;
		gameOverText.tintTopRight = 9708323;
		gameOverText.tintBottomLeft = 5332190;
		gameOverText.tintBottomRight = 8832476;
		gameOverText.text = "Game Over";
		gameOverText.setStyle({ "align": "center", "backgroundColor": "#1d4e5a6e", "baselineX": 0, "baselineY": 0, "color": "#a2cfe8ff", "fixedWidth": 1000, "fixedHeight": 150, "fontFamily": "Goofy", "fontSize": "150px", "fontStyle": "bold", "stroke": "#121313ff", "strokeThickness": 6, "shadow.color": "#0000005e", "shadow.blur": 100, "shadow.stroke": true, "shadow.fill": true });
		gameOverText.setPadding({"top":-30});
		gameOverText.setWordWrapWidth(gameOverText.style.wordWrapWidth, true);

		// multiplication
		const multiplication = this.add.image(930, 54, "cross");
		multiplication.scaleX = 0.028729570739138326;
		multiplication.scaleY = 0.028729570739138326;

		// bird
		const bird = this.add.image(882, 54, "iconbird");
		bird.scaleX = 0.01951267241025338;
		bird.scaleY = 0.01951267241025338;
		bird.visible = false;

		// spider
		const spider = this.add.image(880, 55, "flowersbush");
		spider.scaleX = 0.05338256788947569;
		spider.scaleY = 0.05338256788947569;

		// fish
		const fish = this.add.image(881, 54, "__female_gambusia_swim_000");
		fish.scaleX = 0.06221102972315308;
		fish.scaleY = 0.06221102972315308;
		fish.visible = false;

		// rat
		const rat = this.add.image(879, 54, "__rat_idle_standing_000");
		rat.scaleX = 0.07892870875856689;
		rat.scaleY = 0.07892870875856689;
		rat.visible = false;

		// mouse
		const mouse = this.add.image(880, 52, "__grey_mouse_walk_000");
		mouse.scaleX = 0.07380588923631783;
		mouse.scaleY = 0.07380588923631783;
		mouse.visible = false;

		// preycount
		const preycount = this.add.text(960, 18, "", {});
		preycount.scaleX = 0.5321631911933176;
		preycount.scaleY = 0.5321631911933176;
		preycount.tintTopLeft = 855052;
		preycount.tintTopRight = 723466;
		preycount.tintBottomLeft = 1249553;
		preycount.tintBottomRight = 920845;
		preycount.text = "0";
		preycount.setStyle({ "fontFamily": "Goofy", "fontSize": "100px" });

		// ellipse
		const ellipse = this.add.rectangle(915, 54, 128, 128);
		ellipse.setInteractive(new Phaser.Geom.Rectangle(0, 0, 128, 128), Phaser.Geom.Rectangle.Contains);
		ellipse.scaleX = 1.1701900525795625;
		ellipse.scaleY = 0.3715406343221952;
		ellipse.visible = false;
		ellipse.isFilled = true;
		ellipse.fillColor = 4080756;
		ellipse.fillAlpha = 0.3;
		ellipse.isStroked = true;
		ellipse.strokeColor = 591880;

		this.heart3 = heart3;
		this.heart1 = heart1;
		this.heart2 = heart2;
		this.redround = redround;
		this.completetext = completetext;
		this.gameOverText = gameOverText;
		this.multiplication = multiplication;
		this.bird = bird;
		this.spider = spider;
		this.fish = fish;
		this.rat = rat;
		this.mouse = mouse;
		this.preycount = preycount;
		this.ellipse = ellipse;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	heart3;
	/** @type {Phaser.GameObjects.Image} */
	heart1;
	/** @type {Phaser.GameObjects.Image} */
	heart2;
	/** @type {Phaser.GameObjects.Image} */
	redround;
	/** @type {Phaser.GameObjects.Text} */
	completetext;
	/** @type {Phaser.GameObjects.Text} */
	gameOverText;
	/** @type {Phaser.GameObjects.Image} */
	multiplication;
	/** @type {Phaser.GameObjects.Image} */
	bird;
	/** @type {Phaser.GameObjects.Image} */
	spider;
	/** @type {Phaser.GameObjects.Image} */
	fish;
	/** @type {Phaser.GameObjects.Image} */
	rat;
	/** @type {Phaser.GameObjects.Image} */
	mouse;
	/** @type {Phaser.GameObjects.Text} */
	preycount;
	/** @type {Phaser.GameObjects.Rectangle} */
	ellipse;

	/* START-USER-CODE */

	// Write your code here
init(){

//House1

	MouseLevel1overlay=this.scene.get('MouseLevel0');
	BirdCage1overlay=this.scene.get('Mission1FreeTheBirds');
	Streetoverlay=this.scene.get('Level');
	Spider1overlay=this.scene.get('UpLevel1Spider');
	Rats1overlay=this.scene.get('Mission1Rats');
	Fish1Overlay=this.scene.get('Mission2Underwater');
	Love1overlay=this.scene.get('LoveRoom1');

//House2

	MouseLevel2overlay=this.scene.get('MouseLevel1');
	Up2LevelSpideroverlay=this.scene.get('UpLevel2Spider');
	BirdCage2overlay=this.scene.get('Mission2FreeTheBirds');
	Fish2Overlay=this.scene.get('Mission2UnderWater2');
	Rats2overlay=this.scene.get('Mission2Rats');
	Love2overlay=this.scene.get('LoveLevel2');

//House3

	MouseLevel3overlay=this.scene.get('MouseLevel2');
	Up3LevelSpideroverlay=this.scene.get('Up3LevelSpider');
	BirdCage3overlay=this.scene.get('Mission3FreeTheBirds');
	Fish3Overlay1=this.scene.get('Mission2FishBowl3');
	Fish3Overlay2=this.scene.get('Mission2UnderWater3');
	Rats3overlay=this.scene.get('Mission3Rats');
	Love3overlay=this.scene.get('LoveLevel3');

	//House4

	MouseLevel4overlay=this.scene.get('MouseLevel3');
	Up4LevelSpideroverlay=this.scene.get('Up4LevelSpider');
	BirdCage4overlay=this.scene.get('Mission4FreeTheBirds');
	Fish4Overlay1=this.scene.get('Mission2FishBowl4');
	Fish4Overlay2=this.scene.get('Mission2Underwater4');
	Rats4overlay=this.scene.get('Mission4Rats');
	Love4overlay=this.scene.get('LoveLevel4');
}

	create() {

		this.editorCreate();

		this.heart1.setDepth(100);
		this.heart2.setDepth(100);
		this.heart3.setDepth(100);

		Streetoverlay.events.on('updateLive', (Damage,Life) => {

		this.UpdateLives(Damage,Life);

		 });
//////FIRST HOUSES (1)

		MouseLevel1overlay.events.on('updateLive', (Damage,Life) => {

		this.UpdateLives(Damage,Life);

		 });

		BirdCage1overlay.events.on('updateLive', (Damage,Life) => {

		this.UpdateLives(Damage,Life);

		 });

		Spider1overlay.events.on('updateLive', (Damage,Life) => {

		this.UpdateLives(Damage,Life);

		 });

		Rats1overlay.events.on('updateLive', (Damage,Life) => {

		this.UpdateLives(Damage,Life);

		 });

		Fish1Overlay.events.on('updateLive', (Damage,Life) => {

		this.UpdateLives(Damage,Life);

		 });

		 	Love1overlay.events.on('updateLive', (Damage,Life) => {

		this.UpdateLives(Damage,Life);

		 });


	//House 2

		MouseLevel2overlay.events.on('updateLive', (Damage,Life) => {

		this.UpdateLives(Damage,Life);

		 });

		Up2LevelSpideroverlay.events.on('updateLive', (Damage,Life) => {

		this.UpdateLives(Damage,Life);

		 });

		BirdCage2overlay.events.on('updateLive', (Damage,Life) => {

		this.UpdateLives(Damage,Life);

		 });

		Fish2Overlay.events.on('updateLive', (Damage,Life) => {

		this.UpdateLives(Damage,Life);

		 });

		 Rats2overlay.events.on('updateLive', (Damage,Life) => {

		this.UpdateLives(Damage,Life);

		 });

		  Love2overlay.events.on('updateLive', (Damage,Life) => {

		this.UpdateLives(Damage,Life);

		 });



// House 3

	MouseLevel3overlay.events.on('updateLive', (Damage,Life) => {

		this.UpdateLives(Damage,Life);

		 });

		Up3LevelSpideroverlay.events.on('updateLive', (Damage,Life) => {

		this.UpdateLives(Damage,Life);

		 });

		BirdCage3overlay.events.on('updateLive', (Damage,Life) => {

		this.UpdateLives(Damage,Life);

		 });

		Fish3Overlay2.events.on('updateLive', (Damage,Life) => {

		this.UpdateLives(Damage,Life);

		 });

		 Fish3Overlay1.events.on('updateLive', (Damage,Life) => {

		this.UpdateLives(Damage,Life);

		 });

		 Rats3overlay.events.on('updateLive', (Damage,Life) => {

		this.UpdateLives(Damage,Life);

		 });

		  Love3overlay.events.on('updateLive', (Damage,Life) => {

		this.UpdateLives(Damage,Life);

		 });

//House 4
		MouseLevel4overlay.events.on('updateLive', (Damage,Life) => {

		this.UpdateLives(Damage,Life);

		 });

		Up4LevelSpideroverlay.events.on('updateLive', (Damage,Life) => {

		this.UpdateLives(Damage,Life);

		 });

		BirdCage4overlay.events.on('updateLive', (Damage,Life) => {

		this.UpdateLives(Damage,Life);

		 });

		Rats4overlay.events.on('updateLive', (Damage,Life) => {

		this.UpdateLives(Damage,Life);

		 });

		Love4overlay.events.on('updateLive', (Damage,Life) => {

		this.UpdateLives(Damage,Life);

		 });


		 Fish4Overlay2.events.on('updateLive', (Damage,Life) => {

		this.UpdateLives(Damage,Life);

		 });

		 Fish4Overlay1.events.on('updateLive', (Damage,Life) => {

		this.UpdateLives(Damage,Life);

		 });

		   Love4overlay.events.on('updateLive', (Damage,Life) => {

		this.UpdateLives(Damage,Life);

		 });


	}

		UpdateLives(Damage,Life){

			console.log("Cat's Life :"+Life);

			if(Life==2){
			this.heart2.visible=false;
			}

			else if(Life==1){
			this.heart1.visible=false;
			}

			else if(Life==0){
			this.heart3.visible=false;
			//	console.log('game over');

						//	this.LooseLifeRestart();




			}

		//	console.log("update liiiiiiiiiiiiiiiiiiiiiives!!!!!!!!!!!!!!!!!!!!!!!!");

}


	LooseLifeRestart(){

			this.time.addEvent({ delay:1000, callback:() => {
			this.scene.scene.cameras.main.fadeOut(700);

			this.time.addEvent({ delay:700, callback:() => {
		//this.scenelevelheme.stop();

		//	this.scene.scene.scene.stop('Level');	
			this.scene.start('Level');	

		//	this.scene.scene.scene.scene.bringToTop('OverlayScreen');
			OverlayLaunchOne=true;
				CatHearts=3;


				}, callbackScope: this,repeat:0});
						}, callbackScope: this,repeat:0});


	};

	SetToHide(){

		this.fish.visible=false;
		this.mouse.visible=false;
		this.rat.visible=false;
		this.bird.visible=false;
		this.spider.visible=false;
	}

	update(){

		this.preycount.text=MissionCount;

		if(raticon){
			this.rat.visible=true;
		}
		if(fishicon){
			this.fish.visible=true;
		}
		if(birdicon){

			this.bird.visible=true;
		}
		if(mouseicon){

			this.mouse.visible=true;
		}
		if(spidericon){

this.spider.visible=true;
		}

		if(raticon || fishicon || mouseicon || birdicon || spidericon){

this.redround.visible=true;
this.multiplication.visible=true;
this.ellipse.visible=false;
this.preycount.visible=true;

		}
		else{

this.redround.visible=false;
this.multiplication.visible=false;
this.ellipse.visible=false;
this.preycount.visible=false;

this.SetToHide();

		}

		if(CatLives<=0){
		console.log('showGAMeOverScreen');
			this.gameOverText.visible=true;
		}


	if(ShowCompletetext)
		{

		this.completetext.visible=true;		


		}

		else{
		this.completetext.visible=false;	
		}

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
