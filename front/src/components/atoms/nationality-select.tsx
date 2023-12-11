import { FormControl, FormLabel, Select } from "@chakra-ui/react";

const options = [
  { value: 1, label: "Português" },
  { value: 2, label: "Alemão" },
  { value: 6, label: "Espanhol" },
  { value: 11, label: "Italiano" },
  { value: 13, label: "Holandês" },
  { value: 14, label: "Inglês" },
  { value: 17, label: "Lituano" },
  { value: 21, label: "Angolano" },
  { value: 22, label: "Cabo-verdiano" },
  { value: 24, label: "Guineense" },
  { value: 25, label: "Moçambicano" },
  { value: 26, label: "Santomense" },
  { value: 32, label: "Turco" },
  { value: 41, label: "Brasileiro" },
  { value: 62, label: "Romeno" },
  { value: 100, label: "Moldavo (República de)" },
  { value: 101, label: "Mexicano" },
  { value: 103, label: "Ucraniano" },
  { value: 105, label: "Russo" },
  { value: 108, label: "Cubano" },
  { value: 109, label: "Colombiano" },
];

export default function NationalitySelect() {
  return (
    <FormControl>
      <FormLabel>Nacionalidade</FormLabel>
      <Select borderColor="black" placeholder="Selecione uma nacionalidade">
        {options.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </Select>
    </FormControl>
  );
}
