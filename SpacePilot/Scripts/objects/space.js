var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //Space Class ++++++++++++++++++++++++++++++++++++
    var Space = (function (_super) {
        __extends(Space, _super);
        //CONSTRUCTOR +++++++++++++++++++++++++++++++
        function Space(imageString) {
            _super.call(this, imageString);
            this.dx = 2;
            this.width = this.getBounds().width;
            this.heigh = this.getBounds().height;
            //this.x = 600
            this.reset();
        }
        //PRIVATE METHODS
        Space.prototype.checkBounds = function () {
            //Check if Space has left the screen
            if (this.x == -3342) {
                //console.log("re-draw image");
                this.reset();
            }
        };
        Space.prototype.reset = function () {
            //this.y = Math.floor(Math.random() * 480); //stage Space at random location
            //this.x = - this.width; //starts gem off stage
            this.x = -688;
            this.y = 0;
            //this.y = - this.heigh;
        };
        //PUBLIC METHODS ++++++++++++++++++++++++++++
        Space.prototype.update = function () {
            //this.x += this.dx; // moves Space to the left of stage
            // this.x += this.dx;
            this.x = this.x - this.dx;
            this.checkBounds();
        };
        return Space;
    })(createjs.Bitmap);
    objects.Space = Space;
})(objects || (objects = {}));
//# sourceMappingURL=space.js.map