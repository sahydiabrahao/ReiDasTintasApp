import {
  AtlasEspatulaAco10,
  AtlasEspatulaAco12,
  AtlasEspatulaAco6,
  AtlasEspatulaAco8,
} from '@spatula';

import {Item} from '../type';

export const spatulaMock: Item[] = [
  {
    id: 'SPA0000',
    name: 'Espátula de Aço',
    brand: 'Atlas',
    specification: '6cm',
    quantity: 1,
    base: '-',
    unit: 'Un',
    image: AtlasEspatulaAco6,
  },
  {
    id: 'SPA0001',
    name: 'Espátula de Aço',
    brand: 'Atlas',
    specification: '8cm',
    quantity: 1,
    base: '-',
    unit: 'Un',
    image: AtlasEspatulaAco8,
  },
  {
    id: 'T0002',
    name: 'Espátula de Aço',
    brand: 'Atlas',
    specification: '10 cm',
    quantity: 1,
    base: '-',
    unit: 'Un',
    image: AtlasEspatulaAco10,
  },
  {
    id: 'T0003',
    name: 'Espátula de Aço',
    brand: 'Atlas',
    specification: '12cm',
    quantity: 1,
    base: '-',
    unit: 'Un',
    image: AtlasEspatulaAco12,
  },
];
