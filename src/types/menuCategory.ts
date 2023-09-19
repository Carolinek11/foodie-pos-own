export interface MenuCategory {
  id: number;
  name: string;
  isAvailable: boolean;
  isArchived: boolean;
}
export interface CreateMenuCategoryPayload {
  name: string;
  isAvailable: boolean;
}
