import React, { Component } from 'react';
import '../App.css';

// import LearningES6 from './00-ES6Learning';
// import LearningJSX from './01-LearingJSX';
// import LearningProps from './02-Components-Props';
// import Clock from './03-Clock-state';
// import Click from './04-Click';
// import Greeting from './05-Conditional-rendering1';
// import GreetingToo from './05-Conditional-rendering2';
// import UnreadMessage from './06-UnreadMessage';
// import PreventRendering from './07-PreventRendering';
// import ListsandKeys from './08-Lists-Keys';
// import ControlledComponents from './09-ColltrolledComponents';
import TempertureCalculator from './10-TemperatureCalculator'



class App extends Component {
  render () {
    return (
      <div>
         {/*<LearningES6 />*/}
         {/*<LearningJSX />*/}
         {/*<LearningProps />*/}
         {/*<Clock />*/}
         {/*<Click />*/}
         {/*<Greeting />*/}
         {/*<GreetingToo />*/}
         {/*<UnreadMessage />*/}
         {/*<PreventRendering />*/}
         {/*<ListsandKeys />*/}
         {/*<ControlledComponents />*/}
         <TempertureCalculator />
      </div>
    )
  }
}


export default App;
