import {categoriesMock} from './categoriesMock';
import {Category} from './type';

async function getList(): Promise<Category[]> {
  return categoriesMock;
}

export const categoryApi = {
  getList,
};
