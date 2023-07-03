import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import { Auth0Provider } from '@auth0/auth0-react'

import App from './components/App'
import { BrowserRouter } from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="piwakawaka-2023-brindha.au.auth0.com"
      clientId="AeLZXmbZd0u0oROiKIT4ZNqXLTrcMs0H"
      redirectUri="http://localhost:5173/signup"
      audience="https://users/api"
      // useRefreshTokens={true}
      // cacheLocation="localstorage"
    >
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </Auth0Provider>
  )
})
