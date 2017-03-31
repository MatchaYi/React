import React, {Component} from 'react';

//1、You can embed any JavaScript expression in JSX by wrapping it in curly braces.
//For example, 2 + 2, user.firstName, and formatName(user) are all valid expressions:

/*let user = {
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
                <p>{formatName(user)}</p> 
            </div>
        )
    } 
    return  <h1>hello, stranger!</h1>
}*/

//JSX Represents Objects
// const eleOne = (
//     <h1 style={{color: 'red'}}>hello,react!</h1>
// )
// const eleTwo = React.createElement(
//     'h3',
//     {style: {color: 'blue'}},
//     'bye react'
// );
// const MyComponents = {
//     Hello (props) {
//         return <h1>hello,{props.name}</h1>
//     },
//     Bye () {
//         return <h1>Bye</h1>
//     }
// }

// import {Clock, FormatDate} from './03-Clock-state'
// const components = {
//     clock: Clock,
//     formatDate: FormatDate
// }
// function MyClock (props) {
//     const SpecificStory = components[props.storyType];
//     return <SpecificStory story={props.story} />;
// }
// function NumberDescriber (props) {
//     let description;
//     if(props.num%2 === 0){
//         description = <strong>even</strong>
//     } else {
//         description = <i>odd</i>
//     }
//     return <div>{props.num} is an {description} number.-----{props.mes}</div>
// }
// Calls the children callback numTimes to produce a repeated component
/*function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}*/
function MyRepeat (props) {
    const items = [];
    for(let i=0;i<props.numbers;i++){
        items.push(props.children(i))
    }
    return <div>{items}</div>
}
MyRepeat.propTypes = {
    children: React.PropTypes.oneOfType([
        // React.PropTypes.number,
        // React.PropTypes.func,
        React.PropTypes.element
    ])
}
function ListofNum () {
    return (
        <MyRepeat numbers={'10'}>
            {index => true && <div key={index}>This is item {index} in the list.</div>}
        </MyRepeat>
    )
}
function LearningJSX () {
    // const ps = {num:'23',mes:'&gtq;4'}
    return (
        <div>
            {/*<Greeting /> 当做组件使用时，不像函数一样传参
            {Greeting(user)}
            {Greeting()}
            {eleOne}
            {eleTwo}*/}
            {/*<MyButton />*/}
            {/*<MyComponents.Hello name={'Jack'}/>*/}
            {/*<MyClock />*/}
            {/*<NumberDescriber num={23+4} mes='&amp;&quot;4'/>*/}
            {/*<ListOfTenThings />*/}
            <ListofNum />
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
