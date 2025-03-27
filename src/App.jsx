import { Stack } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <Stack gap={6} padding={{ base: 4, sm: 8 }} minH="100vh">
      <Header />
      <Navigation />
    </Stack>
  );
}

export default App;
