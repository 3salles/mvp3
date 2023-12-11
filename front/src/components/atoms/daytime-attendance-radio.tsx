import {
  FormControl,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import useStudentContext from "../../hooks/useStudentContext";

const options = [
  { value: 0, label: "Diurno" },
  { value: 1, label: "Noturno" },
];

export default function DaytimeAttendanceRadios() {
  const { student, updateStudent } = useStudentContext();

  const onChange = (value: string) =>
    updateStudent({ ...student, daytime_evening_attendance: Number(value) });

  return (
    <FormControl>
      <FormLabel>Horário do curso</FormLabel>
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
