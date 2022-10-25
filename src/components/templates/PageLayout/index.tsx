import React, { useState } from "react";
import { Layout } from "antd";
import {
  StyledPageLayout,
  StyledHeader,
  StyledSider,
  StyledContent,
  StyledFooter,
  StyledBreadcrumb,
} from "./Styled";
import StyledMenu from "../SideMenu";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

function PageLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <StyledPageLayout>
      <StyledHeader>
        <h1>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              style: {
                position: "absolute",
                top: 25,
                left: 15,
              },
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          bette's blog
        </h1>
      </StyledHeader>
      <Layout>
        <StyledSider trigger={null} collapsible collapsed={collapsed}>
          <StyledMenu />
        </StyledSider>
        <Layout>
          <StyledBreadcrumb>
            <StyledBreadcrumb.Item>Home</StyledBreadcrumb.Item>
            <StyledBreadcrumb.Item>List</StyledBreadcrumb.Item>
            <StyledBreadcrumb.Item>Title</StyledBreadcrumb.Item>
          </StyledBreadcrumb>
          <StyledContent>Content</StyledContent>
        </Layout>
      </Layout>
      <StyledFooter>
        Copyrightⓒ2008 bettehub.github.io All rights reserved.
      </StyledFooter>
    </StyledPageLayout>
  );
}

export default PageLayout;
