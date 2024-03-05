stringToInteger = (str) => {
    let outPut = 0;
    for(let i=0; i<str.length; i++){
        if(str[i] !=null){
            outPut = str
            return outPut
        }
    }
}
console.log(stringToInteger("123"))
// 1232

countChars = (z) => {
    console.log(z)
    let obj = {}
    for(let i in z){
        if(!obj[z[i]]){
            obj[z[i]] = 0;
        }
        obj[z[i]] ++
    }
    return obj
}
console.log(countChars("hello there"))