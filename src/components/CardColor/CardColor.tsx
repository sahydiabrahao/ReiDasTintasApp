import React from 'react';

import {Color} from '@domain';
import {showModalColor, updateColor} from '@redux';
import {useDispatch} from 'react-redux';

import {Box, Text, TouchableOpacityBox} from '@components';

interface Props {
  color: Color;
}

export function CardColor({color}: Props) {
  const dispatch = useDispatch();

  const handleShowModalColor = (selectedColor: Color) => {
    dispatch(showModalColor());
    dispatch(updateColor(selectedColor));
  };

  return (
    <TouchableOpacityBox
      onPress={() => handleShowModalColor(color)}
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
