
// You can write more code here

/* START OF COMPILED CODE */

class LionFish extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "__lion_fish_pink_idle_000", frame);

		this.scaleX = 0.2061529597068525;
		this.scaleY = 0.2061529597068525;
		this.alpha = 0.9;
		this.alphaTopLeft = 0.9;
		this.alphaTopRight = 0.9;
		this.alphaBottomLeft = 0.9;
		this.alphaBottomRight = 0.9;
		scene.physics.add.existing(this, false);
		this.body.velocity.x = -30;
		this.body.collideWorldBounds = true;
		this.body.onWorldBounds = true;
		this.body.setSize(570, 546, false);

		/* START-USER-CTR-CODE */
	this.play('LionFishIdle');
		this.scene.UpdateGroup.add(this);

	this.swim();
		/* END-USER-CTR-CODE */
	}

	swim(){

		
	

	this.scene.time.addEvent({ delay: 2000, callback:() => {

		this.RandomX=Phaser.Math.Between(0,1);
		this.RandomY=Phaser.Math.Between(0,1);

console.log('swim fishy swim' + this.RandomX);

console.log('swim fishy swim' + this.y);


		if(this.RandomY==0){

this.body.setVelocityY(40);
}else 
if(this.RandomY==1 && this.y>450){

	console.log('going up up up up' + this.y);
this.body.setVelocityY(-40);
}

		


//this.stone1.play('stoneshift');

	}, callbackScope: this,repeat:-1 });


	}

	update(){
//console.log('this y position'+ this.y);
if(this.body.blocked.left){
this.body.setVelocityX(100);
this.flipX=true;

};

if(this.body.blocked.right){
this.body.setVelocityX(-100);
this.flipX=false;

};

	}




	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
