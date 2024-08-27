import React from 'react';

import {Category, CategoryName} from '@domain';
import {
  filterItemsByCategory,
  selectCategory,
  setCategoryTitleByName,
} from '@redux';
import {useDispatch} from 'react-redux';

import {Box, Text, TouchableOpacityBox} from '@components';

interface Props {
  category: Category;
}

export function CardCategory({category}: Props) {
  const dispatch = useDispatch();

  function onSelect(categoryName: CategoryName) {
    dispatch(selectCategory(categoryName));
    dispatch(setCategoryTitleByName(categoryName));
    dispatch(filterItemsByCategory(categoryName));
  }

  return (
    <TouchableOpacityBox
      onPress={() => onSelect(category.name)}
      flexDirection="row"
      mb="s8"
      borderRadius="s12"
      justifyContent="flex-start"
      alignItems="center">
      <Box
        alignItems="center"
        justifyContent="center"
        backgroundColor="bluePrimary"
        borderTopLeftRadius="s8"
        padding="s10"
        height={64}
      />
      <Box
        height={64}
        flexGrow={1}
        alignItems="center"
        justifyContent="center"
        borderWidth={1}
        borderColor="gray4">
        <Text preset="headingSmall" color="grayBlack">
          {category.title}
        </Text>
      </Box>
      <Box
        alignItems="center"
        justifyContent="center"
        backgroundColor="bluePrimary"
        borderBottomRightRadius="s8"
        padding="s10"
        height={64}
      />
    </TouchableOpacityBox>
  );
}
