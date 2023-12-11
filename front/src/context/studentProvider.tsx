import { ReactNode, useCallback, useMemo, useState } from "react";
import { IStudent } from "../types/student.types";
import api from "../services/api";
import StudentContext from "./studentContext";
import defaultStudent from "./defaultStudent";

export const StudentProvider = ({ children }: { children: ReactNode }) => {
  const [student, setStudent] = useState<IStudent>(defaultStudent);

  const createStudent = useCallback(async (newStudent: IStudent) => {
    const { outcome, ...postStudent } = newStudent;

    console.log(">>> ", outcome);
    const response = await api.post(`/student/${newStudent.name}`, {
      ...postStudent,
    });

    setStudent(response.data);
  }, []);

  const updateStudent = useCallback(async (studentUpdated: IStudent) => {
    setStudent(studentUpdated);
  }, []);

  const contextValue = useMemo(
    () => ({
      student,
      createStudent,
      updateStudent,
    }),
    [student, createStudent, updateStudent]
  );

  return (
    <StudentContext.Provider value={contextValue}>
      {children}
    </StudentContext.Provider>
  );
};
