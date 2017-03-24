import React, {Component} from 'react';

function Info (props) {
    if(props.isHide) {
        return null;
    }
    return <h1>My name is {props.name}, I'm a {props.gender}, my favorite fruit is {props.fruit}</h1>
}
class ControlledComponents extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value: 'Please input your name',
            name: '',
            fruit: 'melon',
            isHide: true,
            gender: ''
        }
        this.commitClick = this.commitClick.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.fruitChange = this.fruitChange.bind(this);
        this.maleClick = this.maleClick.bind(this);
        this.femaleClick = this.femaleClick.bind(this);
    }
    toUpperFirst (input) {
        return input.charAt(0).toUpperCase() + input.substring(1);
    }
    commitClick (event) {
        this.setState({isHide: false});
        event.preventDefault();
    }
    inputChange (event) {
        this.setState({name: this.toUpperFirst(event.target.value)});
    }
    fruitChange (event) {
        this.setState({fruit: event.target.value});
    }
    maleClick () {
        this.setState({gender: 'boy'})
    }
    femaleClick () {
        this.setState({gender: 'girl'})
    }
    render () {
        return (
            <div>
                {
                    <form action="#" >
                        <label>
                            Name:
                            <input type="text" placeholder={this.state.value} onChange={this.inputChange}/>
                        </label>
                        <br/><br/>
                        <div>
                            <label htmlFor="male"><input type="radio" onClick={this.maleClick} name='gender' id='male'/>male</label>
                            <label htmlFor="female"><input type="radio" onClick={this.femaleClick} name='gender' id='female'/>female</label>
                        </div>
                        <br/><br/>
                        <label>
                            Pick your favorite Fruit:
                            <select name="fruits" id="" value={this.state.fruit} onChange={this.fruitChange}>
                                <option value="apple">apple</option>
                                <option value="pear">pear</option>
                                <option value="melon">melon</option>
                            </select>
                        </label>
                        <br/><br/>
                        <label>
                            <input type="checkbox"/>
                        </label>
                        <input type="submit" value='提交' onClick={this.commitClick}/>
                        <Info isHide={this.state.isHide} 
                            name={this.state.name} 
                            gender={this.state.gender}
                            fruit={this.state.fruit}/>
                    </form>
                }
               
            </div>
        ) 
    }
}


export default ControlledComponents