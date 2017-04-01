import React, {Component} from 'react';


function FancyBorder(props) {
    console.log(props.children)
  return (
    <div className={props.color}>
      {props.children}
    </div>
  );
}

function Dialog(props) {
    console.log(props.children)
  return (
    <FancyBorder color="red">
      <h1>
        {props.title}
      </h1>
      <p>
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" >
      {/*hello*/}
    </Dialog>
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program"
              message="How should we refer to you?">
        <input value={this.state.login}
               onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    );
  }
}

class Composition extends Component {
    render () {
       return (
            <div>
                <SignUpDialog /> 
                <WelcomeDialog />
            </div>
       )
    }
    
}
export default Composition
//other case
/*function Contacts (props) {
    return <div>Contacts </div>
}
function Chat (props) {
    return <div>Chat </div>
}

function SplitPane (props) {
    return (
        <div>
            <div>
                {props.left}
            </div>
            <div>
                {props.right}
            </div>
        </div>
    )
}
export function Other (props) {
    return (
        <SplitPane 
            left={
                <Contacts />
            }
            right={
                <Chat />
            }
        />
    )
}*/
