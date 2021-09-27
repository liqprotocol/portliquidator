import Big from 'big.js';
import * as BufferLayout from 'buffer-layout';
import * as Layout from './layout';


export const LastUpdateLayout: typeof BufferLayout.Structure = BufferLayout.struct(
  [Layout.uint64('slot'), BufferLayout.u8('stale')],
  'lastUpdate'
);

export interface LastUpdate {
  slot: Big;
  stale: boolean;
}