class Factorial {
    num:number;
    res:number=1;
    i:number;
    constructor() {

    }
    fact(n:number):void {
        this.num = n;
        if(this.num == 0 || this.num == 1) {
            return;
        } else {
            for(this.i = 2; this.i <= this.num; this.i++) {
                this.res *= this.i;
            }
        }
    }
    display() {
        console.log("Factorial of " + this.num + " is : " + this.res);
    }
}
let obj2:Factorial = new Factorial();
obj2.fact(6);
obj2.display();