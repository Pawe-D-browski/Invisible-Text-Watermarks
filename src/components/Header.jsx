import { Box, Container, Flex, Heading, Stack, Image, Text, Card } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";

export function Header() {
  return (
    <Container maxW="full">
      <Flex as="header" justify="center" align="center">
        <Box flex="1" />
        <Card.Root borderRadius="3xl" variant="subtle">
          <Card.Body p={4}>
            <Stack direction="row" gap={4} align="center">
              <Image src="./Invisible-Text-Watermarks/logo.svg" alt="Logo" boxSize="12" />
              <Box>
                <Heading size="2xl" textAlign="center">
                  <Stack direction={{ base: "column", md: "row" }} gap={{ base: 0, md: 2 }} align="center">
                    <Stack direction="row" gap={2} align="center">
                      <Text userSelect="none">Invisible</Text>
                      <Text userSelect="none">Text</Text>
                    </Stack>
                    <Text userSelect="none">Watermarks</Text>
                  </Stack>
                </Heading>
              </Box>
            </Stack>
          </Card.Body>
        </Card.Root>
        {/* </Flex> */}
        <Flex flex="1" justify="flex-end">
          <ColorModeButton
            borderRadius="4xl"
            _active={{
              bg: "purple.subtle",
              transform: "scale(0.9)",
            }}
          />
        </Flex>
      </Flex>
    </Container>
  );
}

export default Header;
