import { createContext } from "react";
import { IStudentContext } from "../types/student.types";

const StudentContext = createContext({} as IStudentContext);

export default StudentContext;
