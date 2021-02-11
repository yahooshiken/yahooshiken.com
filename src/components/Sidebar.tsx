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
        { path: "/p5_gallery/balloon", title: "Balloon" },
        { path: "/p5_gallery/wave_clock", title: "Wave Clock" },
        { path: "/p5_gallery/round", title: "Round and Round" },
      ],
    },
    {
      path: "/three_gallery",
      title: "Three.js Gallery",
      childRoutes: [{ path: "/three_gallery/box", title: "Box" }],
    },
    {
      path: "/ar_showcase",
      title: "AR Showcase",
      childRoutes: [{ path: "/ar_showcase/cesium_man", title: "Cesium Man" }],
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
