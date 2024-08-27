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

  const colorGroups = [
    {title: 'Amarelos', colors: yellowsMock},
    {title: 'Amarelos Esverdeados', colors: yellowGreensMock},
    {title: 'Violetas', colors: violetsMock},
    {title: 'Vermelhos e Rosas', colors: redAndPinksMock},
    {title: 'Laranjas', colors: orangesMock},
    {title: 'Verdes', colors: greensMock},
    {title: 'Cinzas', colors: graysMock},
    {title: 'Azuis', colors: bluesMock},
    {title: 'Azuis Esverdeados', colors: blueGreensMock},
    {title: 'Beiges e Marrons', colors: beigesAnBrownsMock},
  ];

  return (
    <Screen scrollable>
      {favoriteColors.length > 0 && (
        <GridColor title="Favoritas" colors={favoriteColors} />
      )}
      {colorGroups.map(group => (
        <GridColor
          key={group.title}
          title={group.title}
          colors={group.colors}
        />
      ))}
      <ModalColor color={selectedColor} />
    </Screen>
  );
}
