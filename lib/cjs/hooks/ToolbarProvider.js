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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolbarProvider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var ToolbarContext_1 = require("./ToolbarContext");
function ToolbarProvider(_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)([]), items = _b[0], setItems = _b[1];
    var value = {
        items: items,
        setItems: setItems
    };
    return (0, jsx_runtime_1.jsx)(ToolbarContext_1.ToolbarContext.Provider, __assign({}, { value: value }, { children: children }));
}
exports.ToolbarProvider = ToolbarProvider;
