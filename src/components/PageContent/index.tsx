import React, { memo, ReactNode } from "react";
import { StyledPageContent, StyledContent } from "./Styled";
import Breadcrumb from "../BreadCrumb";

const PageContent = ({ children, breadcrumb }: PageContentProps) => {
  return (
    <StyledPageContent>
      <Breadcrumb breadcrumb={breadcrumb} />
      <StyledContent>{children}</StyledContent>
    </StyledPageContent>
  );
};

type PageContentProps = {
  breadcrumb: string[];
  children: ReactNode;
};

export default memo(PageContent);
