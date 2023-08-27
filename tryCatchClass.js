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
    name;
    salary;
    Number;
    constructor(n,s,N){
       console.log("value");
        this.name=n;
        this.salary=s;
        this.Number=N;
    }
    display(){
        console.log("thank yu");
        console.log("this refers to",this);
    }
}
const p=new practice("akshat","2000","89")                    //  new create a empty object always  // 
console.log(p);
p.display()

