var Student = /** @class */ (function () {
    function Student(roll, name, address) {
        this.roll = roll;
        this.name = name;
        this.address = address;
    }
    Student.prototype.display = function () {
        console.log("Roll : " + this.roll);
        console.log("Name : ".concat(this.name));
        console.log("Address : " + this.address);
    };
    return Student;
}());
var student = new Student(1, "Raja", "Bihar");
student.display();
