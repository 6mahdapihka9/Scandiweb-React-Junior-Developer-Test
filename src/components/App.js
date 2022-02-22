import './App.scss';
import React from "react";
import Header from "./Header/Header";
import Body from "./Body/Body";


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <>
          <Header />
          <Body/>
        </>
    );
  }
}
