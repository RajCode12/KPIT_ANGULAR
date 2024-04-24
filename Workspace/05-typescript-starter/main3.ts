class Student {
    roll:number;
    name:string;
    address:string;
    constructor(roll,name,address) {
        this.roll=roll;
        this.name=name;
        this.address=address;
    }
    display():void{
        console.log("Roll : " + this.roll);
        console.log(`Name : ${this.name}`);
        console.log("Address : " + this.address);
    }
}
let student:Student=new Student(1,"Raja","Bihar");
student.display();