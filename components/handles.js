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
    $.ajax({
      type: "POST",
      url: "~/markovbot35.py",
      data: { param: this.handle}
    }).done(function( o ) {
      consol.log(data);
      consol.log(this.handle)
    });
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
