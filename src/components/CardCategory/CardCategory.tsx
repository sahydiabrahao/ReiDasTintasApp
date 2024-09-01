import React from 'react';

import {Category, CategoryName} from '@domain';
import {
  filterItemsByCategory,
  chooseCategory,
  updateCategoryTitle,
} from '@redux';
import {useDispatch} from 'react-redux';

import {Box, Text, TouchableOpacityBox} from '@components';
import {$shadowProps} from '@theme';

interface Props {
  category: Category;
}

export function CardCategory({category}: Props) {
  const dispatch = useDispatch();

  function handleSelectCategoryName(categoryName: CategoryName) {
    dispatch(chooseCategory(categoryName));
    dispatch(updateCategoryTitle(categoryName));
    dispatch(filterItemsByCategory(categoryName));
  }

  return (
    <TouchableOpacityBox
      onPress={() => handleSelectCategoryName(category.name)}
      flexDirection="row"
      mb="s8"
      borderRadius="s12"
      justifyContent="flex-start"
      alignItems="center"
      style={$shadowProps}>
      <Box
        flexGrow={1}
        alignItems="flex-start"
        justifyContent="flex-start"
        paddingVertical="s4"
        paddingHorizontal="s8"
        backgroundColor="gray5"
        borderRadius="s4">
        <Text bold preset="paragraphMedium" color="grayBlack" mb="s4">
          {category.title}
        </Text>
        <Text preset="paragraphCaption" color="grayBlack">
          {category.description}
        </Text>
      </Box>
    </TouchableOpacityBox>
  );
}
