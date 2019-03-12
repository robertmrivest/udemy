import {BuildDoc, BuildDoc2} from './components/BuildDoc';
let line1 = 'This Quick Brown Fox';
let line2 = 'It was a rainy day';
let line3 = 'It was the best of times it was the worst of times';
let line4 = 'Keep your nose to the grindstone';
let line5 = 'Its the thought that counts'

let allLines = [line1, line2, line3, line4, line5];

const result = BuildDoc`<li>${allLines}</li>`;
result('#root');

const result2 = BuildDoc2`<li>${allLines}</li>`;
result2('#root');


