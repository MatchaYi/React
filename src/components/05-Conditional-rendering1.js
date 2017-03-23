import React, {Component} from 'react';

function UserGreeting () {
    return <h1>Welcome!</h1>
}

function GuestGreeting () {
    return <h1>Please Login first!</h1>;
}
function Greeting (props) {
    let isLogin = props.isLogin;
    if(isLogin) {
        return <UserGreeting />
    } 
    return <GuestGreeting />
}
function LoginButton (props) {
    return <button onClick={props.onClick}>Login</button>
}
function LogoutButton (props) {
    return <button onClick={props.onClick}>Logout</button>
}
function Btn (props) {
    if(props.isLogin) {
        return <LogoutButton onClick={props.onClick}/>
    } 
    return <LoginButton onClick={props.onClick}/>
    
}
class LoginCotrol extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isLogin: true
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick () {
        this.setState({isLogin: !this.state.isLogin});
    }
    render () {
        return (
            <div>
                <Greeting isLogin={this.state.isLogin}/>
                <Btn isLogin={this.state.isLogin} onClick={this.handleClick}/>  
            </div>
        )
    }
}
class GreetingOut extends Component {
    render () {
        return (
            <div>
                <LoginCotrol />
            </div>
        )
    }
}

export default GreetingOut