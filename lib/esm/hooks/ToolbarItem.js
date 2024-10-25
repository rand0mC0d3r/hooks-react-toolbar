import { useEffect } from 'react';
import { useToolbar } from './ToolbarCustomHook';
export function ToolbarItem(_a) {
    var id = _a.id;
    var updateItem = useToolbar().updateItem;
    useEffect(function () {
        console.log('ToolbarItem', id);
        updateItem({ id: id }, id);
    }, [updateItem, id]);
    return null;
}
