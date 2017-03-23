import React, {Component} from 'react';

//1、You can embed any JavaScript expression in JSX by wrapping it in curly braces.
//For example, 2 + 2, user.firstName, and formatName(user) are all valid expressions:

let user = {
    name: 'Jack',
    age: 22
}
function formatName(user) {
    return user.name + ' is ' + user.age + ' years old!'
}
//JSX is an Expression Too  ---can use if or  for 
function Greeting (user) {
    if (user) {
        return  (
            <div>
                <h1>hello, {user.name}</h1>
                <p>{formatName(user)}</p> {/*没有实参形参之分么？---*/}
            </div>
        )
    } 
    return  <h1>hello, stranger!</h1>
}

//JSX Represents Objects
const eleOne = (
    <h1 style={{color: 'red'}}>hello,react!</h1>
)
const eleTwo = React.createElement(
    'h3',
    {style: {color: 'blue'}},
    'bye react'
);
function LearningJSX () {
    return (
        <div>
            {/*<Greeting /> 当做组件使用时，不像函数一样传参*/}
            <div>{Greeting(user)}</div>
            <div>{Greeting()}</div>
            <div>{eleOne}</div>
            <div>{eleTwo}</div>
        </div>
    )
}

class LearningJSXOut extends Component {
    render () {
        return (
            <div>
                <LearningJSX />
            </div>
        )
    }
}


export default  LearningJSXOut

