class ClassInterface{

    msg: string = 'Hello';

    constructor(msg?:string)
    {

    }

    printMsg()
    {
        console.log(this.msg);
    }

}

interface Dog
{
    name: string;
    age: number;
    color: string;
    date?: Date;
}

let dog: Dog = ({name: 'Reksio', age: 3, color: 'Szary'});
console.log(dog);
console.log(dog.name);

let json: string = '{ "name": "Max", "age": 4, "color": "red", "date": "2017-12-31" }';
let myDog: Dog = JSON.parse(json);
console.log(myDog);