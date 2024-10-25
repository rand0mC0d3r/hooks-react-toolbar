import { ToolbarProvider } from 'hooks-react-toolbar';
import { createRoot } from 'react-dom/client';
import App from './App';
import { SampleItem } from './components/SampleItem';
import { SampleItems } from './components/SampleItems';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <ToolbarProvider slots={{
    toolbarItem: <SampleItem />,
    toolbarWrapper: <SampleItems />,
    isEmbedded: window.location.pathname === '/embedded',
  }}>
      <App />
  </ToolbarProvider>
);
