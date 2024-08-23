import React from 'react';

import {RootState} from '@redux';
import {useSelector} from 'react-redux';

import {GridColor} from '@components';
import {Screen} from '@screens';

export function ColorScreen() {
  const allColors = useSelector((state: RootState) => state.color.colors);

  const blueColors = allColors;

  return (
    <Screen scrollable>
      <GridColor title="Azuis" colors={blueColors} />
    </Screen>
  );
}
