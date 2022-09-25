
/*
Example 1
extractValue

Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

const exampleArr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
function extractValue(arr, key){
    return arr.reduce(function(accumulator, nextVal){
        accumulator.push(nextVal[key])
        return accumulator
    },[])
}
// console.log(extractValue(exampleArr, 'name'))

/*
Example 2
vowelCount

Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

vowelCount('Elie') // {e:2,i:1};
vowelCount('Tim') // {i:1};
vowelCount('Matt') // {a:1})
vowelCount('hmmm') // {};
vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1}
*/

// came close on this one before I had to look at the solution, had the "return accum" scoped wrong
function vowelCount(inStr){
    const vowels = 'aeiou'
    return inStr.toLowerCase().split('').reduce(function(accum, nextChar){
        let lowerChar = nextChar.toLowerCase()
        if (vowels.indexOf(lowerChar) !== -1){

            if (accum[nextChar]){
                accum[nextChar] += 1
            } else{
                accum[nextChar] = 1
            }
        }
        return accum
    }, {})
}
// console.log(vowelCount('Elie'))

/*
Example 3
addKeyAndValue

Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects 
passed to it with each object now including the key and value passed to the function.

const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

addKeyAndValue(arr, 'title', 'Instructor') //

[
    {title: 'Instructor', name: 'Elie'},
    {title: 'Instructor', name: 'Tim'},
    {title: 'Instructor', name: 'Matt'},
    {title: 'Instructor', name: 'Colt'}
]

*/
const exampleArr2 = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
function addKeyAndValue(arr, key, val){
    return arr.reduce(function(accum, nextVal, ind){
        accum[ind][key] = val
        return accum
    },arr)
}
// console.log(addKeyAndValue(exampleArr2, 'title', 'instructor'))

/**
 Example 4
partition

Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The 
partition function should run the callback function on each value in the array and if the result of the callback function at that 
specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific 
value is false, the value should be placed in the second subarray.

function isEven(val){
  return val % 2 === 0;
}

const arr = [1,2,3,4,5,6,7,8];

partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];

function isLongerThanThreeCharacters(val){
  return val.length > 3;
}

const names = ['Elie', 'Colt', 'Tim', 'Matt'];

partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']] 
 */
const nummies = [1,2,3,4,5,6,7,8,9]
function isEven(val){
    return val % 2 === 0
}

const nombres = ['Elie', 'Colt', 'Tim', 'Matt'];
function longerThanThree(val){
    return val.length > 3
}
function partition(arr, callback){
    const firstArr = []
    const secondArr = []
    return arr.reduce(function(accum, next){
        if(callback(next)){
            accum[0].push(next)
        } else{
            accum[1].push(next)
        }
        return accum
    },[firstArr, secondArr])
}
// console.log(partition(nummies, isEven))
// console.log(partition(nombres, longerThanThree))