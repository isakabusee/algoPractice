const justSeeing = (w, z) => {
    for(let i=0; i<w.length; i++) {

        for(let j=0; j<z.length; j++){

            if(z[j] == w[i]){
                console.log("yes!")
            } else {
                console.log("nope!")
            }
        }
    }

}
justSeeing(["hello"], ["What the hell!"])