class BoilingCheck extends React.Component{
    constructor(){
        super();
    }
    render(){
        if(this.props.celsius >= 100){
            return <p>The water would boil.</p>
        }else{
            return <p>The water would not boil.</p>
        }
    }
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                       onChange={this.handleChange} />
            </fieldset>
        );
    }
}

class Calculator extends React.Component {
    constructor() {
        super();
        this.state = {
            temperature: '',
            scale: 'c'
        };
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(temperature) {
        this.setState({
            scale: 'c',
            temperature
        });
    }

    handleFahrenheitChange(temperature) {
        this.setState({
            scale: 'f',
            temperature
        });
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} />
                <BoilingCheck
                    celsius={parseFloat(celsius)} />
            </div>
        );
    }
}
//转化为摄氏度
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
//转化为华氏度
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

//两个参数  temperature(温度)和convert(toCelsius或toFahrenheit)
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input); //调用toCelsius()或toFahrenheit()

    const rounded = Math.round(output * 1000) / 1000;  //四舍五入

    return rounded.toString();
}

ReactDOM.render(<Calculator/>,document.querySelector('#demo'));