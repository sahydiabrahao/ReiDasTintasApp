import {SuvinilProtecaoTotal18, SuvinilProtecaoTotal36} from '@protection';

import {Item} from '../type';

export const protectionMock: Item[] = [
  {
    id: 'P0000',
    name: 'Proteção Total',
    brand: 'Suvinil',
    specification: 'Fosco',
    quantity: 1,
    base: 'Água',
    unit: '18 L',
    image: SuvinilProtecaoTotal18,
  },
  {
    id: 'P0001',
    name: 'Proteção Total',
    brand: 'Suvinil',
    specification: 'Fosco',
    quantity: 1,
    base: 'Água',
    unit: '3,6 L',
    image: SuvinilProtecaoTotal36,
  },
];
