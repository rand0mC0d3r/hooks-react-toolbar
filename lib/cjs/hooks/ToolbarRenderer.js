"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolbarRenderer = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var ToolbarContext_1 = require("./ToolbarContext");
function ToolbarRenderer() {
    var _a = (0, ToolbarContext_1.useToolbar)(), items = _a.items, slots = _a.slots;
    if (slots.isEmbedded) {
        window.postMessage({
            type: 'TOOLBAR_ITEMS_UPDATE',
            items: items
        }, '*');
        return null;
    }
    return (0, react_1.cloneElement)(slots.toolbarWrapper, {
        children: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: items.map(function (item) { return ((0, jsx_runtime_1.jsx)(react_1.Fragment, { children: (0, react_1.cloneElement)(slots.toolbarItem, { item: item }) }, item.id)); }) }),
        style: { display: 'flex' }
    });
}
exports.ToolbarRenderer = ToolbarRenderer;
