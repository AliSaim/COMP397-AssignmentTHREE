/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="utility/utility.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/space.ts" />
/// <reference path="objects/ship.ts" />
/// <reference path="objects/gem.ts" />
/// <reference path="objects/rock.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="managers/collision.ts" />
// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage;
var stats;
var game;
var assets;
var atlas;
var manifest = [
    { id: "space", src: "assets/images/earthSpace.png" },
    //sounds
    { id: "collectSound", src: "assets/audio/collect.mp3" },
    { id: "hitSound", src: "assets/audio/hitOne.wav" },
    { id: "engineSound", src: "assets/audio/spaceShipTwo.mp3" }
];
var data = {
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
// Game Variables
var space;
var ship;
var gem;
var rocks = [];
var scoreboard;
//Game Managers
var collision;
//preloader Function
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    // event listinener handler triggers hwne assets are completely loaded
    assets.on("complete", init, this);
    assets.loadManifest(manifest);
    //create texture atlas
    atlas = new createjs.SpriteSheet(data);
    //setup staistics object
    setupStats();
    //call back function that Initializing game objects
    function init() {
        stage = new createjs.Stage(canvas); //reference to the stage
        stage.enableMouseOver(20);
        createjs.Ticker.setFPS(60); // framerate 60 fps for the game
        //event listener triggers 60 times every second
        createjs.Ticker.on("tick", gameLoop);
        //calling main game function
        main();
    }
    function setupStats() {
        stats = new Stats();
        stats.setMode(0); //set to fps
        // align bottom-right
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '650px';
        stats.domElement.style.top = '10px';
        document.body.appendChild(stats.domElement);
    }
    //Callback function that creats Our Main Game Loop - refreshed 60 fps
    function gameLoop() {
        stats.begin(); //begin measuring
        space.update();
        ship.update();
        gem.update();
        for (var rock = 0; rock < 3; rock++) {
            rocks[rock].update();
            collision.check(rocks[rock]);
        }
        collision.check(gem);
        scoreboard.update();
        stage.update();
        stats.end(); //end measuring
    }
    // Our Main Game Function
    function main() {
        //instantiate new game container
        game = new createjs.Container();
        //add space object to stage
        space = new objects.Space(assets.getResult("space"));
        game.addChild(space);
        //add gem object to stage
        gem = new objects.Gem("gem");
        game.addChild(gem);
        //add ship object to stage
        ship = new objects.Ship("ship2");
        game.addChild(ship);
        //add 3 rock object to stage
        for (var rock = 0; rock < 3; rock++) {
            rocks[rock] = new objects.Rock("rock");
            game.addChild(rocks[rock]);
        }
        //add scoreboard
        scoreboard = new objects.ScoreBoard();
        //add collision manager
        collision = new managers.Collision();
        //add game contariter to stage
        stage.addChild(game);
    }
}
//# sourceMappingURL=game.js.map