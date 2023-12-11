import { FormControl, FormLabel, HStack, Radio } from "@chakra-ui/react";

const options = [
  { value: 0, label: "Diurno" },
  { value: 1, label: "Noturno" },
];

export default function DaytimeAttendanceRadios() {
  return (
    <FormControl>
      <FormLabel>Horário do curso</FormLabel>
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
