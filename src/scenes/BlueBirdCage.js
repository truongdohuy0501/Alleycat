
// You can write more code here

/* START OF COMPILED CODE */

class BlueBirdCage extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? -208, y ?? -162);

		// iconbird
		const iconbird = scene.physics.add.sprite(202, 167, "iconbird");
		iconbird.scaleX = 0.04571428446744645;
		iconbird.scaleY = 0.04571428446744645;
		iconbird.body.collideWorldBounds = true;
		iconbird.body.onWorldBounds = true;
		iconbird.body.setOffset(200, 500);
		iconbird.body.setSize(200, 200, false);
		this.add(iconbird);

		// cage
		const cage = scene.physics.add.sprite(208, 159, "metal_bird_cage_closed");
		cage.scaleX = 0.20971051759752188;
		cage.scaleY = 0.20971051759752188;
		cage.body.checkCollision.up = false;
		cage.body.setSize(300, 500, false);
		this.add(cage);

		this.iconbird = iconbird;
		this.cage = cage;

		/* START-USER-CTR-CODE */

		this.scene.physics.world.enable(this);
		this.body.checkCollision.up=false;
		this.body.setImmovable=true;
		this.iconbird.body.setSize(0.5);

		this.iconbird.play('EnemyBirdFly');
		this.Tjeeptheme=this.scene.sound.add('chirp');

		this.body.setOffset(170,142);
		this.body.setGravityY(1000);

		this.body.collideWorldBounds=true;

		this.iconbird.readytogeteaten=false;
		this.OpenOnce=true;

		this.StartFlapBool=true;
		this.STartFlapOnce=true;

		this.tweenUpDown=this.scene.tweens.add({
            targets: this.iconbird,
         	y:"-=10",
	 		duration:500,
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1,
        });
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	iconbird;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	cage;

	/* START-USER-CODE */

StartFlappingBlue(){

	if(this.iconbird.active){

		this.tweenUpDown.destroy();

		this.iconbird.depth=200;
		this.iconbird.readytogeteaten=true;
		this.iconbird.body.setVelocityX(-200);
		this.iconbird.body.setVelocityY(-300);
		if(this.StartFlapBool){
		this.StartFlapBool=false;

		this.scene.time.addEvent({ delay: 400, callback:() => {
if(this.iconbird.active){
	this.RNDX=Phaser.Math.Between(0,10);

	this.RNDY=Phaser.Math.Between(0,10);
		if(this.RNDY<5){

			this.iconbird.body.setVelocityY(-300);
			this.Tjeeptheme.play();

						}
			else{

			this.iconbird.body.setVelocityY(300);

			}

			if(this.RNDX<5){
				this.iconbird.body.setVelocityX(-300);
				this.Tjeeptheme.play();
//this.Tjeeptheme.play();



				this.iconbird.flipX=false;

}else{
this.iconbird.body.setVelocityX(300);
		this.iconbird.flipX=true;
	//	this.Tjeeptheme.play();
	}
};
}, callbackScope: this,repeat:-1 });

		};		
	};

}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
