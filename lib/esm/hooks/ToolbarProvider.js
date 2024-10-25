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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { ToolbarContext } from './ToolbarContext';
export function ToolbarProvider(_a) {
    var children = _a.children;
    var _b = useState([]), items = _b[0], setItems = _b[1];
    var addItem = function (item) {
        setItems(function (prevItems) { return __spreadArray(__spreadArray([], prevItems, true), [item], false); });
    };
    var updateItem = function (id, item) {
        setItems(function (prevItems) {
            var index = prevItems.findIndex(function (prevItem) { return prevItem.id === id; });
            var newItems = __spreadArray([], prevItems, true);
            newItems[index] = item;
            return newItems;
        });
    };
    var value = {
        items: items,
        setItems: setItems,
        addItem: addItem,
        updateItem: updateItem,
    };
    return _jsx(ToolbarContext.Provider, __assign({}, { value: value }, { children: children }));
}
