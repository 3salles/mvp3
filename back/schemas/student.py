from typing import List
from model.student import StudentModel
from pydantic import BaseModel


class StudentSchema(BaseModel):
   name: str = 'John Doe'
   marital_status: int = 1  # Solteiro
   application_mode: int = 15  # Estduante Internacional
   application_order: int = 1  # Segunda opcao de curso
   course: int = 171  # Animação e Design Multimídia
   daytime_evening_attendance: int = 0  # Diurno
   previous_qualification: int = 1  # Ensino Secundário
   previous_qualification_grade: float = 112.5
   nacionality: int = 41  # Brasileiro
   mother_qualification: int = 2  # Ensino Superior - Licenciatura
   father_qualification: int = 34  # Desconhecido
   mother_occupation: int = 123  # Professora
   father_occupation: int = 99  # em branco
   admission_grade: float = 123.4
   displaced: int = 0  # Não
   educational_special_needs: int = 0  # Não
   debtor: int = 0  # Não
   tuition_fees_up_to_date: int = 1  # Não
   gender: int = 1  # Masculino
   scholarship_holder: int = 1  # Sim
   age_at_enrollment: int = 19
   international: int = 1  # Sim
   curricular_units_1st_sem_grade: float = 102.5
   curricular_units_2nd_sem_grade: float = 0
   unemployment_rate: float = 6.1
   inflation_rate: float = 1.6
   outcome: int = 1 # Graduado

class ListStudentsSchema(BaseModel):
    students:List[StudentSchema]

    def list_transactions(students: List[StudentModel]):
      result = []
      for transaction in students:
        result.append(**transaction)
      return {'students': result}

class AddStudentSchema(BaseModel):
   name: str = 'John Doe'
   marital_status: int = 1  # Solteiro
   application_mode: int = 15  # Estduante Internacional
   application_order: int = 1  # Segunda opcao de curso
   course: int = 171  # Animação e Design Multimídia
   daytime_evening_attendance: int = 0  # Diurno
   previous_qualification: int = 1  # Ensino Secundário
   previous_qualification_grade: float = 112.5
   nacionality: int = 41  # Brasileiro
   mother_qualification: int = 2  # Ensino Superior - Licenciatura
   father_qualification: int = 34  # Desconhecido
   mother_occupation: int = 123  # Professora
   father_occupation: int = 99  # em branco
   admission_grade: float = 123.4
   displaced: int = 0  # Não
   educational_special_needs: int = 0  # Não
   debtor: int = 0  # Não
   tuition_fees_up_to_date: int = 1  # Não
   gender: int = 1  # Masculino
   scholarship_holder: int = 1  # Sim
   age_at_enrollment: int = 19
   international: int = 1  # Sim
   curricular_units_1st_sem_grade: float = 102.5
   curricular_units_2nd_sem_grade: float = 0
   unemployment_rate: float = 6.1
   inflation_rate: float = 1.6

class DeleteStudentSchema(BaseModel):
   message: str
