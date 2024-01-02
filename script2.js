/*
You are running a classroom and suspect that some of your students are passing around the answer to a multiple-choice question disguised as a random string.

Your task is to write a function that, given a list of words and a string, finds and returns the word in the list that is scrambled inside the string, if any exists. If none exist, it returns the result "-" as a string. There will be at most one matching word. The letters don't need to be in order or next to each other. The letters cannot be reused.

Example:  
words = ["baby", "referee", "cat", "dada", "dog", "bird", "ax"]
string1 = "ctay"
find(words, string1) => "cat"   (the letters do not have to be in order)  
  
string2 = "bcanihjsrrrferet"
find(words, string2) => "cat"   (the letters do not have to be together)  
  
string3 = "tbaykkjlga"
find(words, string3) => "-"     (the letters cannot be reused)  
  
string4 = "bbbblkkjbaby"
find(words, string4) => "baby"    
  
string5 = "dad"
find(words, string5) => "-"    
  
string6 = "breadmaking"
find(words, string6) => "bird"    

All Test Cases:
find(words, string1) -> "cat"
find(words, string2) -> "cat"
find(words, string3) -> "-"
find(words, string4) -> "baby"
find(words, string5) -> "-"
find(words, string6) -> "bird"
  
Complexity analysis variables:  
  
W = number of words in `words`  
S = maximal length of each word or string  
*/

"use strict";

/*
STEP#1 - creating dictionary for every word
map
baby => 'b': 2, 'a': 1, 'y': 1
referee => 'r': 2, 'e':4, 'f':1
cat => 'c': 1, 'a': 1, 't':1
dada => 'd':2, 'a':2
dog => 'd':1, 'o':1, 'g':1
bird => 'b'1, 'i':1, 'r':1, 'd':1
ax => 'a': 1, 'x':1


STEP#2
iterating through the string

for every char in "ctay":
  'c'
  't'
  'a'
  ...
  
*/
// const ht = new HasTable();
// ht.set("baby")

const iterateThrough= (words) => {
  const string = "bbbblkkjbaby"
  for(let i=0; i<words.length; i++){
      //'baby' => iterate through each character
      //add each char as a key in the hash table
      // and keep count
      
      
      
      for(let j=0; j<string.length; j++){
        console.log(string[j])
        // if(words[i]==string[j]){
          
        // }
      }
    }

}

const words = ["baby", "referee", "cat", "dada", "dog", "bird", "ax"];
const string1 = "ctay"; //'cat'
const string2 = "bcanihjsrrrferet";
const string3 = "tbaykkjlga";
const string4 = "bbbblkkjbaby";
const string5 = "dad";
const string6 = "breadmaking";
iterateThrough(words)