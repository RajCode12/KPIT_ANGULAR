class Table {
    num:number=0;
    constructor(num:number) {
        this.num = num;
    }
    i:number;
    display() {
        for(this.i = 1; this.i <= 10; this.i++) {
            console.log(this.num + " * " + this.i + " : " + this.num*this.i);
        }
    }
}
let obj:Table = new Table(5);
obj.display();