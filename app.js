// every .button class
const buttons = document.querySelectorAll('.button');
const sections = document.querySelectorAll('.section');
const body = document.querySelector('body')

function Transition(){
    buttons.forEach(button=>{
        button.addEventListener('click', e => {
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
}
function copyToClipboard(){
    const mail = document.getElementById("email");

    mail.select();
    mail.setSelectionRange(0, 99999); // for mobile
    navigator.clipboard.writeText(mail.value());

    alert("Copied to Clipboard: "+ mail.value());
}
Transition();