import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import Layout from '../components/suggestions-list-layout';
import Empty from '../components/empty'
import Separator from '../components/separator-vertical'
import Suggestion from '../components/suggestion'
class SuggestionList extends Component {
  renderEmpty = () => <Empty text="No hay elementos en la lista :("></Empty>
  itemSeparator = () => <Separator/>
  renderItem = ({ item }) => <Suggestion {...item}/>
  render () {
    // Cada objeto del array es un item en renderItem
    const list = [
      { title: 'Avengers', key: '1'},
      { title: 'X-Men', key: '2'}
    ]
    return (
      <Layout title = "Recomendado para ti">
          <FlatList
            data = { list }
            ItemSeparatorComponent = { this.itemSeparator }
            ListEmptyComponent = { this.renderEmpty }
            renderItem = { this.renderItem }
          />
      </Layout>
    )
  }

}

export default SuggestionList;