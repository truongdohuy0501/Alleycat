
// You can write more code here

/* START OF COMPILED CODE */

class WindowClass extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// window_8
		const window_8 = scene.physics.add.sprite(0, 0, "window_01");
		window_8.scaleX = 0.7889227673016052;
		window_8.scaleY = 0.7889227673016052;
		window_8.body.setSize(137, 185, false);
		this.add(window_8);

		// entrance
		const entrance = scene.add.rectangle(0, -6, 128, 128);
		entrance.scaleX = 0.421875;
		entrance.scaleY = 0.09821358054245705;
		entrance.visible = false;
		entrance.isFilled = true;
		this.add(entrance);

		this.window_8 = window_8;
		this.entrance = entrance;

		/* START-USER-CTR-CODE */
		this.RndTime=Phaser.Math.Between(0,3600);
		this.RNDThrow=Phaser.Math.Between(500,1000);

		this.entrance.Open=false;

		this.scene.physics.world.enable(this.entrance);


				this.scene.time.addEvent({delay:this.RndTime,callback:()=>{

		this.scene.time.addEvent({delay:2450,callback:()=>{
		//	console.log('test window');
			this.RndX=Phaser.Math.Between(-400,400);
			this.RNDOpenCloses=Phaser.Math.Between(0,4);
			//	this.RNDXexplo=Phaser.Math.Between(-30,30);
			if(	this.RNDOpenCloses<3){

			this.window_8.setTexture('window_01');
				this.entrance.Open=false;
			}else{

			this.window_8.setTexture('window_01_open');
				this.entrance.Open=true;

						this.scene.time.addEvent({delay:this.RNDThrow,callback:()=>{
if(this.x-this.scene.catPlayer.x<450 && this.x-this.scene.catPlayer.x>-450 && Math.abs(this.y-this.scene.catPlayer.y)<600){
				this.Projectile=this.scene.physics.add.sprite(this.x, this.y, "tuna_closed").setScale(0.2);
			this.Projectile.body.setGravityY(1200);
			this.Projectile.body.setVelocityY(-100);
			this.Projectile.body.angularVelocity=580;
			this.Projectile.body.setVelocityX(this.RndX);
	this.scene.TrashGroup.add(this.Projectile);
	if(this.RNDOpenCloses==4){
			this.Projectile.setTexture('milkbottle');
	}


};
								},callbackScope:this,repeat:0,}); 
			}
//if(this.window_8.setTexture('window_01_open')){



  // };
 },callbackScope:this,repeat:-1,}); 

					},callbackScope:this,repeat:0,}); 
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	window_8;
	/** @type {Phaser.GameObjects.Rectangle} */
	entrance;

	/* START-USER-CODE */



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
