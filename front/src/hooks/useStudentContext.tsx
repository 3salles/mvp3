import { useContext } from "react";
import StudentContext from "../context/studentContext";

const useStudentContext = () => useContext(StudentContext);

export default useStudentContext;
