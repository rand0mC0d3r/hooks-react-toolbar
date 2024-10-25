import { IToolbar } from '../../../src/index.types';

export function OtherSampleItem({
  item
} : {
  item: IToolbar
}) {

  return <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', backgroundColor: 'blue', borderRadius: '8px'}}>
    {item.id}
    {item.icon}
  </div>
}
