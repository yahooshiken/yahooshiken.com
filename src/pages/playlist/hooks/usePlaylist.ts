import { useEffect, useState } from "react";

import httpClient from "../../../httpClient";

export type Playlist = {
  id: string;
  description: string;
  name: string;
  public: boolean;
  owner: {
    id: string;
    display_name: string;
    href: string;
  };
  tracks: {
    href: string;
    total: number;
  };
  images: { width: number; height: number; url: string }[];
};

export const initialPlaylist: Playlist = {
  id: "",
  description: "",
  name: "",
  public: false,
  owner: {
    id: "",
    display_name: "",
    href: "",
  },
  tracks: {
    href: "",
    total: 0,
  },
  images: [],
};

type PlaylistsResponse = {
  playlists: Playlist[];
};

const usePlaylist = (): { loading: boolean; playlists: Playlist[] } => {
  const [loading, setLoading] = useState(false);
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  useEffect(() => {
    setLoading(true);

    const fetchPlaylists = async () => {
      try {
        const res = await httpClient.get<PlaylistsResponse>("/v1/playlists");
        setPlaylists(res.data.playlists);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPlaylists().catch((e) => {
      console.error(e);
    });
  }, []);

  return { loading, playlists };
};

export default usePlaylist;
