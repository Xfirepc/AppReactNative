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
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './store'

// type Props = {};
export default class App extends Component{

  state = {
    // suggestionList: [],
    // categoryList: []
  }

  async componentDidMount() {
    const categoryList = await API.getMovies()
    store.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })
    const suggestionList = await API.getSuggestions(1)
    store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    })
  }
  render() {
    return (
      <Provider
        store={store}>
      <PersistGate
        loading = {<Text>Cargando sapon</Text>}
        persistor = {persistor}>
        <Home>
          <Header>
            <Text>buscador</Text>
          </Header>
            <Player/>
          <CategoryList/>
          <SuggestionList/>
        </Home>
      </PersistGate>
      </Provider>
    );
  }
}