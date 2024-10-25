import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { cloneElement, Fragment } from 'react';
import { useToolbar } from './ToolbarContext';
export function ToolbarRenderer() {
    var _a = useToolbar(), items = _a.items, slots = _a.slots;
    if (slots.isEmbedded) {
        window.postMessage({
            type: 'TOOLBAR_ITEMS_UPDATE',
            items: items
        }, '*');
        return null;
    }
    return cloneElement(slots.toolbarWrapper, {
        children: _jsx(_Fragment, { children: items.map(function (item) { return (_jsx(Fragment, { children: cloneElement(slots.toolbarItem, { item: item }) }, item.id)); }) }),
        style: { display: 'flex' }
    });
}
