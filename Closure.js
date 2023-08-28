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

