import React, { FC } from "react";
import styled from "styled-components";

import { SideMenu, CurrentTrack, PlaylistScreen } from "./components";

const PlaylistPage: FC = () => {
  return (
    <PageWrapper>
      <Flex>
        <SideMenu />
        <PlaylistScreen />
      </Flex>
      <CurrentTrack />
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 80px;
  max-height: calc(100vh - 3.75rem);
`;

const Flex = styled.div`
  display: flex;
  max-height: calc(100vh - 3.75rem - 5rem);
  background: #000000;
`;

export default PlaylistPage;
