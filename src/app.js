import React,  {Component} from 'react'
import API from './utils/api'
import Home from './screens/containers/home';
import Header from './sections/components/header';
import SuggestionList from './videos/containers/suggesion-list';
import CategoryList from './videos/containers/category-list';
import { connect } from 'react-redux'
import Movie from './screens/containers/movie'
import Search from './sections/components/search'

function mapStateToProps(state){
  return {
    selectedMovie: state.selectedMovie
  }
}
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
    if(this.props.selectedMovie){
      return <Movie/>
    }
    return (
        <Home>
          <Header>
          </Header>
            <Search/>
          <CategoryList/>
          <SuggestionList/>
        </Home>
    )
  }
}

export default connect(mapStateToProps)(AppLayout)