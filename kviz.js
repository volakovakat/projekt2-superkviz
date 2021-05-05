let odpoved = document.querySelector('#odpovedi');
let poradi = document.querySelector('#poradi');
let otazka = document.querySelector('#otazka');
let obrazek = document.querySelector('#obrazek');
let moznosti = document.querySelector('#moznosti');
let kviz = document.querySelector('.kviz');
let vysledek = document.querySelector('.vysledek');

function onclickOdpoved(event) {
    if (aktualniOtazka.vysledek === Number(event.target.dataset.odpoved)) {
        otazky[indexOtazka].uzivatelovaOdpoved = Number(event.target.dataset.odpoved);
        console.log('správně');
    } else {
        otazky[indexOtazka].uzivatelovaOdpoved = Number(event.target.dataset.odpoved);
        console.log('špatně');
    } 
    if (indexOtazka + 1 >= otazky.length) {
        console.log('Nemám další otázky');
        vykresleniVysledku();
    } else {
        indexOtazka++;
        aktualniOtazka = otazky[indexOtazka];
        vykresleniOtazky();
    }
};

function vykresleniVysledku() {
    kviz.style.display = "none";
    vysledek.style.display = "block";
    let hodnoceni = document.createElement('div');
    let pocetSpravnychOdpovedi = 0;
    for (let i = 0; i < otazky.length; i++ ) {
        let hodnoceniOtazka = document.createElement('h3');
        hodnoceniOtazka.innerText = otazky[i].otazkaText;
        vysledek.appendChild(hodnoceniOtazka);
        let hodnoceniVysledek = document.createElement('div');
        let hodnoceniOdpoved = document.createElement('div');
        if (otazky[i].vysledek === otazky[i].uzivatelovaOdpoved) {
            hodnoceniVysledek.innerText = 'Tvoje odpověď: ' + otazky[i].odpovedi[otazky[i].uzivatelovaOdpoved];
            hodnoceniOdpoved.innerText = 'To je SPRÁVNĚ.';
            pocetSpravnychOdpovedi++;
        } else {
            hodnoceniVysledek.innerText = 'Tvoje odpověď: ' + otazky[i].odpovedi[otazky[i].uzivatelovaOdpoved];
            hodnoceniOdpoved.innerText = 'Správná odpověď: ' + otazky[i].odpovedi[otazky[i].vysledek];
        }
    vysledek.appendChild(hodnoceniVysledek);
    vysledek.appendChild(hodnoceniOdpoved);
    }
    //vysledek.appendChild(hodnoceni);
    let celkovaUspesnost = document.createElement('h2');
    celkovaUspesnost.innerText = 'Správně ' + pocetSpravnychOdpovedi + ' ze ' + otazky.length + ' otázek. ' + 'Úspěšnost ' + Math.floor((pocetSpravnychOdpovedi/otazky.length) * 100) + ' %.';

    vysledek.appendChild(celkovaUspesnost);
};

let otazka1 = {
    otazkaText: "Co je ikonická hračka z 80. let?",
    obrazekSrc: "obrazky/moncicak.jpg",
    odpovedi: ["Kočičák", "Mončičák", "Opičák"],
    vysledek: 1,
    uzivatelovaOdpoved: NaN
}
let otazka2 = {
    otazkaText: "Jaké je moje nejoblíbenější ovoce?",
    obrazekSrc: "obrazky/ovoce.jpg",
    odpovedi: ["Kokos", "Melounek", "Jahoda", "Ani jedna z možností"],
    vysledek: 2,
    uzivatelovaOdpoved: NaN
}
let otazka3 = {
    otazkaText: "Pro úspěšné absolvování kurzu je potřeba ...",
    obrazekSrc: "obrazky/pivo.jpg",
    odpovedi: ["Učit se", "Chodit do hospody"],
    vysledek: 0,
    uzivatelovaOdpoved: NaN
}
/* let vysledek = {
    vysledekH2: "Tvoje hodnocení",
    vysledekH3: otazka1,
} */

let otazky = [otazka1, otazka2, otazka3];
let indexOtazka = 0;
let aktualniOtazka = otazky[indexOtazka];

function vykresleniOtazky() {
    otazka.innerText = aktualniOtazka.otazkaText;
    obrazek.src = aktualniOtazka.obrazekSrc;
    poradi.innerText = 'Otázka ' + (indexOtazka + 1) + '/' + otazky.length;
    let ulOdpovedi = document.createElement('ul');
        ulOdpovedi.id = "odpovedi";
    for (let i = 0; i < aktualniOtazka.odpovedi.length; i++) {
    let liOdpovedi = document.createElement('li');
        liOdpovedi.setAttribute('data-odpoved', i);
        liOdpovedi.innerText = aktualniOtazka.odpovedi[i];
        liOdpovedi.addEventListener('click', onclickOdpoved);
        ulOdpovedi.appendChild(liOdpovedi);
    }
    if (moznosti.children.length > 0) {
        moznosti.removeChild(moznosti.children[0]);
    }
    moznosti.appendChild(ulOdpovedi);   
};
vykresleniOtazky();

/* function zobrazVysledek() {
    if ()
}
 */



