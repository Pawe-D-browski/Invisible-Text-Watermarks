import { Box, Container, Flex, Text, Link } from "@chakra-ui/react";
import { version } from "../../package.json";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box mt="auto">
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center" direction={{ base: "column", lg: "row" }} gap={2}>
          <Text
            color="fg.subtle"
            fontSize="sm"
            textAlign="center"
            textWrap="balance"
            display={{ base: "block", lg: "none" }}
          >
            No cookies, no tracking, no ads, no data collection.
          </Text>
          <Link
            flex="1"
            href="https://github.com/Pawe-D-browski"
            target="_blank"
            rel="noopener noreferrer"
            userSelect="none"
            outline="none"
          >
            <Text color="fg.subtle" fontSize="sm">
              Copyright © {currentYear} Paweł Dąbrowski
            </Text>
          </Link>
          <Text
            color="fg.subtle"
            fontSize="sm"
            textAlign="center"
            textWrap="balance"
            display={{ base: "none", lg: "block" }}
          >
            No cookies, no tracking, no ads, no data collection.
          </Text>
          <Text flex="1" color="fg.subtle" fontSize="sm" textAlign="right">
            v{version}
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
