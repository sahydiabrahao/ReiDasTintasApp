export interface Item {
  id: string;
  category: string;

  name: string;
  brand: string;
  specification?: string;
  quantity: number;
  base?: string;
  unit: string;

  image: string;
}
