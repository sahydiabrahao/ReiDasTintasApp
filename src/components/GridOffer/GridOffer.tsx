import React from 'react';
import {Dimensions, FlatList} from 'react-native';

import {Offer} from '@domain';

import {CardOffer} from '@components';

type Props = {
  offers: Offer[];
};

export const GridOffer: React.FC<Props> = ({offers}: Props) => {
  const renderOffer = ({item}: {item: Offer}) => (
    <CardOffer key={item.id} offer={item} />
  );

  const {width} = Dimensions.get('window');
  return (
    <FlatList
      data={offers}
      keyExtractor={item => item.id}
      horizontal
      pagingEnabled
      snapToAlignment="center"
      snapToInterval={width}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      renderItem={renderOffer}
    />
  );
};
