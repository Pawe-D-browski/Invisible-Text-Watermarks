import { Box, Flex, Heading, Stack, Image, Text, Theme } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";

export function Header() {
  return (
    <Flex as="header" justify="center" align="center">
      <Box flex="1" />
      <Flex
        px={4}
        py={3}
        my={{ base: 1, sm: "0" }}
        backgroundColor="#250657"
        borderRadius="2xl"
        flexShrink="1"
        gap={4}
        align="center"
        justify="center"
      >
        <Image
          boxShadow={`0 0 20px #6610f2, 
             0 0 40px #6610f2, 
             0 0 60px #6610f2`}
          backgroundColor="#6610f2"
          borderRadius="25%"
          display="inline"
          src="./Invisible-Text-Watermarks/logo.svg"
          alt="Logo"
          boxSize="12"
        />
        <Box display="inline-block" textAlign="left">
          <Box display="inline" textAlign="center">
            <Heading size="2xl" textAlign="center">
              <Theme appearance="dark" backgroundColor="transparent">
                <Stack direction={{ base: "column", md: "row" }} gap={2} align="center">
                  <Stack direction="row" gap={2} align="center">
                    <Text userSelect="none">Invisible</Text>

                    <Text userSelect="none">Text</Text>
                  </Stack>
                  <Text userSelect="none">Watermarks</Text>
                </Stack>
              </Theme>
            </Heading>
          </Box>
        </Box>
      </Flex>
      <Flex flex="1" justify="flex-end">
        <ColorModeButton />
      </Flex>
    </Flex>
  );
}
