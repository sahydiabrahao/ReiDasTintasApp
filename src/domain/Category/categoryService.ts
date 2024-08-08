import {categoryApi} from './categoryApi';
import {Category} from './type';

async function getList(): Promise<Category[]> {
  const categoryList = await categoryApi.getList();
  return categoryList;
}

export const categoryService = {
  getList,
};
