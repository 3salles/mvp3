import pandas as pd
import pickle
import joblib
from sklearn.linear_model import LogisticRegression
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import train_test_split

url = 'https://raw.githubusercontent.com/3salles/mvp3/main/new_data.csv'

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
    'target'
]

dataset = pd.read_csv(url, names=colunas, skiprows=1)

array = dataset.values

X = array[:, 0:-1]
Y = array[:, -1]
X_train, X_test, Y_train, Y_test = train_test_split(
    X, Y, test_size=0.33, random_state=7)

modelo = LogisticRegression(solver='liblinear')
modelo_knn = KNeighborsClassifier(metric='manhattan', n_neighbors=19)
modelo_nome = 'data_lr'
modelo_knn_nome = 'data_knn'


modelo.fit(X_train, Y_train)
modelo_knn.fit(X_train, Y_train)

artifact_pkl_filename = modelo_knn_nome + '.pkl'

pkl_local_path = './ml_model/'+artifact_pkl_filename

with open(pkl_local_path, 'wb') as model_file:
  pickle.dump(modelo_knn, model_file)

artifact_joblib_filename = modelo_knn_nome + '.joblib'
joblib_local_path = './ml_model/'+artifact_joblib_filename
joblib.dump(modelo_knn, joblib_local_path)

load_pkl_model = pickle.load(open(pkl_local_path, 'rb'))

load_joblib_model = joblib.load(joblib_local_path)

pkl_result = load_pkl_model.score(X_test, Y_test)
print('Pickle: ', pkl_result)

joblib_result = load_joblib_model.score(X_test, Y_test)
print('Joblib: ', joblib_result)
