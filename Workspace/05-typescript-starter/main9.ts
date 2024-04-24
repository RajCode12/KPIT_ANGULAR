class ArraySum {
    arr:number[]=[1,2,3,4,5];
    num:number;
    sum:number=0;
    prod:number=1;
    i:number=0;
    constructor(num:number) {
        this.num = num;
    }
    fact() {
        if(this.num == 0) {
            return;
        } else {
            for(this.i=1; this.i <= this.num; this.i++) {
                this.prod *= 1;
            }
        }
    }
    arraySum() {
        for(let n of this.arr) {
            this.sum += n;
        }
    }
    display() {
        console.log("Factorial of " + this.num + " : " + this.prod); 
        console.log("Sum of Array : " + this.sum);
    }
}
let obj:ArraySum = new ArraySum(5);
obj.fact();
obj.arraySum();
obj.display();