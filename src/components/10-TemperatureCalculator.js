import React, {Component} from 'react';

function BoilCovert (props) {
    if (props.celsuis >= 100) {
        return <p>The water would boil.</p>
    } else {
        return <p>The water would not boil.</p>
    }
    // return props.celsuis >= 100 ? <p>The water would boil.</p> : <p>The water would not boil.</p>;
    // return <p>
    //   {props.celsuis >= 100 ? "The water would boil.": "The water would not boil.</p>"}
    // </p>
}

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
        this.props.onTemperatureChange(e.target.value)
    }
    render () {
        const scale = this.props.scale;
        const temperature = this.props.temperature;
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
        this.state = {
            temperature: '',
            scale : 'c'
        }
        this.handleCelsuisChange = this.handleCelsuisChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }
    handleCelsuisChange (temperature) {
        this.setState({scale: 'c',temperature});
    }
    handleFahrenheitChange (temperature) {
        this.setState({scale: 'f',temperature})
    }
    render () {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? toConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? toConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput temperature={celsius} scale='c' onTemperatureChange={this.handleCelsuisChange}/>
                <TemperatureInput temperature={fahrenheit} scale='f' onTemperatureChange={this.handleFahrenheitChange}/>
                <BoilCovert celsuis={celsius}/>
            </div>
        );
        // return React.createElement(
        //      'div', {}, [
        //          React.createElement(TemperatureInput, { temperature: celsius, scale: 'c', onTemperatureChange: this.handleCelsuisChange }),
        //          React.createElement(TemperatureInput, { temperature: fahrenheit, scale: 'f', onTemperatureChange: this.handleFahrenheitChange }),
        //          React.createElement( BoilCovert, { celsius: celsius }),
        //        ]
        //  )
    }
}

export default TemperatureCalculator
