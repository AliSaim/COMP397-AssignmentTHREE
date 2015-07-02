/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />


// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage: createjs.Stage;
var stats: Stats;
var assets: createjs.LoadQueue;
var manifest = [
    { id: "pinkButton", src: "assets/images/pinkButton.png" },
    { id: "clicked", src: "assets/audio/clicked.wav" }
];


// Game Variables
var helloLabel: createjs.Text; // create a reference
var pinkButton: createjs.Bitmap;


//preloader Function
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    // event listinener handler triggers hwne assets are completely loaded
    assets.on("complete", init, this);
    assets.loadManifest(manifest);
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
        stats.setMode(0);//set to fps

        // align bottom-right
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '330px';
        stats.domElement.style.top = '10px';

        document.body.appendChild(stats.domElement);
    }

    //Callback function that creats Our Main Game Loop - refreshed 60 fps
    function gameLoop() {
        stats.begin(); //begin measuring

        stats.update(); //end measuring


        stage.update();
    }

    //callback function that allows me to respond to button click events
    function pinkButtonClicked(event: createjs.MouseEvent) {
        createjs.Sound.play("clicked");
    }
    //callback function that cahnges the alpha transparency of the button
    //mouseover event
    function pinkButtonOver() {
        pinkButton.alpha = 0.8;
    }

    //mouseout event
    function pinkButtonOut() {
        pinkButton.alpha = 1.0;
    }

    // Our Main Game Function
    function main() {
        console.log("Game is Running");
        helloLabel = new createjs.Text("Hello World!", "40px Consolas", "#000000");
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        helloLabel.x = 160;
        helloLabel.y = 190;
        stage.addChild(helloLabel);

        pinkButton = new createjs.Bitmap(assets.getResult("pinkButton"));
        pinkButton.regX = pinkButton.getBounds().width * 0.5;
        pinkButton.regY = pinkButton.getBounds().height * 0.5;
        pinkButton.x = 160;
        pinkButton.y = 270;
        stage.addChild(pinkButton);
        pinkButton.on("click", pinkButtonClicked);
        pinkButton.on("mouseover", pinkButtonOver);
        pinkButton.on("mouseout", pinkButtonOut);
    }
}