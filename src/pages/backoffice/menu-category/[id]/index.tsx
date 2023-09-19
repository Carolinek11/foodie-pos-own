import BackofficeLayout from "@/components/backofficeLayout";
import { useRouter } from "next/router";
import React from "react";

const UpdateMenuCategory = () => {
  const router = useRouter();
  const menuCategoryId = router.query.id;
  console.log(menuCategoryId);

  return (
    <BackofficeLayout>
      <h1>UpdateMenuCategory Page {menuCategoryId}</h1>
    </BackofficeLayout>
  );
};

export default UpdateMenuCategory;
