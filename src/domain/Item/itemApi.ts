import {itemsMock} from './itemsMock';
import {Item} from './type';

async function getList(): Promise<Item[]> {
  return itemsMock;
}

export const itemApi = {
  getList,
};
