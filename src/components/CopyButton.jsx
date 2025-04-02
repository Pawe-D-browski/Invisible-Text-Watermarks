import { Button, Icon, Stack, Text } from "@chakra-ui/react";
import { BsCopy } from "react-icons/bs";
import { toaster } from "./ui/toaster";

export function CopyButton({ text }) {
  const handleCopy = async () => {
    if (!text) {
      toaster.create({
        description: "Nothing to copy",
        duration: 5000,
      });
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      toaster.create({
        description: "Copied!",
        duration: 3000,
      });
    } catch (err) {
      toaster.create({
        description: "Failed to copy text",
        duration: 5000,
      });
    }
  };

  return (
    <Button
      size="fit"
      paddingInline={3}
      paddingBottom={3}
      paddingTop={2}
      borderBottomLeftRadius="3xl"
      borderBottomRightRadius="3xl"
      _active={{
        backgroundColor: "color-mix(in srgb, var(--chakra-colors-color-palette-solid) 90%, transparent)",
        transform: "scale(0.9)",
      }}
      onClick={handleCopy}
    >
      <Stack direction="row" gap={2} alignItems="center">
        <Text fontSize="md" fontWeight="bold">
          Copy
        </Text>
        <Icon width={4} height={4}>
          <BsCopy size="100%" />
        </Icon>
      </Stack>
    </Button>
  );
}

export default CopyButton;
