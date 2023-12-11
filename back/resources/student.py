from flask_restful import Resource, reqparse
from model.student import StudentModel

class Students(Resource):
    def get(self):
        return {'students': [student.to_json() for student in StudentModel.query.all()]}
    
class Student(Resource):
    properties = reqparse.RequestParser()
    properties.add_argument('name')
    properties.add_argument('marital_status')
    properties.add_argument('application_mode')
    properties.add_argument('application_order')
    properties.add_argument('course')
    properties.add_argument('daytime_evening_attendance')
    properties.add_argument('previous_qualification')
    properties.add_argument('previous_qualification_grade')
    properties.add_argument('nacionality')
    properties.add_argument('mother_qualification')
    properties.add_argument('father_qualification')
    properties.add_argument('mother_occupation')
    properties.add_argument('father_occupation')
    properties.add_argument('admission_grade')
    properties.add_argument('displaced')
    properties.add_argument('educational_special_needs')
    properties.add_argument('debtor')
    properties.add_argument('tuition_fees_up_to_date')
    properties.add_argument('gender')
    properties.add_argument('scholarship_holder')
    properties.add_argument('age_at_enrollment')
    properties.add_argument('international')
    properties.add_argument('curricular_units_1st_sem_grade')
    properties.add_argument('curricular_units_2nd_sem_grade')
    properties.add_argument('unemployment_rate')
    properties.add_argument('inflation_rate')

    def get(self, uid):
        student = StudentModel.find_transaction(uid)

        if student:
            return student.to_json()
        return {'message': 'Student not found'}, 404
    
    def post(self):
        data = Student.properties.parse_args()
        new_student = StudentModel(**data)
        
        try:
            new_student.save_student()
        except:
            return {'message': 'An internal error ocurred trying to save student.'}, 500
        return new_student.to_json()
    
    def delete(self, name):
        student = StudentModel.find_student(name)

        if student:
            try:
                student.delete_student()
            except:
                return {'message: ', 'An internal error ocurred trying to delete student.'}, 500
            return {'message': 'Student deleted'}
        
        return {'message': 'Student not found.'}, 404