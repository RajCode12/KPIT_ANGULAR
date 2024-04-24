class Fibonacci {
    num:number;
    a:number=0;
    b:number=1;
    i:number;
    arr:number[]=[];
    constructor() {}
    fibonacci(n:number):void {
        this.num = n;
        if(this.num < 1) return;
        if(this.num >= 1) {
            this.arr.push(this.a);
        }
        if(this.num >= 2) {
            this.arr.push(this.b);
        }
        for(this.i = 2; this.i <= this.num; this.i++) {
            let c = this.a  + this.b;
            this.a = this.b;
            this.b = c;
            this.arr.push(c);
        }
    }
    j:number;
    display() {
        for(this.j = 0; this.j < this.arr.length; this.j++) {
            console.log(this.j+1 + " term : " + this.arr[this.j]);
        }
    }
}
let obj:Fibonacci = new Fibonacci();
obj.fibonacci(10);
obj.display();