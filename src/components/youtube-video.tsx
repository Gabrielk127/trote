"use client";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";

interface YoutubeVideoProps {
  video: string;
}

const YoutubeVideo = ({ video }: YoutubeVideoProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex justify-center items-center overflow-hidden rounded-2xl p-4">
      <div className="relative w-full max-w-[1000px] aspect-video rounded-xl overflow-hidden">
        <ReactPlayer
          url={video}
          playing={true}
          controls={true}
          width="100%"
          height="100%"
          style={{ borderRadius: "15px" }}
        />
      </div>
    </div>
  );
};

export default YoutubeVideo;
