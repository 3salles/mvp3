import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import qualifications from "../qualifications";
import useStudentContext from "../../hooks/useStudentContext";
import { ChangeEvent } from "react";

export default function FatherQualificationSelect() {
  const { student, updateStudent } = useStudentContext();

  const onChange = (evt: ChangeEvent<HTMLSelectElement>) =>
    updateStudent({
      ...student,
      father_qualification: Number(evt.target.value),
    });

  return (
    <FormControl>
      <FormLabel>Escolaridade do Pai</FormLabel>
      <Select
        borderColor="black"
        placeholder="Selecione um nível de ensino"
        onChange={onChange}
      >
        {qualifications.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </Select>
    </FormControl>
  );
}
