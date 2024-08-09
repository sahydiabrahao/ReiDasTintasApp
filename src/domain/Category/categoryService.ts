import {itemApi} from '../Item/itemApi';
import {Item} from '../Item/type';

import {categoryApi} from './categoryApi';
import {Category} from './type';

async function getCategories(): Promise<Category[]> {
  const categoryList = await categoryApi.getList();
  return categoryList;
}

function matchesSearchTerm(category: string, searchTerm: string) {
  const lowerCaseSearchTerm = searchTerm.toLowerCase();
  const categoryMatch = category.toLowerCase() === lowerCaseSearchTerm;
  return categoryMatch;
}

async function searchCategory(searchTerm: string): Promise<Item[]> {
  const itemList = await itemApi.getList();
  const filteredList = itemList.filter(item =>
    matchesSearchTerm(item.category, searchTerm),
  );
  return filteredList;
}

export const categoryService = {
  getCategories,
  searchCategory,
};
