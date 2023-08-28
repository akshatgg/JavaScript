let fun1=()=>{
    const value1="I am in fun right now";
    const innerfun1=()=>{
        const value2="I am not in fun right now";
        console.log(value1);
    }
    innerfun1();
    // console.log(value2);              //error comes//
}
fun1();


const globalvalue=0
function func1(){
const val1=1;
console.log(globalvalue);
function innerfun(){
    const val2=2;
    console.log(globalvalue,val1,val2);
    function ininerfun(){
        const val3=3;
        console.log(globalvalue,val1,val2,val3);
    }
    ininerfun()
}
innerfun();
}
func1();

//closure//


