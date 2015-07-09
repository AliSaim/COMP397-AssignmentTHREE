module objects {
    //Game Object Class ++++++++++++++++++++++++++++++++++++
    export class GameObject extends createjs.Bitmap {
        //PUBLIC PROPERTIES ++++++++++++++++++++++++++++++++
        public width: number;
        public heigh: number;
        public isColliding: boolean = false;
        public sound: string = "";

        //PROTECTED PROPERTIES +++++++++++++++++++++++++++++
        protected dx: number;
        protected dy: number;

        //CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.heigh = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.heigh * 0.5;
        }

    }
} 