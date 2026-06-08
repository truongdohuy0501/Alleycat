
// You can write more code here

/* START OF COMPILED CODE */

class HeartPlatform extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 7.988902553971524);

		this.scaleX = 0.6859590093117656;
		this.scaleY = 0.6859590093117656;

		// rectangle_1
		const rectangle_1 = scene.add.rectangle(1157, 2, 128, 128);
		rectangle_1.scaleX = 20.37821546699635;
		rectangle_1.scaleY = 0.6780277062421887;
		rectangle_1.visible = false;
		rectangle_1.isFilled = true;
		this.add(rectangle_1);
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
this.AllRedHearts=true;


		/* END-USER-CTR-CODE */

		// custom definition props
		this.AllHearts = false;
	}

	/* START-USER-CODE */



awake(){

	if(this.active){
console.log('test fffffffffffffffffffffffffffffffff');


			this.scene.physics.world.enable(this);



	for(var i=0; i<20;i++){

this.Heart = new Heart(this.scene, 0+100*i, 0).setScale(1.18,1.18);
			if(this.AllHearts){
				console.log('setTexture 100 percent');
		this.Heart.red2.setTexture('100-percent');
					this.Heart.red2.body.checkCollision.up = true;

		}
		this.add(this.Heart);

	}
	}
}




	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
