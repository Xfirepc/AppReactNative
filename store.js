import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import reducer from './reducer/videos';
import storage from 'redux-persist/lib/storage'

// const store = createStore(reducer, {})

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['selectedMovie']
}
const persistedReducer = persistReducer(persistConfig, reducer)
let store = createStore(persistedReducer)
let persistor = persistStore(store)

export {store, persistor}