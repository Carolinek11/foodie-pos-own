import BackofficeLayout from "@/components/backofficeLayout";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateMenuCategory } from "@/store/slices/menuCategorySlice";
import { Box, Button, TextField } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";

const UpdateMenuCategory = () => {
  const [name, setName] = useState<string>("");
  const router = useRouter();
  const menuCategoryId = Number(router.query.id);
  const menuCategories = useAppSelector((state) => state.menuCategory.items);
  const menuCategory = menuCategories.find(
    (item) => item.id === menuCategoryId
  );

  const dispatch = useAppDispatch();

  if (!menuCategory) return null;
  return (
    <BackofficeLayout>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}
      >
        <TextField
          id="menuCategory"
          label="Name"
          defaultValue={menuCategory.name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() =>
            dispatch(updateMenuCategory({ id: menuCategoryId, name }))
          }
        >
          Update
        </Button>
      </Box>
    </BackofficeLayout>
  );
};

export default UpdateMenuCategory;
