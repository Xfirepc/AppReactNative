import React, {Component} from 'react'
import Layout from '../components/movie'
import Player from '../../player/containers/player'
import { Text } from 'react-native';


import Header from '../../sections/components/header'

class Movie extends Component {
  render(){
    return (
      <Layout>
        <Header>
            <Text>buscador</Text>
          </Header>
        <Player/>
      </Layout>
    )
  }
}


export default Movie