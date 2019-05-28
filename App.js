import React, { Component } from 'react';

import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './store'
import Loading from './src/sections/components/loading'
import AppLayout from './src/app'
import {SafeAreaView, StyleSheet, Platform} from 'react-native'
export default class App extends Component{
  render() {
    return (
      <Provider
        store={store}>
      <PersistGate
        loading = {<Loading/>}
        persistor = {persistor}>
        <SafeAreaView style={styles.droidSafeArea}>
          <AppLayout/>
        </SafeAreaView>
      </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? 20 : 0
  }
})