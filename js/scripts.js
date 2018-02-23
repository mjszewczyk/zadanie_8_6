// zadanie - instrukcje warunkowe
var a = prompt('Podaj wartość a');
var b = prompt('Podaj wartość b');
var value = (a * a) - (2 * a * b) - (b * b);

var msg = 'wynik obliczeń ' + value;
alert(msg); 
console.log(msg);

var msg2;
if (value > 0) {
    msg2 = 'wynik dodatni';
} else if (value < 0) {
    msg2 = 'wynik ujemny';
} else {
    msg2 = 'wynik zerowy';
}
alert(msg2);
console.log(msg2);
