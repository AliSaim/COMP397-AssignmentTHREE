module objects {
    //Ship Class ++++++++++++++++++++++++++++++++++++
    export class Ship extends createjs.Bitmap {
        //PUBLIC PROPERTIES +++++++++++++++++++++++++
        width: number;
        heigh: number;

        //CONSTRUCTOR +++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.heigh = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.heigh * 0.5;

            this.x = 50;
        }

        //PUBLIC METHODS ++++++++++++++++++++++++++++
        public update(): void {
            this.y = stage.mouseY; //Position ship under mouse
        }
    }
} 