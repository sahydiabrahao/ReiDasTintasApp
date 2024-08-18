export interface Item {
  id: string;

  name: string;
  brand: string;
  specification?: string;
  quantity: number;
  base?: string;
  unit: string;

  image: string;
}
