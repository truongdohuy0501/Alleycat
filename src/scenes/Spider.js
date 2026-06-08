
// You can write more code here

/* START OF COMPILED CODE */

class Spider extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? -7);

		this.setInteractive(new Phaser.Geom.Rectangle(-78.71466414910631, -84.34649889949212, 20.42932829821262, 20), Phaser.Geom.Rectangle.Contains);

		// strain
		const strain = scene.add.rectangle(2, -43, 128, 128);
		strain.scaleX = -0.11;
		strain.scaleY = 0.40450691271550965;
		strain.isFilled = true;
		strain.fillColor = 2499106;
		this.add(strain);

		// round
		const round = scene.add.ellipse(2, -55, 128, 128);
		round.scaleX = 0.4585390453045643;
		round.scaleY = 0.4585390453045643;
		round.isFilled = true;
		round.fillColor = 2499106;
		this.add(round);

		// spider1
		const spider1 = scene.physics.add.sprite(0, 7, "__brown_spider_base standing_009");
		spider1.scaleX = 0.2663778820612735;
		spider1.scaleY = 0.2663778820612735;
		spider1.flipY = true;
		spider1.body.collideWorldBounds = true;
		spider1.body.onWorldBounds = true;
		spider1.body.setOffset(260, 200);
		spider1.body.setSize(100, 200, false);
		this.add(spider1);

		this.strain = strain;
		this.round = round;
		this.spider1 = spider1;

		/* START-USER-CTR-CODE */
		this.spider1.play('SpiderIdle');

	//	this.spider1.setPipeline('Light2D');
		this.setScale(0.1);
		this.scene.UpdateGroup.add(this);
		this.Once=true;
		this.scene.physics.world.enable(this.strain);
		this.scene.physics.world.enable(this.round);
		this.Moving=false;

		this.SpiderSpeed=1050;
		// this.tweenMove=this.scene.tweens.add({
          //  targets: this.,
         //	y:-80,
	// x:-120,
	 //duration:2000,
	//scale:{start: 0.1, to: 0.5 },
         //   ease: 'Sine.easeInOut',
          //  yoyo: true,
         //   repeat: -1,
      //  });
this.spider1.setScale(1);
	this.scene.time.addEvent({ delay: 1600, callback:() => {




	}, callbackScope: this,repeat:-1 });


		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	strain;
	/** @type {Phaser.GameObjects.Ellipse} */
	round;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	spider1;

	/* START-USER-CODE */

create(){



	this.physics.world.enable(this.round);
	this.physics.world.enable(this.strain);
	this.physics.world.enable(this.spider1);




};


StrainDown(){

	 this.tweenStrain=this.scene.tweens.add({
            targets: this.strain,
         	scaleY:"+=21",
			y:"+=1330",
	 duration:1000,
	//scale:{start: 0.1, to: 0.5 },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: 0,

        });



};
	GoingDown(){

			 this.tweenMove=this.scene.tweens.add({
            targets: this.spider1,
         	y:"+=2880",

	 duration:1000,
	//scale:{start: 0.1, to: 0.5 },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: 0,

        });

	this.tweenMove.on('complete', ()=>this.Once=true);	

	}

	update(){

		this.SpeedSpider=this.spider1.body.velocity.x;

		this.strain.body.x=this.round.body.x+5.3;
		this.round.body.x=this.spider1.body.x;

	//	console.log('setvelocityX spider : '+this.spider1.body.velocity.x);

		if(this.spider1.body.blocked.left || this.spider1.body.touching.left)
		{
	//	console.log('spider blocked left');
			//this.SpiderSpeed=0;


		}else{


		}

	var	tempMatrix = new Phaser.GameObjects.Components.TransformMatrix();
	var	tempParentMatrix = new Phaser.GameObjects.Components.TransformMatrix();
	this.spider1.getWorldTransformMatrix(tempMatrix, tempParentMatrix);
	var d = tempMatrix.decomposeMatrix();

	var catsize;

				if(d.translateX-this.scene.catPlayer.x>30 && this.Once){

			catsize=this.scene.catPlayer.y - d.translateY;
		//	console.log('spider height: '+ catsize);


					if(this.Moving && !this.spider1.body.blocked.left && (this.scene.catPlayer.y-d.translateY<750 && this.scene.catPlayer.y-d.translateY>-200)){
					this.spider1.body.setVelocityX(-this.SpiderSpeed);
					//this.strain.body.setVelocityX(this.SpeedSpider);
					//this.round.body.setVelocityX(this.SpeedSpider);
					};
				}


	else if(this.scene.catPlayer.x-d.translateX>30 && this.Once && !this.spider1.body.blocked.left && (this.scene.catPlayer.y-d.translateY<750 && this.scene.catPlayer.y-d.translateY>-200)){
this.spider1.body.setVelocityX(0);
		if(this.Moving && Math.abs(this.scene.catPlayer.y-d.translateY)<720){
		this.spider1.body.setVelocityX(this.SpiderSpeed);
		//this.strain.body.setVelocityX(this.SpeedSpider);
		//this.round.body.setVelocityX(this.SpeedSpider);
		};
	}
		else if(this.scene.catPlayer.y-d.translateY<690 &&( Math.abs(this.scene.catPlayer.x-d.translateX<=90))){
			this.spider1.body.setVelocityX(0);
			//this.strain.body.setVelocityX(0);
			//this.round.body.setVelocityX(0);
			if(this.Once ){
			this.GoingDown();
				this.StrainDown();
				this.Once=false;
			}

		}
		else{
			this.spider1.body.setVelocityX(0);
		}

	};

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
