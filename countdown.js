
function coundtDown() {
    const para = document.createElement('p');
    for (let i = 10; i > 0; i--) {
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
