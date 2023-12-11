import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import occupations from "../occupations";
import { ChangeEvent } from "react";
import useStudentContext from "../../hooks/useStudentContext";

export default function MotherOccupationSelect() {
  const { student, updateStudent } = useStudentContext();

  const onChange = (evt: ChangeEvent<HTMLSelectElement>) =>
    updateStudent({
      ...student,
      mother_occupation: Number(evt.target.value),
    });

  return (
    <FormControl>
      <FormLabel>Profissão da Mãe</FormLabel>
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
