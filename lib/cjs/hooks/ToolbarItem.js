"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolbarItem = void 0;
var react_1 = require("react");
var ToolbarCustomHook_1 = require("./ToolbarCustomHook");
function ToolbarItem(_a) {
    var id = _a.id;
    var updateItem = (0, ToolbarCustomHook_1.useToolbar)().updateItem;
    (0, react_1.useEffect)(function () {
        console.log('ToolbarItem', id);
        updateItem({ id: id }, id);
    }, [updateItem, id]);
    return null;
}
exports.ToolbarItem = ToolbarItem;
