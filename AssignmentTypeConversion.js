class conversion{
     convert(num) {
        if (typeof num =="number"){
        console.log(Number(num))
         }
         else{
            console.log("invalid number");
         }
    console.log(typeof num);
        }
}

const convertor=new conversion()
convertor.convert("abc");
convertor.convert(4435);
