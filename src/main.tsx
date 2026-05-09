import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles.scss'
import NotesContextProvider from './contexts/NotesContext.tsx'
import { Theme } from '@radix-ui/themes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme>
      <NotesContextProvider>
        <App />
      </NotesContextProvider>
    </Theme>
  </StrictMode>,
)
