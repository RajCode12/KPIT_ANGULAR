var Factorial = /** @class */ (function () {
    function Factorial(num) {
        this.prod = 1;
        this.num = num;
    }
    Factorial.prototype.fact = function () {
        if (this.num <= 1) {
            return;
        }
        else {
            for (this.i = 1; this.i <= this.num; this.i++) {
                this.prod *= this.i;
            }
        }
    };
    Factorial.prototype.display = function () {
        console.log(this.prod);
    };
    return Factorial;
}());
var obj = new Factorial(5);
obj.fact();
obj.display();
