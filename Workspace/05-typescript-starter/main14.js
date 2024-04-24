var Fibonacci = /** @class */ (function () {
    function Fibonacci(num) {
        this.a = 0;
        this.b = 1;
        this.arr = [];
        this.num = num;
    }
    Fibonacci.prototype.fibonacci = function () {
        if (this.num > 0) {
            this.arr.push(this.a);
        }
        if (this.num > 1) {
            this.arr.push(this.b);
        }
        for (this.i = 2; this.i <= this.num; this.i++) {
            var c = 0;
            c = this.a + this.b;
            this.a = this.b;
            this.b = c;
            this.arr.push(c);
        }
    };
    Fibonacci.prototype.dispaly = function () {
        console.log("rFibonacci series upto " + this.num + "terms : ");
        for (this.j = 0; this.j < this.arr.length; this.j++) {
            console.log(this.arr[this.j]);
        }
    };
    return Fibonacci;
}());
var obj2 = new Fibonacci(10);
obj2.fibonacci();
obj2.dispaly();
