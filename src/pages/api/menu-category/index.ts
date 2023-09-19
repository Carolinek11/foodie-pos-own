import type { NextApiRequest, NextApiResponse } from "next";

interface MenuCategory {
  id: number;
  name: string;
  isAvailable: boolean;
  isArchived: boolean;
}
let menuCategories: MenuCategory[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    //data validation
    const isValid = req.body.name;
    if (!isValid) return res.status(400).send("Bad request");
    const newMenuCategoryId =
      menuCategories.length === 0
        ? 1
        : menuCategories[menuCategories.length - 1].id + 1;

    const isArchived = false;

    //crate new menu category object
    const newMenuCategory = {
      id: newMenuCategoryId,
      ...req.body,
      isArchived,
    };
    menuCategories.push(newMenuCategory);
    return res.send(menuCategories);
  } else if (req.method === "GET") {
    return res.send(menuCategories);
  }
  res.status(405).send("Invalid method");
}
