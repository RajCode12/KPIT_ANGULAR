var Student = /** @class */ (function () {
    function Student(id, name, marks) {
        this.id = id;
        this.name = name;
        this.marks = marks;
    }
    Student.prototype.display = function () {
        console.log("Id : " + this.id);
        console.log("Name : " + this.name);
        console.log("Marks : " + this.marks);
    };
    return Student;
}());
var obj = new Student(1, "Raj", 90);
obj.display();
