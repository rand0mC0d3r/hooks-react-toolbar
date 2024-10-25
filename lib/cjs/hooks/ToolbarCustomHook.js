"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToolbar = void 0;
var react_1 = require("react");
var ToolbarContext_1 = require("./ToolbarContext");
function useToolbar() {
    var context = (0, react_1.useContext)(ToolbarContext_1.ToolbarContext);
    if (!context) {
        throw new Error('Context must be used in Provider');
    }
    return context;
}
exports.useToolbar = useToolbar;
