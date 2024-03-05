combinations = (str) => {
  const first = str[0];
  const res = str.slice(1);
  console.log(res);
  chrsWithFirst = [];
  // chrsWithoutFirst = combinations(res);
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
  // return [first, res]
};
// console.log(combinations("Hello"))

const learningThings = (z) => {
  let arr1 = [];
  for (let i = 0; i < z.length; i++) {
    for (let j = i + 1; j < z.length; j++) {
      arr1.push(z.slice(i, j));
    }
  }
  return arr1;
};
learningThings("hello");

// trying to rewrite the algorithm

inOtherWords = (myStr) => {
    let obj = [];
    let frst = myStr[0];
    let otherz = myStr.slice(1)
    for(let i=1; i<myStr.length; i++){
        obj.push(frst,myStr[i])
    }
    return obj

}
console.log(inOtherWords("Hello"))