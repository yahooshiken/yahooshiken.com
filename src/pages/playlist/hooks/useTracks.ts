import { useEffect, useState } from "react";

import httpClient from "../../../httpClient";

type Artist = {
  id: string;
  name: string;
};

type Album = {
  id: string;
  name: string;
  album_type: string;
  artists: Artist[];
  images: { width: number; height: number; url: string }[];
};

export type Track = {
  id: string;
  track_number?: number;
  name: string;
  href: string;
  album: Album;
  artists: Artist[];
  disc_number: number;
  duration_ms: number;
  duration?: string;
  preview_url: string;
};

type TracksResponse = {
  tracks: Track[];
};

const useTrack = (
  playlistId: string
): { loading: boolean; tracks: Track[] } => {
  const [loading, setLoading] = useState(false);
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    setLoading(true);

    const fetchTracks = async () => {
      if (!playlistId) {
        return;
      }

      try {
        const res = await httpClient.get<TracksResponse>(
          `/v1/playlists/${playlistId}/tracks`
        );
        setTracks(res.data.tracks);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTracks().catch((e) => {
      console.error(e);
    });
  }, [playlistId]);

  return { loading, tracks };
};

export default useTrack;
