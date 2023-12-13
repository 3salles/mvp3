import warnings
from model.loader import Loader
from model.model import Model
from model.evaluator import Evaluator

warnings.filterwarnings("ignore", category=UserWarning)

loader = Loader()
model = Model()
evaluator = Evaluator()
 
url = "database/dataset_test.csv"
colunas = [
    'marital_status',
    'application_mode',
    'application_order',
    'course',
    'daytime_evening_attendance',
    'previous_qualification',
    'previous_qualification_grade',
    'nacionality',
    "mother_qualification",
    "father_qualification",
    "mother_occupation",
    "father_occupation",
    'admission_grade',
    'displaced',
    'educational_special_needs',
    'debtor',
    'tuition_fees_up_to_date',
    'gender',
    'scholarship_holder',
    'age_at_enrollment',
    'international',
    'curricular_units_1st_sem_grade',
    'curricular_units_2nd_sem_grade',
    'unemployment_rate',
    'inflation_rate',
    'class'
]

dataset = loader.load_data(url, colunas)

X = dataset.iloc[:, 0:-1]
Y = dataset.iloc[:, -1]
    

def test_modelo_lr():  
    lr_path = 'ml_model/data_lr.pkl'
    lr_model = model.load_model(lr_path)

    acuracia_lr, recall_lr, precisao_lr, f1_lr = evaluator.to_evaluate(lr_model, X, Y)
    
    assert acuracia_lr >= 0.7
    assert recall_lr >= 0.5 
    assert precisao_lr >= 0.5 
    assert f1_lr >= 0.5 
 
def test_modelo_knn():
    knn_path = 'ml_model/data_knn.pkl'
    modelo_knn = model.load_model(knn_path)

    acuracia_knn, recall_knn, precisao_knn, f1_knn = evaluator.to_evaluate(modelo_knn, X, Y)

    assert acuracia_knn >= 0.7
    assert recall_knn >= 0.5 
    assert precisao_knn >= 0.5 
    assert f1_knn >= 0.5 
    
