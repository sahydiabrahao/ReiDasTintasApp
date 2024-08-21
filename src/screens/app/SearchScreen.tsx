import React, {useState} from 'react';

import {Item} from '@domain';
import {filterItemsBySearch} from '@redux';
import {useDispatch, useSelector} from 'react-redux';

import {Box, CardItem, Icon, Text, TextInput} from '@components';
import {Screen} from '@screens';

export function SearchScreen() {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const searchItems = useSelector((state: any) => state.item.searchItems); // Ajuste o tipo conforme necessário

  const handleSearchChange = (text: string) => {
    setSearchText(text);
    dispatch(filterItemsBySearch(text));
  };
  const renderCardItems = searchItems.map((item: Item) => (
    <CardItem key={item.id} item={item} />
  ));

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
          value={searchText}
          onChangeText={handleSearchChange}
          boxProps={{marginBottom: 's12'}}
          placeholder="Insira sua busca aqui..."
          RightComponent={<Icon name="search" color="gray3" />}
        />
      </Box>
      {searchItems.length === 0 ? (
        <Box mb="s12" alignItems="center" justifyContent="center">
          <Text preset="headingSmall" color="gray3">
            Faça uma busca para ver os resultados
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
