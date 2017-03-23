import React, {Component} from 'react'

function UserGreeting () {
    return <h1>Welcome back!</h1>
}
function GuestGreeting () {
    return <h1>Please login first!</h1>
}
function Greeting (props) {
    if(props.isLogin) {
        return <UserGreeting />
    }
    return <GuestGreeting />
}
function LoginButton (props) {
    return <button onClick={props.onClick}>Login</button>
}
function LogoutButton (props) {
    return<button onClick={props.onClick}>Logout</button>
}

class LoginCotrol extends Component {
    constructor (props) {
        super(props);
        this.state = {isLogin: false};
        this.loginClick = this.loginClick.bind(this);
        this.logoutClick = this.logoutClick.bind(this);
    }
    loginClick () {
        this.setState({isLogin: false});
    }
    logoutClick () {
        this.setState({isLogin: true});
    }
    render () {
        let button = null;
        if(this.state.isLogin) {
            button = <LogoutButton onClick={this.loginClick}/>
        } else {
            button = <LoginButton onClick={this.logoutClick}/>
        }
        return (
            <div>
                <Greeting isLogin={this.state.isLogin}/>
                {button}
            </div>
        )
    }
}
export default LoginCotrol