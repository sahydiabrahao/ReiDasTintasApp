import {SuvinilToqueDeLuz18, SuvinilToqueDeSeda18} from '@wall';

import {Item} from '../type';

export const wallMock: Item[] = [
  {
    id: 'W0000',
    category: 'Parede',
    name: 'Toque de Luz',
    brand: 'Suvinil',
    specification: 'Semibrilho',
    quantity: 1,
    base: 'Água',
    unit: '18 L',
    image: SuvinilToqueDeLuz18,
  },
  {
    id: 'W0001',
    category: 'Parede',
    name: 'Toque de Seda',
    brand: 'Suvinil',
    specification: 'Acetinado',
    quantity: 1,
    base: 'Água',
    unit: '18 L',
    image: SuvinilToqueDeSeda18,
  },
];
