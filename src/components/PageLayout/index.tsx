import React, { ReactNode, useState } from "react";
import { Layout } from "antd";
import { StyledPageLayout } from "./Styled";
import Header from "../Header";
import Footer from "../Footer";
import SideMenu from "../SideMenu";
import PageContent from "../PageContent";

function PageLayout({ breadcrumb, children }: PageLayoutProps) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <StyledPageLayout breadcrumb={breadcrumb}>
      <Header collapsed={collapsed} onClick={() => setCollapsed(!collapsed)}>
        bette's blog
      </Header>
      <Layout>
        <SideMenu trigger={null} collapsible collapsed={collapsed} />
        <PageContent breadcrumb={breadcrumb}>{children}</PageContent>
      </Layout>
      <Footer />
    </StyledPageLayout>
  );
}

type PageLayoutProps = {
  breadcrumb: string[];
  children: ReactNode;
};

export default PageLayout;
