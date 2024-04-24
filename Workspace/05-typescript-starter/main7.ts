class Student{
    id:number=1;
    name:string="Raj";
    constructor(id:number,name:string) {
        this.id=id;
        this.name=name;
    }
    display() {
        console.log("Id : " + this.id);
        console.log("Name : " + this.name);
    }
}
let obj:Student = new Student(2,"Dev");
obj.display();