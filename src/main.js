


window.addEventListener('load', function () {


//import CrtFilterPlugin from '/lib/camera-filter.js';


	var game = new Phaser.Game({
		type: Phaser.AUTO,
		width: 1031,
		height: 580,
		fixedTimestep: true,
		antialias: true,
		roundPixels: true,
		backgroundColor: "#242424",
		physics: {
			default: 'arcade',
			arcade: {
				gravity: { y: 0 },
				debug: false,
			}
		},
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH,
		},
		input: {
			activePointers: 3,
		},
		audio: {
			disableWebAudio: false,
		},
	});

	window.game = game;

	if (window.initTouchControls) {
		window.initTouchControls(game);
	}

		game.scene.add("BaseScene", BaseScene);

	game.scene.add("Preload", Preload);

	
	game.scene.add("Level", Level);
	game.scene.add("Boot", Boot, true);
	
	game.scene.add("Mission1FreeTheBirds", Mission1FreeTheBirds);
	game.scene.add("Mission2FreeTheBirds", Mission2FreeTheBirds);
	game.scene.add("Mission3FreeTheBirds", Mission3FreeTheBirds);

	game.scene.add("Mission4FreeTheBirds", Mission4FreeTheBirds);
	
	game.scene.add("Mission5FreeTheBirds", Mission5FreeTheBirds);

	game.scene.add("Mission2FishBowl", Mission2FishBowl);
	game.scene.add("Mission2Underwater", Mission2Underwater);
	
	game.scene.add("Mission2FishBowl2", Mission2FishBowl2);
	game.scene.add("Mission2UnderWater2", Mission2UnderWater2);
	
	game.scene.add("Mission2FishBowl3", Mission2FishBowl3);
	game.scene.add("Mission2UnderWater3", Mission2UnderWater3);
	
	game.scene.add("Mission2FishBowl4", Mission2FishBowl4);
	game.scene.add("Mission2Underwater4", Mission2Underwater4);
	
	game.scene.add("Mission2FishBowl5", Mission2FishBowl5);
	game.scene.add("Mission2Underwater5", Mission2Underwater5);

	game.scene.add("OverlayScreen", OverlayScreen);
	
	game.scene.add("MouseLevel0", MouseLevel0);
	game.scene.add("MouseLevel1", MouseLevel1);
	game.scene.add("MouseLevel2", MouseLevel2);
	game.scene.add("MouseLevel3", MouseLevel3);
	game.scene.add("MouseLevel4", MouseLevel4);
	
	game.scene.add("UpLevel1Spider",UpLevel1Spider);
	game.scene.add("UpLevel2Spider",UpLevel2Spider);
	game.scene.add("Up3LevelSpider",Up3LevelSpider);
	game.scene.add("Up4LevelSpider",Up4LevelSpider);
	game.scene.add("Up5LevelSpider",Up5LevelSpider);
	
	game.scene.add("Mission1Rats", Mission1Rats);
	game.scene.add("Mission2Rats", Mission2Rats);
	game.scene.add("Mission3Rats", Mission3Rats);
	game.scene.add("Mission4Rats", Mission4Rats);	
	game.scene.add("Mission5Rats", Mission5Rats);
	
	game.scene.add("LoveRoom1", LoveRoom1);
	game.scene.add("LoveLevel2", LoveLevel2);
	game.scene.add("LoveLevel3", LoveLevel3);
	game.scene.add("LoveLevel4", LoveLevel4);

	game.scene.add("StartMenuScreen", StartMenuScreen);
	
		
});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/preload-asset-pack.json");
	}

	create() {

		this.scene.start("Preload");
	}
}