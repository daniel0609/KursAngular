class ThisProblem{

    msg: string = 'Hello world';
    printFunction()
    {
        return function()
        {
            console.log(this.msg);
        }
    }
    printFunction2()
    {
        return () =>
        {
            console.log(this.msg);
        }
    }
}

var example1 = new ThisProblem();
example1.msg = 'Hello';
var fun = example1.printFunction();
fun();

var fun2 = example1.printFunction2();
fun2();