var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { cloneElement } from 'react';
import { useToolbar } from './ToolbarCustomHook';
export function ToolbarRenderer() {
    var _a = useToolbar(), items = _a.items, slots = _a.slots;
    return _jsx("div", __assign({ id: 'toolbar' }, { children: items.map(function (item) { return (_jsx("div", { children: cloneElement(slots.toolbarItem, { item: item }) }, item.id)); }) }));
}
