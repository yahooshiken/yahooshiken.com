import React, { useState } from "react";
import ReactSidebar from "react-sidebar";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonWrapper = styled.div``;

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <ReactSidebar
      sidebar={
        <b>
          Sidebar content
          <Link to="/1">to 1</Link>
        </b>
      }
      open={open}
      onSetOpen={setOpen}
      styles={{ sidebar: { background: "white" } }}
    >
      <ButtonWrapper>
        <button onClick={() => setOpen(true)}>Open sidebar</button>
      </ButtonWrapper>
    </ReactSidebar>
  );
};

export default Sidebar;
