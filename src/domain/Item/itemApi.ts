import {itemListMock} from './itemsMock';
import {Item} from './type';

async function getList(): Promise<Item[]> {
  return itemListMock;
}

export const itemApi = {
  getList,
};
