import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import useStudentContext from "../../hooks/useStudentContext";
import { ChangeEvent } from "react";

export default function UnemploymentRateInput() {
  const { student, updateStudent } = useStudentContext();

  const onChange = (evt: ChangeEvent<HTMLInputElement>) =>
    updateStudent({
      ...student,
      unemployment_rate: Number(evt.target.value.replace(",", ".")),
    });

  return (
    <FormControl>
      <FormLabel>Taxa de desemprego</FormLabel>
      <Input type="number" borderColor="black" onChange={onChange} />
    </FormControl>
  );
}
