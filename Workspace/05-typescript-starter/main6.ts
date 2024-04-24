class Factorial {
    num:number;
    i:number;
    res:number=1;
    constructor(num) {
        this.num = num;
    }
    fact():void{
        if(this.num === 0) {
            return;
        } else {
            for(this.i=1; this.i <= this.num; this.i++) {
                this.res *= this.i;
            }
        }
    }
    display():void {
        console.log(this.res);
    }
}
let obj:Factorial=new Factorial(5);
obj.fact();
obj.display();

