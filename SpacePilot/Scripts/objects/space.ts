module objects {
    //Space Class ++++++++++++++++++++++++++++++++++++
    export class Space extends createjs.Bitmap {
        //PUBLIC PROPERTIES +++++++++++++++++++++++++
        width: number;
        heigh: number;
        dx: number = 2;


        //CONSTRUCTOR +++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.heigh = this.getBounds().height;

            //this.x = 600
         
            this.reset();
        }


        //PRIVATE METHODS
        private checkBounds(): void {

            //Check if Space has left the screen
            if (this.x  == -3342)
            {
                console.log("re-draw image");
                this.reset();
            }
        }

        private reset(): void {
            //this.y = Math.floor(Math.random() * 480); //stage Space at random location
            //this.x = - this.width; //starts gem off stage


            this.x = -688;
            this.y = 0;
            
            //this.y = - this.heigh;
         
        }


        //PUBLIC METHODS ++++++++++++++++++++++++++++
        public update(): void {
            //this.x += this.dx; // moves Space to the left of stage
            // this.x += this.dx;

            this.x = this.x - this.dx;
            this.checkBounds();
        }
    }
}  