import { createRoot } from 'react-dom/client';
import { ToolbarProvider } from 'hooks-react-toolbar';
import App from './App';
import { OtherSampleItem } from './components/OtherSampleItem';
import { SampleItem } from './components/SampleItem';
import { SampleItems } from './components/SampleItems';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <ToolbarProvider slots={{
    toolbarItem: <div />,
    toolbarWrapper: <div />,
    isEmbedded: false,
  }}>
    <App />
  </ToolbarProvider>
);
