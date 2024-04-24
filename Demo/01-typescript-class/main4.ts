class PrimeCheck {
    num:number;
    res:boolean=true;
    i:number;
    constructor() {}
    isPrime(n:number):void {
        this.num = n;
        if(this.num == 1) {
            this.res = false;
            return;
        }
        if(this.num == 2 || this.num == 3) {
            this.res = true;
            return;
        }
        if(this.num % 2 == 0 || this.num % 3 == 0) {
            this.res = false;
            return;
        }
        for(this.i = 5; this.i <= Math.sqrt(this.num); this.i += 6) {
            if(this.num % this.i == 0 || this.num % (this.i + 2) == 0) {
                this.res = false;
                return;
            }
        }
    }
    display() {
        if(this.res) {
            console.log(this.num + " is a prime number");
        } else {
            console.log(this.num + " is not a prime number");
        }
    }
}
let obj3:PrimeCheck = new PrimeCheck();
obj3.isPrime(11);
obj3.display();