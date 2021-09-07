import React, { Dispatch, FC, SetStateAction } from "react";
import styled from "styled-components";

import { ChevronLeft, ChevronRight, User, ChevronDown } from "react-feather";

import { Playlist } from "../hooks/usePlaylist";
import { Track } from "../hooks/useTracks";

import PlaylistHeader from "./PlaylistHeader";
import TracksTable from "./TracksTable";

interface Props {
  selectedPlaylist: Playlist;
  tracks: Track[];
  selectedTrack: Track | undefined;
  setSelectedTrack: Dispatch<SetStateAction<Track | undefined>>;
}

const colors = [
  "#071ab0",
  "#af1018",
  "#21B046",
  "#B09021",
  "#198CBD",
  "#63ac22",
  "#A210B0",
] as const;

type Color = typeof colors[number];

const getColor = (val: number): Color => {
  return colors[val % colors.length];
};

const hash = (str: string) => {
  let h = 0;
  for (const c of str) {
    h += c.charCodeAt(0);
  }
  return h;
};

const PlaylistScreen: FC<Props> = ({
  selectedPlaylist,
  tracks,
  selectedTrack,
  setSelectedTrack,
}) => {
  const { id = "" } = selectedPlaylist;
  const color = getColor(hash(id));

  return (
    <Wrapper color={color}>
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
      <PlaylistHeader selectedPlaylist={selectedPlaylist} />
      <TracksTable
        tracks={tracks}
        selectedTrack={selectedTrack}
        setSelectedTrack={setSelectedTrack}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ color: Color }>`
  position: relative;
  background: linear-gradient(${({ color }) => color}, #000000, #000000);
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
