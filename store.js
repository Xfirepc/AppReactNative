import { createStore } from 'redux'
import reducer from './reducer/videos';

const store = createStore(reducer, {})

export default store