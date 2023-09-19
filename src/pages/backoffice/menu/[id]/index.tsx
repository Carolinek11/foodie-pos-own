import BackofficeLayout from "@/components/backofficeLayout";
import { useRouter } from "next/router";
import React from "react";

const UpdateMenu = () => {
  const router = useRouter();
  const menuId = router.query.id;
  console.log(menuId);

  return (
    <BackofficeLayout>
      <h1>UpdateMenu Page {menuId}</h1>
    </BackofficeLayout>
  );
};

export default UpdateMenu;
