var v_isURL = require('./v_isURL');

console.log(v_isURL());

console.log(v_isURL(55555555));

console.log(v_isURL('AAAAAAAAAAAA'));

console.log(v_isURL('http://localhost:4000/') );

console.log(v_isURL('https://google.com/') );
console.log(v_isURL('https://google.') );
console.log(v_isURL('https://google.com') );

console.log(v_isURL('https://youtube.com/') );
console.log(v_isURL('https://youtube.com') );