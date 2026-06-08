
// You can write more code here

/* START OF COMPILED CODE */

class YellyFish extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// jellybob
		const jellybob = scene.physics.add.sprite(0, 0, "jellyfish_01");
		jellybob.scaleX = 0.21788923192433768;
		jellybob.scaleY = 0.21788923192433768;
		jellybob.body.velocity.x = 10;
		jellybob.body.collideWorldBounds = true;
		jellybob.body.onWorldBounds = true;
		jellybob.body.checkCollision.down = false;
		jellybob.body.setSize(250, 500, false);
		this.add(jellybob);

		// head
		const head = scene.physics.add.sprite(3, -127, "__black_cat_yellow_eyes_walk_000");
		head.scaleX = 0.06593406706446267;
		head.scaleY = 0.06593406706446267;
		head.visible = false;
		head.body.setSize(637, 581, false);
		this.add(head);

		// tentacles
		const tentacles = scene.physics.add.sprite(2, -33, "__black_cat_yellow_eyes_walk_000");
		tentacles.scaleX = 0.06593406706446267;
		tentacles.scaleY = 0.06593406706446267;
		tentacles.visible = false;
		tentacles.body.setSize(637, 581, false);
		this.add(tentacles);

		this.jellybob = jellybob;
		this.head = head;
		this.tentacles = tentacles;

		/* START-USER-CTR-CODE */
	this.jellybob.play('JellyFish');
	this.scene.physics.world.enable(this);

	this.alpha=0.85;

	this.scene.UpdateGroup.add(this);
	this.scene.YellyFishGroup.add(this.head);
		this.scene.YellyFishGrouptentacles.add(this.tentacles);

	this.RNDSPEED=Phaser.Math.Between(20,90);

	this.body.setVelocityX(this.RNDSPEED);

this.RNDUP=Phaser.Math.Between(0,4000);
		this.scene.time.addEvent({ delay: this.RNDUP, callback:() => {
		this.tweenUpDown=this.scene.tweens.add({
            targets: this,
         	//scale:"+=0.03",
			y:"-=100",

	 duration:4000,
	//scale:{start: 0.1, to: 0.5 },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1,

        });
		}, callbackScope: this,repeat:0 });

		this.RND=Phaser.Math.Between(0,1500);
		this.scene.time.addEvent({ delay: this.RND, callback:() => {
			this.tweenStrain=this.scene.tweens.add({
            targets: this,
         	scale:"+=0.03",
			//y:"+=1330",
			delay:this.RND,
	 duration:300,
	//scale:{start: 0.1, to: 0.5 },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: 0,

        });
			this.scene.time.addEvent({ delay: 4000, callback:() => {

	this.jellybob.play('JellyFish');
	this.tweenStrain=this.scene.tweens.add({
            targets: this,
         	scale:"+=0.03",
			//y:"+=1330",
			delay:4000,
	 duration:300,
	//scale:{start: 0.1, to: 0.5 },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: 0,

        });
				}, callbackScope: this,repeat:-1 });



		}, callbackScope: this,repeat:0 });
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	jellybob;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	head;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	tentacles;

	/* START-USER-CODE */

update(){
//console.log('yellyyyyyyyyyyyyyy');

this.head.x=this.jellybob.x;
this.head.y=this.jellybob.y-35;

this.tentacles.x=this.jellybob.x;
this.tentacles.y=this.jellybob.y+15;

if(this.jellybob.body.blocked.right || this.jellybob.body.touching.right){

	this.body.setVelocityX(this.RNDSPEED*-1);
}
else if(this.jellybob.body.blocked.left || this.jellybob.body.touching.left){

this.body.setVelocityX(this.RNDSPEED);
}

}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
