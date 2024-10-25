import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToolbarItem, ToolbarRenderer } from 'hooks-react-toolbar';
import './App.css';


export default function AppWrapper() {
  const currentPath = window.location.pathname;

  return <>
    <ToolbarItem id="logo" icon={<FontAwesomeIcon icon={faEnvelope} />} />
    <ToolbarItem id="anotherlogo" icon={<FontAwesomeIcon icon={faEnvelope} />} />

    <div style={{ inset: '0px', position: 'absolute', display: 'flex', flexDirection: 'column', gap: '8px', padding: '8px'}}>
      <ToolbarRenderer />

      <div style={{ flex: '1 1 auto', border: '1px solid pink'}}>
        Current Path: {currentPath}

        Open embedded view <a href="http://localhost:5174">here</a>
      </div>
    </div>
  </>
}
