import { Container, Icon, Tabs, Text } from "@chakra-ui/react";
import { BsDropletHalf, BsUpcScan, BsHouseFill } from "react-icons/bs";
import { HomePage } from "./HomePage";
import { ApplyPage } from "./ApplyPage";
import { DecodePage } from "./DecodePage";

export function Navigation() {
  return (
    <Container maxW="container.xl">
      <Tabs.Root variant="enclosed" defaultValue="home" fitted activationMode="manual">
        <Tabs.List borderRadius="4xl" justify="center">
          <Tabs.Trigger borderRadius="4xl" value="home">
            <Icon width={5} height={5}>
              <BsHouseFill size="100%" />
            </Icon>
            <Text fontSize="md">Home</Text>
          </Tabs.Trigger>
          <Tabs.Trigger borderRadius="4xl" value="apply">
            <Icon width={5} height={5}>
              <BsDropletHalf size="100%" />
            </Icon>
            <Text fontSize="md">Apply</Text>
          </Tabs.Trigger>
          <Tabs.Trigger borderRadius="4xl" value="decode">
            <Icon width={5} height={5}>
              <BsUpcScan size="100%" />
            </Icon>
            <Text fontSize="md">Decode</Text>
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="home" paddingTop="6">
          <HomePage />
        </Tabs.Content>
        <Tabs.Content value="apply" paddingTop="6">
          <ApplyPage />
        </Tabs.Content>
        <Tabs.Content value="decode" paddingTop="6">
          <DecodePage />
        </Tabs.Content>
      </Tabs.Root>
    </Container>
  );
}

export default Navigation;
