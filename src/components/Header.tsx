import React, { FC } from "react";
import { IconButton } from "ui-neumorphism";
import { Menu, GitHub } from "react-feather";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
  handleOpen: () => void;
};

const Header: FC<Props> = ({ handleOpen }) => {
  return (
    <HeaderWrapper>
      <IconButton rounded size="medium" onClick={handleOpen}>
        <Menu />
      </IconButton>
      <LogoWrapper>
        <Link to="/">
          <LogoImage
            src="/assets/images/logo.png"
            alt="yahooshiken.com"
            width={160}
            height={60}
          />
        </Link>
      </LogoWrapper>
      <GitHubLink
        target="_blank"
        href="https://github.com/yahooshiken/yahooshiken.com"
      >
        <GitHub />
      </GitHubLink>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  height: 60px;
  margin-bottom: 8px;
  padding: 0 16px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const LogoWrapper = styled.div`
  padding: 0 12px;
  width: auto;
  height: 100%;
`;

const LogoImage = styled.img`
  height: 100%;
`;

const GitHubLink = styled.a`
  margin-left: auto;
  padding: 0 16px;
`;

export default Header;
