import React from "react";
import SwitchButton from "./Button";
import Header from "./Header";
import Main from "./Main";
import {UserProvider} from '../userContext'

class App extends React.Component {
  state = {
    isDarkMode: false,
  };
  changeMode = () => {
    this.setState((state) => {
      return { isDarkMode: !state.isDarkMode };
    });
  };
  render() {
    let { isDarkMode } = this.state;
    return (
      <UserProvider value={ isDarkMode }>
      <div className={`bg ${isDarkMode ? "bg-dark" : "bg-light"}`}>
        <Header />
        <Main />
        <SwitchButton changeMode={this.changeMode} />
      </div>
      </UserProvider>
      
    );
  }
}

export default App;
