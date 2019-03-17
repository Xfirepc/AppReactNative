import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

function Suggestion ( props ){
  return(
    <View style = { styles.container } >
      
      <View style={ styles.left }>
        <Image style={ styles.cover } source={require('../../../assets/logo.png')}/>
        <View style={ styles.gener }>
          <Text style={ styles.generText }>Accion</Text>
        </View>
      </View>
      
      <View style={ styles.right }>
        <Text style={ styles.title }>Avengers</Text>
        <Text style={ styles.year }>2012</Text>
        <Text style={ styles.rating }>5 Estrellas</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
  },
  gener:{
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'black',
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
  generText: {
    color: 'white',
    fontSize: 11,
  },
  cover: {
    height: 100,
    width: 150,
    resizeMode: 'contain'
  },
  right: {
    paddingLeft: 10,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 18,
    color: '#44546b',
  },
  year: {
    backgroundColor: '#70b124',
    paddingVertical: 4,
    color: '#fff',
    fontSize: 11,
    borderRadius: 5,
    overflow: 'hidden',
    paddingHorizontal: 6,
    alignSelf: 'flex-start',
  },
  rating: {
    color: '#6b6b6b',
    fontSize: 14,
    fontWeight: 'bold',
  }
})
export default Suggestion