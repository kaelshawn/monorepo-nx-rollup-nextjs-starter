"use client";

import { Button as PrimeButton } from "primereact/button";
import { Button, Header } from "ui";
import useMenusStore from "../stores/menus";

export default function Page() {
  const menuStore = useMenusStore();
  return (
    <div>
      <Header text="Web" />
      <Button />
      <PrimeButton
        onClick={() => {
          menuStore.increase(1);
          menuStore.increaseMenu();
        }}
      >
        123123
      </PrimeButton>
      {menuStore.testNumber}
      {menuStore.items.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </div>
  );
}
