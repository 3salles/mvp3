import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import useStudentContext from "../../hooks/useStudentContext";
import { ChangeEvent } from "react";

export default function AdmissionGrade() {
  const { student, updateStudent } = useStudentContext();

  const onChange = (evt: ChangeEvent<HTMLInputElement>) =>
    updateStudent({
      ...student,
      previous_qualification_grade: Number(evt.target.value.replace(",", ".")),
    });

  return (
    <FormControl>
      <FormLabel>Nota da Aprovação</FormLabel>
      <Input type="number" borderColor="black" onChange={onChange} />
    </FormControl>
  );
}
