import React, {Component} from 'react';

class Clock extends Component {
    constructor (props) {
        super (props);
        this.state = {time: new Date()}
    }
    componentDidMount () {
        this.timer = setInterval(() => {
            this.setState({time: new Date()});
        },1000)
    }
    componentWillUnmount () {
        clearInterval(this.timer);
    }
    render () {
        return (
            <div>
                <h1>hello</h1>
                <h2>It is {this.state.time.toLocaleTimeString()}</h2>
            </div>
        )
    }
}
class ClockApp extends Component {
    
    render () {
        return <Clock />
    }
}
export default ClockApp