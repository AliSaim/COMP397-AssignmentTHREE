var managers;
(function (managers) {
    var Asset = (function () {
        //CONSTRUCTOR
        function Asset() {
            //PRIVATE PROPERTIES
            this.manifest = [
                { id: "space", src: "assets/images/earthSpace.png" },
                { id: "playAgain", src: "assets/images/playAgain.png" },
                //sounds
                { id: "collectSound", src: "assets/audio/collect.mp3" },
                { id: "hitSound", src: "assets/audio/hitOne.wav" },
                { id: "engineSound", src: "assets/audio/spaceShipTwo.mp3" }
            ];
            this.data = {
                "images": [
                    "assets/images/atlas.png"
                ],
                "frames": [
                    [2, 2, 65, 64, 0, 0, 0],
                    [69, 2, 65, 62, 0, 0, 0],
                    [69, 66, 65, 26, 0, 0, 0],
                    [2, 68, 21, 20, 0, -1, -2]
                ],
                "animations": {
                    "ship": [0],
                    "rock": [1],
                    "ship2": [2],
                    "gem": [3]
                }
            };
            this.preload();
        }
        Asset.prototype.preload = function () {
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            // event listinener handler triggers hwne assets are completely loaded
            this.loader.on("complete", init, this);
            this.loader.loadManifest(this.manifest);
            //create texture atlas
            this.atlas = new createjs.SpriteSheet(this.data);
        };
        return Asset;
    })();
    managers.Asset = Asset;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map