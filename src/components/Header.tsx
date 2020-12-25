import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  handleOpen: () => void;
};

const Header: FC<Props> = ({ handleOpen }) => {
  return (
    <HeaderWrapper>
      <button onClick={handleOpen}>Open sidebar</button>
      Header
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div``;

export default Header;
