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
import { useState } from 'react';
import { ToolbarContext } from './ToolbarContext';
export function ToolbarProvider(_a) {
    var children = _a.children;
    var _b = useState([]), items = _b[0], setItems = _b[1];
    var value = {
        items: items,
        setItems: setItems
    };
    return _jsx(ToolbarContext.Provider, __assign({}, { value: value }, { children: children }));
}
