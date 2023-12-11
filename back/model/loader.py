import pandas as pd


class Loader:
  def load_data(self, url: str, columns: list):
    return pd.read_csv(url, names=columns, delimiter=',', skiprows=1)
