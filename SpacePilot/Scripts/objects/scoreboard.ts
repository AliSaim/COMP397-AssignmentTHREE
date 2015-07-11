module objects {
    export class ScoreBoard {
        //PUBLIC PROPERTIES
        public score: number = 0;
        public lives: number = 5;

        //PROTECTED PROPERTIES
        private scoreLabel: createjs.Text;
        private livesLabel: createjs.Text;

        //CONSTRUCTOR +++++++++++++++++++++++++
        constructor() {
            this.livesLabel = new createjs.Text("Lives:", "40px Consolas", "#00FF00");
            this.scoreLabel = new createjs.Text("Score:", "40px Consolas", "#FFFF00");

            this.livesLabel.x = 75
            this.scoreLabel.x = 400;
            game.addChild(this.livesLabel);
            game.addChild(this.scoreLabel);
        }

        //PUBLIC METHODS +++++++++++++++++++++
        public update() {
            this.livesLabel.text = "Lives:" + this.lives;
            this.scoreLabel.text = "Score:" + this.score;
        }

        public changeScoreBoardLiveColorToOrange(): void {
                this.livesLabel.color = "#FFA500"; //change live color lable to orange
                //console.log("color should change to orange");
        }

        public changeScoreBoardLiveColorToRed(): void {
            this.livesLabel.color = "#FF0000"; //change live color lable to red
            //console.log("color should change to red");
        }
    }
}