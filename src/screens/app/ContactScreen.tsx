import React from 'react';
import {} from 'react-native';

import {CardContact} from '@components';
import {Screen} from '@screens';

export function ContactScreen() {
  return (
    <Screen scrollable>
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
        phone="(65) 3057 9889"
      />
      <CardContact
        city="Tangará da Serra - MT"
        district="Jardim Tanaka"
        address="Av. Ismael José do Nascimento, 395 N"
        phone="(65) 3057 9889"
      />
    </Screen>
  );
}
