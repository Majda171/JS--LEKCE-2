const price = 12;
const visitors = 174;
const show = 15;
const revenue = (price * visitors) * show;
const studentPrice = 12 * 0.65;
const students = 174 * 0.4;
const adults = 174 - students;
const revenueDiscount = (studentPrice * students) + (adults * price);
document.body.innerHTML += `<p> Základní příjem divadla je ${revenue}</p>`;
document.body.innerHTML += `<p> Příjem divadla se slevou pro studenty je ${revenueDiscount}</p>`;

document.body.innerHTML += `<h1>Druhý příklad</h1>`;

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

