import React from 'react';

import {Color} from '@domain';
import {openModal, setColor} from '@redux';
import {useDispatch} from 'react-redux';

import {Box, Text, TouchableOpacityBox} from '@components';

interface Props {
  color: Color;
}

export function CardColor({color}: Props) {
  const dispatch = useDispatch();

  const handlePress = (color: Color) => {
    dispatch(openModal());
    dispatch(setColor(color));
  };

  return (
    <TouchableOpacityBox
      onPress={() => handlePress(color)}
      flexDirection="row"
      gap="s8">
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
          backgroundColor: color.hexValue,
        }}>
        <Text
          preset="paragraphCaption"
          style={{
            color: color.contrastColor,
          }}>
          {color.name}
        </Text>
      </Box>
    </TouchableOpacityBox>
  );
}
