var PrimeCheck = /** @class */ (function () {
    function PrimeCheck(num) {
        this.res = true;
        this.num = num;
    }
    PrimeCheck.prototype.isPrime = function () {
        if (this.num <= 1) {
            this.res = false;
            return;
        }
        else if (this.num == 2 || this.num == 3) {
            this.res = true;
            return;
        }
        else if (this.num % 2 == 0 || this.num % 3 == 0) {
            this.res = false;
            return;
        }
        for (this.i = 5; this.i <= Math.sqrt(this.num); this.i += 6) {
            if (this.num % this.i == 0 || this.num % (this.i + 2) == 0) {
                this.res = false;
                return;
            }
        }
    };
    PrimeCheck.prototype.display = function () {
        if (this.res == true) {
            console.log(this.num + " is a prime number...");
        }
        else {
            console.log(this.num + " is not a prime number");
        }
    };
    return PrimeCheck;
}());
var obj1 = new PrimeCheck(14);
obj1.isPrime();
obj1.display();
