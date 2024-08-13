import React from 'react';

import {RootState} from '@redux';
import {useSelector} from 'react-redux';

import {Box, CardCategory, CardItem} from '@components';
import {Screen} from '@screens';

export function HomeScreen() {
  const categoriesList = useSelector(
    (state: RootState) => state.category.categories,
  );

  const selectedCategoryName = useSelector(
    (state: RootState) => state.category.selectedCategory,
  );

  const filterItemsByCategoryList = useSelector(
    (state: RootState) => state.item.filteredItems,
  );

  const renderCardCategory = categoriesList.map(category => (
    <CardCategory key={category.name} category={category} />
  ));

  const renderCardItems = filterItemsByCategoryList.map(item => (
    <CardItem key={item.id} item={item} />
  ));

  return (
    <Screen scrollable>
      {selectedCategoryName === 'Init' ? (
        <Box
          flexGrow={1}
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="center"
          flex={1}
          flexWrap="wrap"
          rowGap="s12"
          columnGap="s12">
          {renderCardCategory}
        </Box>
      ) : (
        <Box>
          <Box
            flexGrow={1}
            flexDirection="row"
            justifyContent="flex-start"
            flex={1}
            flexWrap="wrap"
            gap="s12">
            {renderCardItems}
          </Box>
        </Box>
      )}
    </Screen>
  );
}
