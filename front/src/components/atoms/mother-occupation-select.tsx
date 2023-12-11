import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import occupations from "../occupations";

export default function MotherOccupationSelect() {
  return (
    <FormControl>
      <FormLabel>Profissão da Mãe</FormLabel>
      <Select borderColor="black" placeholder="Selecione uma profissão">
        {occupations.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </Select>
    </FormControl>
  );
}
