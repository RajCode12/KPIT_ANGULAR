var A = /** @class */ (function () {
    function A(id, name) {
        this.id = 0;
        this.name = "";
        this.id = id;
        this.name = name;
    }
    A.prototype.display = function () {
        console.log("Id : " + this.id);
        console.log("Name : " + this.name);
    };
    return A;
}());
var a = new A(1, "Raj");
a.display();
