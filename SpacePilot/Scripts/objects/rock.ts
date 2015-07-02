module objects {
    //Rock Class ++++++++++++++++++++++++++++++++++++
    export class Rock extends createjs.Bitmap {
        //PUBLIC PROPERTIES +++++++++++++++++++++++++
        width: number;
        heigh: number;


        dx: number;
        

        dy: number;


        //CONSTRUCTOR +++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.heigh = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.heigh * 0.5;

            //this.x = 600
            
            this.reset();

        }


        //PRIVATE METHODS


        private checkBounds(): void {

            //Check if gem has left the screen
            if (this.x < 0) {
                this.reset();
            }
        }

        private reset(): void {
            //this.y = Math.floor(Math.random() * 480); //stage rock at random location
            //this.x = - this.width; //starts gem off stage

            this.x = 640
            this.y = Math.floor(Math.random() * 480); //stage rock at random location
            //this.y = - this.heigh;

            this.dx = Math.floor(Math.random() * 5 + 4);
            this.dy = Math.floor(Math.random() * 4 - 2);
         
        }


        //PUBLIC METHODS ++++++++++++++++++++++++++++
        public update(): void {
            //this.x += this.dx; // moves rock to the left of stage
            // this.x += this.dx;

            this.x = this.x - this.dx;
            this.y += this.dy; //drifts rock right and left
            this.checkBounds();
        }
    }
} 