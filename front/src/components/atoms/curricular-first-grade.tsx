import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function CurricularFirstGradeInput() {
  return (
    <FormControl>
      <FormLabel>Média de notas do 1º sem</FormLabel>
      <Input type="number" borderColor="black" />
    </FormControl>
  );
}
