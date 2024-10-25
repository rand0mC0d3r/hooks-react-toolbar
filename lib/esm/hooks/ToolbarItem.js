import { useEffect } from 'react';
import { useToolbar } from './ToolbarCustomHook';
export function ToolbarItem(_a) {
    var id = _a.id, label = _a.label, icon = _a.icon;
    var updateItem = useToolbar().updateItem;
    useEffect(function () {
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
