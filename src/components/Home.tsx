import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Lottie, { Options } from "react-lottie";

const Home: FC = () => {
  const [animationData, setAnimationData] = useState(undefined);
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
