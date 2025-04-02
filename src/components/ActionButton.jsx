import { Button, Icon, Stack, Text } from "@chakra-ui/react";
import { BsArrowRightCircleFill } from "react-icons/bs";

export function ActionButton({ children, onClick, ...props }) {
  return (
    <Button
      size="fit"
      paddingBlock={3}
      paddingRight={3}
      paddingLeft={4}
      borderRadius="4xl"
      onClick={onClick}
      _active={{
        backgroundColor: "color-mix(in srgb, var(--chakra-colors-color-palette-solid) 90%, transparent)",
        transform: "scale(0.95)",
      }}
      {...props}
    >
      <Stack direction="row" gap={2} alignItems="center">
        <Text fontSize="lg" fontWeight="bold" height="fit-content">
          {children}
        </Text>
        <Icon width={5} height={5}>
          <BsArrowRightCircleFill size="100%" />
        </Icon>
      </Stack>
    </Button>
  );
}

export default ActionButton;
