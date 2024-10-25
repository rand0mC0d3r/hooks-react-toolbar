"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolbarItem = void 0;
var react_1 = require("react");
var ToolbarCustomHook_1 = require("./ToolbarCustomHook");
function ToolbarItem(_a) {
    var id = _a.id, label = _a.label, icon = _a.icon;
    var updateItem = (0, ToolbarCustomHook_1.useToolbar)().updateItem;
    (0, react_1.useEffect)(function () {
        console.log('ToolbarItem', id);
        updateItem(id, {
            id: id,
            label: label,
            icon: icon,
            disabled: false,
            selected: false,
        });
    }, [id]);
    return null;
}
exports.ToolbarItem = ToolbarItem;