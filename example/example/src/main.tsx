import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToolbarProvider } from '../../../src/';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToolbarProvider>
      <App />
    </ToolbarProvider>
  </StrictMode>,
)
