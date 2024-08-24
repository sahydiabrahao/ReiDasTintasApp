import React from 'react';

import {
  beigesAnBrownsMock,
  blueGreensMock,
  bluesMock,
  graysMock,
  greensMock,
  orangesMock,
  redAndPinksMock,
  violetsMock,
  yellowGreensMock,
  yellowsMock,
} from '@domain';

import {GridColor} from '@components';
import {Screen} from '@screens';

export function ColorScreen() {
  return (
    <Screen scrollable>
      <GridColor title="Azuis" colors={yellowsMock} />
      <GridColor title="Azuis" colors={yellowGreensMock} />
      <GridColor title="Azuis" colors={violetsMock} />
      <GridColor title="Azuis" colors={redAndPinksMock} />
      <GridColor title="Azuis" colors={orangesMock} />
      <GridColor title="Azuis" colors={greensMock} />
      <GridColor title="Azuis" colors={graysMock} />
      <GridColor title="Azuis" colors={bluesMock} />
      <GridColor title="Azuis" colors={blueGreensMock} />
      <GridColor title="Azuis" colors={beigesAnBrownsMock} />
    </Screen>
  );
}
