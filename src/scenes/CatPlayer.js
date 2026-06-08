
// You can write more code here
var CatHearts=3;
var CatLives=3;
var StunnedCat;

/* START OF COMPILED CODE */

class CatPlayer extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "__black_cat_beg_000", frame);

		this.scaleX = 0.1566678798725213;
		this.scaleY = 0.1566678798725213;
		scene.physics.add.existing(this, false);
		this.body.setOffset(130, 50);
		this.body.setSize(340, 460, false);

		/* START-USER-CTR-CODE */

		this.HangOn=true;
		this.PlayOnceAnimWalk=true;
		this.PlayOnceAnimIdle=true;
		this.Hearts=3;
		this.TouchGround=false;
		this.PlayJumpOnce=true;
		this.DoOnce=true;
		this.stick=true;
		this.Flicker=false;
		this.CanJumpOffPainting=false;
		this.JumpVerticalPaint=true;
		this.disableCatStunned=false;
		this.locked = false;
   		this.lockedTo = null;
		this.MouseVisible=true;

		this.CatFinishStage=false;

		this.WalkLeft=false;
		this.WalkRight=false;
		this.depth=100;
		this.Key1=false;
		this.Key2=false;

	this.scene.time.addEvent({ delay: 1000, callback:() => {
		this.GoingInWindow=false;
	}, callbackScope: this,repeat:0 });
		//	this.scene.physics.world.enable(this);

		//this.goRight();
		this.scene.UpdateGroup.add(this);
		this.GoRight();
		this.GoLeft();
		this.Jump();
		this.Offbla=true;
		this.rolling=false;
		//this.depth=10000;

	 this.Cursors=this.scene.input.keyboard.createCursorKeys();

	this.UnderWater=false;	

	this.scene.time.addEvent({ delay: 300, callback:() => {
			

		if(this.UnderWater==true){
			console.log('yep cat is in water');
		this.jumptheme=this.scene.sound.add('jumpwater');
			this.body.setGravityY(170);
			this.setTexture('__black_cat_jump_010');
		}else{

		this.jumptheme=this.scene.sound.add('jumpsound2');
		this.body.setGravityY(4200);
		}

	this.scene.time.addEvent({ delay: 900, callback:() => {
		if(this.UnderWater){


this.RNDBubbel=Phaser.Math.Between(50,100);

this.Bubble=this.scene.physics.add.sprite(this.x+(this.RNDBubbel*0.2), this.y-20, "bubble-64px");
this.Bubble.alpha=0.5;
this.Bubble.body.setGravityY(-40);	
this.Bubble.setScale(this.RNDBubbel*0.003,this.RNDBubbel*0.003);	
this.scene.add.existing(this.Bubble);
		}

	//	console.log('test bubbbble water');

		}, callbackScope: this,repeat:-1 });

}, callbackScope: this,repeat:0 });
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	getHorizontalInput() {
		if (this.Cursors.right.isDown) {
			return 1;
		}

		if (this.Cursors.left.isDown) {
			return -1;
		}

		if (window.TouchInput?.enabled) {
			return window.TouchInput.moveX || 0;
		}

		return 0;
	}

	isLeftDown() {
		return this.getHorizontalInput() < -0.15;
	}

	isRightDown() {
		return this.getHorizontalInput() > 0.15;
	}

	onJumpPress() {
		if(this.CatFinishStage==false){
		if(this.disableCatStunned==false){
this.JumpVerticalPaint=true;
		};

	this.scene.time.addEvent({ delay: 300, callback:() => {
			this.JumpVerticalPaint=false;		
}, callbackScope: this,repeat:0 });

		if(this.PlayJumpOnce){

			if(!this.UnderWater==true){
				this.play('catUpi');
			}else{
			this.play('swim');
			}

	if(this.disableCatStunned==false && (this.active|| this.enable)){

		if(this.GoingInWindow==false){
this.jumptheme.play();
		}
			
	}
			if(!this.UnderWater==true){
				this.PlayJumpOnce=false;

			}else{

					this.TouchGround=true;
				this.PlayJumpOnce=false;	
		this.scene.time.addEvent({ delay: 600, callback:() => {

			this.PlayJumpOnce=true;

		}, callbackScope: this,repeat:0 });

			}

		}

		if(this.TouchGround){
			if(!this.UnderWater==true){
		if(this.disableCatStunned==false){
this.body.setGravityY(2200);
			this.body.setVelocityY(-1200);
		};
			


			}else{

				this.body.setGravityY(120);
				this.body.setVelocityY(-130);

			}
		}
		}else{
				this.setTexture('__black_cat_sit_tranistion_to_004');
		}
	}

	onJumpRelease() {
			if(!this.UnderWater==true){
					this.stick=true;
				this.body.setGravityY(3000);
			}else{
			this.body.setGravityY(120);
			this.TouchGround=true;
					this.PlayJumpOnce=true;
			}
	}

	onLeftRelease() {
								this.WalkLeft=false;
								if(this.TouchGround && this.PlayOnceAnimIdle && this.stick){
								this.play('CatIdle');

									this.PlayOnceAnimIdle=false;
								}

								this.body.setVelocityX(0);
								this.PlayOnceAnimWalk=true;
	}

	onRightRelease() {
this.WalkRight=false;

		if(this.TouchGround){


			if(this.stick){
			this.play('CatIdle');
			}

			};
		this.body.setVelocityX(0);
		this.PlayOnceAnimWalk=true;
	}

	handleTouchInput() {
		if (!window.TouchInput?.enabled) {
			return;
		}

		if (window.TouchInput.jump && !this._prevTouchJump) {
			this.onJumpPress();
		}

		if (!window.TouchInput.jump && this._prevTouchJump) {
			this.onJumpRelease();
		}

		const moveX = window.TouchInput.moveX || 0;
		const wasMoving = Math.abs(this._prevMoveX || 0) > 0.15;
		const isMoving = Math.abs(moveX) > 0.15;

		if (wasMoving && !isMoving) {
			if (this._prevMoveX > 0) {
				this.onRightRelease();
			} else {
				this.onLeftRelease();
			}
		}

		this._prevTouchJump = window.TouchInput.jump;
		this._prevMoveX = moveX;
	}

	Jump(){
	this.scene.input.keyboard.on('keydown-UP', () => this.onJumpPress());
	this.scene.input.keyboard.on('keyup-UP', () => this.onJumpRelease());
	};

GoLeft(){
	this.scene.input.keyboard.on('keydown-LEFT', () =>{});
	this.scene.input.keyboard.on('keyup-LEFT', () => this.onLeftRelease());
}

GoRight(){
	this.scene.input.keyboard.on('keydown-RIGHT', () =>{});
	this.scene.input.keyboard.on('keyup-RIGHT', () => this.onRightRelease());
};

		create(){


		};

	update(){
	this.handleTouchInput();

if(this.CatFinishStage==false){
	//console.log('cat y'+ this.y);
		//console.log("cat goung in house "+this.GoingInWindow);

		if(CatHearts<=0)
		{

		this.play('CatStunned');
		this.disableCatStunned=true;

		//this.body.setVelocityY(0);

		}

		else{

	//console.log('cat velocityy'+ this.body.velocity.y);

		//	console.log('cat x'+ this.x);
		//	console.log('cat y'+ this.y);

		if(this.body.velocity.y>1450){
		this.body.setVelocityY(1450);

		}

	if(this.body.velocity.y>10 || this.body.velocity.y<-10 ){

			this.scene.time.addEvent({ delay: 150, callback:() => {
				this.stick=true;
		}, callbackScope: this,repeat:0 });

}


		const moveX = this.getHorizontalInput();

		if(moveX > 0.15 && this.CatFinishStage==false){

		this.WalkRight=true;
			this.Offbla=true;
			this.flipX=true;
			if(this.PlayOnceAnimWalk==true && this.TouchGround){
				this.PlayOnceAnimWalk=false;

				if(this.stick){
				this.play('CatWalk');
				}

			}

				if(!this.UnderWater==true){
					if(this.stick){
				this.body.setVelocityX(400 * moveX);
					}
				}else{
				this.body.setVelocityX(180 * moveX);
				}

		}else if(moveX < -0.15 && this.CatFinishStage==false){

		this.WalkLeft=true;
		this.flipX=false;

			if(this.PlayOnceAnimWalk==true && this.TouchGround && this.stick){
				this.angle=0;

				if(this.stick){
				this.play('CatWalk');
				}

				this.PlayOnceAnimIdle=true;
				this.PlayOnceAnimWalk=false;
							}

			if(this.stick){
			if(!this.UnderWater==true){
			this.body.setVelocityX(400 * moveX);
			}else{
			this.body.setVelocityX(180 * moveX);
				}

			}
		}


		if((this.body.blocked.down|| this.body.touching.down) && this.rolling){

		this.setAngularVelocity(0);
			this.setVelocityX(0);
			this.angle=0;
			this.rolling=false;
		}

		if(this.body.blocked.down && (this.WalkRight==false && this.WalkLeft==false)){
		//	console.log('cat idle');
				this.angle=0;
			if(this.stick){
				this.play('CatIdle');
			}else{
			//this.setTexture('__black_cat_scratch_005');
			}

	//	this.body.setAngularVelocity(0);
			this.angle=0;
		};

		if(this.PlayJumpOnce==false && this.body.blocked.down){

			this.angle=0;

			if(this.stick){
			this.play('CatWalk');
			}else{
//this.setTexture('__black_cat_scratch_005');
			}
		};

		if(!this.body.touching.down || !this.body.touching.down){

			if(this.stick){
			this.TouchGround=false;
			}

		}
		else{

		//	this.body.setAngularVelocity(0);
			this.angle=0;
				//this.play('CatWalk');
				//this.play('CatIdle');
			this.TouchGround=true;
			this.PlayJumpOnce=true;

		}
		};
	}else{
	this.setTexture('__black_cat_sit_tranistion_to_004');
	}

	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
