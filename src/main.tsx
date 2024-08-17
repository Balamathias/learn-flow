import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import Routes from './components/routes.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'
import { Provider } from './provider.tsx'
import '@fontsource/lato'

const client = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <QueryClientProvider client={client}>
        <Routes />
      </QueryClientProvider>
      <Toaster richColors position='top-right'/>
    </Provider>
  </StrictMode>,
)
