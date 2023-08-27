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
   get imag(){
    return this.#img;
   }
   get real(){
    return this.#real;
   }
    addcomplexnumb(c1){
            this.#img=this.img+c1.imag;
            this.#real=this.#real+c1.real 
    }
}
const p=new complexnumber(3,4);
// console.log(p);
p.display()