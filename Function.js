function greet() {
    console.log("Good Morning");
    console.log("Good night");
}

function sqr(x){
    return x+x;
}
let a=sqr(5)
console.log(a);



function add(x,y){
    return x+y;
}
console.log(add(5,9))



    function sumofallparameter(){
        let sum=0;
        for(var i=0;i<arguments.length;i++){
            sum=sum+arguments[i];
        }
        return sum;
    }

    let result=sumofallparameter(1,2,3,4,5);
    console.log(result);


    //invoke Function//
    (function exc(){
        console.log("hello");                          //this function execute only one time that why we covered in a bracket and he exceute just after the declaration//
    })();


    //Annonymous invoke function//

    (function(x){
        console.log(x*x)                          //this function execute only one time that why we covered in a bracket and he exceute just after the declaration and we don't need to give function name)
    })(5);

 