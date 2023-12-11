import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function AgeInput() {
  return (
    <FormControl>
      <FormLabel>Idade</FormLabel>
      <Input type="number" borderColor="black" />
    </FormControl>
  );
}
