class LetConstVar{

    printNumber(){
        var i = 99;
        for (var i=0; i<3 ; i++)
        {
            console.log(i);
        }
        console.log('wypisz: ' + i)
    }
    printNumber2(){
        let i = 99;
        //let i = 100;  nie pozwoli drugi raz stwozyc takiej zmiennej
        for (let i=0; i<3 ; i++)
        {
            console.log(i);
        }
        console.log('wypisz: ' + i)
    }
    checkIf()
    {
        let a = 'jestem A'
        if(true)
        {
            var b = 'Jestem B';
            console.log(a);
            console.log(b);
        }
        console.log(b);  //tutaj var jest widoczne a let nie z ifa wyżej
    }
    showConst()
    {
        const num = 100;
        console.log(num);
    }

}

let example2 = new LetConstVar()
example2.printNumber();
example2.printNumber2();