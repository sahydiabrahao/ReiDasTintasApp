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
import {RootState} from '@redux';
import {useSelector} from 'react-redux';

import {GridColor, ModalColor} from '@components';
import {Screen} from '@screens';

export function ColorScreen() {
  const selectedColor = useSelector((state: RootState) => state.color.color);
  const favoriteColors = useSelector(
    (state: RootState) => state.color.favoriteColors,
  );

  return (
    <Screen scrollable>
      <GridColor title="Favoritas" colors={favoriteColors} />
      <GridColor title="Amarelos" colors={yellowsMock} />
      <GridColor title="Amarelos Esverdeados" colors={yellowGreensMock} />
      <GridColor title="Violetas" colors={violetsMock} />
      <GridColor title="Vermelhos e Rosas" colors={redAndPinksMock} />
      <GridColor title="Laranjas" colors={orangesMock} />
      <GridColor title="Verdes" colors={greensMock} />
      <GridColor title="Cinzas" colors={graysMock} />
      <GridColor title="Azuis" colors={bluesMock} />
      <GridColor title="Azuis Esverdeados" colors={blueGreensMock} />
      <GridColor title="Beiges e Marrons" colors={beigesAnBrownsMock} />
      <ModalColor color={selectedColor} />
    </Screen>
  );
}
