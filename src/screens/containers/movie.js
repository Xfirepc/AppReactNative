import React, {Component} from 'react'
import Layout from '../components/movie'
import Player from '../../player/containers/player'
import { Text } from 'react-native';
import Close from '../../sections/components/close'
import  { connect } from 'react-redux'
import Header from '../../sections/components/header'
import Details from '../../videos/components/details'
class Movie extends Component {
  closeVideo = () => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: null
      }
    })
  }
  render(){
    return (
      <Layout>
        <Header>
            <Close onPress={this.closeVideo}/>
          </Header>
        <Player/>
        <Details {...this.props.movie}/>
      </Layout>
    )
  }
}
function mapStateToProps(state){
  return {
    movie: state.selectedMovie
  }
}

export default connect(mapStateToProps)(Movie)