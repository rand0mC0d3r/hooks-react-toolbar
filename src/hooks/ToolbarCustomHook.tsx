/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from 'react';
import { ToolbarContextProps } from '../index.types';
import { ToolbarContext } from './ToolbarContext';

export function useToolbar() {
  const context = useContext(ToolbarContext);

  if (!context) {
    throw new Error('Context must be used in Provider');
  }

  return context as ToolbarContextProps;
}
