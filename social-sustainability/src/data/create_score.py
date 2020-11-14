# -*- coding: utf-8 -*-
"""
Created on Fri Nov 13 23:11:32 2020

@author: slaven, luca
"""

# generate a score
import numpy as np
import pandas as pd

import sys
print(sys.version)

# import data
diversity = pd.read_csv('mock_diversity_data.csv')

# extract data 
diversityData = diversity.values
diversityHeader = pd.read_csv('mock_diversity_data.csv', nrows=1).columns

# allocate data space
z,s = np.shape(diversity)

# calculate score


# create new column


# export data

