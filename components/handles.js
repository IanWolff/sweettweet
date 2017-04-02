
export default class HandlesForm extends React.Component {
  constructor(props) {
    super(props);
    this.handle = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A handle was submitted: ' + this.state.value);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Twitter Handle:<br/>
          <input type="text" id={this.handle.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}
