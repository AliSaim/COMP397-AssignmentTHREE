var objects;
(function (objects) {
    var ScoreBoard = (function () {
        //CONSTRUCTOR +++++++++++++++++++++++++
        function ScoreBoard() {
            //PUBLIC PROPERTIES
            this.score = 0;
            this.lives = 5;
            this.livesLabel = new createjs.Text("Lives:", "40px Consolas", "#00FF00");
            this.scoreLabel = new createjs.Text("Score:", "40px Consolas", "#FFFF00");
            this.livesLabel.x = 75;
            this.scoreLabel.x = 400;
            game.addChild(this.livesLabel);
            game.addChild(this.scoreLabel);
        }
        //PUBLIC METHODS +++++++++++++++++++++
        ScoreBoard.prototype.update = function () {
            this.livesLabel.text = "Lives:" + this.lives;
            this.scoreLabel.text = "Score:" + this.score;
        };
        ScoreBoard.prototype.changeScoreBoardLiveColorToOrange = function () {
            this.livesLabel.color = "#FFA500"; //change live color lable to orange
            //console.log("color should change to orange");
        };
        ScoreBoard.prototype.changeScoreBoardLiveColorToRed = function () {
            this.livesLabel.color = "#FF0000"; //change live color lable to red
            //console.log("color should change to red");
        };
        return ScoreBoard;
    })();
    objects.ScoreBoard = ScoreBoard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map