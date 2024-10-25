import { createContext, useContext } from 'react';
export var ToolbarContext = createContext(undefined);
export function useToolbar() {
    var context = useContext(ToolbarContext);
    if (!context) {
        throw new Error('Context must be used in Provider');
    }
    return context;
}
