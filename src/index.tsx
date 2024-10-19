import { StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom'
import './i18n.js'

import App from './App'
import { Loading } from './components/common/loading/Loading'

ReactDOM.render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </StrictMode>,
  document.getElementById('root')
)
