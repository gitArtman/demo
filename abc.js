var bool = true;
console.log(bool);
var arr = [1, 2, 3];
var arr2 = [1, 2, 3];
console.log(arr[2]);
console.log(arr2[2]);
//enum Color {Red=1, Green=2, Blue=9};
//var c: Color = Color.Blue;
var week;
(function (week) {
    week[week["m"] = 6] = "m";
    week[week["t"] = 7] = "t";
    week[week["we"] = 8] = "we";
    week[week["w"] = 9] = "w";
    week[week["f"] = 10] = "f";
    week[week["s"] = 11] = "s";
})(week || (week = {}));
;
var aoe = week.we;
console.log(aoe);
//
function m1() {
    return 1 + 1;
}
console.log(m1());
function mession() {
    //alert("干嘛，扫地。");
}
mession();
var one = null;
console.log(one);
var Abc = (function () {
    function Abc() {
        this.m = 0;
        this.n = "8";
        console.log(this);
    }
    Abc.prototype.mes1 = function () { console.log(456); return 5; };
    Abc.prototype.mes2 = function () { console.log(789); };
    return Abc;
}());
var mn = new Abc();
