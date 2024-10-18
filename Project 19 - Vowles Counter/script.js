const textarea = document.getElementById('textarea');
const button = document.getElementById('count');
const output = document.querySelector('.output');

button.addEventListener('click', ()=>{
    if(textarea.value === ''){
        output.innerHTML = 'Plese enter some text'
    }else{
        const val = textarea.value;
        let count = 0;
        for(let i=0; i<val.length; i++) {
            if( val[i] === "a" || val[i] === "e" || val[i] === "i" || val[i] === "o" || val[i] === "u" ) {
                count++;
            }
         }
         output.innerHTML = `The number of vowels are ${count}`;
    }
})