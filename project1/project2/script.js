
const simpleInterest = document.getElementById('count')
let c = simpleInterest.textContent;
function calculateSimpleInterest(principal, rate, time) {

    const simpleInterest = (principal * rate * time) / 100;
    return simpleInterest;
}
function reset ()
{
    c = 0;
    paraCount.textContent = c
}