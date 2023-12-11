import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function InflationRateInput() {
  return (
    <FormControl>
      <FormLabel>Taxa de inflação</FormLabel>
      <Input type="number" borderColor="black" />
    </FormControl>
  );
}
