import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import rootReducer from './rootReducer'
import rootSaga from '../sagas/rootSaga'

export const history = createHistory()
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)
sagaMiddleware.run(rootSaga)

export default store
