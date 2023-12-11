import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import qualifications from "../qualifications";

export default function MotherQualificationSelect() {
  return (
    <FormControl>
      <FormLabel>Escolaridade da Mãe</FormLabel>
      <Select borderColor="black" placeholder="Selecione um nível de ensino">
        {qualifications.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </Select>
    </FormControl>
  );
}
