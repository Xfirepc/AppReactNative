import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import Layout from '../components/suggestions-list-layout';
import Empty from '../components/empty'
import Separator from '../components/separator-vertical'
import Suggestion from '../components/suggestion'
import {connect} from 'react-redux'

function mapStateToProps(state){
  return {
    list: state.suggestionList
  }
}
class SuggestionList extends Component {

  renderEmpty = () => <Empty text="No hay elementos en la lista :("></Empty>
  itemSeparator = () => <Separator/>
  renderItem = ({ item }) => <Suggestion {...item}/>
  keyExtractor = (item) => item.id.toString()

  render () {
    // Cada objeto del array es un item en renderItem
    return (
      <Layout title = "Recomendado para ti">
          <FlatList
            data = { this.props.list }
            keyExtractor={ this.keyExtractor }
            ItemSeparatorComponent = { this.itemSeparator }
            ListEmptyComponent = { this.renderEmpty }
            renderItem = { this.renderItem }
          />
      </Layout>
    )
  }

}

export default connect(mapStateToProps)(SuggestionList);