import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import useStudentContext from "../../hooks/useStudentContext";

export default function InflationRateInput() {
  const { student, updateStudent } = useStudentContext();

  const onChange = (evt: ChangeEvent<HTMLInputElement>) =>
    updateStudent({
      ...student,
      inflation_rate: Number(evt.target.value.replace(",", ".")),
    });

  return (
    <FormControl>
      <FormLabel>Taxa de inflação</FormLabel>
      <Input type="number" borderColor="black" onChange={onChange} />
    </FormControl>
  );
}
