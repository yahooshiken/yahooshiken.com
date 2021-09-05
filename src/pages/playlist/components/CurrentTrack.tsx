import React, { FC } from "react";
import styled from "styled-components";
import {
  Shuffle,
  SkipBack,
  SkipForward,
  PlayCircle,
  Repeat,
  Maximize,
  Volume2,
  Monitor,
  Heart,
} from "react-feather";

const CurrentTrack: FC = () => {
  return (
    <Wrapper>
      <TrackInfo />
      <PlayerControlls />
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

const TrackInfo: FC = () => {
  return (
    <TrackInfoWrapper>
      <AlbumImage src="https://www.shiritsuebichu.jp/official/pc/img/n_index/main_sp.jpg" />
      <div>
        <TrackTitle>イヤフォンライオット</TrackTitle>
        <TrackArtist>私立恵比寿中学</TrackArtist>
      </div>
      <IconWrapper>
        <Heart size={20} />
      </IconWrapper>
    </TrackInfoWrapper>
  );
};

const TrackInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
`;

const AlbumImage = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  margin-right: 0.5rem;
`;

const TrackTitle = styled.p`
  color: #fff;
`;
const TrackArtist = styled.p`
  color: rgba(255, 255, 255, 0.7);
`;

const PlayerControlls: FC = () => {
  return (
    <PlayerControllsWrapper>
      <Controlls>
        <IconWrapper>
          <Shuffle />
        </IconWrapper>
        <IconWrapper>
          <SkipBack />
        </IconWrapper>
        <IconWrapper>
          <PlayCircle />
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
  padding: 0.5rem;
`;
const IconWrapper = styled.span`
  color: #ffffff;
  padding: 0 0.75rem;
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
