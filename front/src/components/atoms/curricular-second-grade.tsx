import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function CurricularSecondGradeInput() {
  return (
    <FormControl>
      <FormLabel>Média de notas do 2º sem</FormLabel>
      <Input type="number" borderColor="black" />
    </FormControl>
  );
}
