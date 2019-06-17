
function total(arr) {
    return arr.reduce((total,item) => total + item);
}

console.log(total([1,2,3]));

function stringConcat(arr) {
    return arr.reduce((total,item) => total.toString() + item.toString());
}

console.log(stringConcat([1,2,3]));

function totalVotes(arr) {
    return arr.reduce((total, item) => {
       if(item.voted) 
           return total + 1;
        return total;
    }, 0)
}

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

console.log(totalVotes(voters));

function shoppingSpree(arr) {
    return arr.reduce((total, item) => total + Number(item.price), 0);
 }
 
 var wishlist = [
     { title: "Tesla Model S", price: 90000 },
     { title: "4 carat diamond ring", price: 45000 },
     { title: "Fancy hacky Sack", price: 5 },
     { title: "Gold fidgit spinner", price: 2000 },
     { title: "A second Tesla Model S", price: 90000 }
 ];
 
 console.log(shoppingSpree(wishlist));

 function flatten(arr) {
    return arr.reduce((total, item) => total + (item + " "), "")  
 }
 
 var arrays = [
     ["1", "2", "3"],
     [true],
     [4, 5, 6]
 ];
 
 console.log(flatten(arrays));

 //TODO e6

function voterResults(arr) {
    return voters.reduce((total, voter) => {
        if(voter.age >= 18 && voter.age <= 25) {
            total.youth++;
            if(voter.voted)
                total.youngVotes++;
        } else if(voter.age >= 26 && voter.age <= 35) {
            total.mids++;
            if(voter.voted)
                total.midVotes++;
        } else if(voter.age >= 36 && voter.age <= 55) {
            total.olds++;
            if(voter.voted)
                total.oldVotes++;
        }
        return total;
    }, {
        youngVotes: 0,
        youth: 0,
        midVotes: 0,
        mids: 0,
        oldVotes: 0,
        olds: 0
    })
}




