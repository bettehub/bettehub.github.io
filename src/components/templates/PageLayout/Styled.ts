import styled from "styled-components";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

export const StyledLayout = styled(Layout)`
  height: 100vh;
`;
export const StyledHeader = styled(Header)`
  padding: 0 20px;
  background: transparent;
`;
export const StyledSider = styled(Sider)`
  background: transparent;
`;
export const StyledContent = styled(Content)`
  padding: 20px;
`;
export const StyledFooter = styled(Footer)`
  padding: 24px 20px;
`;
