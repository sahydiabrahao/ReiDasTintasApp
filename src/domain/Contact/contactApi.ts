import {contactListMock} from './contactsListMock';
import {Contact} from './type';

async function getList(): Promise<Contact[]> {
  return contactListMock;
}

export const contactApi = {
  getList,
};
