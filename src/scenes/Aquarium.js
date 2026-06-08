
// You can write more code here

/* START OF COMPILED CODE */

class Aquarium extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// rectangle_1
		const rectangle_1 = scene.add.rectangle(0, 7, 131, 128);
		rectangle_1.scaleX = 1.026570945457059;
		rectangle_1.scaleY = 0.6016307300802258;
		rectangle_1.alpha = 0.6;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 0;
		this.add(rectangle_1);

		// rectangle3
		const rectangle3 = scene.add.rectangle(0, 6, 128, 128);
		rectangle3.scaleX = 1.0284694783813346;
		rectangle3.scaleY = 0.5480917515853782;
		rectangle3.alpha = 0.6;
		rectangle3.isFilled = true;
		rectangle3.fillColor = 8968663;
		this.add(rectangle3);

		// sidelinel
		const sidelinel = scene.add.rectangle(-56, 6, 140, 113);
		sidelinel.scaleX = -0.005096786481125297;
		sidelinel.scaleY = 0.6114260056235311;
		sidelinel.alpha = 0.8;
		sidelinel.isFilled = true;
		sidelinel.fillColor = 0;
		this.add(sidelinel);

		// rectangle_7
		const rectangle_7 = scene.add.rectangle(0, 35, 125, 185);
		rectangle_7.scaleX = -0.008858498364227807;
		rectangle_7.scaleY = 0.6114260056235311;
		rectangle_7.angle = 90;
		rectangle_7.alpha = 0.8;
		rectangle_7.isFilled = true;
		rectangle_7.fillColor = 0;
		this.add(rectangle_7);

		// fish
		const fish = scene.physics.add.sprite(43, 10, "icon");
		fish.scaleX = 0.009501330332101598;
		fish.scaleY = 0.009501330332101598;
		fish.body.setSize(1653, 1020, false);
		this.add(fish);

		// sideliner
		const sideliner = scene.add.rectangle(56, 7, 140, 113);
		sideliner.scaleX = -0.006220283757331753;
		sideliner.scaleY = 0.6114260056235311;
		sideliner.alpha = 0.8;
		sideliner.isFilled = true;
		sideliner.fillColor = 0;
		this.add(sideliner);

		// rectangle_4
		const rectangle_4 = scene.add.rectangle(0, 41, 128, 128);
		rectangle_4.scaleX = 1.0242874061445915;
		rectangle_4.scaleY = 0.08600572087667736;
		rectangle_4.alpha = 0.8;
		rectangle_4.isFilled = true;
		rectangle_4.fillColor = 15782498;
		this.add(rectangle_4);

		// plants_10
		const plants_10 = scene.add.image(37, 32, "plants_10");
		plants_10.scaleX = 0.027105638891757336;
		plants_10.scaleY = 0.027105638891757336;
		this.add(plants_10);

		// plants_07
		const plants_07 = scene.add.image(-13, 28, "plants_07");
		plants_07.scaleX = 0.0324764687468173;
		plants_07.scaleY = 0.0324764687468173;
		this.add(plants_07);

		// plants_03
		const plants_03 = scene.add.image(-49, 36, "plants_03");
		plants_03.scaleX = 0.022590577930203488;
		plants_03.scaleY = 0.022590577930203488;
		this.add(plants_03);

		// rectangleblue
		const rectangleblue = scene.add.rectangle(0, 7, 128, 128);
		rectangleblue.scaleX = 1.0284694783813346;
		rectangleblue.scaleY = 0.539252644471795;
		rectangleblue.alpha = 0.5;
		rectangleblue.isFilled = true;
		rectangleblue.fillColor = 2611669;
		this.add(rectangleblue);

		// rectangle_10
		const rectangle_10 = scene.add.rectangle(78, 40, 131, 128);
		rectangle_10.scaleX = 0.16173527888027803;
		rectangle_10.scaleY = -0.015515562238204769;
		rectangle_10.angle = -8;
		rectangle_10.visible = false;
		rectangle_10.alpha = 0.4;
		rectangle_10.isFilled = true;
		rectangle_10.fillColor = 0;
		this.add(rectangle_10);

		// rectangle1
		const rectangle1 = scene.add.rectangle(0, 44, 120, 128);
		rectangle1.scaleX = 1.1344310940158382;
		rectangle1.scaleY = 0.04062105274822691;
		rectangle1.isFilled = true;
		rectangle1.fillColor = 328965;
		this.add(rectangle1);

		// ceilaquarium
		const ceilaquarium = scene.add.rectangle(0, -31, 128, 128);
		ceilaquarium.scaleX = 1.0607603208075833;
		ceilaquarium.scaleY = 0.0530680123906009;
		ceilaquarium.isFilled = true;
		ceilaquarium.fillColor = 2765623;
		this.add(ceilaquarium);

		// triggerl
		const triggerl = scene.add.rectangle(-61, 38, 140, 20);
		triggerl.scaleX = -0.006220283757331753;
		triggerl.scaleY = 0.6114260056235311;
		triggerl.angle = 57;
		triggerl.alpha = 0.5;
		triggerl.isFilled = true;
		triggerl.fillColor = 0;
		this.add(triggerl);

		// rectangle13
		const rectangle13 = scene.add.rectangle(-49, -30.4, 90, 180);
		rectangle13.scaleX = 0.39517509378442084;
		rectangle13.scaleY = 0.022273335196634967;
		rectangle13.isFilled = true;
		rectangle13.fillColor = 14133638;
		this.add(rectangle13);

		// rectangle6
		const rectangle6 = scene.add.rectangle(48, -30.4, 90, 180);
		rectangle6.scaleX = 0.4093592570169673;
		rectangle6.scaleY = 0.021455439843921186;
		rectangle6.isFilled = true;
		rectangle6.fillColor = 14133638;
		this.add(rectangle6);

		// rectangle9
		const rectangle9 = scene.add.rectangle(0, 44, 131, 215);
		rectangle9.scaleX = -0.03842239776553005;
		rectangle9.scaleY = 0.6114260056235311;
		rectangle9.angle = -90;
		rectangle9.alpha = 0.6;
		rectangle9.isFilled = true;
		rectangle9.fillColor = 0;
		this.add(rectangle9);

		// triggerr
		const triggerr = scene.add.rectangle(61, 38, 140, 20);
		triggerr.scaleX = -0.006220283757331753;
		triggerr.scaleY = 0.6114260056235311;
		triggerr.angle = -56;
		triggerr.alpha = 0.5;
		triggerr.isFilled = true;
		triggerr.fillColor = 0;
		this.add(triggerr);

		// rectangle8
		const rectangle8 = scene.add.rectangle(0, 44, 120, 128);
		rectangle8.scaleX = 1.1171434102563587;
		rectangle8.scaleY = 0.026106951001271837;
		rectangle8.isFilled = true;
		rectangle8.fillColor = 14133638;
		this.add(rectangle8);

		// can
		const can = scene.physics.add.sprite(-3, -36, "big_can_closed");
		can.scaleX = 0.12149532710280375;
		can.scaleY = 0.12149532710280375;
		can.visible = false;
		can.body.setSize(214, 299, false);
		this.add(can);

		this.rectangle3 = rectangle3;
		this.fish = fish;
		this.rectangle_4 = rectangle_4;
		this.rectangleblue = rectangleblue;
		this.ceilaquarium = ceilaquarium;
		this.rectangle13 = rectangle13;
		this.rectangle6 = rectangle6;
		this.rectangle9 = rectangle9;
		this.rectangle8 = rectangle8;
		this.can = can;

		/* START-USER-CTR-CODE */
		this.VeloFish=-10;
		this.fish.setVelocityX(this.VeloFish);

			this.scene.physics.world.enable(this);
			this.scene.time.addEvent({ delay: 4500, callback:() => {


					this.VeloFish=this.VeloFish*-1;
				this.fish.setVelocityX(this.VeloFish);

				if(this.VeloFish>0){
				   this.fish.flipX=true;
				   }else{
				   this.fish.flipX=false;
				   }



}, callbackScope: this,repeat:-1 });


		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle3;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	fish;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_4;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangleblue;
	/** @type {Phaser.GameObjects.Rectangle} */
	ceilaquarium;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle13;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle6;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle9;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle8;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	can;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
