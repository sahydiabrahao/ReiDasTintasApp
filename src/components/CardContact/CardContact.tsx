import React, {useState} from 'react';

import {Box, Text, TouchableOpacityBox} from '@components';
import {$shadowProps} from '@theme';

interface Props {
  id: number;
  city: string;
  address: string;
  district: string;
  phone: string;
}

export function CardContact({id, city, address, district, phone}: Props) {
  const [pickStore, setPickStore] = useState<number>(1);

  function store(storeID: number) {
    setPickStore(storeID);
    return console.log(pickStore);
  }

  return (
    <TouchableOpacityBox
      onPress={() => store(id)}
      style={$shadowProps}
      padding="s8"
      flexDirection="row"
      justifyContent="space-evenly"
      alignItems="center"
      borderRadius="s12"
      backgroundColor={pickStore === id ? 'bluePrimary' : 'gray5'}>
      <Box justifyContent="center" alignItems="center">
        <Text mb="s8" bold preset="headingMedium">
          {city}
        </Text>
        <Text mb="s8" preset="headingSmall">
          {district}
        </Text>
        <Text mb="s8" preset="headingSmall">
          {address}
        </Text>
        <Text mb="s8" bold preset="headingSmall">
          {phone}
        </Text>
      </Box>
    </TouchableOpacityBox>
  );
}
