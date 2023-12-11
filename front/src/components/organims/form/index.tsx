import { Box, Button, HStack } from "@chakra-ui/react";
import MaritalStatusSelect from "../../atoms/marital-status-select";
import ApplicationModeSelect from "../../atoms/aplication-mode-select";
import CourseSelect from "../../atoms/course-select";
import DaytimeAttendanceRadios from "../../atoms/daytime-attendance-radio";
import NationalitySelect from "../../atoms/nationality-select";
import MotherQualificationSelect from "../../atoms/mother-qualification-select";
import FatherQualificationSelect from "../../atoms/father-qualification-select";
import FatherOccupationSelect from "../../atoms/father-occupation-select";
import MotherOccupationSelect from "../../atoms/mother-occupation-select";
import InternationalRadios from "../../atoms/international-radios";
import GenderRadios from "../../atoms/gender-radios";
import TransferRadios from "../../atoms/transfer-radios";
import PreviousQualificationSelect from "../../atoms/previous-qualification-select";
import SpecialNeedsRadios from "../../atoms/special-needs-radios";
import DebtorRadios from "../../atoms/debtor-radios";
import TuitionFeesUpToDateRadios from "../../atoms/tuition-fees-radios";
import ScholarshipHolderRadios from "../../atoms/scholaship-holder";
import NameInput from "../../atoms/name-input";
import AgeInput from "../../atoms/age-input";
import OrderAdmissionInput from "../../atoms/order-admission-input";
import PreviosQualificationGradeInput from "../../atoms/previsou-qualification-garde";
import AdmissionGrade from "../../atoms/admission-garde";
import CurricularFirstGradeInput from "../../atoms/curricular-first-grade";
import CurricularSecondGradeInput from "../../atoms/curricular-second-grade";
import UnemploymentRateInput from "../../atoms/unemployment-rate-input";
import InflationRateInput from "../../atoms/inflation-rate-input";
import useStudentContext from "../../../hooks/useStudentContext";

export default function Form() {
  const { student } = useStudentContext();
  console.log(">>>> ", student);
  return (
    <Box p="4" as="form" textAlign="center">
      <HStack>
        <NameInput />
        <MaritalStatusSelect />
        <AgeInput />
        <GenderRadios />
      </HStack>
      <HStack mt="4">
        <NationalitySelect />
        <PreviousQualificationSelect />
        <InternationalRadios />
        <TransferRadios />
      </HStack>
      <HStack mt="4">
        <ApplicationModeSelect />
        <OrderAdmissionInput />
        <PreviosQualificationGradeInput />
        <AdmissionGrade />
      </HStack>
      <HStack mt="4">
        <MotherQualificationSelect />
        <MotherOccupationSelect />
        <FatherQualificationSelect />
        <FatherOccupationSelect />
      </HStack>
      <HStack mt="4">
        <CourseSelect />
        <CurricularFirstGradeInput />
        <CurricularSecondGradeInput />
        <DaytimeAttendanceRadios />
      </HStack>
      <HStack mt="4">
        <SpecialNeedsRadios />
        <DebtorRadios />
        <TuitionFeesUpToDateRadios />
        <ScholarshipHolderRadios />
        <UnemploymentRateInput />
        <InflationRateInput />
      </HStack>
      <Button
        type="submit"
        justifyContent="center"
        mt="12"
        bg="teal"
        h="48px"
        w="150px"
        color="white"
        textTransform="uppercase"
        fontWeight="bold"
        _hover={{ bg: "teal.400" }}
      >
        Cadastrar
      </Button>
    </Box>
  );
}
