import React, {Component} from 'react';




class Click extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isToggleOn: false,
            haveColor: true
        }
        this.handleClick = this.handleClick.bind(this);
        this.changeColor = this.changeColor.bind(this);
    }
    handleClick () {
        this.setState({isToggleOn: !this.state.isToggleOn});
    }
    changeColor (e) {
        e.preventDefault();
        this.setState({haveColor: !this.state.haveColor});
    }
    render () {
        let text = this.state.isToggleOn ? 'ON' : "OFF";
        return (
            <div>
                <button className={this.state.haveColor ? '' : 'red'} onClick={this.handleClick}>{text}</button>
                <br/>
                <a href="#" onClick={this.changeColor}>click to change button color</a>
            </div>
            
        )
    }
}

class ClickOut extends Component {
    render () {
        return <Click />
    }
}


export default ClickOut;