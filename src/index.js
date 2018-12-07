import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import App from './App'
import store from './reducers/store'
import registerServiceWorker from './registerServiceWorker'
// styled-components v4+ globalstyle
import GlobalStyle from './theme/globalStyles'

library.add(fab, fas)

ReactDOM.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    <GlobalStyle />
  </>,
  document.getElementById('root')
)
registerServiceWorker()
