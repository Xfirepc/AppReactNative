import React, { Component } from 'react';
import {
  Text
} from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggesion-list';
import API from './src/utils/api'


// type Props = {};
export default class App extends Component{

  state = {
    suggestionList: []
  }

  async componentDidMount() {
    const movies = await API.getSuggestions(1)
    console.log(movies)
    this.setState({
      suggestionList: movies
    })
  }
  render() {
    return (
      <Home>
        <Header>
          <Text>buscador</Text>
        </Header>
        <SuggestionList list={ this.state.suggestionList }/>
      </Home>
    );
  }
}
