import { useState } from 'react';
import { ToolbarContext } from './ToolbarContext';

export function ToolbarProvider({ children } : { children: any }) {
  const [ items, setItems ] = useState<any[]>([]);

  const value = {
    items,
    setItems
  };
  

  return <ToolbarContext.Provider {...{ value }}>{children}</ToolbarContext.Provider>;
}
