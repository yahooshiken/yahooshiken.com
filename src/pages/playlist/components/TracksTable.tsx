import React, { FC } from "react";
import styled from "styled-components";
import { Clock } from "react-feather";

const tracks = [
  { id: 1, title: "愛のレンタル", album: "MUSIC", duration: "3:00" },
  { id: 2, title: "SHAKE! SHAKE!", album: "MUSIC", duration: "4:00" },
  { id: 3, title: "愛のレンタル", album: "MUSIC", duration: "3:00" },
  { id: 4, title: "SHAKE! SHAKE!", album: "MUSIC", duration: "4:00" },
  { id: 5, title: "愛のレンタル", album: "MUSIC", duration: "3:00" },
  { id: 6, title: "SHAKE! SHAKE!", album: "MUSIC", duration: "4:00" },
  { id: 7, title: "愛のレンタル", album: "MUSIC", duration: "3:00" },
  { id: 8, title: "SHAKE! SHAKE!", album: "MUSIC", duration: "4:00" },
  { id: 9, title: "愛のレンタル", album: "MUSIC", duration: "3:00" },
  { id: 10, title: "SHAKE! SHAKE!", album: "MUSIC", duration: "4:00" },
  { id: 11, title: "愛のレンタル", album: "MUSIC", duration: "3:00" },
  { id: 12, title: "SHAKE! SHAKE!", album: "MUSIC", duration: "4:00" },
];

const TracksTable: FC = () => {
  return (
    <Table>
      <THead>
        <TRow>
          <th>#</th>
          <th>TITLE</th>
          <th>ALBUM</th>
          <th>
            <Clock size={24} />
          </th>
        </TRow>
      </THead>
      <TBody>
        {tracks.map((t) => (
          <TRow>
            <td>{t.id}</td>
            <td>{t.title}</td>
            <td>{t.album}</td>
            <td>{t.duration}</td>
          </TRow>
        ))}
      </TBody>
    </Table>
  );
};

const Table = styled.table`
  width: 100%;
`;

const THead = styled.thead`
  color: white;
  text-align: left;
`;

const TBody = styled.tbody`
  color: white;
`;

const TRow = styled.tr`
  height: 3.75rem;
`;

export default TracksTable;
