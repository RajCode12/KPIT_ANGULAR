class Fibonacci {
    num:number;
    a:number=0;
    b:number=1;
    i:number;
    constructor() {
        
    }
    arr:number[]=[];
    fibonacci(n:number):void {
        this.num = n;
        if(this.num == 0) return;
        if(this.num >= 1) {
            this.arr.push(this.a);
        }
        if(this.num >= 2) {
            this.arr.push(this.b);
        }
        for(this.i = 3; this.i <= this.num; this.i++) {
            let c = this.a + this.b;
            this.a = this.b;
            this.b = c;
            this.arr.push(c);
        }
    }
    j:number;
    display() {
        for(this.j = 0; this.j < this.arr.length; this.j++) {
            console.log(this.j + 1 + " term of fibonacci series : " + this.arr[this.j]);
        }
    }
}
let obj4:Fibonacci = new Fibonacci();
obj4.fibonacci(10);
obj4.display();