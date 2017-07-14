//虚拟DOM解决比对问题
/*
 let data = [1,2,3];
 let el = (
 <div>
 {data.map((value,index)=><div key={index}>{value}</div>)}
 </div>
 );
 console.dir(el);
 ReactDOM.render(el,document.querySelector('#root'));
 setTimeout(()=>{
 data = [1,2];
 el = (
 <div>
 {data.map((value,index)=><div key={index}>{value}</div>)}
 </div>
 );
 ReactDOM.render(el,document.querySelector('#root'));
 },6000);*/


//2.组件  react.js - window.React
//        react-dom.js  - window.ReactDOM
/*class Header extends React.Component{
 constructor (){
 super(); //可以调用组件上的this
 }
 render(){ //必须要有返回值 return
 return (
 <div>
 1123
 </div>
 );
 }
 }
 class Footer extends React.Component{
 render(){
 return (
 <div>
 <p>copyright 2017</p>
 </div>
 );
 };
 }
 class Page extends React.Component{
 render(){
 return (
 <div>
 <Header/>
 <Footer/>
 </div>
 );
 }
 }
 ReactDOM.render(<Page/>,document.querySelector('#root'));*/


//3.组件化开发  this.state

/*
 let header = (
 <div>新闻</div>
 );
 let footer = (
 <div>copyright 2017</div>
 );
 class News extends React.Component {
 constructor() {
 super(); //可以调用组件上的this
 this.state = {
 data: [1, 2, 3]
 };
 this.delete = this.delete.bind(this);
 }

 delete(i) {
 this.state.data.splice(i, 1);
 this.setState(this.state.data);
 }

 render() { //必须要有返回值 return
 let lis = this.state.data.map((v, i) =>
 <li key={i}>{v}<span onClick={() => {
 this.delete(i)
 }}> x</span></li>
 )
 return (
 <div>
 {lis}
 </div>
 );
 }
 };
 let page = (
 <div>
 {header}
 <News/>
 {footer}
 </div>
 );
 ReactDOM.render(page, document.querySelector('#root'));
 */

//4.组件 生命周期
/*class MusicList extends React.Component {
 constructor() {
 super();
 this.state = {
 loading: true
 };
 }

 componentDidMount() {
 fetch(this.props.url)
 .then(res => res.json())
 .then(data => {
 this.setState({data: data, loading: false})
 })
 }

 render() {
 let head, body;
 if (this.state.data) {
 let arr = Object.keys(this.state.data[0]);
 head = (
 <tr>
 {arr.map((v, i) => <th key={i}>{v}</th>)}
 </tr>
 );
 body = (
 this.state.data.map(v =>
 <tr key={v.id}>
 {arr.map((k, i) => <td key={i}>{v[k]}</td>)}
 </tr>
 )
 );
 }
 return (
 <div className="container">
 {this.state.loading ? <div className="alert alert-info">loading...</div> : null}
 <table className="table">
 <caption>{this.props.name}</caption>
 <thead>
 {head}
 </thead>
 <tbody>
 {body}
 </tbody>
 </table>
 </div>
 );
 }
 }
 const page = (
 <div className="container">
 <h3>数据表</h3>
 <MusicList url="/react/index.php/home/x" name="设计师分类"/>
 </div>
 );
 ReactDOM.render(page, document.querySelector('#root'));*/
//React.Component  便于维护

//组件化开发  很高效
class Button extends React.Component {
    constructor() {
        super();
        this.state = {
            clicked: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            clicked: !this.state.clicked
        });
    }

    render() {
        var dec = {
            position: 'absolute',
            right: -5,
            top: -5,
            width: 15,
            height: 15,
            background: '#f40',
            borderRadius: "50%",
            color: '#0085d0',
            fontSize: 13,
            textAlign: 'center',
        };
        return (
            <div style={{position: 'relative',marginRight:10}}
                 onClick={() => this.handleClick()}
                 className={`btn ${this.state.clicked ? 'btn-danger' : 'btn-primary'}`}>
                {this.props.children}
                <div
                    className="decoration"
                    style={dec}>
                    {this.props.num}
                </div>
            </div>
        );
    }
}
const page = (
    <div className="container">
        <h3>button</h3>
        <Button num="5">点击</Button>
        <Button num="10">点击1</Button>
    </div>
);
ReactDOM.render(page, document.querySelector('#root'));