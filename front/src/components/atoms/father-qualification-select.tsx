import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import qualifications from "../qualifications";

export default function FatherQualificationSelect() {
  return (
    <FormControl>
      <FormLabel>Escolaridade do Pai</FormLabel>
      <Select borderColor="black" placeholder="Selecione um nível de ensino">
        {qualifications.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </Select>
    </FormControl>
  );
}
