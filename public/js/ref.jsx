class Input extends React.Component {
    render() {
        return (
            <div className="form-group">
                <label>{this.props.scale == 'c' ? '摄氏度' : '华氏度'}</label>
                <input
                    value={this.props.t}
                    onChange={(e) => this.props.fn(e.currentTarget.value)}
                    className="form-control"
                    type="text"/>
            </div>
        );
    }
}

class Tip extends React.Component {
    render() {
        return (
            <div className="alert">The water is {this.props.tip ? 'boiling' : 'not boil'}</div>
        );
    }
}


class Cal extends React.Component {
    constructor() {
        super();
        this.state = ({
            c: '',
            f: ''
        });
        this.cChange = this.cChange.bind(this);
        this.fChange = this.fChange.bind(this);
    }

    ftoc(f) {
        return (f - 32) * 5 / 9;
    }

    ctof(c) {
        return (c * 9 / 5) + 32;
    }

    cChange(c) {
        this.setState({
            c: c,
            f: this.ctof(c)
        });
    }

    fChange(f) {
        this.setState({
            c: this.ftoc(f),
            f: f
        });
    }

    render() {
        return (
            <div className="container">
                <Input scale='c' fn={this.cChange} t={this.state.c}/>
                <Input scale="f" fn={this.fChange} t={this.state.f}/>
                <Tip tip={this.state.c >= 100}/>
            </div>
        );
    }
}
ReactDOM.render(<Cal/>, document.querySelector('#root'))