import { Flex, Stack, Text, Textarea } from "@chakra-ui/react";
import { ActionButton } from "./ActionButton";
import { ResultCard } from "./ResultCard";
import { getWatermarksWithStatus } from "../watermark";
import { toaster } from "./ui/toaster";
import { useState } from "react";

export function DecodePage() {
  const [text, setText] = useState("");
  const [results, setResults] = useState(null);

  const handleDecode = () => {
    if (!text.trim()) {
      toaster.create({
        description: "Input watermarked text first",
        duration: 5000,
      });
      return;
    }

    const { decodedWatermarks, status } = getWatermarksWithStatus(text);
    setResults({ decodedWatermarks, status });

    if (status.valid === 0 && status.invalid === 0) {
      toaster.create({
        description: "No watermarks found",
        duration: 5000,
      });
    } else if (status.valid === 1) {
      toaster.create({
        description: "Watermark decoded!",
        duration: 3000,
      });
    } else if (status.valid > 1) {
      toaster.create({
        description: "Multiple watermarks found",
        duration: 5000,
      });
    }

    if (status.invalid > 0) {
      toaster.create({
        description: "Some watermarks couldn't be decoded",
        duration: 5000,
      });
    }
  };

  return (
    <Stack direction="column" gap={{ base: 2, lg: 6 }}>
      <Text textWrap="balance" fontSize="xl" textAlign="center">
        Decode hidden watermark messages from writing to prove its origin.
      </Text>

      <Stack direction={{ base: "column", lg: "row" }} gap={{ base: 2, lg: 6 }}>
        <Flex flex="1" direction="column" gap={2}>
          <Flex justify="space-between" alignItems="center">
            <Text paddingLeft={4} fontWeight="bold" fontSize="lg" userSelect="none">
              Text to Decode
            </Text>
            <ActionButton
              visibility={{ base: "hidden", lg: "visible" }}
              width={{ base: "0", lg: "auto" }}
              overflow="clip"
              onClick={handleDecode}
            >
              Decode Watermark
            </ActionButton>
          </Flex>
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste text with watermark here ..."
            size="lg"
            minH="10lh"
            resize="none"
            borderTopLeftRadius="3xl"
            borderBottomLeftRadius="3xl"
            scrollbarGutter="stable"
          />
        </Flex>

        <Flex flex="1" direction="column" gap={2}>
          <Flex justify="space-between" alignItems="center">
            <ActionButton display={{ base: "block", lg: "none" }} onClick={handleDecode}>
              Decode Watermark
            </ActionButton>
            <Text paddingLeft={{ base: "0", lg: 4 }} fontWeight="bold" fontSize="lg" userSelect="none">
              Results
            </Text>
            <ActionButton display={{ base: "none", lg: "block" }} visibility="hidden" width="0" overflow="clip">
              Decode Watermark
            </ActionButton>
          </Flex>

          <Stack direction="column" gap={2}>
            {!results?.decodedWatermarks?.length ? (
              <Text textAlign="center" color="fg.subtle" textWrap="balance">
                No watermarks found. Try decoding some text...
              </Text>
            ) : (
              results.decodedWatermarks.map((message, index) => (
                <ResultCard
                  key={index}
                  index={index + 1}
                  message={message}
                />
              ))
            )}
          </Stack>
        </Flex>
      </Stack>
    </Stack>
  );
}

export default DecodePage;
