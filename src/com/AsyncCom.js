import { h, Component } from 'preact';

//Also functions as a light-weight version of preact-async-route
export class AsyncCom extends Component {
  constructor(props) {
    super(props);
    this.state = { Com: () => <div>Loading...</div> };
  }
  componentDidMount() {
    if (!this.props.getCom) { return; }
    this.props.getCom().then(Com => this.setState({ Com }));
  }
  render(_, { Com }) {
    return <Com />;
  }
}
