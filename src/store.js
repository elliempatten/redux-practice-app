import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import countersAndToggle from './reducers/reducers';

const store = createStore (countersAndToggle, composeWithDevTools());

export default store;