import React, { Component } from 'react';
import '../App.css';

// import LearningJSX from './01-LearingJSX';
// import LearningProps from './02-Components-Props';
// import Clock from './03-Clock-state';
// import Click from './04-Click';
// import Greeting from './05-Conditional-rendering1';
// import GreetingToo from './05-Conditional-rendering2';
// import UnreadMessage from './06-UnreadMessage';
import Page from './07-Page';
import PreventRendering from './07-PreventRendering';
// import LearningES6 from './ES6Learning';


class App extends Component {
  render () {
    return (
      <div>
        {/*<LearningJSX />*/}
        {/*<LearningProps />*/}
         {/*<Clock />*/}
         {/*<Click />*/}
         {/*<Greeting />*/}
         {/*<GreetingToo />*/}
         {/*<UnreadMessage />*/}
         <Page />
         <PreventRendering />
         {/*<LearningES6 />*/}
      </div>
    )
  }
}


export default App;
