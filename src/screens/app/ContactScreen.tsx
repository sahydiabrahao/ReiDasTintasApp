import React from 'react';
import {} from 'react-native';

import {Box, CardContact, MenuTop, Text} from '@components';
import {Screen} from '@screens';

export function ContactScreen() {
  return (
    <Screen style={{paddingTop: 0, paddingBottom: 0}}>
      <MenuTop />
      <Box alignItems="center" justifyContent="center">
        <Text mb="s16" preset="headingSmall" color="gray3">
          Selecione sua loja
        </Text>
      </Box>
      <Box gap="s32">
        <CardContact
          id={1}
          city="Cuiabá - MT"
          district="Jardim Imperial"
          address="Av. das Torres, 24"
          phone="(65) 3057 9889"
        />
        <CardContact
          id={2}
          city="Cuiabá - MT"
          district="Dom Aquino"
          address="Av. Carmindo de Campos, 2455"
          phone="(65) 3023 9889"
        />
        <CardContact
          id={3}
          city="Tangará da Serra - MT"
          district="Jardim Tanaka"
          address="Av. Ismael José do Nascimento, 395 N"
          phone="(65) 3016 1298"
        />
      </Box>
    </Screen>
  );
}
