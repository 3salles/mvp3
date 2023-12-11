import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function NameInput() {
  return (
    <FormControl>
      <FormLabel>Nome</FormLabel>
      <Input type="text" borderColor="black" />
    </FormControl>
  );
}
