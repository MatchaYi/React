import React, {Component} from 'react';


function FormatDate (props) {
    return <h4>当前时间：{props.time}</h4>
}

class Clock extends Component {
    constructor (props) {
        super(props);
        this.state = {date: new Date()}
    }
    componentDidMount () {
        this.timer = setInterval(() => {
            this.setState((prevState,props) => ({
                date: new Date()
            }));
        },1000);
        console.log(`Mount   ${this.props.name}`);
    }
    componentWillUnmount () {
        clearInterval(this.timer);
        //While this.props is set up by React itself and this.state has a special meaning, you are free to add additional fields to the class manually if you need to store something that is not used for the visual output.
        //If you don't use something in render(), it shouldn't be in the state.  ???
        console.log(`UnMount ${this.props.name}`);
    }
     render () {
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
                <h2>It is {new Date().toLocaleTimeString()}</h2>
                <FormatDate time={this.state.date.toDateString()}/>
            </div>
        )
    }
}



class ClockOut extends Component {
    constructor (props) {
      super(props);
      this.state = {toggle: false};
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange (e) {
      this.setState(prevState => ({toggle: !prevState.toggle}));
    }
    render () {
        const toggle = this.state.toggle;
        return (
            <div>
                <input name='isGoing' type="checkbox" checked={toggle} onChange={this.handleChange}/>
                {toggle ? <Clock name="vue"/> : <div><Clock name="react"/></div> }
            </div>
        )
    }
}

export default ClockOut
