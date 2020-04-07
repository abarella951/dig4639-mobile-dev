import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './component/CardList'

function MyComponent(props) {
  return <p>Hello World</p>
}

class MyOtherComponent extends React.Component {
  render() {
    return (
      <p>Hello other world</p>
    )
  }
}

function App() {
  return (
    <div className="App">
      <MyComponent />
      <MyOtherComponent />
      <CardList />
    </div>
  );
}

export default App;
