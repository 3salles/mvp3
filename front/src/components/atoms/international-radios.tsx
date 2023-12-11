import {
  FormControl,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import useStudentContext from "../../hooks/useStudentContext";

const options = [
  { value: 0, label: "Não" },
  { value: 1, label: "Sim" },
];

export default function InternationalRadios() {
  const { student, updateStudent } = useStudentContext();

  const onChange = (value: string) =>
    updateStudent({ ...student, international: Number(value) });

  return (
    <FormControl>
      <FormLabel>Estrangeiro</FormLabel>
      <RadioGroup onChange={onChange}>
        <HStack>
          {options.map((item) => (
            <Radio borderColor="black" value={`${item.value}`}>
              {item.label}
            </Radio>
          ))}
        </HStack>
      </RadioGroup>
    </FormControl>
  );
}
