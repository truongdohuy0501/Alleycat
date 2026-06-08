
// You can write more code here

/* START OF COMPILED CODE */

class Mouse extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "mouse", frame);

		this.scaleX = 0.07818909273346061;
		this.scaleY = 0.07818909273346061;
		this.flipX = true;
		scene.physics.add.existing(this, false);
		this.body.setSize(350, 300, false);
		// awake handler
		this.scene.events.on("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */


this.walking=true;

	this.scene.time.addEvent({ delay: 100, callback:() => {


if(this.walking && this.active){

this.play('mousewalk');

}else if(this.active){

this.play('mousesniff');


}

	}, callbackScope: this,repeat:0});

		
		this.setScale(0.15);
		this.SpeedMouse;
		
	//	this.setPipeline('Light2D');

		/* END-USER-CTR-CODE */

		// custom definition props
		this.Speed = "-=450";
		this.Time = 100;
	}

	/* START-USER-CODE */

		awake(){

		//console.log('test ='+this.Speed);
		if(this.walking){

			this.RND=Phaser.Math.Between(0,100);
			
if(this.active){
			this.scene.time.addEvent({ delay: this.Time, callback:() => {

				if(this.active){
if(this.change){
this.change=false;
	this.flipX=true;
	this.Speed*=-1;
	this.body.setVelocityX(this.Speed);
}else{
this.change=true;
	this.Speed*=-1;
	this.body.setVelocityX(this.Speed);
	this.flipX=false;
}
}
			



	}, callbackScope: this,repeat:-1 });
};

};
		}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
