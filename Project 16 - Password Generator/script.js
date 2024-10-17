const lengthp = document.querySelector('#length-number');
const upper = document.querySelector('#uppercase');
const lower = document.querySelector('#lowercase');
const number = document.querySelector('#numbers');
const symbol = document.querySelector('#symbols');
const passinp = document.querySelector('#pass-input');
const copy = document.querySelector('#copy');
const generate = document.querySelector('#generate');

const uppercasestr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercasestr = 'abcdefghijklmnopqrstuvwxyz';
const numberstr = '0123456789';
const symbolstr = '!@#$%^&*()_+';

generate.addEventListener('click', () => {
    // Reset password for each new generation
    let password = ''; 
    let str = '';

    if (upper.checked) {
        str += uppercasestr;
    }

    if (lower.checked) {
        str += lowercasestr;
    }

    if (number.checked) {
        str += numberstr;
    }

    if (symbol.checked) {
        str += symbolstr;
    }

    // Ensure lengthp.value is treated as a number
    const passwordLength = parseInt(lengthp.value);

    if (str.length === 0 || isNaN(passwordLength)) {
        alert('Please select at least one option and enter a valid length.');
        return;
    }

    for (let i = 0; i < passwordLength; i++) {
        let index = Math.floor(Math.random() * str.length);
        password += str[index];
    }

    passinp.value = password;
});

copy.addEventListener('click', () => {
    if (passinp.value === '') {
        alert('Please Generate a Password First');
    } else {
        const newele = document.createElement('textarea');
        newele.value = passinp.value;
        document.body.appendChild(newele);
        newele.select();
        document.execCommand('copy');
        alert('Password Copied to Clipboard');
        newele.remove();
    }
});
