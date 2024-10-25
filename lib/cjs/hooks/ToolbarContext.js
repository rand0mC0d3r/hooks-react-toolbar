"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToolbar = exports.ToolbarContext = void 0;
var react_1 = require("react");
exports.ToolbarContext = (0, react_1.createContext)(undefined);
function useToolbar() {
    var context = (0, react_1.useContext)(exports.ToolbarContext);
    if (!context) {
        throw new Error('Context must be used in Provider');
    }
    return context;
}
exports.useToolbar = useToolbar;
