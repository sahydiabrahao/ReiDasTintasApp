import {
  SuvinilEfeitoBrilho25,
  SuvinilEfeitoGranulado25,
  SuvinilEfeitoRustico25,
} from '@texture';

import {Item} from '../type';

export const textureMock: Item[] = [
  {
    id: 'TE0000',
    name: 'Efeito Brilho',
    brand: 'Ciacollor',
    specification: 'Fosco',
    quantity: 1,
    base: 'Água',
    unit: '25 Kg',
    image: SuvinilEfeitoBrilho25,
  },
  {
    id: 'TE0001',
    name: 'Efeito Granulado',
    brand: 'Suvinil',
    specification: 'Fosco',
    quantity: 1,
    base: 'Água',
    unit: '25 Kg',
    image: SuvinilEfeitoGranulado25,
  },
  {
    id: 'TE0002',
    name: 'Efeito Rústico',
    brand: 'Suvinil',
    specification: 'Fosco',
    quantity: 1,
    base: 'Água',
    unit: '25 Kg',
    image: SuvinilEfeitoRustico25,
  },
];
