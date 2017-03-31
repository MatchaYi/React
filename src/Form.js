import React, {Component} from 'react';

function formatName (name) {
    return name.charAt(0).toUpperCase() + name.substring(1);
}
function OutPut (props) {
    const person = props.person;
    if(!person.name) {
        return null;
    }
    return <h1>{person.name} likes {person.fruit} most.He looks {person.isHappy} well now!</h1>
}
    
export class ControlledForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            fruit: 'pear',
            isHappy: false,
        }
        this.fruitChange = this.fruitChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange (e) {
        const t = e.target;
        const value = t.type === 'checkbox' ? t.checked : t.value;
        const name = t.name;
        this.setState({
            [name]: value
        })
    }
   
    fruitChange (e) {
        this.setState({fruit: e.target.value})
    }
    render () {
        const person = {
            name: formatName(this.state.name),
            fruit: this.state.fruit,
            isHappy: this.state.isHappy ? 'very' : 'not',
        }
        return (
            <form>
                <label>
                    Name:
                    <input type="text" name='name' onChange={this.handleChange}/>
                </label>
                <br/><br/>
                <label>
                    Favorate Fruit:
                    <select value={this.state.fruit} onChange={this.fruitChange}>
                        <option value="apple">apple</option>
                        <option value="pear">pear</option>
                        <option value="mongo">mongo</option>
                    </select>
                </label>
               <br/><br/>
               <label>
                   Are you happy now:
                   <input type="checkbox" name='isHappy' onChange={this.handleChange}/>
               </label>
               <br/><br/>
                <OutPut person={person}/>
            </form>
        )
    }
}
export class UncontrolledForm extends Component {
    handleClick () {
        console.log(this.inputText.value)
        this.inputText.focus();
    }
    render () {
        return (
            <div>
                <input type="text" ref={input => this.inputText = input}/>
                <button onClick={() => this.handleClick()}>click</button>
            </div>
        )
    }
}
