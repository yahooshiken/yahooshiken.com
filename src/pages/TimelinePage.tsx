import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Card, CardContent, Checkbox } from "ui-neumorphism";

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

const TimelineWrapper = styled.div`
  width: 100%;
  padding: 0 1rem 1rem;
`;

interface GithubActivity {
  id: string;
  actor: { id: number; login: string; url: string; avatar_url: string };
  repo: { id: number; name: string; url: string };
}

const TimelinePage: FC = () => {
  const [activities, setActivities] = useState<GithubActivity[]>([]);
  useEffect(() => {
    const fetchActivities = async () => {
      const result = await httpClient.get<GithubActivity[]>(
        "/v1/activities/github"
      );
      console.info(result.data);
      setActivities(result.data);
    };

    fetchActivities();
  }, []);
  return (
    <PageWrapper>
      <Aside>
        <Checkbox label="GitHub" />
        <Checkbox label="Twitter" />
        <Checkbox label="Facebook" />
        <Checkbox label="Qiita" />
        <Checkbox label="note" />
        <Checkbox label="はてなブログ" />
      </Aside>
      <TimelineWrapper>
        {activities.map((activity) => (
          <Card bordered key={activity.id}>
            <CardContent>{activity.id}</CardContent>
          </Card>
        ))}
      </TimelineWrapper>
    </PageWrapper>
  );
};

export default TimelinePage;
