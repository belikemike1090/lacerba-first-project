console.log('frontend code running');

console.log('href: ', window.location.href);
console.log('hostaname: ', window.location.hostname);

const title = document.getElementById('title');
const button = document.getElementById('button');

if (button) {
    button.onclick = () => {
        if (title) {
            title.innerText = 'titolo cambiato da typescript';
        }
    }
}


