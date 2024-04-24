var Fibonacci = /** @class */ (function () {
    function Fibonacci() {
        this.a = 0;
        this.b = 1;
        this.arr = [];
    }
    Fibonacci.prototype.fibonacci = function (n) {
        this.num = n;
        if (this.num == 0)
            return;
        if (this.num >= 1) {
            this.arr.push(this.a);
        }
        if (this.num >= 2) {
            this.arr.push(this.b);
        }
        for (this.i = 3; this.i <= this.num; this.i++) {
            var c = this.a + this.b;
            this.a = this.b;
            this.b = c;
            this.arr.push(c);
        }
    };
    Fibonacci.prototype.display = function () {
        for (this.j = 0; this.j < this.arr.length; this.j++) {
            console.log(this.j + 1 + " term of fibonacci series : " + this.arr[this.j]);
        }
    };
    return Fibonacci;
}());
var obj4 = new Fibonacci();
obj4.fibonacci(10);
obj4.display();
