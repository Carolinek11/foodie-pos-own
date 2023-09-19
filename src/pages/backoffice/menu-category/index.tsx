import BackofficeLayout from "@/components/backofficeLayout";
import ItemCard from "@/components/itemCard/itemCard";
import CreateMenuCategory from "@/components/menuCategory/CreateMenuCategory";
import { MenuCategory } from "@/types/menuCategory";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import CategoryIcon from "@mui/icons-material/Category";

const BackofficeApp = () => {
  const [menuCategories, setMenuCategories] = useState<MenuCategory[]>([]);
  const [open, setOpen] = useState<boolean>(false);
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
            Create menu category
          </Button>
        </Box>

        {/* render CreateMenu Component */}
        <CreateMenuCategory
          open={open}
          setOpen={setOpen}
          setMenuCategories={setMenuCategories}
        />

        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {/* display menu with MenuCard */}
          {menuCategories.map((menuCategory) => (
            <ItemCard
              href={`/backoffice/menu-category/${menuCategory.id}`}
              key={menuCategory.id}
              icon={<CategoryIcon />}
              title={menuCategory.name}
              subtitle="1"
            />
          ))}
        </Box>
      </Box>
    </BackofficeLayout>
  );
};

export default BackofficeApp;
