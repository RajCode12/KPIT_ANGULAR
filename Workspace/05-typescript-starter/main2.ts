function print2(v1:any) {   //to take v1 of any type (only in typescript)
    console.log(v1);
    console.log(typeof(v1));
}
//static type language
let var2 : number = 10;
let var3 : string = "Raj";
let var4 : boolean = true;
let var5 : object = {};
let var6 : undefined;

print2(var2);
print2(var3);
print2(var4);
print2(var5);
print2(var6);

