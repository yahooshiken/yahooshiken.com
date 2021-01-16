import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import {
  Avatar,
  Card,
  H5,
  H6,
  Subtitle1,
  CardContent,
  CardHeader,
  CardMedia,
  Body2,
  Checkbox,
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
  margin-bottom: 24px;
`;

const TimelineWrapper = styled.div`
  width: 100%;
  padding: 0 1rem 1rem;
`;

const Body = styled(Body2)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
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
          title={<H6>{article.title}</H6>}
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

  const [events, setEvents] = useState<Article[]>([]);
  const [qiitaArticles, setQiitaArticles] = useState<Article[]>([]);
  const [noteArticles, setNoteArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchQiitaArticles = async () => {
      const result = await httpClient.get<ArticleResponse>(
        "/v1/activities/qiita"
      );
      setQiitaArticles(result.data.articles);
    };

    const fetchNoteArticles = async () => {
      const result = await httpClient.get<ArticleResponse>(
        "/v1/activities/note"
      );
      setNoteArticles(result.data.articles);
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
      </Aside>
      <TimelineWrapper>{events.map(Article)}</TimelineWrapper>
    </PageWrapper>
  );
};

export default TimelinePage;
