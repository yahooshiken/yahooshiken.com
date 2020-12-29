import React, { FC, useState } from "react";
import ReactSidebar from "react-sidebar";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";

const ButtonWrapper = styled.div``;

const Sidebar: FC = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <ReactSidebar
      sidebar={
        <ul>
          <li>
            <Link to="/">to Home</Link>
          </li>
          <li>
            <Link to="/1">to 1</Link>
          </li>
          <li>
            <Link to="/2">to 2</Link>
          </li>
          <li>
            <Link to="/3">to 3</Link>
          </li>
        </ul>
      }
      open={open}
      onSetOpen={setOpen}
      styles={{ sidebar: { background: "white" } }}
    >
      <ButtonWrapper>
        <Header handleOpen={() => setOpen(true)} />
        {children}
      </ButtonWrapper>
    </ReactSidebar>
  );
};

export default Sidebar;
