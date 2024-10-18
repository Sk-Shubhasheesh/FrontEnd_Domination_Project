const input = document.getElementById('input');
const output = document.getElementById('output');
console.log(input);

input.addEventListener("input", ()=>{
    let val = input.value
    let out = val * 2.2;
    output.innerHTML = out.toFixed(2);
})