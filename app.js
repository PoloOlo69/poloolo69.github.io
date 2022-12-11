// every .button class
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const copyButton = document.querySelector('#copy-button');

buttons.forEach(button=>{
        button.addEventListener('click', () => {
            document.querySelector('.active-button').classList.remove('active-button');
            button.className+= ' active-button';
        })
    })

    body.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id){
            document.querySelector('.active').classList.remove('active');
            document.getElementById(id).classList.add('active');
        }

    })

copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText('paul.duerrwang@icloud.com')
        .then(() => {
            console.log('Text copied to clipboard');
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
    copyButton.style.textTransform = 'all .5s ease';
    copyButton.innerHTML = 'Copied to Clipboard!';

});


Transition();