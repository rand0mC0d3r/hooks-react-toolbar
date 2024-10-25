import { useContext } from 'react';
import { ToolbarContext } from './ToolbarContext';
export function useToolbar() {
    var context = useContext(ToolbarContext);
    if (!context) {
        throw new Error('Context must be used in Provider');
    }
    return context;
}
