import React, {Component} from 'react';

const BoilCovert = props => props.celsuis >= 100 ? <p>The water would boil.</p> :<p>The water would not boil.</p>;

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function toConvert (temperature, convert) {
    const input = parseFloat(temperature);
    if(Number.isNaN(input)){
        return ''
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000)/1000;
    return rounded.toString();
}

const scaleNames = {
    'c': 'Celsius',
    'f': 'Fahrenheit'
}

class TemperatureInput extends Component {
    constructor (props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange (e) {
        var temp = this.props.output_convert(e.target.value);
        this.props.onChange(temp)
    }
    render () {
        const temperature = this.props.input_convert(this.props.temperature);
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}</legend>
                <input type='text' value={temperature} onChange={this.handleChange}/>
            </fieldset>  
        )
    }
}

class TemperatureCalculator extends Component {
    constructor (props) {
        super(props);
        this.state = {temperature: 0};
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
                    onChange={this.handleChange} 
                    input_convert={x => x}
                    output_convert={x => x}
                    scale='c'
                />
                <TemperatureInput
                    temperature={temperature}
                    onChange={this.handleChange}
                    input_convert={x => toConvert(x, toFahrenheit)}
                    output_convert={x => toConvert(x, toCelsius)}
                    scale='f'
                />
                <BoilCovert celsuis={temperature}/>
            </div>
        );
    }
}

export default TemperatureCalculator
