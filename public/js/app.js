var app = {};
app.game = new Game();
app.gameView = new GameView({ model: app.game });
$('.gamegrid-content').append(app.gameView.$el);

