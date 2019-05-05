import React, { Component } from 'react';
import {
  Text
} from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggesion-list';
import CategoryList from './src/videos/containers/category-list';
import API from './src/utils/api'
import Player from './src/player/containers/player'
import {Provider} from 'react-redux'
import store from './store'

// type Props = {};
export default class App extends Component{

  state = {
    suggestionList: [],
    categoryList: []
  }

  async componentDidMount() {
    const movies = await API.getSuggestions(1)
    const categories = await API.getMovies()

    // console.log(movies)
    console.log(categories)

    this.setState({
      suggestionList: movies,
      categoryList: categories,
    })
  }
  render() {
    return (
      <Provider
        store={store}>
      <Home>
        <Header>
          <Text>buscador</Text>
        </Header>
          <Player/>
        <CategoryList list={ this.state.categoryList }/>
        <SuggestionList list={ this.state.suggestionList }/>
      </Home>
      </Provider>
    );
  }
}