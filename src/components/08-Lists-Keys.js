import React, {Component} from 'react';

function ListItem (props) {
    return <li>{props.value}</li>
}
function NumberList (props) {
    const numbers = props.numbers;
    return (
        <ul>
           { numbers.map((number,index) => 
                <ListItem value={number} key={index}/>
           )}
        </ul>
    )
}

function Blog (props) {
    const sidebar = (
        <ul>
            {props.posts.map((item) => 
                    <li key={item.id}>{item.title}</li>
               ) 
            }
        </ul>
    )
    const content = props.posts.map((item) => {
        return (
            <div key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.content}</p>
            </div>
        )
    })
    const numbers = [1,2,5,4,5];
    return (
        <div>
            {sidebar}
            <hr/>
            {content}
            <hr/>
            <NumberList numbers={numbers}/>
        </div> 
    )
    
}
const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
class ListsandKeys extends Component {
    render () {
        return (
            <div>
                <Blog posts={posts}/>
            </div>
        )
    }
}

export default ListsandKeys