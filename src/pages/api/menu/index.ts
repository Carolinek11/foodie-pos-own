import type { NextApiRequest, NextApiResponse } from "next";

interface Menu {
  id: number;
  name: string;
  price: number;
  assetUrl?: string;
  isArchived: boolean;
}

//DEMO menus array
let menus: Menu[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const isValid = req.body.name;
    if (!isValid) return res.status(400).send("Bad request");
    const newMenuId = menus.length === 0 ? 1 : menus[menus.length - 1].id + 1;
    const isArchived = false;

    //crate new menu object
    const newMenu = {
      ...req.body,
      id: newMenuId,
      assetUrl:
        "https://thumbs.dreamstime.com/b/heart-shape-various-vegetables-fruits-healthy-food-concept-isolated-white-background-140287808.jpg",
      isArchived,
    };

    menus.push(newMenu);

    return res.send(menus);
  } else if (req.method === "GET") {
    return res.send(menus);
  }
  res.status(405).send("Invalid method");
}
