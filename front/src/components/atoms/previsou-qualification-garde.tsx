import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function PreviosQualificationGradeInput() {
  return (
    <FormControl>
      <FormLabel>Nota de Aprovação da Escolaridade Anterior</FormLabel>
      <Input type="number" borderColor="black" />
    </FormControl>
  );
}
