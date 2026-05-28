import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import { Toaster } from 'sonner'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

const queryClient = new QueryClient()
const google_auth_Client_ID = import.meta.env.google_auth_Client_ID;
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <Toaster position="top-right" richColors />
    <GoogleOAuthProvider clientId={google_auth_Client_ID}>
    <App />
    </GoogleOAuthProvider>
    </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
