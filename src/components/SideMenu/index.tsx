import React, { memo, ReactNode } from "react";
import { StyledSider, StyledMenu } from "./Styled";
import {
  LaptopOutlined,
  UserOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

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

const SideMenu = ({
  trigger = null,
  collapsible,
  collapsed,
}: SideMenuProps) => {
  return (
    <StyledSider
      trigger={trigger}
      collapsible={collapsible}
      collapsed={collapsed}
    >
      <StyledMenu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        items={items}
      />
    </StyledSider>
  );
};

type SideMenuProps = {
  trigger: ReactNode;
  collapsible: boolean;
  collapsed: boolean;
};

export default memo(SideMenu);
