import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import Lottie, { Options } from "react-lottie";
import {
  Avatar,
  Body1,
  Body2,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  H6,
  ProgressCircular,
  Subtitle1,
} from "ui-neumorphism";

import httpClient from "../httpClient";

const PageWrapper = styled.div`
  display: flex;
  max-width: 800px;
  margin: 0 auto;
`;

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 280px;
  height: 100%;
`;

const CardWrapper = styled.div`
  max-width: 560px;
  margin-bottom: 24px;
`;

const TimelineWrapper = styled.div`
  width: 100%;
  padding: 0 1rem 1rem;
`;

const ProgressWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const Body = styled(Body2)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

const LottieWrapper = styled.div`
  min-width: 60%;
  margin: 0 auto;
  text-align: center;
`;

const SERVICE_NAME = {
  Github: "Github",
  Qiita: "Qiita",
  Note: "Note",
  Twitter: "Twitter",
};

type ServiceName = keyof typeof SERVICE_NAME;

interface BaseResponse {
  service_name: ServiceName;
  summary: string;
}

interface User {
  id: number;
  user_name: string;
  display_name: string;
  avatar_url: string;
}

interface Article {
  id: number;
  url: string;
  title: string;
  created_at: string;
  body: string;
  image_url: string;
  tags: string[];
  user: User;
}

interface ArticleResponse extends BaseResponse {
  articles: Article[];
}

type ShowState = {
  [key in ServiceName]: boolean;
};

const Article = (article: Article) => (
  <a href={article.url} key={article.id} target="_blank">
    <CardWrapper>
      <Card bordered>
        <CardHeader
          title={
            <H6>
              <b>{article.title}</b>
            </H6>
          }
          subtitle={<Subtitle1>{article.created_at}</Subtitle1>}
          avatar={
            <Avatar
              src={article.user.avatar_url}
              alt={article.user.display_name}
            />
          }
        />
        <CardMedia dark src={article.image_url} />
        <CardContent>
          <Body>{article.body}</Body>
        </CardContent>
      </Card>
    </CardWrapper>
  </a>
);

const TimelinePage: FC = () => {
  const [show, setShow] = useState<ShowState>({
    Github: true,
    Qiita: true,
    Note: true,
    Twitter: true,
  });

  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState<Article[]>([]);
  const [qiitaArticles, setQiitaArticles] = useState<Article[]>([]);
  const [noteArticles, setNoteArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchQiitaArticles = async () => {
      setLoading(true);
      const result = await httpClient.get<ArticleResponse>(
        "/v1/activities/qiita"
      );
      setQiitaArticles(result.data.articles);
      setLoading(false);
    };

    const fetchNoteArticles = async () => {
      setLoading(true);
      const result = await httpClient.get<ArticleResponse>(
        "/v1/activities/note"
      );
      setNoteArticles(result.data.articles);
      setLoading(false);
    };

    fetchQiitaArticles().catch((e) => {
      console.error(e);
    });
    fetchNoteArticles().catch((e) => {
      console.error(e);
    });
  }, []);

  useEffect(() => {
    const items = [
      ...(show.Qiita ? qiitaArticles : []),
      ...(show.Note ? noteArticles : []),
    ];
    items.sort((a, b) =>
      moment(a.created_at).isBefore(b.created_at) ? 1 : -1
    );
    setEvents(items);
  }, [show, qiitaArticles, noteArticles]);

  const handleShow = (show: ShowState, serviceName: ServiceName) => {
    setShow({ ...show, [serviceName]: !show[serviceName] });
  };

  return (
    <PageWrapper>
      <Aside>
        <Checkbox
          label="note"
          checked={show.Note}
          color="var(--success)"
          onChange={() => handleShow(show, "Note")}
        />
        <Checkbox
          label="Qiita"
          checked={show.Qiita}
          color="var(--success)"
          onChange={() => handleShow(show, "Qiita")}
        />
        <Checkbox label="はてなブログ" disabled />
      </Aside>
      <TimelineWrapper>
        <Timeline loading={loading} events={events} />
      </TimelineWrapper>
    </PageWrapper>
  );
};

const Timeline: FC<{ loading: boolean; events: Article[] }> = ({
  loading,
  events,
}) => {
  const [animationData, setAnimationData] = useState(undefined);
  const lottieOptions: Options = { animationData };

  useEffect(() => {
    const lazyLoadJson = async () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data = await import("../lotties/koala.json");
      setAnimationData(data);
    };

    lazyLoadJson().catch((e) => console.error(e));
  }, []);

  if (loading) {
    return (
      <ProgressWrapper>
        <ProgressCircular indeterminate color="var(--primary)" />
      </ProgressWrapper>
    );
  }

  if (!events.length) {
    return (
      <LottieWrapper>
        <Lottie options={lottieOptions} />
        <Body1>Thank you for finding me!</Body1>
      </LottieWrapper>
    );
  }

  return events.map(Article);
};

export default TimelinePage;
