var loadState = {

	preload: function() {

		//adds loading label
		var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});

		//loads all assets. The first param is var that will
		//point to the image, and the second is the file itself
		game.load.image('player', 'assets/player.png');
		game.load.image('win', 'assets/win.png');

	},

	create: function() {
		//call menu
		game.state.start('menu');
	}

};