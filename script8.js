maxDifference = (ar) => {
    let outcomes = [];
    for(let i = 0; i<ar.length - 1; i++){
        let dif = ar[i+1] - ar[i];
        if(ar[i] !==null){
            outcomes.push(dif)
            
        }
    }
    return outcomes
}
console.log(maxDifference([1,2,4,8,11]))