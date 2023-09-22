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

export interface UpdateMenuCategoryPayload {
  id: number;
  name: string;
}

export interface MenuCategoryState {
  items: MenuCategory[];
  isLoading: boolean;
  error: Error | null;
}
