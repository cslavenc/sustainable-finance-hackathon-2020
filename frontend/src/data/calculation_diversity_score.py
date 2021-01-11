# -*- coding: utf-8 -*-
"""
Created on Sat Nov 14 10:40:42 2020

@author: slaven
"""
# compare scores
import numpy as np
import pandas as pd

# import data
diversity = pd.read_csv('mock_diversity_data_scores.csv')
diversityData = diversity.values
diversityHeader = pd.read_csv('mock_diversity_data_scores.csv', nrows=1).columns

# calculate mean of diversity score of all companys
mean = np.mean(diversityData[:,7])

# find out which company is under or above average & differences
def compare(data, mean):
    temp=[]
    diff=[]
    for i in range(len(data)):
        if data[i] > mean:
            temp.append("yes")
            diff.append(data[i]-mean)
        else:
            temp.append("no")
            diff.append(mean-data[i])
    return temp, diff

decision, differences = compare(diversityData[:,-1], mean)

# Add decision to diversity
diversityWithDecision = np.column_stack((diversityData, decision, differences))
diversityHeader_ = list(diversityHeader)
diversityHeader_.append('Decision')
diversityHeader_.append('Difference')

# export data
pd.DataFrame(diversityWithDecision).to_csv('mock_diversity_data_decision.csv', index=False, header=diversityHeader_)



