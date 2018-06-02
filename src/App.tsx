import * as React from 'react';
import './App.css';
import logo from './logo.svg';
import NamesList from './names';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <NamesList ages={[1,2,3]} />
      </div>
    );
  }
}

export default (App);
