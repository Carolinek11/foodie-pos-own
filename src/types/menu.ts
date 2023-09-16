// all types using in menus

export interface CreateMenuPayload {
  name: string;
  price: number;
  assetUrl?: string;
}

export interface Menu extends CreateMenuPayload {
  id: number;
  isArchived: boolean;
}
