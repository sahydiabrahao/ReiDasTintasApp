import {SuvinilToqueDeLuz18, SuvinilToqueDeSeda18} from '@wall';

import {Item} from '../type';

export const wallMock: Item[] = [
  {
    id: 'W0000',
    image: SuvinilToqueDeLuz18,
    name: 'Toque de Luz',
    brand: 'Suvinil',
    specification: 'Semibrilho',
    applicationArea: 'I/E',
    base: 'Água',
    unit: '18 L',
    color: 'Branco',
    quantity: 1,
  },
  {
    id: 'W0001',
    name: 'Toque de Seda',
    brand: 'Suvinil',
    specification: 'Acetinado',
    quantity: 1,
    base: 'Água',
    unit: '18 L',
    image: SuvinilToqueDeSeda18,
  },
];
