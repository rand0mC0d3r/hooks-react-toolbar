import { useToolbar } from './ToolbarCustomHook';

export function ToolbarRenderer() {
  const { items } = useToolbar();

  return <div id='toolbar'>
    toolbar {items.length}
    {items.map((item: any) => (
      <div key={item.id}>{item.id} {item.icon}</div>
    ))}
  </div>
}
