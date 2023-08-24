const powertwo=(n)=>{
    return n**n;
}
function powercube(powertwo,n){
    return powertwo(n)*n;
}
console.log(powercube(powertwo,3));



function hello(){
    return ()=>{
    console.log("lol");
    }
}
let guess=hello();
console.log(guess);
guess();




const highorderfunc = m =>{
    const onefunc=n=>{
        const twofunc=o=>{
            return m+n+o;
        }
        return twofunc;
    }
return onefunc;
}
console.log(highorderfunc(3)(2)(1));