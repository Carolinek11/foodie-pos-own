import config from "@/config";
import {
  CreateMenuCategoryPayload,
  MenuCategoryState,
  UpdateMenuCategoryPayload,
} from "@/types/menuCategory";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: MenuCategoryState = {
  items: [],
  isLoading: false,
  error: null,
};

export const createMenuCategory = createAsyncThunk(
  "menuCategory/createMenuCategory",
  async (payload: CreateMenuCategoryPayload, thunkApi) => {
    const response = await fetch(`${config.apiBaseUrl}/menu-category`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const menuCategories = await response.json();
    thunkApi.dispatch(setMenuCategory(menuCategories));
  }
);
export const updateMenuCategory = createAsyncThunk(
  "menuCategory/updateMenuCategory",
  async (payload: UpdateMenuCategoryPayload, thunkApi) => {
    console.log(payload);

    // const response = await fetch(`${config.apiBaseUrl}/menu-category`, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(payload),
    // });
    // const menuCategories = await response.json();
    // thunkApi.dispatch(setMenuCategory(menuCategories));
  }
);

export const menuCategorySlice = createSlice({
  name: "menuCategory",
  initialState,
  reducers: {
    setMenuCategory: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setMenuCategory } = menuCategorySlice.actions;
export default menuCategorySlice.reducer;
