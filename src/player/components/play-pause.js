import React from 'react'
import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
} from 'react-native'

function PlayPause (props){
  return (
    <TouchableHighlight 
        onPress={props.onPress} 
        style={styles.container}
        underlayColor="red"
        hitSlop={
          {
            left: 10,
            top: 10,
            right: 10,
            bottom: 10
          }}>
      {
        props.paused?
        <Text style={styles.button}>PAUSE</Text>
        :
        <Text style={styles.button}>PLAY</Text>
      }
      </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button:  {
      color: 'white',
      fontSize: 10,
      fontWeight: 'bold'
  },
  container:  {
      justifyContent: 'center',
      paddingHorizontal: 10,
      height: 25,
      marginRight: 10,
      marginVertical: 5,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: 'white',
      backgroundColor: 'gray'
  }
})

export default PlayPause