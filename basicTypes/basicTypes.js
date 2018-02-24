var BasicTypes = /** @class */ (function () {
    function BasicTypes() {
        this.name = 'Reksio';
        this.age = 1.5; // calkowite i zmienne
        this.colos = ['czarny', 'bialy'];
        this.dates = [new Date(), new Date()];
        this.pair = ['Poniedziałek', 1]; // krotka
        this.xyz = 222; // Gdy nie wiemy jakieo typu sa odbierane dane to mozna tego uzyc
        //name = 'Reksio'; mozna tez tak
    }
    return BasicTypes;
}());
