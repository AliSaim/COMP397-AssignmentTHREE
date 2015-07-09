module objects {
    //Rock Class ++++++++++++++++++++++++++++++++++++
    export class Rock extends objects.GameObject {
        
        //CONSTRUCTOR +++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            
            this.sound = "hitSound";

            this.reset();
        }

        //PRIVATE METHODS
        private checkBounds(): void {

            //Check if gem has left the screen
            if (this.x < 0)
            {
                this.reset();
            }
        }

        private reset(): void {
            this.x = 640
            this.y = Math.floor(Math.random() * 480); //stage rock at random location
            
            this.dx = Math.floor(Math.random() * 5 + 4);
            this.dy = Math.floor(Math.random() * 4 - 2);
        }

        //PUBLIC METHODS ++++++++++++++++++++++++++++
        public update(): void {
            this.x = this.x - this.dx;
            this.y += this.dy; //drifts rock right and left
            this.checkBounds();
        }
    }
} 