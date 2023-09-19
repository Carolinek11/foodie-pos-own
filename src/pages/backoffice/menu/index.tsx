import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import CreateMenu from "../../../components/createMenu/CreateMenu";
import { Menu } from "@/types/menu";
import MenuCard from "@/components/menuCard/MenuCard";
import BackofficeLayout from "@/components/backofficeLayout";
import config from "@/config";

const MenuPage = () => {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  // console.log("Current menus: ", menus);

  // call fetchMenus function once at first rendering
  useEffect(() => {
    // fetchMenus();
  }, []);

  //fetch menus from server
  const fetchMenus = async () => {
    const response = await fetch(`${config.apiBaseUrl}/menu`);
    const menus = await response.json();
    setMenus(menus);
  };

  return (
    <BackofficeLayout>
      <Box sx={{ mr: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {/* button to show CreateMenu's Dialog */}
          <Button variant="contained" onClick={() => setOpen(true)}>
            Create menu
          </Button>
        </Box>

        {/* render CreateMenu Component */}
        <CreateMenu open={open} setOpen={setOpen} setMenus={setMenus} />

        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {/* display menu with MenuCard */}
          {menus.map((menu) => (
            <MenuCard key={menu.id} menu={menu} />
          ))}
        </Box>
      </Box>
    </BackofficeLayout>
  );
};

export default MenuPage;
