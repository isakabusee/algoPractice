const compareStrings = (st1, st2) => {
  for(let i = 0; i<st1.length; i++){
    if(st1.length !== st2.length){
        return false;
    }
    let myobj = {}
    for(let i = 0; i<st2.length; i++){
        if(myobj[st1[i]] !=null){
            myobj[st1[i]] +=1
        }
         myobj[st1[i]] = 1
    }
    for(let i=0; i<st2.length; i++){
        if(!myobj[st2[i]]){
            return false
        } else {
            myobj[st2[i]] = -1;
        }
    }
  }
  return true;
}
compareStrings("konar", "ronak")

// Square root

let numz = [1,4,9];
let roots = numz.map((num)=> {
    return Math.sqrt(num)
})
// console.log(roots);
