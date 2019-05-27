import React, {Component} from 'react'
import {TextInput, StyleSheet} from 'react-native'




class Search extends Component {
  handleSubmit = () => {
    console.log(this.state.text)
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

export default Search