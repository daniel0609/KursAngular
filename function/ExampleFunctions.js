var ExampleFunctions = /** @class */ (function () {
    function ExampleFunctions() {
        this.msg = 'Hello world';
    }
    ExampleFunctions.prototype.showMsg = function () {
        console.log(this.msg);
    };
    ExampleFunctions.prototype.hello = function () {
        return 'Hello world, funkcja hello';
    };
    ExampleFunctions.prototype.hello1 = function (message) {
        console.log(message);
    };
    ExampleFunctions.prototype.hello2 = function (message1, message2) {
        console.log(message1 + '  ' + message2);
    };
    return ExampleFunctions;
}());
var example = new ExampleFunctions();
example.showMsg();
example.hello1('hello1');
example.hello2('hello2');
