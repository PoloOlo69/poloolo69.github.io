let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
let maxDia = Math.sqrt(vw * vw + vh * vh)/2;
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const copyButton = document.querySelector('#copy-button');
const hearts = document.querySelector('#hcon');
const imprint = document.querySelector('#imprintcon');

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
    }})

copyButton.addEventListener('click', (e) => {
    navigator.clipboard.writeText('paul.duerrwang@icloud.com')
        .then(() => {
            console.log('Text copied to clipboard');
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
    copyButton.textContent = 'Copied to Clipboard!';
})

hearts.addEventListener('pointermove', (e) => {
    let x = e.clientX; let y = e.clientY;
    let x2 = vw/2 - x; let y2 = vh/2 - y;
    let dst = Math.sqrt(x2 * x2 + y2 * y2);
    let frac = dst/maxDia;
    console.log(frac);
    document.documentElement.style.setProperty('--frac', frac+'');
    document.documentElement.style.setProperty('--hi', 16*frac+'px');
    document.documentElement.style.setProperty('--mid', 8*frac+'px');
    document.documentElement.style.setProperty('--lo', 4*frac+'px');
    document.documentElement.style.setProperty('--shi', -16*frac+'px');
    document.documentElement.style.setProperty('--smid', -12*frac+'px');
    document.documentElement.style.setProperty('--slo', -7*frac+'px');
    document.documentElement.style.setProperty('--rotat', 10*frac+'deg');
    document.documentElement.style.setProperty('--srotat', -10*frac+'deg');

});

