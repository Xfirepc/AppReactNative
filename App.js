import React, { Component } from 'react';
import {
  Text
} from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggesion-list';

// type Props = {};
export default class App extends Component{
  render() {
    return (
      <Home>
        <Header>
          <Text>buscador</Text>
        </Header>
        <SuggestionList/>
      </Home>
    );
  }
}