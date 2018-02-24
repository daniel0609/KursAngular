class BasicTypes{
    name: string = 'Reksio';
    age: number = 1.5; // calkowite i zmienne
    colos: string[] = ['czarny', 'bialy'];
    dates: Array<Date> = [new Date(), new Date()];
    pair: [string, number] = ['Poniedziałek', 1]; // krotka
    xyz: any = 222; // Gdy nie wiemy jakieo typu sa odbierane dane to mozna tego uzyc
    //name = 'Reksio'; mozna tez tak
}