import {contactsMock} from './contactsMock';
import {Contact} from './type';

async function getList(): Promise<Contact[]> {
  return contactsMock;
}

export const contactApi = {
  getList,
};
