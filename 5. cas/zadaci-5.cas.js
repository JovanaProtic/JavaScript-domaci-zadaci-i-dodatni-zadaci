// 1. Napisati funkciju koja prima broj od 1-10. 
// Unutar funkcije generisati nasumičan broj (Math.random) od 1-10 
// i ispisati korisniku da li je pogodio broj ili ne.


// function randomBr (){
// 	var izborKorisnika = prompt('Izaberite broj od 1 do 10.');
// 	var broj = Math.floor((Math.random() * 10) + 1);
// 	if (izborKorisnika == broj) {
// 		console.log('Pogodili ste broj.');
// 	} else {
// 		console.log('Niste pogodili broj.');
// 	}
// }
// randomBr();

	
// 2. Napisati funkciju koja prima 4 broja, 
// posebno sabira pozitivne,
// posebno negativne 
// i vraća njihov proizvod (pozitivni * negativni)

// function brojevi (a, b, c, d) {
// 	var pozitivni = [];
// 	var negativni = [];
// 	var brojevi = [a,b,c,d];
// 	for (var i = 0; i < brojevi.length; i++) {
// 		if (brojevi[i] >= 0){
// 			pozitivni.push(brojevi[i]);
// 		}
// 		if (brojevi[i] < 0) {
// 			negativni.push(brojevi[i]);
// 		}

// 	}
// 	console.log("pozitivni brojevi su: " + pozitivni);
// 	console.log("negativni brojevi su: " + negativni);
// 	var zbirPozitivnih = 0;
// 	var zbirNegativnih = 0;

// 	for(var x = 0; x < pozitivni.length; x++) {
// 		zbirPozitivnih += pozitivni[x];
// 	}
// 	for(var y = 0; y < negativni.length; y++) {
// 		zbirNegativnih += negativni[y];
// 	}

// 	console.log("zbir pozitivnih je " + zbirPozitivnih);
// 	console.log("zbir negativnih je " + zbirNegativnih);
// 	return (zbirPozitivnih * zbirNegativnih);	
// }

// console.log(brojevi(1, 2, -5, 0));


// 		// 2. nacin - kraci

// function brojevi2nacin(a, b, c, d) {
// 	var zbirPozitivnih = 0;
// 	var zbirNegativnih = 0;
// 	var brojevi = [a,b,c,d];
// 	for (var i = 0; i < brojevi.length; i++) {
// 		if (brojevi[i] >= 0){
// 			zbirPozitivnih += brojevi[i];
// 		}
// 		if (brojevi[i] < 0) {
// 			zbirNegativnih += brojevi[i];
// 		}
// 	}
// 	console.log("zbir pozitivnih je " + zbirPozitivnih);
// 	console.log("zbir negativnih je " + zbirNegativnih);
// 	return (zbirPozitivnih * zbirNegativnih);	
// }

// console.log(brojevi2nacin(1, 2, -5, 0));


// 3. Napisati funkciju koja prima niz kao parameter 
// i sabira prvi i poslednji element niza. 
// Funkcija treba da podržava niz bilo koje veličine. 
// Hint: iskoristiti length.

// function saberiPrviIPoslednji(niz) {
// 	return niz[0] + niz[niz.length-1];
// }
// console.log(saberiPrviIPoslednji([1,2,3,4,5]));





// 4. Napisati funkciju koja prima niz brojeva 
// i sabira poslednja tri. 
// Funkcija treba da podržava niz bilo koje veličine.

// function saberiPoslednjaTri(niz) {
// 	return niz[niz.length-1] + niz[niz.length-2] + niz[niz.length-3];
// }
// console.log(saberiPoslednjaTri([1,2,3,4,5,6,7,-8,9]));



// 5. Napisati funkciju koja prima niz
//  i dva broja koji predstavljaju indexe. 
//  Zameniti vrednosti u nizu na datim indexima. 
//  Primer: ako su indexi 3 i 10  potrebno je zameniti vrednosti niz[3] i niz[10]

// function zamena(niz,prviIndex,drugiIndex) {
// 	var pomocna = niz[prviIndex];
// 	niz[prviIndex] = niz[drugiIndex];
// 	niz[drugiIndex] = pomocna;
// 	return niz;
// }
// console.log(zamena([1,2,3,4,5,6,7,8,9,10,11,12], 2, 9));



// 6. Napisati funkciju koja prima niz 
// i vraća drugi niz sa obrnutim redosledom elemenata, 
// tako da je poslednji element u prvom nizu bude prvi element u poslednjem nizu, 
// pretposlednji drugi, itd... 
// Primer: [15, 3, 9, 69, 100] > [100, 69, 9, 3, 15]

// function obrnutiRedosled(niz) {
// 	var drugiNiz = [];
// 	for (var i = 1; i <= niz.length; i++) {
// 		drugiNiz.push(niz[niz.length-i]);
// 	}
// 	return drugiNiz;
// }
// console.log(obrnutiRedosled([15, 3, 9, 69, 100]));

								// Kraci nacin:

// function obrnutiRedosled(niz) {
// 	drugiNiz = niz.reverse();
// 	return drugiNiz;
// }
// console.log(obrnutiRedosled([15, 3, 9, 69, 100]));


// 7. Napisati funkciju koja prima tri parametra.
//  Prvi parametar treba da bude niz brojeva, 
//  drugi parametar početni index i drugi krajnji index. 
//  Sabrati elemente niza od početnog do krajnjeg indexa.
 
// Primer ulaznih podataka [10, 33, 77, 50, 9, 17, 3, 120],
//  2, 5 > sabrati brojeve od 2. do 5. indexa uključujuci i 2. i 5.
 
// Primer izlaznih podataka: 153

// function indexSum (nizBr, pocetniIndex, krajnjiIndex) {
// 	var sabraniElementi = 0;
// 	for (var i = pocetniIndex; i <= krajnjiIndex; i++) {
// 		sabraniElementi += nizBr[i];
// 	}
// 	return sabraniElementi;
// }
// console.log(indexSum([10, 33, 77, 50, 9, 17, 3, 120], 2, 5));


							// DODATNI ZADACI


// 1. Napisati funkciju koja prima niz brojeva 
//    i vraća najveći proizvod dva susedna elementa niza.
//    primeri:
//    [-23, 4, -3, 8, -12]  =>  -12 (4 * -3 daju najveći proizvod)
// ______________
// -23 * 4 = -92
// 4 * -3 = -12
// -3 * 8 = -24
// 8 * -12 = -96
// ______________
// [3, 6, -2, -5, 7, 3]  =>  21 (7 * 3 daju najveći proizvod).


// function najveciBr(niz) {
// 	var proizvodSuseda = [];
// 	for(var i = 0; i < niz.length; i++) {
// 		if(i < niz.length-1){
// 			proizvodSuseda.push(niz[i] * niz[i+1]);
// 		}
// 	}
// 	return Math.max.apply(null, proizvodSuseda);
// }
// console.log(najveciBr([-23, 4, -3, 8, -12]));
// console.log(najveciBr([3, 6, -2, -5, 7, 3]));


// 2. Napisaati funkciju koja prima niz stringova kao parametar. 
//    Proći kroz sve elemente niza 
//    i za svaki string proveriti da li sadrži neki broj u sebi. 
//    Ako sadrži, ispisati vrednost tog stringa i tekst “string sadrži broj”,
//    a u suprotnom vrednost stringa i tekst “string ne sadrži broj”.
//    Funkciju testirati sa sledećim nizom:
//    ['no-numbers-here', 'time2time', "258", ' ', 'me2', '10littleindians', 'just-letters']
//    Treba da se dobije sledeće:
//    no-numbers-here string ne sadrži broj
//    time2time string sadrži broj.
							
function testiranjeStringova(niz) {
	for(var i = 0; i < niz.length; i++) {
			if(niz[i].includes('0') || niz[i].includes('1') || niz[i].includes('2') 
				|| niz[i].includes('3') || niz[i].includes('4') || niz[i].includes('5') 
				|| niz[i].includes('6') || niz[i].includes('7') || niz[i].includes('8') 
				|| niz[i].includes('9')) {
				console.log('String ' + niz[i] + ' sadrzi broj.');
			} 
			else {
				console.log('String ' + niz[i] + ' ne sadrzi broj.');
		}
	}
}
console.log(testiranjeStringova (['no-numbers-here', 'time2time', "258", ' ', 'me2', 
	'10littleindians', 'just-letters']));






