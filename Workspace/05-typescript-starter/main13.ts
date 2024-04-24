class PrimeCheck {
    num:number;
    constructor(num:number) {
        this.num = num;
    }
    i:number;
    res:boolean=true;
    isPrime() {
        if(this.num <= 1) {
            this.res = false;
            return;
        } else if(this.num == 2 || this.num == 3) {
            this.res = true;
            return;
        } else if(this.num % 2 == 0 || this.num % 3 == 0) {
            this.res = false;
            return;
        }
        for(this.i = 5; this.i <= Math.sqrt(this.num); this.i += 6) {
            if(this.num % this.i == 0 || this.num % (this.i+2) == 0) {
                this.res = false;
                return;
            }
        }
    }
    display() {
        if(this.res == true) {
            console.log(this.num + " is a prime number...");
        } else {
            console.log(this.num + " is not a prime number");
        }
    }
    
}
let obj1:PrimeCheck = new PrimeCheck(14);
obj1.isPrime();
obj1.display();
