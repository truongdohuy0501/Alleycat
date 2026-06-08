
// You can write more code here

/* START OF COMPILED CODE */

class SliceDevice extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 193.6895988437318, y ?? 2.0649418566283595);

		// ellipse_1
		const ellipse_1 = scene.add.ellipse(0.310401156268199, -1.0649418566283595, 128, 128);
		ellipse_1.scaleX = 0.32036764500616594;
		ellipse_1.scaleY = 0.32036764500616594;
		ellipse_1.isFilled = true;
		ellipse_1.fillColor = 1052174;
		this.add(ellipse_1);

		// chain
		const chain = scene.physics.add.sprite(1.310401156268199, -2.0649418566283595, "long_chain_piece");
		chain.scaleX = 0.24603159885332043;
		chain.scaleY = 0.24603159885332043;
		chain.angle = 68;
		chain.setOrigin(0.48982229381009734, 0.05748368981320933);
		chain.body.setSize(105, 200, false);
		this.add(chain);

		// swingblade
		const swingblade = scene.physics.add.sprite(-193.6895988437318, 84.93505814337163, "swinging_blade");
		swingblade.scaleX = 0.11739109441378799;
		swingblade.scaleY = 0.11739109441378799;
		swingblade.angle = 64;
		swingblade.setOrigin(0.5317156246806957, 0.364398246650568);
		swingblade.body.setOffset(300, 150);
		swingblade.body.setSize(600, 400, false);
		this.add(swingblade);

		this.chain = chain;
		this.swingblade = swingblade;

		/* START-USER-CTR-CODE */
this.circle2;


		this.RND=Phaser.Math.Between(0,1000);
			console.log('this.circle : ' + this.circle);


		this.scene.time.addEvent({ delay:200, callback:() => {

		if(this.circle==1){

	this.scene.time.addEvent({ delay:this.RND, callback:() => {

	var tween = this.scene.tweens.add({
    targets: this,
   // x: 1,
	angle:'-=120',
    ease: 'Quart.easeInOut',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
    duration: 1500,
    repeat: -1,            // -1: infinity
    yoyo: true,

    // interpolation: null,
});	

	}, callbackScope: this,repeat:0 });

		}

		else if(this.circle==0){

	this.scene.time.addEvent({ delay:this.RND, callback:() => {

	var tween = this.scene.tweens.add({
    targets: this,
   // x: 1,
	angle:'-=360',
    ease: 'ease',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
    duration: 2500,
    repeat: -1,            // -1: infinity
    yoyo: false,
    // interpolation: null,
});	
	}, callbackScope: this,repeat:0 });
		};

				}, callbackScope: this,repeat:0 });

		/* END-USER-CTR-CODE */

		// custom definition props
		this.circle = 1;
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	chain;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	swingblade;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
