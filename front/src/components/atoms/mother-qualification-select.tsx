import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import qualifications from "../qualifications";
import useStudentContext from "../../hooks/useStudentContext";
import { ChangeEvent } from "react";

export default function MotherQualificationSelect() {
  const { student, updateStudent } = useStudentContext();

  const onChange = (evt: ChangeEvent<HTMLSelectElement>) =>
    updateStudent({
      ...student,
      mother_qualification: Number(evt.target.value),
    });

  return (
    <FormControl>
      <FormLabel>Escolaridade da Mãe</FormLabel>
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
