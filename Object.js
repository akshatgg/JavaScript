let obj={id:101, name:"Alex", salary:9000}
console.log(obj);

let emp=new Object
console.log(emp);
emp.id=108;
emp.name="laura";
console.log(emp);



function Emp(i,n,s){
    this.id=i;
    this.name=n;
    this.salary=s;
}
const e=new Emp(20,"sam",6000);
console.log(e);
console.log(e.name);
console.log(e['salary']);
e.id=23
console.log(e['id']);
delete e.id;
console.log(e);



let w={
    id:21,
    name:"manya",
    salary:2000
}

let keys=Object.keys(w);
console.log(keys);
let value=Object.values(w);
console.log(value);
let entries=Object.entries(w)
console.log(entries);

let o=Object.assign({x:12},w);
console.log(o);

Object.freeze(emp);         //You can not change any of the entries of emp Object//
Object.seal(w);            //You can updte the Keys//