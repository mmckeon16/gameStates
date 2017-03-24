create: function() {
	//prep keyboard for player to move sprite
	this.keyboard = game.input.keyboard;

	//create sprite and enable physics
	this.player = game.add.sprite(16, 16, 'player');
	game.physics.enable(this.player, Phaser.Physics.ARCADE);

	//create the win sprite and enable physics
	this.win = game.add.sprite(256, 256, 'win');
	game.physics.enable(this.win, Phaser.Physics.ARCADE);
},

update: function() {
	//when player and win overlap, win is called
	game.physics.arcade.overlap(this.player, this.win, this.Win, null, this);

	//enable movement along x
	if (this.keyboard.isDown(Phaser.keyboard.A)) {
		this.player.body.velocity.x = -175;
	} else if (this.keyboard.isDown(Phaser.keyboard.D)){
		this.player.body.velocity.x = 175;
	} else {
		this.player.body.velocity.x = 0;
	}
	//enable movement along y
	if (this.keyboard.isDown(Phaser.keyboard.W)) {
		this.player.body.velocity.y = -175;
	} else if (this.keyboard.isDown(Phaser.keyboard.S)){
		this.player.body.velocity.y = 175;
	} else {
		this.player.body.velocity.y = 0;
	}

},

win: function() {
	game.state.start('win');
}