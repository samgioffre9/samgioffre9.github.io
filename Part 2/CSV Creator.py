# -*- coding: utf-8 -*-
"""
Created on Fri Oct 31 13:24:18 2025

@author: Sam Gioffre
"""

import pandas as pd

df = pd.read_csv("socialMedia.csv")

avgs = df.groupby(["Platform","PostType"], as_index = False)["Likes"].mean()

avgs.columns = ["Platform","PostType","AvgLikes"]

avgs.to_csv('socialMediaAvg.csv', index=False)

time = df.groupby('Date', as_index=False)['Likes'].mean()

time.columns = ['Date', 'AvgLikes']

time.to_csv('socialMediaTime.csv', index=False)