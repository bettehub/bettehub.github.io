import React, { memo } from "react";
import { StyledFooter } from "./Styled";

const Footer = () => {
  return (
    <StyledFooter>
      Copyrightⓒ2008 bettehub.github.io All rights reserved.
    </StyledFooter>
  );
};

export default memo(Footer);
