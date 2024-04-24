class SumNumber {
    num:number;
    i:number;
    res:number=0;
    constructor(num:number) {
        this.num = num;
    }
    sum() {
        for(this.i = 1; this.i <= this.num; this.i++) {
            this.res += this.i;
        }
    }
    display() {
        console.log("Sum of number from 1 to " + this.num + " is : " + this.res);
    }
}
let obj:SumNumber = new SumNumber(5);
obj.sum();
obj.display();
