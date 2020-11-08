class dog{
    constructor(x,y,width,height){
        this.image = loadImage("images/dogImg.png");
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    display(){
        push();
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width,this.height);
        pop();
    }
}