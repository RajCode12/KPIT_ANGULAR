class Student {
    id:number;
    name:string;
    marks:number;
    constructor(id:number,name:string,marks:number) {
        this.id = id;
        this.name = name;
        this.marks = marks;
    }
    display() {
        console.log("Id : " + this.id);
        console.log("Name : " + this.name);
        console.log("Marks : " + this.marks);
    }
}
let obj:Student = new Student(1,"Raj",90);
obj.display();