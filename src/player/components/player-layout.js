import React from 'react'
import { View, Text, StyleSheet} from 'react-native'




function PlayerLayout ( props ) {
  return(
    <View style={styles.container}>
      <View style={styles.video}>
      { props.video }
      </View>
      <View style={styles.overplay}>
        { props.loading &&
          props.loader }
      </View>
      {props.controls}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingTop: '56.25%',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000000'
  },
  overplay:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default PlayerLayout