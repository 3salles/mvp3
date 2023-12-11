import { Box, Heading } from "@chakra-ui/react";
import Form from "./components/organims/form";

function App() {
  return (
    <Box bg="gray.200" h="100dvh">
      <Heading bg="teal" color="white" textAlign="center" px="2" py="4">
        Cadastro de Estudante
      </Heading>
      <Form />
    </Box>
  );
}

export default App;
