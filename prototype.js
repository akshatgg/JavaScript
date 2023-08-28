const myhero=["thor","spiderman"]
const dchero=["batman","superman","flash"]

let heropower={
    spiderman:"sling",
    thor:"thunder",
    flash:"speed",
    spidypower: function() {
        console.log("spidy power is ", this.spiderman);
    }

}
Object.prototype.hitesh=()=>{
    console.log("superpower is amazing");
}
console.log(myhero.hitesh());
console.log(heropower.spidypower());
console.log(heropower.hitesh());
console.log(dchero.hitesh());

Array.prototype.heyhitesh=function(){
    console.log("hi hitesh");
}
console.log(myhero.heyhitesh());
// console.log(heropower.heyhitesh());       //comes error because this prototype is only allowed in array//


//inheritance//


const user={
    name:"top name",
    email:"top@gmail.com"
}
const teacher={
    makevideos:true,
}
const teachersupport={
    isavailaible:false,
}
const taassistant={
    makeassignment:"js",
    fulltime:true,
    __proto__:teachersupport,               //inheritance M1//
}
teacher.__proto__=teachersupport;           //inheritance M1//
console.log(teacher.isavailaible);
console.log(taassistant.isavailaible);     
Object.setPrototypeOf(user,teacher);         //inheritance M2//
console.log(user.makevideos);



String.prototype.lengthx=function(nam){
    console.log('True length is ',this.trim().length);
}
// "hitesh..      ".lengthx();
const nam="akshat   ";
nam.lengthx();