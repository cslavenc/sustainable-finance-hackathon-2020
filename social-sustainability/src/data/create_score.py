# -*- coding: utf-8 -*-
"""
Created on Fri Nov 13 23:11:32 2020

@author: slaven, luca
"""

# generate a score
import numpy as np
import pandas as pd

# import data
diversity = pd.read_csv('mock_diversity_data.csv')

# extract data 
diversityData = diversity.values
diversityHeader = pd.read_csv('mock_diversity_data.csv', nrows=1).columns
print(diversityData)

# allocate data space
z,s = np.shape(diversity)
scores = np.zeros(z)

# calculate score
weights = np.array([1,0.7,0.5,0.3])
vals = np.array(diversity.values[:,3:7])
weightedValues = weights * vals
scores = np.sum(weightedValues, axis=1)

# create new column
diversityWithScores = np.column_stack((diversity, scores))
diversityHeader_ = list(diversityHeader)
diversityHeader = diversityHeader_.append('Score')

# export data
pd.DataFrame(diversityWithScores).to_csv('mock_diversity_data_scores.csv', index=False, header=diversityHeader_)

