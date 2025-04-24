class Rectangle{
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea(){
        return this.width * this.height;
    }
    getPerimeter(){
        return (2*this.width)+(2*this.height);
    }
    isSquare(){
        return this.width === this.height;
    }
}