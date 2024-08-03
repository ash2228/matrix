import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {GoogleOAuthProvider} from "@react-oauth/google";



ReactDOM.createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId="575416273845-3kphhe58crdu4n077344a9lp8j18itvi.apps.googleusercontent.com">
        <App />
    </GoogleOAuthProvider>
)