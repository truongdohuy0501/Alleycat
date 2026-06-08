
// You can write more code here
var SpeedPirana=-210;
/* START OF COMPILED CODE */

class Pirana extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "__piranha_swim_000", frame);

		this.scaleX = 0.2538837055167929;
		this.scaleY = 0.2538837055167929;
		scene.physics.add.existing(this, false);
		this.body.collideWorldBounds = true;
		this.body.setSize(681, 478, false);

		/* START-USER-CTR-CODE */

		this.scene.UpdateGroup.add(this);
		this.play("PiranaSwim");

		this.body.setVelocityX(SpeedPirana);

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */


update(){

	if(this.body.blocked.left){
console.log('feeeeeeeeeeeeeeeeee');SpeedPirana*=-1
this.body.setVelocityX(SpeedPirana);
this.flipX=true;

	};


	if(this.body.blocked.right){

SpeedPirana*=-1
this.body.setVelocityX(SpeedPirana);
this.flipX=false;

	};


}



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
