var LetConstVar = /** @class */ (function () {
    function LetConstVar() {
    }
    LetConstVar.prototype.printNumber = function () {
        var i = 99;
        for (var i = 0; i < 3; i++) {
            console.log(i);
        }
        console.log('wypisz: ' + i);
    };
    LetConstVar.prototype.printNumber2 = function () {
        var i = 99;
        //let i = 100;  nie pozwoli drugi raz stwozyc takiej zmiennej
        for (var i_1 = 0; i_1 < 3; i_1++) {
            console.log(i_1);
        }
        console.log('wypisz: ' + i);
    };
    LetConstVar.prototype.checkIf = function () {
        var a = 'jestem A';
        if (true) {
            var b = 'Jestem B';
            console.log(a);
            console.log(b);
        }
        console.log(b); //tutaj var jest widoczne a let nie z ifa wyżej
    };
    LetConstVar.prototype.showConst = function () {
        var num = 100;
        console.log(num);
    };
    return LetConstVar;
}());
var example2 = new LetConstVar();
example2.printNumber();
example2.printNumber2();
