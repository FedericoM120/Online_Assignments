let output = document.querySelector('.output');
output.innerHTML = '';

let countdownPhrase = "Countdown ";

const countDownNumbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function countDown() {
    const para = document.createElement('p');
    output.appendChild(para);
    para.textContent =                  
    for (let i = 10; i <= 0; i--) {
        if (i > 0) {
            countdownPhrase = `${countdownPhrase}${countDownNumbers[i]}`
        } else {
            countdownPhrase = "Blast off!"
        }
    }
}

console.log(countDown);





// let i = 10;

// const para = document.createElement('p');
// para.textContent = ;
// output.appendChild(para);