import React, {Component} from 'react';

//class
/*class A  {
    printName (user) {
        console.log(user.name + ' is ' + user.age + ' years olds');
    }
    printName2 () {
        console.log(`${user.name} is ${user.age} years old!`)
    }
}
const user = {
    name: 'Jack',
    age: 22
}
let a = new A ();
a.printName(user);
a.printName2(user);
*/


//arrow function and heigher-order function
// const arr = [1,2,3,4,5];
// const toStr = x => '' + x;
const toSum = (x, y) => x + y;

// const str = arr.map(toStr);

// const result = arr.reduce(toSum);

// const num2char = arr.filter(x => x % 2 !== 0).map(toStr).reduce(toSum);
// console.log(str)
// console.log(result);
// console.log(num2char);
//求和
// const arr = []
// for(let i=1;i<=100;i++){
//     arr.push(i);
// }
// const toOvenSum = arr.filter(x => x%2 === 0).reduce((result,x) => result + x);
// const toOddSum = arr.filter(x => x%2 !==0).reduce((result,x) => result + x)
// console.log(`${toOvenSum}----------${toOddSum}`)

const numArr = [11,4,6,79,45];
for(let item of numArr) {
    console.log(item)
}

// const strArr = 'hello';
// const newArr = []
// for(let item of strArr) {
//     item[0] = item[0].toUpperCase();
//     newArr.push(item)
// }
// console.log(newArr)

const numArrSum = numArr.filter(x => x%2 === 0).reduce(toSum);
console.log('numArrSum:' +numArrSum)
class ES6Learning extends Component {
    render () {
        return (
            <div>
                hello ES6
            </div>
        )
    }
}

export default ES6Learning 