import React, { FC } from "react";
import styled from "styled-components";

import { ChevronLeft, ChevronRight, User, ChevronDown } from "react-feather";

import PlaylistHeader from "./PlaylistHeader";
import TracksTable from "./TracksTable";

const PlaylistScreen: FC = () => {
  return (
    <Wrapper>
      <Header>
        <Leading>
          <IconWrapper>
            <ChevronLeft size={24} style={{ verticalAlign: "middle" }} />
          </IconWrapper>
          <IconWrapper>
            <ChevronRight size={24} style={{ verticalAlign: "middle" }} />
          </IconWrapper>
        </Leading>
        <AccountInfo>
          <User size={24} style={{ verticalAlign: "middle" }} />
          <AccountName>yahooshiken</AccountName>
          <ChevronDown size={24} style={{ verticalAlign: "middle" }} />
        </AccountInfo>
      </Header>
      <PlaylistHeader />
      <TracksTable />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  background: linear-gradient(#af1018, #000000, #000000);
  width: 100%;
  padding: 5rem 1.25rem;
  overflow: auto;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  padding: 1.25rem;
  background: transparent;
`;
const Leading = styled.div``;

const IconWrapper = styled.span`
  padding: 0.5rem;
  margin-right: 0.5rem;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  color: #ffffff;
`;

const AccountInfo = styled.div`
  border-radius: 4%;
  background: rgba(0, 0, 0, 0.7);
  color: #ffffff;
  vertical-align: middle;
  padding: 0.2rem;
`;

const AccountName = styled.span`
  padding: 0 0.5rem;
`;

export default PlaylistScreen;
