import React from 'react';
import {Image} from 'react-native';

import {Item} from '@domain';
import {pushItem} from '@redux';
import {useToast} from '@services';
import {useDispatch} from 'react-redux';

import {Box, Text, TouchableOpacityBox} from '@components';

interface Props {
  item: Item;
}

export function CardItem({item}: Props) {
  const {showToast} = useToast();

  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-shadow
  async function addItem(item: Item) {
    showToast({
      message: 'Item adicionado',
      position: 'bottom',
      type: 'success',
    });

    dispatch(pushItem(item));
  }

  return (
    <TouchableOpacityBox
      onPress={() => addItem(item)}
      padding="s8"
      justifyContent="space-evenly"
      alignItems="center"
      borderColor="gray4"
      width={'48%'}
      borderRadius="s12"
      borderWidth={1}>
      <Box
        width={120}
        height={120}
        backgroundColor="gray5"
        style={{
          borderRadius: 12,
        }}>
        <Image
          style={{
            flex: 1,
            objectFit: 'contain',
          }}
          source={{uri: item.image}}
        />
      </Box>
      <Box alignItems="flex-start" flexGrow={1}>
        <Text bold preset="paragraphMedium">
          {item.name}
        </Text>
        <Box flexDirection="row">
          <Text preset="paragraphCaption" mr="s4">
            {item.brand},
          </Text>
          <Text preset="paragraphCaption" mr="s4">
            {item.specification},
          </Text>
          <Text preset="paragraphCaption">{item.unit}</Text>
        </Box>
      </Box>
    </TouchableOpacityBox>
  );
}
