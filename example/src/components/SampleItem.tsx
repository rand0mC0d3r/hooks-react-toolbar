import { IToolbar } from '../../../src/index.types';

export function SampleItem({
  item
} : {
  item: IToolbar
}) {

  return <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', border: '1px dotted red', padding: '8px', borderRadius: '8px'}}>
    {item.id}
    {item.icon}
  </div>
}
