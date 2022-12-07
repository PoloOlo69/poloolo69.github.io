// every .button class
const buttons = document.querySelectorAll('.button');
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
    let mailText = mail.innerText;
    mailText = mailText.replace(/\s/g, '');
    const input = document.createElement('input');
    input.setAttribute('value', mailText);
    document.body.appendChild(input);
    input.select();
    const result = document.aValue = "Copy";
    document.body.removeChild(input);
    if(result){
        alert("Email copied to clipboard");
    }
}
Transition();