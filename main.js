
import { convertUnicodeToBijoy } from './src/uni2bijoy.js';
import { convertBijoyToUnicode } from './src/bijoy2uni.js';

document.getElementById('uni-to-bijoy').addEventListener('click', () => {
    const input = document.getElementById('unicode-input').value;
    const output = convertUnicodeToBijoy(input);
    document.getElementById('bijoy-output').value = output;
});

document.getElementById('bijoy-to-uni').addEventListener('click', () => {
    const input = document.getElementById('bijoy-output').value;
    const output = convertBijoyToUnicode(input);
    document.getElementById('unicode-input').value = output;
});

window.copyText = (id) => {
    const el = document.getElementById(id);
    el.select();
    document.execCommand('copy');
    alert('Text copied to clipboard!');
};

window.clearText = (id) => {
    document.getElementById(id).value = '';
};
