import React, {useEffect, useState} from 'react';

import {Item, itemService} from '@domain';

import {Box, CardItem, Icon, TextInput} from '@components';
import {Screen} from '@screens';

export function SearchScreen() {
  const [text, setText] = useState('');
  const [items, setItems] = useState<Item[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  function onChangeText(newText: string, setText: any) {
    setText(newText);
    itemService.searchItem(text).then(List => setItems(List));
  }

  useEffect(() => {
    itemService.searchItem(text).then(List => setItems(List));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderCardItems = items.map(item => <CardItem item={item} />);

  return (
    <Screen flex={1} scrollable>
      <Box
        mb="s12"
        backgroundColor="grayWhite"
        alignItems="center"
        justifyContent="center"
      />
      <Box>
        <TextInput
          defaultValue={text}
          onChangeText={newText => onChangeText(newText, setText)}
          boxProps={{marginBottom: 's12'}}
          RightComponent={<Icon name="search" color="gray3" />}
        />
      </Box>
      <Box
        flexDirection="row"
        justifyContent="flex-start"
        flex={1}
        flexWrap="wrap"
        gap="s12">
        {renderCardItems}
      </Box>
      <Box />
    </Screen>
  );
}
