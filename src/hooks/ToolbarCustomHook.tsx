/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from 'react';
import { ToolbarContext } from './ToolbarContext';

export interface ToolbarContextProps {
  items: any
  setItems: any
}

export interface IToolbar {
  id: string
}

export function useToolbar() {
  const context = useContext(ToolbarContext);

  if (!context) {
    throw new Error('Context must be used in Provider');
  }

  return context as ToolbarContextProps;
}
