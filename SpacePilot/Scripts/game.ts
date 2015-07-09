/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />

/// <reference path="utility/utility.ts" />
/// <reference path="managers/asset.ts" />

/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/space.ts" />
/// <reference path="objects/ship.ts" />
/// <reference path="objects/gem.ts" />
/// <reference path="objects/rock.ts" />

/// <reference path="objects/scoreboard.ts" />

/// <reference path="managers/collision.ts" />
/// <reference path="states/play.ts" />


// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage: createjs.Stage;
var stats: Stats;
var game: createjs.Container;


// Game Variables
var space: objects.Space;
var ship: objects.Ship;
var gem: objects.Gem;
var rocks: objects.Rock[] = [];

var scoreboard: objects.ScoreBoard;


//Game Managers
var assets: managers.Asset;
var collision: managers.Collision;

//Game States
var play: states.Play;



//preloader Function
function preload() {
    //Instantiate asset manager class
    assets = new managers.Asset();

    //setup staistics object
    setupStats();
    }

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
        stats.setMode(0);//set to fps
        // align bottom-right
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '650px';
        stats.domElement.style.top = '10px';
        document.body.appendChild(stats.domElement);
    }

    //Callback function that creats Our Main Game Loop - refreshed 60 fps
    function gameLoop() {
        stats.begin(); //begin measuring

        play.update();

        stage.update();

        stats.end(); //end measuring
    }

    // Our Main Game Function
    function main() {
        //instantiate new game container
        game = new createjs.Container();

        //instantiate play state
        play = new states.Play();
        
        
        //add game contariter to stage
        stage.addChild(game);
        console.log(play)
    }
