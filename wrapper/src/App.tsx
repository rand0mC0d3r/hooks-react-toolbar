import './App.css';


export default function AppWrapper() {
  const currentPath = window.location.pathname;

  return <>
      <div>
        Current Path: {currentPath}
      </div>
    {/* <ToolbarItem id="logo" icon={<FontAwesomeIcon icon={faEnvelope} />} /> */}
    {/* <ToolbarItem id="anotherlogo" icon={<FontAwesomeIcon icon={faEnvelope} />} /> */}

    {/* <div style={{ display: 'flex', flexDirection: 'column', gap: '16px'}}>

      <ToolbarRenderer />

      <div>
        Current Path: {currentPath}
      </div>

      {currentPath === '/' && <div style={{ display: 'flex', gap: '8px' }}>
        <iframe src="http://localhost:5173/directEmbed" title="test" style={iframeStyle} />
        <iframe src="http://localhost:5173/nestedEmbed" title="test" style={iframeStyle}  />
      </div>} */}


    {/* </div> */}
  </>
}
