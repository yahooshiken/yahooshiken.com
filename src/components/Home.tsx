import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Lottie, { Options } from "react-lottie";

const Home: FC = () => {
  const [animationData, setAnimationData] = useState<any>(undefined);
  const lottieOptions: Options = { animationData };

  useEffect(() => {
    const lazyLoadJson = async () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data = await import("../lotties/top.json");
      setAnimationData(data);
    };

    lazyLoadJson().catch((e) => console.error(e));
  }, []);

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
  max-width: 1280px;
  margin: 0 auto;
  @media (max-width: 767px) {
    flex-direction: column;
    padding: 0 16px;
  }
`;

const MessageWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 40px;
  @media (max-width: 767px) {
    width: 100%;
    padding: 48px 0 32px;
  }
`;

const MainMessage = styled.h1`
  font-size: 4rem;
  margin-bottom: 12px;
  @media (max-width: 767px) {
    font-size: 3rem;
  }
`;

const SubMessage = styled.h2`
  font-size: 1.8rem;
  font-weight: normal;
  @media (max-width: 767px) {
    font-size: 1.2rem;
  }
`;

const LottieWrapper = styled.div`
  width: 50%;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export default Home;
