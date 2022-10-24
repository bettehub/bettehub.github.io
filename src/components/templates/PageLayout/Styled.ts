import styled from "styled-components";
import { Layout, Breadcrumb } from "antd";

const { Header, Footer, Sider, Content } = Layout;

export const StyledPageLayout = styled(Layout)`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;
export const StyledHeader = styled(Header)`
  padding: 0 20px;
  h1 {
    color: #fff;
    opacity: 0.85;
    font-weight: 400;
    font-size: 15px;
    padding-left: 20px;
  }
`;
export const StyledSider = styled(Sider)`
  background: transparent;
  &.ant-layout-sider-collapsed {
    width: 40px !important;
    min-width: 40px !important;
    max-width: 40px !important;
  }
`;
export const StyledBreadcrumb = styled(Breadcrumb)`
  margin: 10px 20px;
`;
export const StyledContent = styled(Content)`
  padding: 0 20px;
`;
export const StyledFooter = styled(Footer)`
  padding: 10px 20px;
  color: #00152990;
  font-weight: 400;
  font-size: 12px;
`;
