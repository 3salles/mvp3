import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function OrderAdmissionInput() {
  return (
    <FormControl>
      <FormLabel>Posição da Aprovação</FormLabel>
      <Input type="number" borderColor="black" />
    </FormControl>
  );
}
