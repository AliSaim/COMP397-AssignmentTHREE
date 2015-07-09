var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //Rock Class ++++++++++++++++++++++++++++++++++++
    var Rock = (function (_super) {
        __extends(Rock, _super);
        //CONSTRUCTOR +++++++++++++++++++++++++++++++
        function Rock(imageString) {
            _super.call(this, imageString);
            this.name = "rock";
            this.sound = "hitSound";
            this.reset();
        }
        //PRIVATE METHODS
        Rock.prototype.checkBounds = function () {
            //Check if gem has left the screen
            if (this.x < 0) {
                this.reset();
            }
        };
        Rock.prototype.reset = function () {
            this.x = 640;
            this.y = Math.floor(Math.random() * 480); //stage rock at random location
            this.dx = Math.floor(Math.random() * 5 + 4);
            this.dy = Math.floor(Math.random() * 4 - 2);
        };
        //PUBLIC METHODS ++++++++++++++++++++++++++++
        Rock.prototype.update = function () {
            this.x = this.x - this.dx;
            this.y += this.dy; //drifts rock right and left
            this.checkBounds();
        };
        return Rock;
    })(objects.GameObject);
    objects.Rock = Rock;
})(objects || (objects = {}));
//# sourceMappingURL=rock.js.map