import numpy as np
import pickle
import joblib


class Model:
    def load_model(path):
        if path.endswith('.pkl'):
            model = pickle.load(open(path, 'rb'))
        elif path.endswith('.joblib'):
            model = joblib.load(path)
        else:
            raise Exception('Formato de arquivo não suportado')
        return model

    def preditor(model, form):
        X_input = np.array([
                            form.marital_status,
                            form.application_mode,
                            form.application_order,
                            form.course,
                            form.daytime_evening_attendance,
                            form.previous_qualification,
                            form.previous_qualification_grade,
                            form.nacionality,
                            form.mother_qualification,
                            form.father_qualification,
                            form.mother_occupation,
                            form.father_occupation,
                            form.admission_grade,
                            form.displaced,
                            form.educational_special_needs,
                            form.debtor,
                            form.tuition_fees_up_to_date,
                            form.gender,
                            form.scholarship_holder,
                            form.age_at_enrollment,
                            form.international,
                            form.curricular_units_1st_sem_grade,
                            form.curricular_units_2nd_sem_grade,
                            form.unemployment_rate,
                            form.inflation_rate])
    
        diagnosis = model.predict(X_input.reshape(1, -1))
        return int(diagnosis[0])
        
