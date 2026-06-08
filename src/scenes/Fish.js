
// You can write more code here

/* START OF COMPILED CODE */

class Fish extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "icon", frame);

		this.scaleX = 0.05064285312169525;
		this.scaleY = 0.05064285312169525;
		this.flipX = true;
		scene.physics.add.existing(this, false);
		this.body.collideWorldBounds = true;
		this.body.onWorldBounds = true;
		this.body.setSize(1653, 1020, false);

if(this.AquariumSize==0){

	this.UnderFlow=0;
		this.UpperFlow=400;
}
else if(this.AquariumSize==1){


	this.UnderFlow=-400;
		this.UpperFlow=600;
}
	

		/* START-USER-CTR-CODE */
//this.body.setVelocityX(100);

		this.play('femmosswim');

		this.scene.physics.world.enable(this);
		//this.body.setVelocityX(100);
	//	this.WaveGroup.add(Object);
		this.RND=Phaser.Math.Between(0,1000);

		this.body.setSize(600, 300, false);

this.scene.time.addEvent({ delay: this.RND, callback:() => {

	if(this.active){

	this.scene.time.addEvent({ delay:500, callback:() => {
if(this.active){

		this.Direction=Phaser.Math.Between(0,10);
	//	console.log("Direcion Fish"+this.Direction);


	if(this.Direction>=6 || this.body.y<this.UnderFlow){
	this.body.setVelocityY(40);


	}else if(this.Direction<=5 || this.body.y>this.UpperFlow){

	this.body.setVelocityY(-40);

	} 

};

	}, callbackScope: this,repeat:-1});
if(this.active){

		 this.tweenZzz=this.scene.tweens.add({
            targets: this,
         	x:'+=630',
flipX:true,
	 duration:2500,
            ease: 'Sine.easeInOut',
           yoyo: true,
            repeat: -1,
        });
	}
	};
	}, callbackScope: this,repeat:0});

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
