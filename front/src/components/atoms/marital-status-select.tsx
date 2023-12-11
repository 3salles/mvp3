import { FormControl, FormLabel, Select } from "@chakra-ui/react";

const options = [
  { value: 1, label: "Solteiro" },
  { value: 2, label: "Casado" },
  { value: 3, label: "Viúvo" },
  { value: 4, label: "Divorciado" },
  { value: 5, label: "União Estável" },
  { value: 6, label: "Separado legalmente" },
];

export default function MaritalStatusSelect() {
  return (
    <FormControl>
      <FormLabel>Estado civil</FormLabel>
      <Select borderColor="black" placeholder="Selecione um estado civil">
        {options.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </Select>
    </FormControl>
  );
}
