import { Button, Card, Flex, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { BsCopy } from "react-icons/bs";
import { toaster } from "./ui/toaster";

export function ResultCard({ index, message }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);
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
    <Card.Root borderRadius="3xl" variant="subtle" padding={6} gap={4}>
      <Card.Header p="0">
        <Flex justify="space-between" alignItems="center">
          <Heading size="md">Watermark #{index}</Heading>
          <Button
            size="fit"
            paddingInline={3}
            paddingBlock={2}
            variant="solid"
            borderRadius="4xl"
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
        </Flex>
      </Card.Header>
      <Card.Body p="0">
        <Text>{message}</Text>
      </Card.Body>
    </Card.Root>
  );
}
