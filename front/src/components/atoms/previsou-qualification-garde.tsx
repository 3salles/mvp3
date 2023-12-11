import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import useStudentContext from "../../hooks/useStudentContext";

export default function PreviosQualificationGradeInput() {
  const { student, updateStudent } = useStudentContext();

  const onChange = (evt: ChangeEvent<HTMLInputElement>) =>
    updateStudent({
      ...student,
      previous_qualification_grade: Number(evt.target.value.replace(",", ".")),
    });

  return (
    <FormControl>
      <FormLabel>Nota de Aprovação da Escolaridade Anterior</FormLabel>
      <Input type="number" borderColor="black" onChange={onChange} />
    </FormControl>
  );
}
