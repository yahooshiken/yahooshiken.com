import React, { FC } from "react";
import styled from "styled-components";
import Lottie, { Options } from "react-lottie";
import animationData from "../lotties/top.json";

const Home: FC = () => {
  const lottieOptions: Options = {
    animationData,
  };

  return (
    <HomeWrapper>
      <MessageWrapper>
        <MainMessage>Hello, I'm yahooshiken.</MainMessage>
        <SubMessage>
          This webpage is my workspace, playground and portfolio.
        </SubMessage>
      </MessageWrapper>
      <LottieWrapper>
        <Lottie options={lottieOptions} />
      </LottieWrapper>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  display: flex;
`;

const MessageWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 40px;
`;

const MainMessage = styled.h1`
  font-size: 4rem;
`;

const SubMessage = styled.h2`
  font-size: 1.8rem;
  font-weight: normal;
`;

const LottieWrapper = styled.div`
  width: 50%;
`;

export default Home;
