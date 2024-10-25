import { createContext, useContext } from 'react';
import { ToolbarContextProps } from '../index.types';

export const ToolbarContext = createContext(undefined);

export function useToolbar() {
  const context = useContext(ToolbarContext);

  if (!context) {
    throw new Error('Context must be used in Provider');
  }

  return context as ToolbarContextProps;
}
