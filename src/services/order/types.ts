import {Item} from '@domain';

export interface Order {
  name?: string;
  phone?: string;
  store?: {
    id: number;
    phone: string;
  };
  listItems?: Item[];
}

export interface OrderService {
  order: Order | null;
  sendOrder: (order: Order) => void;
}
