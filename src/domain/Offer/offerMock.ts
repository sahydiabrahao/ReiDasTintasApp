import {CollorPalette, Kitchen, LivingRoom} from '@assets';

import {Offer} from './type';

export const offerMock: Offer[] = [
  {
    id: 'OFF0000',
    title: 'Elegância em cada cor,',
    subTitle: 'sofisticação para sua casa.',
    image: LivingRoom,
  },
  {
    id: 'OFF0001',
    title: 'Renove seu lar,',
    subTitle: 'com mais de 3000 cores.',
    image: CollorPalette,
  },
  {
    id: 'OFF0002',
    title: 'Transforme seu ambiente',
    subTitle: 'com o efeito cimento queimado.',
    image: Kitchen,
  },
];
