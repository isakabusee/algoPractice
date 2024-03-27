const justSeeing = (w, z) => {
    for(let i=0; i<w.length; i++) {

        for(let j=0; j<z.length; j++){

            if(z[j] == w[i]){
                return "yes!"
            } else {
                return "nope!"
            }
        }
    }

}
justSeeing(["hello"], ["What the hell!"])

// possible combinations of characters in a string

possibleCombinations = (str) => {
    let arr = [];
    for(let i = 0; i< str.length; i++){
        for(let j=i+1; j<str.length; j++){
            arr.push(str.slice(i, j))
        }
    }
    return arr

}
console.log(possibleCombinations("abc"))