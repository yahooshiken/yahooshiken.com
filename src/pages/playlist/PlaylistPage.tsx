import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";

import { SideMenu, CurrentTrack, PlaylistScreen } from "./components";
import usePlaylist, { initialPlaylist, Playlist } from "./hooks/usePlaylist";
import useTrack, { Track } from "./hooks/useTracks";

const PlaylistPage: FC = () => {
  const [selectedPlaylist, setSelectedPlaylist] =
    useState<Playlist>(initialPlaylist);
  const [selectedTrack, setSelectedTrack] = useState<Track | undefined>();
  const { playlists } = usePlaylist();
  const { tracks } = useTrack(selectedPlaylist.id);

  useEffect(() => {
    if (playlists?.length > 0) {
      setSelectedPlaylist(playlists?.[0] || initialPlaylist);
    }
  }, [playlists]);

  return (
    <PageWrapper>
      <Flex>
        <SideMenu
          playlists={playlists}
          selectedPlaylist={selectedPlaylist}
          setSelectedPlaylist={setSelectedPlaylist}
        />
        <PlaylistScreen
          tracks={tracks}
          selectedPlaylist={selectedPlaylist}
          selectedTrack={selectedTrack}
          setSelectedTrack={setSelectedTrack}
        />
      </Flex>
      <CurrentTrack
        selectedTrack={selectedTrack}
        setSelectedTrack={setSelectedTrack}
      />
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