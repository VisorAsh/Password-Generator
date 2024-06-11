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

// const addPasswordToHistory = (password) => {
//     // Add new password to the beginning of the history array
//     history.unshift(password);

//     // Keep only the last 5 passwords
//     if (history.length > 5) {
//         history.pop();
//     }

//     // Update the displayed history
//     updateHistoryDisplay();
// };

// const updateHistoryDisplay = () => {
//     // Clear the current list
//     historyList.innerHTML = '';

//     // Add each password in history to the list
//     history.forEach((password, index) => {
//         const li = document.createElement('li');
//         li.textContent = password;
//         li.classList.add('history-list-item');
//         historyList.appendChild(li);
//     });
// };
