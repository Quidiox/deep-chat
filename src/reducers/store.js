import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import rootReducer from './rootReducer'
import rootSaga from '../sagas/rootSaga'

export const history = createHistory()
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)

export default store
