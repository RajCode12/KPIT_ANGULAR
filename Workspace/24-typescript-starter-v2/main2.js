var Factorial = /** @class */ (function () {
    function Factorial() {
        this.res = 1;
    }
    Factorial.prototype.fact = function (n) {
        this.num = n;
        for (this.i = 1; this.i <= this.num; this.i++) {
            this.res *= this.i;
        }
    };
    Factorial.prototype.display = function () {
        console.log("Factorial of " + this.num + " is : " + this.res);
    };
    return Factorial;
}());
var obj = new Factorial();
obj.fact(6);
obj.display();
