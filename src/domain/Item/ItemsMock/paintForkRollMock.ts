import {AtlasGarfoBucha, AtlasGarfoDuplo, AtlasGarfoGaiola} from '@paintFork';

import {Item} from '../type';

export const paintForkRollMock: Item[] = [
  {
    id: 'PFR0000',
    name: 'Garfo com Bucha',
    brand: 'Atlas',
    specification: '-',
    quantity: 1,
    base: '-',
    unit: 'Unidade',
    image: AtlasGarfoBucha,
  },
  {
    id: 'PFR0001',
    name: 'Garfo Gaiola',
    brand: 'Atlas',
    specification: '-',
    quantity: 1,
    base: '-',
    unit: 'Unidade',
    image: AtlasGarfoGaiola,
  },
  {
    id: 'PFR0002',
    name: 'Garfo Duplo',
    brand: 'Atlas',
    specification: '-',
    quantity: 1,
    base: '-',
    unit: 'Unidade',
    image: AtlasGarfoDuplo,
  },
];
