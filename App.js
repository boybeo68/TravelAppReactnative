import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './components/LoginScreen'
import SlashScreen from './components/SlashScreen'

 class Main extends React.Component {
  constructor(props) {
      super(props);
      this.state={
        currentScreen: 'SlashScreen'
      };
      setTimeout(() => {
          this.setState({currentScreen : 'Login'})
      },10000)
  }
    render() {
        const {currentScreen} = this.state;
        let Main = currentScreen === 'SlashScreen' ? <SlashScreen/> : <LoginScreen/>;
        return (
           Main
        );
    }
}


export default class App extends React.Component {
  render() {
    return (
     <Main/>
    );
  }
}
