import React from 'react';

import {Category} from '@domain';

import {Text, TouchableOpacityBox} from '@components';

interface Props {
  category: Category;
  onSelect: (name: string) => void;
}

export function CardCategory({category, onSelect}: Props) {
  return (
    <TouchableOpacityBox
      onPress={() => onSelect(category.name)}
      padding="s16"
      backgroundColor="gray5"
      borderColor="gray4"
      borderBottomWidth={1}>
      <Text bold preset="headingMedium" color="grayBlack">
        {category.name}
      </Text>
    </TouchableOpacityBox>
  );
}
