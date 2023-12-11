import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import useStudentContext from "../../hooks/useStudentContext";
import { ChangeEvent } from "react";

const options = [
  { value: 1, label: "Solteiro" },
  { value: 2, label: "Casado" },
  { value: 3, label: "Viúvo" },
  { value: 4, label: "Divorciado" },
  { value: 5, label: "União Estável" },
  { value: 6, label: "Separado legalmente" },
];

export default function MaritalStatusSelect() {
  const { student, updateStudent } = useStudentContext();

  const onChange = (evt: ChangeEvent<HTMLSelectElement>) =>
    updateStudent({ ...student, marital_status: Number(evt.target.value) });

  return (
    <FormControl>
      <FormLabel>Estado civil</FormLabel>
      <Select
        borderColor="black"
        placeholder="Selecione um estado civil"
        onChange={onChange}
      >
        {options.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </Select>
    </FormControl>
  );
}
