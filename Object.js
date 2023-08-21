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
