let pattern='pw';

let regexOne=new RegExp(pattern);

let flag='gi';
let regexTwo=new RegExp(pattern,flag);

let regexThree=/pw/gi;

const content='My name is Akshat Gupta.I am studying regex from pw';

let check=regexOne.test(content);
console.log(check);