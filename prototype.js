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