import React from 'react';

import {Box, Text} from '@components';
import {$shadowProps} from '@theme';

interface Props {
  city: string;
  address: string;
  district: string;
  phone: string;
}

export function CardContact({city, address, district, phone}: Props) {
  return (
    <Box
      style={$shadowProps}
      padding="s8"
      mb="s32"
      flexDirection="row"
      justifyContent="space-evenly"
      alignItems="center"
      backgroundColor="gray5"
      borderRadius="s12">
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
    </Box>
  );
}
