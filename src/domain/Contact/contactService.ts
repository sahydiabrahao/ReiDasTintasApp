import {contactApi} from './contactApi';
import {Contact} from './type';

async function getList(): Promise<Contact[]> {
  const contactList = await contactApi.getList();
  return contactList;
}

export const contactService = {
  getList,
};
