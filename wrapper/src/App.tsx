import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { ToolbarItem, ToolbarProvider, ToolbarRenderer, useToolbar } from '../../src/';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

const iframeStyle = {
  width: '500px',
  height: '500px',
  border: '1px solid green',
}

export default function AppWrapper() {
  const currentPath = window.location.pathname;

  return <>
    <ToolbarItem id="logo" icon={<FontAwesomeIcon icon={faEnvelope} />} />
    <ToolbarItem id="anotherlogo" icon={<FontAwesomeIcon icon={faEnvelope} />} />

    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px'}}>

      <ToolbarRenderer />

      <div>
        Current Path: {currentPath}
      </div>

      {currentPath === '/' && <div style={{ display: 'flex', gap: '8px' }}>
        <iframe src="http://localhost:5173/directEmbed" title="test" style={iframeStyle} />
        <iframe src="http://localhost:5173/nestedEmbed" title="test" style={iframeStyle}  />
      </div>}


    </div>
  </>
}
