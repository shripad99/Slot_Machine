// import logo from './logo.svg';
import './App.css';
import Slots from './Component/SlotMachine';
import React ,{Component} from 'react';
// import Content from './Component/Container';


class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Slots title = "🎰Welcome to Jackpot Club🎰"/>
        {/* <Content/> */}
      </React.Fragment>
    )
  }
}
export default App;


