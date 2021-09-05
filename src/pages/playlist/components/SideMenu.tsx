import React, { FC } from "react";
import styled from "styled-components";
import { Icon as IconType, Home, Search, Layers } from "react-feather";

const playlists = [
  "First: Today's Top Hits",
  "Discover Weekly",
  "Release Radar",
  "Chill",
  "Background",
  "lofi hip hop music - beats to relax/study to",
  "Vibes Right Now",
  "Time Capsule",
  "On Repeat",
  "Summer Rewind",
  "Dank Doggo Tunes",
  "Sleepy Doge",
  "Today's Top Hits",
  "Discover Weekly",
  "Release Radar",
  "Chill",
  "Background",
  "lofi hip hop music - beats to relax/study to",
  "Vibes Right Now",
  "Time Capsule",
  "On Repeat",
  "Summer Rewind",
  "Dank Doggo Tunes",
  "Sleepy Doge",
  "Today's Top Hits",
  "Discover Weekly",
  "Release Radar",
  "Chill",
  "Background",
  "lofi hip hop music - beats to relax/study to",
  "Vibes Right Now",
  "Time Capsule",
  "On Repeat",
  "Summer Rewind",
  "Dank Doggo Tunes",
  "Sleepy Doge",
  "Today's Top Hits",
  "Discover Weekly",
  "Release Radar",
  "Chill",
  "Background",
  "lofi hip hop music - beats to relax/study to",
  "Vibes Right Now",
  "Time Capsule",
  "On Repeat",
  "Summer Rewind",
  "Dank Doggo Tunes",
  "Last:Sleepy Doge",
];

const SideMenu: FC = () => {
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
          <PlaylistItem key={playlist}>{playlist}</PlaylistItem>
        ))}
      </div>
    </Wrapper>
  );
};

const C = styled.div``;

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

const PlaylistItem = styled.li`
  padding: 0.5rem 0;
  list-style: none;
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
