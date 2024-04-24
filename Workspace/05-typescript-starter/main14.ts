class Fibonacci {
    num:number;
    a:number=0;
    b:number=1;
    constructor(num:number){
        this.num = num;
    }
    i:number;
    arr:number[]=[];
    fibonacci() {
        if(this.num > 0) {
            this.arr.push(this.a);
        } 
        if(this.num > 1) {
            this.arr.push(this.b);
        }
        for(this.i = 2; this.i <= this.num; this.i++) {
            let c:number=0;
            c = this.a + this.b;
            this.a = this.b;
            this.b = c;
            this.arr.push(c);
        }
    }
    j:number;
    dispaly() {
        console.log("rFibonacci series upto " + this.num + "terms : ");
        for(this.j = 0; this.j < this.arr.length; this.j++) {
            console.log(this.arr[this.j]);
        }
    }
}
let obj2:Fibonacci = new Fibonacci(10);
obj2.fibonacci();
obj2.dispaly(); 