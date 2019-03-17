import React from 'react'
import {Text, View, StyleSheet } from 'react-native'

function SuggestionListLayout ( props ) {
  const style = StyleSheet.create({
      container:{
        paddingVertical: 10,
        flex: 1
      },
      title: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
        marginLeft: 8,
        color: '#4c4c4c',

      }
  })
  return(
    <View style = {style.container}>
      <Text style = {style.title}>{props.title}</Text>
      { props.children }
    </View>
  )
}

export default SuggestionListLayout