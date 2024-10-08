import React, {useState} from 'react';

import {Item} from '@domain';
import {filterItemsBySearchQuery} from '@redux';
import {useDispatch, useSelector} from 'react-redux';

import {Box, CardItem, Icon, Text, TextInput} from '@components';
import {Screen} from '@screens';
import {$shadowProps} from '@theme';

export function SearchScreen() {
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useDispatch();
  const searchResults = useSelector((state: any) => state.item.searchItems);

  const handleSearchInput = (text: string) => {
    setSearchInput(text);
    dispatch(filterItemsBySearchQuery(text));
  };

  const renderCardItems = searchResults.map((item: Item) => (
    <CardItem key={item.id} item={item} />
  ));

  return (
    <Screen flex={1} scrollable>
      <Box
        backgroundColor="grayWhite"
        alignItems="center"
        justifyContent="center"
        style={$shadowProps}
      />

      <Box>
        <TextInput
          value={searchInput}
          onChangeText={handleSearchInput}
          boxProps={{marginBottom: 's12'}}
          placeholder="Insira sua busca aqui..."
          RightComponent={<Icon name="search" color="gray3" />}
        />
      </Box>
      {searchResults.length === 0 ? (
        <Box mb="s12" alignItems="center" justifyContent="center">
          <Text preset="paragraphCaption" color="gray2">
            Faça uma busca para ver os resultados.
          </Text>
        </Box>
      ) : (
        <Box justifyContent="flex-start" flex={1} gap="s12">
          {renderCardItems}
        </Box>
      )}
      <Box />
    </Screen>
  );
}
