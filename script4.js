const capitalizeEveryFirstletter = (z) => {
    let words = z.split(' ').map((z)=> z[0].toUpperCase() + z.slice(1).toLowerCase())
    let result = words.join(' ')
    return result
}
capitalizeEveryFirstletter("The baby is already here!")

// How to get the first letter of everyword in a string

const returningEveryFirstLetter = (nem) => {
    return nem.split(' ').map((nem)=>{ return nem[0]}).join(' ')
}
returningEveryFirstLetter("Isaac Nashon Busee")

// Count the number of characters

const countOccurances = (str) => {
    const obj = {}
    for(let i = 0; i<str.length; i++){
        if(!obj[str[i]]){
            obj[str[i]] = 0
        }
        obj[str[i]] ++
    }
    return obj;
}
console.log(countOccurances("hello there"))