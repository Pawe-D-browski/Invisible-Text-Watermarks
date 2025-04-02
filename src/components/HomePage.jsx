import { Stack, Text, Highlight } from "@chakra-ui/react";
import { FAQ } from "./FAQ";

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
      <FAQ />
    </Stack>
  );
}

export default HomePage;
