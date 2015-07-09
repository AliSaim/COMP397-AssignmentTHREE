module objects {
    //Gem Class ++++++++++++++++++++++++++++++++++++
    export class Gem extends objects.GameObject {
        
        //CONSTRUCTOR +++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.name = "gem";
            this.sound = "collectSound";
            this.dx = 5;
            
            this.reset();
        }


        //PRIVATE METHODS
        private checkBounds(): void {

            //Check if gem has left the screen
            if (this.x <0) {
                this.reset();
            }
        }

        private reset(): void {
            this.x = 640
            this.y = Math.floor(Math.random() * 480); //stage gem at random location
        }

        //PUBLIC METHODS ++++++++++++++++++++++++++++
        public update(): void {
            this.x = this.x - this.dx;
            this.checkBounds();
        }
    }
} 