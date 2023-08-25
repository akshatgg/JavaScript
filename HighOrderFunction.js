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




const nums=[2,4,5,6,7];
const sum=array=>{
    let total=0;
    array.forEach(function(element){
        total=total+element;
    })
    return total;
} 
console.log(sum(nums));


const nme =()=>{
  console.log("Akshat Gupta",Math.random());
}

// setInterval(nme,2000);
// setTimeout(nme ,2000);



const arrr=[4,7,9]
arrr.forEach(function(element,index,arrr){
    console.log(element,index,arrr);
})

const nm=["rom","roham","rohan"]
nm.forEach(function(el,index,nm){
    console.log(el.toUpperCase(),index,nm);
})