import { useEffect, useState } from 'react';
import { IToolbar } from '../index.types';
import { ToolbarContext } from './ToolbarContext';

export function ToolbarProvider({
  children,
  slots
} : {
  children: any,
  slots: { }
}) {
  const [ items, setItems ] = useState<IToolbar[]>([]);

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
    slots,
  };


  return <ToolbarContext.Provider {...{ value }}>{children}</ToolbarContext.Provider>;
}
