import React, {Component} from 'react';


class A  {
   
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