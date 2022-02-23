let output = document.querySelector('.output');
output.innerHTML = '';

function coundtDown() {
    for (let i = 10; i >= 0; i--) {
       const para = document.createElement('p');
       if (i > 0) {
          para.textContent = `Countdown ${i}`;  
        } else {
        para.textContent = 'Blast off!';
    }
    output.appendChild(para);
}



// let i = 10;

// const para = document.createElement('p');
// para.textContent = ;
// output.appendChild(para);
