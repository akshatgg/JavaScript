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


nm.map(function(element,index,arrr){
    console.log(element,index,arrr);
})
nm.map((h)=>console.log(h.toUpperCase()));

//filter//
const heros=["wweraj","rawrj","wer","smackraj"];
const herojwithraj=heros.filter((h)=>{
    return h.endsWith('raj');
})
console.log(herojwithraj);


//shopping cart//
const cart=[20,45,64]
const sumofcart=cart.reduce((prev,curr)=>prev+curr,0)
console.log(sumofcart);

//gamescore//
const gamesc=[20,43,76,960,450];
const checknum=gamesc.every((v)=> typeof v=='number');
console.log("check= ",checknum);

//above score 200//

const above200 = gamesc.forEach((n) => {

    if (n > 200) {
         console.log(n);
    }
    
});
console.log(above200);


const ab200=gamesc.find((sc)=>sc>200)
console.log(ab200);


console.log(gamesc.findIndex((item)=>item== 960));
gamesc.sort();
console.log(gamesc);


