import BackofficeLayout from "@/components/backofficeLayout";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateMenu } from "@/store/slices/menuSlice";
import { Box, Button, TextField } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";

const UpdateMenu = () => {
  const [name, setName] = useState<string>("");
  const menus = useAppSelector((state) => state.menu.items);
  const router = useRouter();
  const menuId = Number(router.query.id);
  const menu = menus.find((item) => item.id === menuId);

  const dispatch = useAppDispatch();

  if (!menu) return null;
  return (
    <BackofficeLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <TextField
          id="name"
          label="Name"
          defaultValue={menu.name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => {
            dispatch(updateMenu({ id: menuId, name }));
          }}
        >
          Update
        </Button>
      </Box>
    </BackofficeLayout>
  );
};

export default UpdateMenu;
