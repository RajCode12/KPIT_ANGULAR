class Table {
    num:number;
    i:number;
    constructor() {}
    table(n:number):void {
        this.num=n;
        for(this.i=1; this.i <= 10; this.i++) {
            console.log(this.num + " * " + this.i + " : " + this.i*this.num);
        }
    }
}
let obj:Table = new Table();
obj.table(5);