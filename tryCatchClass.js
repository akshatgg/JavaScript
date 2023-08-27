try{
    console.log("hello");
    console.log(a);
}catch{
    console.log("handle");
}finally{
    console.log("finally");
}

//Classes//
class practice{
    
   
    #rating;
    constructor(n,s,N){
        console.log("value");
        this.name=n;
        this.salary=s;
        this.#rating=N;
        // return 10;                   //if yu use primitive then it would be avoided by constructor//
        // return{k:43,l:23};           //if yu use non primitive then it will be returned//
    }
    static custom(){
        console.log("static class");
    }
    get ratingget(){
        console.log(this.#rating);
    }
    set ratingset(N){
        if(N<0)return;
        this.#rating=N;
    }
    
    display(){
        console.log("thank yu");
        console.log("this refers to",this);
    }
}
const p=new practice("akshat","2000","89")                    //  new create a empty object always  // 
console.log(p);
p.display()
practice.custom();
p.ratingset=90;
p.ratingget;

function product(n,s,N){
    this.name=n;
    this.salary=s;
    this.Number=N;
}
const u=new product("sam",6666,86)
console.log(u);
let x={
      l: product
};

x.l("kk",9,89);
console.log(x);


let obj={
    x:10,   
    fun(){
console.log(this.x);
}
}
obj.fun();


let oj={
    x:10,   
    fun:()=>{
    console.log(this.x);
    }
    }
    oj.fun();     //inside the arrrow function there is no value of this function//


    let osj={
        x:10,
        fun(){
           let y={
                gun:()=>{
                    console.log(this.x);
                }
            };
            y.gun()
        }
        };
        osj.fun();






