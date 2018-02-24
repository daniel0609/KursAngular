class ExampleFunctions{
    msg: string = 'Hello world';

    showMsg(): void // opis co zwraca funckja moze tego nie byc [ showMsg(): ]  
    {
        console.log(this.msg);
    }
    hello(): string
    {
        return 'Hello world, funkcja hello'
    }
    hello1(message: string): void
    {
        console.log(message);
    }
    hello2(message1: string, message2?: string): void // znak? oznacza, że bue trzeba podawać tego argumentu
    {
        console.log(message1 + '  ' + message2);
    }
    hello3(message1: string, message2 = 'hello3'): void
    {
        console.log(message1 + ' ' + message2);
    }
    hello4 = message => console.log('Witaj świecie, funkcja anonimowa hello4' + message);
    hello5 = () => console.log('Witaj świecie, funkcja anonimowa hello4');
    hello6 = (message: string): string => {return 'Witaj świecie, funkcja anonimowa'};
}

var example = new ExampleFunctions();
example.showMsg();
example.hello1('hello1');
example.hello2('hello2');
example.hello3('hello3');
example.hello4('wywoałana');