countChars = (m) => {
    const obj = {};
    for(let i=0; i<m.length; i++){
        if(!obj[m[i]]){
            obj[m[i]] = 0
        }
        obj[m[i]] ++;
    }
    return obj;
}
countChars("The baby's here!")

// two sum problem solution

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

twoSum = (nums, target) => {
    let obj = {}
    for(let i = 0; i<nums.length; i++){
        let result = target - nums[i];
        if(obj[nums[i]] !=null){
            return [obj[nums[i]], i]
        } else {
            obj[result] = i
        }
    }
}
twoSum([2,7,11,15], 26)

// anagram

anagram = (str1,str2) => {
    for(let i = 0; i<str1.length; i++){
        if(str1.length !==str2.length){
            return false;
        }
        const result = {};
        for(let i = 0; i<str2.length; i++){
            if(result[str1[i]] !=null){
                result[str1[i]] += 1
            }
            result[str1[i]] = 1
        }
        for(let i=0;i<str2.length; i++){
            if(!result[str2[i]]){
                return false;
            } else {
                result[str2[i]] = -1;
            }
        }
    }
    return true;

}
console.log(anagram("ronak", "konar"))