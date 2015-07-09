module managers {
    export class Collision {
        //CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++
        constructor() {
        }

        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
        //check distance between ship and any other game objects
        public check(gameObject: objects.GameObject) {
        var p1: createjs.Point = new createjs.Point();
        var p2: createjs.Point = new createjs.Point();
        p1.x = ship.x;
        p1.y = ship.y;

        p2.x = gameObject.x;
        p2.y = gameObject.y;

        if (utility.distance(p1, p2) < ((ship.heigh * 0.5) + (gameObject.heigh * 0.5))) {
            if (gameObject.isColliding == false) {
                createjs.Sound.play(gameObject.sound);
                if (gameObject.name == "rock") {
                    scoreboard.lives--;
                }
                if (gameObject.name == "gem") {
                    scoreboard.score += 100;
                }
                //console.log("Collision");
            }
            gameObject.isColliding = true;
        }
        else {
            gameObject.isColliding = false;
        }
    }

    }
} 