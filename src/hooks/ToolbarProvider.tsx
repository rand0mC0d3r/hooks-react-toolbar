import { useEffect, useState } from 'react';
import { ToolbarContext } from './ToolbarContext';

export function ToolbarProvider({ children } : { children: any }) {
  const [ items, setItems ] = useState<any[]>([]);

  const addItem = (item: any) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const updateItem = (id: string, item: any) => {
    setItems((prevItems) => [
      ...prevItems.filter((i) => i.id !== id),
      item,
    ]);
  }

  useEffect(() => {
    console.log('ToolbarProvider', items);
  }, [ items ]);

  const value = {
    items,
    setItems,
    addItem,
    updateItem,
  };


  return <ToolbarContext.Provider {...{ value }}>{children}</ToolbarContext.Provider>;
}
