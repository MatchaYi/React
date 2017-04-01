import React, { Component } from 'react';
import './App.css';

import Clock from './ClockApp'
import {ControlledForm} from './Form'
import {UncontrolledForm} from './Form'
import TemperatureCalculator from './TemperatureCalculator'
import Composition from './Composition'
import ThingkingInReact from './ThingkingInReact'

// function withToggle (cb) {
//   return class 
// }
const withToggle = cb => {
  return class extends Component {
    constructor (props) {
      super(props);
      this.state = {isToggleOn: true};
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick () {
      this.setState({isToggleOn: !this.state.isToggleOn})
    }
    render () {
      return (
        <div>
          <button onClick={this.handleClick}>{this.state.isToggleOn?'ControlledComponent':'UncontrolledComponent'}</button>
          {cb(this.state.isToggleOn)}
        </div>
      )
    }
  }
}
function Warning (props) {
  if(!props.isShow){
    return null;
  }
  return <h1>Warning!</h1>
}
class ShowWarning extends Component {
  constructor (props) {
    super(props);
    this.state = {isShow: true}
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick () {
    this.setState({isShow: !this.state.isShow})
  }
  render () {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.isShow ? 'show' : 'hide'}</button>
        <Warning isShow={this.state.isShow}/>
      </div>
    )
  }
}
function Welcome (props) {
  if(props.isLogin) {
    return <h2>Welcome Back!</h2>
  } else {
    return <h2>Please sign up!</h2>
  }
}
class Greeting extends Component {
  constructor (props) {
    super(props);
    this.state = {isLogin: true}
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick () {
    this.setState({isLogin: !this.state.isLogin})
  }
  render () {
    const text = this.state.isLogin ? 'Logout' : 'Login';
    return (
      <div>
        <Welcome isLogin={this.state.isLogin}/>
        <button onClick={this.handleClick}>{text}</button>
      </div>
    )
  }
}
function Mailbox (props) {
  const messages = props.messages;
  return (
    <div>
      <h1>Hello</h1>
      {
        messages.length > 0 && 
          <p>
            You have {messages.length} unread messages! 
          </p>
      }
    </div>
  )
}
const messages = ['one','two','three'];
function NumberList (props) {
    return (
      <ul>
        { props.numbers.map(item => <li key={item}>{item}</li>)}
      </ul>
    )
}
const app = [
  () => <NumberList numbers={[1,2,3,4,5]} />,
  () => <Mailbox messages={messages}/>,
  Clock,
  () => <Greeting />,
  ShowWarning,
  withToggle(isToggleOn => isToggleOn ? <ControlledForm /> : <UncontrolledForm />),
  TemperatureCalculator,
  Composition,
  ThingkingInReact
]

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {count: 8}
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick () {
    this.setState( () => ({
      count: (this.state.count + 1)%app.length
    }));
  }
  render () {
    let Component = app[this.state.count];
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.count}</button>
        <Component />
      </div>
    )
  }
}
export default App;
