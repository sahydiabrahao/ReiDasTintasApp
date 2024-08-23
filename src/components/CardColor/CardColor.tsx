import React from 'react';

import {Color} from '@domain';

import {Box, Text, TouchableOpacityBox} from '@components';

interface Props {
  color: Color;
}

export function CardColor({color}: Props) {
  return (
    <TouchableOpacityBox flexDirection="row" gap="s8">
      <Box
        mb="s12"
        width={150}
        height={64}
        padding="s4"
        alignItems="flex-start"
        justifyContent="flex-end"
        style={{
          borderTopLeftRadius: 8,
          borderBottomRightRadius: 8,
          backgroundColor: color.color,
        }}>
        <Text
          preset="paragraphCaption"
          style={{
            color: color.textColor,
          }}>
          {color.name}
        </Text>
      </Box>
    </TouchableOpacityBox>
  );
}
