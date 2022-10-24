import React from "react";
import { StyledMenu } from "./Styled";
import {
  LaptopOutlined,
  UserOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

// const items: MenuProps["items"] = [
//   UserOutlined,
//   LaptopOutlined,
//   NotificationOutlined,
// ].map((icon, index) => {
//   const key = String(index + 1);

//   return {
//     key: `sub${key}`,
//     icon: React.createElement(icon),
//     label: `subnav ${key}`,

//     children: new Array(4).fill(null).map((_, j) => {
//       const subKey = index * 4 + j + 1;
//       return {
//         key: subKey,
//         label: `option${subKey}`,
//       };
//     }),
//   };
// });

const items = [
  { label: "item 1", key: "item-1", icon: <LaptopOutlined /> }, // remember to pass the key prop
  { label: "item 2", key: "item-2", icon: <UserOutlined /> }, // which is required
  {
    label: "sub menu",
    key: "submenu",
    icon: <NotificationOutlined />,
    children: [{ label: "item 3", key: "submenu-item-1" }],
  },
];

function SideMenu() {
  return (
    <StyledMenu
      mode="inline"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      style={{ height: "100%", borderRight: 0 }}
      items={items}
    />
  );
}

export default SideMenu;
