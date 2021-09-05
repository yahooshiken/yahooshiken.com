import React, { FC } from "react";
import styled from "styled-components";
import { Play, MoreHorizontal } from "react-feather";

const playlist = {
  imageUrl: "https://www.shiritsuebichu.jp/official/pc/img/n_index/main_sp.jpg",
  name: "エビ中ってなんか説明しづらいけど見とかなきゃ損なグループなんだって！",
  description:
    "エビ中ってなんか説明しづらいけど見とかなきゃ損なグループなんだって！",
  creator: "yahooshiken",
  songs: [1, 2, 3],
  duration: "0:00",
};

const PlaylistHeader: FC = () => {
  const { imageUrl, name, description, creator, songs, duration } = playlist;
  return (
    <Wrapper>
      <PlaylistInfoWrapper>
        <CoverImage src={imageUrl} />
        <PlaylistInfo>
          <Headline>PLAYLIST</Headline>
          <PlaylistName>{name}</PlaylistName>
          <PlaylistDescription>{description}</PlaylistDescription>
          <PlaylistDescription>
            Created by {creator} * {songs.length} songs, {duration}
          </PlaylistDescription>
        </PlaylistInfo>
      </PlaylistInfoWrapper>
      <PlaylistButtons>
        <PlayButton>
          <Play size={24} />
        </PlayButton>
        <MoreButton>
          <MoreHorizontal size={24} />
        </MoreButton>
      </PlaylistButtons>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;

const PlaylistInfoWrapper = styled.div`
  display: flex;
  padding-bottom: 2rem;
`;

const CoverImage = styled.img`
  width: 12.5rem;
  height: 12.5rem;
  object-fit: cover;
`;

const PlaylistInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
`;

const Headline = styled.h4`
  margin-bottom: 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.25rem;
  color: #ffffff;
`;

const PlaylistName = styled.h2`
  margin-bottom: 0.75rem;
  font-size: 2rem;
  font-weight: bold;
  color: #ffffff;
`;

const PlaylistDescription = styled.p`
  margin-bottom: 1rem;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
`;

const PlaylistButtons = styled.div`
  display: flex;
`;

const PlayButton = styled.span`
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.5rem;
  border-radius: 50%;
  background: #1db954;
  color: #ffffff;
`;

const MoreButton = styled.span`
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.5rem;
  color: #ffffff;
`;

export default PlaylistHeader;
