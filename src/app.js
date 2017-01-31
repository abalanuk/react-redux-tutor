console.log("Test");

// var React = require('react');
// var Navigation = require(./component/navigationBar);

// class App extends React.Component {
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			title: 'About',
// 			isValid: false
// 		};
// 		let data = this.props.data;

// 	}

// 	loadData() {
// 		DataService.loadData().
// 		.then((resp) => { this.setState({title: resp.data.title}) })
// 		.catch(error)
// 	}

// 	helperMethod() {
// 		... title;

// 		let data = {title: value, isActive: value};
// 		if(data) this.setState(data)
// 	}

// 	render() {
// 		let dataProcessed = this.props.data.map((item) => { return item + "(GA)" });
// 		return 
// 		(
// 		<div>
// 	      <h2 className="alt-header">{ this.state.title }</h2>
// 	      <Navigation data={dataProcessed}/>	
// 	      <p>
// 	        { dataProcessed }<a href="https://github.com/coryhouse/react-slingshot">React-Slingshot
// 	        starter kit</a>.
// 	      </p>
// 	      <p>
// 	        <Link to="/badlink">{this.state.isValid ? "This is is valid link" : "Click this bad link"}</Link> to see the 404 page.
// 	      </p>
//     	</div>
// 			)
// 	}

// }

// module.exports = App;

// function App(){ return true; }


// let dumbComponent = () => { 
// 	return (
// 	      <p>
// 	        <Link to="/badlink">Click this bad link</Link> to see the 404 page.
// 	      </p>
// 	)
// }


// module.exports = dumbComponent;