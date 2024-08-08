import {itemApi} from './itemApi';
import {Item} from './type';

async function getList(category: string): Promise<Item[]> {
  const itemList = await itemApi.getList();
  const filteredList = itemList.filter(item => item.category === category);
  return filteredList;
}

export const itemService = {
  getList,
};
