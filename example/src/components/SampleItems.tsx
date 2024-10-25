
export function SampleItems({children}: {children: JSX.Element[]}) {

  return <div style={{ display: 'flex', gap: '8px', border: '1px dotted blue', padding: '8px'}}>
    {children}
  </div>
}
