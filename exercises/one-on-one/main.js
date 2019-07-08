reverseSentence = sentence => {
    const arr = sentence.split(" ");
    const reverseArr = arr.reverse()
    return reverseArr.join(" ")
}
 
console.log(reverseSentence("I am Sam"))//=> Sam am I
console.log(reverseSentence("Hello World")) //=> World Hello