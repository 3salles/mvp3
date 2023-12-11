import { Button, Text } from "@chakra-ui/react";
import useStudentContext from "../../hooks/useStudentContext";

export default function ResultStatus() {
  const { student } = useStudentContext();

  const getStudentStatus = () => {
    switch (student.outcome) {
      case 1:
        return "Graduado";
      case 2:
        return "Matriculado";
      default:
        return "Abandonou";
    }
  };

  const handleNewRegister = () => location.reload();

  return (
    <>
      <Text mt="10" fontSize="2xl">
        Status do Estudante:
        <Text as="span" ml="2">
          {getStudentStatus()}
        </Text>
      </Text>
      <Button
        type="button"
        justifyContent="center"
        mt="12"
        bg="teal"
        h="48px"
        p="6"
        color="white"
        textTransform="uppercase"
        fontWeight="bold"
        _hover={{ bg: "teal.400" }}
        onClick={handleNewRegister}
      >
        Novo cadastro
      </Button>
    </>
  );
}
