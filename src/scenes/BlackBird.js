
// You can write more code here

/* START OF COMPILED CODE */

class BlackBird extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "__black_bird_01_fly_straight_000", frame);

		this.scaleX = 0.1766805885285664;
		this.scaleY = 0.1766805885285664;
		scene.physics.add.existing(this, false);
		this.body.collideWorldBounds = true;
		this.body.onWorldBounds = true;
		this.body.pushable = false;
		this.body.immovable = true;
		this.body.setSize(546, 464, false);

		/* START-USER-CTR-CODE */
	this.play('EnemyBirdFly');
this.Tjeeptheme=this.scene.sound.add('chirp');
this.body.setVelocityY(-80);
	this.RNDYp=Phaser.Math.Between(-50,50);
	this.RNDX=Phaser.Math.Between(1000,-1000);
	

	this.scene.time.addEvent({ delay:2300, callback:() => {
	this.scene.BirdCatchGroup.add(this);
						}, callbackScope: this,repeat:0 });

	this.scene.time.addEvent({ delay:2000, callback:() => {

		if(this.active){
		this.Tjeeptheme.play();

		}

			}, callbackScope: this,repeat:-1 });

			this.scene.time.addEvent({ delay:1000, callback:() => {

			if(this.active){

			this.RNDYp=Phaser.Math.Between(-100,300);
			let birdyString = `-=${this.RNDYp}`; 

			this.tweenUpDown=this.scene.tweens.add({
            targets: this,
         	y: String(birdyString),
	 		duration:500,
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1,
       						});

	this.RNDX=Phaser.Math.Between(1000,-1000);
	let scoreTextString = `-=${this.RNDX}`; 
	console.log('result tween: ' + scoreTextString);

		this.tweenX=this.scene.tweens.add({
            targets: this,
       		 x:String(scoreTextString),

	 		duration:2000,
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1,

        });
									};

	if(this.RNDX>0){
this.flipX=false;
					}else{

this.flipX=true;
					}

	}, callbackScope: this,repeat:-1 });

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
