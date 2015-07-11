var managers;
(function (managers) {
    var Collision = (function () {
        //CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++
        function Collision() {
        }
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
        //check distance between ship and any other game objects
        Collision.prototype.check = function (gameObject) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = ship.x;
            p1.y = ship.y;
            p2.x = gameObject.x;
            p2.y = gameObject.y;
            if (utility.distance(p1, p2) < ((ship.heigh * 0.5) + (gameObject.heigh * 0.5))) {
                if (gameObject.isColliding == false) {
                    createjs.Sound.play(gameObject.sound);
                    if (gameObject.name == "rock") {
                        scoreboard.lives--;
                        if (scoreboard.lives <= 3) {
                            scoreboard.changeScoreBoardLiveColorToOrange();
                            console.log("Game Over state should be displayed");
                        }
                        if (scoreboard.lives <= 1) {
                            scoreboard.changeScoreBoardLiveColorToRed();
                        }
                        if (scoreboard.lives == 0) {
                            gameOverState();
                        }
                    }
                    if (gameObject.name == "gem") {
                        scoreboard.score += 100;
                    }
                }
                gameObject.isColliding = true;
            }
            else {
                gameObject.isColliding = false;
            }
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map