import React from 'react';
import {} from 'react-native';

import {Box, CardContact, MenuTop, Text} from '@components';
import {Screen} from '@screens';

export function ContactScreen() {
  return (
    <Screen>
      <MenuTop />
      <Box alignItems="center" justifyContent="center">
        <Text mb="s16" preset="headingSmall" color="gray3">
          Selecione sua loja
        </Text>
      </Box>
      <Box gap="s32">
        <CardContact
          city="Cuiabá - MT"
          district="Jardim Imperial"
          address="Av. das Torres, 24"
          phone="(65) 3057 9889"
        />
        <CardContact
          city="Cuiabá - MT"
          district="Dom Aquino"
          address="Av. Carmindo de Campos, 2455"
          phone="(65) 3023 9889"
        />
        <CardContact
          city="Tangará da Serra - MT"
          district="Jardim Tanaka"
          address="Av. Ismael José do Nascimento, 395 N"
          phone="(65) 3016 1298"
        />
      </Box>
    </Screen>
  );
}
