import React,{Component} from 'react';


class InputFocus extends Component {
    constructor (props) {
        super(props);
        this.focus = this.focus.bind(this);
    }
    focus () {
        alert(this.txt.value);
    }
    componentDidMount() {
        console.log(this.txt);
        console.log(this.selectTxt)
        this.selectTxt.focus();
    }
    componentWillMount() {
        // this.txt.focus();
        // console.log(this.selectTxt.select())
    }
    render () {
        return (
            <div>
                {/*<input ref={input => {this.txt = input}}/>*/}
                <input className='myTxt' defaultValue='enter' ref={input => {this.txt = input}}/>
                <input type="text" autoFocus/>
                <button onClick={this.focus}>click</button>
                <input type="checkbox" defaultChecked/>
                <textarea name="" id="" cols="30" rows="10" ref={input => this.selectTxt = input}></textarea>
            </div>
        )
    }
    
}

function Out () {
    return <InputFocus />   
}
export default Out