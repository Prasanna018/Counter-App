let count = document.querySelector(".count");
let minus = document.querySelector("#btn-decrese");
let plus = document.querySelector("#btn-increse");
let changeBy = document.querySelector(".changeBy");

let reset = document.querySelector("#reset-btn");




minus.addEventListener("click", () => {
    let sub = parseInt(count.innerText);

    const change = parseInt(changeBy.value)
    count.innerText = sub - change;

})

plus.addEventListener("click", () => {
    let add = parseInt(count.innerText);
    const change1 = parseInt(changeBy.value)


    count.innerText = add + change1;
})


reset.addEventListener("click", () => {
    count.innerText = 0;
    changeBy.value = 0;
})