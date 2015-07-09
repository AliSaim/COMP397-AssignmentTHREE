var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //Ship Class ++++++++++++++++++++++++++++++++++++
    var Ship = (function (_super) {
        __extends(Ship, _super);
        //CONSTRUCTOR +++++++++++++++++++++++++++++++
        function Ship(imageString) {
            _super.call(this, imageString);
            this.sound = "engineSound";
            this.x = 50;
            createjs.Sound.play(this.sound, { "loop": -1 });
        }
        //PUBLIC METHODS ++++++++++++++++++++++++++++
        Ship.prototype.update = function () {
            this.y = stage.mouseY; //Position ship under mouse
        };
        return Ship;
    })(objects.GameObject);
    objects.Ship = Ship;
})(objects || (objects = {}));
//# sourceMappingURL=ship.js.map