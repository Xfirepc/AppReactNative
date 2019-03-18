import React from 'react'
import {Text, View, StyleSheet, ImageBackground } from 'react-native'

function CategoryListLayout ( props ) {
  const style = StyleSheet.create({
      container:{
        paddingVertical: 30,
        paddingHorizontal: 10,

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
    <ImageBackground
      source = {require('../../../assets/backgronund.png')}
      style = { style.container } 
    >
        <Text style = {style.title}>{props.title}</Text>
        { props.children }
    </ImageBackground>
  )
}

export default CategoryListLayout