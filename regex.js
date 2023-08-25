let pattern='pw';

let regexOne=new RegExp(pattern);          //default flag is g//

let flag='gi';
let regexTwo=new RegExp(pattern,flag);

let regexThree=/pw/gi;

const content='My name is Akshat Gupta.I am studying regex from Pw.pw is good in some ways.your skills is not depend on your source its depends on your practice thanks pW';

let check=regexOne.test(content);
console.log(check);

let check1=content.match(regexThree);
console.log(check1);


