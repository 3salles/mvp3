import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import useStudentContext from "../../hooks/useStudentContext";

export default function AgeInput() {
  const { student, updateStudent } = useStudentContext();

  const onChange = (evt: ChangeEvent<HTMLInputElement>) =>
    updateStudent({ ...student, age_at_enrollment: Number(evt.target.value) });

  return (
    <FormControl>
      <FormLabel>Idade</FormLabel>
      <Input type="number" borderColor="black" onChange={onChange} />
    </FormControl>
  );
}
