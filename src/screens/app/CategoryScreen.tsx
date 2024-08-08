import React, {useEffect, useState} from 'react';

import {Item, itemService} from '@domain';
import {useRoute} from '@react-navigation/native';

import {Box, CardItem, Text} from '@components';
import {Screen} from '@screens';

export function CategoryScreen() {
  const route = useRoute();
  const {name}: any = route.params;
  const [itemList, setItemList] = useState<Item[]>([]);

  useEffect(() => {
    itemService.getList().then(List => setItemList(List));
  }, []);

  const renderCardItems = itemList.map(item => <CardItem item={item} />);

  return (
    <Screen scrollable>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        mb="s12">
        <Text preset="headingSmall">{name}</Text>
      </Box>
      <Box flexGrow={1}>{renderCardItems}</Box>
    </Screen>
  );
}
