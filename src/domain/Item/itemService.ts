import {itemApi} from './itemApi';
import {Item} from './type';

async function getList(): Promise<Item[]> {
  const itemList = await itemApi.getList();
  return itemList;
}

export const itemService = {
  getList,
};
