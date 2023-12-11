import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import useStudentContext from "../../hooks/useStudentContext";
import { ChangeEvent } from "react";

const options = [
  { value: 1, label: "1ª fase - contingente geral" },
  { value: 2, label: "Ordem No. 612/93" },
  { value: 5, label: "1ª fase - contingente especial (Ilha dos Açores)" },
  { value: 7, label: "Detentores de outros cursos superiores" },
  { value: 10, label: "Ordem No. 854-B/99" },
  { value: 15, label: "Estudante internacional (bacharelado)" },
  { value: 16, label: "1ª fase - contingente especial (Ilha da Madeira)" },
  { value: 17, label: "2ª fase - contingente geral" },
  { value: 18, label: "3ª fase - contingente geral" },
  { value: 26, label: "Ordem No. 533-A/99, item b2) (Plano Diferenciado)" },
  { value: 27, label: "Ordem No. 533-A/99, item b3 (Outra Instituição)" },
  { value: 39, label: "Mais de 23 anos" },
  { value: 42, label: "Transferência" },
  { value: 43, label: "Mudança de curso" },
  { value: 44, label: "Detentores de diploma de especialização tecnológica" },
  { value: 51, label: "Mudança de instituição/curso" },
  { value: 53, label: "Detentores de diploma de ciclo curto" },
  { value: 57, label: "Mudança de instituição/curso (Internacional)" },
];

export default function ApplicationModeSelect() {
  const { student, updateStudent } = useStudentContext();

  const onChange = (evt: ChangeEvent<HTMLSelectElement>) =>
    updateStudent({ ...student, application_mode: Number(evt.target.value) });

  return (
    <FormControl>
      <FormLabel>Modo de Aplicação</FormLabel>
      <Select
        borderColor="black"
        placeholder="Selecione um modo de aplicação"
        onChange={onChange}
      >
        {options.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </Select>
    </FormControl>
  );
}
