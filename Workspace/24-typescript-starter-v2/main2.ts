class Factorial {
    num:number;
    res:number=1;
    i:number;
    constructor() {}
    fact(n:number):void {
        this.num = n;
        for(this.i = 1; this.i <= this.num; this.i++) {
            this.res *= this.i;
        }
    }
    display() {
        console.log("Factorial of " + this.num + " is : " + this.res);
    }
}
let obj:Factorial = new Factorial();
obj.fact(6);
obj.display();