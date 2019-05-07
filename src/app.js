import React,  {Component} from 'react'
import API from './utils/api'
import Home from './screens/containers/home';
import Header from './sections/components/header';
import SuggestionList from './videos/containers/suggesion-list';
import CategoryList from './videos/containers/category-list';
import { Text } from 'react-native';
import { connect } from 'react-redux'
import Movie from './screens/containers/movie'

class AppLayout extends Component {
  async componentDidMount() {
    const categoryList = await API.getMovies()
    this.props.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })
    const suggestionList = await API.getSuggestions(1)
    this.props.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    })
  }
  render() {
    return (
      <Home>
          <Movie/>
          <CategoryList/>
          <SuggestionList/>
        </Home>
    )
  }
}

export default connect(null)(AppLayout)