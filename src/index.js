import { StrictMode as SMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import './assets/styles/main.css'

ReactDOM.render(
  <SMode>
    <Router>
      <App />
    </Router>
  </SMode>,
  document.querySelector('#app')
)
