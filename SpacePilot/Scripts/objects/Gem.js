var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //Gem Class ++++++++++++++++++++++++++++++++++++
    var Gem = (function (_super) {
        __extends(Gem, _super);
        //CONSTRUCTOR +++++++++++++++++++++++++++++++
        function Gem(imageString) {
            _super.call(this, imageString);
            this.dx = 5;
            this.width = this.getBounds().width;
            this.heigh = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.heigh * 0.5;
            //this.x = 600
            this.reset();
        }
        //PRIVATE METHODS
        Gem.prototype.checkBounds = function () {
            //Check if gem has left the screen
            if (this.x < 0) {
                this.reset();
            }
        };
        Gem.prototype.reset = function () {
            //this.y = Math.floor(Math.random() * 480); //stage gem at random location
            //this.x = - this.width; //starts gem off stage
            this.x = 640;
            this.y = Math.floor(Math.random() * 480); //stage gem at random location
            //this.y = - this.heigh;
        };
        //PUBLIC METHODS ++++++++++++++++++++++++++++
        Gem.prototype.update = function () {
            //this.x += this.dx; // moves gem to the left of stage
            // this.x += this.dx;
            this.x = this.x - this.dx;
            this.checkBounds();
        };
        return Gem;
    })(createjs.Bitmap);
    objects.Gem = Gem;
})(objects || (objects = {}));
//# sourceMappingURL=gem.js.map