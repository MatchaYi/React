import React, {Component} from 'react';

function UserGreeting () {
    return <h1>Welcome back!</h1>
}

function GuestGreeting () {
    return <h1>Please sign up! </h1>
}
function LoginInButton () {
    return <button>LoginButton</button>
}
function LogoutButton () {
    return <button>LogoutButton</button>
}
function Greeting(props) {
    const isLoginedIn = props.isLoginedIn;
    if(isLoginedIn) {
        return <GuestGreeting />
    } else {
        return <UserGreeting />
    }
}

class GreetingOut extends Component {
    render () {
        return <Greeting isLoginedIn={false} />
    }
}

export default GreetingOut;