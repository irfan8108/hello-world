import React, { Component } from 'react';

import Splash from './app/screens/Splash';
import Login from './app/screens/Login';

// export default function App() {
//   return (
//     <Login/>
//   );
// }

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state = { currentScreen: 'splash' };
    console.log('Start doing some task for about 2 seconds')
    setTimeout(()=>{
      console.log('Done some task for about 2 seconds')
      this.setState({ currentScreen: 'login'})
    }, 2000)
  }

  render(){
    const { currentScreen } = this.state;
    let mainScreen = currentScreen === 'splash' ? <Splash/> : <Login/>
    return mainScreen
  }

}