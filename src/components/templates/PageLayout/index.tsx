import React from "react";
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
import { LikeOutlined } from "@ant-design/icons";

function PageLayout() {
  return (
    <StyledPageLayout>
      <StyledHeader>
        <h1>
          <LikeOutlined /> Bette's Blog
        </h1>
      </StyledHeader>
      <Layout>
        <StyledSider>
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
