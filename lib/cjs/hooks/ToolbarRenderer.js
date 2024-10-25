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
exports.ToolbarRenderer = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var ToolbarCustomHook_1 = require("./ToolbarCustomHook");
function ToolbarRenderer() {
    var _a = (0, ToolbarCustomHook_1.useToolbar)(), items = _a.items, slots = _a.slots;
    return (0, jsx_runtime_1.jsx)("div", __assign({ id: 'toolbar' }, { children: items.map(function (item) { return ((0, jsx_runtime_1.jsx)("div", { children: (0, react_1.cloneElement)(slots.toolbarItem, { item: item }) }, item.id)); }) }));
}
exports.ToolbarRenderer = ToolbarRenderer;
