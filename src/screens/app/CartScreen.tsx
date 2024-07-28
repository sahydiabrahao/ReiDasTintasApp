import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Item, itemService} from '@domain';

import {Button, CardCart, MenuTop} from '@components';
import {Screen} from '@screens';

export function CartScreen() {
  const [itemList, setitemList] = useState<Item[]>([]);

  useEffect(() => {
    itemService.getList().then(List => setitemList(List));
  }, []);

  function renderItem({item}: ListRenderItemInfo<Item>) {
    return <CardCart item={item} />;
  }

  return (
    <Screen>
      <MenuTop />
      <Button mb="s16" title="Solicitar orçamento gratuíto" />

      <FlatList
        data={itemList}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}
