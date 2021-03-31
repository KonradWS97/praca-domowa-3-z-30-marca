//Do zmiennej tekst przypisz wartość “To jest tekst do użycia w JS”.
let textWJs = document.getElementById("info")// deklaruje wartosc z html i deklaruje ja jako nazwe textwjs
let tekst ="To jest tekst do użycia w JS" // deklaracja zmiennej tekst jako string
textWJs.innerHTML=tekst // wpisanie tej zmiennej do html manipulacja DOMem
//Ponownie wypisz tekst, tym razem do div-a id=dane, ale ma się on składać tylko z dużych liter.
let DuzeLiteryNapis= tekst.toUpperCase();  // funkcja zamienia małe literki na duze
let TextDuzeLitery = document.getElementById("dane")// deklaruje wartosc z html
TextDuzeLitery.innerHTML=DuzeLiteryNapis// manipulacja Domem i wpisanie stringa z duzymi lierami do html