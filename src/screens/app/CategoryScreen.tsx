import React from 'react';

import {useRoute} from '@react-navigation/native';

import {Box, Text} from '@components';
import {Screen} from '@screens';

export function CategoryScreen() {
  const route = useRoute();
  const {name}: any = route.params;

  return (
    <Screen scrollable>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        mb="s12">
        <Text preset="headingSmall">{name}</Text>
      </Box>
    </Screen>
  );
}
