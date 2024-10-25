import { createRoot } from 'react-dom/client';
import { ToolbarProvider } from '../../../src/';
import App from './App';
import { SampleItem } from './components/SampleItem';
import './index.css';

createRoot(document.getElementById('root')!).render(
    <ToolbarProvider slots={{ toolbarItem: <SampleItem /> }}>
      <App />
    </ToolbarProvider>
);
