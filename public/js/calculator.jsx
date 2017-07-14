//props:
// col  按钮是否是操作符号 string
// zero 数字0的宽度变化为50% string
// res  操作符 = 的背景颜色 string
// fn   函数 点击按键 将按键的内容呈现到screen上
class Button extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div onClick={() => this.props.fn(this.props.children)}
                 className={`
                    ${this.props.zero ? this.props.zero : ''}
                    button
                    ${this.props.col ? this.props.col : ''}
                    ${this.props.res ? this.props.res : ''}
                    `}>
                {this.props.children}
            </div>
        )
    }
}
//props :
//  data 按键列表  类型:数组
//  fn  函数
class KeyBord extends React.Component {
    constructor() {
        super();
    }

    render() {
        var el = (
            this.props.data.map((v, i) => {
                var fn;
                /*if(v.type === 1){
                    fn = this.props.numClick;
                }else if(v.type === 2){
                    fn = this.props.oClick;
                }else if(v.type === 3){
                    fn = this.props.equalClick;
                }
                else if(v.type === 4){
                    fn = this.props.clearClick;
                }else{
                    fn = ()=>{};
                }*/
                switch (v.type){
                    case 1:
                        fn = this.props.numClick;
                        break;
                    case 2:
                        fn = this.props.oClick;
                        break;
                    case 3:
                        fn = this.props.equalClick;
                        break;
                    case 4:
                        fn = this.props.clearClick;
                        break;
                    default:
                        fn = ()=>{};
                        break;
                }
                return (
                    <Button
                        fn={fn}
                        col={v.type == 2 ? 'col' : ''}
                        zero={v.content == 0 ? 'zero' : ''}
                        res={v.content == '=' ? 'col' : ''}
                        key={i}>
                        {v.content}
                    </Button>
                );
                }
            )
        );
        return (
            <div className="operator">
                {el}
            </div>
        );
    }
}
//type  1:数字  2:操作符  3:=
var buttons = [
    {type: 4, content: 'AC'},
    {type: 5, content: '+/-'},
    {type: 6, content: '%'},
    {type: 2, content: '/'},
    {type: 1, content: 7},
    {type: 1, content: 8},
    {type: 1, content: 9},
    {type: 2, content: '*'},
    {type: 1, content: 4},
    {type: 1, content: 5},
    {type: 1, content: 6},
    {type: 2, content: '-'},
    {type: 1, content: 1},
    {type: 1, content: 2},
    {type: 1, content: 3},
    {type: 2, content: '+'},
    {type: 1, content: 0},
    {type: 1, content: '.'},
    {type: 3, content: '='}
];
//props:
// num 屏幕上显示的内容 number
class Screen extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="screen">
                <div className="num">{this.props.num}</div>
            </div>
        );
    }
}
class Cal extends React.Component {
    constructor() {
        super();
        this.state = {
            exp:'',
            num: 0
        };
        this.numClick = this.numClick.bind(this);
        this.oClick = this.oClick.bind(this);
        this.equalClick = this.equalClick.bind(this);
        this.clearClick = this.clearClick.bind(this);
    }

    numClick(value) {
        var e = this.state.exp+value;
        this.setState({
            exp:e,
            num: e
        });
    }

    oClick(value){
        var e = this.state.exp+value;
        this.setState({
            exp:e,
            num: e
        });
    }
    equalClick(){
        try{
            var e = eval(this.state.exp).toFixed(1);
            this.setState({
                exp:''+e,
                num:e
            });
        }catch(e){
            this.setState({
                exp:'',
                num:'非法表达式'
            });
        }

    }
    clearClick(){
        this.setState({
            exp:'',
            num:0
        });
    }
    render() {
        return (
            <div id="wrapper">
                <Screen num={this.state.num}/>
                <KeyBord
                    numClick={this.numClick}
                    oClick={this.oClick}
                    equalClick={this.equalClick}
                    clearClick={this.clearClick}
                    data={buttons}/>
            </div>
        );
    }
}
ReactDOM.render(<Cal/>, document.querySelector('#calculator'));