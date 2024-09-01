export interface Offer {
  id: string;

  image: string;
  name: string;
  brand: string;
  specification?: string;
  applicationArea?: string;
  base?: string;
  unit: string;

  color?: string;
  quantity: number;
}
