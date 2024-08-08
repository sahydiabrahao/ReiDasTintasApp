import {categoryListMock} from './categoryListMock';
import {Category} from './type';

async function getList(): Promise<Category[]> {
  return categoryListMock;
}

export const categoryApi = {
  getList,
};
