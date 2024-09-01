export type CategoryName =
  | ''
  | 'Wall'
  | 'Wood'
  | 'Metal'
  | 'Protection'
  | 'Floor'
  | 'Spray'
  | 'Sealer'
  | 'Putty'
  | 'Texture'
  | 'Effect'
  | 'PaintRoll'
  | 'Trowel'
  | 'Spatula'
  | 'PaintBrush'
  | 'SandPapper'
  | 'Solvent'; // Adicione as outras categorias aqui
export interface Category {
  name: CategoryName;
  title: string;
  description: string;
  icon: any;
}
