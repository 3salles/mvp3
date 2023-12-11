export interface IStudent {
  admission_grade: number;
  age_at_enrollment: number;
  application_mode: number;
  application_order: number;
  course: number;
  curricular_units_1st_sem_grade: number;
  curricular_units_2nd_sem_grade: number;
  daytime_evening_attendance: number;
  debtor: number;
  displaced: number;
  educational_special_needs: number;
  father_occupation: number;
  father_qualification: number;
  gender: number;
  inflation_rate: number;
  international: number;
  marital_status: number;
  mother_occupation: number;
  mother_qualification: number;
  nacionality: number;
  name: string;
  outcome: number;
  previous_qualification: number;
  previous_qualification_grade: number;
  scholarship_holder: number;
  tuition_fees_up_to_date: number;
  unemployment_rate: number;
}

export interface IStudentContext {
  student: IStudent,
  createStudent: (student: IStudent) => void;
  updateStudent: (student:IStudent) => void;
}
