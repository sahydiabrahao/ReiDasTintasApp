import React from 'react';
import {FlatList, ScrollView} from 'react-native';

import {Color} from '@domain';
import {RootState} from '@redux';
import {useSelector} from 'react-redux';

import {CardColor, Text} from '@components';
import {Screen} from '@screens';

export function ColorScreen() {
  const getColors = useSelector((state: RootState) => state.color.colors);

  const renderColors = ({item}: {item: Color}) => (
    <CardColor key={item.name} color={item} />
  );

  return (
    <Screen scrollable>
      <Text>Azuis</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        directionalLockEnabled={true}
        alwaysBounceVertical={false}>
        <FlatList
          numColumns={Math.ceil(getColors.length / 4)}
          data={getColors}
          renderItem={renderColors}
          keyExtractor={item => item.name}
          contentContainerStyle={{gap: 2}}
          columnWrapperStyle={{
            gap: 4,
          }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </Screen>
  );
}
