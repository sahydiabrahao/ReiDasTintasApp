import React from 'react';

import {MenuTop, Text} from '@components';
import {Screen} from '@screens';

export function CartScreen() {
  return (
    <Screen scrollable>
      <MenuTop />
      <Text>CartScreen</Text>
    </Screen>
  );
}
