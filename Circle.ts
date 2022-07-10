import {Iresizeable} from "./Resizeable";

class Circle implements Iresizeable {
    radius:number;

    constructor(radius: number) {
        this.radius = radius;
    }
    getArea=()=>Math.PI*Math.pow(this.radius,2);
    firstArea=()=>`Diện tích đầu là ${this.getArea()} `

    resize(percent:number) {
        let newArea=0;
        return newArea=this.getArea()*percent/100;
    }
}

let circle=new Circle(40);
console.log(circle.firstArea());
console.log(`Diện tích sau là ${circle.resize(50)}`);

