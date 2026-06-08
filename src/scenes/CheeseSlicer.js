
// You can write more code here

/* START OF COMPILED CODE */

class CheeseSlicer extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// cheese_knife
		const cheese_knife = scene.physics.add.sprite(0, 1, "cheese_knife_01");
		cheese_knife.scaleX = 0.37501520831135293;
		cheese_knife.scaleY = 0.37501520831135293;
		cheese_knife.angle = 60;
		cheese_knife.setOrigin(0.5000000000000002, 0.10257868276105114);
		cheese_knife.body.setSize(507, 576, false);
		this.add(cheese_knife);

		// holeslice
		const holeslice = scene.physics.add.sprite(-126.99999999999999, 87.99999999999997, "ball");
		holeslice.setInteractive(new Phaser.Geom.Rectangle(-50, 0, 300, 300), Phaser.Geom.Rectangle.Contains);
		holeslice.scaleX = 0.4260179189796247;
		holeslice.scaleY = 0.4260179189796247;
		holeslice.angle = -41;
		holeslice.setOrigin(0.4972804407358764, 0.5390724978063921);
		holeslice.visible = false;
		holeslice.alpha = 0.4;
		holeslice.body.setSize(160, 100, false);
		this.add(holeslice);

		this.cheese_knife = cheese_knife;
		this.holeslice = holeslice;

		/* START-USER-CTR-CODE */
	this.scene.EnemyGroup.add(this.holeslice);
		this.RND=Phaser.Math.Between(0,1000);
	this.scene.time.addEvent({ delay:this.RND, callback:() => {

		var tween = this.scene.tweens.add({
    targets: this,
   // x: 1,
	angle:'-=360',
    ease: 'ease',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
    duration: 2100,
    repeat: -1,            // -1: infinity
    yoyo: false,

    // interpolation: null,
});	

	}, callbackScope: this,repeat:0 });




		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	cheese_knife;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	holeslice;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
