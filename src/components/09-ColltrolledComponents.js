import React, {Component} from 'react';

function Info (props) {
    if(props.isHide) {
        return null;
    }
    return <h1>My name is {props.name}, I'm a {props.gender}, my favorite fruit is {props.fruit}!</h1>
}
class ControlledComponents extends Component {
    constructor (props) {
        super(props);
        this.state = {
            value: 'Please input your name',
            name: '',
            fruit: 'melon',
            isHide: true,
            gender: 'boy',
            isGoing: true,
            guestNum: 2
        }
        this.commitClick = this.commitClick.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.fruitChange = this.fruitChange.bind(this);
        this.genderChange = this.genderChange.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }
    toUpperFirst (input) {
        return input.charAt(0).toUpperCase() + input.substring(1);
    }
    commitClick (event) {
        if(this.state.name && this.state.gender && this.state.fruit){
            this.setState({isHide: false});
        }
        event.preventDefault();
    }
    nameChange (event) {
        this.setState({name: this.toUpperFirst(event.target.value)});
    }
    fruitChange (event) {
     
        this.setState({fruit: event.target.value});
    }
    genderChange (event) {
        const gender = event.target.id === 'male' ? 'boy' : 'girl';
        this.setState({gender: gender});
    }
    inputChange (event) {
        const t = event.target;
        const value = t.type === 'checkbox' ? t.checked : t.value;
        const name = t.name;
        this.setState({
            [name]:value
        })
    }
    render () {
        return (
            <div>
                {
                    <form action="#" >
                        <label>
                            Name:
                            <input type="text" placeholder={this.state.value} onChange={this.nameChange}/>
                        </label>
                        <br/><br/>
                        <div>
                            <label htmlFor="male"><input type="radio"  onChange={this.genderChange} name='gender' id='male'/>male</label>
                            <label htmlFor="female"><input type="radio"  onChange={this.genderChange} name='gender' id='female'/>female</label>
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
                            Is going:
                            <input name='isGoing' type="checkbox" checked={this.state.isGoing} onChange={this.inputChange}/>
                        </label>
                        <br/><br/>
                        <label htmlFor="">
                            Number of guest:
                            <input name='guestNum' type="number" value={this.state.guestNum} onChange={this.inputChange}/>
                        </label>
                        <br/><br/>
                        <input type="submit" value='提交' onClick={this.commitClick}/>
                        <hr/>
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