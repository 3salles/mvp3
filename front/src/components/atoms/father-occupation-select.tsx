import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import occupations from "../occupations";

export default function FatherOccupationSelect() {
  return (
    <FormControl>
      <FormLabel>Profissão do Pai</FormLabel>
      <Select borderColor="black" placeholder="Selecione uma profissão">
        {occupations.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </Select>
    </FormControl>
  );
}
