import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Item, itemService} from '@domain';

import {Box, CardItem, Icon} from '@components';
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
      <Box
        padding="s4"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        mb="s16">
        {/* <Box alignItems="center" justifyContent="center">
          <Icon name="menu" color="bluePrimary" size={40} />
          </Box> */}
        <Box>
          <Icon name="logo" color="bluePrimary" size={80} />
        </Box>
      </Box>
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
