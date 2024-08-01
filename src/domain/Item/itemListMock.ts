import {
  SuvinilClassica,
  SuvinilFoscoCompleto,
  SuvinilRendeCobreMuito,
  SuvinilToqueLuz,
  SuvinilToqueSeda,
} from '@assets';

import {Item} from './type';

export const itemListMock: Item[] = [
  {
    id: '0',
    category: 'Parede',
    name: 'Toque de Luz',
    brand: 'Suvinil',
    specification: 'Semibrilho',
    quantity: 1,
    unit: '18 Litros',
    image: SuvinilToqueLuz,
  },
  {
    id: '1',
    category: 'Parede',
    name: 'Toque de Seda',
    brand: 'Suvinil',
    specification: 'Acetinado',
    quantity: 1,
    unit: '18 Litros',
    image: SuvinilToqueSeda,
  },
  {
    id: '2',
    category: 'Parede',
    name: 'Fosco Completo',
    brand: 'Suvinil',
    specification: 'Fosco',
    quantity: 2,
    unit: '18 Litros',
    image: SuvinilFoscoCompleto,
  },
  {
    id: '3',
    category: 'Parede',
    name: 'Classica',
    brand: 'Suvinil',
    specification: 'Fosco',
    quantity: 3,
    unit: '18 Litros',
    image: SuvinilClassica,
  },
  {
    id: '4',
    category: 'Parede',
    name: 'Rende Cobre Muito',
    brand: 'Suvinil',
    specification: 'Fosco',
    quantity: 4,
    unit: '18 Litros',
    image: SuvinilRendeCobreMuito,
  },
];
