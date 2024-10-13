import App from './App.tsx'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Amplify } from 'aws-amplify'

const REACT_APP_USER_POOL_ID = import.meta.env.VITE_USER_POOL_ID as string
const REACT_APP_USER_POOL_WEB_CLIENT_ID = import.meta.env.VITE_USER_POOL_WEB_CLIENT_ID as string


Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: REACT_APP_USER_POOL_ID,
      userPoolClientId: REACT_APP_USER_POOL_WEB_CLIENT_ID,
      loginWith: {
        email: true,
      },
    },
  }
})  


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
