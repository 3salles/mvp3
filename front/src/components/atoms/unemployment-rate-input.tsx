import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function UnemploymentRateInput() {
  return (
    <FormControl>
      <FormLabel>Taxa de desemprego</FormLabel>
      <Input type="number" borderColor="black" />
    </FormControl>
  );
}
