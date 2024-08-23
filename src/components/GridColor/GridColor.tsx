import React from 'react';
import {FlatList, Text, View, ScrollView} from 'react-native';

import {Color} from '@domain';

import {CardColor} from '@components';

type GridColor = {
  title: string;
  colors: Color[];
};

export const GridColor: React.FC<GridColor> = ({title, colors}) => {
  const renderColors = ({item}: {item: Color}) => (
    <CardColor key={item.name} color={item} />
  );

  return (
    <View>
      <Text>{title}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        directionalLockEnabled={true}
        alwaysBounceVertical={false}>
        <FlatList
          numColumns={Math.ceil(colors.length / 4)}
          data={colors}
          renderItem={renderColors}
          keyExtractor={item => item.name}
          contentContainerStyle={{gap: 2}}
          columnWrapperStyle={{gap: 4}}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};
