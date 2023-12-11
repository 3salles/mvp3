import { ReactNode, useCallback, useMemo, useState } from "react";
import { IStudent } from "../types/student.types";
import api from "../services/api";
import StudentContext from "./studentContext";
import defaultStudent from "./defaultStudent";

export const StudentProvider = ({ children }: { children: ReactNode }) => {
  const [student, setStudent] = useState<IStudent>(defaultStudent);
  const [studentCreated, setStudentCreated] = useState(false);

  const createStudent = useCallback(async (newStudent: IStudent) => {
    const { outcome, ...postStudent } = newStudent;

    console.log(">>> ", outcome);
    const response = await api.post(`/student/{name}`, {
      ...postStudent,
    });

    setStudent(response.data.data);
    setStudentCreated(true);
  }, []);

  const updateStudent = useCallback(
    async (studentUpdated: IStudent) => {
      setStudent(studentUpdated);

      if (studentCreated) {
        setStudentCreated(false);
      }
    },
    [studentCreated]
  );

  const contextValue = useMemo(
    () => ({
      student,
      studentCreated,
      createStudent,
      updateStudent,
    }),
    [student, studentCreated, createStudent, updateStudent]
  );

  return (
    <StudentContext.Provider value={contextValue}>
      {children}
    </StudentContext.Provider>
  );
};
