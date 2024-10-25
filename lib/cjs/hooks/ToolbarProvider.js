"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolbarProvider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var ToolbarContext_1 = require("./ToolbarContext");
function ToolbarProvider(_a) {
    var children = _a.children, slots = _a.slots;
    var _b = (0, react_1.useState)([]), items = _b[0], setItems = _b[1];
    var addItem = function (item) {
        setItems(function (prevItems) { return __spreadArray(__spreadArray([], prevItems, true), [item], false); });
    };
    var updateItem = function (id, item) {
        setItems(function (prevItems) { return __spreadArray(__spreadArray([], prevItems.filter(function (i) { return i.id !== id; }), true), [
            item,
        ], false); });
    };
    (0, react_1.useEffect)(function () {
        console.log('ToolbarProvider', items);
    }, [items]);
    var value = {
        items: items,
        setItems: setItems,
        addItem: addItem,
        updateItem: updateItem,
        slots: slots,
    };
    return (0, jsx_runtime_1.jsx)(ToolbarContext_1.ToolbarContext.Provider, __assign({}, { value: value }, { children: children }));
}
exports.ToolbarProvider = ToolbarProvider;
