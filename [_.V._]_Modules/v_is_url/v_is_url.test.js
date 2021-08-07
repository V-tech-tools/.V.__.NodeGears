var v_is_url = require('./v_is_url');

console.log(v_is_url());

console.log(v_is_url(55555555));

console.log(v_is_url('AAAAAAAAAAAA'));

console.log(v_is_url('http://localhost:4000/') );

console.log(v_is_url('https://google.com/') );
console.log(v_is_url('https://google.') );
console.log(v_is_url('https://google.com') );

console.log(v_is_url('https://youtube.com/') );
console.log(v_is_url('https://youtube.com') );