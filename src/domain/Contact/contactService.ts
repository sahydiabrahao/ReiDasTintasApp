import {contactApi} from './contactApi';
import {Contact} from './type';

async function getList(): Promise<Contact[]> {
  const itemList = await contactApi.getList();
  return itemList;
}

export const contactService = {
  getList,
};
