class complexnumber{
    #real;
    #img;
    constructor(r,i){
this.#img=i
this.#real=r;

    }


    display(){
        console.log(this.#real,"+i",this.#img);
    }
   get img(){
    return this.#img;
   }
   get real(){
    return this.#real;
   }
    addcomplexnumb(c1){
            this.#img=this.img+c1.img;
            this.#real=this.#real+c1.real 
    }
}
const p=new complexnumber(3,4);
// console.log(p);
let c1=new complexnumber(5,8)
c1.addcomplexnumb(p);
c1.display()





//subtraction//
class sub{
    constructor(r,i){
   this.real=r;
   this.img=i;
    }
    subs(c2){
        console.log(this.real-c2.real,"i",this.img-c2.img);
    }
}
let co1=new sub(9,9);
let c2=new sub(6,6);
co1.subs(c2);