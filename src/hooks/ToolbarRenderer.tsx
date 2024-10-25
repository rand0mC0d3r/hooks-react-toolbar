import { cloneElement, Fragment } from 'react';
import { useToolbar } from './ToolbarContext';

export function ToolbarRenderer() {
  const { items, slots } = useToolbar();

  if(slots.isEmbedded) {
    window.postMessage({
      type: 'TOOLBAR_ITEMS_UPDATE',
      items
    },
    '*'
    );

    return null
  }

  return cloneElement(slots.toolbarWrapper, {
    children: <>{items.map((item: any) => (
      <Fragment key={item.id}>
        {cloneElement(slots.toolbarItem, { item })}
      </Fragment>
    ))}</>,
    style: { display: 'flex' }
  });
}
