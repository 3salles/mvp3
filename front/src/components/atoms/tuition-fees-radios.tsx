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

export default function TuitionFeesUpToDateRadios() {
  const { student, updateStudent } = useStudentContext();

  const onChange = (value: string) =>
    updateStudent({ ...student, tuition_fees_up_to_date: Number(value) });

  return (
    <FormControl>
      <FormLabel>Mensalidade em dia</FormLabel>
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
