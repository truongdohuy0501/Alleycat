
// You can write more code here

/* START OF COMPILED CODE */

class BaseScene extends Phaser.Scene {

	constructor(key) {
		super(key);

		/* START-USER-CTR-CODE */

		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	/////////////Ghost level

	MovePainting(Paint,HorOrVert,Dur,Value,Delay){

		if(HorOrVert==0){


	this.tweenpainting=this.tweens.add({
            targets: Paint,			//x:"+=180"
			x: Value,
			duration:Dur,
            ease: 'Sine.easeInOut',
			repeatDelay:2000,
			delay:Delay,
			hold:3000,
            yoyo: true,
         repeat: -1,
        });

	}
		else if(HorOrVert==1){

	this.tweenpainting=this.tweens.add({
            targets: Paint,			//x:"+=180"
			y: Value,
			duration:Dur,
            ease: 'Sine.easeInOut',
			repeatDelay:2000,
			delay:Delay,
			hold:3000,
            yoyo: true,
         repeat: -1,
        });

		}

	}

		LightsOn(Cat,Lamp){

Lamp.whichlight.visible=true;


	//light.visible=false;
	}

	 FlickerTV(TV,Light){
		this.time.addEvent({ delay:5000, callback:() => {
		console.log('test switch in of ' + TV.AlertOnce);
		if(TV.AlertOnce==false){

		if(Light.visible){

			Light.visible=false;

		}else{

			Light.visible=true;

		this.time.addEvent({ delay:70, callback:() => {
		Light.visible=false;
			}, callbackScope: this,repeat:0});
		}
				}

				}, callbackScope: this,repeat:-1});



	 }

		pushblue(cat, plant){

	if((cat.Key1 || cat.Key2) && plant.OpenOnce){
	plant.cage.setTexture('metal_bird_open');
	this.Birdie=new BlackBird(this, plant.x+210, plant.y+120).setScale(0.1);
	plant.OpenOnce=false;
	plant.iconbird.destroy();


this.add.existing(this.Birdie);

	}

if(cat.body.touching.right){
	cat.body.x-=7;
	plant.body.setVelocityX(20);
}else if(cat.body.touching.left){
cat.body.x+=7;
	plant.body.setVelocityX(-20);
}
		this.time.addEvent({ delay:400, callback:() => {
		if(plant.active){
			plant.body.setVelocityX(0);
}

}, callbackScope: this,repeat:0 });

	}

	destroyenemycats(){

this.EnemyCatsGroup.children.each(function(child) {
    if(child){
child.destroy();

	}
  }, this);

	}


			JumpOut(cat,window){

			if(ShowCompletetext==false && window.WindowOpen){

	this.game.sound.stopAll();
		this.scene.start("Level");


			};

	}

	Awouga(Cat, feline){

	if(Cat.flipX==true && Cat.body.blocked.down && this.CatchPresent){

	Cat.setTexture('__black_cat_sit_tranistion_to_004');
	Cat.body.enable=false;
	this.GotHer=true;
	this.awougaheart.x=Cat.x+40;
	this.awougaheart.y=Cat.y;

	this.feline2.x=Cat.x+70;
	this.feline2.y=Cat.y;
	this.feline2.flipX=false;
	this.game.sound.stopAll();
	this.goaltheme.play();
	this.destroyenemycats();
	this.GoBackToLevel();

	}else if(Cat.body.blocked.down && Cat.flipX==false && this.CatchPresent){
	Cat.setTexture('__black_cat_sit_tranistion_to_004');
	Cat.body.enable=false;
	this.GotHer=true;
	this.awougaheart.x=Cat.x-40;
	this.awougaheart.y=Cat.y;

	this.feline2.x=Cat.x-70;
	this.feline2.y=Cat.y;
	this.feline2.flipX=true;
	this.game.sound.stopAll();
	this.goaltheme.play();
	this.destroyenemycats()
	this.GoBackToLevel();
		}


	}

		PickUpPresent(Cat,Present){

	if(Present){

	Present.destroy();
		this.healthpresent.destroy();
		this.CatchPresent=true;
	}


	}


	JumpOut(cat,window){

	if(ShowCompletetext==false && window.WindowOpen){

	this.game.sound.stopAll();
		this.scene.start("Level");
		
			};

	}
	
MakeObjectImmovabke(paint,Cat){

if(Cat.body.blocked.down){
this.time.addEvent({ delay:200, callback:() => {
	if(paint.active){
paint.parentContainer.body.setGravityY(900);
paint.parentContainer.body.setBounceX(0.5);
paint.parentContainer.body.setAngularVelocity(12);
	};
	}, callbackScope: this,repeat:0});
 };
};

	BounceCat(Cat,Yelly){

		if(Cat.body.touching.down || Cat.body.blocked.down && (Yelly.body.touching.up || Yelly.body.blocked.up)){
this.Yellytheme.play();
Cat.body.setVelocityY(-150);
//Yelly.body.setVelocityY(150);

		}
	};
	
	
StopBroom(broom,dirt){
	broom.clean=true;

broom.body.setVelocityX(0);

if(dirt.active){

this.time.addEvent({ delay:3000, callback:() => {
dirt.destroy();
broom.clean=false;
broom.BackToSweeping();
}, callbackScope: this,repeat:0});

}

}

	DropAndLeaveMarkMouse(painting, bottom){

			

var	tempMatrix = new Phaser.GameObjects.Components.TransformMatrix();
				var	tempParentMatrix = new Phaser.GameObjects.Components.TransformMatrix();
				painting.getWorldTransformMatrix(tempMatrix, tempParentMatrix);
				var d = tempMatrix.decomposeMatrix();
if(painting){

	this.time.addEvent({ delay:100, callback:() => {

if(!painting.birdcage){
	painting.destroy();
};

this.mudd=this.scene.scene.physics.add.sprite(d.translateX, bottom.y+15, "puddle").setScale(0.06);
this.DirtGroup.add(this.mudd);
this.add.existing(this.mudd);

//show mouse
if(painting.showmouse){
this.mousie = new Mouse(this, painting.x, bottom.y);
	this.mousie.Speed = -120;
	this.mousie.body.velocity.x = -120;
	this.mousie.Time = 2000;
	this.add.existing(this.mousie);
	this.mousie.visible=false;
	this.mousie.awake();


	this.mousie.depth=0;
	this.mousie.body.collideWorldBounds = true;

				this.time.addEvent({ delay: 100, callback:() => {
				this.mousie.visible=true;
				this.MouseGroup.add(this.mousie);

			}, callbackScope: this,repeat:0 });

};

//this.physics.add.sprite(painting.x+10, bottom.y, "littlecloud").setScale(0.1);
this.expo= new explosion(this, d.translateX, bottom.y).setScale(0.3);
console.log('boom');

this.add.existing(this.expo);

	}, callbackScope: this,repeat:0});


}

	}


	DropAndLeaveMark(painting, bottom){



var	tempMatrix = new Phaser.GameObjects.Components.TransformMatrix();
				var	tempParentMatrix = new Phaser.GameObjects.Components.TransformMatrix();
				painting.getWorldTransformMatrix(tempMatrix, tempParentMatrix);
				var d = tempMatrix.decomposeMatrix();
if(painting){

	this.time.addEvent({ delay:100, callback:() => {

if(!painting.birdcage){
	
	if(painting.item=="flower")
{
this.flower=this.physics.add.sprite(painting.x+10, bottom.y-25, "flowersbush").setScale(0.1);
this.flower.depth=99;
this.FlowerGroup.add(this.flower);
}else 

		if(painting.item=="star"){

		this.Star=this.physics.add.sprite(painting.x+10, bottom.y-20, "full-star-thick-black-border").setScale(0.1)
		this.Star.depth=100;
		this.StarGroup.add(this.Star);
					
		} 

		if(painting.item=="key"){

			this.key=this.physics.add.sprite(painting.x+10, bottom.y-40, "key_01").setScale(0.30);
			this.KeyGroup.add(this.key);
			this.add.existing(this.key);
			console.log('show key');

		}
			if(painting.item=="mousetrap"){

		this.mousetrap=this.physics.add.sprite(painting.x+10, bottom.y-35, "trap").setScale(0.18)
		this.mousetrap.depth=50;
		this.mousetrap.setImmovable=true;
		this.TrapGroup.add(this.mousetrap);		
	

		} 

					if(painting.item=="cheese"){

		this.cheese=this.physics.add.sprite(painting.x, bottom.y-10, "cheese").setScale(0.15)
		this.cheese.depth=50;
		this.cheese.setImmovable=true;
		this.TrapGroup.add(this.cheese);		
		
		if(this.Room=="dark"){

			this.cheese.setPipeline('Light2D');

		}
	

		} 

			painting.destroy();
		}

	if(painting.birdcage){


if(painting.birdcage.visible)
	{
this.mudd=this.scene.scene.physics.add.sprite(d.translateX, bottom.y-6, "puddle").setScale(0.06);
this.mudd.alpha=0.7;

this.DirtGroup.add(this.mudd);
this.add.existing(this.mudd);


//this.physics.add.sprite(painting.x+10, bottom.y, "littlecloud").setScale(0.1);
this.expo= new explosion(this, d.translateX, bottom.y).setScale(0.3);
console.log('boom');
this.add.existing(this.expo);

}

painting.birdcage.visible=false;
			}else{

if(bottom.dirt!=="nodirt"){
this.mudd=this.scene.scene.physics.add.sprite(d.translateX, bottom.y-5, "puddle").setScale(0.06);
this.mudd.body.setOffset(0,-400);

	if(this.Room=="dark"){

this.mudd.setPipeline('Light2D');
			
		}
this.DirtGroup.add(this.mudd);
this.add.existing(this.mudd);
}
//this.physics.add.sprite(painting.x+10, bottom.y, "littlecloud").setScale(0.1);
this.expo= new explosion(this, d.translateX, bottom.y).setScale(0.3);
console.log('boom');

this.add.existing(this.expo);

			};

	}, callbackScope: this,repeat:0});



}

	}



		ShowMouse(plant, bottom){

		

	this.mousie = new Mouse(this, plant.x, bottom.y);
	this.mousie.Speed = -120;
	this.mousie.body.velocity.x = -120;
	this.mousie.Time = 2000;
	this.add.existing(this.mousie);
	this.mousie.visible=false;
	this.mousie.awake();


	this.mousie.depth=0;
	this.mousie.body.collideWorldBounds = true;

				this.time.addEvent({ delay: 100, callback:() => {
				this.mousie.visible=true;
				this.MouseGroup.add(this.mousie);

			}, callbackScope: this,repeat:0 });




		if(plant.active){
		plant.destroy();
		}

	};

	GoBackToLevel(){



					this.time.addEvent({ delay:2000, callback:() => {
	this.cameras.main.fadeOut(700);

		this.time.addEvent({ delay:700, callback:() => {
	this.game.sound.stopAll();
		this.scene.start('Level');	

				}, callbackScope: this,repeat:0});
						}, callbackScope: this,repeat:0});


	}

	WaitAndMoveObjectY(Object,MinPoint,MaxPoint,Speed){

		//console.log('Speed fr Y '+Speed);

		if(Object.y<MinPoint){

			Object.body.setVelocityY(0);
			//Speed=Speed*-1;	
			this.time.addEvent({ delay: 2000, callback:() => {
			Object.body.setVelocityY(Speed);

	}, callbackScope: this,repeat:0 });

		}
		else if(Object.y>MaxPoint){

			Object.body.setVelocityY(0);
			//Speed=Speed*-1;	
			this.time.addEvent({ delay: 2000, callback:() => {
			Object.body.setVelocityY(-Speed);

	}, callbackScope: this,repeat:0 });
		}
	}

		GetHit(Cat,Enemy){
			if(Cat.Flicker==false && ShowCompletetext==false){
				this.JumpBack(Cat);
				Cat.Flicker=true;
					CatHearts--;
			this.meowtheme=this.sound.add('miauw');
	this.meowtheme.play();

		 this.events.emit('updateLive',Enemy.damage, CatHearts); 

	this.CheckOutOfLivesOrNot(CatHearts);

		//console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');

}
	}

	CheckOutOfLivesOrNot(Hearts){
	if(Hearts==0){
		CatLives--;
		if(CatLives==0){

				this.time.addEvent({ delay:1000, callback:() => {
			this.scene.scene.cameras.main.fadeOut(1000);

			this.time.addEvent({ delay:1000, callback:() => {

this.game.sound.stopAll();
	this.scene.scene.scene.stop('OverlayScreen');
	OverlayLaunchOne=true;
	CatHearts=3;
	CatLives=3;
				this.scene.scene.scene.start('StartMenuScreen');
			


				}, callbackScope: this,repeat:0});
						}, callbackScope: this,repeat:0});




		}else{

			this.time.addEvent({ delay:1000, callback:() => {

				this.game.sound.stopAll();

			this.scene.scene.cameras.main.fadeOut(700);

			this.time.addEvent({ delay:700, callback:() => {
		//this.scenelevelheme.stop();

		//	this.scene.scene.scene.stop('Level');	
		
			//this.scene.scene.levelheme.stop();
			this.scene.scene.scene.start('Level');	


			OverlayLaunchOne=true;
			CatHearts=3;


				}, callbackScope: this,repeat:0});
						}, callbackScope: this,repeat:0});

		}
	};

	}

		Flicker(Object){

		this.Counter=0;
	this.time.addEvent({ delay: 70, callback:() => {

		if(Object.visible){
		Object.visible=false;
		}else{
		Object.visible=true;
		}
		this.Counter++;
	//	console.log('counter flicker :'+this.Counter);
		if(this.Counter==27){
		Object.Flicker=false;
			this.Counter=0;
		}
	}, callbackScope: this,repeat:27 });


	}


	JumpBack(Cat){

		if(Cat.Flicker==false){

			this.tween=this.tweens.add({
            targets: Cat,
         	//x:"-=80",
			y:"-=30",
		//flipX:true,
			duration:100,
            ease: 'Sine.easeInOut',
           	yoyo: true,
            repeat: 0,
        });

			this.Flicker(Cat);
	if(Cat.flipX==true){
	this.tween=this.tweens.add({
            targets: Cat,
         	x:"-=40",
		//	y:"-=20",
		//flipX:true,
			duration:100,
            ease: 'Sine.easeInOut',
           	yoyo: false,
            repeat: 0,
        });


	}else{

			this.tween=this.tweens.add({
            targets: Cat,
         	x:'+=40',
		//	y:'-=20',
		//flipX:true,
			duration:100,
            ease: 'Sine.easeInOut',
           	yoyo: false,
            repeat: 0,
        });


	}
		};	

	}

		ChangeHeart(Arrow,Heart){


	if(Heart.PauseHeart==false){
		console.log('texture Heart :'+ Heart.red2.texture.key);

	 if(Heart.red2.texture.key=="0-percent"){


			Heart.red2.setTexture("100-percent");
			Heart.red2.body.checkCollision.up=true;

			}

		else if(Heart.red2.texture.key=="100-percent"){

			Heart.red2.setTexture("0-percent");
			Heart.red2.body.checkCollision.up=false;
		}

	}

		Heart.PauseHeart=true;

			this.time.addEvent({ delay:500, callback:() => {

			Heart.PauseHeart=false;	

		}, callbackScope: this,repeat:0 });

	}

	ShootArrowLeft(Upper,down){

	//
	if(this.GotHer==false){
	this.RandomY=Phaser.Math.Between(Upper,down);

	this.Arrow= this.physics.add.sprite(-300, this.RandomY, "red_arrow_projectile").setScale(0.3);
	this.Arrow.setSize(70,70);

this.Arrow.body.setVelocityX(420);
this.Arrow.body.setVelocityY(350);	
	this.Arrow.flipX=true;
	this.Arrow.angle=35;
	this.ArrowGroup.add(this.Arrow);
	}

};


	ShootArrowRight(Upper,Down){

		if(this.GotHer==false){

	this.RandomYR=Phaser.Math.Between(Upper,Down);

	this.Arrow= this.physics.add.sprite(1400, this.RandomYR, "red_arrow_projectile").setScale(0.3);
	this.Arrow.setSize(70,70);

this.Arrow.body.setVelocityX(-420);
this.Arrow.body.setVelocityY(350);	
	this.Arrow.flipX=false;
	this.Arrow.angle=-35;
	this.ArrowGroup.add(this.Arrow);
		}

};


	FallThroughFloor(Cat,EnemyCat){

		if(EnemyCat.attack && EnemyCat.JustOnceAttack){
				EnemyCat.play('CatScratchGrey');
			EnemyCat.JustOnceAttack=false;
			EnemyCat.body.setVelocityX(0);
			this.time.addEvent({ delay: 300, callback:() => {
				EnemyCat.play('greycatwalk');	
				EnemyCat.JustOnceAttack=true;
				if(EnemyCat.flipX){
					EnemyCat.body.setVelocityX(EnemyCat.speed);
				}else{
					EnemyCat.body.setVelocityX(-EnemyCat.speed);
				}

	}, callbackScope: this,repeat:0 });
		}


		Cat.body.checkCollision.down=false;
		Cat.body.setVelocityY(400);
			this.time.addEvent({ delay: 200, callback:() => {
				Cat.body.checkCollision.down=true;					
		}, callbackScope: this,repeat:0 });



	}


	WaitAndMoveObject(Object,MinPoint,MaxPoint,Speed){

	//	console.log('Speed fr '+Speed);

		if(Object.x<MinPoint){

			Object.body.setVelocityX(0);
			//Speed=Speed*-1;	
			this.time.addEvent({ delay: 2000, callback:() => {
			Object.body.setVelocityX(-Speed);

	}, callbackScope: this,repeat:0 });

		}
		else if(Object.x>MaxPoint){

			Object.body.setVelocityX(0);
			//Speed=Speed*-1;	
			this.time.addEvent({ delay: 2000, callback:() => {
			Object.body.setVelocityX(Speed);

	}, callbackScope: this,repeat:0 });

		}


	}

		GoToMission(Cat,Window){


if(Window.Open){
//this.scene.start("MouseLevel0");
	//Cat.body.setVelocityX(0);
		//Cat.body.setVelocityY(0);
		//Cat.body.setGravityY(0);
Cat.GoingInWindow=true;
	  this.cameras.main.fadeOut(500);

	  //  this.cameras.main.once('camerafadeoutcomplete', function (camera) {
	this.levelheme.stop();
this.game.sound.stopAll();
	this.scene.stop('Level');

		this.scene.start(Window.mission);

    //    });

	this.time.addEvent({ delay: 1000, callback:() => {
			//this.levelheme.stop();

	//this.scene.stop('Level');
		//this.scene.start(Window.mission);
}, callbackScope: this,repeat:0 });


}


	};



	/////SPIDER LEVEL

	Baaam(Block,Bottom){

	if (Block.stopkaboom){
	  this.cameras.main.shake(100);
		  Block.stopkaboom=false;
	};

	Block.stepblock.enable=false;
	Block.body.checkCollision.left = false;
		Block.body.checkCollision.right = false;

	};


	GetValueY(Object){

	Object.resultY=Object.LastYvalue-Object.body.y;
	Object.LastYvalue=Object.body.y;
	Object.LastXvalue=Object.body.x;
//	Object.string="Screw you";
	}

		StickAround(player, platform) {
        if (platform.body.touching.up && player.body.touching.down) {

   				  player.locked = true;
   				  player.lockedTo = platform;   

			console.log('test round:'+platform.LastYvaluePlatform);

				player.body.y = (player.lockedTo.body.y +(2-platform.resultY) - player.body.height);

			if(Object.LastXvalue - platform.body.x<0){
				player.body.position.x += -(platform.LastXvalue - platform.body.x);
			}				
			else{
			player.body.position.x += (platform.body.x-platform.LastXvalue);
			}
    }
};

	EatFish(Cat,Mouse){

	if(Mouse){
	Mouse.destroy();
	MissionCount--;
	this.FishNumber++;
	this.mousecatchtheme.play();
			}

	if(MissionCount==0){
	
	ShowCompletetext=true;
	LevelFish1Clear=true;
	this.game.sound.stopAll();
	this.goaltheme.play();


							this.time.addEvent({ delay:1000, callback:() => {
	this.cameras.main.fadeOut(1000);

		this.time.addEvent({ delay:1000, callback:() => {
		//this.scenelevelheme.stop();

		this.scene.start('Level');	
		

				}, callbackScope: this,repeat:0});
						}, callbackScope: this,repeat:0});



	}
		};



	CatchSpider(Cat,Cheese){

	if(Cheese){
	Cheese.destroy();
		this.cheesecatchtheme.play();
	}



	};


	openshit(birdcage){
		birdcage.birdcage.visible=false;

			birdcage.birdorange.visible=true;
			birdcage.setDepth(200);
		birdcage.birdorange.body.collideWorldBounds = true;
		birdcage.birdorange.body.setVelocityY(-120);

				birdcage.body.setEnable(false);
	}

	OpenDoorForBird(Cat, Door){
			//Cat.PlayJumpOnce=false;	
			//Cat.TouchGround=false;
		//Cat.TouchGround=false;

		if(Door.JustOnce && this.BDown){
			Door.visible=true;
			Door.JustOnce=false;

		//this.opendoor2.visible=true;
 	this.birdcageinside = new birdcage(this, Door.x, Door.y);
		this.add.existing(this.birdcageinside);
		this.MakeBirdCageReady(this.birdcageinside);
		this.openshit(this.birdcageinside);

	this.physics.world.removeCollider(Door.info);

	//	this.add.existing(mouse);


		this.time.addEvent({ delay: 800, callback:() => {
					//	this.MouseGroup.add(mouse);
		}, callbackScope: this,repeat:0 });
				}

			}

	test(){

	console.log('test basescne');
		this.cameras.main.fadeIn(2000);
		this.mousecatchtheme=this.sound.add('GetMouse');
		this.broomtheme=this.sound.add('broomwoosh');

		this.whacktheme=this.sound.add('whack');

		this.CollideObjectsGroup=this.add.group();


			this.physics.add.collider(this.catPlayer,this.bottom);
			this.physics.add.collider(this.catPlayer,this.CollideObjectsGroup);



	}

	AddingMouseStuff(){

	this.MouseGroup=this.add.group();
	this.physics.add.overlap(this.catPlayer,this.MouseGroup,this.EatMouse,null,this);

	}

StickToObject(cat,paint){

			//this.time.addEvent({ delay: 50, callback:() => {
if(CatHearts>0 && cat.HangOn){




//console.log("painting :" + paint.type);
//console.log("painting name:" + paint.name);

this.WhichObjectHangOn=paint;


cat.setTexture('catback2');

		//StickItem=pain.
	cat.angle=0;
if(cat.stick){
	cat.body.setAngularVelocity(0);
	cat.body.setVelocityX(0);
	cat.body.setVelocityY(0);
	cat.setGravityY(0);
	cat.stick=false;
	cat.TouchGround=true;
	cat.PlayJumpOnce=true;
	cat.setTexture('catback2');
	cat.x=paint.x;
	cat.JumpVerticalPaint=false;
	//cat.y=paint.y;
	cat.y=paint.y+50;
}
}else{
	
	cat.TouchGround=false;
	cat.PlayJumpOnce=false;
	cat.JumpVerticalPaint=true;
	cat.setGravityY(2000);

	this.time.addEvent({ delay:400, callback:() => {
	cat.setTexture('__black_cat_jump_009');
	}, callbackScope: this,repeat:0 });
}
}

	AddingRatsStuff(){

			this.Boomtheme=this.sound.add('Boom2');	

		this.BombsGroup=this.add.group();
this.BounceGroup=this.add.group();

			this.physics.add.collider(this.BombsGroup,this.bottom,this.explode,null,this);
		this.physics.add.collider(this.BombsGroup,this.ceiling12,this.explode,null,this);

		this.physics.add.collider(this.BombsGroup,this.BounceGroup);
		//	this.physics.add.collider(this.BombsGroup,this.ceiling2,this.explode,null,this);
			//this.physics.add.collider(this.BombsGroup,this.ceiling3,this.explode,null,this);

	}


	MakeBirdCageReady(BirdCage){

	
				this.physics.add.collider(BirdCage,this.bottom,this.DropAndLeaveMark,null,this);
			this.physics.add.collider(BirdCage.birdorange,this.bottom);
		this.physics.add.collider(this.catPlayer,BirdCage,this.push,null,this);


	}


	explode(Bomb,ground){

	if(Bomb){
	Bomb.destroy();
		this.Boomtheme.play();
		const expo = new explosion(this, Bomb.x, Bomb.y).setScale(0.35);
		this.add.existing(expo);

		  this.cameras.main.shake(100);

	}


	};

	addCollidersBroom(){

	this.physics.add.collider(this.broom,this.bottom, this.BackToCleaning,null,this);
	this.physics.add.overlap(this.catPlayer,this.broom,this.Kapow,null,this);



	}

breakeagainstfloor(painting, floor){

		this.paintx=painting.x;
		this.painty=painting.y;
		if(painting)
		{

		painting.destroy();
			console.log("destroy painting");
if(painting.info=="Nada"){

}else{
this.ShowObject(this.paintx,this.painty);
}

		}


	}

		CatchBall(Cat,Ball){

	if(Ball){
	this.CounterBalls++;
	console.log('desroy balllllll')
	Ball.destroy();;
	}

	if(this.CounterBalls<=4){
		console.log('catch ball');
		this.catchtheme.play();
	//this.SetNextPositionBall();
		console.log('counter :'+ this.CounterBalls);

	}else if(this.CounterBalls==5){


//	this.destroyRats();

		this.donetheme.play();
	}


};

		ShowObject(x,y){

	this.Object=this.physics.add.sprite(x, y, "gold-trophy-three").setScale(0.4);

		this.CatchBallGroup.add(this.Object);



	}

		push(cat, plant){
if(cat.body.touching.right){
	cat.body.x-=7;
	plant.body.setVelocityX(110);
}else if(cat.body.touching.left){
cat.body.x+=7;
	plant.body.setVelocityX(-110);
}


		this.time.addEvent({ delay:400, callback:() => {
		if(plant.active){
			plant.body.setVelocityX(0);
}

}, callbackScope: this,repeat:0 });


	}



	OpenDoor(Cat, Door){

		if(this.JustOnce){
			Door.visible=true;
	//	this.opendoor2.visible=true;
			const mouse = new Mouse(this, Door.x, Door.y+65);
		this.add.existing(mouse);

			this.JustOnce=false;

					this.time.addEvent({ delay: 800, callback:() => {
						this.MouseGroup.add(mouse);
}, callbackScope: this,repeat:0 });
		}

	};


		Kapow(Cat,Broom){

			Broom.CollidCat=true;
			//Cat.stick=true;
			 Cat.JumpVerticalPaint=true;

				this.time.addEvent({ delay:100, callback:() => {
						Cat.setTexture('__black_cat_jump_007');
				}, callbackScope: this,repeat:0 });


			Cat.body.setAngularVelocity(3000);
			//	Cat.setTexture(undefined);

			if(Cat.flick==false){

			}

			Cat.body.setVelocityY(-1400);
			Cat.body.setGravityY(1800);

			if(Cat.x<Broom.x){
			Cat.body.setVelocityX(-500);
			}else{
			Cat.body.setVelocityX(500);
			}

		this.broomtheme.play();
		this.whacktheme.play();


		this.time.addEvent({ delay: 600, callback:() => {

		Cat.rolling=true;

	}, callbackScope: this,repeat:0 });

this.time.addEvent({ delay: 800, callback:() => {

	Broom.CollidCat=false;

	}, callbackScope: this,repeat:0 });

		Broom.tweenBroom.pause();
		Broom.body.setAngularVelocity(4900);

		this.time.addEvent({ delay: 600, callback:() => {

		Broom.body.setAngularVelocity(0);
		Broom.angle=0;

		}, callbackScope: this,repeat:0 });

		this.physics.moveToObject(Broom, this.bottom, 800);	


			this.time.addEvent({ delay: 1000, callback:() => {

							//this.body.setVelocityX(-60);

						Broom.BackToSweeping();
							Broom.tweenBroom.resume();
					}, callbackScope: this,repeat:0 });

		}

		BackToCleaning(Broom,Bottom){

				//	this.physics.moveToObject(Broom, this.bottom, 0);	

if (this.SweepFloorOnce){

//	Broom.setVelocityX(-60);

this.SweepFloorOnce=false;	

}
		//Broom.SweepFloor();
		//Broom.angle=0;
		//	Broom.tweenBroom.resume();
		//if(this.CleanBroomOnce){
			//Broom.tweenBroom.pause();
	//	Broom.tweenBroom.restart();
	//	this.CleanBroomOnce=false;

	//	}


	}




		Teleport(Cat,Door){
		if(this.BDown){

		this.time.addEvent({ delay: 100, callback:() => {
				Cat.x=Door.info.x+20;
		Cat.y=Door.info.y-60;

}, callbackScope: this,repeat:0 });

};
	}


	EatBird(Cat,Bird){

	if(Bird && Bird.fly){

	Bird.destroy();
	this.mousecatchtheme.play();
	}
	}

	DropDownWhenjumpCatonObject(Object){
Object.setImmovable=false;

		if(Object.active){

	if(Object.body.touching.up){
this.time.addEvent({ delay: 50, callback:() => {
if(Object.active){
	Object.body.setGravityY(1000);

Object.body.setAngularVelocity(10);
}
}, callbackScope: this,repeat:0 });		
};
		};
	};

	ShowCollider(){

	}

		EatMouse(Cat,Mouse){

		if(Mouse && Cat.MouseVisible && Mouse.visible){
		MissionCount--;
		Mouse.destroy();
		this.mousecatchtheme.play();
		this.CounterMouse++;

			if(MissionCount==0){
//console.log('Stage clear!' + StageClear);
				ShowCompletetext=true;
				StageClear=true;
				this.game.sound.stopAll();
				this.goaltheme.play();

				this.time.addEvent({ delay:2000, callback:() => {
				this.cameras.main.fadeOut(2000);

					this.time.addEvent({ delay:2000, callback:() => {

		//this.levelheme.play();
		this.scene.stop();	
		this.scene.start('Level');	

				}, callbackScope: this,repeat:0});
						}, callbackScope: this,repeat:0});

	}

}
		};

	CreatePlatform(Object){


		this.physics.world.enable(Object);
		Object.body.setImmovable(true);
		Object.body.checkCollision.down = false;
		Object.body.checkCollision.left = false;
		Object.body.checkCollision.right = false;
	Object.move=true;

		this.CollideObjectsGroup.add(Object);


		}

	WaitAndTheMovechair(Object,Speedx,Speedy){

		Object.move=false;
		Object.body.setVelocityX(0);
		Object.body.setVelocityY(0);

		this.time.addEvent({ delay: 3000, callback:() => {

			if(Speedy!==0){

				Object.body.setVelocityY(Speedy*=-1);

					this.time.addEvent({ delay: 200, callback:() => {
						Object.move=true;
}, callbackScope: this,repeat:0 });


			}else{
				Object.body.setVelocityX(Speedx);
			}

		//	this.OKgoChair=true;

}, callbackScope: this,repeat:0 });


	}

	MoveVertical(Object,MinPosy,MaxPosy,Speedy){

		this.vert=Phaser.Math.Between(-2500,2500);
		this.time.addEvent({ delay: this.vert, callback:() => {


	if(Object.move){
	if(Object.y<=MinPosy){

		this.WaitAndTheMovechair(Object,0,Speedy);
		}
		else
		if(Object.y>=MaxPosy){
			//this.chairmove.body.setVelocityX(0);
		this.WaitAndTheMovechair(Object,0,-Speedy);
		//	this.OKgoChair=false;

		  }
	};

			}, callbackScope: this,repeat:0 });
}



		MoveObject(Object,minposx,maxposx,Speedx,minposy,maxposy,Speedy){



			if(Object.x<minposx)

			{
				this.WaitAndTheMovechair(Object,Speedx,Speedy);
			//	this.OKgoChair=false;
			}
		else
			{
			this.WaitAndTheMovechair(Object,-Speedx,Speedy);
		//	this.OKgoChair=false;
			}


	};

	ShowBubbles(Xvalue){


this.time.addEvent({ delay: 1000, callback:() => {

	this.RNDX=Phaser.Math.Between(-300,Xvalue);
	this.RNDBubbel=Phaser.Math.Between(50,100);

	this.Bubble=this.physics.add.sprite(this.RNDX, 800, "bubble-64px");
	this.Bubble.alpha=0.6;
	this.Bubble.body.setGravityY(-50);	
	this.Bubble.setScale(this.RNDBubbel*0.01,this.RNDBubbel*0.01);	
	this.add.existing(this.Bubble);
	this.BubbleGroup.add(this.Bubble);

	}, callbackScope: this,repeat:-1});

}

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
