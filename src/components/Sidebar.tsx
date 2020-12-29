import React, { FC, useState } from "react";
import ReactSidebar from "react-sidebar";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { ListItem } from "ui-neumorphism";

import Header from "./Header";

const Sidebar: FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const listItems = [
    { path: "/", title: "Home" },
    { path: "/1", title: "to 1" },
    { path: "/2", title: "to 2" },
    { path: "/3", title: "to 3" },
  ];

  return (
    <ReactSidebar
      sidebar={
        <SidebarWrapper>
          {listItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <ListItem
                active={location.pathname === item.path}
                title={item.title}
              />
            </Link>
          ))}
        </SidebarWrapper>
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

const ButtonWrapper = styled.div``;

const SidebarWrapper = styled.div`
  width: 240px;
`;

export default Sidebar;
