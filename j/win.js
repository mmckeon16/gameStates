var winState = {
	create: function () {
		//display name of game
		var winLabel = game.add.text(80,80, 'YOU WON', {font: '50px Arial', fill: '#ffffff'});

		//give instructions to start game
		var startLabel = game.add.text(80, game.world.height-80, 'press W to start', {font: '25px Arial', fill: '#ffffff'});)
		
		//define the w key as Phaser.Keyboard.W
		var wkey = game.inut.keyboard.addKey(Phaser.Keyboard.W);

		//when player presses the w key, we call the start function
		wkey.onDown.addOnce(this.restart, this);
	},

	//start function calls play state
	restart: function() {
		game.state.start('menu');
	},
};