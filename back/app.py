from flask_openapi3 import OpenAPI, Info, Tag
from flask import redirect
from flask_cors import CORS
from model.student import StudentModel
from model.model import Model
from schemas.error import ErrorSchema
from schemas.student import StudentSchema,  ListStudentsSchema, AddStudentSchema
from extensions.database import database
from flask_restful import Api
from resources.student import Students, Student
from logger import logger

info = Info(title="Student Perfomance", version="1.0.0")
app = OpenAPI(__name__, info=info)
api = Api(app)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///students.db'
app.config['SQLACHEMY_TRACK_MODIFICATIONS'] = False

api.add_resource(Students, '/students')
api.add_resource(Student, '/student/<string:name>')

database.init_app(app)

with app.app_context():
    database.create_all()

home_tag = Tag(name="Documentation",
               description="Select docs: Swagger, Redoc or RapiDoc")
student_tag = Tag(
    name="Student", description="Create, list, delete and predict student's academic status")


@app.get('/', tags=[home_tag])
def home():
    return redirect('/openapi')


@app.get('/students', tags=[student_tag],
         responses={"200": ListStudentsSchema, "404": ErrorSchema, "204": ErrorSchema})
def get_students():
    logger.debug('Fetching students')


@app.post('/student/{name}', tags=[student_tag],
          responses={"200": StudentSchema, "400": ErrorSchema, "409": ErrorSchema})
def add_student( form: AddStudentSchema):
    ml_path = 'ml_model/data_lr.pkl'
    model = Model.load_model(ml_path)

    student = StudentModel(
        name=form.name,
        marital_status=form.marital_status,
        application_mode=form.application_mode,
        application_order=form.application_order,
        course=form.course,
        daytime_evening_attendance=form.daytime_evening_attendance,
        previous_qualification=form.previous_qualification,
        previous_qualification_grade=form.previous_qualification_grade,
        nacionality=form.nacionality,
        mother_qualification=form.mother_qualification,
        father_qualification=form.father_qualification,
        mother_occupation=form.mother_occupation,
        father_occupation=form.father_occupation,
        admission_grade=form.admission_grade,
        displaced=form.displaced,
        educational_special_needs=form.educational_special_needs,
        debtor=form.debtor,
        tuition_fees_up_to_date=form.tuition_fees_up_to_date,
        gender=form.gender,
        scholarship_holder=form.scholarship_holder,
        age_at_enrollment=form.age_at_enrollment,
        international=form.international,
        curricular_units_1st_sem_grade=form.curricular_units_1st_sem_grade,
        curricular_units_2nd_sem_grade=form.curricular_units_2nd_sem_grade,
        unemployment_rate=form.unemployment_rate,
        inflation_rate=form.inflation_rate,
        outcome=Model.preditor(model, form)
    )
    
    student.save_student()
    return {'message': f"Student '{student.name}' created"}, 200


@app.get('/student', tags=[student_tag],
         responses={"200": StudentSchema, "404": ErrorSchema})
def get_student(name: str):
    logger.debug(f"Searching for student {name}.")


@app.delete('/student/{name}', tags=[student_tag], responses={'200': StudentSchema, '404': ErrorSchema, '400': ErrorSchema})
def delete_student(name:str):
    logger.debug(f"Student '{name}' deleted")


if __name__ == '__main__':
    
    app.run( host='0.0.0.0', port=5001)