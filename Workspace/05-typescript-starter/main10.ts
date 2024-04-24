class Factorial {
    num:number;
    prod:number=1;
    i:number;
    constructor(num:number) {
        this.num = num;
    }
    fact() {
        if(this.num <= 1) {
            return;
        } else {
            for(this.i = 1; this.i <= this.num; this.i++) {
                this.prod *= this.i;
            }
        }
    }
    display() {
        console.log(this.prod);
    }
}
let obj:Factorial = new Factorial(5);
obj.fact();
obj.display();