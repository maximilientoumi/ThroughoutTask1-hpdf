
import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {cyan500,grey50, white, black
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import  UserProfileComponent from './UserProfileComponent';
import UserTimeLineBoxComponent  from './UserTimeLineBoxComponent';
import UserTrendsComponent from './UserTrendsComponent';
import UserSuggestionComponent from './UserSuggestionComponent';
import TwitterTabComponent from './TwitterTabComponent';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 46,
    color: black,
  },
});



class App extends Component {
  render() {
   

    return (
     
        <MuiThemeProvider  muiTheme={muiTheme}>
          <div><div><TwitterTabComponent/></div></div>
           <div className = "App">
              <UserProfileComponent />
              <UserTrendsComponent />
              <UserTimeLineBoxComponent />
              <UserSuggestionComponent/>
        
           </div>        
        </MuiThemeProvider>
      
    );
  }
}


export default App;
