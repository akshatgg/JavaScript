
//Define Array//

let a=[2,4,"string","Tom"];
console.log(a);


let b=new Array(5)
console.log(b); 

 //add element in  array//
console.log(a[3]);
a[3]=5
console.log(a);


let e=[4,3,2]
e.push(3,9)
console.log(e);
e.pop()        //delete last element of an array//
console.log(e);
e.shift()     // delete 1 item rom the starting of an array//
console.log(e);
e.push(5,9,10)
console.log(e);
e.unshift(9)        //shift that number in the frst postion//
console.log(e);

//2 array//
let a1=[2,4,6,43,2]
let a2=[6,32,4]
let a3=a1.concat(a2);
console.log(a3);

let s=a3.join("")   ;          //convert array into string//     //give spaces between all the element or it also give whatever you want to give between all the elements in a array//
console.log(s);    

a3.reverse();
console.log(a3);


console.log(a3.indexOf(43));


let arr1=[2,4,6,4,62,43]
console.log(arr1.slice(2,4));



arr1.splice(2,0,11,15);            //arr1.splice( index, deletion of that number,adding number//)
console.log(arr1);
2,  4, 11, 6,
4, 62, 43