module managers {
    export class Asset {

        //PUBLIC PROPERTIES
        public loader: createjs.LoadQueue;
        public atlas: createjs.SpriteSheet;


        //PRIVATE PROPERTIES
        private manifest = [
        { id: "space", src: "assets/images/earthSpace.png" },
        //sounds
        { id: "collectSound", src: "assets/audio/collect.mp3" },
        { id: "hitSound", src: "assets/audio/hitOne.wav" },
        { id: "engineSound", src: "assets/audio/spaceShipTwo.mp3" }
        ];


        private data = {
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
        }

        //CONSTRUCTOR
        constructor() {
            this.preload();
        }

        preload() {
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            // event listinener handler triggers hwne assets are completely loaded
            this.loader.on("complete", init, this);
            this.loader.loadManifest(this.manifest);

            //create texture atlas
            this.atlas = new createjs.SpriteSheet(this.data);

        }
    }
} 