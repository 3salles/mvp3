import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import useStudentContext from "../../hooks/useStudentContext";
import { ChangeEvent } from "react";

export default function CurricularFirstGradeInput() {
  const { student, updateStudent } = useStudentContext();

  const onChange = (evt: ChangeEvent<HTMLInputElement>) =>
    updateStudent({
      ...student,
      curricular_units_1st_sem_grade: Number(
        evt.target.value.replace(",", ".")
      ),
    });

  return (
    <FormControl>
      <FormLabel>Média de notas do 1º sem</FormLabel>
      <Input type="number" borderColor="black" onChange={onChange} />
    </FormControl>
  );
}
