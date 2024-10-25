import { cloneElement, Fragment } from 'react';
import { useToolbar } from './ToolbarCustomHook';

export function ToolbarRenderer() {
  const { items, slots } = useToolbar();

  return <div id='toolbar' style={{ display: 'flex' }}>
    {items.map((item: any) => <Fragment key={item.id}>
      {cloneElement(slots.toolbarItem, { item })}
    </Fragment>)}
  </div>
}
