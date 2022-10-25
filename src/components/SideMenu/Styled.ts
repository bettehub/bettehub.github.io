import styled from "styled-components";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

export const StyledSider = styled(Sider)`
  background: transparent;
  &.ant-layout-sider-collapsed {
    width: 40px !important;
    min-width: 40px !important;
    max-width: 40px !important;
  }
`;

export const StyledMenu = styled(Menu)`
  height: 100%;
`;
