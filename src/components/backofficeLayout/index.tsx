import CategoryIcon from "@mui/icons-material/Category";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import {
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const BackofficeLayout = ({ children }: Props) => {
  return (
    <Box>
      {/* app bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 80,
          bgcolor: "#4C4C6D",
        }}
      >
        <Typography variant="h4" sx={{ color: "#E8F6EF" }}>
          Foodie POS - Backoffice
        </Typography>
      </Box>

      {/* side bar */}
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <Box sx={{ width: 300, bgcolor: "#1B9C85", borderTopRightRadius: 20 }}>
          <Link href={"/backoffice/menu"} style={{ textDecoration: "none" }}>
            <ListItemButton>
              <ListItemIcon>
                <RestaurantMenuIcon sx={{ color: "#E8F6EF", fontSize: 30 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={{ fontSize: 20, color: "#E8F6EF" }}>
                    Menu
                  </Typography>
                }
              />
            </ListItemButton>
          </Link>
          <Link
            href={"/backoffice/menuCategory"}
            style={{ textDecoration: "none" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <CategoryIcon sx={{ color: "#E8F6EF", fontSize: 30 }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={{ fontSize: 20, color: "#E8F6EF" }}>
                    Menu Category
                  </Typography>
                }
              />
            </ListItemButton>
          </Link>
        </Box>

        {/* children component */}
        <Box sx={{ width: "100%", pl: 3, pt: 3 }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default BackofficeLayout;
