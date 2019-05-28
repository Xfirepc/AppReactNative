import React, {Component} from 'react'
import {TextInput, StyleSheet} from 'react-native'
import API from '../../utils/api'


import {connect} from 'react-redux'
class Search extends Component {
  handleSubmit = async () => {
    const movies = await API.searchMovie(this.state.text)
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload:{
        movie: movies[0]
      }
    })
  }
  handleChangeText = (text) =>{
    this.setState({
      text
    })
  }
  render() {
    return(<TextInput
       placeholder="Buscar..."
       autoCorrect={false}
       autoCapitalize="none"
       onSubmitEditing={this.handleSubmit}
       onChangeText={this.handleChangeText}
       style={styles.input}
    />)
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#eaeaea',
  }
})

export default connect(null)(Search)