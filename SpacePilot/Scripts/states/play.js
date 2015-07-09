var states;
(function (states) {
    var Play = (function () {
        //CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Play() {
            this.main();
        }
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++
        //update methods
        Play.prototype.update = function () {
            space.update();
            ship.update();
            gem.update();
            for (var rock = 0; rock < 3; rock++) {
                rocks[rock].update();
                collision.check(rocks[rock]);
            }
            collision.check(gem);
            scoreboard.update();
        };
        // Our Main Game Function
        Play.prototype.main = function () {
            //instantiate new game container
            game = new createjs.Container();
            //add space object to stage
            // space = new objects.Space(assets.getResult("space"));
            game.addChild(space);
            //add gem object to stage
            //gem = new objects.Gem(assets.getResult("gem"));
            game.addChild(gem);
            //add ship object to stage
            // ship = new objects.Ship(assets.getResult("ship"));
            game.addChild(ship);
            //add 3 rock object to stage
            for (var rock = 0; rock < 3; rock++) {
                //rocks[rock] = new objects.Rock(assets.getResult("rock"));
                game.addChild(rocks[rock]);
            }
            //add scoreboard
            scoreboard = new objects.ScoreBoard();
            //add collision manager
            collision = new managers.Collision();
            //add game contariter to stage
            stage.addChild(game);
        };
        return Play;
    })();
    states.Play = Play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map