from sklearn.model_selection import train_test_split


class PreProcessor:
  def pre_process(self, dataset, test_percentual, seed=7):
    X_train, X_test, Y_train, Y_test = self.__prepare_holdout(
        dataset, test_percentual, seed)
    
    return (X_train, X_test, Y_train, Y_test)
  
  def __prepare_holdout(self, dataset, test_percentual, seed):
    data = dataset.values
    X = data[:, 0:-1]
    Y = data[:, -1]

    return train_test_split(X, Y, test_size=test_percentual, random_state=seed)
