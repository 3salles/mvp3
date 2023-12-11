import { FormControl, FormLabel, Select } from "@chakra-ui/react";

const options = [
  { value: 33, label: "Tecnologias de Produção de Biocombustíveis" },
  { value: 171, label: "Animação e Design Multimídia" },
  { value: 8014, label: "Serviço Social (turno noturno)" },
  { value: 9003, label: "Agronomia" },
  { value: 9070, label: "Design de Comunicação" },
  { value: 9085, label: "Enfermagem Veterinária" },
  { value: 9119, label: "Engenharia Informática" },
  { value: 9130, label: "Equinocultura" },
  { value: 9147, label: "Gestão" },
  { value: 9238, label: "Serviço Social" },
  { value: 9254, label: "Turismo" },
  { value: 9500, label: "Enfermagem" },
  { value: 9556, label: "Higiene Oral" },
  { value: 9670, label: "Gestão de Publicidade e Marketing" },
  { value: 9773, label: "Jornalismo e Comunicação" },
  { value: 9853, label: "Educação Básica" },
  { value: 9991, label: "Gestão (turno noturno)" },
];

export default function CourseSelect() {
  return (
    <FormControl>
      <FormLabel>Curso</FormLabel>
      <Select borderColor="black" placeholder="Selecione um curso">
        {options.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </Select>
    </FormControl>
  );
}
