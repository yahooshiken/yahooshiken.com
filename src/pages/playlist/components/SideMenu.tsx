import React, { Dispatch, FC, SetStateAction } from "react";
import styled, { css } from "styled-components";
import { Icon as IconType, Home, Search, Layers } from "react-feather";

import { Playlist } from "../hooks/usePlaylist";

type Props = {
  playlists: Playlist[];
  selectedPlaylist: Playlist;
  setSelectedPlaylist: Dispatch<SetStateAction<Playlist>>;
};

const SideMenu: FC<Props> = (props) => {
  const { playlists = [], selectedPlaylist, setSelectedPlaylist } = props;

  const myLibrary = [
    "Made For You",
    "Recently Played",
    "Liked Songs",
    "Albums",
    "Artists",
    "Podcasts",
  ];

  return (
    <Wrapper>
      <div>
        <SideMenuIconTab icon={Home} title="Home" />
        <SideMenuIconTab icon={Search} title="Search" />
        <SideMenuIconTab icon={Layers} title="My Library" />
      </div>
      <div>
        <Heading4>MY LIBRARY</Heading4>
        {myLibrary.map((v) => (
          <PlaylistItem key={v}>{v}</PlaylistItem>
        ))}
      </div>
      <div>
        <Heading4>PLAYLISTS</Heading4>

        {playlists.map((playlist) => (
          <PlaylistItem
            key={playlist.id}
            selected={selectedPlaylist?.id == playlist.id}
            onClick={() => setSelectedPlaylist(playlist)}
          >
            {playlist.name}
          </PlaylistItem>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: #000000;
  color: #ffffff;
  width: 280px;
  height: 100%;
  overflow: auto;
`;

const Heading4 = styled.h4`
  padding: 0.75rem 0;
  letter-spacing: 0.2rem;
`;

const PlaylistItem = styled.li<{ selected?: boolean }>`
  padding: 0.5rem 0;
  list-style: none;
  ${({ selected }) =>
    selected
      ? css`
          font-weight: bold;
        `
      : null}
`;

const SideMenuIconTab: FC<{ icon: IconType; title: string }> = ({
  icon: Icon,
  title,
}) => {
  return (
    <TabWrapper>
      <Icon size="28" style={{ verticalAlign: "middle" }} />
      <TabText>{title}</TabText>
    </TabWrapper>
  );
};

const TabWrapper = styled.li`
  padding: 0.75rem 0;
  list-style: none;
`;

const TabText = styled.span`
  margin-left: 0.75rem;
  line-height: 1.75rem;
  vertical-align: middle;
`;

export default SideMenu;
