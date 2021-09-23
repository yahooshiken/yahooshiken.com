import React, {
  Dispatch,
  FC,
  SetStateAction,
  useState,
  useContext,
} from "react";
import styled, { css } from "styled-components";
import { Clock, Pause, Play, BarChart2 } from "react-feather";
import { Track } from "../hooks/useTracks";
import { audioContext } from "../hooks/useAudio";

interface Props {
  tracks: Track[];
  selectedTrack: Track | undefined;
  setSelectedTrack: Dispatch<SetStateAction<Track | undefined>>;
}

const TracksTable: FC<Props> = ({
  tracks,
  selectedTrack,
  setSelectedTrack,
}) => {
  return (
    <Table>
      <THead>
        <tr>
          <th>#</th>
          <th>TITLE</th>
          <th>ALBUM</th>
          <th>
            <Clock size={24} />
          </th>
        </tr>
      </THead>
      <TBody>
        {tracks.map((t, index) => (
          <TRow
            key={t.id}
            track={t}
            index={index + 1}
            selected={t.id === selectedTrack?.id}
            setSelectedTrack={setSelectedTrack}
          />
        ))}
      </TBody>
    </Table>
  );
};

const PlayControl: FC<{ url: string }> = ({ url }) => {
  const {
    audio,
    play = () => null,
    pause = () => null,
    playing,
  } = useContext(audioContext);

  if (playing && url === audio?.getAttribute("src")) {
    return <Pause onClick={() => pause()} />;
  }

  return <Play onClick={() => play(url)} />;
};

const TRow: FC<{
  track: Track | undefined;
  index: number;
  selected: boolean;
  setSelectedTrack: Dispatch<SetStateAction<Track | undefined>>;
}> = (props) => {
  const { track, index, selected, setSelectedTrack } = props;

  const [hover, setHover] = useState(false);
  const handleClick = (track: Track | undefined) => setSelectedTrack(track);
  const handleMouseOver = () => setHover(true);
  const handleMouseOut = () => setHover(false);

  const { audio, playing } = useContext(audioContext);
  const playingThisAudio =
    playing && track?.preview_url === audio?.getAttribute("src");

  return (
    <TRowWrapper
      selected={selected}
      playingThisAudio={playingThisAudio}
      onClick={() => handleClick(track)}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOut}
    >
      <td style={{ width: 48 }}>
        {hover && !!track?.preview_url ? (
          <PlayControl url={track.preview_url} />
        ) : playingThisAudio ? (
          <BarChart2 />
        ) : (
          index
        )}
      </td>
      <TD>
        <AlbumImage
          src={
            track?.album?.images?.reduce((p, c) => (p.width < c.width ? p : c))
              .url
          }
          alt=""
        />
        <div>
          <Title>{track?.name}</Title>
          <Artist>{track?.artists?.map((a) => a.name).join(", ")}</Artist>
        </div>
      </TD>
      <td>{track?.album?.name}</td>
      <td>{track?.duration}</td>
    </TRowWrapper>
  );
};

const Table = styled.table`
  width: 100%;
  border: none;
  border-spacing: unset;
`;

const THead = styled.thead`
  color: white;
  text-align: left;
`;

const TBody = styled.tbody`
  color: white;
`;

const AlbumImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 0.5rem;
`;

const TD = styled.td`
  display: flex;
  overflow: hidden;
  padding: 0.625rem 1rem 0.625rem 0;
  white-space: nowrap;
`;

const Title = styled.p`
  font-size: 1rem;
`;
const Artist = styled.p`
  font-size: 0.875rem;
  color: #a3a3a3;
`;

const TRowWrapper = styled.tr<{
  selected?: boolean;
  playingThisAudio?: boolean;
}>`
  height: 3.75rem;
  padding: 0 1rem;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  ${({ selected }) =>
    selected
      ? css`
          font-weight: bold;
          background: rgba(255, 255, 255, 0.3);
          &:hover {
            background: rgba(255, 255, 255, 0.3);
          }
        `
      : null};

  ${({ playingThisAudio }) =>
    playingThisAudio
      ? css`
          font-weight: bold;
          color: #1db954;
          &:hover {
            background: rgba(255, 255, 255, 0.3);
          }
        `
      : null};
`;

export default TracksTable;
