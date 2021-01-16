import React, { FC, Fragment, useState } from "react";
import ReactSidebar from "react-sidebar";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { ListItem } from "ui-neumorphism";
import { ChevronUp, ChevronDown } from "react-feather";

import Header from "./Header";

type Route = {
  path: string;
  title: string;
  childRoutes?: { path: string; title: string }[];
};

const ExpandListItemWrapper = styled.div`
  cursor: pointer;
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 16px;
`;

const ExpandListItem: FC<{ item: Route }> = ({ item }) => {
  const [expand, setExpand] = useState(false);
  return (
    <ExpandListItemWrapper>
      <ListItem
        onClick={() => setExpand(!expand)}
        active={location.pathname === item.path}
        title={item.title}
      >
        <IconWrapper>{expand ? <ChevronUp /> : <ChevronDown />}</IconWrapper>
      </ListItem>
      {expand &&
        item.childRoutes &&
        item.childRoutes.map((childItem) => (
          <Link key={childItem.path} to={childItem.path}>
            <ListItem
              active={location.pathname === childItem.path}
              title={childItem.title}
              subtitle={item.title}
            />
          </Link>
        ))}
    </ExpandListItemWrapper>
  );
};

const TopListItem = (item: Route) => {
  const location = useLocation();

  if (item.childRoutes) {
    return (
      <Fragment key={item.path}>
        <ExpandListItem item={item} />
      </Fragment>
    );
  }

  return (
    <Link key={item.path} to={item.path}>
      <ListItem active={location.pathname === item.path} title={item.title} />
    </Link>
  );
};

const Sidebar: FC = ({ children }) => {
  const [open, setOpen] = useState(false);

  const listItems: Route[] = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/timeline", title: "Timeline" },
    {
      path: "/p5_gallery",
      title: "p5.js Gallery",
      childRoutes: [
        { path: "/p5_gallery/1", title: "to 1" },
        { path: "/p5_gallery/2", title: "to 2" },
        { path: "/p5_gallery/3", title: "to 3" },
        { path: "/p5_gallery/4", title: "to 4" },
        { path: "/p5_gallery/5", title: "to 5" },
        { path: "/p5_gallery/6", title: "to 6" },
      ],
    },
  ];

  return (
    <ReactSidebar
      sidebar={<SidebarWrapper>{listItems.map(TopListItem)}</SidebarWrapper>}
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
