import { FormControl, FormLabel, HStack, Radio } from "@chakra-ui/react";

const options = [
  { value: 0, label: "Feminino" },
  { value: 1, label: "Masculino" },
];

export default function GenderRadios() {
  return (
    <FormControl>
      <FormLabel>Gênero</FormLabel>
      <HStack>
        {options.map((item) => (
          <Radio borderColor="black" value={`${item.value}`}>
            {item.label}
          </Radio>
        ))}
      </HStack>
    </FormControl>
  );
}
