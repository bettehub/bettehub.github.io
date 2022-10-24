import React from "react";
import {
  StyledLayout,
  StyledHeader,
  StyledSider,
  StyledContent,
  StyledFooter,
} from "./Styled";
import StyledMenu from "../SideMenu";

function PageLayout() {
  return (
    <StyledLayout>
      <StyledHeader>Bette's Blog</StyledHeader>
      <StyledLayout>
        <StyledSider>
          <StyledMenu />
        </StyledSider>
        <StyledContent>Content</StyledContent>
      </StyledLayout>
      <StyledFooter>Footer</StyledFooter>
    </StyledLayout>
  );
}

export default PageLayout;
