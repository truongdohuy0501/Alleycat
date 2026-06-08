
// You can write more code here

/* START OF COMPILED CODE */

class Heart extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? -2, y ?? -7);

		// red
		const red = scene.physics.add.sprite(2, 6, "0-percent");
		red.scaleX = 0.2823104705149593;
		red.scaleY = 0.19874251301245344;
		red.body.checkCollision.down = false;
		red.body.checkCollision.left = false;
		red.body.checkCollision.right = false;
		red.body.pushable = false;
		red.body.immovable = true;
		red.body.setSize(256, 256, false);
		this.add(red);

		// red2
		const red2 = scene.physics.add.sprite(2, 6, "0-percent");
		red2.scaleX = 0.2823104705149593;
		red2.scaleY = 0.19874251301245344;
		red2.body.checkCollision.down = false;
		red2.body.checkCollision.left = false;
		red2.body.checkCollision.right = false;
		red2.body.pushable = false;
		red2.body.immovable = true;
		red2.body.setSize(256, 256, false);
		this.add(red2);

		this.red = red;
		this.red2 = red2;

		/* START-USER-CTR-CODE */



		this.scene.physics.world.enable(this);
		this.scene.LoveHeartsGroup.add(this.red2);
		this.scene.LoveHeartsGroupArrow.add(this);

		this.PauseHeart=false;

		this.RND=Phaser.Math.Between(0,10);

		if(this.RND<3){
		this.red2.setTexture("100-percent");
		}else{
		this.red2.setTexture("0-percent");
		}

		if(this.red2.texture.key=="100-percent"){
		this.red2.body.checkCollision.up = true;
		}else {

		this.red2.body.checkCollision.up = false;
		}

		//Object.body.setImmovable(true);
		//Object.body.checkCollision.down = false;
		//Object.body.checkCollision.left = false;
		//Object.body.checkCollision.right = false;

		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	red;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	red2;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
