from sqlalchemy import Column, String, Integer, Float
from extensions.database import database


class StudentModel(database.Model):
  __tablename__ = 'students'

  id = Column(Integer, primary_key=True)
  name = Column("Name", String(50))
  marital_status = Column('Marital Status', Integer)
  application_mode = Column('Application Mode', Integer)
  application_order = Column('Application Order', Integer)
  course = Column('Course', Integer)
  daytime_evening_attendance = Column('Daytime/evening attendance', Integer)
  previous_qualification = Column('Previous Qualification', Integer)
  previous_qualification_grade = Column(
      'Previous qualification (grade)', Float)
  nacionality = Column('Nationality', Integer)
  mother_qualification = Column("Mother's Qualification", Integer)
  father_qualification = Column("Father's Qualification", Integer)
  mother_occupation = Column("Mother's Occupation", Integer)
  father_occupation = Column("Father's Occupation", Integer)
  admission_grade = Column('Admission grade', Float)
  displaced = Column('Displaced', Integer)
  educational_special_needs = Column('Educational special needs', Integer)
  debtor = Column('Debtor', Integer)
  tuition_fees_up_to_date = Column('Tuition fees up to date', Integer)
  gender = Column('Gender', Integer)
  scholarship_holder = Column('Scholarship holder', Integer)
  age_at_enrollment = Column('Age at enrollment', Integer)
  international = Column('International', Integer)
  curricular_units_1st_sem_grade = Column(
      'Curricular units 1st sem (grade)', Float)
  curricular_units_2nd_sem_grade = Column(
      'Curricular units 2nd sem (grade)', Float)
  unemployment_rate = Column('Unemployment rate', Float)
  inflation_rate = Column('Inflation rate', Float)
  outcome = Column('Status', Integer)

  def __init__(self, name: str, 
               marital_status: int,
               application_mode: int,
               application_order: int,
               course: int,
               daytime_evening_attendance: int,
               previous_qualification: int,
               previous_qualification_grade: float,
               nacionality: int,
               mother_qualification: int,
               father_qualification: int,
               mother_occupation: int,
               father_occupation: int,
               admission_grade: float,
               displaced: int,
               educational_special_needs: int,
               debtor: int,
               tuition_fees_up_to_date: int,
               gender: int,
               scholarship_holder: int,
               age_at_enrollment: int,
               international: int,
               curricular_units_1st_sem_grade: float,
               curricular_units_2nd_sem_grade: float,
               unemployment_rate: float,
               inflation_rate: float,
               outcome: int
               ):

    self.name = name
    self.marital_status = marital_status
    self.application_mode = application_mode
    self.application_order = application_order
    self.course = course
    self.daytime_evening_attendance = daytime_evening_attendance
    self.previous_qualification = previous_qualification
    self.previous_qualification_grade = previous_qualification_grade
    self.nacionality = nacionality
    self.mother_qualification = mother_qualification
    self.father_qualification = father_qualification
    self.mother_occupation = mother_occupation
    self.father_occupation = father_occupation
    self.admission_grade = admission_grade
    self.displaced = displaced
    self.educational_special_needs = educational_special_needs
    self.debtor = debtor
    self.tuition_fees_up_to_date = tuition_fees_up_to_date
    self.gender = gender
    self.scholarship_holder = scholarship_holder
    self.age_at_enrollment = age_at_enrollment
    self.international = international
    self.curricular_units_1st_sem_grade = curricular_units_1st_sem_grade
    self.curricular_units_2nd_sem_grade = curricular_units_2nd_sem_grade
    self.unemployment_rate = unemployment_rate
    self.inflation_rate = inflation_rate
    self.outcome = outcome


  def to_json(self):
    return {
        'id': self.id,
        'name': self.name,
        'marital_status': self.marital_status,
        'application_mode': self.application_mode,
        'application_order': self.application_order,
        'course': self.course,
        'daytime_evening_attendance': self.daytime_evening_attendance,
        'previous_qualification': self.previous_qualification,
        'previous_qualification_grade': self.previous_qualification_grade,
        'nacionality': self.nacionality,
        "mother_qualification": self.mother_qualification,
        "father_qualification": self.father_qualification,
        "mother_occupation": self.mother_occupation,
        "father_occupation": self.father_occupation,
        'admission_grade': self.admission_grade,
        'displaced': self.displaced,
        'educational_special_needs': self.educational_special_needs,
        'debtor': self.debtor,
        'tuition_fees_up_to_date': self.tuition_fees_up_to_date,
        'gender': self.gender,
        'scholarship_holder': self.scholarship_holder,
        'age_at_enrollment': self.age_at_enrollment,
        'international': self.international,
        'curricular_units_1st_sem_grade': self.curricular_units_1st_sem_grade,
        'curricular_units_2nd_sem_grade': self.curricular_units_2nd_sem_grade,
        'unemployment_rate': self.unemployment_rate,
        'inflation_rate': self.inflation_rate,
        'outcome': self.outcome,
    }

  @classmethod
  def find_student(cls, name):
      student = cls.query.filter_by(uid=name).first()

      if student:
          return student
      return None

  def save_student(self):
      database.session.add(self)
      database.session.commit()

  def delete_student(self):
      database.session.delete(self)
      database.session.commit()
