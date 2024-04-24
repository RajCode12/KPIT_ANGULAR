var Table = /** @class */ (function () {
    function Table(num) {
        this.num = 0;
        this.num = num;
    }
    Table.prototype.display = function () {
        for (this.i = 1; this.i <= 10; this.i++) {
            console.log(this.num + " * " + this.i + " : " + this.num * this.i);
        }
    };
    return Table;
}());
var obj = new Table(5);
obj.display();
