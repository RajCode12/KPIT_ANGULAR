var SumNumber = /** @class */ (function () {
    function SumNumber(num) {
        this.res = 0;
        this.num = num;
    }
    SumNumber.prototype.sum = function () {
        for (this.i = 1; this.i <= this.num; this.i++) {
            this.res += this.i;
        }
    };
    SumNumber.prototype.display = function () {
        console.log("Sum of number from 1 to " + this.num + " is : " + this.res);
    };
    return SumNumber;
}());
var obj = new SumNumber(5);
obj.sum();
obj.display();
