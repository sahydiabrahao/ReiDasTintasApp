import {
  CiacollorCimentoQueimado38,
  CiacollorEfeitoMarmore38,
  SuvinilMassaEfeito37,
} from '@effect';

import {Item} from '../type';

export const effectMock: Item[] = [
  {
    id: 'E0000',
    name: 'Massa para Efeitos',
    brand: 'Suvinil',
    specification: 'Fosco',
    quantity: 1,
    base: 'Água',
    unit: '3,7 Kg',
    image: SuvinilMassaEfeito37,
  },
  {
    id: 'E0001',
    name: 'Cimento Queimado',
    brand: 'Ciacollor',
    specification: 'Fosco',
    quantity: 1,
    base: 'Água',
    unit: '3,8 Kg',
    image: CiacollorCimentoQueimado38,
  },
  {
    id: 'E0002',
    name: 'Efeito Mármore',
    brand: 'Ciacollor',
    specification: 'Fosco',
    quantity: 1,
    base: 'Água',
    unit: '3,8 Kg',
    image: CiacollorEfeitoMarmore38,
  },
];
