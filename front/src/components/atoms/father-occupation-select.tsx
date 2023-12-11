import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import occupations from "../occupations";
import useStudentContext from "../../hooks/useStudentContext";
import { ChangeEvent } from "react";

export default function FatherOccupationSelect() {
  const { student, updateStudent } = useStudentContext();

  const onChange = (evt: ChangeEvent<HTMLSelectElement>) =>
    updateStudent({
      ...student,
      father_occupation: Number(evt.target.value),
    });

  return (
    <FormControl>
      <FormLabel>Profissão do Pai</FormLabel>
      <Select
        borderColor="black"
        placeholder="Selecione uma profissão"
        onChange={onChange}
      >
        {occupations.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </Select>
    </FormControl>
  );
}
