import React, { Dispatch, FC, SetStateAction, useContext } from "react";
import styled, { css } from "styled-components";
import {
  Shuffle,
  SkipBack,
  SkipForward,
  PlayCircle,
  Pause,
  Repeat,
  Maximize,
  Volume2,
  Monitor,
  Heart,
} from "react-feather";
import { Track } from "../hooks/useTracks";
import { audioContext } from "../hooks/useAudio";

interface Props {
  selectedTrack: Track | undefined;
  setSelectedTrack: Dispatch<SetStateAction<Track | undefined>>;
}

const CurrentTrack: FC<Props> = ({ selectedTrack, setSelectedTrack }) => {
  return (
    <Wrapper>
      <TrackInfo selectedTrack={selectedTrack} />
      <PlayerControlls url={selectedTrack?.preview_url} />
      <MoreControlls />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;
  width: 100%;
  height: 5rem;
`;

const TrackInfo: FC<{ selectedTrack: Track | undefined }> = ({
  selectedTrack: track,
}) => {
  if (!track) {
    return <TrackInfoWrapper />;
  }
  return (
    <TrackInfoWrapper>
      <AlbumImage
        src={
          track?.album?.images?.reduce((prev, curr) =>
            prev.width < curr.width ? prev : curr
          )?.url
        }
      />
      <TrackWrap>
        <TrackTitle>{track?.name}</TrackTitle>
        <TrackArtist>
          {track?.artists?.map((a) => a.name).join(", ")}
        </TrackArtist>
      </TrackWrap>
      <IconWrapper>
        <Heart size={20} />
      </IconWrapper>
    </TrackInfoWrapper>
  );
};

const TrackInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 12.5rem;
  max-width: 28rem;
  padding: 0.5rem;
`;

const AlbumImage = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  margin-right: 0.5rem;
`;

const TrackWrap = styled.div`
  padding: 0 0.75rem;
  white-space: nowrap;
  overflow: hidden;
`;

const TrackTitle = styled.p`
  color: #fff;
`;
const TrackArtist = styled.p`
  color: rgba(255, 255, 255, 0.7);
`;

const PlayerControlls: FC<{ url: string | undefined }> = ({ url }) => {
  const {
    play = () => null,
    pause = () => null,
    playing,
  } = useContext(audioContext);

  return (
    <PlayerControllsWrapper>
      <Controlls>
        <IconWrapper>
          <Shuffle />
        </IconWrapper>
        <IconWrapper>
          <SkipBack />
        </IconWrapper>
        <IconWrapper active={!!url}>
          {playing ? (
            <Pause onClick={() => pause()} />
          ) : (
            <PlayCircle onClick={() => play(url)} />
          )}
        </IconWrapper>
        <IconWrapper>
          <SkipForward />
        </IconWrapper>
        <IconWrapper>
          <Repeat />
        </IconWrapper>
      </Controlls>
      <ProgressWrapper>
        0:00
        <ProgressBar />
        0:00
      </ProgressWrapper>
    </PlayerControllsWrapper>
  );
};

const PlayerControllsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
`;
const Controlls = styled.div`
  display: flex;
  align-items: center;
  height: 3.5rem;
  padding: 0.5rem;
`;
const IconWrapper = styled.span<{ active?: boolean }>`
  color: #ffffff;
  padding: 0 0.75rem;

  ${({ active }) =>
    active
      ? css`
          &:hover {
            svg {
              width: 32px;
              height: 32px;
            }
          }
        `
      : null};
`;

const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: #ffffff;
`;
const ProgressBar = styled.div`
  height: 0.125rem;
  flex: 1;
  border-radius: 0.5rem;
  margin: 0 0.5rem;
  background: rgba(255, 255, 255, 0.8);
`;

const MoreControlls: FC = () => {
  return (
    <MoreControllsWrapper>
      <IconWrapper>
        <Monitor />
      </IconWrapper>
      <IconWrapper>
        <Volume2 />
      </IconWrapper>
      <VolumeBar />
      <IconWrapper>
        <Maximize />
      </IconWrapper>
    </MoreControllsWrapper>
  );
};

const MoreControllsWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 15%;
`;

const VolumeBar = styled.div`
  width: 10%;
  height: 0.125rem;
  flex: 1;
  border-radius: 0.5rem;
  margin: 0 0.5rem;
  background: rgba(255, 255, 255, 0.8);
`;

export default CurrentTrack;
