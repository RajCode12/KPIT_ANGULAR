var Factorial = /** @class */ (function () {
    function Factorial() {
        this.res = 1;
    }
    Factorial.prototype.fact = function (n) {
        this.num = n;
        if (this.num == 0 || this.num == 1) {
            return;
        }
        else {
            for (this.i = 2; this.i <= this.num; this.i++) {
                this.res *= this.i;
            }
        }
    };
    Factorial.prototype.display = function () {
        console.log("Factorial of " + this.num + " is : " + this.res);
    };
    return Factorial;
}());
var obj2 = new Factorial();
obj2.fact(6);
obj2.display();
