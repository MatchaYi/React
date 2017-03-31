import React,{ Component } from 'react';

const BoilConvert = props => props.celsius >= 100 ? <p>The water would boil.</p> : <p>The water would not boil.</p>

function toCelsius (fahrenheit) {
    return (fahrenheit - 32) *5/9;
}

function toFahrenheit (celsius) {
    return (celsius * 9/5) + 32;
}

function toConvert (temperature,convert) {
    const input = parseFloat(temperature);
    if(Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000)/1000;
    return rounded.toString();
}

const scaleName = {
    c: 'Celsius',
    f: 'Fahrenheit'
}
class TemperatureInput extends Component {
    constructor (props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange (e) {
        this.props.onTemperatureChange(this.props.output_convert(e.target.value));
    }
    render () {
        const temperature = this.props.input_convert(this.props.temperature);
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleName[scale]}</legend>
                <input type="text" value={temperature} onChange={this.handleChange} />
            </fieldset>
        )
    }
}

class Calculator extends Component {
    constructor (props) {
        super(props);
        this.state = {temperature: 1}
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange (temperature) {
        this.setState({temperature});
    }
    render () {
        const temperature = this.state.temperature;
        return (
            <div>
                <TemperatureInput 
                    temperature={temperature}
                    onTemperatureChange={this.handleChange}
                    scale='c'
                    input_convert={x => x}
                    output_convert={x => x}
                />
                 <TemperatureInput 
                    temperature={temperature}
                    onTemperatureChange={this.handleChange}
                    scale='f'
                    input_convert={x => toConvert(x,toFahrenheit)}
                    output_convert={x => toConvert(x,toCelsius)}
                />
                <BoilConvert celsius={temperature}/>
            </div>
        )
    }
}
export default Calculator