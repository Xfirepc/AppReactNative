import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

function Suggestion ( props ){
  return(
    <View style = { styles.container } >
      
      <View style={ styles.left}>
        <Image style={ styles.cover } source={require('../../../assets/logo.png')}/>
      </View>
      
      <View style={styles.right}>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  separator:{
    borderTopWidth: 1,
  }
})
export default Suggestion