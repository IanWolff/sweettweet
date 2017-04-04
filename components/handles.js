export default class HandlesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    var handle = this.state.value;
    var check = handle.substring(0,1);
    alert('A handle was submitted: ' + this.state.value);
    $.ajax({
      type: "POST",
      url: "C:/Users/Paxton Head/Documents/sweettweet/SweetTweets/markovbot/script.py",
      data: { stuff_for_python: this.state.value},
      success: function(response){
      alert(response);
      },
      error: function(data){
      alert(data.responseText);
      },
    });
    }


  render() {
    return (
      <body>
      <div id="wrapper">
        <form onSubmit={this.handleSubmit}>
          <input class="submitbutton" type="submit" value=""/>
          <input maxlength="150" type="text" placeholder="yourhandle" id="twitterhandle" />
          <input type="text" id={this.state.value} onChange={this.handleChange}/>
        </form>
        <div id="body">
          <div class="logo">
            <img src="http://bit.ly/2nMvpZW" />
          </div>
        </div>
      </div>
      </body>

    );
  }
}
