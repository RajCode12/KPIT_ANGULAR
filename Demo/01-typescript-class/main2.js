var Table = /** @class */ (function () {
    function Table() {
    }
    Table.prototype.table = function (n) {
        this.num = n;
        for (this.i = 1; this.i <= 10; this.i++) {
            console.log(this.num + " * " + this.i + " : " + this.i * this.num);
        }
    };
    return Table;
}());
var obj1 = new Table();
obj1.table(5);
