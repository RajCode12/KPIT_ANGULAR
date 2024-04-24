var Factorial = /** @class */ (function () {
    function Factorial(num) {
        this.res = 1;
        this.num = num;
    }
    Factorial.prototype.fact = function () {
        if (this.num === 0) {
            return;
        }
        else {
            for (this.i = 1; this.i <= this.num; this.i++) {
                this.res *= this.i;
            }
        }
    };
    Factorial.prototype.display = function () {
        console.log(this.res);
    };
    return Factorial;
}());
var obj = new Factorial(5);
obj.fact();
obj.display();
