import {itemApi} from './itemApi';
import {Item} from './type';

async function getList(category: string): Promise<Item[]> {
  const itemList = await itemApi.getList();
  const filteredList = itemList.filter(item => item.category === category);
  return filteredList;
}

function matchesSearchTerm(item: Item, searchTerm: string) {
  const lowerCaseSearchTerm = searchTerm.toLowerCase();
  const nameMatch = item.name.toLowerCase().includes(lowerCaseSearchTerm);
  const otherAttributesMatch = Object.values(item)
    .filter(key => key !== 'name')
    .map(value => String(value).toLowerCase())
    .some(value => value.includes(lowerCaseSearchTerm));
  return nameMatch || otherAttributesMatch; // Prioriza a correspondência no nome
}

async function searchItem(searchTerm: string): Promise<Item[]> {
  const itemList = await itemApi.getList();
  const filteredList = itemList.filter(item =>
    matchesSearchTerm(item, searchTerm),
  );
  return filteredList;
}

export const itemService = {
  getList,
  searchItem,
};
