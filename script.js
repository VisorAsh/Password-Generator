const generator = document.getElementById('generator');
// console.log(generator);

const length = 25;

const MajLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const minLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+[]{}|.<>/';

const all = MajLetters + minLetters + numbers + symbols;
// console.log(all);

const generator_pasword = () => {
    let password = '';

    password += MajLetters[Math.floor(Math.random() * MajLetters.length)];
    password += minLetters[Math.floor(Math.random() * minLetters.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (password.length < length) {
        password += all[Math.floor(Math.random() * all.length)];
    };

    generator.value = password;
    // console.log(password);
};

const copy_password = () => {
    generator.select();
    // document.execCommand('copy'); Old method

    // New method
    navigator.clipboard.writeText(generator.value).then(() => {
        console.log('Password copied to clipboard successfully!');
    }).catch(err => {
        console.error('Failed to copy password to clipboard: ', err);
    });
};
