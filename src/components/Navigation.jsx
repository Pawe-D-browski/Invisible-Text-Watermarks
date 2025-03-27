import { Box, Container, Stack, Tabs, Text } from "@chakra-ui/react";
import { BsDropletHalf, BsUpcScan, BsInfoCircle } from "react-icons/bs";
import { FAQ } from "./FAQ";

export function Navigation() {
  return (
    <Container maxW="container.xl">
      <Tabs.Root defaultValue="about" fitted activationMode="manual">
        <Tabs.List justify="center">
          <Tabs.Trigger value="apply" px="0" paddingBottom={{ base: 4, md: 2 }}>
            <Box boxSize={4}>
              <BsDropletHalf size="100%" />
            </Box>
            <Stack direction={{ base: "column", md: "row" }} gap={{ base: "sm", md: "1" }} align="center">
              <Text userSelect="none">Apply</Text>
              <Text userSelect="none">Watermark</Text>
            </Stack>
          </Tabs.Trigger>
          <Tabs.Trigger value="decode" px="0" paddingBottom={{ base: 4, md: 2 }}>
            <Box boxSize={4}>
              <BsUpcScan size="100%" />
            </Box>
            <Stack direction={{ base: "column", md: "row" }} gap={{ base: "sm", md: "1" }} align="center">
              <Text userSelect="none">Decode</Text>
              <Text userSelect="none">Watermark</Text>
            </Stack>
          </Tabs.Trigger>
          <Tabs.Trigger value="about" px="0" paddingBottom={{ base: 4, md: 2 }}>
            <Box boxSize={4}>
              <BsInfoCircle size="100%" />
            </Box>
            About
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="apply">
          <Text fontSize="lg" textAlign="center">
            <Box paddingTop="2">Apply Watermark feature coming soon...</Box>
          </Text>
        </Tabs.Content>
        <Tabs.Content value="decode">
          <Text fontSize="lg" textAlign="center">
            <Box paddingTop="2">Decode Watermark feature coming soon...</Box>
          </Text>
        </Tabs.Content>
        <Tabs.Content value="about">
          <Box paddingTop="2">
            <FAQ />
          </Box>
        </Tabs.Content>
      </Tabs.Root>
    </Container>
  );
}
