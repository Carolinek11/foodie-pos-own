// CreateMenu Component with MUI Dialog box

import config from "@/config";
import { CreateMenuCategoryPayload, MenuCategory } from "@/types/menuCategory";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Switch,
  TextField,
} from "@mui/material";
import { useState } from "react";

const defaultNewMenuCategory = {
  name: "",
  isAvailable: true,
};

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  setMenuCategories: (menuCategories: MenuCategory[]) => void;
}

const CreateMenuCategory = ({ open, setOpen, setMenuCategories }: Props) => {
  const [newMenuCategory, setNewMenuCategory] =
    useState<CreateMenuCategoryPayload>(defaultNewMenuCategory);
  //Create menu  category function
  const createMenuCategory = async () => {
    const response = await fetch(`${config.apiBaseUrl}/menu-category`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newMenuCategory),
    });
    const menuCategories = await response.json();

    //update menus
    setMenuCategories(menuCategories);

    setNewMenuCategory(defaultNewMenuCategory);

    //close dialog box
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Create menu category</DialogTitle>
      <DialogContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            sx={{ width: 300, mb: 2 }}
            placeholder="Name"
            onChange={(evt) =>
              setNewMenuCategory({ ...newMenuCategory, name: evt.target.value })
            }
          />
          <FormControlLabel
            control={
              <Switch
                defaultChecked={newMenuCategory.isAvailable}
                onChange={(e, value) => {
                  setNewMenuCategory({
                    ...newMenuCategory,
                    isAvailable: value,
                  });
                }}
              />
            }
            label="Available"
            sx={{ mb: 2 }}
          />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              sx={{ width: "fit-content" }}
              onClick={createMenuCategory}
            >
              Create
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CreateMenuCategory;
