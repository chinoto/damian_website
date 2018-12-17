import {h, Component} from 'preact';

export default class Router extends Component {
	constructor(props) {
		super(props);
		const {paths,notFound,defaultCond,defaultTo,debug}=props;
		this.state={
			path:{},
			setPath:(function setPath() {
				let path=location.hash

				if (debug) {console.log(`Routed to '${path}'`);}
				if (defaultCond.test(path)) {
					path=defaultTo;
					history.replaceState(null,null,path);
					if (debug) {console.log(`Redirected to '${path}'`);}
				}
				if (!paths[path]) {
					path=notFound;
					history.replaceState(null,null,path);
					if (debug) {console.log(`Redirected to '${path}' due to invalid path`);}
				}
				this.setState({path});
			}).bind(this)
		};
	}
	componentWillMount(){
		this.state.setPath();
		window.addEventListener("hashchange", this.state.setPath);
	}
	componentWillUnmount(){
		window.removeEventListener("hashchange", this.state.setPath);
	}
  render({paths},{path}) {
		return paths[path]&&paths[path]()||'Routing Error';
  }
}
