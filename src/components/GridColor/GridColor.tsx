import React from 'react';
import {FlatList, ScrollView} from 'react-native';

import {Color} from '@domain';

import {Box, Text, CardColor} from '@components';

type GridColor = {
  title: string;
  colors: Color[];
};

export const GridColor: React.FC<GridColor> = ({title, colors}) => {
  const renderColors = ({item}: {item: Color}) => (
    <CardColor key={item.name} color={item} />
  );

  return (
    <Box mb="s12">
      <Text preset="paragraphCaption" color="grayBlack">
        {title}
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        directionalLockEnabled={true}
        alwaysBounceVertical={false}>
        <FlatList
          initialNumToRender={6}
          numColumns={4}
          data={colors}
          renderItem={renderColors}
          keyExtractor={item => item.name}
          contentContainerStyle={{gap: 12}}
          columnWrapperStyle={{gap: 8}}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </Box>
  );
};
