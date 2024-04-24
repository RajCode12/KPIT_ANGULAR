var ArraySum = /** @class */ (function () {
    function ArraySum(num) {
        this.arr = [1, 2, 3, 4, 5];
        this.sum = 0;
        this.prod = 1;
        this.i = 0;
        this.num = num;
    }
    ArraySum.prototype.fact = function () {
        if (this.num == 0) {
            return;
        }
        else {
            for (this.i = 1; this.i <= this.num; this.i++) {
                this.prod *= 1;
            }
        }
    };
    ArraySum.prototype.arraySum = function () {
        for (var _i = 0, _a = this.arr; _i < _a.length; _i++) {
            var n = _a[_i];
            this.sum += n;
        }
    };
    ArraySum.prototype.display = function () {
        console.log("Factorial of " + this.num + " : " + this.prod);
        console.log("Sum of Array : " + this.sum);
    };
    return ArraySum;
}());
var obj = new ArraySum(5);
obj.fact();
obj.arraySum();
obj.display();
