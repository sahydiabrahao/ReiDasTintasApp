import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Item, itemService} from '@domain';

import {CardItem, MenuTop} from '@components';
import {Screen} from '@screens';

export function HomeScreen() {
  const [itemList, setitemList] = useState<Item[]>([]);

  useEffect(() => {
    itemService.getList().then(List => setitemList(List));
  }, []);

  function renderItem({item}: ListRenderItemInfo<Item>) {
    return <CardItem item={item} />;
  }

  return (
    <Screen>
      <MenuTop />
      {/* <TextInput
        boxProps={{marginBottom: 's20'}}
        RightComponent={<Icon name="search" color="gray3" />}
        /> */}
      <FlatList
        data={itemList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}
