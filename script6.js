
getInitial = (myStr) => {
   return myStr.split(" ").map((myStr=> myStr[0].toUpperCase())
   )
}
getInitial("count of monte cristo")

// Finding square roots

let numbers = [1,4,9];
let roots = numbers.map((num)=> {
    return Math.sqrt(num);
})
console.log(roots);
//  Find Square roots

findingSquareRoot = (sq) => {
 return sq.map(x => {
    return Math.sqrt(x)
 })
}
findingSquareRoot([25,9,16])

// Capitalize every first letter

capitalizeFirsts = (st) => {
    return st.split(" ").map(x => x[0].toUpperCase() + x.slice(1).toLowerCase()).join(" ")
}
capitalizeFirsts("there is a good place for all of us!")

//  how to concatenate

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2);

// counting characters in a string

const countingChars = (s) => {
    let obj = {}
    for(let i = 0; i<s.length;i++){
        if(!obj[s[i]]){
            obj[s[i]] = 0;
        }
        obj[s[i]] ++;
    }
    return obj
}
countingChars("Oh hi there! How are you?")
