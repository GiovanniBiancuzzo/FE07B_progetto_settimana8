//prima classe
var FirstUser = /** @class */ (function () {
    //dichiarazioni del costruttore
    function FirstUser(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    //implememntazione metodi dell'interfaccia
    FirstUser.prototype.ricarica = function (unaRicarica) {
        this.credito += unaRicarica;
    };
    FirstUser.prototype.chiamata = function (minutiDurata) {
        this.numeroChiamate++;
        this.credito -= (0.20 * minutiDurata);
    };
    FirstUser.prototype.numero404 = function () {
        return this.credito;
    };
    FirstUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    FirstUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return FirstUser;
}());
var SecondUser = /** @class */ (function () {
    //dichiarazioni del costruttore
    function SecondUser(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    //implememntazione metodi dell'interfaccia
    SecondUser.prototype.ricarica = function (unaRicarica) {
        this.credito += unaRicarica;
    };
    SecondUser.prototype.chiamata = function (minutiDurata) {
        this.numeroChiamate++;
        this.credito -= (0.20 * minutiDurata);
    };
    SecondUser.prototype.numero404 = function () {
        return this.credito;
    };
    SecondUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    SecondUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return SecondUser;
}());
var ThirdUser = /** @class */ (function () {
    //dichiarazioni del costruttore
    function ThirdUser(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    //implememntazione metodi dell'interfaccia
    ThirdUser.prototype.ricarica = function (unaRicarica) {
        this.credito += unaRicarica;
    };
    ThirdUser.prototype.chiamata = function (minutiDurata) {
        this.numeroChiamate++;
        this.credito -= (0.20 * minutiDurata);
    };
    ThirdUser.prototype.numero404 = function () {
        return this.credito;
    };
    ThirdUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    ThirdUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return ThirdUser;
}());
//implementazione della classe
var primo = new FirstUser(100, 50);
var secondo = new SecondUser(80, 10);
var terzo = new ThirdUser(30, 0);
var ricaricaCredito = 20;
var minutiChiamata = 50;
//utilizzo dei metodi giusti per effettuare due ricariche e due chiamate
//console.log():
/*'primo utente'
'valore carica disponibile:' -> metodo
'numero chiamate:' -> metodo
'dopo l'azzeramento'
'numero chiamate:' -> metodo
*/
console.log('----------Primo utente----------');
console.log("Valore del credito iniziale: ".concat(primo.numero404(), " euro"));
console.log("Numero chiamate iniziali: ".concat(primo.getNumeroChiamate()));
primo.ricarica(ricaricaCredito);
console.log("Valore del credito dopo una ricarica di ".concat(ricaricaCredito, " euro: ").concat(primo.numero404(), " euro"));
console.log("Effettuo una chiamata da ".concat(minutiChiamata, " minuti"));
primo.chiamata(minutiChiamata);
console.log("Numero chiamate: ".concat(primo.getNumeroChiamate()));
console.log("Valore del credito dopo la chiamata: ".concat(primo.numero404()));
primo.azzeraChiamate();
console.log("Numero chiamate dopo l'azzeramento: ".concat(primo.getNumeroChiamate()));
console.log('');
/*
'secondo utente'
'valore carica disponibile:' -> metodo
'numero chiamate:' -> metodo
'dopo l'azzeramento'
'numero chiamate:' -> metodo
*/
console.log('----------Secondo utente----------');
console.log("Valore del credito iniziale: ".concat(secondo.numero404(), " euro"));
console.log("Numero chiamate iniziali: ".concat(secondo.getNumeroChiamate()));
secondo.ricarica(ricaricaCredito);
console.log("Valore del credito dopo una ricarica di ".concat(ricaricaCredito, " euro: ").concat(secondo.numero404(), " euro"));
console.log("Effettuo una chiamata da ".concat(minutiChiamata, " minuti"));
secondo.chiamata(minutiChiamata);
console.log("Numero chiamate: ".concat(secondo.getNumeroChiamate()));
console.log("Valore del credito dopo la chiamata: ".concat(secondo.numero404()));
secondo.azzeraChiamate();
console.log("Numero chiamate dopo l'azzeramento: ".concat(secondo.getNumeroChiamate()));
console.log('');
/*
'terzo utente'
'valore carica disponibile:' -> metodo
'numero chiamate:' -> metodo
'dopo l'azzeramento'
'numero chiamate:' -> metodo
 */
console.log('----------Terzo utente----------');
console.log("Valore del credito iniziale: ".concat(terzo.numero404(), " euro"));
console.log("Numero chiamate iniziali: ".concat(terzo.getNumeroChiamate()));
terzo.ricarica(ricaricaCredito);
console.log("Valore del credito dopo una ricarica di ".concat(ricaricaCredito, " euro: ").concat(terzo.numero404(), " euro"));
console.log("Effettuo una chiamata da ".concat(minutiChiamata, " minuti"));
terzo.chiamata(minutiChiamata);
console.log("Numero chiamate: ".concat(terzo.getNumeroChiamate()));
console.log("Valore del credito dopo la chiamata: ".concat(terzo.numero404()));
terzo.azzeraChiamate();
console.log("Numero chiamate dopo l'azzeramento: ".concat(terzo.getNumeroChiamate()));
