var Student = /** @class */ (function () {
    function Student(id, name) {
        this.id = 1;
        this.name = "Raj";
        this.id = id;
        this.name = name;
    }
    Student.prototype.display = function () {
        console.log("Id : " + this.id);
        console.log("Name : " + this.name);
    };
    return Student;
}());
var obj = new Student(2, "Raj");
obj.display();
