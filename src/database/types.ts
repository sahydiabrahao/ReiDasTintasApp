export const DATABASE_NAME = 'ReiDasTintasDB2';
export const TABLE_ITEM = 'Item2';
export const TABLE_CONTACT = 'Contact2';
export const DATABASE_VERSION = '1.0';
export const DATABAE_DISPLAYNAME = 'ReiDasTintas';
export const DATABASE_SIZE = 200000;
export const DATABASE_LOCATION = 'default';

export interface ItemDB {
  id: string;
  category: string;
  quantity: number;
  name: string;
  brand: string;
  specification?: string;
  unit: string;
  image: string;
}
export interface ContactDB {
  id: string;
  city: string;
  address: string;
  district: string;
  phone: string;
}
