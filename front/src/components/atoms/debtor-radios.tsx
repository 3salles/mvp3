import { FormControl, FormLabel, HStack, Radio } from "@chakra-ui/react";

const options = [
  { value: 0, label: "Não" },
  { value: 1, label: "Sim" },
];

export default function DebtorRadios() {
  return (
    <FormControl>
      <FormLabel>Devedor</FormLabel>
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
