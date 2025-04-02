import { Stack } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <Stack colorPalette="purple" gap={6} paddingBlock={6} minH="100vh">
      <Header />
      <Navigation />
      <Footer />
      <Toaster />
    </Stack>
  );
}

export default App;
