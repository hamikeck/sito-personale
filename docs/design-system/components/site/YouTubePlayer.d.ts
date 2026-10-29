import React from "react";

/** Player YouTube "leggero" in cornice brand: miniatura + Play terracotta 64px, iframe youtube-nocookie al click. */
export interface YouTubePlayerProps {
  /** id video YouTube */
  id?: string;
  titolo: string;
  /** override della miniatura (default i.ytimg.com maxresdefault) */
  miniatura?: string;
  style?: React.CSSProperties;
}
export declare function YouTubePlayer(props: YouTubePlayerProps): JSX.Element;
