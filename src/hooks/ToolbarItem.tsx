import { useEffect } from 'react';
import { useToolbar } from './ToolbarContext';

export function ToolbarItem({
  id,
  label,
  icon
} : {
  id: any,
  label: any,
  icon: any,
}) {
  const { updateItem } = useToolbar();

  useEffect(() => {
    console.log('ToolbarItem', id);
    updateItem(id, {
      id,
      label,
      icon,
      disabled: false,
      selected: false,
    });
  }, [ id ]);

  return null
}
