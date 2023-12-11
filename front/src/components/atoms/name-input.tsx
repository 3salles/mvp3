import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import useStudentContext from "../../hooks/useStudentContext";
import { ChangeEvent } from "react";

export default function NameInput() {
  const { student, updateStudent } = useStudentContext();

  const onNameChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;

    updateStudent({ ...student, name: value });
  };

  return (
    <FormControl>
      <FormLabel>Nome</FormLabel>
      <Input
        type="text"
        borderColor="black"
        value={student?.name ?? ""}
        onChange={onNameChange}
      />
    </FormControl>
  );
}
