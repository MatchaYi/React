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

// const scaleNames = {
//     'c': 'Celsius',
//     'f': 'Fahrenheit'
// }

class CelsiusTemperatureInput extends Component {
    constructor (props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange (e) {
        this.props.onChange(e.target.value)
    }
    render () {
        const temperature = this.props.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in Celsius</legend>
                <input type='text' value={temperature} onChange={this.handleChange}/>
            </fieldset>  
        )
    }
}

class FahrenheitTemperatureInput extends Component {
    constructor (props) {
        super(props);
        //!!! this.props.temperature = toConvert(this.props.temperature, toFahrenheit);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange (e) {
        var celsius = toConvert(e.target.value, toCelsius);
        this.props.onChange(celsius);
    }
    render () {
        const temperature = toConvert(this.props.temperature, toFahrenheit);
        return (
            <fieldset>
                <legend>Enter temperature in Fahrenheit</legend>
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
                <CelsiusTemperatureInput temperature={temperature} onChange={this.handleChange} />
                <FahrenheitTemperatureInput temperature={temperature} onChange={this.handleChange}/>
                <BoilCovert celsuis={temperature}/>
            </div>
        );
    }
}

export default TemperatureCalculator
