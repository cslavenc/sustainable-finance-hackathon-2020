# -*- coding: utf-8 -*-
"""
Created on Fri Nov 13 22:11:43 2020

@author: slaven
"""
# Hackathon sustainable finance hackathon 2020
# generate some values for the proportions of women in the executive board
import numpy as np
import pandas as pd


# import data
diversity = pd.read_csv('diversity_data.csv')
diversityData = diversity.values
diversityHeader = pd.read_csv('diversity_data.csv', nrows=1).columns
sectorDistribution = pd.read_csv('sector_diversity.csv').values

# extract data
sectors = sectorDistribution[:,0]
means = sectorDistribution[:,1]
sd = sectorDistribution[:,2]

numBoardLevels = 4

# generate mock data
for i in range(np.shape(diversityData)[0]):
    for j in range(len(sectors)):
        if sectors[j] == diversityData[i,2]:
            for k in range(3,numBoardLevels+3):
                temp = np.random.normal(means[j], sd[j])
                if temp >= 0:
                    diversityData[i,k] = temp
                else:
                    diversityData[i,k] = temp *-1

# export data
pd.DataFrame(diversityData).to_csv('mock_diversity_data.csv', index=False, header=diversityHeader)


