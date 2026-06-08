
// You can write more code here

/* START OF COMPILED CODE */

class BookCase extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// shell
		const shell = scene.physics.add.sprite(65, 148, "emptyshelllight");
		shell.scaleX = 0.3548730286845223;
		shell.scaleY = 0.3548730286845223;
		shell.body.setSize(676, 1109, false);
		this.add(shell);

		// top_row_small
		const top_row_small = scene.add.image(105, 0, "top_row_small");
		top_row_small.scaleX = 0.3133359562384878;
		top_row_small.scaleY = 0.3133359562384878;
		this.add(top_row_small);

		// top_row_small_1
		const top_row_small_1 = scene.add.image(22, 152, "top_row_small_02");
		top_row_small_1.scaleX = 0.3492312525572575;
		top_row_small_1.scaleY = 0.3492312525572575;
		this.add(top_row_small_1);

		// toprowbook
		const toprowbook = scene.physics.add.sprite(0, 299, "top_row_small");
		toprowbook.scaleX = 0.32617504893141924;
		toprowbook.scaleY = 0.32617504893141924;
		toprowbook.body.setSize(263, 171, false);
		this.add(toprowbook);

		// top_row
		const top_row = scene.add.image(64, 74, "top_row");
		top_row.scaleX = 0.3463433958248828;
		top_row.scaleY = 0.3463433958248828;
		this.add(top_row);

		// top_row_1
		const top_row_1 = scene.add.image(63, 226, "top_row");
		top_row_1.scaleX = 0.3463433958248828;
		top_row_1.scaleY = 0.3463433958248828;
		top_row_1.flipX = true;
		this.add(top_row_1);

		// bookmouse
		const bookmouse = new Mouse(scene, 8, 0);
		bookmouse.scaleX = 0.11676515267991026;
		bookmouse.scaleY = 0.11676515267991026;
		this.add(bookmouse);

		// mouserow
		const mouserow = scene.physics.add.sprite(12, 2, "top_row_small_02");
		mouserow.scaleX = 0.3169484021321285;
		mouserow.scaleY = 0.3169484021321285;
		mouserow.body.bounce.y = 0.4;
		mouserow.body.setSize(333, 170, false);
		this.add(mouserow);

		this.shell = shell;
		this.toprowbook = toprowbook;
		this.bookmouse = bookmouse;
		this.mouserow = mouserow;

		/* START-USER-CTR-CODE */
		this.scene.physics.world.enable(this);
		this.scene.physics.world.enable(this.mouserow);
		this.shell.depth=100;

		this.bookmouse.setScale(0.22);
		this.bookmouse.walking=false;
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.Physics.Arcade.Sprite} */
	shell;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	toprowbook;
	/** @type {Mouse} */
	bookmouse;
	/** @type {Phaser.Physics.Arcade.Sprite} */
	mouserow;

	/* START-USER-CODE */



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
