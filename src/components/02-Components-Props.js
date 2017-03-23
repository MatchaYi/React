import React, { Component } from 'react';


function Msg (props) {
  return <li>hello, {props.name}</li>
}
class LearningProps extends Component{
  render(){
    return (
        <ol>
          <Msg name="Jack"></Msg>
          <Msg name="Mark"></Msg>
          <Msg name="Jr."></Msg>
        </ol>
    )
  }
}

export default LearningProps;
