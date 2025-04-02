import { Flex, Stack, Text, Textarea } from "@chakra-ui/react";
import { ActionButton } from "./ActionButton";
import { CopyButton } from "./CopyButton";
import { applyWatermark } from "../watermark";
import { toaster } from "./ui/toaster";
import { useState } from "react";

export function ApplyPage() {
  const [originalText, setOriginalText] = useState("");
  const [watermarkMessage, setWatermarkMessage] = useState("");
  const [output, setOutput] = useState("");

  const handleApply = () => {
    const trimmedText = originalText.trim();
    const trimmedWatermark = watermarkMessage.trim();

    if (!trimmedText) {
      toaster.create({
        description: "Input text first",
        duration: 5000,
      });
      return;
    }

    if (!trimmedWatermark) {
      toaster.create({
        description: "Input watermark message first",
        duration: 5000,
      });
      return;
    }

    try {
      const watermarkedText = applyWatermark(trimmedWatermark, trimmedText);
      setOutput(watermarkedText);
      toaster.create({
        description: "Watermark applied!",
        duration: 3000,
      });
    } catch (error) {
      toaster.create({
        description: "Failed to apply watermark",
        duration: 5000,
      });
    }
  };

  return (
    <Stack direction="column" gap={{ base: 2, lg: 6 }}>
      <Text textWrap="balance" fontSize="xl" textAlign="center">
        Protect your writing with invisible watermarks that can only be read by our decoder.
      </Text>

      <Stack direction={{ base: "column", lg: "row" }} gap={{ base: 2, lg: 6 }}>
        <Flex flex="1" direction="column" gap={2}>
          <Flex justify="space-between" alignItems="center">
            <Text paddingLeft={4} fontWeight="bold" fontSize="lg" userSelect="none">
              Original Text
            </Text>
            <ActionButton
              visibility={{ base: "hidden", lg: "visible" }}
              width={{ base: "0", lg: "auto" }}
              overflow="clip"
              onClick={handleApply}
            >
              Apply Watermark
            </ActionButton>
          </Flex>
          <Textarea
            value={originalText}
            onChange={(e) => setOriginalText(e.target.value)}
            placeholder="Enter your text here ..."
            size="lg"
            minH="10lh"
            resize="none"
            borderTopLeftRadius="3xl"
            borderBottomLeftRadius="3xl"
            scrollbarGutter="stable"
          />

          <Flex justify="space-between" alignItems="center">
            <Text paddingLeft={4} fontWeight="bold" fontSize="lg" userSelect="none">
              Watermark Message
            </Text>
            <ActionButton visibility="hidden" width="0" overflow="clip">
              Apply Watermark
            </ActionButton>
          </Flex>
          <Textarea
            value={watermarkMessage}
            onChange={(e) => setWatermarkMessage(e.target.value)}
            placeholder="Enter watermark message ..."
            size="lg"
            minH="5lh"
            resize="none"
            borderTopLeftRadius="3xl"
            borderBottomLeftRadius="3xl"
            scrollbarGutter="stable"
          />
        </Flex>

        <Flex flex="1" direction="column" gap={2}>
          <Flex justify="space-between" alignItems="center">
            <ActionButton display={{ base: "block", lg: "none" }} onClick={handleApply}>
              Apply Watermark
            </ActionButton>
            <Text paddingLeft={{ base: "0", lg: 4 }} fontWeight="bold" fontSize="lg" userSelect="none">
              Output
            </Text>
            <ActionButton display={{ base: "none", lg: "block" }} visibility="hidden" width="0" overflow="clip">
              Apply Watermark
            </ActionButton>
          </Flex>

          <Stack direction="column" gap={1}>
            <Textarea
              value={output}
              placeholder="Watermarked text will appear here ..."
              size="lg"
              minH="10lh"
              resize="none"
              borderTopLeftRadius="3xl"
              borderBottomLeftRadius="3xl"
              scrollbarGutter="stable"
              readOnly
            />
            <Flex justify="end" align="center" gap={1}>
              <CopyButton text={output} />
            </Flex>
          </Stack>
        </Flex>
      </Stack>
    </Stack>
  );
}

export default ApplyPage;
