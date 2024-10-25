import { IToolbar } from '../../../src/index.types';

export function SampleItem({
  item
} : {
  item: IToolbar
}) {

  return <div style={{ display: 'flex', flexDirection: 'column', gap: '8px'}}>
    {item.id}
    {item.icon}
  </div>
}
