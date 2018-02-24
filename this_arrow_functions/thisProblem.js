var ThisProblem = /** @class */ (function () {
    function ThisProblem() {
        this.msg = 'Hello world';
    }
    ThisProblem.prototype.printFunction = function () {
        return function () {
            console.log(this.msg);
        };
    };
    ThisProblem.prototype.printFunction2 = function () {
        var _this = this;
        return function () {
            console.log(_this.msg);
        };
    };
    return ThisProblem;
}());
var example1 = new ThisProblem();
example1.msg = 'Hello';
var fun = example1.printFunction();
fun();
var fun2 = example1.printFunction2();
fun2();
