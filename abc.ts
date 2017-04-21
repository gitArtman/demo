var bool:boolean=true;
console.log(bool);


var arr:number[]=[1,2,3];
var arr2:Array<number>=[1,2,3];
console.log(arr[2]);
console.log(arr2[2]);


//enum Color {Red=1, Green=2, Blue=9};
//var c: Color = Color.Blue;
enum week {m=6,t,we,w,f,s};
var aoe:week=week.we;
console.log(aoe);

//
function m1():number{
	return 1+1;
}
console.log(m1());

function mession():void{
	//alert("干嘛，扫地。");
}
mession();

var one:number=null;
console.log(one);

class Abc{
	
private m:number=0;
public n:string="8";


constructor(){
console.log();

}
mes1(){console.log(456); return 5;}
mes2(){console.log(789);}
}
var mn:Abc=new Abc();
