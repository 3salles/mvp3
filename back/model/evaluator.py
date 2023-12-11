from sklearn.metrics import accuracy_score, recall_score, precision_score, f1_score


class Evaluator:
  def to_evaluate(self, model, X_test, Y_test):
    predictions = model.predict(X_test)

    return (accuracy_score(Y_test, predictions),
            recall_score(Y_test, predictions),
            precision_score(Y_test, predictions),
            f1_score(Y_test, predictions))
