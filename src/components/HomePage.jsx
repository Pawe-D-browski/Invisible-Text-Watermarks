import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

import { Stack, Text, Highlight } from "@chakra-ui/react";
import { FAQ } from "./FAQ";
import { MediaPlayer, MediaProvider, Poster, Track } from "@vidstack/react";
import { defaultLayoutIcons, DefaultVideoLayout } from "@vidstack/react/player/layouts/default";

export function HomePage() {
  return (
    <Stack direction="column" gap={6}>
      <Text textWrap="balance" fontSize="xl" textAlign="center">
        Welcome to{" "}
        <Highlight styles={{ color: "purple.fg", fontWeight: "bold" }} query="Invisible Text Watermarks,">
          Invisible Text Watermarks,
        </Highlight>{" "}
        a free tool to protect your writing against copyright theft.
      </Text>
      <MediaPlayer
        playsInline
        viewType="video"
        streamType="on-demand"
        title="Invisible Text Watermarks Showcase"
        src="/Invisible-Text-Watermarks/Invisible_Text_Watermarks_showcase.mp4"
        poster="/Invisible-Text-Watermarks/Invisible_Text_Watermarks_showcase_thumbnail.webp"
        className="player"
        style={{ backgroundColor: "var(--chakra-colors-bg-emphasized)" }}
      >
        <Poster className="vds-poster" />
        <Track
          src="/Invisible-Text-Watermarks/Invisible_Text_Watermarks_showcase_subtitles.vtt"
          kind="subtitles"
          label="English"
          lang="en-US"
          default
        />
        <MediaProvider />
        <DefaultVideoLayout icons={defaultLayoutIcons} />
      </MediaPlayer>
      <FAQ />
    </Stack>
  );
}

export default HomePage;
