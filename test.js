 //8.feladat

var darabszám = prompt('Add meg a darabszámot');
var típus = prompt('Add meg a jegy tipúsát!  pensioner/adul/student');


var típusok = {

    student: 300,
    adult: 350,
    pensioner: 280
};

console.log(darabszám);
console.log(típus);

var ár = típusok[típus];
var kedvezmény = darabszám > 10 ? 0.9 : 1;

var összeg = darabszám * ár * kedvezmény;

alert(összeg);