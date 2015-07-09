module objects {
    //Ship Class ++++++++++++++++++++++++++++++++++++
    export class Ship extends objects.GameObject {
        //CONSTRUCTOR +++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.sound = "engineSound";
            this.x = 50;
        }

        //PUBLIC METHODS ++++++++++++++++++++++++++++
        public update(): void {
            this.y = stage.mouseY; //Position ship under mouse
        }
    }
} 