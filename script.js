// <div class="blue-cont">
//  <input id="values" type="text">
// <button id="conv-btn">Convert</
// <p id="len-el">
// <p id="vol-el"></p>
// <p id="mas-el"></p>

let valueEl = document.getElementById("values")
let convBtn = document.getElementById("conv-btn")
let lenEl = document.getElementById("len-el")
let volEl = document.getElementById("vol-el")
let masEl = document.getElementById("mas-el")

function lenConv() {
    let ipVal = valueEl.value
    let metCon = Number(ipVal) * 3.280
    let ftCon = Number(ipVal) * 0.304

    let res = `${ipVal}m = ${metCon.toFixed(3)}ft | ${ipVal}ft = ${ftCon.toFixed(3)}m`
    lenEl.innerHTML = res
}

function volConv() {
    let ipVal2 = valueEl.value
    let metCon2 = Number(ipVal2) * 0.264
    let ftCon2 = Number(ipVal2) * 3.785

    let res2 = `${ipVal2}l = ${metCon2.toFixed(3)}gal | ${ipVal2}gal = ${ftCon2.toFixed(3)}l`
    volEl.innerHTML = res2
}

function masConv() {
    let ipVal3 = valueEl.value
    let metCon3 = Number(ipVal3) * 2.204
    let ftCon3 = Number(ipVal3) * 0.453

    let res3 = `${ipVal3}kg = ${metCon3.toFixed(3)}lb | ${ipVal3}lb = ${ftCon3.toFixed(3)}kg`
    masEl.innerHTML = res3
}

convBtn.addEventListener("click", function() {
    lenConv()
    volConv()
    masConv()
})