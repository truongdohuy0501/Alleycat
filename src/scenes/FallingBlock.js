
// You can write more code here

/* START OF COMPILED CODE */

class FallingBlock extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// rock
		const rock = scene.physics.add.sprite(0, 0, "swinging_spike_block");
		rock.scaleX = 0.14494827920503395;
		rock.scaleY = 0.14494827920503395;
		rock.body.setOffset(0, 100);
		rock.body.setSize(687, 500, false);
		this.add(rock);

		// stepblock
		const stepblock = scene.physics.add.sprite(-1, 9, "_MISSING");
		stepblock.scaleX = 2.046875000000001;
		stepblock.scaleY = 2.0625000000000013;
		stepblock.visible = false;
		stepblock.body.pushable = false;
		stepblock.body.immovable = true;
		stepblock.body.setSize(32, 32, false);
		this.add(stepblock);

		this.rock = rock;
		this.stepblock = stepblock;

		/* START-USER-CTR-CODE */

	this.scene.UpdateGroup.add(this);
		this.stopkaboom=true;
		this.scene.physics.world.enable(this);
		this.body.setOffset(-50,-15);


		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	rock;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	stepblock;

	/* START-USER-CODE */
create(){


}

	update(){

				if(Math.abs(this.x-this.scene.catPlayer.x)<100 && (this.scene.catPlayer.y>this.y) && (this.scene.catPlayer.y-this.y)<500){

					this.body.setGravityY(1000);
				}



	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
