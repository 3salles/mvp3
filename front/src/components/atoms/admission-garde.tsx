import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function AdmissionGrade() {
  return (
    <FormControl>
      <FormLabel>Nota da Aprovação</FormLabel>
      <Input type="number" borderColor="black" />
    </FormControl>
  );
}
