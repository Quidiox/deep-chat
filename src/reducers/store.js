import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import rootReducer from './rootReducer'
import rootSaga from '../sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)

export const runSaga = sagaMiddleware.run
export const history = createBrowserHistory()
export default store
