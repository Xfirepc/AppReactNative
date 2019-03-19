import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import Empty from '../components/empty'
import Separator from '../components/separator-vertical'
import Category from '../components/category'
import Layout from '../components/category-list-layout'

class CategoryList extends Component {

  renderEmpty = () => <Empty text="No hay elementos en la lista :("></Empty>
  itemSeparator = () => <Separator horizontal/>
  renderItem = ({ item }) => <Category {...item}/>
  keyExtractor = (item) => item.id.toString()

  render () {
    // Cada objeto del array es un item en renderItem
    return (
      <Layout title="Categories">
        <FlatList
            horizontal
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

export default CategoryList;