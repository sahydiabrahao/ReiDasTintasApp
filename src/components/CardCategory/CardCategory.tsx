import React from 'react';

import {Category} from '@domain';
import {filterItemsByCategory, selectCategory} from '@redux';
import {useDispatch} from 'react-redux';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';

interface Props {
  category: Category;
}

export function CardCategory({category}: Props) {
  const dispatch = useDispatch();

  function onSelect(categoryName: string) {
    dispatch(selectCategory(categoryName));
    dispatch(filterItemsByCategory(categoryName));
  }

  return (
    <TouchableOpacityBox
      onPress={() => onSelect(category.name)}
      mb="s12"
      width={'31%'}
      borderRadius="s12"
      justifyContent="flex-start"
      alignItems="center">
      <Box
        alignItems="center"
        justifyContent="center"
        backgroundColor="gray5"
        borderRadius="s100"
        width={64}
        height={64}>
        <Icon name={category.icon} color="grayBlack" size={32} />
      </Box>
      <Box>
        <Text preset="paragraphMedium" color="grayBlack">
          {category.name}
        </Text>
      </Box>
    </TouchableOpacityBox>
  );
}
