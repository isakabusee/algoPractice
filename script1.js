function countChars(s){
    const anObj = {};
    for(let i = 0; i<s.length; i++){
        if(!anObj[s[i]]){
            anObj[s[i]] = 0;
        }
        anObj[s[i]] ++
    }
    return anObj
}
console.log(countChars("Hello there!"))