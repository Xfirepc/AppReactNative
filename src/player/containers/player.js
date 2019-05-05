import React, { Component } from 'react'
import { StyleSheet,
         ActivityIndicator,
         Text       
}  from 'react-native'
import Layout from '../components/player-layout'
import { Video } from 'expo'
import ControlsLayout from '../components/controls-layout'
import PlayPause from '../components/play-pause'

const styles = StyleSheet.create({
  video:{
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  }

})
class Player extends Component{
  state={
    loading: true,
    paused: false
  }
  onBuffer = ({ isBuffering }) => {
    this.setState({
      loading: isBuffering
    })
  }
  onLoad = () => {
    this.setState({
      loading: false
    })
  }
  playPause = () => {
    this.setState({
      paused: !this.state.paused
    })
  }
  render () {
    return(
      <Layout 
          loading={this.state.loading}
          video = {
            <Video
            source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="contain"
            shouldPlay={this.state.paused}
            style={styles.video}
            onLoad={this.onLoad}
            />
          }
          loader = {<ActivityIndicator color='red'/>}
          controls = {
            <ControlsLayout>
                <PlayPause
                  onPress={this.playPause}
                  paused={this.state.paused}
                />
            </ControlsLayout>}
      >
      </Layout>
      
    )
  }
}


export default Player