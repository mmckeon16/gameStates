var bootState = {

	create: function() {

		//starts physics
		game.physics.startSystem(Phaser.Physics.ARCADE);

		//calls load state
		game.state.start('load');
	}


};