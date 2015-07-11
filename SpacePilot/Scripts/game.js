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
var stage;
var stats;
var game;
// Game Variables
var space;
var ship;
var gem;
var rocks = [];
var scoreboard;
var tryAgainButton;
var playButton;
var gameNameLabel;
var gameInformation;
var quitGame;
var menuBackgroundIamge;
var isPlayButtonClicked = false;
//Game Managers
var assets;
var collision;
//Game States
var play;
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
    play.update();
    stage.update();
    stats.end(); //end measuring
}
// Our Main Game Function
function main() {
    play = new states.Play();
    // Display Try Again Button
    menuBackgroundIamge = new createjs.Bitmap("assets/images/MenuBackground2.jpg");
    stage.addChild(menuBackgroundIamge);
    // Display Game Title 
    gameNameLabel = new createjs.Text("MAIL PILOT", "40px Arial");
    gameNameLabel.x = 200;
    gameNameLabel.y = 20;
    stage.addChild(gameNameLabel);
    // Display Play Button in the menu screen
    playButton = new createjs.Bitmap("assets/images/PlayGame.jpg");
    playButton.x = 250; //center of the screen in the x asix minus the half the width of the image
    playButton.y = 200;
    stage.addChild(playButton);
    playButton.addEventListener("click", tryAgainButtonClicked);
    playButton.on("mouseover", tryAgainButtonOver);
    playButton.on("mouseout", tryAgainButtonOut);
    // Display Game information Button in the menu screen
    gameInformation = new createjs.Bitmap("assets/images/instruction.jpg");
    gameInformation.x = 248;
    gameInformation.y = 300;
    stage.addChild(gameInformation);
    //gameInformation.addEventListener("click");
    gameInformation.on("mouseover", tryAgainButtonOver);
    gameInformation.on("mouseout", tryAgainButtonOut);
    // Display Qit Game  Button in the menu screen
    quitGame = new createjs.Bitmap("assets/images/quit.jpg");
    quitGame.x = 277;
    quitGame.y = 400;
    stage.addChild(quitGame);
    //playButton.addEventListener("click", tryAgainButtonClicked);
    quitGame.on("mouseover", tryAgainButtonOver);
    quitGame.on("mouseout", tryAgainButtonOut);
    stage.removeChild(gameNameLabel);
}
function tryAgainButtonClicked(event) {
    console.log("get game to reload");
    isPlayButtonClicked = true;
    //play.update();
    play = new states.Play();
    //gameLoop();
    //play.update();
    //createjs.Sound.play("clicked");
}
// Callback functions that change the alpha transparency of the button
// Mouseover event
function tryAgainButtonOver() {
    tryAgainButton.alpha = 0.8;
}
// Mouseout event
function tryAgainButtonOut() {
    tryAgainButton.alpha = 1.0;
}
function gameOverState() {
    console.log("Remove everhthing");
    // Game Over Scene 
    var gameOverLabel;
    var finalScoreLabel;
    var finalScore;
    // Declare new Game Container
    //game = new createjs.Container();
    // Instantiate Game Objects
    //ocean = new objects.Ocean(stage, game);
    stage.removeChild(game);
    game.removeAllChildren();
    game.removeAllEventListeners();
    this.ship.sound = "";
    this.gem.sound = "";
    applicationCache.removeEventListener;
    stage.clear();
    space = new objects.Space(assets.loader.getResult("space"));
    stage.addChild(space);
    // Show Cursor
    stage.cursor = "default";
    // Display Game Over
    gameOverLabel = new createjs.Text("GAME OVER", "40px Arial");
    gameOverLabel.x = 200;
    gameOverLabel.y = 150;
    stage.addChild(gameOverLabel);
    // Display Final Score Label
    finalScoreLabel = new createjs.Text("FINAL SCORE:" + scoreboard.score.toString(), "40px Arial");
    finalScoreLabel.x = 175;
    finalScoreLabel.y = 250;
    stage.addChild(finalScoreLabel);
    // Display Try Again Button
    tryAgainButton = new createjs.Bitmap("assets/images/playAgain.jpg");
    tryAgainButton.x = 244;
    tryAgainButton.y = 400;
    stage.addChild(tryAgainButton);
    //tryAgain.addEventListener("click", tryAgainClicked);
    tryAgainButton.on("click", tryAgainButtonClicked);
    tryAgainButton.on("mouseover", tryAgainButtonOver);
    tryAgainButton.on("mouseout", tryAgainButtonOut);
}
//# sourceMappingURL=game.js.map