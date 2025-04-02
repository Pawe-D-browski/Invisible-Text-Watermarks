import { Stack, Heading, Text, Accordion } from "@chakra-ui/react";

const faqItems = [
  {
    title: "What are Invisible Text Watermarks?",
    content:
      "Invisible Text Watermarks are a way to prove ownership of your digital articles, blog posts, e-books, and other writing if somebody copies them without your permission." +
      "\nAll while staying completely invisible to the readers.",
  },
  {
    title: "Are Invisible Text Watermarks the same as regular watermarks?",
    content:
      "No, Invisible Text Watermarks can only be applied to text and not images; unlike regular watermarks, they aren't visible to the viewer or reader.",
  },
  {
    title: "How do Invisible Text Watermarks work?",
    content:
      "Invisible Text Watermarks encode a message of your choice into special invisible characters inserted throughout the text." +
      "\nThese characters are not visible when your writing is displayed but can be detected through special analysis." +
      "\nThis allows your message to be retrieved from any unauthorized copies of your text.",
  },
  {
    title: "How much does this cost?",
    content: "Invisible Text Watermarks are completely free to use.",
  },
  {
    title: "How do I apply an Invisible Watermark?",
    content:
      "To apply a watermark, simply go to the 'Apply' tab, paste your text, write your watermark message, and click the 'Apply' button.",
  },
  {
    title: "How do I decode an Invisible Watermark from text?",
    content:
      "To read a watermark, go to the 'Decode' tab, paste a text, and click the 'Decode' button." +
      "\nThe watermark message will be displayed if the text contains a watermark.",
  },
  {
    title: "Are these watermarks permanent?",
    content:
      "The watermarks are designed to be permanent; they survive copying, pasting, editing, and deleting of parts of the text." +
      "\nHowever, they don't survive certain websites that will remove invisible characters, screenshotting, or printing.",
  },
  {
    title: "Can somebody find and remove the watermark?",
    content:
      "In an unlikely scenario, someone can find the watermark by noticing the invisible characters." +
      "\nIf they decide to go through the entire text and remove all invisible characters, they will be able to remove the watermark." +
      "\nIt is very improbable, but somebody may also be able to read or change your watermark message if they notice it and use this website.",
  },
  {
    title: "Can the watermarks protect my text from being used for AI training?",
    content:
      "Maybe, but likely the effect is small, if any." +
      "\nThe watermarks haven't been designed for this purpose, and while training specifically has not been tested, AI models seem not to have any problems understanding text with watermarks.",
  },
  {
    title: "Is the writing I input being sent to you for processing?",
    content:
      "No, both applying and decoding watermarks is done entirely on your device." +
      "\nOnly you can see your writing.",
  },
];

export function FAQ() {
  return (
    <Stack gap={4}>
      <Heading size="xl" userSelect="none" paddingLeft={4}>
        Frequently Asked Questions
      </Heading>
      <Accordion.Root borderRadius="3xl" collapsible variant="enclosed">
        {faqItems.map((item, index) => (
          <Accordion.Item borderRadius="3xl" key={index} value={`item-${index}`}>
            <Accordion.ItemTrigger cursor="pointer">
              <Text flex="1" fontSize="lg">
                {item.title}
              </Text>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>
                <Text whiteSpace="pre-line">{item.content}</Text>
              </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Stack>
  );
}

export default FAQ;
