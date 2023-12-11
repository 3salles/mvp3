import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import useStudentContext from "../../hooks/useStudentContext";
import { ChangeEvent } from "react";

export default function OrderAdmissionInput() {
  const { student, updateStudent } = useStudentContext();

  const onChange = (evt: ChangeEvent<HTMLInputElement>) =>
    updateStudent({ ...student, application_order: Number(evt.target.value) });

  return (
    <FormControl>
      <FormLabel>Preferência do curso</FormLabel>
      <Input type="number" borderColor="black" onChange={onChange} />
    </FormControl>
  );
}
