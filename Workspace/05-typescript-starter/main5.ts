class A {
    id:number=0
    name:string=""
    constructor(id,name) {
        this.id = id;
        this.name = name;
    }
    display() {
        console.log("Id : " + this.id);
        console.log("Name : " + this.name);
    }
}
let a:A=new A(1,"Raj");
a.display();